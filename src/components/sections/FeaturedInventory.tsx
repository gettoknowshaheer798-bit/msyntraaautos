"use client";

import type { Vehicle } from "@/types/vehicle";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
  "ALL",
  "PERFORMANCE",
  "LUXURY",
  "SUV",
  "ELECTRIC",
];

interface FeaturedInventoryProps {
  vehicles: Vehicle[];
}

export default function FeaturedInventory({
  vehicles,
}: FeaturedInventoryProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const shouldReduceMotion = useReducedMotion();

  const featuredVehicles = vehicles.filter(
    (vehicle) => vehicle.featured
  );

  const filteredVehicles =
    activeCategory === "ALL"
      ? featuredVehicles
      : featuredVehicles.filter(
          (vehicle) =>
            vehicle.category?.toUpperCase() === activeCategory
        );

  const revealAnimation = shouldReduceMotion
    ? {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
      }
    : {
        initial: {
          opacity: 0,
          y: 45,
          scale: 0.985,
        },
        whileInView: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      };

  return (
    <section className="w-full bg-[#f4f0eb] px-5 py-20 text-[#0f1e19] sm:px-6 md:px-10 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        {/* ============================================================
            SECTION HEADER
            ============================================================ */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 30 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10 md:mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#9a6237]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9a6237] sm:text-[10px]">
              02 / The Collection
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2
              className="max-w-[700px] font-serif text-4xl font-light uppercase leading-[0.9] tracking-[-0.03em] text-[#0f1e19] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                fontVariationSettings: '"SOFT" 100, "opsz" 144',
              }}
            >
              THE
              <br />
              COLLECTION
            </h2>

            <p className="max-w-[310px] text-xs font-light leading-[1.7] tracking-wide text-[#4a4e4b] md:text-sm lg:pb-1">
              Exceptional automobiles, selected with intention. Every
              vehicle earns its place.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            CATEGORY NAVIGATION
            ============================================================ */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 20 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-7 overflow-x-auto border-b border-[#0f1e19]/10 scrollbar-hide md:mb-8"
        >
          <div className="flex min-w-max items-center gap-7 pb-3 sm:gap-8 md:gap-10">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`group relative pb-2 text-[9px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 sm:text-[10px] md:text-[11px] ${
                    isActive
                      ? "text-[#0f1e19]"
                      : "text-[#7a7e7b] hover:text-[#0f1e19]"
                  }`}
                >
                  {category}

                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#9a6237] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================
            ASYMMETRIC BENTO GALLERY
            ============================================================ */}

        <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
          {filteredVehicles.map((car, index) => {
            const isPrimary = index === 0;

            const colSpan =
              index === 0
                ? "lg:col-span-8"
                : index === 1
                  ? "lg:col-span-4"
                  : index === 2
                    ? "lg:col-span-5"
                    : "lg:col-span-7";

            const desktopHeight =
              index < 2
                ? "lg:h-[430px]"
                : "lg:h-[330px]";

            const cardHeight = isPrimary
              ? "h-[390px] sm:h-[430px]"
              : "h-[300px] sm:h-[330px]";

            const displayName =
              `${car.make} ${car.model}`.trim();

            const category =
              car.category?.toUpperCase() || "AUTOMOTIVE";

            return (
              <motion.article
                key={car.id}
                layout
                {...revealAnimation}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  layout: {
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  opacity: {
                    duration: shouldReduceMotion ? 0 : 0.8,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  y: {
                    duration: shouldReduceMotion ? 0 : 0.8,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  scale: {
                    duration: shouldReduceMotion ? 0 : 0.8,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[2px]
                  ${colSpan}
                  ${desktopHeight}
                  ${cardHeight}
                `}
              >
                <Link
                  href={`/inventory/${car.id}`}
                  className="absolute inset-0 z-20"
                  aria-label={`View ${displayName}`}
                />

                {/* ======================================================
                    IMAGE
                    ====================================================== */}

                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.2,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Image
                    src={car.heroImage}
                    alt={displayName}
                    fill
                    sizes={
                      isPrimary
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 1024px) 100vw, 50vw"
                    }
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                  />
                </motion.div>

                {/* ======================================================
                    IMAGE OVERLAYS
                    ====================================================== */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                <div className="pointer-events-none absolute inset-0 bg-[#0f1e19]/0 transition-colors duration-700 group-hover:bg-[#0f1e19]/10" />

                {/* ======================================================
                    CARD CONTENT
                    ====================================================== */}

                <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-5 text-white sm:p-6 md:p-7">
                  {/* Top information */}

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[9px] font-medium tracking-[0.22em] text-white/65 sm:text-[10px]">
                        {car.year}
                      </span>

                      <span className="h-px w-5 bg-white/30" />

                      <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/50">
                        {category}
                      </span>
                    </div>

                    <h3
                      className={`max-w-[340px] font-serif font-light uppercase leading-[0.95] tracking-[-0.02em] ${
                        isPrimary
                          ? "text-2xl sm:text-3xl md:text-4xl"
                          : "text-xl sm:text-2xl md:text-3xl"
                      }`}
                      style={{
                        fontVariationSettings:
                          '"SOFT" 100, "opsz" 144',
                      }}
                    >
                      {displayName}
                    </h3>

                    {car.trim && (
                      <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.22em] text-white/45 sm:text-[9px]">
                        {car.trim}
                      </p>
                    )}
                  </div>

                  {/* Bottom information */}

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-1 text-[9px] font-light tracking-[0.08em] text-white/70 sm:text-[10px] md:text-[11px]">
                        {car.engineSpec}
                      </p>

                      <p className="text-[9px] font-light uppercase tracking-[0.12em] text-white/50 sm:text-[10px] md:text-[11px]">
                        {car.powerSpec}
                      </p>
                    </div>

                    <div className="hidden items-center gap-2 border-b border-white/40 pb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 group-hover:border-[#c59b72] group-hover:text-[#c59b72] sm:flex md:text-[10px]">
                      <span>View</span>

                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Mobile view indicator */}

                  <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/10 backdrop-blur-[2px] sm:hidden">
                    <ArrowRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ============================================================
            EMPTY STATE
            ============================================================ */}

        {filteredVehicles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex min-h-[260px] items-center justify-center border border-[#0f1e19]/10"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6f706a]">
              No featured vehicles currently available
            </p>
          </motion.div>
        )}

        {/* ============================================================
            BOTTOM CTA
            ============================================================ */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 25 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 flex justify-center md:mt-12"
        >
          <Link
            href="/inventory"
            className="group relative inline-flex items-center gap-4 overflow-hidden border border-[#8c7457]/40 px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0f1e19] transition-colors duration-300 hover:bg-[#0f1e19] hover:text-[#e7e3dc] sm:px-9 md:px-10 md:text-[10px]"
          >
            <span className="relative z-10">
              View All Inventory
            </span>

            <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />

            <span className="absolute inset-0 -z-0 translate-y-full bg-[#0f1e19] transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}