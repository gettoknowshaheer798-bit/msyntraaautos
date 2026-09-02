"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import CinematicHero from "@/components/hero/CinematicHero";
import FeaturedInventory from "@/components/sections/FeaturedInventory";
import PlanYourDrive from "@/components/sections/PlanYourDrive";
import ReserveExperience from "@/components/sections/ReserveExperience";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);

  // Single scroll target for the curtain reveal stage
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end start"],
  });

  // Hero lifts up (-100%) cleanly over the scroll range
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-100%", "-100%"]
  );

  return (
    <main className="relative w-full bg-[#0B0B0C]">
      {/* 
        1. CURTAIN REVEAL STAGE
        250vh scroll area where the hero lifts upward
        and reveals Featured Inventory underneath.
      */}
      <div
        ref={stageRef}
        className="relative h-[250vh] w-full"
      >
        <div className="sticky top-0 h-auto min-h-screen w-full overflow-visible">
          {/* FEATURED INVENTORY (Static background layer) */}
          <div className="relative z-10 min-h-screen w-full">
            <FeaturedInventory />
          </div>

          {/* CINEMATIC HERO (Sliding curtain layer) */}
          <motion.div
            style={{ y: heroY }}
            className="
              fixed
              inset-0
              z-20
              h-screen
              w-full
              shadow-[0_30px_60px_rgba(0,0,0,0.6)]
              will-change-transform
            "
          >
            <CinematicHero />
          </motion.div>
        </div>
      </div>

      {/* 
        2. NATURAL FLOW STACK
      */}
      <div className="relative z-30 w-full bg-background shadow-[0_-30px_60px_rgba(0,0,0,0.1)]">
        <WhyUs />
        <PlanYourDrive />
        <ReserveExperience />
      </div>
    </main>
  );
}