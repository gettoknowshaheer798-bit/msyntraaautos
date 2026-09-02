"use client";

import { Vehicle } from "@/types/vehicle";
import { ArrowLeft, ArrowRight, Calendar, Gauge, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function VehicleHeroSection({ vehicle }: { vehicle: Vehicle }) {
  const gallery = vehicle.galleryImages && vehicle.galleryImages.length > 0 
    ? vehicle.galleryImages 
    : [vehicle.heroImage, vehicle.thumbnail, vehicle.actionImage].filter(Boolean) as string[];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="w-full bg-[#11231c] text-[#e7e3dc]">
      {/* Upper Split Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* Left Side: Full Aspect Image Stage */}
        <div className="lg:col-span-8 relative w-full bg-[#0d1c17] flex items-center justify-center overflow-hidden">
          
          {/* Vertical Index Indicator Top-Left */}
          <div className="absolute top-8 left-8 z-20 flex flex-col items-center gap-1 text-[10px] tracking-widest text-[#8a9a93] font-mono select-none">
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
            <div className="w-[1px] h-6 bg-[#213830]" />
            <span>{String(gallery.length).padStart(2, "0")}</span>
          </div>

          {/* Uncropped Aspect Image Container */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src={gallery[currentIndex] || vehicle.heroImage}
              alt={`${vehicle.make} ${vehicle.model}`}
              fill
              priority
              className="object-cover object-center transition-all duration-500"
            />
          </div>

          {/* Bottom-Left Carousel Arrows */}
          {gallery.length > 1 && (
            <div className="absolute bottom-6 left-8 z-20 flex items-center gap-3">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
                className="p-2 border border-white/20 bg-black/20 backdrop-blur-sm rounded-full hover:border-[#9e6d48] text-[#e7e3dc] transition-all"
                aria-label="Previous Image"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
                className="p-2 border border-white/20 bg-black/20 backdrop-blur-sm rounded-full hover:border-[#9e6d48] text-[#e7e3dc] transition-all"
                aria-label="Next Image"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Sidebar Info */}
        <div className="lg:col-span-4 bg-[#11231c] p-8 md:p-12 flex flex-col justify-center border-l border-[#1b332a]">
          <span className="text-xs tracking-[0.3em] text-[#8a9a93] uppercase font-light block mb-2">
            {vehicle.year}
          </span>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider text-[#e7e3dc] font-light leading-tight mb-4">
            {vehicle.make} <br />
            <span>{vehicle.model}</span>
          </h1>

          <div className="w-12 h-[1px] bg-[#9e6d48] mb-6" />

          {/* Price */}
          <div className="text-3xl font-serif text-[#e7e3dc] mb-8">
            {typeof vehicle.price === "number"
              ? `$${(vehicle.price as number).toLocaleString()}`
              : vehicle.price}
            <span className="text-xs font-sans text-[#8a9a93] tracking-widest font-light uppercase ml-2">
              USD
            </span>
          </div>

          {/* Spec Badges */}
          <div className="space-y-4 mb-8 text-[11px] tracking-[0.2em] uppercase font-light text-[#a2b0a9]">
            {vehicle.powerSpec && (
              <div className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-[#8a9a93]" />
                <span>{vehicle.powerSpec}</span>
              </div>
            )}
            {vehicle.engineSpec && (
              <div className="flex items-center gap-3">
                <Gauge className="w-4 h-4 text-[#8a9a93]" />
                <span>{vehicle.engineSpec}</span>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-[#8a9a93]" />
              <span>AWD &bull; ALL WHEEL DRIVE</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="space-y-4">
            <button className="w-full py-4 bg-[#b07d58] text-[#0d1c17] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#e7e3dc] transition-all flex items-center justify-center gap-2">
              BOOK A VIEWING
              <Calendar className="w-3.5 h-3.5" />
            </button>
            <button className="w-full py-4 border border-[#213830] text-[#8a9a93] hover:text-[#e7e3dc] text-[10px] tracking-[0.25em] uppercase font-light hover:bg-[#182e25] transition-all">
              SCHEDULE A TEST DRIVE &rarr;
            </button>
          </div>
        </div>

      </div>

      {/* Lower Row: Centered Thumbnail Selector Bar */}
      {gallery.length > 0 && (
        <div className="bg-[#f4f0eb] py-6 px-8 md:px-12 border-t border-[#dcd5c9]">
          <div className="flex items-center justify-center gap-4 overflow-x-auto max-w-[1500px] mx-auto pb-2 scrollbar-none">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded overflow-hidden transition-all ${
                  currentIndex === idx
                    ? "ring-2 ring-[#9e6d48] scale-105 shadow-md"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}