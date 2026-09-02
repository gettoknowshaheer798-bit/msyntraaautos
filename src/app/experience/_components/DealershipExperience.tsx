"use client";

import {
    CalendarCheck,
    Clock,
    Compass,
    Handshake,
    Key,
    MapPin,
    ShieldCheck,
    Sparkles,
    User,
    UserCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DealershipExperience() {
  return (
    <div className="bg-[#f4f0eb] text-[#0d1c17] min-h-screen font-sans">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-[#07130e] text-[#e7e3dc] overflow-hidden">
        <Image
          src="/images/vehicles/BMW-Collection-MainImage.png"
          alt="Showroom Hero"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07130e] via-transparent to-black/40" />

        <div className="relative z-10 max-w-[1500px] mx-auto h-full px-8 md:px-16 lg:px-24 flex flex-col justify-end pb-16">
          <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-light mb-3 block">
            DON'T JUST SEE IT.
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-wider mb-6">
            EXPERIENCE IT.
          </h1>
          <div className="w-12 h-[1px] bg-[#9e6d48] mb-6" />
          <p className="text-xs md:text-sm text-[#8a9992] font-light max-w-md leading-relaxed">
            More than a dealership. <br />
            A private experience tailored around you.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 01. PRIVATE VIEWING                                           */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full border-b border-[#dcd5c9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          <div className="lg:col-span-5 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-[#f4f0eb]">
            <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono mb-4 block">
              01
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-6">
              PRIVATE VIEWING
            </h2>
            <p className="text-xs md:text-sm text-[#5d6863] font-light leading-relaxed mb-8 max-w-md">
              A private, pressure-free experience designed around your time. Explore
              the vehicles you’re interested in with dedicated attention in a setting that
              offers comfort, privacy, and space to decide.
            </p>
            <div>
              <Link
                href="#book"
                className="inline-block text-[10px] tracking-[0.25em] text-[#0d1c17] font-semibold uppercase border-b border-[#0d1c17] pb-1 hover:text-[#9e6d48] hover:border-[#9e6d48] transition-colors"
              >
                SCHEDULE A VIEWING &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full bg-[#122820]">
            <Image
              src="/images/vehicles/Rolls-Royce-Ghost(Hero).png"
              alt="Private Viewing Lounge"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 02. TEST DRIVE                                                */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full border-b border-[#dcd5c9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full bg-[#122820] order-2 lg:order-1">
            <Image
              src="/images/vehicles/BMW-M8-Gran-Coupe(Hero).png"
              alt="Test Drive Experience"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-5 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-[#f4f0eb] order-1 lg:order-2">
            <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono mb-4 block">
              02
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-6">
              TEST DRIVE
            </h2>
            <p className="text-xs md:text-sm text-[#5d6863] font-light leading-relaxed mb-8 max-w-md">
              Feel the performance. Understand the precision. Our test drives are tailored
              routes that let you experience the real character of every vehicle.
            </p>
            <div>
              <Link
                href="#book"
                className="inline-block text-[10px] tracking-[0.25em] text-[#0d1c17] font-semibold uppercase border-b border-[#0d1c17] pb-1 hover:text-[#9e6d48] hover:border-[#9e6d48] transition-colors"
              >
                BOOK A TEST DRIVE &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 03. OUR SHOWROOM                                              */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full border-b border-[#dcd5c9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          <div className="lg:col-span-5 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-[#f4f0eb]">
            <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono mb-4 block">
              03
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-6">
              OUR SHOWROOM
            </h2>
            <p className="text-xs md:text-sm text-[#5d6863] font-light leading-relaxed mb-8 max-w-md">
              Visit our showroom and explore an ever-changing collection of the world's
              finest automobiles.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#dcd5c9]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9e6d48] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-[#5d6863] font-light">
                  <span className="text-[#0d1c17] font-medium block">MSYNTRA Automotive</span>
                  Plot 12, 18th Street, Phase 8, DHA, Karachi, Pakistan
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#9e6d48] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-[#5d6863] font-light">
                  <span className="text-[#0d1c17] font-medium block">OPENING HOURS</span>
                  Mon - Sat: 10:00 AM - 8:00 PM <br />
                  Sunday: 12:00 PM - 6:00 PM
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full bg-[#122820]">
            <Image
              src="/images/dealership/Showroom-Exterior.png"
              alt="MSYNTRA Showroom Exterior"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 04. CONCIERGE SERVICES                                        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 px-8 md:px-16 lg:px-24 max-w-[1500px] mx-auto border-b border-[#dcd5c9]">
        <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono mb-4 block">
          04
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-6">
          CONCIERGE SERVICES
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <p className="lg:col-span-6 text-xs md:text-sm text-[#5d6863] font-light leading-relaxed">
            From sourcing a specific model to arranging delivery, insurance, or after-sales care — 
            our concierge team is here to handle every detail so you can enjoy a seamless ownership journey.
          </p>
          <div className="lg:col-span-6 lg:text-right">
            <Link
              href="/contact"
              className="inline-block text-[10px] tracking-[0.25em] text-[#0d1c17] font-semibold uppercase border-b border-[#0d1c17] pb-1 hover:text-[#9e6d48] hover:border-[#9e6d48] transition-colors"
            >
              LEARN MORE &rarr;
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-8 bg-[#eae5dd] rounded-xl border border-[#dcd5c9] flex flex-col items-center text-center">
            <UserCheck className="w-6 h-6 text-[#9e6d48] mb-4" />
            <span className="text-xs font-semibold uppercase text-[#0d1c17]">
              Personalized Assistance
            </span>
          </div>

          <div className="p-8 bg-[#eae5dd] rounded-xl border border-[#dcd5c9] flex flex-col items-center text-center">
            <Key className="w-6 h-6 text-[#9e6d48] mb-4" />
            <span className="text-xs font-semibold uppercase text-[#0d1c17]">
              Vehicle Sourcing & Custom Orders
            </span>
          </div>

          <div className="p-8 bg-[#eae5dd] rounded-xl border border-[#dcd5c9] flex flex-col items-center text-center">
            <ShieldCheck className="w-6 h-6 text-[#9e6d48] mb-4" />
            <span className="text-xs font-semibold uppercase text-[#0d1c17]">
              Financing & Insurance Support
            </span>
          </div>

          <div className="p-8 bg-[#eae5dd] rounded-xl border border-[#dcd5c9] flex flex-col items-center text-center">
            <CalendarCheck className="w-6 h-6 text-[#9e6d48] mb-4" />
            <span className="text-xs font-semibold uppercase text-[#0d1c17]">
              Delivery & Aftercare Coordination
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BOOK YOUR EXPERIENCE FOOTER                                   */}
      {/* ------------------------------------------------------------- */}
      <section id="book" className="w-full bg-[#07130e] text-[#e7e3dc]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full bg-[#040b08]">
            <Image
              src="/images/vehicles/BMW-M8-Gran-Coupe.png"
              alt="Book Your Experience"
              fill
              className="object-cover object-center opacity-80"
            />
          </div>

          <div className="lg:col-span-6 p-8 md:p-16 lg:p-20 flex flex-col justify-center border-l border-[#122820]">
            <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-light mb-3 block">
              READY WHEN YOU ARE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wider text-[#e7e3dc] mb-8">
              BOOK YOUR <br />
              EXPERIENCE &rarr;
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#9e6d48] text-[#07130e] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#e7e3dc] transition-all">
                SCHEDULE A VIEWING
              </button>
              <button className="px-8 py-4 border border-[#122820] text-[#8a9992] hover:text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-light hover:bg-[#0e2119] transition-all">
                CONTACT ADVISOR
              </button>
            </div>
          </div>
        </div>

        {/* Feature Badges Bar */}
        <div className="border-t border-[#122820] py-6 px-8 md:px-16 lg:px-24 bg-[#050e0b]">
          <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Sparkles className="w-4 h-4 text-[#9e6d48]" />
              <span className="text-[10px] tracking-[0.2em] text-[#8a9992] uppercase font-light">
                PRIVATE EXPERIENCE
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <User className="w-4 h-4 text-[#9e6d48]" />
              <span className="text-[10px] tracking-[0.2em] text-[#8a9992] uppercase font-light">
                EXPERT ADVISORS
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Compass className="w-4 h-4 text-[#9e6d48]" />
              <span className="text-[10px] tracking-[0.2em] text-[#8a9992] uppercase font-light">
                CURATED COLLECTION
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Handshake className="w-4 h-4 text-[#9e6d48]" />
              <span className="text-[10px] tracking-[0.2em] text-[#8a9992] uppercase font-light">
                TRUSTED PARTNERSHIP
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}