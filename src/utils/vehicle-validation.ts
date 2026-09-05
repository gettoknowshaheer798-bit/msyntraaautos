const VEHICLE_CATEGORIES = [
  "performance",
  "luxury",
  "suv",
  "electric",
] as const;

const VEHICLE_STATUSES = [
  "available",
  "reserved",
  "sold",
  "coming-soon",
] as const;

const IMAGE_STYLES = [
  "photo",
  "render",
] as const;

export type VehicleCategory =
  (typeof VEHICLE_CATEGORIES)[number];

export type VehicleStatus =
  (typeof VEHICLE_STATUSES)[number];

export type VehicleImageStyle =
  (typeof IMAGE_STYLES)[number];

export function validateVehicleYear(
  year: number
) {
  if (
    !Number.isInteger(year) ||
    year < 1886 ||
    year > 2100
  ) {
    throw new Error(
      "Please enter a valid vehicle year."
    );
  }
}

export function validateCategory(
  category: string | null
) {
  if (
    category &&
    !VEHICLE_CATEGORIES.includes(
      category as VehicleCategory
    )
  ) {
    throw new Error(
      "Invalid vehicle category."
    );
  }
}

export function validateStatus(
  status: string
) {
  if (
    !VEHICLE_STATUSES.includes(
      status as VehicleStatus
    )
  ) {
    throw new Error(
      "Invalid vehicle status."
    );
  }
}

export function validateImageStyle(
  imageStyle: string
) {
  if (
    !IMAGE_STYLES.includes(
      imageStyle as VehicleImageStyle
    )
  ) {
    throw new Error(
      "Invalid image style."
    );
  }
}

export function validateColorHex(
  hex: string
) {
  return /^#[0-9A-Fa-f]{6}$/.test(
    hex
  );
}

export function parseColors(
  value: string
) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separator =
        line.indexOf("|");

      if (separator === -1) {
        throw new Error(
          `Invalid color format: "${line}". Use Name|#HEX.`
        );
      }

      const name = line
        .slice(0, separator)
        .trim();

      const hex = line
        .slice(separator + 1)
        .trim();

      if (!name || !hex) {
        throw new Error(
          `Invalid color: "${line}".`
        );
      }

      if (!validateColorHex(hex)) {
        throw new Error(
          `Invalid HEX color "${hex}". Use a format such as #111111.`
        );
      }

      return {
        name,
        hex: hex.toUpperCase(),
      };
    });
}

export function parseLines(
  value: string
) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}