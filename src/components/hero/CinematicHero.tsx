"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CinematicHero() {
  return (
    <section className="relative w-full h-screen min-h-[750px] bg-[#e7e3dc] text-[#0f1e19] overflow-hidden select-none">
      {/* 1. Clean Full-bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vehicles/Hero-Image.png"
          alt="MSYNTRA Automotive Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft warm ambient overlay to blend lighting */}
        <div className="absolute inset-0 bg-[#e7e3dc]/10 mix-blend-multiply pointer-events-none" />
      </div>

      {/* 2. Top Navigation Header */}
      <header className="relative z-20 flex items-center justify-between px-8 md:px-14 py-8 max-w-[1500px] mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl tracking-[0.25em] text-[#0f1e19] uppercase font-semibold leading-none">
            MSYNTRA
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#5a5e5b] uppercase font-medium mt-1">
            Automotive
          </span>
        </Link>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] font-medium text-[#2c302e] uppercase">
          <Link href="/inventory" className="hover:text-black transition-colors">
            Inventory
          </Link>
          <Link href="/service" className="hover:text-black transition-colors">
            Experience
          </Link>
          <Link href="/financing" className="hover:text-black transition-colors">
            Financing
          </Link>
          <Link href="/about" className="hover:text-black transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </nav>

        {/* Header Action Button */}
        <Link
          href="/contact"
          className="px-7 py-3 bg-[#0f1e19] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#1a332b] transition-colors"
        >
          Inquire
        </Link>
      </header>

      {/* 3. Main Hero Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto h-[calc(100vh-140px)] px-8 md:px-14 flex flex-col justify-center">
        <div className="max-w-xl">
          {/* Subheading Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#0f1e19]/70" />
            <span className="text-[10px] tracking-[0.3em] text-[#0f1e19]/80 uppercase font-medium">
              01 / The Arrival
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.035em] text-[#0f1e19] leading-[0.88] font-light mb-8"
            style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
          >
            THE ART <br />
            OF THE <br />
            DRIVE.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-xs md:text-sm text-[#2a2d2b] font-normal max-w-[260px] mb-10 leading-[1.6] tracking-wide">
            Exceptional automobiles, curated for those who appreciate every detail.
          </p>

          {/* CTA Button */}
          <div className="inline-block relative group">
            <div className="absolute -inset-0.5 border border-[#8c7457]/40 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            <Link
              href="/inventory"
              className="relative inline-flex items-center gap-5 px-8 py-4 bg-[#0d1c17] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#142822] transition-colors"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#86a397] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Bottom Scroll Indicator (Pagination bar removed) */}
      <div className="absolute bottom-8 right-8 md:right-14 z-20 flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase font-semibold text-[#0f1e19]">
        <span>Scroll to discover</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#9a6237]" />
      </div>
    </section>
  );
}