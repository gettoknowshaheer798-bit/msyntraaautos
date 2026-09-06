"use client";

import {
  ArrowLeft,
  ArrowRight,
  Car,
  Check,
  FileCheck,
  Key,
  Lock,
  ShieldCheck,
  Sparkles,
  Tag,
  TrendingUp
} from "lucide-react";
import Image from "next/image";
import { useState, useTransition } from "react";

import { submitTradeIn } from "./actions";

type Condition = "excellent" | "good" | "fair" | "poor" | "";

export default function TradeInPage() {
  // Valuation Form State
  const [step, setStep] = useState(1);

  // Step 1 — Vehicle
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [trim, setTrim] = useState("");
  const [mileage, setMileage] = useState("");

  // Step 2 — Condition
  const [condition, setCondition] = useState<Condition>("");
  const [accidents, setAccidents] = useState("");
  const [notes, setNotes] = useState("");

  // Step 3 — Contact
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");

  // Submission state
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const steps = [
    { number: "01", label: "VEHICLE" },
    { number: "02", label: "CONDITION" },
    { number: "03", label: "CONTACT" },
    { number: "04", label: "REVIEW" },
  ];

  const conditions: { value: Condition; label: string; desc: string }[] = [
    { value: "excellent", label: "Excellent", desc: "Like new, no visible wear" },
    { value: "good", label: "Good", desc: "Minor wear, well maintained" },
    { value: "fair", label: "Fair", desc: "Noticeable wear, needs some work" },
    { value: "poor", label: "Poor", desc: "Significant mechanical or cosmetic issues" },
  ];

  function validateStep(current: number) {
    const next: Record<string, string> = {};

    if (current === 1) {
      if (!make.trim()) next.make = "Required";
      if (!model.trim()) next.model = "Required";
      if (!year) {
        next.year = "Required";
      } else {
        const yearNum = Number(year);
        const maxYear = new Date().getFullYear() + 1;
        if (!Number.isFinite(yearNum) || yearNum < 1980 || yearNum > maxYear) {
          next.year = `Enter a year between 1980 and ${maxYear}`;
        }
      }
      if (!mileage) next.mileage = "Required";
    }

    if (current === 2) {
      if (!condition) next.condition = "Please select a condition";
      if (!accidents) next.accidents = "Required";
    }

    if (current === 3) {
      if (!fullName.trim()) next.fullName = "Required";
      if (!email.trim()) {
        next.email = "Required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        next.email = "Enter a valid email";
      }
      if (!phone.trim()) next.phone = "Required";
      if (!zip.trim()) next.zip = "Required";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((prev) => Math.min(prev + 1, 4));
  }

  function goBack() {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  }

  function handleSubmit() {
    if (!validateStep(3)) return;

    setSubmitError(null);

    startTransition(async () => {
      const result = await submitTradeIn({
        make,
        model,
        year,
        trim,
        mileage,
        condition,
        accidents,
        notes,
        fullName,
        email,
        phone,
        zip,
      });

      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.error);
      }
    });
  }

  const inputClass =
    "w-full bg-[#f4f0eb] border border-[#dcd5c9] text-xs py-3.5 px-3.5 focus:outline-none focus:border-[#07130e]";
  const errorClass = "text-[10px] text-red-700 mt-1 block";

  return (
    <div className="bg-[#f4f0eb] text-[#07130e] min-h-screen font-sans w-full">

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                               */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full h-[85vh] min-h-[640px] max-h-[880px] flex items-center overflow-hidden">
        <Image
          src="/images/vehicles/Trade-In(Hero).png"
          alt="Trade In Hero BMW M8"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-[#07130e] via-[#07130e]/70 to-transparent" />
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
      {/* 2. VALUATION FORM SECTION                                     */}
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
                  {isCompleted ? <Check className="w-3.5 h-3.5" /> : s.number}
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase font-mono ${isActive ? "text-[#07130e] font-semibold" : "text-[#8a9992]"}`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="max-w-5xl mx-auto bg-[#eae5dd] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm min-h-[750px]">

          {/* Form Left Side */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">

              {/* -------- STEP 1: VEHICLE -------- */}
              {step === 1 && (
                <>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] text-[#07130e] font-mono block mb-1">STEP 01</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-[#07130e]">Your Vehicle</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">MAKE</label>
                      <input
                        type="text"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        placeholder="e.g. BMW"
                        className={inputClass}
                      />
                      {errors.make && <span className={errorClass}>{errors.make}</span>}
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">MODEL</label>
                      <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="e.g. M8 Gran Coupe"
                        className={inputClass}
                      />
                      {errors.model && <span className={errorClass}>{errors.model}</span>}
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">YEAR</label>
                      <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="e.g. 2022"
                        min={1980}
                        max={new Date().getFullYear() + 1}
                        className={inputClass}
                      />
                      {errors.year && <span className={errorClass}>{errors.year}</span>}
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">TRIM (OPTIONAL)</label>
                      <input
                        type="text"
                        value={trim}
                        onChange={(e) => setTrim(e.target.value)}
                        placeholder="e.g. Competition"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">MILEAGE</label>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Enter mileage"
                        value={mileage}
                        onChange={(e) => setMileage(e.target.value)}
                        className={`${inputClass} pr-12`}
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#8a9992]">MI</span>
                    </div>
                    {errors.mileage && <span className={errorClass}>{errors.mileage}</span>}
                  </div>
                </>
              )}

              {/* -------- STEP 2: CONDITION -------- */}
              {step === 2 && (
                <>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] text-[#07130e] font-mono block mb-1">STEP 02</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-[#07130e]">Vehicle Condition</h3>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-2">OVERALL CONDITION</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {conditions.map((c) => (
                        <button
                          key={c.value}
                          type="button"
                          onClick={() => setCondition(c.value)}
                          className={`text-left border px-4 py-3.5 transition-all ${
                            condition === c.value
                              ? "border-[#07130e] bg-[#f4f0eb]"
                              : "border-[#dcd5c9] bg-[#f4f0eb]/50 hover:border-[#8a9992]"
                          }`}
                        >
                          <span className="text-xs font-semibold text-[#07130e] block">{c.label}</span>
                          <span className="text-[10px] text-[#5d6863] font-light">{c.desc}</span>
                        </button>
                      ))}
                    </div>
                    {errors.condition && <span className={errorClass}>{errors.condition}</span>}
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">ACCIDENT HISTORY</label>
                    <select value={accidents} onChange={(e) => setAccidents(e.target.value)} className={inputClass}>
                      <option value="">Select an option</option>
                      <option value="none">No accidents</option>
                      <option value="minor">Minor accident, repaired</option>
                      <option value="major">Major accident</option>
                    </select>
                    {errors.accidents && <span className={errorClass}>{errors.accidents}</span>}
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">ADDITIONAL NOTES (OPTIONAL)</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      placeholder="Any modifications, damage, or details we should know"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </>
              )}

              {/* -------- STEP 3: CONTACT -------- */}
              {step === 3 && (
                <>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] text-[#07130e] font-mono block mb-1">STEP 03</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-[#07130e]">Your Contact Info</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">FULL NAME</label>
                      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" className={inputClass} />
                      {errors.fullName && <span className={errorClass}>{errors.fullName}</span>}
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">EMAIL</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className={inputClass} />
                      {errors.email && <span className={errorClass}>{errors.email}</span>}
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">PHONE</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 123-4567" className={inputClass} />
                      {errors.phone && <span className={errorClass}>{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1.5">ZIP CODE</label>
                      <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="90210" className={inputClass} />
                      {errors.zip && <span className={errorClass}>{errors.zip}</span>}
                    </div>
                  </div>
                </>
              )}

              {/* -------- STEP 4: REVIEW -------- */}
              {step === 4 && (
                <>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] text-[#07130e] font-mono block mb-1">STEP 04</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-[#07130e]">Review & Submit</h3>
                  </div>

                  {submitted ? (
                    <div className="py-8 text-center space-y-3">
                      <div className="w-12 h-12 mx-auto rounded-full bg-[#07130e] flex items-center justify-center">
                        <Check className="w-6 h-6 text-[#e7e3dc]" />
                      </div>
                      <h4 className="font-serif text-xl text-[#07130e]">Request received</h4>
                      <p className="text-xs text-[#5d6863] font-light max-w-xs mx-auto">
                        We&apos;ll be in touch shortly with your trade-in value.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 text-xs">
                      {submitError && (
                        <div className="border border-red-300 bg-red-50 text-red-700 text-[11px] px-3.5 py-2.5">
                          {submitError}
                        </div>
                      )}

                      <div className="border-b border-[#dcd5c9] pb-3">
                        <span className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1">VEHICLE</span>
                        <p className="text-[#07130e]">{year} {make} {model} {trim && `— ${trim}`}</p>
                        <p className="text-[#5d6863]">{mileage} mi</p>
                      </div>
                      <div className="border-b border-[#dcd5c9] pb-3">
                        <span className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1">CONDITION</span>
                        <p className="text-[#07130e] capitalize">{condition} · {accidents === "none" ? "No accidents" : accidents === "minor" ? "Minor accident" : "Major accident"}</p>
                        {notes && <p className="text-[#5d6863] mt-1">{notes}</p>}
                      </div>
                      <div>
                        <span className="text-[10px] tracking-[0.15em] text-[#5d6863] font-semibold uppercase block mb-1">CONTACT</span>
                        <p className="text-[#07130e]">{fullName}</p>
                        <p className="text-[#5d6863]">{email} · {phone} · {zip}</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Navigation buttons */}
            {!submitted && (
              <div className="pt-6 flex items-center gap-3">
                {step > 1 && (
                  <button
                    onClick={goBack}
                    className="px-6 py-3.5 border border-[#07130e]/30 text-[#07130e] text-[10px] tracking-[0.25em] uppercase font-semibold hover:border-[#07130e] transition-all inline-flex items-center gap-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> BACK
                  </button>
                )}

                {step < 4 && (
                  <button
                    onClick={goNext}
                    className="px-8 py-3.5 bg-[#07130e] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#07130e]/85 transition-all inline-flex items-center gap-2"
                  >
                    CONTINUE <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {step === 4 && (
                  <button
                    onClick={handleSubmit}
                    disabled={isPending}
                    className="px-8 py-3.5 bg-[#07130e] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#07130e]/85 transition-all inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isPending ? "SUBMITTING..." : "SUBMIT REQUEST"}
                    {!isPending && <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Form Right Side — Full Height Background Image */}
          <div className="lg:col-span-5 relative p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-[#dcd5c9] flex flex-col justify-between overflow-hidden min-h-[400px]">
            <Image
              src="/images/vehicles/Trade-In(Calculator).png"
              alt="Why trade in with MSyntra"
              fill
              className="object-cover object-bottom z-0"
              priority
            />
            <div className="relative z-10 space-y-6">
              <div className="w-9 h-9 rounded-full border border-[#07130e]/50 bg-[#f4f0eb]/80 backdrop-blur-sm flex items-center justify-center text-[#07130e]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-2xl font-light text-[#07130e]">Why trade in with MSyntra?</h4>
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
          <div className="bg-[#eae5dd] p-8 border border-[#dcd5c9] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8a9992] block mb-4">01</span>
              <Car className="w-7 h-7 text-[#07130e] mb-6 stroke-[1.25]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#07130e] mb-2">TELL US ABOUT YOUR CAR</h3>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed">Share a few details about your vehicle in just a couple of minutes.</p>
            </div>
          </div>
          <div className="bg-[#eae5dd] p-8 border border-[#dcd5c9] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8a9992] block mb-4">02</span>
              <FileCheck className="w-7 h-7 text-[#07130e] mb-6 stroke-[1.25]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#07130e] mb-2">GET YOUR VALUE</h3>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed">We analyze real market data to give you a fair trade-in estimate.</p>
            </div>
          </div>
          <div className="bg-[#eae5dd] p-8 border border-[#dcd5c9] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8a9992] block mb-4">03</span>
              <Tag className="w-7 h-7 text-[#07130e] mb-6 stroke-[1.25]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#07130e] mb-2">APPLY TOWARD YOUR NEXT CAR</h3>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed">Use your trade-in value toward any vehicle in our collection.</p>
            </div>
          </div>
          <div className="bg-[#eae5dd] p-8 border border-[#dcd5c9] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8a9992] block mb-4">04</span>
              <Key className="w-7 h-7 text-[#07130e] mb-6 stroke-[1.25]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#07130e] mb-2">DRIVE WHAT&apos;S NEXT</h3>
              <p className="text-xs text-[#5d6863] font-light leading-relaxed">Complete your purchase and enjoy the MSyntra experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. TURN YOUR CURRENT CAR BANNER                               */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full min-h-[520px] lg:min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/vehicles/Trade-In-Final-Section.png"
          alt="Lamborghini SVG"
          fill
          className="object-cover object-center"
        />

        <div className="absolute inset-y-0 left-0 w-full sm:w-[70%] lg:w-[55%] bg-gradient-to-r from-[#07130e] via-[#07130e]/80 to-transparent" />

        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-mono">
                THE NEXT CHAPTER STARTS HERE
              </span>
              <span className="w-8 h-px bg-[#8a9992]/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight leading-[1.05] mb-6 text-[#e7e3dc]">
              TURN YOUR <br />
              CURRENT CAR <br />
              INTO YOUR <br />
              <span className="text-[#8a9992]">NEXT ONE.</span>
            </h2>
            <p className="text-xs md:text-sm text-[#8a9992] font-light max-w-sm mb-8 leading-relaxed">
              Get your trade-in value today and take the first step toward driving something exceptional.
            </p>
            <a
              href="#valuation-form"
              className="px-8 py-4 bg-[#e7e3dc] text-[#07130e] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-white transition-all inline-flex items-center gap-3"
            >
              GET YOUR TRADE-IN VALUE <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. FOOTER VALUE PROPOSITIONS                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#07130e] border-t border-white/10 text-[#8a9992] py-8 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white block uppercase mb-1">FAIR & COMPETITIVE</span>
            <p className="text-[11px] font-light">Transparent, data-driven valuations.</p>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white block uppercase mb-1">EASY & CONVENIENT</span>
            <p className="text-[11px] font-light">A simple process from start to finish.</p>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white block uppercase mb-1">APPLY WITH CONFIDENCE</span>
            <p className="text-[11px] font-light">Use your trade-in value toward any vehicle.</p>
          </div>
          <div>
            <span className="text-[10px] tracking-[0.2em] font-mono text-white block uppercase mb-1">BUILT ON TRUST</span>
            <p className="text-[11px] font-light">Your satisfaction drives everything we do.</p>
          </div>
        </div>
      </section>

    </div>
  );
}