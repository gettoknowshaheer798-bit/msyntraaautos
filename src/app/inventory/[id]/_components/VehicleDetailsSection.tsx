"use client";

import type { Vehicle } from "@/types/vehicle";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Cog, Disc3, Fuel, Gauge, Settings2, Waves } from "lucide-react";
import Link from "next/link";

interface Props {
  vehicle: Vehicle;
}

export default function VehicleDetailsSection({ vehicle }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const specs = vehicle.specs;

  const reveal: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const specRows = [
    { label: "ENGINE", value: specs?.engine ?? vehicle.engineSpec, icon: Cog },
    { label: "POWER", value: specs?.power ?? vehicle.powerSpec, icon: Gauge },
    { label: "TORQUE", value: specs?.torque ?? "See specifications", icon: Waves },
    {
      label: "DRIVETRAIN",
      value: specs?.drivetrain ?? "See specifications",
      icon: Disc3,
    },
    {
      label: "TRANSMISSION",
      value: specs?.transmission ?? "See specifications",
      icon: Settings2,
    },
    { label: "FUEL TYPE", value: specs?.fuelType ?? "Gasoline", icon: Fuel },
  ];

  return (
    <section className="bg-[#f4f0eb] text-[#102019]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* OVERVIEW */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-[10px] tracking-[0.28em] text-[#07130e]">
              OVERVIEW
            </p>

            <h2 className="mt-4 max-w-md text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Power. Presence.
              <br />
              Perfected.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#62645f]">
              {vehicle.description}
            </p>

            <Link
              href="#gallery"
              className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#07130e] transition-colors hover:text-[#102019]"
            >
              View Gallery →
            </Link>
          </motion.div>

          {/* SPECIFICATIONS */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-[10px] tracking-[0.28em] text-[#07130e]">
              SPECIFICATIONS
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {specRows.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#07130e]" strokeWidth={1.4} />
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-[#77766f]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}