import { Vehicle } from "@/types/vehicle";

export default function VehicleDetailsSection({ vehicle }: { vehicle: Vehicle }) {
  const specs = vehicle.specs || {
    engine: vehicle.engineSpec || "N/A",
    power: vehicle.powerSpec || "N/A",
    torque: "553 lb-ft @ 1,800-5,860 rpm",
    drivetrain: "All-Wheel Drive",
    transmission: "8-Speed M Steptronic",
    fuelType: "Gasoline",
  };

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 max-w-[1500px] mx-auto border-b border-[#dcd5c9]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-[10px] tracking-[0.3em] text-[#9e6d48] uppercase font-semibold block mb-4">
            OVERVIEW
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0d1c17] font-light leading-snug mb-6">
            Power. Presence. <br />
            Perfected.
          </h2>
          <p className="text-sm text-[#5d6863] font-light leading-relaxed mb-8">
            {vehicle.description}
          </p>
          <button className="text-[10px] tracking-[0.25em] text-[#9e6d48] uppercase font-semibold hover:text-[#0d1c17] transition-colors">
            VIEW GALLERY &rarr;
          </button>
        </div>

        <div className="lg:col-span-7 bg-[#eae5dd] p-8 md:p-10 rounded-xl border border-[#dcd5c9]">
          <span className="text-[10px] tracking-[0.3em] text-[#5d6863] uppercase font-semibold block mb-6">
            SPECIFICATIONS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-4 bg-[#f4f0eb] rounded-lg">
              <span className="text-[10px] text-[#5d6863] block uppercase tracking-wider mb-1">ENGINE</span>
              <span className="font-medium text-[#0d1c17] uppercase">{specs.engine}</span>
            </div>
            <div className="p-4 bg-[#f4f0eb] rounded-lg">
              <span className="text-[10px] text-[#5d6863] block uppercase tracking-wider mb-1">DRIVETRAIN</span>
              <span className="font-medium text-[#0d1c17] uppercase">{specs.drivetrain}</span>
            </div>
            <div className="p-4 bg-[#f4f0eb] rounded-lg">
              <span className="text-[10px] text-[#5d6863] block uppercase tracking-wider mb-1">POWER</span>
              <span className="font-medium text-[#0d1c17] uppercase">{specs.power}</span>
            </div>
            <div className="p-4 bg-[#f4f0eb] rounded-lg">
              <span className="text-[10px] text-[#5d6863] block uppercase tracking-wider mb-1">TRANSMISSION</span>
              <span className="font-medium text-[#0d1c17] uppercase">{specs.transmission}</span>
            </div>
            <div className="p-4 bg-[#f4f0eb] rounded-lg">
              <span className="text-[10px] text-[#5d6863] block uppercase tracking-wider mb-1">TORQUE</span>
              <span className="font-medium text-[#0d1c17] uppercase">{specs.torque}</span>
            </div>
            <div className="p-4 bg-[#f4f0eb] rounded-lg">
              <span className="text-[10px] text-[#5d6863] block uppercase tracking-wider mb-1">FUEL TYPE</span>
              <span className="font-medium text-[#0d1c17] uppercase">{specs.fuelType}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}