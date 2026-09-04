"use client";

import type { Vehicle } from "@/types/vehicle";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function VehicleFeaturesHistorySection({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const shouldReduceMotion = useReducedMotion();

  const history = vehicle.historyChecklist || [
    "Verified Vehicle Identity",
    "Clean Title",
    "No Reported Major Accidents",
    "Service Records Reviewed",
    "MSyntra Quality Assurance",
  ];

  const features = vehicle.features || [];

  const detailImage =
    vehicle.galleryImages?.[3] ||
    vehicle.galleryImages?.[2] ||
    vehicle.actionImage ||
    vehicle.heroImage;

  return (
    <section className="relative overflow-hidden bg-[#e5ded1] px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        {/* HEADER */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[9px] font-semibold tracking-[0.35em] text-[#9e6d48]">
                02 / THE DETAILS
              </span>

              <span className="h-px w-10 bg-[#9e6d48]" />
            </div>

            <h2 className="max-w-4xl font-serif text-4xl font-light leading-[0.95] tracking-[-0.025em] text-[#0d1c17] md:text-6xl">
              Nothing unnecessary.
              <br />
              <span className="text-[#6f706a]">
                Nothing overlooked.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md text-sm font-light leading-7 text-[#5d6863] lg:col-span-5 lg:justify-self-end"
          >
            Every vehicle entering the MSyntra collection is considered
            for specification, condition, provenance and overall
            suitability.
          </motion.p>
        </div>

        {/* FEATURE IMAGE */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.985 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative mb-20 h-[400px] overflow-hidden md:h-[560px]"
        >
          <Image
            src={detailImage}
            alt={`${vehicle.make} ${vehicle.model}`}
            fill
            className="object-cover transition-transform duration-[1600ms] hover:scale-[1.025]"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07130e]/70 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <span className="mb-3 block text-[8px] font-semibold tracking-[0.35em] text-[#d0b69d]">
              MSYNTRA COLLECTION
            </span>

            <span className="font-serif text-2xl font-light text-white md:text-4xl">
              Considered from every angle.
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* FEATURES */}
          <div className="lg:col-span-7">
            <div className="mb-7 flex items-center justify-between border-b border-[#cfc7ba] pb-5">
              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#0d1c17]">
                SELECTED EQUIPMENT
              </span>

              <span className="text-[9px] tracking-[0.2em] text-[#6f706a]">
                {String(features.length).padStart(2, "0")} ITEMS
              </span>
            </div>

            <div>
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center justify-between border-b border-[#cfc7ba] py-6"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[9px] tracking-wider text-[#9e6d48]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="max-w-xl text-sm font-light text-[#0d1c17] transition-transform duration-500 group-hover:translate-x-1">
                      {feature}
                    </span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-[#9e6d48] opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* PROVENANCE */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-[#17251f] p-8 text-[#e7e3dc] md:p-10 lg:col-span-5"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/5" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/5" />

            <div className="relative z-10">
              <div className="mb-12 flex items-start justify-between">
                <div>
                  <span className="mb-3 block text-[9px] font-semibold tracking-[0.3em] text-[#9e6d48]">
                    PROVENANCE
                  </span>

                  <h3 className="font-serif text-3xl font-light">
                    Vehicle history
                  </h3>
                </div>

                <ShieldCheck className="h-6 w-6 text-[#9e6d48]" />
              </div>

              <div className="space-y-6">
                {history.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#9e6d48]/50">
                      <Check className="h-2.5 w-2.5 text-[#b07d58]" />
                    </div>

                    <div>
                      <span className="mb-1 block text-[8px] tracking-[0.25em] text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-light tracking-wide text-white/80">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#9e6d48]" />

                  <div>
                    <span className="mb-1 block text-[9px] font-semibold tracking-[0.25em] text-white/75">
                      MSYNTRA QUALITY ASSURANCE
                    </span>

                    <p className="text-[10px] leading-6 text-white/40">
                      Vehicle information and condition are reviewed as
                      part of our collection process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}