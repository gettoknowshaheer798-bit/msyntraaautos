import { Navbar } from "@/components/navigation/Navbar";
import { vehicles } from "@/data/vehicles";
import Image from "next/image";
import Link from "next/link";

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start">
          <span className="text-xs font-light tracking-[0.3em] text-white/60 uppercase">
            MSyntra Fleet
          </span>
          <h1 className="mt-2 text-4xl font-extralight tracking-[0.2em] text-white uppercase sm:text-5xl md:text-6xl">
            FULL INVENTORY
          </h1>
          <p className="mt-4 max-w-xl text-xs font-light leading-relaxed text-white/60">
            Explore our complete collection of high-performance supercars, luxury SUVs, and bespoke vehicles.
          </p>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/catalog/${vehicle.id}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-white/40"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={vehicle.heroImage}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="text-[10px] font-light tracking-[0.2em] text-white/50 uppercase">
                    {vehicle.year} • {vehicle.make}
                  </div>
                  <h2 className="mt-1 text-xl font-light tracking-[0.15em] text-white uppercase">
                    {vehicle.model}
                  </h2>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-light text-white/90">
                    {vehicle.price}
                  </span>
                  <span className="text-[10px] font-light tracking-[0.2em] text-white/60 group-hover:text-white">
                    DETAILS →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}