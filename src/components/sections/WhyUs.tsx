"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const STANDARDS = [
  {
    number: "01",
    title: "CURATED",
    description: "Every vehicle selected with intent.",
    href: "/about#curated",
    hasVerticalLine: true,
  },
  {
    number: "02",
    title: "INSPECTED",
    description: "Evaluated before entering our collection.",
    href: "/about#inspected",
    hasVerticalLine: false,
  },
  {
    number: "03",
    title: "TRANSPARENT",
    description: "Straightforward ownership, always.",
    href: "/about#transparent",
    hasVerticalLine: false,
  },
];

export default function WhyUs() {
  return (
    <section className="w-full min-h-screen bg-[#07130e] text-[#e7e3dc] px-8 md:px-16 lg:px-24 flex flex-col justify-center border-t border-[#122820]">
      <div className="max-w-[1500px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch py-16">
        
        {/* Left Column: Heading & Philosophy */}
        <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-12">
          <div>
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] tracking-[0.3em] text-[#9e6d48] uppercase font-semibold">
                03 / THE MSYNTRA STANDARD
              </span>
            </div>

            {/* Main Editorial Display Title */}
            <h2
              className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] tracking-[-0.035em] text-[#e7e3dc] uppercase font-light leading-[0.88] mb-12"
              style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
            >
              WE LOOK <br />
              BEYOND <br />
              THE BADGE.
            </h2>
          </div>

          <div>
            <p className="text-xs md:text-sm text-[#8a9992] font-light max-w-xs leading-relaxed mb-8 tracking-wide">
              A standard built on discernment, discipline, and respect for the drive.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#9e6d48] hover:text-[#e7e3dc] uppercase font-semibold transition-colors group"
            >
              <span>Our Philosophy</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Numbered List */}
        <div className="lg:col-span-5 relative flex flex-col justify-around pt-8 lg:pt-0 lg:pl-16 border-t lg:border-t-0 lg:border-l border-[#8c5c37]/25">
          {STANDARDS.map((item, index) => (
            <Link
              key={item.number}
              href={item.href}
              className={`group flex items-start justify-between py-10 ${
                index !== STANDARDS.length - 1 ? "border-b border-[#8c5c37]/20" : ""
              }`}
            >
              <div className="flex items-start gap-8">
                {/* Number with optional vertical line separator */}
                <div className="flex items-center gap-6">
                  <span className="font-serif text-4xl md:text-5xl text-[#9e6d48] font-light tracking-tight">
                    {item.number}
                  </span>
                  {item.hasVerticalLine && (
                    <span className="w-[1px] h-8 bg-[#8c5c37]/40 block" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm md:text-base tracking-[0.25em] text-[#e7e3dc] uppercase font-medium mb-2 group-hover:text-[#9e6d48] transition-colors">
                    {item.title}
                  </h3>

                  {/* Horizontal Underline Accent */}
                  <div className="w-8 h-[1px] bg-[#8c5c37]/60 mb-4" />

                  <p className="text-xs text-[#a38771] font-light tracking-wide max-w-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-4 h-4 text-[#8c5c37] group-hover:text-[#e7e3dc] group-hover:translate-x-1 transition-all mt-1" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}