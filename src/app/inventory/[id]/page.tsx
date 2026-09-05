import { notFound } from "next/navigation";

import type { Vehicle } from "@/types/vehicle";
import { createClient } from "@/utils/supabase/server";

import VehicleActionFooterSection from "./_components/VehicleActionFooterSection";
import VehicleDetailsSection from "./_components/VehicleDetailsSection";
import VehicleFeaturesHistorySection from "./_components/VehicleFeaturesHistorySection";
import VehicleHeroSection from "./_components/VehicleHeroSection";

interface PageProps {
  params: Promise<{ id: string }>;
}

type SupabaseVehicle = {
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

  specs: Vehicle["specs"];
  history_checklist: string[];

  financing_estimate: Vehicle["financingEstimate"];

  price: string;

  category: string | null;
  status: string;
  featured: boolean;

  created_at?: string;
  updated_at?: string;
};

function mapSupabaseVehicle(
  vehicle: SupabaseVehicle
): Vehicle {
  return {
    id: vehicle.id,

    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    trim: vehicle.trim,

    price: vehicle.price,
    description: vehicle.description,

    heroImage: vehicle.hero_image,
    thumbnail: vehicle.thumbnail,
    actionImage: vehicle.action_image,
    imageStyle: vehicle.image_style,

    engineSpec: vehicle.engine_spec,
    powerSpec: vehicle.power_spec,

    colors: vehicle.colors ?? [],
    features: vehicle.features ?? [],

    specs: vehicle.specs ?? undefined,

    historyChecklist:
      vehicle.history_checklist ?? undefined,

    financingEstimate:
      vehicle.financing_estimate ?? undefined,
  };
}

export default async function VehicleDetailPage({
  params,
}: PageProps) {
  const { id } = await params;

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .eq("status", "available")
    .single();

  if (error || !data) {
    console.error(
      "Failed to load vehicle:",
      error
    );

    notFound();
  }

  const vehicle = mapSupabaseVehicle(
    data as SupabaseVehicle
  );

  return (
    <main className="min-h-screen bg-[#f4f0eb] text-[#0d1c17] font-sans selection:bg-[#9e6d48] selection:text-white">
      <VehicleHeroSection vehicle={vehicle} />

      <VehicleDetailsSection vehicle={vehicle} />

      <VehicleFeaturesHistorySection
        vehicle={vehicle}
      />

      <VehicleActionFooterSection
        vehicle={vehicle}
      />
    </main>
  );
}