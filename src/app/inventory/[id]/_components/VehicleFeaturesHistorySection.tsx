"use client";

import type { Vehicle } from "@/types/vehicle";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Camera,
  Car,
  Check,
  Cog,
  MonitorSmartphone,
  SlidersHorizontal,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  vehicle: Vehicle;
}

const FEATURE_ICONS = [
  Cog,
  Volume2,
  Volume2,
  SlidersHorizontal,
  MonitorSmartphone,
  Camera,
];

const DEFAULT_INSPECTION_ITEMS: string[] = [
  "Multi-Point Inspection Completed",
  "Engine & Transmission Checked",
  "Brake System Verified",
  "Tires & Suspension Inspected",
  "Passed All Quality Standards",
];

export default function VehicleFeaturesHistorySection({
  vehicle,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  const inspectionImage =
    vehicle.galleryImages?.[4] ??
    vehicle.actionImage ??
    vehicle.heroImage;

  const finance = vehicle.financingEstimate;

  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#f4f0eb] text-[#102019]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        {/* =================================================
            FEATURES + VEHICLE HISTORY
        ================================================== */}

        <div className="grid gap-14 border-b border-[#102019]/10 pb-16 lg:grid-cols-2 lg:gap-20">
          {/* FEATURES */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-[10px] tracking-[0.28em] text-[#a8754d]">
              FEATURES
            </p>

            <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-8">
              {(vehicle.features ?? [])
                .slice(0, 6)
                .map((feature: string, index: number) => {
                  const Icon =
                    FEATURE_ICONS[index % FEATURE_ICONS.length];

                  return (
                    <div key={feature} className="text-center">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#102019]/12">
                        <Icon
                          className="h-5 w-5 text-[#102019]/70"
                          strokeWidth={1.3}
                        />
                      </div>

                      <p className="mt-3 text-xs leading-5 text-[#4f514d]">
                        {feature}
                      </p>
                    </div>
                  );
                })}
            </div>
          </motion.div>

          {/* VEHICLE HISTORY */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative text-left lg:ml-80 xl:ml-100"
          >
            <p className="text-[10px] tracking-[0.28em] text-[#a8754d]">
              VEHICLE HISTORY
            </p>

            <div className="mt-6 space-y-4">
              {(vehicle.historyChecklist ?? []).map(
                (item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#a8754d]"
                      strokeWidth={2}
                    />

                    <span className="text-sm text-[#303530]">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* =================================================
            INSPECTION / FINANCING / TRADE-IN
        ================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-10 pt-16 lg:grid-cols-[1fr_1.1fr_0.8fr] lg:gap-8"
        >
          {/* INSPECTION REPORT */}

          <div>
            <p className="text-[10px] tracking-[0.28em] text-[#a8754d]">
              INSPECTION REPORT
            </p>

            <div className="mt-5 space-y-3">
              {DEFAULT_INSPECTION_ITEMS.map(
                (item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#a8754d]"
                      strokeWidth={2}
                    />

                    <span className="text-sm text-[#303530]">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#a8754d] transition-colors hover:text-[#102019]"
            >
              View Full Inspection Report →
            </Link>
          </div>

          {/* INSPECTION IMAGE */}

          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#ddd7cd] lg:aspect-auto">
            <Image
              src={inspectionImage}
              alt={`${vehicle.make} ${vehicle.model} inspection detail`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* FINANCING + TRADE-IN */}

          <div className="space-y-8">
            {/* FINANCING */}

            <div>
              <p className="text-[10px] tracking-[0.28em] text-[#a8754d]">
                FINANCING ESTIMATE
              </p>

              <p className="mt-3 text-3xl font-light tracking-[-0.03em]">
                {finance?.monthly ?? "—"}

                <span className="ml-1 text-xs font-normal text-[#77766f]">
                  /mo*
                </span>
              </p>

              <p className="mt-1 text-xs text-[#77766f]">
                {finance?.term ?? "60 months"} &nbsp;|&nbsp;{" "}
                {finance?.apr ?? "APR varies"}
              </p>

              <Link
                href="/financing"
                className="mt-4 inline-flex items-center gap-2 border border-[#102019]/15 px-4 py-2.5 text-[9px] uppercase tracking-[0.2em] text-[#102019] transition-colors hover:border-[#a8754d] hover:text-[#a8754d]"
              >
                Calculate Your Payment →
              </Link>
            </div>

            {/* TRADE-IN */}

            <div className="border-t border-[#102019]/10 pt-6">
              <p className="text-[10px] tracking-[0.28em] text-[#a8754d]">
                TRADE-IN VALUE
              </p>

              <div className="mt-3 flex items-start gap-3">
                <Car
                  className="h-5 w-5 shrink-0 text-[#a8754d]"
                  strokeWidth={1.3}
                />

                <p className="text-sm leading-6 text-[#4f514d]">
                  Get an instant estimate for your current
                  vehicle.
                </p>
              </div>

              <Link
                href="/trade-in"
                className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#a8754d] transition-colors hover:text-[#102019]"
              >
                Value My Trade →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}