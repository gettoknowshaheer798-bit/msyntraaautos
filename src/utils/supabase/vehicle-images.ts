import { supabaseAdmin } from "./admin";

const BUCKET = "vehicle-images";

function normalizeFolderName(vehicleId: string) {
  return vehicleId
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getFileExtension(file: File) {
  const extension = file.name
    .split(".")
    .pop()
    ?.toLowerCase();

  if (extension === "jpeg") {
    return "jpg";
  }

  return extension || "webp";
}

export function getVehicleFolder(
  vehicleId: string
) {
  return normalizeFolderName(vehicleId);
}

export function getStoragePathFromPublicUrl(
  url: string
) {
  const marker =
    `/storage/v1/object/public/${BUCKET}/`;

  const index = url.indexOf(marker);

  if (index === -1) {
    return null;
  }

  return decodeURIComponent(
    url.slice(index + marker.length)
  );
}

export async function uploadVehicleImage(
  vehicleId: string,
  file: File,
  filename?: string
) {
  const folder =
    normalizeFolderName(vehicleId);

  const extension =
    getFileExtension(file);

  const safeFilename =
    filename ??
    `${crypto.randomUUID()}.${extension}`;

  const path =
    `${folder}/${safeFilename}`;

  const arrayBuffer =
    await file.arrayBuffer();

  const { data, error } =
    await supabaseAdmin.storage
      .from(BUCKET)
      .upload(
        path,
        arrayBuffer,
        {
          contentType:
            file.type ||
            "image/webp",
          upsert: false,
        }
      );

  if (error) {
    throw new Error(
      `Failed to upload vehicle image: ${error.message}`
    );
  }

  const {
    data: publicUrlData,
  } =
    supabaseAdmin.storage
      .from(BUCKET)
      .getPublicUrl(
        data.path
      );

  return {
    path: data.path,
    url: publicUrlData.publicUrl,
  };
}

export async function deleteVehicleImage(
  path: string
) {
  const { error } =
    await supabaseAdmin.storage
      .from(BUCKET)
      .remove([path]);

  if (error) {
    throw new Error(
      `Failed to delete vehicle image: ${error.message}`
    );
  }

  return true;
}

export async function listVehicleImages(
  vehicleId: string
) {
  const folder =
    normalizeFolderName(vehicleId);

  const { data, error } =
    await supabaseAdmin.storage
      .from(BUCKET)
      .list(folder, {
        sortBy: {
          column: "name",
          order: "asc",
        },
      });

  if (error) {
    throw new Error(
      `Failed to list vehicle images: ${error.message}`
    );
  }

  return (data ?? []).map(
    (file) => {
      const path =
        `${folder}/${file.name}`;

      const {
        data: publicUrlData,
      } =
        supabaseAdmin.storage
          .from(BUCKET)
          .getPublicUrl(path);

      return {
        name: file.name,
        path,
        url: publicUrlData.publicUrl,
      };
    }
  );
}

export async function deleteVehicleImages(
  vehicleId: string
) {
  const images =
    await listVehicleImages(
      vehicleId
    );

  if (images.length === 0) {
    return true;
  }

  const paths =
    images.map(
      (image) => image.path
    );

  const { error } =
    await supabaseAdmin.storage
      .from(BUCKET)
      .remove(paths);

  if (error) {
    throw new Error(
      `Failed to delete vehicle images: ${error.message}`
    );
  }

  return true;
}