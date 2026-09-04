"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import type { Vehicle } from "@/types/vehicle";

interface Props {
  vehicle: Vehicle;
}

export default function VehicleFeaturesHistorySection({
  vehicle,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  const detailImage =
    vehicle.galleryImages?.[3] ??
    vehicle.galleryImages?.[2] ??
    vehicle.actionImage ??
    vehicle.heroImage;

  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#f4f0eb] text-[#102019]">
      {/* =====================================================
          CHAPTER INTRO
      ====================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-[10px] tracking-[0.28em] text-[#a8754d]">
              02 / THE DETAILS
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-5xl font-light leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Nothing
              <br />
              unnecessary.
              <br />
              <span className="text-[#77766f]">
                Nothing overlooked.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-[#62645f] sm:text-lg">
              Every vehicle entering the MSyntra collection is considered for
              specification, condition, provenance and overall suitability.
            </p>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          CINEMATIC DETAIL IMAGE
      ====================================================== */}

      <div className="relative mx-auto max-w-[1800px] px-0 sm:px-5 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.985,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative aspect-[4/3] overflow-hidden bg-[#ddd7cd] sm:aspect-[16/8]"
        >
          <Image
            src={detailImage}
            alt={`${vehicle.make} ${vehicle.model} detail`}
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Image contrast */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1915]/60 via-transparent to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1915]/40 via-transparent to-transparent" />

          {/* Editorial copy, positioned away from the bottom edge */}

          <div className="absolute left-5 top-1/2 max-w-xl -translate-y-1/2 sm:left-10 lg:left-14">
            <p className="text-[10px] tracking-[0.3em] text-white/60">
              INSPECTED. CONSIDERED. VERIFIED.
            </p>

            <p className="mt-4 text-3xl font-light leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Considered from
              <br />
              every angle.
            </p>
          </div>

          {/* Image index */}

          <div className="absolute right-5 top-5 sm:right-10 sm:top-10 lg:right-14">
            <span className="text-[10px] tracking-[0.2em] text-white/50">
              MS / 02
            </span>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          EQUIPMENT + PROVENANCE
      ====================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">
          {/* =================================================
              SELECTED EQUIPMENT
          ================================================== */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="flex items-end justify-between border-b border-[#102019]/15 pb-5">
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#a8754d]">
                  SELECTED EQUIPMENT
                </p>

                <h3 className="mt-3 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
                  What it carries.
                </h3>
              </div>

              <span className="text-[10px] tracking-[0.2em] text-[#77766f]">
                {(vehicle.features?.length ?? 0)
                  .toString()
                  .padStart(2, "0")}{" "}
                ITEMS
              </span>
            </div>

            <div>
              {(vehicle.features ?? []).slice(0, 6).map((feature, index) => (
                <div
                  key={feature}
                  className="group flex items-start gap-5 border-b border-[#102019]/10 py-6"
                >
                  <span className="w-5 shrink-0 pt-1 text-[10px] tracking-[0.15em] text-[#a8754d]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <p className="flex-1 text-sm leading-6 text-[#303530]">
                    {feature}
                  </p>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="opacity-30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              PROVENANCE
          ================================================== */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Header */}

            <div className="flex items-end justify-between border-b border-[#102019]/15 pb-5">
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#a8754d]">
                  PROVENANCE
                </p>

                <h3 className="mt-3 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
                  Vehicle history.
                </h3>
              </div>

              <ShieldCheck
                size={21}
                strokeWidth={1.2}
              />
            </div>

            {/* Compact verification statement */}

            <div className="flex items-center gap-5 border-b border-[#102019]/10 py-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#a8754d]/50">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.2}
                  className="text-[#a8754d]"
                />
              </div>

              <div>
                <p className="text-[9px] tracking-[0.25em] text-[#77766f]">
                  MSYNTRA STANDARD
                </p>

                <p className="mt-1 text-base font-medium">
                  Quality Assured
                </p>
              </div>
            </div>

            {/* History checklist */}

            <div>
              {(vehicle.historyChecklist ?? []).map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-[#102019]/10 py-5"
                >
                  <span className="w-5 shrink-0 text-[10px] tracking-[0.15em] text-[#77766f]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <p className="flex-1 text-sm leading-6 text-[#303530]">
                    {item}
                  </p>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#102019]/15">
                    <Check
                      size={12}
                      strokeWidth={1.7}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =================================================
            QUALITY ASSURANCE
        ================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-28 border-t border-[#102019]/15 pt-8 lg:mt-40"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="text-[10px] tracking-[0.25em] text-[#a8754d]">
              MSYNTRA QUALITY ASSURANCE
            </p>

            <p className="max-w-2xl text-lg font-light leading-8 text-[#4f514d] sm:text-2xl">
              Vehicle information and condition are reviewed as part of our
              collection process. We believe transparency should begin before
              the first conversation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}