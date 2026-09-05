"use server";

import { redirect } from "next/navigation";

import { supabaseAdmin } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";
import {
  deleteVehicleImage,
  uploadVehicleImage,
} from "@/utils/supabase/vehicle-images";
import {
  parseColors,
  parseLines,
  validateCategory,
  validateImageStyle,
  validateStatus,
  validateVehicleYear,
} from "@/utils/vehicle-validation";

function getString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function getOptionalString(formData: FormData, key: string) {
  const value = getString(formData, key);

  return value || null;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getFiles(formData: FormData, key: string) {
  return formData
    .getAll(key)
    .filter(
      (value): value is File =>
        value instanceof File && value.size > 0
    );
}

function validateImage(file: File) {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
  ];

  const maxSize = 15 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      `${file.name}: unsupported image format.`
    );
  }

  if (file.size > maxSize) {
    throw new Error(
      `${file.name}: image must be smaller than 15MB.`
    );
  }
}

export async function createVehicle(formData: FormData) {
  /*
   * 1. Verify authenticated admin
   */

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in.");
  }

  if (user.app_metadata?.role !== "admin") {
    throw new Error("Administrator access required.");
  }

  /*
   * 2. Read basic information
   */

  const make = getString(formData, "make");

  const model = getString(formData, "model");

  const year = Number(
    getString(formData, "year")
  );

  const trim = getString(formData, "trim");

  const price = getString(formData, "price");

  const description = getString(
    formData,
    "description"
  );

  const category = getOptionalString(
    formData,
    "category"
  );

  const status =
    getString(formData, "status") || "available";

  const imageStyle =
    getString(formData, "image_style") || "photo";

  const featured =
    formData.get("featured") === "on";

  if (
    !make ||
    !model ||
    !year ||
    !trim ||
    !price ||
    !description
  ) {
    throw new Error(
      "Please complete all required vehicle fields."
    );
  }

  /*
   * Server-side validation
   */

  validateVehicleYear(year);
  validateCategory(category);
  validateStatus(status);
  validateImageStyle(imageStyle);

  /*
   * 3. Generate vehicle ID
   */

  const id = slugify(
    `${make}-${model}`
  );

  if (!id) {
    throw new Error(
      "Could not generate a vehicle ID."
    );
  }

  /*
   * 4. Prevent duplicate vehicle IDs
   */

  const { data: existingVehicle } =
    await supabaseAdmin
      .from("vehicles")
      .select("id")
      .eq("id", id)
      .maybeSingle();

  if (existingVehicle) {
    throw new Error(
      `A vehicle with the ID "${id}" already exists.`
    );
  }

  /*
   * 5. Read required images
   */

  const heroFiles = getFiles(
    formData,
    "hero_image"
  );

  const thumbnailFiles = getFiles(
    formData,
    "thumbnail"
  );

  const actionFiles = getFiles(
    formData,
    "action_image"
  );

  const galleryFiles = getFiles(
    formData,
    "gallery_images"
  );

  if (
    heroFiles.length !== 1 ||
    thumbnailFiles.length !== 1 ||
    actionFiles.length !== 1
  ) {
    throw new Error(
      "Hero, thumbnail and action images are required."
    );
  }

  const heroFile = heroFiles[0];
  const thumbnailFile = thumbnailFiles[0];
  const actionFile = actionFiles[0];

  [
    heroFile,
    thumbnailFile,
    actionFile,
    ...galleryFiles,
  ].forEach(validateImage);

  /*
   * 6. Upload images
   */

  const uploadedPaths: string[] = [];

  try {
    const hero = await uploadVehicleImage(
      id,
      heroFile,
      `hero.${getExtension(heroFile)}`
    );

    uploadedPaths.push(hero.path);

    const thumbnail = await uploadVehicleImage(
      id,
      thumbnailFile,
      `thumbnail.${getExtension(
        thumbnailFile
      )}`
    );

    uploadedPaths.push(
      thumbnail.path
    );

    const action = await uploadVehicleImage(
      id,
      actionFile,
      `action.${getExtension(
        actionFile
      )}`
    );

    uploadedPaths.push(
      action.path
    );

    const gallery = [];

    for (
      let index = 0;
      index < galleryFiles.length;
      index++
    ) {
      const file = galleryFiles[index];

      const result =
        await uploadVehicleImage(
          id,
          file,
          `gallery-${String(
            index + 1
          ).padStart(
            2,
            "0"
          )}.${getExtension(file)}`
        );

      uploadedPaths.push(
        result.path
      );

      gallery.push(result);
    }

    /*
     * 7. Technical information
     */

    const specs = {
      engine: getString(
        formData,
        "engine"
      ),

      power: getString(
        formData,
        "power"
      ),

      torque: getString(
        formData,
        "torque"
      ),

      drivetrain: getString(
        formData,
        "drivetrain"
      ),

      transmission: getString(
        formData,
        "transmission"
      ),

      fuelType: getString(
        formData,
        "fuel_type"
      ),
    };

    /*
     * 8. Financing
     */

    const monthly = getString(
      formData,
      "monthly"
    );

    const term = getString(
      formData,
      "term"
    );

    const apr = getString(
      formData,
      "apr"
    );

    const financingEstimate = {
      monthly,
      term,
      apr,
    };

    /*
     * 9. Insert database record
     */

    const { error } =
      await supabaseAdmin
        .from("vehicles")
        .insert({
          id,

          make,
          model,
          year,
          trim,

          description,

          hero_image: hero.url,

          thumbnail:
            thumbnail.url,

          action_image:
            action.url,

          image_style:
            imageStyle,

          engine_spec:
            specs.engine,

          power_spec:
            specs.power,

          colors: parseColors(
            getString(
              formData,
              "colors"
            )
          ),

          features: parseLines(
            getString(
              formData,
              "features"
            )
          ),

          specs,

          history_checklist:
            parseLines(
              getString(
                formData,
                "history"
              )
            ),

          financing_estimate:
            financingEstimate,

          gallery_images:
            gallery.map(
              (image) =>
                image.url
            ),

          price,

          category,

          status,

          featured,
        });

    if (error) {
      throw new Error(
        `Failed to create vehicle: ${error.message}`
      );
    }
  } catch (error) {
    /*
     * 10. Roll back uploaded images
     * if database creation fails.
     */

    if (uploadedPaths.length > 0) {
      for (const path of uploadedPaths) {
        try {
          await deleteVehicleImage(
            path
          );
        } catch (cleanupError) {
          console.error(
            "Failed to clean up uploaded image:",
            cleanupError
          );
        }
      }
    }

    throw error;
  }

  /*
   * 11. Go to the new vehicle
   */

  redirect(
    `/admin/inventory/${id}`
  );
}

function getExtension(file: File) {
  const extension =
    file.name
      .split(".")
      .pop()
      ?.toLowerCase();

  if (extension === "jpeg") {
    return "jpg";
  }

  return extension || "webp";
}