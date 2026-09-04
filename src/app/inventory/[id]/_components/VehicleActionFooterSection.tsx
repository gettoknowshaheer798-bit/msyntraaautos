"use client";

import type { Vehicle } from "@/types/vehicle";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  FileCheck,
  Repeat2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  vehicle: Vehicle;
}

export default function VehicleActionFooterSection({
  vehicle,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  const finalImage =
    vehicle.galleryImages?.[vehicle.galleryImages.length - 1] ??
    vehicle.actionImage ??
    vehicle.heroImage;

  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  const finance = vehicle.financingEstimate;

  return (
    <section className="bg-[#17251f] text-[#f4f0eb]">
      {/* =====================================================
          03 / OWNERSHIP
      ====================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-[10px] tracking-[0.28em] text-[#a8754d]">
              03 / OWNERSHIP
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-5xl font-light leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Make the next move
              <br />
              <span className="text-white/35">
                entirely your own.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* =================================================
            OWNERSHIP OPTIONS
        ================================================== */}

        <div className="mt-20 grid gap-px overflow-hidden bg-white/10 lg:mt-28 lg:grid-cols-3">
          {/* INSPECTION */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="group bg-[#17251f] p-8 sm:p-10 lg:p-12"
          >
            <FileCheck
              size={25}
              strokeWidth={1.1}
              className="text-[#a8754d]"
            />

            <p className="mt-10 text-[10px] tracking-[0.25em] text-white/40">
              INSPECTION
            </p>

            <h3 className="mt-4 text-3xl font-light tracking-[-0.04em]">
              Confidence,
              <br />
              before commitment.
            </h3>

            <p className="mt-6 text-sm leading-6 text-white/50">
              Review the vehicle condition, mechanical inspection and
              documentation before making your decision.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[10px] tracking-[0.2em] transition-colors hover:border-[#a8754d] hover:text-[#a8754d]"
            >
              REQUEST INSPECTION

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
              />
            </Link>
          </motion.div>

          {/* FINANCING */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="bg-[#17251f] p-8 sm:p-10 lg:p-12"
          >
            <Calendar
              size={25}
              strokeWidth={1.1}
              className="text-[#a8754d]"
            />

            <p className="mt-10 text-[10px] tracking-[0.25em] text-white/40">
              FINANCING ESTIMATE
            </p>

            <p className="mt-4 text-4xl font-light tracking-[-0.05em]">
              {finance?.monthly ?? "—"}

              <span className="ml-2 text-sm tracking-normal text-white/35">
                / month
              </span>
            </p>

            <p className="mt-3 text-xs tracking-[0.12em] text-white/40">
              {finance?.term ?? "Contact us"} ·{" "}
              {finance?.apr ?? "APR varies"}
            </p>

            <p className="mt-6 text-sm leading-6 text-white/50">
              A starting estimate based on this vehicle. Final terms depend
              on approval, deposit and selected financing structure.
            </p>

            <Link
              href="/financing"
              className="mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[10px] tracking-[0.2em] transition-colors hover:border-[#a8754d] hover:text-[#a8754d]"
            >
              EXPLORE FINANCING

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
              />
            </Link>
          </motion.div>

          {/* TRADE IN */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="bg-[#17251f] p-8 sm:p-10 lg:p-12"
          >
            <Repeat2
              size={25}
              strokeWidth={1.1}
              className="text-[#a8754d]"
            />

            <p className="mt-10 text-[10px] tracking-[0.25em] text-white/40">
              TRADE-IN
            </p>

            <h3 className="mt-4 text-3xl font-light tracking-[-0.04em]">
              Bring your
              <br />
              current vehicle.
            </h3>

            <p className="mt-6 text-sm leading-6 text-white/50">
              Tell us about your current vehicle and we'll help structure the
              transition into your next one.
            </p>

            <Link
              href="/trade-in"
              className="mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[10px] tracking-[0.2em] transition-colors hover:border-[#a8754d] hover:text-[#a8754d]"
            >
              VALUE MY TRADE

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          FINAL CINEMATIC CTA
      ====================================================== */}

      <div className="relative min-h-[680px] overflow-hidden sm:min-h-[760px]">
        <Image
          src={finalImage}
          alt={`${vehicle.make} ${vehicle.model}`}
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Image treatment */}

        <div className="absolute inset-0 bg-[#07100c]/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-[#07100c]/10 to-[#07100c]/20" />

        {/* CTA */}

        <div className="relative flex min-h-[680px] flex-col justify-end px-5 pb-10 sm:min-h-[760px] sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="max-w-5xl"
          >
            <p className="text-[10px] tracking-[0.3em] text-white/55">
              READY TO EXPERIENCE IT?
            </p>

            <h2 className="mt-5 text-4xl font-light leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Some cars make sense
              <br />
              <span className="text-white/45">
                once you're behind the wheel.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              Arrange a private viewing or test drive for the{" "}
              {vehicle.year} {vehicle.make} {vehicle.model}.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center bg-[#f4f0eb] px-7 text-[10px] font-medium tracking-[0.22em] text-[#102019] transition-colors hover:bg-white"
              >
                BOOK A VIEWING
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center border border-white/30 px-7 text-[10px] font-medium tracking-[0.22em] text-white transition-colors hover:border-white"
              >
                SCHEDULE TEST DRIVE
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}