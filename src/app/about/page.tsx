"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Quote,
  Search,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
const shouldReduceMotion = useReducedMotion();

const collectionSteps = [
{
number: "01",
title: "SOURCED",
description:
"We search globally for vehicles that stand out for their condition, history, and potential.",
},
{
number: "02",
title: "EVALUATED",
description:
"Every car goes through a rigorous multi-point inspection, road test, and history review.",
},
{
number: "03",
title: "SELECTED",
description:
"Only the best make it. We handpick vehicles we'd be proud to own ourselves.",
},
{
number: "04",
title: "PREPARED",
description:
"Each vehicle is thoughtfully reconditioned to meet our exacting standards.",
},
];

const standards = [
{
icon: Compass,
title: "CURATED",
description:
"We don't chase volume. We chase quality. Every vehicle is thoughtfully chosen for its strength, character, and long-term value.",
image: "/images/vehicles/Continental-GT.jpeg",
},
{
icon: Search,
title: "INSPECTED",
description:
"We go beyond the basics. Our inspections are comprehensive, our standards are high, and our technicians are the best in the business.",
image: "/images/vehicles/S-Class.jpeg",
},
{
icon: ShieldCheck,
title: "TRANSPARENT",
description:
"We believe in complete honesty. From condition reports to pricing, we share everything up front, so you can buy with total confidence.",
image: "/images/vehicles/LaFerrari.jpeg",
},
];

const reveal: Variants = {
hidden: {
opacity: 0,
y: shouldReduceMotion ? 0 : 28,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.75,
ease: "easeOut",
},
},
};

const imageReveal: Variants = {
hidden: {
opacity: 0,
scale: shouldReduceMotion ? 1 : 1.035,
},
visible: {
opacity: 1,
scale: 1,
transition: {
duration: 1.1,
ease: "easeOut",
},
},
};

return ( <main className="min-h-screen w-full overflow-x-hidden bg-[#f4f0eb] font-sans text-[#0d1c17]">
{/* ================================================================
01 / HERO
================================================================= */}


  <section className="relative w-full overflow-hidden bg-[#f4f0eb] pt-8 md:pt-12">
    <div className="relative z-10 grid min-h-[580px] w-full grid-cols-1 items-stretch lg:min-h-[640px] lg:grid-cols-12">
      {/* Hero copy */}

      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        className="z-20 flex flex-col justify-between px-6 py-8 md:px-12 lg:col-span-5 lg:pl-16 lg:pr-4"
      >
        <div>
          <div className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#8a9992]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9e6d48]" />
            OUR PURPOSE
          </div>

          <h1 className="max-w-lg font-serif text-4xl font-light uppercase leading-[1.08] tracking-tight text-[#0d1c17] sm:text-5xl lg:text-6xl">
            WE BELIEVE
            <br />
            THE RIGHT CAR
            <br />
            CHANGES THE WAY
            <br />
            YOU MOVE THROUGH
            <br />
            THE WORLD.
          </h1>
        </div>

        <div className="inline-flex items-center gap-3 pt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#9e6d48]">
          <span className="h-px w-6 bg-[#9e6d48]" />
          ABOUT MSYNTRA
        </div>
      </motion.div>

      {/* Hero image */}

      <motion.div
        variants={imageReveal}
        initial="hidden"
        animate="visible"
        className="relative min-h-[380px] w-full lg:col-span-7 lg:min-h-full"
        style={{
          clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <Image
          src="/images/vehicles/BMW-M8-Gran-Coupe.png"
          alt="BMW M8 Gran Coupe"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center transition-transform duration-[1600ms] hover:scale-[1.02]"
        />
      </motion.div>
    </div>

    {/* Diagonal dark banner */}

    <div className="relative z-30 -mt-10 w-full lg:-mt-14">
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[40px] w-full text-[#0d1c17] sm:h-[60px]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0,120 L1200,10 L1200,120 Z" />
        </svg>
      </div>

      <div className="bg-[#0d1c17] px-8 py-6 text-[#e7e3dc] md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl items-center justify-end">
          <div className="flex items-center gap-6 border-l border-[#8a9992]/30 pl-6 sm:gap-8">
            <div className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-[#8a9992] sm:text-[11px]">
              GREAT CARS.
              <br />
              HONEST PROCESS.
              <br />
              MEANINGFUL JOURNEYS.
            </div>

            <ArrowRight className="h-6 w-6 shrink-0 text-[#9e6d48]" />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ================================================================
      02 / PHILOSOPHY
  ================================================================= */}

  <section className="w-full border-b border-[#dcd5c9] px-8 py-20 md:px-16 lg:px-24 lg:py-28">
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12"
    >
      <div className="space-y-6 lg:col-span-5">
        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#8a9992]">
          PHILOSOPHY
        </span>

        <h2 className="font-serif text-3xl font-light uppercase tracking-wider text-[#0d1c17] md:text-4xl">
          AUTOMOTIVE
          <br />
          IS PERSONAL.
        </h2>

        <div className="space-y-4 text-xs font-light leading-relaxed text-[#5d6863]">
          <p>It&apos;s more than engineering and design.</p>
          <p>It&apos;s the feeling behind the wheel.</p>
          <p>The places it takes you.</p>
          <p>And the memories it creates.</p>

          <p className="pt-2 font-normal text-[#0d1c17]">
            We exist to make that experience exceptional, every time.
          </p>
        </div>
      </div>

      <motion.div
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid overflow-hidden border border-[#dcd5c9] lg:col-span-7 sm:grid-cols-12"
      >
        <div className="relative min-h-[280px] w-full sm:col-span-7">
          <Image
            src="/images/vehicles/Continental-GT.jpeg"
            alt="Scenic Drive Bentley Continental"
            fill
            sizes="(max-width: 640px) 100vw, 40vw"
            className="object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.025]"
          />
        </div>

        <div className="relative flex min-h-[240px] flex-col justify-between bg-[#0d1c17] p-8 text-[#e7e3dc] md:p-10 sm:col-span-5">
          <Quote
            className="absolute right-6 top-6 h-10 w-10 text-white/10"
            aria-hidden="true"
          />

          <p className="relative z-10 my-auto text-xs font-light leading-relaxed text-[#c5c0b8] md:text-sm">
            We blend discerning taste with real-world knowledge to match
            people with cars that truly belong in their lives.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>

  {/* ================================================================
      03 / SELECTION
  ================================================================= */}

  <section className="w-full bg-[#0d1c17] px-8 py-20 text-[#e7e3dc] md:px-16 lg:px-24 lg:py-28">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4 lg:col-span-4"
      >
        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#8a9992]">
          SELECTION
        </span>

        <h2 className="font-serif text-3xl font-light uppercase leading-tight tracking-wider text-white md:text-4xl">
          HOW VEHICLES
          <br />
          ENTER THE
          <br />
          COLLECTION.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
        {collectionSteps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              delay: shouldReduceMotion ? 0 : index * 0.07,
            }}
            className="group space-y-4 border-t border-white/15 pt-6"
          >
            <span className="block font-mono text-lg font-light text-[#9e6d48]">
              {step.number}
            </span>

            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              {step.title}
            </h3>

            <p className="text-[11px] font-light leading-relaxed text-[#8a9992] transition-colors duration-300 group-hover:text-[#c5c0b8]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* ================================================================
      04 / OUR STANDARD
  ================================================================= */}

  <section className="w-full border-b border-[#dcd5c9] px-8 py-20 md:px-16 lg:px-24 lg:py-28">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4 lg:col-span-4"
      >
        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#8a9992]">
          OUR STANDARD
        </span>

        <p className="max-w-xs text-xs font-light text-[#5d6863]">
          Three principles guide everything we do.
        </p>

        <div className="pt-4">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9e6d48]">
            THAT&apos;S OUR PROMISE
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-8">
        {standards.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <motion.div
              key={item.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
              className="group flex flex-col overflow-hidden border border-[#dcd5c9] bg-[#eae5dd]"
            >
              <div className="relative h-40 w-full overflow-hidden bg-black/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center grayscale transition-all duration-700 group-hover:scale-[1.035] group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-[#0d1c17]/5 transition-colors duration-500 group-hover:bg-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dcd5c9] bg-[#f4f0eb] text-[#0d1c17] transition-transform duration-500 group-hover:scale-105">
                    <IconComponent className="h-4 w-4" />
                  </div>

                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0d1c17]">
                    {item.title}
                  </h3>

                  <p className="text-[11px] font-light leading-relaxed text-[#5d6863]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>

  {/* ================================================================
      05 / OUR STORY
  ================================================================= */}

  <section className="grid min-h-[380px] w-full grid-cols-1 bg-[#0d1c17] text-[#e7e3dc] lg:grid-cols-12">
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="flex flex-col items-start justify-center space-y-6 p-8 md:p-16 lg:col-span-5"
    >
      <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#8a9992]">
        OUR STORY
      </span>

      <h2 className="font-serif text-3xl font-light uppercase leading-tight tracking-tight text-white md:text-4xl">
        BUILT ON PASSION.
        <br />
        DRIVEN BY TRUST.
      </h2>

      <div className="max-w-md space-y-3 text-xs font-light leading-relaxed text-[#8a9992]">
        <p>
          MSyntra Automotive began with a simple idea: to reimagine the car
          buying experience. We&apos;re a team of automotive enthusiasts,
          advisors, and perfectionists who believe in doing things the
          right way.
        </p>

        <p>
          We&apos;re not here to be the biggest. We&apos;re here to be the
          most trusted. For our clients. For our community. For the road
          ahead.
        </p>
      </div>
    </motion.div>

    <motion.div
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative min-h-[280px] w-full overflow-hidden lg:col-span-7 lg:min-h-full"
    >
      <Image
        src="/images/vehicles/Rolls-Royce-Ghost(Hero).png"
        alt="MSyntra Automotive Showroom Lounge"
        fill
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-cover object-center transition-transform duration-[1600ms] hover:scale-[1.025]"
      />
    </motion.div>
  </section>

  {/* ================================================================
      06 / FINAL CTA
  ================================================================= */}

  <section className="relative w-full overflow-hidden border-t border-[#dcd5c9] bg-[#eae5dd]">
    <div className="flex min-h-[160px] w-full flex-col items-stretch lg:flex-row">
      <div className="z-10 flex flex-1 flex-col items-start justify-between gap-8 px-8 py-10 sm:flex-row sm:items-center md:px-16 lg:pl-24 lg:pr-8">
        <h2 className="font-serif text-2xl font-light uppercase leading-tight tracking-wider text-[#0d1c17] md:text-3xl">
          READY FOR
          <br />
          WHAT&apos;S NEXT?
        </h2>

        <div className="hidden items-center text-[#9e6d48] lg:flex">
          <div className="h-px w-28 bg-[#9e6d48] xl:w-40" />
          <ArrowRight className="-ml-1 h-4 w-4" />
        </div>

        <div className="flex flex-col items-start gap-1">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-[#0d1c17] transition-colors hover:text-[#9e6d48]"
          >
            EXPLORE THE COLLECTION
            <ArrowRight className="h-4 w-4 text-[#9e6d48]" />
          </Link>

          <div className="mt-1 h-px w-full bg-[#9e6d48]/50 transition-all duration-500 group-hover:bg-[#9e6d48]" />
        </div>
      </div>

      <div
        className="relative flex w-full shrink-0 flex-col items-center justify-center bg-[#0d1c17] p-8 text-[#e7e3dc] lg:w-[320px] xl:w-[380px]"
        style={{
          clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center pl-8 text-center">
          <span className="font-serif text-4xl font-light leading-none text-[#9e6d48]">
            M
          </span>

          <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#e7e3dc]">
            MSYNTRA
          </span>

          <span className="mt-1 font-mono text-[7.5px] uppercase tracking-[0.25em] text-[#8a9992]">
            AUTOMOTIVE
          </span>
        </div>
      </div>
    </div>
  </section>
</main>

);
}