"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { supabaseAdmin } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

import {
  deleteVehicleImage,
  deleteVehicleImages,
  getStoragePathFromPublicUrl,
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

/* =========================================================
   HELPERS
========================================================= */

function getString(
  formData: FormData,
  key: string
) {
  return String(
    formData.get(key) ?? ""
  ).trim();
}

function getFiles(
  formData: FormData,
  key: string
) {
  return formData
    .getAll(key)
    .filter(
      (value): value is File =>
        value instanceof File &&
        value.size > 0
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

function validateImage(file: File) {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
  ];

  const maxSize =
    15 * 1024 * 1024;

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

function createUniqueFilename(
  prefix: string,
  file: File
) {
  return `${prefix}-${crypto.randomUUID()}.${getExtension(
    file
  )}`;
}

/* =========================================================
   ADMIN AUTHORIZATION
========================================================= */

async function verifyAdmin() {
  const supabase =
    await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error(
      "You must be logged in."
    );
  }

  if (
    user.app_metadata?.role !==
    "admin"
  ) {
    throw new Error(
      "Administrator access required."
    );
  }

  return user;
}

/* =========================================================
   UPDATE VEHICLE
========================================================= */

export async function updateVehicle(
  vehicleId: string,
  formData: FormData
) {
  await verifyAdmin();

  /* -------------------------------------------------------
     Fetch existing vehicle
  ------------------------------------------------------- */

  const {
    data: existing,
    error: fetchError,
  } =
    await supabaseAdmin
      .from("vehicles")
      .select("*")
      .eq("id", vehicleId)
      .single();

  if (
    fetchError ||
    !existing
  ) {
    throw new Error(
      "Vehicle could not be found."
    );
  }

  /* -------------------------------------------------------
     Basic fields
  ------------------------------------------------------- */

  const make = getString(
    formData,
    "make"
  );

  const model = getString(
    formData,
    "model"
  );

  const year = Number(
    getString(formData, "year")
  );

  const trim = getString(
    formData,
    "trim"
  );

  const price = getString(
    formData,
    "price"
  );

  const description =
    getString(
      formData,
      "description"
    );

  const category =
    getString(
      formData,
      "category"
    ) || null;

  const status =
    getString(
      formData,
      "status"
    ) || "available";

  const imageStyle =
    getString(
      formData,
      "image_style"
    ) || "photo";

  const featured =
    formData.get("featured") ===
    "on";

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

  /* -------------------------------------------------------
     Server-side validation
  ------------------------------------------------------- */

  validateVehicleYear(year);
  validateCategory(category);
  validateStatus(status);
  validateImageStyle(imageStyle);

  /* -------------------------------------------------------
     Technical specifications
  ------------------------------------------------------- */

  const engine = getString(
    formData,
    "engine"
  );

  const power = getString(
    formData,
    "power"
  );

  const torque = getString(
    formData,
    "torque"
  );

  const drivetrain =
    getString(
      formData,
      "drivetrain"
    );

  const transmission =
    getString(
      formData,
      "transmission"
    );

  const fuelType =
    getString(
      formData,
      "fuel_type"
    );

  const specs = {
    engine,
    power,
    torque,
    drivetrain,
    transmission,
    fuelType,
  };

  /* -------------------------------------------------------
     Financing
  ------------------------------------------------------- */

  const financingEstimate = {
    monthly: getString(
      formData,
      "monthly"
    ),

    term: getString(
      formData,
      "term"
    ),

    apr: getString(
      formData,
      "apr"
    ),
  };

  /* -------------------------------------------------------
     Storage transaction tracking
  ------------------------------------------------------- */

  const uploadedPaths: string[] = [];

  const oldPathsToDelete: string[] = [];

  let heroImage =
    existing.hero_image;

  let thumbnail =
    existing.thumbnail;

  let actionImage =
    existing.action_image;

  let galleryImages =
    Array.isArray(
      existing.gallery_images
    )
      ? [...existing.gallery_images]
      : [];

  try {
    /* =====================================================
       HERO IMAGE
    ====================================================== */

    const heroFiles =
      getFiles(
        formData,
        "hero_image"
      );

    if (heroFiles.length > 1) {
      throw new Error(
        "Only one hero image can be uploaded."
      );
    }

    if (heroFiles.length === 1) {
      const file =
        heroFiles[0];

      validateImage(file);

      const uploaded =
        await uploadVehicleImage(
          vehicleId,
          file,
          createUniqueFilename(
            "hero",
            file
          )
        );

      uploadedPaths.push(
        uploaded.path
      );

      heroImage =
        uploaded.url;

      const oldPath =
        getStoragePathFromPublicUrl(
          existing.hero_image
        );

      if (oldPath) {
        oldPathsToDelete.push(
          oldPath
        );
      }
    }

    /* =====================================================
       THUMBNAIL
    ====================================================== */

    const thumbnailFiles =
      getFiles(
        formData,
        "thumbnail"
      );

    if (thumbnailFiles.length > 1) {
      throw new Error(
        "Only one thumbnail can be uploaded."
      );
    }

    if (
      thumbnailFiles.length === 1
    ) {
      const file =
        thumbnailFiles[0];

      validateImage(file);

      const uploaded =
        await uploadVehicleImage(
          vehicleId,
          file,
          createUniqueFilename(
            "thumbnail",
            file
          )
        );

      uploadedPaths.push(
        uploaded.path
      );

      thumbnail =
        uploaded.url;

      const oldPath =
        getStoragePathFromPublicUrl(
          existing.thumbnail
        );

      if (oldPath) {
        oldPathsToDelete.push(
          oldPath
        );
      }
    }

    /* =====================================================
       ACTION IMAGE
    ====================================================== */

    const actionFiles =
      getFiles(
        formData,
        "action_image"
      );

    if (actionFiles.length > 1) {
      throw new Error(
        "Only one action image can be uploaded."
      );
    }

    if (actionFiles.length === 1) {
      const file =
        actionFiles[0];

      validateImage(file);

      const uploaded =
        await uploadVehicleImage(
          vehicleId,
          file,
          createUniqueFilename(
            "action",
            file
          )
        );

      uploadedPaths.push(
        uploaded.path
      );

      actionImage =
        uploaded.url;

      const oldPath =
        getStoragePathFromPublicUrl(
          existing.action_image
        );

      if (oldPath) {
        oldPathsToDelete.push(
          oldPath
        );
      }
    }

    /* =====================================================
       GALLERY IMAGES
    ====================================================== */

    const galleryFiles =
      getFiles(
        formData,
        "gallery_images"
      );

    for (
      const file of galleryFiles
    ) {
      validateImage(file);

      const uploaded =
        await uploadVehicleImage(
          vehicleId,
          file,
          createUniqueFilename(
            "gallery",
            file
          )
        );

      uploadedPaths.push(
        uploaded.path
      );

      galleryImages.push(
        uploaded.url
      );
    }

    /* =====================================================
       UPDATE DATABASE
    ====================================================== */

    const {
      error: updateError,
    } =
      await supabaseAdmin
        .from("vehicles")
        .update({
          make,
          model,
          year,
          trim,
          description,

          hero_image:
            heroImage,

          thumbnail:
            thumbnail,

          action_image:
            actionImage,

          image_style:
            imageStyle,

          engine_spec:
            engine,

          power_spec:
            power,

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
            galleryImages,

          price,
          category,
          status,
          featured,

          updated_at:
            new Date().toISOString(),
        })
        .eq("id", vehicleId);

    if (updateError) {
      throw new Error(
        `Failed to update vehicle: ${updateError.message}`
      );
    }

    /* -------------------------------------------------------
       Database succeeded.
       Now remove replaced images.
    ------------------------------------------------------- */

    for (
      const oldPath of oldPathsToDelete
    ) {
      try {
        await deleteVehicleImage(
          oldPath
        );
      } catch (error) {
        console.error(
          "Failed to remove old vehicle image:",
          error
        );
      }
    }
  } catch (error) {
    /* -------------------------------------------------------
       Something failed.

       Remove ONLY newly uploaded files.
       Existing files remain untouched.
    ------------------------------------------------------- */

    for (
      const path of uploadedPaths
    ) {
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

    throw error;
  }

  /* =======================================================
     CACHE INVALIDATION
  ======================================================== */

  revalidatePath(
    "/admin/inventory"
  );

  revalidatePath(
    `/admin/inventory/${vehicleId}`
  );

  revalidatePath(
    "/inventory"
  );

  revalidatePath(
    `/inventory/${vehicleId}`
  );

  /* =======================================================
     REDIRECT
  ======================================================== */

  redirect(
    `/admin/inventory/${vehicleId}`
  );
}

/* =========================================================
   DELETE ONE GALLERY IMAGE
========================================================= */

export async function deleteGalleryImage(
  vehicleId: string,
  imageUrl: string
) {
  await verifyAdmin();

  if (!imageUrl) {
    throw new Error(
      "Gallery image URL is required."
    );
  }

  /* -------------------------------------------------------
     Fetch current gallery
  ------------------------------------------------------- */

  const {
    data: vehicle,
    error: fetchError,
  } =
    await supabaseAdmin
      .from("vehicles")
      .select("gallery_images")
      .eq("id", vehicleId)
      .single();

  if (
    fetchError ||
    !vehicle
  ) {
    throw new Error(
      "Vehicle could not be found."
    );
  }

  const gallery =
    Array.isArray(
      vehicle.gallery_images
    )
      ? vehicle.gallery_images
      : [];

  if (!gallery.includes(imageUrl)) {
    throw new Error(
      "Gallery image could not be found."
    );
  }

  /* -------------------------------------------------------
     Remove URL from database FIRST
  ------------------------------------------------------- */

  const updatedGallery =
    gallery.filter(
      (url: string) =>
        url !== imageUrl
    );

  const {
    error: updateError,
  } =
    await supabaseAdmin
      .from("vehicles")
      .update({
        gallery_images:
          updatedGallery,

        updated_at:
          new Date().toISOString(),
      })
      .eq("id", vehicleId);

  if (updateError) {
    throw new Error(
      `Failed to update gallery: ${updateError.message}`
    );
  }

  /* -------------------------------------------------------
     Remove physical Storage file
  ------------------------------------------------------- */

  const storagePath =
    getStoragePathFromPublicUrl(
      imageUrl
    );

  if (storagePath) {
    try {
      await deleteVehicleImage(
        storagePath
      );
    } catch (error) {
      console.error(
        "Gallery database entry removed but Storage cleanup failed:",
        error
      );
    }
  }

  /* -------------------------------------------------------
     Revalidate
  ------------------------------------------------------- */

  revalidatePath(
    `/admin/inventory/${vehicleId}`
  );

  revalidatePath(
    `/inventory/${vehicleId}`
  );

  revalidatePath(
    "/inventory"
  );
}

/* =========================================================
   DELETE VEHICLE
========================================================= */

export async function deleteVehicle(
  vehicleId: string
) {
  await verifyAdmin();

  if (!vehicleId) {
    throw new Error(
      "Vehicle ID is required."
    );
  }

  /* -------------------------------------------------------
     Confirm vehicle exists
  ------------------------------------------------------- */

  const {
    data: vehicle,
    error: fetchError,
  } =
    await supabaseAdmin
      .from("vehicles")
      .select("id")
      .eq("id", vehicleId)
      .single();

  if (
    fetchError ||
    !vehicle
  ) {
    throw new Error(
      "Vehicle could not be found."
    );
  }

  /* -------------------------------------------------------
     Delete database record
  ------------------------------------------------------- */

  const {
    error: deleteError,
  } =
    await supabaseAdmin
      .from("vehicles")
      .delete()
      .eq("id", vehicleId);

  if (deleteError) {
    throw new Error(
      `Failed to delete vehicle: ${deleteError.message}`
    );
  }

  /* -------------------------------------------------------
     Delete all vehicle Storage files
  ------------------------------------------------------- */

  try {
    await deleteVehicleImages(
      vehicleId
    );
  } catch (error) {
    /*
     * The database record is already gone.
     *
     * Storage cleanup failure means there
     * may be orphaned files, but it cannot
     * leave a broken public vehicle record.
     */

    console.error(
      `Vehicle ${vehicleId} deleted, but Storage cleanup failed:`,
      error
    );
  }

  /* -------------------------------------------------------
     Revalidate
  ------------------------------------------------------- */

  revalidatePath(
    "/admin/inventory"
  );

  revalidatePath(
    "/inventory"
  );

  /* -------------------------------------------------------
     Return to inventory
  ------------------------------------------------------- */

  redirect(
    "/admin/inventory"
  );
}