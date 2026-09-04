"use client";

import type { Vehicle } from "@/types/vehicle";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Props {
  vehicle: Vehicle;
}

export default function VehicleDetailsSection({ vehicle }: Props) {
  const shouldReduceMotion = useReducedMotion();

  const gallery = Array.from(
    new Set(
      [
        vehicle.heroImage,
        ...(vehicle.galleryImages ?? []),
        vehicle.actionImage,
        vehicle.thumbnail,
      ].filter(Boolean)
    )
  );

  const cinematicImage = gallery[1] ?? gallery[0];
  const detailImage = gallery[2] ?? gallery[0];

  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-8%", "8%"]
  );

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

  const specs = vehicle.specs;

  return (
    <section className="bg-[#f4f0eb] text-[#102019]">
      {/* =========================
          01 / THE MACHINE
      ========================== */}

      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-[10px] font-medium tracking-[0.28em] text-[#a8754d]">
              01 / THE MACHINE
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-5xl font-light leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Built for the
              <br />
              <span className="text-[#77766f]">way forward.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-[#62645f] sm:text-lg">
              {vehicle.description}
            </p>
          </div>
        </motion.div>

        {/* POWER STATEMENT */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-28 border-y border-[#102019]/15 py-10 lg:mt-40 lg:py-14"
        >
          <div className="grid gap-10 lg:grid-cols-3 lg:items-end">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#77766f]">
                ENGINE OUTPUT
              </p>

              <p className="mt-3 text-7xl font-light tracking-[-0.07em] sm:text-8xl">
                {vehicle.powerSpec.replace(/\D/g, "")}
              </p>

              <p className="mt-1 text-xs tracking-[0.22em] text-[#77766f]">
                HORSEPOWER
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#77766f]">
                POWERTRAIN
              </p>

              <p className="mt-4 max-w-md text-xl font-light leading-7 sm:text-2xl">
                {vehicle.engineSpec}
              </p>
            </div>

            <div className="lg:text-right">
              <p className="text-[10px] tracking-[0.25em] text-[#77766f]">
                DRIVE
              </p>

              <p className="mt-4 text-xl font-light sm:text-2xl">
                {specs?.drivetrain ?? "See specifications"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================
          CINEMATIC IMAGE
      ========================== */}

      <div
        ref={imageRef}
        className="relative h-[65vh] min-h-[500px] overflow-hidden bg-[#102019] sm:h-[75vh]"
      >
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-x-0 -top-[8%] h-[116%]"
        >
          <Image
            src={cinematicImage}
            alt={`${vehicle.make} ${vehicle.model}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1915]/75 via-transparent to-transparent" />

        <div className="absolute bottom-8 left-5 right-5 sm:bottom-12 sm:left-8 sm:right-8 lg:left-12">
          <p className="text-[10px] tracking-[0.28em] text-white/60">
            MSYNTRA AUTOMOTIVE
          </p>

          <p className="mt-3 max-w-2xl text-3xl font-light leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Every number
            <br />
            has a purpose.
          </p>
        </div>
      </div>

      {/* =========================
          TECHNICAL DATA
      ========================== */}

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
              TECHNICAL DATA
            </p>

            <h3 className="mt-5 text-4xl font-light tracking-[-0.045em] sm:text-5xl">
              The numbers
              <br />
              behind it.
            </h3>
          </div>

          <div className="border-t border-[#102019]/15">
            {[
              ["ENGINE", specs?.engine ?? vehicle.engineSpec],
              ["POWER", specs?.power ?? vehicle.powerSpec],
              ["TORQUE", specs?.torque ?? "See specifications"],
              ["DRIVETRAIN", specs?.drivetrain ?? "See specifications"],
              [
                "TRANSMISSION",
                specs?.transmission ?? "See specifications",
              ],
              ["FUEL / ENERGY", specs?.fuelType ?? "See specifications"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`grid grid-cols-[0.7fr_1.3fr] gap-6 py-6 ${
                  index !== 5 ? "border-b border-[#102019]/15" : ""
                }`}
              >
                <p className="text-[10px] tracking-[0.22em] text-[#77766f]">
                  {label}
                </p>

                <p className="text-sm font-medium sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================
            SECOND IMAGE
        ========================== */}

        <div className="mt-28 grid gap-6 lg:mt-40 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative aspect-[4/3] overflow-hidden bg-[#ddd7cd] sm:aspect-[16/10]"
          >
            <Image
              src={detailImage}
              alt={`${vehicle.make} ${vehicle.model} detail`}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="flex min-h-[280px] flex-col justify-start bg-[#17251f] p-8 text-[#f4f0eb] sm:p-10 lg:p-12"
          >
            <p className="text-[10px] tracking-[0.25em] text-[#a8754d]">
              THE EXPERIENCE
            </p>

            <h3 className="mt-5 text-4xl font-light leading-[0.95] tracking-[-0.05em] sm:text-5xl">
              Designed to
              <br />
              be experienced.
            </h3>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">
              Performance is only one part of the equation. The details are
              what make the experience complete.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}