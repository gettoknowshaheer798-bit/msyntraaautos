"use client";

import {
  ArrowRight,
  Car,
  FileCheck,
  Key,
  Lock,
  ShieldCheck,
  Sparkles,
  Tag,
  TrendingUp
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TradeInPage() {
  // Valuation Form State
  const [step, setStep] = useState(1);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [trim, setTrim] = useState("");
  const [mileage, setMileage] = useState("");

  const steps = [
    { number: "01", label: "VEHICLE" },
    { number: "02", label: "CONDITION" },
    { number: "03", label: "CONTACT" },
    { number: "04", label: "REVIEW" },
  ];

  return (
    <div className="bg-[#f4f0eb] text-[#07130e] min-h-screen font-sans w-full">

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                               */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full h-[85vh] min-h-[640px] max-h-[880px] flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <Image
          src="/images/vehicles/Trade-In(Hero).png"
          alt="Trade In Hero BMW M8"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient behind the text only, fading into the photo */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-[#07130e] via-[#07130e]/70 to-transparent" />

        {/* Text content */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
          <div className="max-w-xl space-y-8">
            <span className="text-[11px] tracking-[0.3em] text-[#e7e3dc] uppercase font-mono block">
              A BETTER WAY TO TRADE-IN
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light uppercase tracking-tight leading-[0.95] text-white">
              READY FOR <br />
              WHAT&apos;S NEXT?
            </h1>
            <p className="text-sm md:text-base text-[#8a9992] font-light leading-relaxed max-w-md">
              Get a fair value for your current vehicle and apply it toward something exceptional.
            </p>
            <div className="pt-3">
              <a
                href="#valuation-form"
                className="inline-flex items-center gap-3 px-7 py-4 border border-[#e7e3dc]/50 text-[11px] tracking-[0.25em] text-[#e7e3dc] uppercase font-semibold hover:border-[#e7e3dc] hover:bg-[#e7e3dc] hover:text-[#07130e] transition-all"
              >
                HOW TRADE-IN WORKS <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. VALUATION FORM SECTION WITH FULL BACKGROUND SIDEBAR        */}
      {/* ------------------------------------------------------------- */}
      <section id="valuation-form" className="w-full px-8 md:px-16 lg:px-24 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider text-[#07130e] mb-2">
            GET YOUR TRADE-IN VALUE
          </h2>
          <p className="text-xs text-[#5d6863] font-light">
            Quick, fair and completely commitment-free.
          </p>
        </div>

        {/* Stepper Header */}
        <div className="max-w-4xl mx-auto mb-12 flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#dcd5c9] -z-0 -translate-y-1/2" />
          {steps.map((s, idx) => {
            const isActive = idx + 1 === step;
            const isCompleted = idx + 1 < step;
            return (
              <div key={s.number} className="relative z-10 flex items-center gap-2 bg-[#f4f0eb] px-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono transition-colors ${
                    isActive
                      ? "bg-[#07130e] text-white"
                      : isCompleted
                      ? "bg-[#07130e] text-[#e7e3dc]"
                      : "bg-[#eae5dd] text-[#8a9992]"
                  }`}
                >
                  {s.number}
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase font-mono ${isActive ? "text-[#07130e] font-semibold" : "text-[#8a9992]"}`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="max-w-5xl mx-auto bg-[#eae5dd] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm min-h-[500px]">

          {/* Form Left Side */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.2em] text-[#07130e] font-mono block mb-1">
                  STEP 01
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#07130e]">
                  Your Vehicle
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Make */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                    MAKE
                  </label>
                  <select
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#07130e]"
                  >
                    <option value="">Select make</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Audi">Audi</option>
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                    MODEL
                  </label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#07130e]"
                  >
                    <option value="">Select model</option>
                    <option value="M8 Gran Coupe">M8 Gran Coupe</option>
                    <option value="S-Class">S-Class</option>
                    <option value="911 GT3">911 GT3</option>
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                    YEAR
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#07130e]"
                  >
                    <option value="">Select year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>

                {/* Trim */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                    TRIM (OPTIONAL)
                  </label>
                  <select
                    value={trim}
                    onChange={(e) => setTrim(e.target.value)}
                    className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#07130e]"
                  >
                    <option value="">Select trim</option>
                    <option value="Competition">Competition</option>
                    <option value="Base">Base</option>
                  </select>
                </div>
              </div>

              {/* Mileage */}
              <div>
                <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">
                  MILEAGE
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Enter mileage"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 pr-12 focus:outline-none focus:border-[#07130e]"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#8a9992]">
                    MI
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                className="px-8 py-3.5 bg-[#07130e] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#07130e]/85 transition-all inline-flex items-center gap-2"
              >
                CONTINUE <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Form Right Side — Full Height Background Image */}
          <div className="lg:col-span-5 relative p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-[#dcd5c9] flex flex-col justify-between overflow-hidden min-h-[400px]">

            {/* Background Image covering full container */}
            <Image
              src="/images/vehicles/BMW-M8-FICarousel.jpeg"
              alt="Why trade in with MSyntra"
              fill
              className="object-cover object-bottom z-0"
              priority
            />

            {/* Overlay Content */}
            <div className="relative z-10 space-y-6">
              <div className="w-9 h-9 rounded-full border border-[#07130e]/50 bg-[#f4f0eb]/80 backdrop-blur-sm flex items-center justify-center text-[#07130e]">
                <Sparkles className="w-4 h-4" />
              </div>

              <h4 className="font-serif text-2xl font-light text-[#07130e]">
                Why trade in with MSyntra?
              </h4>

              <div className="space-y-5 text-xs text-[#2d3833]">
                <div className="flex gap-3 items-start">
                  <TrendingUp className="w-4 h-4 text-[#07130e] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#07130e] block">Fair, market-based offers</span>
                    <p className="font-light text-[11px] text-[#4d5853]">Powered by real market data.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Tag className="w-4 h-4 text-[#07130e] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#07130e] block">Apply value toward your next car</span>
                    <p className="font-light text-[11px] text-[#4d5853]">Seamless and hassle-free.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-4 h-4 text-[#07130e] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#07130e] block">No obligation</span>
                    <p className="font-light text-[11px] text-[#4d5853]">Get your value with zero commitment.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Lock className="w-4 h-4 text-[#07130e] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#07130e] block">Fast and secure</span>
                    <p className="font-light text-[11px] text-[#4d5853]">Your information is always protected.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. HOW IT WORKS SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full px-8 md:px-16 lg:px-24 py-16 border-t border-[#dcd5c9]">
        <span className="text-[10px] tracking-[0.3em] text-[#07130e] uppercase font-mono mb-2 block">
          SIMPLE, TRANSPARENT, REWARDING
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider text-[#07130e] mb-12">
          HOW IT WORKS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 01 */}
          <div className="bg-[#eae5dd] p-8 border border-[#dcd5c9] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8a9992] block mb-4">01</span>
              <Car className="w-7 h-7 text-[#07130e] mb-6 stroke-[1.25]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#07130e] mb-2">
                TELL US ABOUT YOUR CAR
              </h3>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed">
                Share a few details about your vehicle in just a couple of minutes.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-[#eae5dd] p-8 border border-[#dcd5c9] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8a9992] block mb-4">02</span>
              <FileCheck className="w-7 h-7 text-[#07130e] mb-6 stroke-[1.25]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#07130e] mb-2">
                GET YOUR VALUE
              </h3>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed">
                We analyze real market data to give you a fair trade-in estimate.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-[#eae5dd] p-8 border border-[#dcd5c9] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8a9992] block mb-4">03</span>
              <Tag className="w-7 h-7 text-[#07130e] mb-6 stroke-[1.25]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#07130e] mb-2">
                APPLY TOWARD YOUR NEXT CAR
              </h3>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed">
                Use your trade-in value toward any vehicle in our collection.
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="bg-[#eae5dd] p-8 border border-[#dcd5c9] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8a9992] block mb-4">04</span>
              <Key className="w-7 h-7 text-[#07130e] mb-6 stroke-[1.25]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#07130e] mb-2">
                DRIVE WHAT&apos;S NEXT
              </h3>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed">
                Complete your purchase and enjoy the MSyntra experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. TURN YOUR CURRENT CAR BANNER                               */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#07130e] text-[#e7e3dc] grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
        <div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center items-start">
          <span className="text-[10px] tracking-[0.25em] text-[#8a9992] uppercase font-mono mb-2 block">
            THE NEXT CHAPTER STARTS HERE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-tight leading-tight mb-4 text-white">
            TURN YOUR <br />
            CURRENT CAR <br />
            INTO YOUR <br />
            NEXT ONE.
          </h2>
          <p className="text-xs text-[#8a9992] font-light max-w-sm mb-6">
            Get your trade-in value today and take the first step toward driving something exceptional.
          </p>
          <a
            href="#valuation-form"
            className="px-8 py-3.5 bg-[#e7e3dc] text-[#07130e] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-white transition-all inline-flex items-center gap-2"
          >
            GET YOUR TRADE-IN VALUE <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="lg:col-span-7 relative min-h-[260px] lg:min-h-full w-full">
          <Image
            src="/images/vehicles/BMW-M8-Gran-Coupe(Hero).png"
            alt="BMW M8 Dark Edition"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. FOOTER VALUE PROPOSITIONS                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#07130e] border-t border-white/10 text-[#8a9992] py-8 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white block uppercase mb-1">
              FAIR & COMPETITIVE
            </span>
            <p className="text-[11px] font-light">
              Transparent, data-driven valuations.
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white block uppercase mb-1">
              EASY & CONVENIENT
            </span>
            <p className="text-[11px] font-light">
              A simple process from start to finish.
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white block uppercase mb-1">
              APPLY WITH CONFIDENCE
            </span>
            <p className="text-[11px] font-light">
              Use your trade-in value toward any vehicle.
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white block uppercase mb-1">
              BUILT ON TRUST
            </span>
            <p className="text-[11px] font-light">
              Your satisfaction drives everything we do.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}