"use client";

import { vehicles } from "@/data/vehicles"; // Adjust path to where you stored the data file
import { ArrowRight, ChevronDown, Heart, RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function InventoryClient() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeType, setActiveType] = useState<string>("ALL");

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f0eb] text-[#0d1c17] flex flex-col justify-between font-sans">
      
      {/* HERO SECTION WITH INTEGRATED TRANSPARENT HEADER */}
      <section className="relative w-full h-[85vh] min-h-[550px] max-h-[750px] overflow-hidden flex flex-col justify-between">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vehicles/BMW-Collection-MainImage.png"
            alt="The Collection Hero"
            fill
            priority
            className="object-cover object-right-bottom"
          />
          {/* Left Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f0eb] via-[#f4f0eb]/70 to-transparent w-3/4" />
        </div>

        {/* TOP TRANSPARENT NAVIGATION HEADER */}
        <header className="relative z-20 w-full px-8 md:px-16 lg:px-24 py-8 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="font-serif text-xl tracking-[0.2em] text-[#0d1c17] uppercase font-light block">
              MSYNTRA
            </span>
            <span className="text-[8px] tracking-[0.4em] text-[#9e6d48] uppercase font-semibold block -mt-0.5">
              AUTOMOTIVE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.25em] text-[#0d1c17] uppercase font-semibold">
            <Link href="/inventory" className="text-[#9e6d48] border-b border-[#9e6d48] pb-0.5">
              INVENTORY
            </Link>
            <Link href="/about" className="hover:text-[#9e6d48] transition-colors">
              EXPERIENCE
            </Link>
            <Link href="/financing" className="hover:text-[#9e6d48] transition-colors">
              FINANCING
            </Link>
            <Link href="/about" className="hover:text-[#9e6d48] transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-[#9e6d48] transition-colors">
              CONTACT
            </Link>
          </nav>

          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#0d1c17] text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#9e6d48] hover:text-[#0d1c17] transition-all"
          >
            INQUIRE
          </Link>
        </header>

        {/* HERO EDITORIAL CONTENT */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 max-w-[1500px] mx-auto my-auto pb-12">
          <div className="max-w-xl">
            <h1
              className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[100px] tracking-[-0.03em] text-[#0d1c17] uppercase font-light leading-[0.88] mb-8"
              style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
            >
              THE <br />
              COLLECTION
            </h1>

            <p className="text-xs md:text-sm text-[#5d6863] font-light tracking-wide mb-10">
              Every vehicle. One destination.
            </p>

            {/* DYNAMIC VEHICLE COUNT */}
            <div className="inline-block">
              <span className="text-[10px] tracking-[0.25em] text-[#5d6863] uppercase font-semibold block mb-2">
                {vehicles.length} {vehicles.length === 1 ? "VEHICLE" : "VEHICLES"}
              </span>
              <div className="w-8 h-[2px] bg-[#9e6d48]" />
            </div>
          </div>
        </div>

      </section>

      {/* STICKY FILTER BAR */}
      <section className="sticky top-0 z-30 bg-[#f4f0eb]/95 backdrop-blur-md border-y border-[#dcd5c9] px-8 md:px-16 lg:px-24 py-4">
        <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase font-semibold">
          
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setActiveType("ALL")}
              className={`pb-1 border-b-2 transition-all ${
                activeType === "ALL"
                  ? "border-[#9e6d48] text-[#0d1c17]"
                  : "border-transparent text-[#5d6863] hover:text-[#0d1c17]"
              }`}
            >
              ALL
            </button>

            <div className="relative group cursor-pointer flex items-center gap-1.5 text-[#5d6863] hover:text-[#0d1c17]">
              <span>MAKE</span>
              <ChevronDown className="w-3 h-3 text-[#9e6d48]" />
            </div>

            <div className="relative group cursor-pointer flex items-center gap-1.5 text-[#5d6863] hover:text-[#0d1c17]">
              <span>MODEL</span>
              <ChevronDown className="w-3 h-3 text-[#9e6d48]" />
            </div>

            <div className="relative group cursor-pointer flex items-center gap-1.5 text-[#5d6863] hover:text-[#0d1c17]">
              <span>PRICE</span>
              <ChevronDown className="w-3 h-3 text-[#9e6d48]" />
            </div>
          </div>

          <button
            onClick={() => setActiveType("ALL")}
            className="flex items-center gap-2 text-[#9e6d48] hover:text-[#0d1c17] transition-colors"
          >
            <span>RESET FILTERS</span>
            <RotateCcw className="w-3 h-3" />
          </button>

        </div>
      </section>

      {/* DYNAMIC ASYMMETRICAL GRID */}
      <section className="px-8 md:px-16 lg:px-24 pt-12 pb-16">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-6">
          {vehicles.map((car, index) => {
            const isFav = favorites.includes(car.id);

            // Dynamic formula to make items 4th and 5th in every group of 6 span 3 columns
            const isWide = index % 6 === 3 || index % 6 === 4;
            const colSpanClass = isWide ? "md:col-span-3" : "md:col-span-2";

            return (
              <div
                key={car.id}
                className={`group bg-[#eae5dd] rounded-xl overflow-hidden border border-[#dcd5c9] hover:border-[#9e6d48]/50 transition-all flex flex-col justify-between ${colSpanClass}`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-[#ded8ce] ${
                    isWide ? "h-80 md:h-96" : "h-64"
                  }`}
                >
                  <Image
                    src={car.thumbnail || car.heroImage}
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  <button
                    onClick={(e) => toggleFavorite(car.id, e)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-[#f4f0eb]/70 backdrop-blur-sm text-[#0d1c17] hover:bg-[#0d1c17] hover:text-[#e7e3dc] transition-all z-10"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isFav ? "fill-[#9e6d48] text-[#9e6d48]" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] text-[#5d6863] font-light block mb-1">
                      {car.year} &bull; {car.trim}
                    </span>

                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-serif text-base md:text-lg tracking-wider text-[#0d1c17] uppercase font-medium">
                        {car.make} {car.model}
                      </h3>
                      <span className="text-xs font-semibold tracking-wider text-[#0d1c17] whitespace-nowrap">
                        {car.price}
                      </span>
                    </div>

                    <p className="text-[10px] tracking-widest text-[#5d6863] uppercase font-light mb-6">
                      {car.engineSpec} &bull; {car.powerSpec}
                    </p>
                  </div>

                  <Link
                    href={`/inventory/${car.id}`}
                    className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#9e6d48] group-hover:text-[#0d1c17] uppercase font-semibold transition-colors pt-2 border-t border-[#dcd5c9]"
                  >
                    <span>VIEW VEHICLE</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {vehicles.length === 0 && (
          <div className="text-center py-24 text-[#5d6863]">
            <p className="text-sm font-light tracking-wide">No vehicles found in the inventory.</p>
          </div>
        )}

        {vehicles.length > 0 && (
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-3 px-8 py-4 border border-[#9e6d48]/50 text-[10px] tracking-[0.25em] text-[#0d1c17] uppercase font-semibold hover:bg-[#0d1c17] hover:text-[#e7e3dc] transition-all group">
              <span>LOAD MORE VEHICLES</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#9e6d48] group-hover:text-[#e7e3dc] transition-colors" />
            </button>
          </div>
        )}
      </section>

    </div>
  );
}