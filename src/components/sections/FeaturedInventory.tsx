"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
  "ALL",
  "PERFORMANCE",
  "LUXURY",
  "SUV",
  "ELECTRIC",
];

const FEATURED_VEHICLES = [
  {
    id: "bmw-m8-gran-coupe",
    year: "2024",
    name: "BMW M8 GRAN COUPE",
    engine: "4.4L V8 TwinTurbo",
    specs: "625 HP • AWD",
    image: "/images/vehicles/BMW-Collection-MainImage.png",
    category: "PERFORMANCE",
    colSpan: "lg:col-span-8",
  },
  {
    id: "mercedes-s-class",
    year: "2023",
    name: "MERCEDES-BENZ S-CLASS",
    engine: "3.0L Inline-6 Turbo",
    specs: "429 HP • RWD",
    image: "/images/vehicles/S-Class.jpeg",
    category: "LUXURY",
    colSpan: "lg:col-span-4",
  },
  {
    id: "bentley-continental-gt",
    year: "2022",
    name: "BENTLEY CONTINENTAL GT",
    engine: "4.0L V8 TwinTurbo",
    specs: "542 HP • AWD",
    image: "/images/vehicles/Continental-GT.jpeg",
    category: "LUXURY",
    colSpan: "lg:col-span-5",
  },
  {
    id: "rolls-royce-ghost",
    year: "2023",
    name: "ROLLS-ROYCE GHOST",
    engine: "6.75L V12 TwinTurbo",
    specs: "563 HP • AWD",
    image: "/images/vehicles/Rolls-Royce-Ghost.png",
    category: "LUXURY",
    colSpan: "lg:col-span-7",
  },
];

export default function FeaturedInventory() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredVehicles =
    activeCategory === "ALL"
      ? FEATURED_VEHICLES
      : FEATURED_VEHICLES.filter(
          (vehicle) => vehicle.category === activeCategory
        );

  return (
    <section className="w-full bg-[#f4f0eb] text-[#0f1e19] py-14 md:py-16 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">

        {/* ============================================================
            SECTION HEADER
            ============================================================ */}

        <div className="mb-8 md:mb-9">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-[#9a6237] uppercase font-semibold">
              02 / The Collection
            </span>
          </div>

          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#0f1e19] uppercase font-light mb-3 leading-[0.95]"
            style={{
              fontVariationSettings: '"SOFT" 100, "opsz" 144',
            }}
          >
            THE COLLECTION
          </h2>

          <p className="text-xs md:text-sm text-[#4a4e4b] font-light tracking-wide">
            Exceptional automobiles, selected with intention.
          </p>
        </div>

        {/* ============================================================
            CATEGORY NAVIGATION
            ============================================================ */}

        <div className="flex items-center gap-6 md:gap-8 mb-8 border-b border-[#0f1e19]/10 pb-3 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] md:text-[11px] tracking-[0.25em] font-medium uppercase transition-colors relative pb-2 whitespace-nowrap ${
                activeCategory === category
                  ? "text-[#0f1e19]"
                  : "text-[#7a7e7b] hover:text-[#0f1e19]"
              }`}
            >
              {category}

              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9a6237]" />
              )}
            </button>
          ))}
        </div>

        {/* ============================================================
            ASYMMETRIC BENTO GRID

            Fixed/controlled card heights keep the cinematic reveal
            stable even when categories are filtered.
            ============================================================ */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-4
            md:gap-5
            mb-10
            min-h-[620px]
            lg:min-h-[640px]
          "
        >
          {filteredVehicles.map((car) => (
            <div
              key={car.id}
              className={`
                relative
                h-[280px]
                md:h-[300px]
                lg:h-[300px]
                rounded-xl
                overflow-hidden
                group
                ${car.colSpan}
              `}
            >
              {/* Vehicle Image */}

              <Image
                src={car.image}
                alt={car.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  object-center
                  group-hover:scale-105
                  transition-transform
                  duration-700
                  ease-out
                "
              />

              {/* Gradient Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/70
                  via-black/30
                  to-transparent
                  pointer-events-none
                "
              />

              {/* Card Content */}

              <div
                className="
                  absolute
                  inset-0
                  p-6
                  md:p-7
                  flex
                  flex-col
                  justify-between
                  z-10
                  text-white
                "
              >
                {/* Top */}

                <div>
                  <span className="text-[10px] md:text-xs font-mono text-gray-300 tracking-widest block mb-1">
                    {car.year}
                  </span>

                  <h3
                    className="
                      font-serif
                      text-xl
                      md:text-2xl
                      tracking-tight
                      max-w-xs
                      font-light
                      uppercase
                      leading-tight
                    "
                    style={{
                      fontVariationSettings: '"SOFT" 100, "opsz" 144',
                    }}
                  >
                    {car.name}
                  </h3>
                </div>

                {/* Bottom */}

                <div>
                  <p className="text-[10px] md:text-[11px] text-gray-300 font-light tracking-wide mb-0.5">
                    {car.engine}
                  </p>

                  <p className="text-[10px] md:text-[11px] text-gray-400 font-light tracking-wide uppercase mb-4">
                    {car.specs}
                  </p>

                  <Link
                    href={`/inventory/${car.id}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[9px]
                      md:text-[10px]
                      tracking-[0.25em]
                      text-[#c59b72]
                      hover:text-white
                      uppercase
                      font-semibold
                      transition-colors
                    "
                  >
                    <span>View Details</span>

                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================
            BOTTOM CTA
            ============================================================ */}

        <div className="flex justify-center">
          <Link
            href="/inventory"
            className="
              inline-flex
              items-center
              gap-4
              px-9
              md:px-10
              py-4
              border
              border-[#8c7457]/40
              text-[#0f1e19]
              text-[9px]
              md:text-[10px]
              tracking-[0.25em]
              uppercase
              font-semibold
              hover:bg-[#0f1e19]
              hover:text-[#e7e3dc]
              transition-all
              duration-300
            "
          >
            <span>View All Inventory</span>

            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}