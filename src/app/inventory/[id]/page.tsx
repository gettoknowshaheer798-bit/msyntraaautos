import { vehicles } from "@/data/vehicles";
import { notFound } from "next/navigation";

import VehicleActionFooterSection from "./_components/VehicleActionFooterSection";
import VehicleDetailsSection from "./_components/VehicleDetailsSection";
import VehicleFeaturesHistorySection from "./_components/VehicleFeaturesHistorySection";
import VehicleHeroSection from "./_components/VehicleHeroSection";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { id } = await params;

  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f0eb] text-[#0d1c17] font-sans selection:bg-[#9e6d48] selection:text-white">
      <VehicleHeroSection vehicle={vehicle} />
      <VehicleDetailsSection vehicle={vehicle} />
      <VehicleFeaturesHistorySection vehicle={vehicle} />
      <VehicleActionFooterSection vehicle={vehicle} />
    </main>
  );
}