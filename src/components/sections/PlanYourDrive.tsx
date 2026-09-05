"use client";

import { ArrowRight, Calculator, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlanYourDrive() {
  return (
    <section className="w-full min-h-screen bg-[#F4F0EB] text-[#0D1C17] px-6 md:px-16 lg:px-24 py-20 flex flex-col justify-center">
      <div className="max-w-[1500px] w-full mx-auto">
        {/* HEADER */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] tracking-[0.3em] text-[#B08968] uppercase font-semibold">
              04
            </span>
            <div className="w-12 h-px bg-[#B08968]/40" />
            <span className="text-[10px] tracking-[0.25em] text-[#59645F] uppercase">
              MAKE IT YOURS
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]">
            READY TO MAKE IT YOURS?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[#59645F] leading-relaxed">
            From flexible financing to vehicle trade-ins, we&apos;ll help you
            find the right path to your next car.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* FINANCING CARD */}
          <div className="relative min-h-[460px] rounded-2xl overflow-hidden bg-[#EAE3D9] border border-[#D5C2B1]/40 group">
            <Image
              src="/images/vehicles/Make-It-Yours(Home).png"
              alt="Financing"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C17]/85 via-[#0D1C17]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mb-6 backdrop-blur-sm">
                <Calculator className="w-4 h-4 text-white" />
              </div>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#D6B18F] font-semibold block mb-2">
                FINANCING
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[0.95] mb-4">
                Your terms.
                <br />
                Your choice.
              </h3>
              <p className="text-xs md:text-[13px] text-white/75 max-w-sm leading-relaxed mb-6">
                Explore flexible financing options designed around your
                budget, lifestyle, and plans.
              </p>
              <Link
                href="/financing"
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-semibold text-white group/link"
              >
                <span>EXPLORE FINANCING</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* TRADE-IN CARD */}
          <div className="relative min-h-[460px] rounded-2xl overflow-hidden bg-[#EAE3D9] border border-[#D5C2B1]/40 group">
            <Image
              src="/images/vehicles/Start-Your-Next(Home).png"
              alt="Trade in your vehicle"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C17]/85 via-[#0D1C17]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mb-6 backdrop-blur-sm">
                <Tag className="w-4 h-4 text-white" />
              </div>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#D6B18F] font-semibold block mb-2">
                TRADE-IN
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[0.95] mb-4">
                Start your
                <br />
                next chapter.
              </h3>
              <p className="text-xs md:text-[13px] text-white/70 max-w-sm leading-relaxed mb-6">
                Get a transparent valuation for your current vehicle and put
                its value toward something new.
              </p>
              <Link
                href="/trade-in"
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-semibold text-white group/link"
              >
                <span>VALUE MY CAR</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOOKING CARD */}
        <div className="relative mt-5 rounded-2xl overflow-hidden bg-[#EAE3D9] border border-[#D5C2B1]/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 group">
          {/* Left Side: Image with gradient mask fading to background color */}
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/vehicles/Experience-it(Home).png"
              alt="Interior Viewing"
              fill
              className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
            />
            {/* Fade Out Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EAE3D9]/60 to-[#EAE3D9]" />
          </div>

          {/* Center Content Area */}
          <div className="relative z-10 flex items-center gap-5 md:ml-[22%] lg:ml-[28%] max-w-2xl">
            {/* Calendar Icon Badge */}
            <div className="shrink-0 w-12 h-12 rounded-full border border-[#B08968]/40 flex items-center justify-center bg-[#EAE3D9]/80 backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-[#B08968]" />
            </div>

            {/* Content Text */}
            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-semibold block">
                BOOK A VIEWING / TEST DRIVE
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1C2826] font-light tracking-tight leading-tight">
                Experience it in person.
              </h3>
              <p className="text-xs md:text-sm text-[#5C6460] font-normal leading-relaxed">
                Schedule a private viewing or book a test drive with our specialists.
              </p>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#B08968]/60 text-[10px] tracking-[0.2em] text-[#2C3531] uppercase font-semibold hover:bg-[#B08968] hover:text-white transition-all duration-300 group/btn rounded-sm"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B08968] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>

        {/* FOOTER STATEMENT */}
        <div className="mt-16 pt-8 border-t border-[#D5C2B1]/40 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <span className="text-[8px] tracking-[0.3em] text-[#B08968] uppercase font-semibold">
            THE MSYNTRA STANDARD
          </span>
          <p className="font-serif text-xl md:text-2xl font-light text-[#59645F]">
            WE&apos;RE HERE TO HELP YOU DRIVE WHAT DEFINES YOU.
          </p>
        </div>
      </div>
    </section>
  );
}