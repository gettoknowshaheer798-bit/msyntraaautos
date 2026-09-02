"use client";

import { Vehicle } from "@/types/vehicle";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function VehicleFeaturesHistorySection({ vehicle }: { vehicle: Vehicle }) {
  const history = vehicle.historyChecklist || [
    "1 Owner",
    "Clean Title",
    "No Accident History",
    "Regularly Serviced",
    "All Maintenance Records Available",
  ];

  const features = vehicle.features || [
    "M Carbon Exterior Package",
    "Merino Leather Upholstery",
    "Bowers & Wilkins Surround Sound",
    "M Driver's Package",
    "Head-Up Display",
    "360° Camera & Parking Assist",
  ];

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 max-w-[1500px] mx-auto border-b border-[#dcd5c9]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Features Grid */}
        <div className="lg:col-span-7">
          <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-semibold block mb-6">
            FEATURES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#eae5dd] border border-[#dcd5c9] rounded-xl flex items-center gap-3"
              >
                <Sparkles className="w-4 h-4 text-[#9e6d48] flex-shrink-0" />
                <span className="text-xs font-medium text-[#0d1c17]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* History Checklist Box */}
        <div className="lg:col-span-5 bg-[#eae5dd] p-8 rounded-xl border border-[#dcd5c9] flex flex-col justify-between">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#5d6863] uppercase font-semibold block mb-6">
              VEHICLE HISTORY
            </span>

            <ul className="space-y-4">
              {history.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs text-[#0d1c17] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#9e6d48] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-[#dcd5c9] flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#9e6d48] flex-shrink-0" />
            <p className="text-[10px] text-[#5d6863] uppercase tracking-wider">
              Verified by MSYNTRA Quality Assurance
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}