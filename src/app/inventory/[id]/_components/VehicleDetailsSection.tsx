"use client";

import type { Vehicle } from "@/types/vehicle";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Battery,
  Cog,
  Fuel,
  Gauge,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

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

  const gallery = Array.from(
    new Set(
      [
        vehicle.heroImage,
        ...(vehicle.galleryImages || []),
        vehicle.actionImage,
        vehicle.thumbnail,
      ].filter(Boolean)
    )
  );

  const cinematicImage = gallery[1] || gallery[0] || vehicle.heroImage;
  const detailImage = gallery[2] || gallery[0] || vehicle.heroImage;

  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-7%", "7%"]
  );

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
        {/* INTRO */}
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

            <div className="mt-10 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9e6d48]">
              <span>Explore the specification</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </div>
          </motion.div>

          {/* POWER STATEMENT */}
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#243b31] via-[#17251f] to-[#0d1914]" />

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/5" />
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/5" />

            <div className="absolute bottom-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#2b4438]/40 to-transparent" />

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

              <span className="mt-1 block max-w-[220px] text-xs leading-5 text-white/75">
                {vehicle.engineSpec}
              </span>
            </div>
          </motion.div>
        </div>

        {/* CINEMATIC PHOTOGRAPHY */}
        <motion.div
          ref={imageRef}
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 40 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1 }}
          className="relative mt-24 overflow-hidden md:mt-32"
        >
          <div className="relative h-[58vh] min-h-[460px] max-h-[780px] overflow-hidden md:h-[68vh]">
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-[-8%] will-change-transform"
            >
              <Image
                src={cinematicImage}
                alt={`${vehicle.make} ${vehicle.model}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1500px"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#07130e]/75 via-transparent to-[#07130e]/10" />

            <div className="absolute inset-x-0 bottom-0 p-7 md:p-12 lg:p-16">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <span className="mb-4 block text-[9px] font-semibold tracking-[0.35em] text-[#d0b69d]">
                    ENGINEERED WITH INTENT
                  </span>

                  <h3 className="max-w-3xl font-serif text-4xl font-light leading-[0.92] tracking-[-0.025em] text-white md:text-6xl lg:text-7xl">
                    Every number
                    <br />
                    <span className="text-white/45">
                      has a purpose.
                    </span>
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-3 text-[8px] tracking-[0.3em] text-white/50">
                  <span>02</span>
                  <span className="h-px w-8 bg-white/25" />
                  <span>MSYNTRA / COLLECTION</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LARGE TECHNICAL CALLOUTS */}
        <div className="grid grid-cols-1 border-b border-[#d4cec3] md:grid-cols-3">
          {[
            {
              label: "POWER",
              value: specs.power,
            },
            {
              label: "TORQUE",
              value: specs.torque,
            },
            {
              label: "DRIVETRAIN",
              value: specs.drivetrain,
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`py-8 md:py-10 ${
                index > 0
                  ? "border-t border-[#d4cec3] md:border-l md:border-t-0 md:pl-10"
                  : ""
              }`}
            >
              <span className="mb-4 block text-[8px] font-semibold tracking-[0.3em] text-[#6f706a]">
                {item.label}
              </span>

              <span className="block font-serif text-2xl font-light leading-tight text-[#0d1c17] md:text-3xl">
                {item.value}
              </span>
            </motion.div>
          ))}
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
                  className={`group border-b border-[#d4cec3] p-7 ${
                    index % 2 === 1 ? "sm:border-l" : ""
                  } ${
                    index % 3 !== 0 ? "lg:border-l" : ""
                  }`}
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

        {/* SECOND IMAGE / CLOSING MACHINE MOMENT */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="mt-20 grid grid-cols-1 gap-6 md:mt-28 md:grid-cols-12"
        >
          <div className="relative h-[420px] overflow-hidden md:col-span-8 md:h-[560px]">
            <Image
              src={detailImage}
              alt={`${vehicle.make} ${vehicle.model} detail`}
              fill
              className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          <div className="flex flex-col justify-between bg-[#e5ded1] p-8 md:col-span-4 md:p-10">
            <div>
              <span className="text-[9px] font-semibold tracking-[0.3em] text-[#9e6d48]">
                THE MACHINE
              </span>

              <h3 className="mt-6 font-serif text-3xl font-light leading-[0.95] text-[#0d1c17] md:text-4xl">
                Designed to be
                <br />
                <span className="text-[#6f706a]">
                  experienced.
                </span>
              </h3>
            </div>

            <div className="mt-12">
              <div className="mb-5 h-px w-full bg-[#cfc7ba]" />

              <p className="text-xs font-light leading-7 text-[#5d6863]">
                {vehicle.make} {vehicle.model}. {vehicle.trim}.
                A vehicle selected for the MSyntra collection because
                specification is only the beginning.
              </p>

              <div className="mt-7 flex items-center gap-3 text-[8px] font-semibold tracking-[0.3em] text-[#9e6d48]">
                <span>VIEW THE COLLECTION</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}