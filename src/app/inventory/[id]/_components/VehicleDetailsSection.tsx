"use client";

import type { Vehicle } from "@/types/vehicle";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Battery,
  Cog,
  Fuel,
  Gauge,
  Zap,
} from "lucide-react";

export default function VehicleDetailsSection({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const shouldReduceMotion = useReducedMotion();

  const specs = vehicle.specs || {
    engine: vehicle.engineSpec || "N/A",
    power: vehicle.powerSpec || "N/A",
    torque: "N/A",
    drivetrain: "N/A",
    transmission: "N/A",
    fuelType: "N/A",
  };

  const specificationRows = [
    {
      label: "ENGINE",
      value: specs.engine,
      icon: Cog,
    },
    {
      label: "POWER",
      value: specs.power,
      icon: Zap,
    },
    {
      label: "TORQUE",
      value: specs.torque,
      icon: Gauge,
    },
    {
      label: "DRIVETRAIN",
      value: specs.drivetrain,
      icon: ArrowRight,
    },
    {
      label: "TRANSMISSION",
      value: specs.transmission,
      icon: Cog,
    },
    {
      label: "FUEL / ENERGY",
      value: specs.fuelType,
      icon: specs.fuelType.toLowerCase().includes("electric")
        ? Battery
        : Fuel,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f0eb] px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        {/* SECTION INTRO */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[9px] font-semibold tracking-[0.35em] text-[#9e6d48]">
                01 / THE MACHINE
              </span>
              <span className="h-px w-10 bg-[#9e6d48]" />
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-light leading-[0.95] tracking-[-0.025em] text-[#0d1c17] md:text-6xl">
              Built for the
              <br />
              <span className="text-[#6f706a]">way forward.</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm font-light leading-8 text-[#5d6863]">
              {vehicle.description}
            </p>

            <div className="mt-10 flex items-center gap-3 text-[9px] font-semibold tracking-[0.25em] text-[#9e6d48] uppercase">
              <span>Explore the specification</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </div>
          </motion.div>

          {/* BIG POWER STATEMENT */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="relative flex min-h-[330px] items-end overflow-hidden bg-[#17251f] p-8 md:p-12 lg:col-span-7"
          >
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#24382f] to-transparent" />

            <div className="relative z-10">
              <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#aebbb5]">
                ENGINE OUTPUT
              </span>

              <div className="font-serif text-[72px] font-light leading-none tracking-[-0.05em] text-[#f1eee7] md:text-[110px]">
                {vehicle.powerSpec.replace(" HP", "")}
              </div>

              <div className="mt-3 text-[10px] tracking-[0.35em] text-[#9e6d48]">
                HORSEPOWER
              </div>
            </div>

            <div className="absolute bottom-8 right-8 text-right md:bottom-12 md:right-12">
              <span className="block text-[8px] tracking-[0.3em] text-white/40">
                POWERTRAIN
              </span>
              <span className="mt-1 block max-w-[180px] text-xs text-white/75">
                {vehicle.engineSpec}
              </span>
            </div>
          </motion.div>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mt-24 border-t border-[#d4cec3] pt-8 md:mt-32">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-[9px] font-semibold tracking-[0.35em] text-[#9e6d48]">
                TECHNICAL DATA
              </span>

              <h3 className="mt-3 font-serif text-3xl font-light text-[#0d1c17] md:text-4xl">
                The numbers behind it.
              </h3>
            </div>

            <span className="hidden text-[9px] tracking-[0.25em] text-[#6f706a] md:block">
              {vehicle.year} / {vehicle.trim}
            </span>
          </div>

          <div className="grid grid-cols-1 border-t border-[#d4cec3] sm:grid-cols-2 lg:grid-cols-3">
            {specificationRows.map((spec, index) => {
              const Icon = spec.icon;

              return (
                <motion.div
                  key={spec.label}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.04,
                  }}
                  className="group border-b border-[#d4cec3] p-7 sm:nth-[2n]:border-l lg:nth-[3n+2]:border-l lg:nth-[3n+3]:border-l"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[8px] font-semibold tracking-[0.3em] text-[#6f706a]">
                      {spec.label}
                    </span>

                    <Icon className="h-3.5 w-3.5 text-[#9e6d48] opacity-70 transition-transform duration-500 group-hover:rotate-12" />
                  </div>

                  <span className="block max-w-[300px] font-serif text-lg font-light leading-snug text-[#0d1c17]">
                    {spec.value}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}