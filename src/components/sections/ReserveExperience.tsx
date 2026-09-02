"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReserveExperience() {
  return (
    <section className="relative w-full h-screen min-h-[650px] bg-[#07130e] text-[#e7e3dc] overflow-hidden flex flex-col justify-end pb-20 md:pb-28">
      
      {/* BACKGROUND IMAGE WITH WARM SUNSET / COASTAL OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vehicles/BMW-M8-Gran-Coupe(Hero).png"
          alt="Aston Martin Final Drive"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Soft Dark Vignette & Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07130e] via-[#07130e]/30 to-[#07130e]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130e]/85 via-transparent to-transparent" />
      </div>

      {/* MAIN CONTENT (LEFT ALIGNED EDITORIAL TEXT) */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
        <div className="max-w-2xl">
          {/* Section Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] tracking-[0.3em] text-[#9e6d48] uppercase font-semibold">
              05 / FINAL DRIVE
            </span>
          </div>

          {/* Main Display Headline */}
          <h2
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] tracking-[-0.035em] text-[#e7e3dc] uppercase font-light leading-[0.92] mb-10"
            style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
          >
            YOUR NEXT DRIVE <br />
            STARTS HERE.
          </h2>

          {/* CTA Button */}
          <Link
            href="/inventory"
            className="inline-flex items-center gap-4 px-8 py-4 border border-[#9e6d48]/60 bg-[#07130e]/40 backdrop-blur-sm text-[10px] tracking-[0.25em] text-[#e7e3dc] uppercase font-semibold hover:bg-[#9e6d48] hover:text-[#07130e] hover:border-[#9e6d48] transition-all group"
          >
            <span>EXPLORE INVENTORY</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </section>
  );
}