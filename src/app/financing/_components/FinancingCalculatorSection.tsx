"use client";

import type { Vehicle } from "@/types/vehicle";
import {
  ArrowRight,
  Car,
  ChevronDown,
  FileCheck,
  Info,
  Minus,
  Plus,
  ShieldCheck,
  Sliders,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState } from "react";

interface FinancingCalculatorSectionProps {
  vehicles: Vehicle[];
}

// Helper to parse price strings like "$63,700" into 63700
const parsePrice = (priceStr: string): number => {
  return Number(priceStr.replace(/[^0-9.-]+/g, "")) || 50000;
};

export default function FinancingCalculatorSection({
  vehicles,
}: FinancingCalculatorSectionProps) {
  // ---------------------------------------------------------------------------
  // SELECTED VEHICLE
  // ---------------------------------------------------------------------------

  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(
    vehicles[0]?.id ?? ""
  );

  const currentVehicle = useMemo(() => {
    return (
      vehicles.find((vehicle) => vehicle.id === selectedVehicleId) ??
      vehicles[0] ??
      null
    );
  }, [vehicles, selectedVehicleId]);

  // ---------------------------------------------------------------------------
  // EMPTY INVENTORY FALLBACK
  // ---------------------------------------------------------------------------

  if (!currentVehicle) {
    return (
      <div className="bg-[#f4f0eb] text-[#0d1c17] min-h-screen font-sans pt-24 w-full">
        <section className="w-full px-8 md:px-16 lg:px-24 py-32">
          <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono mb-3 block">
            FINANCING
          </span>

          <h1 className="font-serif text-5xl md:text-7xl font-light uppercase tracking-tight text-[#0d1c17] leading-none mb-6">
            MAKE IT
            <br />
            YOURS.
          </h1>

          <p className="text-sm text-[#5d6863] font-light leading-relaxed max-w-md">
            Our current inventory is unavailable for financing estimates.
            Please check back soon or contact our team directly.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 text-[10px] tracking-[0.25em] text-[#0d1c17] font-semibold uppercase hover:text-[#9e6d48] transition-colors"
          >
            CONTACT MSYNTRA
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // CALCULATOR STATE
  // ---------------------------------------------------------------------------

  const currentVehicleNumericPrice = useMemo(() => {
    return parsePrice(currentVehicle.price);
  }, [currentVehicle]);

  const [vehiclePrice, setVehiclePrice] = useState<number>(
    currentVehicleNumericPrice
  );

  const [downPayment, setDownPayment] = useState<number>(
    Math.round(currentVehicleNumericPrice * 0.15)
  );

  const [term, setTerm] = useState<number>(60);
  const [apr, setApr] = useState<number>(7.9);

  // ---------------------------------------------------------------------------
  // FAQ STATE
  // ---------------------------------------------------------------------------

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ---------------------------------------------------------------------------
  // ACCESSIBILITY IDS
  // ---------------------------------------------------------------------------

  const carSelectId = useId();
  const priceInputId = useId();
  const downPaymentInputId = useId();
  const termInputId = useId();
  const aprInputId = useId();

  // ---------------------------------------------------------------------------
  // VEHICLE SWITCH
  // ---------------------------------------------------------------------------

  const handleVehicleChange = (vehicleId: string) => {
    const vehicle = vehicles.find((item) => item.id === vehicleId);

    if (!vehicle) {
      return;
    }

    const parsedPrice = parsePrice(vehicle.price);

    setSelectedVehicleId(vehicleId);
    setVehiclePrice(parsedPrice);

    // Reset down payment to 15% of the newly selected vehicle.
    setDownPayment(Math.round(parsedPrice * 0.15));
  };

  // ---------------------------------------------------------------------------
  // FINANCIAL CALCULATIONS
  // ---------------------------------------------------------------------------

  const amountFinanced = Math.max(0, vehiclePrice - downPayment);
  const monthlyRate = apr / 100 / 12;

  const monthlyPayment = useMemo(() => {
    if (monthlyRate > 0 && term > 0 && amountFinanced > 0) {
      const pmt =
        (amountFinanced *
          (monthlyRate * Math.pow(1 + monthlyRate, term))) /
        (Math.pow(1 + monthlyRate, term) - 1);

      return Math.round(pmt).toLocaleString();
    }

    return "0";
  }, [amountFinanced, monthlyRate, term]);

  // ---------------------------------------------------------------------------
  // FAQ DATA
  // ---------------------------------------------------------------------------

  const faqs = [
    {
      question: "What credit score is needed to qualify?",
      answer:
        "We work with a spectrum of credit profiles through our network of premium financial partners. While optimal rates are offered to prime scores, tailored solutions are available for various backgrounds.",
    },
    {
      question: "Can I pay off my loan early?",
      answer:
        "Yes, all financing options structured through MSYNTRA Automotive support early settlement without prepayment penalties.",
    },
    {
      question: "Are there penalties for early payoff?",
      answer:
        "No, you are free to settle your balance in full or make extra payments at any time with zero penalty fees.",
    },
    {
      question: "How long does the approval process take?",
      answer:
        "Most applications receive initial pre-approval within 1 to 2 business hours. Final verification usually completes on the same day.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "You will generally need a government-issued photo ID, proof of income (pay stubs or bank statements), proof of residence, and current insurance documentation.",
    },
  ];

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <div className="bg-[#f4f0eb] text-[#0d1c17] min-h-screen font-sans pt-24 w-full">
      {/* ----------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ----------------------------------------------------------------- */}

      <section className="relative w-full overflow-hidden bg-[#f4f0eb]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left Typography Side */}

          <div className="lg:col-span-5 z-10 pl-8 md:pl-16 lg:pl-24 py-12 md:py-20">
            <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono mb-3 block">
              FINANCING MADE SIMPLE
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#0d1c17] leading-none mb-6">
              MAKE IT
              <br />
              YOURS.
            </h1>

            <p className="text-xs md:text-sm text-[#5d6863] font-light leading-relaxed mb-8 max-w-sm">
              Flexible financing options designed around you. Competitive
              rates, transparent terms, and a seamless process from start to
              finish.
            </p>

            <a
              href="#calculator"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#0d1c17] font-semibold uppercase hover:text-[#9e6d48] transition-colors"
            >
              CALCULATE YOUR PAYMENT
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Image */}

          <div className="lg:col-span-7 relative h-[400px] sm:h-[520px] w-full">
            <Image
              src="/images/vehicles/BMW-Collection-MainImage.png"
              alt="BMW M8 Gran Coupe"
              fill
              priority
              className="object-cover object-center [mask-image:linear-gradient(to_right,transparent_0%,black_30%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_30%)]"
            />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* INTERACTIVE CALCULATOR                                            */}
      {/* ----------------------------------------------------------------- */}

      <section
        id="calculator"
        className="w-full px-8 md:px-16 lg:px-24 py-20"
      >
        <div className="w-full bg-[#eae5dd] p-6 md:p-12 border-t border-b border-[#dcd5c9]">
          {/* VEHICLE SELECTOR */}

          <div className="mb-10 pb-8 border-b border-[#dcd5c9]/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <label
                htmlFor={carSelectId}
                className="text-[10px] tracking-[0.25em] text-[#9e6d48] uppercase font-mono block mb-1"
              >
                SELECT A VEHICLE FROM OUR INVENTORY
              </label>

              <h2 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-wider text-[#0d1c17]">
                {currentVehicle.make} {currentVehicle.model} (
                {currentVehicle.trim})
              </h2>
            </div>

            <div className="flex items-center gap-6">
              {/* Selected Vehicle Thumbnail */}

              <div className="relative w-28 h-16 bg-[#f4f0eb] border border-[#dcd5c9] p-1 flex-shrink-0 hidden sm:block overflow-hidden">
                <Image
                  src={
                    currentVehicle.thumbnail || currentVehicle.actionImage
                  }
                  alt={`${currentVehicle.make} ${currentVehicle.model}`}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Vehicle Select */}

              <div className="relative min-w-[280px]">
                <select
                  id={carSelectId}
                  value={selectedVehicleId}
                  onChange={(event) =>
                    handleVehicleChange(event.target.value)
                  }
                  className="w-full bg-[#f4f0eb] border border-[#dcd5c9] text-[#0d1c17] text-xs font-medium uppercase tracking-wider py-3.5 px-4 pr-10 rounded-none appearance-none cursor-pointer focus:outline-none focus:border-[#9e6d48]"
                >
                  {vehicles.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.make} {vehicle.model} — {vehicle.price}
                    </option>
                  ))}
                </select>

                <ChevronDown className="w-4 h-4 text-[#0d1c17] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* CALCULATOR GRID */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* SLIDERS */}

            <div className="lg:col-span-7 space-y-8 flex flex-col justify-between pr-0 lg:pr-6">
              {/* Vehicle Price */}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label
                    htmlFor={priceInputId}
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#5d6863]"
                  >
                    VEHICLE PRICE
                  </label>
                </div>

                <div className="text-3xl font-serif font-light text-[#0d1c17] mb-3">
                  ${vehiclePrice.toLocaleString()}
                </div>

                <input
                  id={priceInputId}
                  type="range"
                  min={10000}
                  max={Math.max(4000000, currentVehicleNumericPrice * 1.2)}
                  step={1000}
                  value={vehiclePrice}
                  onChange={(event) => {
                    const value = Number(event.target.value);

                    setVehiclePrice(value);

                    if (downPayment > value) {
                      setDownPayment(value);
                    }
                  }}
                  className="w-full accent-[#0d1c17] bg-[#dcd5c9] h-1.5 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-[#8a9992] font-mono mt-2">
                  <span>$10,000</span>

                  <span>
                    $
                    {Math.max(
                      4000000,
                      currentVehicleNumericPrice * 1.2
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Down Payment */}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label
                    htmlFor={downPaymentInputId}
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#5d6863]"
                  >
                    DOWN PAYMENT
                  </label>
                </div>

                <div className="text-3xl font-serif font-light text-[#0d1c17] mb-3">
                  ${downPayment.toLocaleString()}
                </div>

                <input
                  id={downPaymentInputId}
                  type="range"
                  min={0}
                  max={vehiclePrice}
                  step={500}
                  value={downPayment}
                  onChange={(event) =>
                    setDownPayment(Number(event.target.value))
                  }
                  className="w-full accent-[#0d1c17] bg-[#dcd5c9] h-1.5 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-[#8a9992] font-mono mt-2">
                  <span>$0</span>
                  <span>${vehiclePrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Term */}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label
                    htmlFor={termInputId}
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#5d6863]"
                  >
                    TERM
                  </label>
                </div>

                <div className="text-3xl font-serif font-light text-[#0d1c17] mb-3">
                  {term} MONTHS
                </div>

                <input
                  id={termInputId}
                  type="range"
                  min={12}
                  max={84}
                  step={12}
                  value={term}
                  onChange={(event) =>
                    setTerm(Number(event.target.value))
                  }
                  className="w-full accent-[#0d1c17] bg-[#dcd5c9] h-1.5 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-[#8a9992] font-mono mt-2">
                  <span>12 MONTHS</span>
                  <span>84 MONTHS</span>
                </div>
              </div>

              {/* APR */}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label
                    htmlFor={aprInputId}
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#5d6863]"
                  >
                    APR
                  </label>
                </div>

                <div className="text-3xl font-serif font-light text-[#0d1c17] mb-3">
                  {apr.toFixed(1)}%
                </div>

                <input
                  id={aprInputId}
                  type="range"
                  min={1.9}
                  max={15.0}
                  step={0.1}
                  value={apr}
                  onChange={(event) =>
                    setApr(Number(event.target.value))
                  }
                  className="w-full accent-[#0d1c17] bg-[#dcd5c9] h-1.5 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-[#8a9992] font-mono mt-2">
                  <span>1.9%</span>
                  <span>15.0%</span>
                </div>
              </div>
            </div>

            {/* MONTHLY CALCULATION CARD */}

            <div className="lg:col-span-5 bg-[#0d1c17] text-[#e7e3dc] p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#8a9992] uppercase font-mono block text-center mb-6">
                  ESTIMATED PAYMENT
                </span>

                <div className="text-center mb-8">
                  <div className="text-5xl sm:text-6xl font-serif font-light text-white mb-2">
                    ${monthlyPayment}
                  </div>

                  <span className="text-[10px] tracking-[0.25em] text-[#8a9992] uppercase font-mono">
                    / MONTH
                  </span>
                </div>

                <div className="w-12 h-[1px] bg-[#9e6d48]/40 mx-auto mb-8" />

                <div className="space-y-4 text-xs font-light">
                  <div className="flex justify-between text-[#8a9992]">
                    <span>Selected Vehicle</span>

                    <span className="text-white font-medium">
                      {currentVehicle.make} {currentVehicle.model}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#8a9992]">
                    <span>Vehicle Price</span>

                    <span className="text-white font-mono">
                      ${vehiclePrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#8a9992]">
                    <span>Down Payment</span>

                    <span className="text-white font-mono">
                      -${downPayment.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#8a9992]">
                    <span>Amount Financed</span>

                    <span className="text-white font-mono">
                      ${amountFinanced.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#8a9992]">
                    <span>APR</span>

                    <span className="text-white font-mono">
                      {apr.toFixed(1)}%
                    </span>
                  </div>

                  <div className="flex justify-between text-[#8a9992]">
                    <span>Term</span>

                    <span className="text-white font-mono">
                      {term} Months
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 w-full py-4 bg-[#9e6d48] text-[#0d1c17] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-white transition-all flex items-center justify-center gap-2 text-center"
              >
                APPLY FOR THIS VEHICLE
                <Sliders className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-[10px] text-[#8a9992] font-light mt-6">
            <Info className="w-3 h-3 flex-shrink-0" />
            This is an estimate only and not a guarantee of credit. All
            financing is subject to credit approval.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 4-STEP PROCESS                                                    */}
      {/* ----------------------------------------------------------------- */}

      <section className="w-full px-8 md:px-16 lg:px-24 py-16">
        <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-mono mb-2 block">
          THE PROCESS
        </span>

        <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider text-[#0d1c17] mb-3">
          HOW FINANCING WORKS
        </h2>

        <div className="w-12 h-[2px] bg-[#9e6d48]/60 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#dcd5c9] w-full">
          {/* Step 01 */}

          <div className="lg:pr-8 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[11px] font-mono font-medium text-[#9e6d48] bg-transparent">
                01
              </div>

              <Car className="w-8 h-8 text-[#0d1c17] stroke-[1.25]" />
            </div>

            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9e6d48] mb-3">
              CHOOSE YOUR VEHICLE
            </h3>

            <p className="text-xs text-[#5d6863] font-light leading-relaxed max-w-xs">
              Browse our collection and find the vehicle that’s right for
              you.
            </p>
          </div>

          {/* Step 02 */}

          <div className="lg:px-8 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[11px] font-mono font-medium text-[#9e6d48] bg-transparent">
                02
              </div>

              <Sliders className="w-8 h-8 text-[#0d1c17] stroke-[1.25]" />
            </div>

            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9e6d48] mb-3">
              CUSTOMIZE YOUR TERMS
            </h3>

            <p className="text-xs text-[#5d6863] font-light leading-relaxed max-w-xs">
              Use our calculator to adjust payment options that fit your
              budget.
            </p>
          </div>

          {/* Step 03 */}

          <div className="lg:px-8 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[11px] font-mono font-medium text-[#9e6d48] bg-transparent">
                03
              </div>

              <FileCheck className="w-8 h-8 text-[#0d1c17] stroke-[1.25]" />
            </div>

            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9e6d48] mb-3">
              APPLY WITH CONFIDENCE
            </h3>

            <p className="text-xs text-[#5d6863] font-light leading-relaxed max-w-xs">
              Secure application process with quick decisions and real
              support.
            </p>
          </div>

          {/* Step 04 */}

          <div className="lg:pl-8 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[#9e6d48]/40 flex items-center justify-center text-[11px] font-mono font-medium text-[#9e6d48] bg-transparent">
                04
              </div>

              <ShieldCheck className="w-8 h-8 text-[#0d1c17] stroke-[1.25]" />
            </div>

            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9e6d48] mb-3">
              DRIVE WITH PEACE OF MIND
            </h3>

            <p className="text-xs text-[#5d6863] font-light leading-relaxed max-w-xs">
              Get on the road knowing you made the right choice.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* FAQ                                                               */}
      {/* ----------------------------------------------------------------- */}

      <section className="w-full px-8 md:px-16 lg:px-24 py-16 border-t border-[#dcd5c9]">
        <h2 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-wider text-[#0d1c17] mb-10">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="divide-y divide-[#dcd5c9] border-t border-b border-[#dcd5c9] w-full">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs md:text-sm font-medium text-[#0d1c17]">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus className="w-4 h-4 text-[#9e6d48] flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#0d1c17] flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <p className="text-xs text-[#5d6863] font-light leading-relaxed mt-4 max-w-3xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* APPLICATION BANNER                                                */}
      {/* ----------------------------------------------------------------- */}

      <section className="w-full bg-[#0d1c17] grid grid-cols-1 lg:grid-cols-12 min-h-[260px]">
        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full w-full overflow-hidden">
          <Image
            src={currentVehicle.heroImage || currentVehicle.actionImage}
            alt={`Apply for ${currentVehicle.make} ${currentVehicle.model}`}
            fill
            className="object-cover object-center opacity-80 transition-all duration-300"
          />
        </div>

        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center items-start text-[#e7e3dc]">
          <span className="text-[10px] tracking-[0.25em] text-[#8a9992] uppercase font-mono mb-2 block">
            READY TO TAKE THE NEXT STEP?
          </span>

          <h2 className="font-serif text-2xl md:text-4xl font-light uppercase tracking-wider mb-4 flex items-center gap-3">
            START YOUR APPLICATION
            <ArrowRight className="w-6 h-6 text-[#9e6d48]" />
          </h2>

          <p className="text-xs text-[#8a9992] font-light max-w-md mb-6">
            It only takes a few minutes and could get you one step closer to
            your new {currentVehicle.make} {currentVehicle.model}.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#9e6d48] text-[#0d1c17] px-7 py-4 text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-white transition-all"
          >
            BEGIN APPLICATION
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}