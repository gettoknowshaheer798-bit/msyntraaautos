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
  UserCheck,
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
          src="/images/vehicles/Experience-it(Hero).png"
          alt="Showroom Hero"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Subtle dark scrim behind the text so it stays readable over the
            showroom photo, without darkening the whole hero image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 75%)",
          }}
        />

        {/* Center-left hero content */}
        <div className="relative z-10 max-w-[1500px] mx-auto h-full px-4 md:px-8 lg:px-12 flex items-center">
          <div className="max-w-2xl">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] text-[#e7e3dc] uppercase font-light mb-1 block">
              DON'T JUST SEE IT.
            </span>

            <h1 className="font-serif text-[clamp(2.25rem,5.5vw,5rem)] font-light uppercase tracking-wider mb-4 whitespace-nowrap text-[#e7e3dc]">
              EXPERIENCE IT.
            </h1>

             <div className="w-[360px] h-[2px] bg-[#c9c4ba] mb-6" />

           <p className="text-sm md:text-base lg:text-lg text-[#e7e3dc] font-light tracking-wide leading-relaxed whitespace-nowrap">
              More than a dealership. A private experience tailored around you.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 01. PRIVATE VIEWING                                           */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full border-b border-[#dcd5c9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          <div className="lg:col-span-5 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-[#f4f0eb]">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#0d1c17] uppercase font-mono mb-4 block">
              01
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-6">
              PRIVATE VIEWING
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-[#5d6863] font-light leading-relaxed mb-8 max-w-md">
              A private, pressure-free experience designed around your time.
              Explore the vehicles you’re interested in with dedicated attention
              in a setting that offers comfort, privacy, and space to decide.
            </p>

            <div>
              <Link
                href="#book"
                className="inline-block text-xs md:text-sm tracking-[0.2em] text-[#0d1c17] font-semibold uppercase border-b border-[#0d1c17] pb-1 hover:text-[#9e6d48] hover:border-[#9e6d48] transition-colors"
              >
                SCHEDULE A VIEWING &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full bg-[#122820]">
            <Image
              src="/images/vehicles/Experience-Private-Viewing.png"
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
              src="/images/vehicles/Experience-Test-Drive.png"
              alt="Test Drive Experience"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-5 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-[#f4f0eb] order-1 lg:order-2">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#0d1c17] uppercase font-mono mb-4 block">
              02
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-6">
              TEST DRIVE
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-[#5d6863] font-light leading-relaxed mb-8 max-w-md">
              Feel the performance. Understand the precision. Our test drives
              are tailored routes that let you experience the real character
              of every vehicle.
            </p>

            <div>
              <Link
                href="#book"
                className="inline-block text-xs md:text-sm tracking-[0.2em] text-[#0d1c17] font-semibold uppercase border-b border-[#0d1c17] pb-1 hover:text-[#9e6d48] hover:border-[#9e6d48] transition-colors"
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
        {/* Mobile / tablet: simple stacked layout — the blend effect only
            reads at wider widths, so we just stack panel + photo here */}
        <div className="lg:hidden">
          <div className="p-8 md:p-16 bg-[#f4f0eb]">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#0d1c17] uppercase font-mono mb-4 block">
              03
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-6">
              OUR SHOWROOM
            </h2>

            <p className="text-sm md:text-base text-[#5d6863] font-light leading-relaxed mb-8 max-w-md">
              Visit our showroom and explore an ever-changing collection of the
              world's finest automobiles.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#dcd5c9]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9e6d48] flex-shrink-0 mt-0.5" />

                <div className="text-sm md:text-base text-[#5d6863] font-light">
                  <span className="text-[#0d1c17] font-medium block">
                    MSYNTRA Automotive
                  </span>
                  Plot 12, 18th Street, Phase 8, DHA, Karachi, Pakistan
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#9e6d48] flex-shrink-0 mt-0.5" />

                <div className="text-sm md:text-base text-[#5d6863] font-light">
                  <span className="text-[#0d1c17] font-medium block">
                    OPENING HOURS
                  </span>
                  Mon - Sat: 10:00 AM - 8:00 PM
                  <br />
                  Sunday: 12:00 PM - 6:00 PM
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[300px]">
            <Image
              src="/images/vehicles/Experience-Our-Showroom.png"
              alt="MSYNTRA Showroom Exterior"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Desktop: full-bleed photo with the text floating in a blended scrim */}
        <div className="hidden lg:block relative min-h-[500px] overflow-hidden bg-[#122820]">
          <Image
            src="/images/vehicles/Experience-Our-Showroom.png"
            alt="MSYNTRA Showroom Exterior"
            fill
            className="object-cover object-center"
          />

          {/* The blend: solid cream on the left, dissolving to fully
              transparent by ~66% of the width so the photo takes over
              cleanly on the right. Tune the stop percentages to taste
              for whichever showroom photo you're using. */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f4f0eb 0%, #f4f0eb 28%, rgba(244,240,235,0.88) 38%, rgba(244,240,235,0.4) 52%, rgba(244,240,235,0) 66%)",
            }}
          />

          {/* Text sits on top of the scrim — no background of its own,
              which is what actually sells the blend */}
          <div className="relative z-10 grid grid-cols-12 min-h-[500px]">
            <div className="col-span-5 p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-xs md:text-sm tracking-[0.3em] text-[#0d1c17] uppercase font-mono mb-4 block">
                03
              </span>

              <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-6">
                OUR SHOWROOM
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-[#5d6863] font-light leading-relaxed mb-8 max-w-md">
                Visit our showroom and explore an ever-changing collection of
                the world's finest automobiles.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#0d1c17]/15">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#9e6d48] flex-shrink-0 mt-0.5" />

                  <div className="text-sm md:text-base text-[#5d6863] font-light">
                    <span className="text-[#0d1c17] font-medium block">
                      MSYNTRA Automotive
                    </span>
                    Plot 12, 18th Street, Phase 8, DHA, Karachi, Pakistan
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#9e6d48] flex-shrink-0 mt-0.5" />

                  <div className="text-sm md:text-base text-[#5d6863] font-light">
                    <span className="text-[#0d1c17] font-medium block">
                      OPENING HOURS
                    </span>
                    Mon - Sat: 10:00 AM - 8:00 PM
                    <br />
                    Sunday: 12:00 PM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-7" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 04. CONCIERGE SERVICES                                        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-20 px-8 md:px-16 lg:px-24 max-w-[1500px] mx-auto border-b border-[#dcd5c9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left: label, heading, copy, link */}
          <div className="lg:col-span-5">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#0d1c17] uppercase font-mono mb-3 block">
              04
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light uppercase tracking-wider mb-3">
              CONCIERGE SERVICES
            </h2>

            <div className="w-10 h-[2px] bg-[#9e6d48] mb-6" />

            <p className="text-xs md:text-sm text-[#5d6863] font-light leading-relaxed mb-6 max-w-sm">
              From sourcing a specific model to arranging delivery, insurance,
              or after-sales care — our concierge team is here to handle every
              detail so you can enjoy a seamless ownership journey.
            </p>

            <Link
              href="/contact"
              className="inline-block text-[10px] tracking-[0.25em] text-[#9e6d48] font-semibold uppercase border-b border-[#9e6d48] pb-1 hover:text-[#0d1c17] hover:border-[#0d1c17] transition-colors"
            >
              LEARN MORE &rarr;
            </Link>
          </div>

          {/* Right: plain icon items, divided by thin vertical rules */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#dcd5c9]">
            <div className="flex flex-col items-center text-center px-3 md:px-4">
              <UserCheck className="w-7 h-7 text-[#9e6d48] mb-4" strokeWidth={1.25} />
              <span className="text-xs text-[#0d1c17] font-light leading-snug">
                Personalized
                <br />
                Assistance
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-3 md:px-4">
              <Key className="w-7 h-7 text-[#9e6d48] mb-4" strokeWidth={1.25} />
              <span className="text-xs text-[#0d1c17] font-light leading-snug">
                Vehicle Sourcing
                <br />& Custom Orders
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-3 md:px-4">
              <ShieldCheck className="w-7 h-7 text-[#9e6d48] mb-4" strokeWidth={1.25} />
              <span className="text-xs text-[#0d1c17] font-light leading-snug">
                Financing &
                <br />
                Insurance Support
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-3 md:px-4">
              <CalendarCheck className="w-7 h-7 text-[#9e6d48] mb-4" strokeWidth={1.25} />
              <span className="text-xs text-[#0d1c17] font-light leading-snug">
                Delivery &
                <br />
                Aftercare Coordination
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BOOK YOUR EXPERIENCE FOOTER                                   */}
      {/* ------------------------------------------------------------- */}
      <section id="book" className="w-full bg-[#07130e] text-[#e7e3dc]">
        {/* Mobile / tablet: simple stacked layout, no blend needed at this width */}
        <div className="lg:hidden">
          <div className="relative min-h-[300px] bg-[#040b08]">
            <Image
              src="/images/vehicles/Experience-Book-Your-Vehicle.png"
              alt="Book Your Experience"
              fill
              className="object-cover object-center opacity-80"
            />
          </div>

          <div className="p-8 md:p-16 flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-light mb-3 block">
              READY WHEN YOU ARE
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wider text-[#e7e3dc] mb-8">
              BOOK YOUR
              <br />
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

        {/* Desktop: full-bleed photo blending into the dark green panel —
            same technique as the Showroom section, just inverted (photo on
            the left fading into solid green-black on the right where the
            text sits) and tuned to the existing dark green palette */}
        <div className="hidden lg:block relative min-h-[400px] overflow-hidden bg-[#07130e]">
          <Image
            src="/images/vehicles/Experience-Book-Your-Vehicle.png"
            alt="Book Your Experience"
            fill
            className="object-contain object-left opacity-90"
          />

          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(7,19,14,0) 0%, rgba(7,19,14,0.35) 42%, rgba(7,19,14,0.8) 58%, #07130e 72%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-12 min-h-[400px]">
            <div className="col-span-6" />

            <div className="col-span-6 p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-light mb-3 block">
                READY WHEN YOU ARE
              </span>

              <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wider text-[#e7e3dc] mb-8">
                BOOK YOUR
                <br />
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