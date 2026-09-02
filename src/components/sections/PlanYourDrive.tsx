"use client";

import { ArrowRight, Calculator, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlanYourDrive() {
  return (
    <section className="w-full min-h-screen bg-[#f4f0eb] text-[#0d1c17] px-8 md:px-16 lg:px-24 py-24 flex flex-col justify-center">
      <div className="max-w-[1500px] w-full mx-auto">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-[11px] tracking-[0.3em] text-[#9e6d48] uppercase font-semibold block mb-6">
              04 / MAKE IT YOURS
            </span>
            <h2
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[90px] tracking-[-0.03em] text-[#0d1c17] uppercase font-light leading-[0.9]"
              style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
            >
              READY TO <br />
              MAKE IT YOURS?
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs md:text-sm text-[#5d6863] font-light leading-relaxed max-w-xs lg:ml-auto">
              Flexible options. Clear value. <br />
              Personalized for the way you drive.
            </p>
            <div className="w-8 h-[1px] bg-[#9e6d48]/60 mt-4 lg:ml-auto" />
          </div>
        </div>

        {/* BENTO GRID (TOP ROW: 2 CARDS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* CARD 1: FINANCING (Light Theme Card) */}
          <div className="relative rounded-2xl overflow-hidden bg-[#eae5dd] border border-[#dcd5c9] p-8 md:p-12 min-h-[500px] flex flex-col justify-between group">
            {/* Background Car Image */}
            <div className="absolute inset-0 z-0 opacity-80 group-hover:scale-105 transition-transform duration-700">
              <Image
                src="/images/vehicles/BMW-M8-Gran-Coupe.png"
                alt="Financing Vehicle"
                fill
                className="object-cover object-right-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#eae5dd] via-[#eae5dd]/70 to-transparent" />
            </div>

            {/* Top Tag */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#9e6d48]/30 flex items-center justify-center bg-[#eae5dd]/80 backdrop-blur-sm">
                <Calculator className="w-3.5 h-3.5 text-[#9e6d48]" />
              </div>
              <span className="text-[10px] tracking-[0.25em] text-[#9e6d48] uppercase font-semibold">
                FINANCING
              </span>
            </div>

            {/* Left Content & Calculator Floating Card */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end mt-12">
              <div className="sm:col-span-6">
                <h3 className="font-serif text-4xl md:text-5xl text-[#0d1c17] font-light leading-tight mb-4">
                  Make it <br />
                  yours.
                </h3>
                <p className="text-xs text-[#5d6863] font-light leading-relaxed max-w-xs mb-8">
                  Personalized financing options that fit your lifestyle.
                </p>
                <Link
                  href="/financing"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#9e6d48]/50 text-[10px] tracking-[0.2em] text-[#0d1c17] uppercase font-semibold hover:bg-[#0d1c17] hover:text-[#e7e3dc] transition-all group/btn"
                >
                  <span>CALCULATE PAYMENT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Calculator UI Card Overlay */}
              <div className="sm:col-span-6 bg-[#f4f0eb]/90 backdrop-blur-md rounded-xl p-6 border border-[#dcd5c9] shadow-xl text-[11px]">
                <div className="text-[9px] tracking-widest text-[#8a9992] uppercase font-semibold mb-1">
                  ESTIMATED PAYMENT
                </div>
                <div className="font-serif text-3xl text-[#0d1c17] mb-6">
                  $1,248 <span className="text-xs font-sans text-[#8a9992]">/mo*</span>
                </div>

                <div className="space-y-4 text-[10px]">
                  <div className="flex justify-between text-[#5d6863]">
                    <span>VEHICLE PRICE</span>
                    <span className="font-medium text-[#0d1c17]">$142,850</span>
                  </div>
                  <div className="flex justify-between text-[#5d6863]">
                    <span>DOWN PAYMENT</span>
                    <span className="font-medium text-[#0d1c17]">$25,000</span>
                  </div>
                  <div className="w-full bg-[#dcd5c9] h-1 rounded-full overflow-hidden">
                    <div className="bg-[#9e6d48] w-2/5 h-full" />
                  </div>

                  <div className="flex justify-between text-[#5d6863] pt-2">
                    <span>TERM</span>
                    <span className="font-medium text-[#0d1c17]">60 MONTHS</span>
                  </div>
                  <div className="flex justify-between text-[#5d6863]">
                    <span>APR</span>
                    <span className="font-medium text-[#0d1c17]">5.49%</span>
                  </div>
                  <div className="w-full bg-[#dcd5c9] h-1 rounded-full overflow-hidden">
                    <div className="bg-[#9e6d48] w-3/5 h-full" />
                  </div>
                </div>

                <div className="text-[8px] text-[#8a9992] mt-4">
                  *Estimated with approved credit.
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: TRADE-IN (Dark Green Theme Card) */}
          <div className="relative rounded-2xl overflow-hidden bg-[#07130e] text-[#e7e3dc] border border-[#122820] p-8 md:p-12 min-h-[500px] flex flex-col justify-between group">
            {/* Background Car Image */}
            <div className="absolute inset-0 z-0 opacity-70 group-hover:scale-105 transition-transform duration-700">
              <Image
                src="/images/vehicles/Rolls-Royce-Ghost.png"
                alt="Trade-In Vehicle"
                fill
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07130e] via-[#07130e]/80 to-transparent" />
            </div>

            {/* Top Tag */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#9e6d48]/30 flex items-center justify-center bg-[#07130e]/80 backdrop-blur-sm">
                <Tag className="w-3.5 h-3.5 text-[#9e6d48]" />
              </div>
              <span className="text-[10px] tracking-[0.25em] text-[#9e6d48] uppercase font-semibold">
                TRADE-IN
              </span>
            </div>

            {/* Content & Steps Box */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end mt-12">
              <div className="sm:col-span-6">
                <h3 className="font-serif text-4xl md:text-5xl text-[#e7e3dc] font-light leading-tight mb-4">
                  Start your <br />
                  next.
                </h3>
                <p className="text-xs text-[#8a9992] font-light leading-relaxed max-w-xs mb-8">
                  Get a competitive offer for your current vehicle in minutes.
                </p>
                <Link
                  href="/trade-in"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#9e6d48]/50 text-[10px] tracking-[0.2em] text-[#e7e3dc] uppercase font-semibold hover:bg-[#9e6d48] hover:text-[#07130e] transition-all group/btn"
                >
                  <span>VALUE MY CAR</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Steps Floating Card */}
              <div className="sm:col-span-6 bg-[#0a1a14]/90 backdrop-blur-md rounded-xl p-6 border border-[#18362b] space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[10px] text-[#9e6d48]">
                    1
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wider text-[#e7e3dc] uppercase font-medium">
                      YOUR VEHICLE
                    </div>
                    <div className="text-[9px] text-[#8a9992] font-light">
                      Tell us about your car.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[10px] text-[#9e6d48]">
                    2
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wider text-[#e7e3dc] uppercase font-medium">
                      GET YOUR OFFER
                    </div>
                    <div className="text-[9px] text-[#8a9992] font-light">
                      Receive your estimate.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[10px] text-[#9e6d48]">
                    3
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wider text-[#e7e3dc] uppercase font-medium">
                      APPLY & UPGRADE
                    </div>
                    <div className="text-[9px] text-[#8a9992] font-light">
                      Use it toward your next drive.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: BOOK A VIEWING BANNER */}
        <div className="relative rounded-2xl overflow-hidden bg-[#eae5dd] border border-[#dcd5c9] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
            <Image
              src="/images/vehicles/S-Class.jpeg"
              alt="Interior Viewing"
              fill
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#eae5dd] via-[#eae5dd]/90 to-transparent" />
          </div>

          <div className="relative z-10 flex items-center gap-6">
            <div className="w-10 h-10 rounded-full border border-[#9e6d48]/30 flex items-center justify-center bg-[#eae5dd]/80 backdrop-blur-sm shrink-0">
              <Calendar className="w-4 h-4 text-[#9e6d48]" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#9e6d48] uppercase font-semibold block mb-1">
                BOOK A VIEWING / TEST DRIVE
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light mb-2">
                Experience it in person.
              </h3>
              <p className="text-xs text-[#5d6863] font-light">
                Schedule a private viewing or book a test drive with our specialists.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#9e6d48]/50 text-[10px] tracking-[0.25em] text-[#0d1c17] uppercase font-semibold hover:bg-[#0d1c17] hover:text-[#e7e3dc] transition-all group/btn"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* FOOTER MOTTO */}
        <div className="text-center mt-16 pt-8 border-t border-[#dcd5c9]">
          <div className="w-8 h-[1px] bg-[#9e6d48]/60 mx-auto mb-4" />
          <p className="text-[11px] tracking-[0.25em] text-[#5d6863] uppercase font-medium">
            WE&apos;RE HERE TO HELP YOU DRIVE WHAT DEFINES YOU.
          </p>
          <div className="w-8 h-[1px] bg-[#9e6d48]/60 mx-auto mt-4" />
        </div>

      </div>
    </section>
  );
}