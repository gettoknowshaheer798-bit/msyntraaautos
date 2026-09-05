import type { Vehicle } from "@/types/vehicle";
import { createClient } from "./server";

interface VehicleRow {
  id: string;
  make: string;
  model: string;
  year: number;
  trim: string;
  description: string;

  hero_image: string;
  thumbnail: string;
  action_image: string;
  image_style: string;

  engine_spec: string;
  power_spec: string;

  colors: Vehicle["colors"];
  features: string[];
  gallery_images: string[];

  specs: Vehicle["specs"];
  history_checklist: string[];
  financing_estimate: Vehicle["financingEstimate"];

  price: string;

  category: string | null;
  status: string;
  featured: boolean;
}

function mapVehicle(row: VehicleRow): Vehicle {
  return {
    id: row.id,
    make: row.make,
    model: row.model,
    year: row.year,
    trim: row.trim,
    price: row.price,
    description: row.description,

    heroImage: row.hero_image,
    thumbnail: row.thumbnail,
    actionImage: row.action_image,
    imageStyle: row.image_style,

    engineSpec: row.engine_spec,
    powerSpec: row.power_spec,

    colors: row.colors ?? [],
    features: row.features ?? [],
    galleryImages: row.gallery_images ?? [],

    specs: row.specs ?? undefined,
    historyChecklist: row.history_checklist ?? [],

    financingEstimate:
      row.financing_estimate ?? undefined,

    category: row.category ?? undefined,
    status: row.status,
    featured: row.featured,
  };
}

export async function getVehicles(): Promise<Vehicle[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(
      `Failed to load vehicles: ${error.message}`
    );
  }

  return (data ?? []).map(mapVehicle);
}

export async function getAvailableVehicles(): Promise<Vehicle[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("status", "available")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(
      `Failed to load available vehicles: ${error.message}`
    );
  }

  return (data ?? []).map(mapVehicle);
}

export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("status", "available")
    .eq("featured", true)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(
      `Failed to load featured vehicles: ${error.message}`
    );
  }

  return (data ?? []).map(mapVehicle);
}

export async function getVehicleById(
  id: string
): Promise<Vehicle | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(
      `Failed to load vehicle: ${error.message}`
    );
  }

  if (!data) {
    return null;
  }

  return mapVehicle(data);
}

export async function getVehiclesByCategory(
  category: string
): Promise<Vehicle[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("category", category)
    .eq("status", "available")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(
      `Failed to load vehicles by category: ${error.message}`
    );
  }

  return (data ?? []).map(mapVehicle);
}