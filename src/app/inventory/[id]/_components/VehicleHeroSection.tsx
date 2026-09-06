"use client";

import type { Vehicle } from "@/types/vehicle";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Cog,
  Disc3,
  Zap,
} from "lucide-react";
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

  const previousImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-white text-[#07130e]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-[64%_36%]">
        {/* =======================================================
            LEFT: IMAGE
        ======================================================= */}
        <div className="relative min-h-[60vh] overflow-hidden bg-[#e9e5dd] lg:min-h-[calc(100vh-80px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
              }
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage}
                alt={`${vehicle.make} ${vehicle.model}`}
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 64vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Vertical image counter, top-left */}
          <div className="absolute left-6 top-6 z-20 flex flex-col items-center gap-2 text-[10px] tracking-[0.2em] text-white/85 md:left-8">
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="h-8 w-px bg-white/50" />
            <span>{String(gallery.length).padStart(2, "0")}</span>
          </div>

          {/* Gallery controls, bottom-left */}
          {gallery.length > 1 && (
            <div className="absolute bottom-6 left-6 z-30 flex items-center gap-4 md:left-8">
              <button
                type="button"
                onClick={previousImage}
                className="text-white/90 transition-colors hover:text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="text-white/90 transition-colors hover:text-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {/* =======================================================
            RIGHT: GREEN INFO PANEL
        ======================================================= */}
        <div className="flex min-h-[60vh] flex-col justify-center bg-[#07130e] px-8 py-16 text-[#e7e3dc] md:px-12 lg:min-h-0 lg:px-10 lg:py-24 xl:px-14">
          <span className="text-[11px] tracking-[0.3em] text-[#c79f78]">
            {vehicle.year}
          </span>

          <h1 className="mt-3 font-serif text-4xl font-light uppercase leading-[1.02] tracking-[-0.02em] text-white sm:text-5xl">
            {vehicle.make}
            <br />
            {vehicle.model}
          </h1>

          <div className="mt-6 h-px w-full bg-white/10" />

          <div className="mt-6">
            <span className="block text-2xl font-light text-white sm:text-3xl">
              {vehicle.price}
              <span className="ml-2 text-xs font-normal tracking-[0.2em] text-white/40">
                USD
              </span>
            </span>
          </div>

          <div className="mt-7 space-y-3.5 text-sm">
            <div className="flex items-center gap-3 text-white/85">
              <Zap className="h-4 w-4 shrink-0 text-[#c79f78]" />
              <span>{vehicle.powerSpec}</span>
            </div>
            <div className="flex items-center gap-3 text-white/85">
              <Cog className="h-4 w-4 shrink-0 text-[#c79f78]" />
              <span>{vehicle.engineSpec}</span>
            </div>
            <div className="flex items-center gap-3 text-white/85">
              <Disc3 className="h-4 w-4 shrink-0 text-[#c79f78]" />
              <span>{vehicle.specs?.drivetrain ?? "All-Wheel Drive"}</span>
            </div>
          </div>

          <Link
            href={`/contact?vehicle=${encodeURIComponent(
              `${vehicle.year} ${vehicle.make} ${vehicle.model}`
            )}&type=viewing`}
            className="mt-8 inline-flex items-center justify-center gap-3 bg-[#b07d58] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#07130e] transition-colors hover:bg-white"
          >
            Book a Viewing
            <Calendar className="h-3.5 w-3.5" />
          </Link>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
          >
            Schedule a Test Drive
            <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* =========================================================
          THUMBNAILS
      ========================================================= */}
      {gallery.length > 1 && (
        <div className="border-b border-[#07130e]/10 bg-[#f4f0eb] px-6 py-5 md:px-10 lg:px-16">
          <div className="flex items-center justify-center gap-3 overflow-x-auto pb-1 scrollbar-none">
            {gallery.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`group relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-sm transition-all md:h-[72px] md:w-[108px] ${
                  currentIndex === index
                    ? "ring-2 ring-[#b07d58]"
                    : "opacity-55 hover:opacity-100"
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="108px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}