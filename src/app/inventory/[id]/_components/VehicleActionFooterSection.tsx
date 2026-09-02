import { Vehicle } from "@/types/vehicle";
import Link from "next/link";

export default function VehicleActionFooterSection({ vehicle }: { vehicle: Vehicle }) {
  return (
    <section className="relative w-full bg-[#07130e] text-[#e7e3dc] pt-20 pb-12">
      <div className="px-8 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
        {/* Top 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-[#0b1b14] rounded-xl border border-[#122820]">
            <span className="text-[10px] tracking-[0.2em] text-[#9e6d48] uppercase font-semibold block mb-2">
              INSPECTION REPORT
            </span>
            <p className="text-xs text-[#8a9992] mb-6 font-light leading-relaxed">
              Passed multi-point inspection including engine, brakes, and suspension.
            </p>
            <Link
              href="#"
              className="text-[10px] tracking-[0.2em] text-[#9e6d48] uppercase font-semibold hover:text-[#e7e3dc] transition-colors"
            >
              VIEW FULL INSPECTION REPORT &rarr;
            </Link>
          </div>

          <div className="p-8 bg-[#0b1b14] rounded-xl border border-[#122820]">
            <span className="text-[10px] tracking-[0.2em] text-[#9e6d48] uppercase font-semibold block mb-2">
              FINANCING ESTIMATE
            </span>
            <div className="text-2xl font-serif text-[#e7e3dc] mb-1">
              $2,298 <span className="text-xs font-sans text-[#8a9992]">/ mo*</span>
            </div>
            <span className="text-[10px] text-[#8a9992] block mb-6">60 months | 6.49% APR</span>
            <Link
              href="/financing"
              className="text-[10px] tracking-[0.2em] text-[#9e6d48] uppercase font-semibold hover:text-[#e7e3dc] transition-colors"
            >
              CALCULATE YOUR PAYMENT &rarr;
            </Link>
          </div>

          <div className="p-8 bg-[#0b1b14] rounded-xl border border-[#122820]">
            <span className="text-[10px] tracking-[0.2em] text-[#9e6d48] uppercase font-semibold block mb-2">
              TRADE-IN VALUE
            </span>
            <p className="text-xs text-[#8a9992] mb-6 font-light leading-relaxed">
              Get an instant valuation for your current luxury vehicle.
            </p>
            <Link
              href="/trade-in"
              className="text-[10px] tracking-[0.2em] text-[#9e6d48] uppercase font-semibold hover:text-[#e7e3dc] transition-colors"
            >
              VALUE MY TRADE &rarr;
            </Link>
          </div>
        </div>

        {/* Ready To Experience CTA Card */}
        <div
          id="inquire"
          className="relative rounded-2xl overflow-hidden bg-[#0b1b14] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#122820]"
        >
          <div className="max-w-xl z-10">
            <span className="text-[10px] tracking-[0.3em] text-[#8a9992] uppercase font-semibold block mb-4">
              READY TO EXPERIENCE IT?
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#e7e3dc] font-light mb-4">
              This Drive Changes Everything.
            </h2>
            <p className="text-xs text-[#8a9992] font-light">
              Schedule a private viewing or test drive today with our personal client advisor.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full md:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#9e6d48] text-[#07130e] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#e7e3dc] transition-all">
              BOOK A VIEWING
            </button>
            <a
              href="tel:+1111000888"
              className="w-full sm:w-auto text-center px-8 py-4 border border-[#122820] bg-[#07130e]/40 text-[#8a9992] hover:text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#122820] transition-all"
            >
              CALL (021) 111 000 888
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}