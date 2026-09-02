"use client";

import {
  ArrowRight,
  Compass,
  Quote,
  Search,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const collectionSteps = [
    {
      number: "01",
      title: "SOURCED",
      description: "We search globally for vehicles that stand out for their condition, history, and potential.",
    },
    {
      number: "02",
      title: "EVALUATED",
      description: "Every car goes through a rigorous multi-point inspection, road test, and history review.",
    },
    {
      number: "03",
      title: "SELECTED",
      description: "Only the best make it. We handpick vehicles we'd be proud to own ourselves.",
    },
    {
      number: "04",
      title: "PREPARED",
      description: "Each vehicle is thoughtfully reconditioned to meet our exacting standards.",
    },
  ];

  const standards = [
    {
      icon: Compass,
      title: "CURATED",
      description: "We don't chase volume. We chase quality. Every vehicle is thoughtfully chosen for its strength, character, and long-term value.",
      image: "/images/vehicles/Continental-GT.jpeg",
    },
    {
      icon: Search,
      title: "INSPECTED",
      description: "We go beyond the basics. Our inspections are comprehensive, our standards are high, and our technicians are the best in the business.",
      image: "/images/vehicles/S-Class.jpeg",
    },
    {
      icon: ShieldCheck,
      title: "TRANSPARENT",
      description: "We believe in complete honesty. From condition reports to pricing, we share everything up front—so you can buy with total confidence.",
      image: "/images/vehicles/LaFerrari.jpeg",
    },
  ];

  return (
    <div className="bg-[#f4f0eb] text-[#0d1c17] min-h-screen font-sans w-full overflow-x-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION WITH DIAGONAL CLIPPED IMAGE & BOTTOM BAR      */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full bg-[#f4f0eb] pt-8 md:pt-12 pb-0 overflow-hidden">
        
        {/* Main Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px] items-stretch relative z-10">
          
          {/* Left Hero Typography */}
          <div className="lg:col-span-5 px-6 md:px-12 lg:pl-16 lg:pr-4 flex flex-col justify-between py-8 z-20">
            <div>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-mono mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9e6d48]" />
                OUR PURPOSE
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#0d1c17] leading-[1.08] max-w-lg">
                WE BELIEVE <br />
                THE RIGHT CAR <br />
                CHANGES THE WAY <br />
                YOU MOVE THROUGH <br />
                THE WORLD.
              </h1>
            </div>

            <div className="pt-10 inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#9e6d48] uppercase font-mono">
              <span className="w-6 h-[1px] bg-[#9e6d48]" />
              ABOUT MSYNTRA
            </div>
          </div>

          {/* Right Hero Image clipped along the exact diagonal angle */}
          <div 
            className="lg:col-span-7 relative min-h-[380px] lg:min-h-full w-full"
            style={{
              clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Image
              src="/images/vehicles/BMW-M8-Gran-Coupe.png"
              alt="BMW M8 Gran Coupe"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* --- DIAGONAL DARK GREEN BOTTOM BAR --- */}
        <div className="relative w-full -mt-10 lg:-mt-14 z-30">
          {/* Angled SVG Transition */}
          <div className="w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[40px] sm:h-[60px] text-[#0d1c17]"
              fill="currentColor"
            >
              <path d="M0,120 L1200,10 L1200,120 Z" />
            </svg>
          </div>

          {/* Dark Banner Body */}
          <div className="bg-[#0d1c17] text-[#e7e3dc] py-6 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-row justify-end items-center">
              
              <div className="flex items-center gap-8 pl-6 border-l border-[#8a9992]/30">
                <div className="text-[10px] sm:text-[11px] tracking-[0.25em] font-mono text-[#8a9992] uppercase leading-relaxed">
                  GREAT CARS. <br />
                  HONEST PROCESS. <br />
                  MEANINGFUL JOURNEYS.
                </div>
                <ArrowRight className="w-6 h-6 text-[#9e6d48]" />
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. PHILOSOPHY SECTION                                         */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full px-8 md:px-16 lg:px-24 py-20 border-b border-[#dcd5c9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-mono block">
              PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider text-[#0d1c17]">
              AUTOMOTIVE <br />
              IS PERSONAL.
            </h2>
            <div className="space-y-4 text-xs text-[#5d6863] font-light leading-relaxed">
              <p>It&apos;s more than engineering and design.</p>
              <p>It&apos;s the feeling behind the wheel.</p>
              <p>The places it takes you.</p>
              <p>And the memories it creates.</p>
              <p className="text-[#0d1c17] font-normal pt-2">
                We exist to make that experience exceptional—every time.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 border border-[#dcd5c9] overflow-hidden">
            <div className="sm:col-span-7 relative min-h-[280px] w-full">
              <Image
                src="/images/vehicles/Continental-GT.jpeg"
                alt="Scenic Drive Bentley Continental"
                fill
                className="object-cover object-center"
              />
            </div>
            
            <div className="sm:col-span-5 bg-[#0d1c17] text-[#e7e3dc] p-8 md:p-10 flex flex-col justify-between relative">
              <Quote className="w-10 h-10 text-white/10 absolute top-6 right-6" />
              <p className="text-xs md:text-sm font-light text-[#c5c0b8] leading-relaxed relative z-10 my-auto">
                We blend discerning taste with real-world knowledge to match people with cars that truly belong in their lives.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. SELECTION / HOW VEHICLES ENTER COLLECTION                   */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#0d1c17] text-[#e7e3dc] px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-mono block">
              SELECTION
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider text-white leading-tight">
              HOW VEHICLES <br />
              ENTER THE <br />
              COLLECTION.
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionSteps.map((s) => (
              <div key={s.number} className="space-y-4 border-t border-white/15 pt-6">
                <span className="text-lg font-serif font-light text-[#9e6d48] font-mono block">
                  {s.number}
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
                  {s.title}
                </h3>
                <p className="text-[11px] text-[#8a9992] font-light leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. OUR STANDARD                                               */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full px-8 md:px-16 lg:px-24 py-20 border-b border-[#dcd5c9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-mono block">
              OUR STANDARD
            </span>
            <p className="text-xs text-[#5d6863] font-light max-w-xs">
              Three principles guide everything we do.
            </p>
            <div className="pt-4">
              <span className="text-[10px] tracking-[0.2em] text-[#9e6d48] uppercase font-mono inline-flex items-center gap-2">
                THAT&apos;S OUR PROMISE <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {standards.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="bg-[#eae5dd] border border-[#dcd5c9] overflow-hidden flex flex-col justify-between">
                  <div className="relative h-40 w-full bg-black/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-full bg-[#f4f0eb] border border-[#dcd5c9] flex items-center justify-center text-[#0d1c17]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0d1c17]">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#5d6863] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. OUR STORY                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#0d1c17] text-[#e7e3dc] grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
        <div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center items-start space-y-6">
          <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-mono block">
            OUR STORY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-tight leading-tight text-white">
            BUILT ON PASSION. <br />
            DRIVEN BY TRUST.
          </h2>
          <div className="space-y-3 text-xs text-[#8a9992] font-light leading-relaxed max-w-md">
            <p>
              MSyntra Automotive began with a simple idea: to reimagine the car buying experience. We&apos;re a team of automotive enthusiasts, advisors, and perfectionists who believe in doing things the right way.
            </p>
            <p>
              We&apos;re not here to be the biggest. We&apos;re here to be the most trusted. For our clients. For our community. For the road ahead.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-full w-full">
          <Image
            src="/images/vehicles/Rolls-Royce-Ghost(Hero).png"
            alt="MSyntra Automotive Showroom Lounge"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. FULL-WIDTH SLANTED FOOTER CTA                              */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full bg-[#eae5dd] border-t border-[#dcd5c9] overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[160px]">
          
          {/* Left Content Area - Padded and aligned to design */}
          <div className="flex-1 pl-8 md:pl-16 lg:pl-24 pr-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 z-10">
            <h2 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-wider text-[#0d1c17] leading-tight">
              READY FOR <br />
              WHAT&apos;S NEXT?
            </h2>

            {/* Center Decorative Arrow Line */}
            <div className="hidden lg:flex items-center text-[#9e6d48]">
              <div className="w-28 xl:w-40 h-[1px] bg-[#9e6d48]" />
              <ArrowRight className="w-4 h-4 -ml-1" />
            </div>

            {/* Explore Link with Accent Underline */}
            <div className="flex flex-col items-start gap-1">
              <Link
                href="/catalog"
                className="text-[10px] tracking-[0.25em] text-[#0d1c17] uppercase font-mono font-medium hover:text-[#9e6d48] transition-colors inline-flex items-center gap-3"
              >
                EXPLORE THE COLLECTION <ArrowRight className="w-4 h-4 text-[#9e6d48]" />
              </Link>
              <div className="w-full h-[1px] bg-[#9e6d48]/50 mt-1" />
            </div>
          </div>

          {/* Right Full-Height & Full-Edge Slanted Dark Block */}
          <div 
            className="bg-[#0d1c17] text-[#e7e3dc] w-full lg:w-[320px] xl:w-[380px] flex flex-col items-center justify-center p-8 shrink-0 relative"
            style={{
              clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <div className="flex flex-col items-center justify-center text-center pl-8">
              <span className="font-serif text-4xl font-light text-[#9e6d48] leading-none">M</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#e7e3dc] font-mono mt-3">MSYNTRA</span>
              <span className="text-[7.5px] tracking-[0.25em] uppercase text-[#8a9992] font-mono mt-1">AUTOMOTIVE</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}