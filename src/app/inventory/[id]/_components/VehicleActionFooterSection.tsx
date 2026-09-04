"use client";

import type { Vehicle } from "@/types/vehicle";

import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Phone,
  Repeat2,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";
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
            <span className="text-white/35">entirely your own.</span>
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
              className="inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.25em] text-[#b07d58] uppercase transition-colors hover:text-white"
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
              A starting estimate based on this vehicle. Final terms depend
              on approval, deposit and selected financing structure.
            </p>

            <Link
              href={`/financing?vehicle=${encodeURIComponent(vehicleName)}`}
              className="inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.25em] text-[#b07d58] uppercase transition-colors hover:text-white"
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
              Tell us about your current vehicle and we'll help structure the
              transition into your next one.
            </p>

            <Link
              href={`/trade-in?vehicle=${encodeURIComponent(vehicleName)}`}
              className="inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.25em] text-[#b07d58] uppercase transition-colors hover:text-white"
            >
              Value My Trade
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.98 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="relative mt-24 overflow-hidden border border-[#20362c] bg-[#102019] p-8 md:p-14 lg:p-20"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#193328] to-transparent opacity-60" />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="mb-5 block text-[9px] font-semibold tracking-[0.35em] text-[#9e6d48]">
                READY TO EXPERIENCE IT?
              </span>

              <h2 className="max-w-4xl font-serif text-4xl font-light leading-[0.95] tracking-[-0.025em] text-white md:text-6xl lg:text-7xl">
                Some cars make sense
                <br />
                <span className="text-white/35">once you're behind the wheel.</span>
              </h2>

              <p className="mt-7 max-w-xl text-xs font-light leading-7 text-white/40">
                Arrange a private viewing or test drive for the{" "}
                <span className="text-white/70">{vehicleName}</span>.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
              <Link
                href={`/contact?vehicle=${encodeURIComponent(
                  vehicleName
                )}&type=viewing`}
                className="inline-flex items-center justify-center gap-3 bg-[#b07d58] px-7 py-4 text-[9px] font-semibold tracking-[0.25em] text-[#07130e] uppercase transition-all hover:bg-[#e7e3dc]"
              >
                Book a Viewing
                <Calendar className="h-3.5 w-3.5" />
              </Link>

              <Link
                href={`/contact?vehicle=${encodeURIComponent(
                  vehicleName
                )}&type=test-drive`}
                className="inline-flex items-center justify-center gap-3 border border-[#31483e] px-7 py-4 text-[9px] font-semibold tracking-[0.25em] text-white/65 uppercase transition-all hover:border-white/50 hover:text-white"
              >
                Schedule Test Drive
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* FOOTER NAV */}
        <div className="mt-12 flex flex-col gap-6 border-t border-[#1c3028] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.25em] text-white/45 uppercase transition-colors hover:text-white"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Back to Collection
          </Link>

          <a
            href="tel:+1111000888"
            className="inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.25em] text-white/45 uppercase transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            Call MSyntra
          </a>
        </div>
      </div>
    </section>
  );
}