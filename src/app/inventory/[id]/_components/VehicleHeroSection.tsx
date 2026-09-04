"use client";

import type { Vehicle } from "@/types/vehicle";

import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Shield,
  Zap
} from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function VehicleHeroSection({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const shouldReduceMotion = useReducedMotion();

  const gallery =
    vehicle.galleryImages && vehicle.galleryImages.length > 0
      ? vehicle.galleryImages
      : Array.from(
          new Set(
            [vehicle.heroImage, vehicle.actionImage, vehicle.thumbnail].filter(
              Boolean
            )
          )
        );

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = gallery[currentIndex] || vehicle.heroImage;

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#0b1712] text-[#e7e3dc]">
      {/* TOP NAVIGATION */}
      <div className="absolute inset-x-0 top-0 z-40">
        <div className="flex items-center justify-between px-6 py-6 md:px-10 lg:px-16">
          <Link
            href="/inventory"
            className="group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#c3cec8] transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-[#9e6d48]">
              <ArrowLeft className="h-3.5 w-3.5" />
            </span>
            <span className="hidden sm:inline">Back to Collection</span>
          </Link>

          <div className="text-right">
            <div className="font-serif text-lg tracking-[0.18em] text-white">
              MSYNTRA
            </div>
            <div className="text-[7px] tracking-[0.45em] text-[#9e6d48]">
              AUTOMOTIVE
            </div>
          </div>
        </div>
      </div>

      {/* CINEMATIC IMAGE */}
      <div className="relative min-h-[760px] w-full overflow-hidden lg:min-h-[850px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 1.06 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.985 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage}
              alt={`${vehicle.make} ${vehicle.model}`}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* IMAGE GRADING */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07110d]/85 via-[#07110d]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110d] via-transparent to-[#07110d]/30" />

        {/* IMAGE INDEX */}
        <div className="absolute left-6 top-32 z-20 flex items-center gap-3 text-[9px] tracking-[0.25em] text-white/60 md:left-10 lg:left-16">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-white/25" />
          <span>{String(gallery.length).padStart(2, "0")}</span>
        </div>

        {/* HERO COPY */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-12 md:px-10 md:pb-16 lg:px-16 lg:pb-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 35 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[10px] tracking-[0.35em] text-[#bda68f]">
                  {vehicle.year}
                </span>
                <span className="h-px w-8 bg-[#9e6d48]" />
                <span className="text-[10px] tracking-[0.3em] text-white/60">
                  {vehicle.trim}
                </span>
              </div>

              <h1 className="max-w-5xl font-serif text-5xl font-light uppercase leading-[0.84] tracking-[-0.035em] text-white sm:text-6xl md:text-8xl lg:text-[112px]">
                {vehicle.make}
                <br />
                <span className="text-[#d8d3cb]">{vehicle.model}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 25 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-4"
            >
              <div className="mb-7 grid grid-cols-3 border-y border-white/15 py-5">
                <div>
                  <span className="mb-2 block text-[8px] tracking-[0.25em] text-white/45">
                    POWER
                  </span>
                  <span className="font-serif text-lg text-white">
                    {vehicle.powerSpec}
                  </span>
                </div>

                <div className="border-l border-white/15 pl-4">
                  <span className="mb-2 block text-[8px] tracking-[0.25em] text-white/45">
                    ENGINE
                  </span>
                  <span className="font-serif text-sm text-white">
                    {vehicle.engineSpec}
                  </span>
                </div>

                <div className="border-l border-white/15 pl-4">
                  <span className="mb-2 block text-[8px] tracking-[0.25em] text-white/45">
                    DRIVE
                  </span>
                  <span className="font-serif text-sm text-white">
                    {vehicle.specs?.drivetrain || "See specifications"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="mb-1 block text-[8px] tracking-[0.25em] text-white/45">
                    ASKING PRICE
                  </span>
                  <span className="font-serif text-3xl font-light text-white md:text-4xl">
                    {vehicle.price}
                  </span>
                </div>

                <Link
                  href={`/contact?vehicle=${encodeURIComponent(
                    `${vehicle.year} ${vehicle.make} ${vehicle.model}`
                  )}&type=viewing`}
                  className="inline-flex items-center justify-center gap-3 bg-[#b07d58] px-7 py-4 text-[9px] font-semibold tracking-[0.25em] text-[#0b1712] uppercase transition-all hover:bg-[#e7e3dc]"
                >
                  Book a Viewing
                  <Calendar className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* GALLERY CONTROLS */}
        {gallery.length > 1 && (
          <div className="absolute bottom-8 right-6 z-30 flex items-center gap-2 md:right-10 lg:right-16">
            <button
              type="button"
              onClick={previousImage}
              className="flex h-11 w-11 items-center justify-center border border-white/20 bg-black/20 backdrop-blur-md transition-all hover:border-[#9e6d48] hover:bg-black/40"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="flex h-11 w-11 items-center justify-center border border-white/20 bg-black/20 backdrop-blur-md transition-all hover:border-[#9e6d48] hover:bg-black/40"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* THUMBNAILS */}
      {gallery.length > 1 && (
        <div className="border-t border-white/10 bg-[#0b1712] px-6 py-5 md:px-10 lg:px-16">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
            {gallery.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`group relative h-16 w-24 flex-shrink-0 overflow-hidden transition-all md:h-20 md:w-32 ${
                  currentIndex === index
                    ? "ring-1 ring-[#b07d58]"
                    : "opacity-45 hover:opacity-100"
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {currentIndex === index && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#b07d58]" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUICK ACTION STRIP */}
      <div className="border-t border-[#1d3028] bg-[#11231c]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-[#1d3028] px-6 py-5 md:border-b-0 md:border-r md:px-10">
            <Zap className="h-4 w-4 text-[#9e6d48]" />
            <div>
              <span className="block text-[8px] tracking-[0.25em] text-white/40">
                PERFORMANCE
              </span>
              <span className="text-xs tracking-wider text-white/80">
                {vehicle.powerSpec}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-[#1d3028] px-6 py-5 md:border-b-0 md:border-r md:px-10">
            <Gauge className="h-4 w-4 text-[#9e6d48]" />
            <div>
              <span className="block text-[8px] tracking-[0.25em] text-white/40">
                POWERTRAIN
              </span>
              <span className="text-xs tracking-wider text-white/80">
                {vehicle.engineSpec}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-5 md:px-10">
            <Shield className="h-4 w-4 text-[#9e6d48]" />
            <div>
              <span className="block text-[8px] tracking-[0.25em] text-white/40">
                MSYNTRA STANDARD
              </span>
              <span className="text-xs tracking-wider text-white/80">
                Inspected & Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}