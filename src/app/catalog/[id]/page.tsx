import { Navbar } from "@/components/navigation/Navbar";
import { vehicles } from "@/data/vehicles";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VehicleDetailsPage({ params }: PageProps) {
  // Await the params promise directly
  const { id } = await params;

  // Find vehicle by matching ID
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16">
        {/* Back Link */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-xs font-light tracking-[0.2em] text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK TO INVENTORY</span>
        </Link>

        {/* Main Details Section */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Vehicle Media */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10 bg-black">
              <Image
                src={vehicle.heroImage}
                alt={`${vehicle.make} ${vehicle.model}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Vehicle Specs & Action Sidebar */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="text-xs font-light tracking-[0.25em] text-white/50 uppercase">
                {vehicle.year} • {vehicle.make}
              </div>
              <h1 className="mt-2 text-4xl font-extralight tracking-[0.15em] text-white uppercase sm:text-5xl">
                {vehicle.model}
              </h1>
              <div className="mt-4 text-3xl font-light tracking-wide text-white">
                {vehicle.price}
              </div>

              <p className="mt-6 text-xs font-light leading-relaxed text-white/70">
                {vehicle.description}
              </p>

              {/* Specs Feature List */}
              <div className="mt-8 grid grid-cols-1 gap-3 border-y border-white/10 py-6">
                <div className="text-[10px] font-light tracking-[0.2em] text-white/40 uppercase">
                  Key Specifications
                </div>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="text-xs font-light text-white/80">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Callouts */}
            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full border border-white bg-white py-3.5 text-xs font-medium tracking-[0.2em] text-black uppercase transition-all hover:bg-transparent hover:text-white">
                INQUIRE ABOUT VEHICLE
              </button>
              <button className="w-full border border-white/20 bg-black/40 py-3.5 text-xs font-light tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all hover:border-white hover:bg-white/10">
                SCHEDULE PRIVATE VIEWING
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}