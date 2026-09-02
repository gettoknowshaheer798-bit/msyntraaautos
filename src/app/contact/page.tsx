"use client";

import {
  ArrowRight,
  Clock,
  Mail,
  Map,
  MapPin,
  Phone
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-[#f4f0eb] text-[#0d1c17] min-h-screen font-sans w-full overflow-x-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION WITH ASTON MARTIN BACKGROUND                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center bg-[#111111]">
        <Image
          src="/images/vehicles/Hero-Image.png"
          alt="MSyntra Automotive Contact Hero"
          fill
          priority
          className="object-cover object-center opacity-85"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f0eb]/90 via-[#f4f0eb]/60 to-transparent max-w-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-20 flex flex-col justify-center">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-light uppercase tracking-tight leading-[0.92] max-w-2xl">
            <span className="text-[#0d1c17] block">LET&apos;S TALK</span>
            <span className="text-[#9e6d48] block">CARS.</span>
          </h1>

          <div className="mt-10 sm:mt-12 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9e6d48] shrink-0" />
            <p className="text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.22em] text-[#718079] font-mono uppercase leading-snug">
              WE&apos;RE HERE TO HELP YOU <br />
              FIND THE RIGHT DRIVE.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. VISIT & ENQUIRY SECTION (01 / 02 SPLIT)                   */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full px-8 md:px-16 lg:px-24 py-20 border-b border-[#dcd5c9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: 01 VISIT */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:pr-8 lg:border-r border-[#dcd5c9]">
            <div className="space-y-6">
              <span className="text-sm font-serif font-light text-[#8a9992] block font-mono">
                01
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider text-[#0d1c17]">
                VISIT
              </h2>

              <div className="space-y-8 pt-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-[#9e6d48] mt-1 shrink-0" />
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#8a9992] block">
                      SHOWROOM ADDRESS
                    </span>
                    <p className="text-xs font-medium text-[#0d1c17] leading-relaxed">
                      MSyntra Automotive <br />
                      Plot No. 23, Auto Avenue <br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 text-[#9e6d48] mt-1 shrink-0" />
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#8a9992] block">
                      OPENING HOURS
                    </span>
                    <p className="text-xs font-medium text-[#0d1c17] leading-relaxed">
                      Monday – Saturday <br />
                      10:00 AM – 8:00 PM <br />
                      <span className="text-[#5d6863] font-normal">Sunday</span> <br />
                      By Appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-[#9e6d48] mt-1 shrink-0" />
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#8a9992] block">
                      PHONE
                    </span>
                    <p className="text-xs font-medium text-[#0d1c17]">
                      +92 300 1234567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-[#9e6d48] mt-1 shrink-0" />
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#8a9992] block">
                      EMAIL
                    </span>
                    <p className="text-xs font-medium text-[#0d1c17]">
                      hello@msyntra.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#location-map"
                className="inline-flex items-center gap-3 px-5 py-3 border border-[#dcd5c9] bg-[#eae5dd] text-[10px] tracking-[0.25em] font-mono uppercase text-[#0d1c17] hover:bg-[#0d1c17] hover:text-[#e7e3dc] transition-all"
              >
                <Map className="w-3.5 h-3.5 text-[#9e6d48]" />
                VIEW ON MAP <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT: 02 SEND AN ENQUIRY */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-serif font-light text-[#8a9992] block font-mono">
              02
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider text-[#0d1c17]">
              SEND AN ENQUIRY
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#eae5dd]/70 border border-[#dcd5c9] px-4 py-3 text-xs text-[#0d1c17] placeholder-[#8a9992] focus:outline-none focus:border-[#0d1c17] transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#eae5dd]/70 border border-[#dcd5c9] px-4 py-3 text-xs text-[#0d1c17] placeholder-[#8a9992] focus:outline-none focus:border-[#0d1c17] transition-colors"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#eae5dd]/70 border border-[#dcd5c9] px-4 py-3 text-xs text-[#0d1c17] placeholder-[#8a9992] focus:outline-none focus:border-[#0d1c17] transition-colors"
                required
              />

              <textarea
                rows={6}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#eae5dd]/70 border border-[#dcd5c9] px-4 py-3 text-xs text-[#0d1c17] placeholder-[#8a9992] focus:outline-none focus:border-[#0d1c17] transition-colors resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#0d1c17] text-[#e7e3dc] py-4 text-[10px] tracking-[0.3em] font-mono uppercase hover:bg-[#9e6d48] transition-colors flex items-center justify-center gap-3"
              >
                SEND <ArrowRight className="w-4 h-4 text-[#9e6d48]" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. DARK MAP SECTION WITH PIN LOCATION                         */}
      {/* ------------------------------------------------------------- */}
      <section id="location-map" className="relative w-full h-[360px] md:h-[440px] bg-[#0a0f0d] overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0f0d]/80 z-10" />
        <Image
          src="/images/dealership/map-dark.png"
          alt="MSyntra Location Map"
          fill
          className="object-cover object-center grayscale contrast-125 opacity-40 mix-blend-luminosity"
        />

        <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-8 flex items-center justify-center">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#9e6d48]/20 border border-[#9e6d48] flex items-center justify-center text-[#9e6d48] animate-pulse">
              <MapPin className="w-5 h-5 fill-[#9e6d48]" />
            </div>
            <span className="font-serif text-sm tracking-widest text-white uppercase pt-1">
              MSYNTRA
            </span>
            <span className="text-[9px] tracking-[0.25em] font-mono text-[#8a9992] uppercase">
              CLIFTON / DHA PHASE 5, KARACHI
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. SHOWROOM EXTERIOR IMAGE BANNER                             */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full h-[300px] md:h-[400px] border-t border-b border-[#dcd5c9]">
        <Image
          src="/images/vehicles/Rolls-Royce-Ghost(Hero).png"
          alt="MSyntra Automotive Exterior Showroom"
          fill
          className="object-cover object-center"
        />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. BOTTOM BAR - DRIVEN BY PASSION. FOCUSED ON YOU.           */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#0d1c17] text-[#8a9992] py-8 px-8 text-center border-t border-[#8a9992]/20">
        <p className="text-[10px] md:text-[11px] tracking-[0.35em] font-mono uppercase">
          DRIVEN BY PASSION. FOCUSED ON YOU.
        </p>
      </section>

    </div>
  );
}