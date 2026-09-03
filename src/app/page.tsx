"use client";

import CinematicHero from "@/components/hero/CinematicHero";
import FeaturedInventory from "@/components/sections/FeaturedInventory";
import PlanYourDrive from "@/components/sections/PlanYourDrive";
import ReserveExperience from "@/components/sections/ReserveExperience";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main className="relative w-full bg-[#f4f0eb]">

      {/* ============================================================
          01 / THE ARRIVAL
          ============================================================ */}
      <CinematicHero />

      {/* ============================================================
          02 / THE COLLECTION
          ============================================================ */}
      <FeaturedInventory />

      {/* ============================================================
          03 / THE MSYNTRA STANDARD
          ============================================================ */}
      <WhyUs />

      {/* ============================================================
          04 / MAKE IT YOURS
          ============================================================ */}
      <PlanYourDrive />

      {/* ============================================================
          05 / FINAL DRIVE
          ============================================================ */}
      <ReserveExperience />

    </main>
  );
}