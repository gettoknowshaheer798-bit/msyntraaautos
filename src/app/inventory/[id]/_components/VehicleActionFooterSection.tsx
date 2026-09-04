"use client";

import type { Vehicle } from "@/types/vehicle";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Phone,
  Repeat2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VehicleActionFooterSection({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const shouldReduceMotion = useReducedMotion();

  const financing = vehicle.financingEstimate || {
    monthly: "Contact us",
    term: "Flexible terms",
    apr: "Competitive APR",
  };

  const vehicleName = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

  const finalImage =
    vehicle.galleryImages?.[vehicle.galleryImages.length - 1] ||
    vehicle.actionImage ||
    vehicle.heroImage;

  return (
    <section className="relative overflow-hidden bg-[#07130e] px-6 pb-12 pt-24 text-[#e7e3dc] md:px-10 md:pb-16 md:pt-32 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        {/* OWNERSHIP HEADER */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[9px] font-semibold tracking-[0.35em] text-[#9e6d48]">
              03 / OWNERSHIP
            </span>

            <span className="h-px w-10 bg-[#9e6d48]" />
          </div>

          <h2 className="max-w-4xl font-serif text-4xl font-light leading-[0.95] tracking-[-0.025em] md:text-6xl">
            Make the next move
            <br />
            <span className="text-white/35">
              entirely your own.
            </span>
          </h2>
        </motion.div>

        {/* OWNERSHIP OPTIONS */}
        <div className="grid grid-cols-1 gap-px bg-[#1c3028] md:grid-cols-3">
          {/* INSPECTION */}
          <div className="group bg-[#0b1b14] p-8 transition-colors duration-500 hover:bg-[#10251c] md:p-10">
            <div className="mb-14 flex items-start justify-between">
              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#9e6d48]">
                INSPECTION
              </span>

              <CheckCircle2 className="h-4 w-4 text-[#9e6d48]" />
            </div>

            <h3 className="mb-4 font-serif text-2xl font-light">
              Confidence,
              <br />
              before commitment.
            </h3>

            <p className="mb-10 text-xs font-light leading-7 text-white/40">
              Review the vehicle condition, mechanical inspection and
              documentation before making your decision.
            </p>

            <Link
              href={`/contact?vehicle=${encodeURIComponent(
                vehicleName
              )}&type=inspection`}
              className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b07d58] transition-colors hover:text-white"
            >
              Request Inspection

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* FINANCING */}
          <div className="group bg-[#0b1b14] p-8 transition-colors duration-500 hover:bg-[#10251c] md:p-10">
            <div className="mb-14 flex items-start justify-between">
              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#9e6d48]">
                FINANCING
              </span>

              <span className="text-[8px] tracking-[0.2em] text-white/30">
                ESTIMATE
              </span>
            </div>

            <div className="mb-2 font-serif text-4xl font-light text-white">
              {financing.monthly}

              <span className="ml-2 font-sans text-xs text-white/35">
                / month
              </span>
            </div>

            <div className="mb-8 text-[9px] tracking-[0.2em] text-white/35">
              {financing.term} · {financing.apr}
            </div>

            <p className="mb-10 text-xs font-light leading-7 text-white/40">
              A starting estimate based on this vehicle. Final terms
              depend on approval, deposit and selected financing
              structure.
            </p>

            <Link
              href={`/financing?vehicle=${encodeURIComponent(
                vehicleName
              )}`}
              className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b07d58] transition-colors hover:text-white"
            >
              Explore Financing

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* TRADE IN */}
          <div className="group bg-[#0b1b14] p-8 transition-colors duration-500 hover:bg-[#10251c] md:p-10">
            <div className="mb-14 flex items-start justify-between">
              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#9e6d48]">
                TRADE-IN
              </span>

              <Repeat2 className="h-4 w-4 text-[#9e6d48]" />
            </div>

            <h3 className="mb-4 font-serif text-2xl font-light">
              Bring your
              <br />
              current vehicle.
            </h3>

            <p className="mb-10 text-xs font-light leading-7 text-white/40">
              Tell us about your current vehicle and we'll help structure
              the transition into your next one.
            </p>

            <Link
              href={`/trade-in?vehicle=${encodeURIComponent(
                vehicleName
              )}`}
              className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b07d58] transition-colors hover:text-white"
            >
              Value My Trade

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* FINAL CINEMATIC CTA */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.985 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative mt-24 min-h-[600px] overflow-hidden md:mt-32 md:min-h-[680px]"
        >
          <Image
            src={finalImage}
            alt={`${vehicle.make} ${vehicle.model}`}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[#07130e]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07130e]/95 via-[#07130e]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07130e]/80 via-transparent to-[#07130e]/20" />

          <div className="relative z-10 flex min-h-[600px] flex-col justify-between p-8 md:min-h-[680px] md:p-14 lg:p-20">
            <div className="flex items-start justify-between">
              <div>
                <span className="mb-4 block text-[9px] font-semibold tracking-[0.35em] text-[#bda68f]">
                  READY TO EXPERIENCE IT?
                </span>

                <span className="text-[8px] tracking-[0.3em] text-white/40">
                  {vehicle.year} / {vehicle.make} / {vehicle.model}
                </span>
              </div>

              <span className="hidden text-[8px] tracking-[0.3em] text-white/35 md:block">
                MSYNTRA / 03
              </span>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h2 className="max-w-4xl font-serif text-5xl font-light leading-[0.9] tracking-[-0.035em] text-white md:text-7xl lg:text-[88px]">
                  Some cars make sense
                  <br />
                  <span className="text-white/40">
                    once you're behind the wheel.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-xs font-light leading-7 text-white/45">
                  Arrange a private viewing or test drive for the{" "}
                  <span className="text-white/75">
                    {vehicleName}
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
                <Link
                  href={`/contact?vehicle=${encodeURIComponent(
                    vehicleName
                  )}&type=viewing`}
                  className="inline-flex items-center justify-center gap-3 bg-[#b07d58] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#07130e] transition-all hover:bg-[#e7e3dc]"
                >
                  Book a Viewing

                  <Calendar className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href={`/contact?vehicle=${encodeURIComponent(
                    vehicleName
                  )}&type=test-drive`}
                  className="inline-flex items-center justify-center gap-3 border border-white/25 bg-black/10 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/75 backdrop-blur-sm transition-all hover:border-white/60 hover:bg-black/20 hover:text-white"
                >
                  Schedule Test Drive

                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTER NAV */}
        <div className="mt-12 flex flex-col gap-6 border-t border-[#1c3028] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45 transition-colors hover:text-white"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Back to Collection
          </Link>

          <a
            href="tel:+1111000888"
            className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            Call MSyntra
          </a>
        </div>
      </div>
    </section>
  );
}