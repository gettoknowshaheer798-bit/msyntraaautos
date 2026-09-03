"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CinematicHero() {
  /*
   * ---------------------------------------------------------
   * HERO SCROLL MOTION
   * ---------------------------------------------------------
   * The image subtly scales and moves as the user leaves
   * the hero. Nothing dramatic. The goal is editorial motion.
   */
  const { scrollYProgress } = useScroll();

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 1.06]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["0%", "-4%"]
  );

  return (
    <section className="relative w-full h-screen min-h-[750px] bg-[#e7e3dc] text-[#0f1e19] overflow-hidden select-none">
      {/* =====================================================
          1. FULL-BLEED HERO IMAGE
          ===================================================== */}

      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
        }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/images/vehicles/Hero-Image.png"
          alt="MSYNTRA Automotive Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Soft warm ambient overlay */}
        <div className="absolute inset-0 bg-[#e7e3dc]/10 mix-blend-multiply pointer-events-none" />

        {/* Very subtle readability layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e7e3dc]/20 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* =====================================================
          2. TOP NAVIGATION
          ===================================================== */}

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-20 flex items-center justify-between px-8 md:px-14 py-8 max-w-[1500px] mx-auto"
      >
        {/* Brand */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl tracking-[0.25em] text-[#0f1e19] uppercase font-semibold leading-none">
            MSYNTRA
          </span>

          <span className="text-[9px] tracking-[0.35em] text-[#5a5e5b] uppercase font-medium mt-1">
            Automotive
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.25em] font-medium text-[#2c302e] uppercase">
          <Link
            href="/inventory"
            className="relative group hover:text-black transition-colors"
          >
            Inventory
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#0f1e19] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/service"
            className="relative group hover:text-black transition-colors"
          >
            Experience
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#0f1e19] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/financing"
            className="relative group hover:text-black transition-colors"
          >
            Financing
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#0f1e19] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/about"
            className="relative group hover:text-black transition-colors"
          >
            About
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#0f1e19] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/contact"
            className="relative group hover:text-black transition-colors"
          >
            Contact
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#0f1e19] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Header CTA */}
        <Link
          href="/contact"
          className="group relative px-7 py-3 bg-[#0f1e19] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-medium overflow-hidden"
        >
          <span className="relative z-10">Inquire</span>

          <span className="absolute inset-0 bg-[#1a332b] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
        </Link>
      </motion.header>

      {/* =====================================================
          3. MAIN HERO CONTENT
          ===================================================== */}

      <div className="relative z-10 max-w-[1500px] mx-auto h-[calc(100vh-140px)] px-8 md:px-14 flex flex-col justify-center">
        <div className="max-w-xl">

          {/* -----------------------------------------------
              Section Label
              ----------------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-[1px] bg-[#0f1e19]/70"
            />

            <span className="text-[10px] tracking-[0.3em] text-[#0f1e19]/80 uppercase font-medium">
              01 / The Arrival
            </span>
          </motion.div>

          {/* -----------------------------------------------
              Main Heading
              ----------------------------------------------- */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.035em] text-[#0f1e19] leading-[0.88] font-light mb-8"
            style={{
              fontVariationSettings: '"SOFT" 100, "opsz" 144',
            }}
          >
            THE ART
            <br />
            OF THE
            <br />
            DRIVE.
          </motion.h1>

          {/* -----------------------------------------------
              Description
              ----------------------------------------------- */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-xs md:text-sm text-[#2a2d2b] font-normal max-w-[260px] mb-10 leading-[1.6] tracking-wide"
          >
            Exceptional automobiles, curated for those who appreciate every
            detail.
          </motion.p>

          {/* -----------------------------------------------
              CTA
              ----------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block relative group"
          >
            {/* Offset border */}
            <div className="absolute -inset-0.5 border border-[#8c7457]/40 translate-x-1 translate-y-1 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

            <Link
              href="/inventory"
              className="relative inline-flex items-center gap-5 px-8 py-4 bg-[#0d1c17] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-medium overflow-hidden"
            >
              {/* Button hover layer */}
              <span className="absolute inset-0 bg-[#142822] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />

              <span className="relative z-10">
                Explore Collection
              </span>

              <ArrowRight className="relative z-10 w-3.5 h-3.5 text-[#86a397] group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          4. SCROLL INDICATOR
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-8 right-8 md:right-14 z-20 flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase font-semibold text-[#0f1e19]"
      >
        <span>Scroll to discover</span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#9a6237]" />
        </motion.div>
      </motion.div>

      {/* =====================================================
          5. SUBTLE EDGE VIGNETTE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(circle_at_center,transparent_45%,rgba(15,30,25,0.08)_100%)]" />
    </section>
  );
}