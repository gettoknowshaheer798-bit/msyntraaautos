"use client";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wrench
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ServicePage() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const services = [
    {
      number: "01",
      title: "MAINTENANCE",
      description: "Routine maintenance that keeps your vehicle performing at its best.",
      image: "/images/vehicles/BMW-M8-FICarousel.jpeg",
      alt: "Routine vehicle maintenance",
    },
    {
      number: "02",
      title: "DIAGNOSTICS",
      description: "Advanced diagnostics to quickly identify issues and ensure reliability.",
      image: "/images/vehicles/S-ClassFICarousel.jpeg",
      alt: "Advanced vehicle diagnostics screen",
    },
    {
      number: "03",
      title: "REPAIRS",
      description: "Skilled technicians. Genuine parts. Restored performance and peace of mind.",
      image: "/images/vehicles/TacomaFICarousel.jpeg",
      alt: "Engine repairs and maintenance",
    },
    {
      number: "04",
      title: "DETAILING",
      description: "Precision detailing that brings out the beauty in every detail.",
      image: "/images/vehicles/GhostFICarousel.jpeg",
      alt: "Precision vehicle detailing",
    },
    {
      number: "05",
      title: "INSPECTIONS",
      description: "Comprehensive inspections for safety, performance, and confidence.",
      image: "/images/vehicles/LFerrariFICarousel.jpeg",
      alt: "Under-carriage vehicle inspection",
    },
  ];

  return (
    <div className="bg-[#f4f0eb] text-[#0d1c17] min-h-screen font-sans w-full">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                               */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full bg-[#0d1c17] text-[#e7e3dc] min-h-[580px] flex items-center overflow-hidden">
        <div className="w-full px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-20 z-10">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono block">
              SERVICE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight leading-none text-white">
              CARE BEYOND <br />
              THE DRIVE
            </h1>
            <p className="text-xs md:text-sm text-[#8a9992] font-light leading-relaxed max-w-md">
              Expert care. Genuine parts. Uncompromising standards. Because every mile deserves it.
            </p>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6 relative h-[300px] sm:h-[420px] w-full">
            <Image
              src="/images/vehicles/Hero-Image.png"
              alt="Care Beyond The Drive - Green Aston Martin"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. SERVICES LIST SECTION                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full border-b border-[#dcd5c9]">
        {services.map((service, index) => (
          <div
            key={service.number}
            className={`grid grid-cols-1 lg:grid-cols-12 ${
              index !== services.length - 1 ? "border-b border-[#dcd5c9]" : ""
            }`}
          >
            {/* Left Info Box */}
            <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-center bg-[#f4f0eb] space-y-4">
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-4xl md:text-5xl font-light text-[#9e6d48] font-mono">
                  {service.number}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-wider text-[#0d1c17]">
                  {service.title}
                </h2>
              </div>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed max-w-md pl-14">
                {service.description}
              </p>
            </div>

            {/* Right Image Box */}
            <div className="lg:col-span-6 relative min-h-[240px] md:min-h-[300px] w-full bg-[#eae5dd]">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. SCHEDULE YOUR SERVICE FORM SECTION                          */}
      {/* ------------------------------------------------------------- */}
      <section id="book-service" className="w-full px-8 md:px-16 lg:px-24 py-20 bg-[#f4f0eb]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Left Side Text & Value Props */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono block mb-2">
                SERVICE BOOKING
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider text-[#0d1c17] mb-4">
                SCHEDULE YOUR <br />
                SERVICE
              </h2>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed max-w-sm">
                Fill out the form and our service team will get back to you shortly.
              </p>
            </div>

            <div className="space-y-6 pt-4 text-xs text-[#5d6863]">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[#9e6d48] flex-shrink-0 mt-0.5">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-[#0d1c17] block">Certified Technicians</span>
                  <p className="font-light text-[11px] text-[#8a9992]">Master experts with brand-specific training.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[#9e6d48] flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-[#0d1c17] block">Genuine Parts</span>
                  <p className="font-light text-[11px] text-[#8a9992]">Only authentic parts for peak performance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[#9e6d48] flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-[#0d1c17] block">Transparent Process</span>
                  <p className="font-light text-[11px] text-[#8a9992]">Clear updates and honest recommendations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right Side Inputs */}
          <div className="lg:col-span-7 bg-[#eae5dd] border border-[#dcd5c9] p-8 md:p-10 shadow-sm space-y-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#9e6d48]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#9e6d48]"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#9e6d48]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Type */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                    SERVICE TYPE
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#9e6d48]"
                  >
                    <option value="">Select a service</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="repairs">Repairs</option>
                    <option value="detailing">Detailing</option>
                    <option value="inspections">Inspections</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                    PREFERRED DATE
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#9e6d48]"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                  VEHICLE INFORMATION
                </label>
                <input
                  type="text"
                  placeholder="Make, Model, Year (e.g. BMW M8 2023)"
                  value={vehicleInfo}
                  onChange={(e) => setVehicleInfo(e.target.value)}
                  className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#9e6d48]"
                />
              </div>

              {/* Additional Details */}
              <div>
                <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                  ADDITIONAL DETAILS
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your vehicle or service needs"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#9e6d48] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#0d1c17] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#9e6d48] hover:text-[#0d1c17] transition-all inline-flex items-center gap-2"
                >
                  SUBMIT INQUIRY <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. DRIVEN BY PERFORMANCE BANNER                               */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#0d1c17] text-[#e7e3dc] grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
        <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-center items-start">
          <span className="text-[10px] tracking-[0.25em] text-[#8a9992] uppercase font-mono mb-2 block">
            WE&apos;RE HERE FOR YOU
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-tight leading-tight mb-4 text-white">
            DRIVEN BY PERFORMANCE. <br />
            DEFINED BY CARE.
          </h2>
          <p className="text-xs text-[#8a9992] font-light max-w-sm mb-6">
            Your vehicle deserves expert care you can trust.
          </p>
          <a
            href="#book-service"
            className="px-8 py-3.5 border border-[#9e6d48]/60 text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#9e6d48] hover:text-[#0d1c17] transition-all inline-flex items-center gap-2"
          >
            SCHEDULE SERVICE <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-full w-full">
          <Image
            src="/images/vehicles/Hero-Image.png"
            alt="Aston Martin Dark Edition"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

    </div>
  );
}