"use client";

import type { Vehicle } from "@/types/vehicle";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Calendar, Clock, ShieldCheck, Truck } from "lucide-react";

import Image from "next/image";

import Link from "next/link";

interface Props {
  vehicle: Vehicle;
}

const SUPPORT_PHONE = "(021) 111 000 888";

const SUPPORT_PHONE_HREF =
  "tel:" + SUPPORT_PHONE.replace(/[^\d+]/g, "");

const TRUST_BADGES = [
  { icon: Truck, label: "Nationwide\nDelivery" },
  { icon: ShieldCheck, label: "Secure\nPayment" },
  { icon: Calendar, label: "7-Day Money\nBack Guarantee" },
  { icon: Clock, label: "24/7 Customer\nSupport" },
];

export default function VehicleActionFooterSection({
  vehicle,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  const finalImage =
    vehicle.galleryImages?.[vehicle.galleryImages.length - 1] ??
    vehicle.actionImage ??
    vehicle.heroImage;

  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      {/* =====================================================
          FINAL CTA BANNER
      ====================================================== */}

      <div className="relative overflow-hidden bg-[#07130e] text-[#f4f0eb]">
        <div className="grid min-h-[400px] grid-cols-1 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          
          {/* =================================================
              LEFT: CENTERED CTA CONTENT
          ================================================= */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-12 lg:py-20"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/50">
              READY TO EXPERIENCE IT?
            </p>

            <h2 className="mt-4 whitespace-nowrap text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              This Drive Changes Everything.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
              Schedule a private viewing or test drive today.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <Link
                href={`/contact?vehicle=${encodeURIComponent(
                  `${vehicle.year} ${vehicle.make} ${vehicle.model}`
                )}&type=viewing`}
                className="inline-flex h-12 items-center justify-center gap-3 bg-[#e7e3dc] border border-[#e7e3dc] px-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#07130e] transition-colors hover:bg-[#07130e] hover:border-[#e7e3dc] hover:text-[#e7e3dc]"
              >
                Book a Viewing

                <Calendar className="h-3.5 w-3.5" />
              </Link>

              <a
                href={SUPPORT_PHONE_HREF}
                className="text-[11px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              >
                Or call {SUPPORT_PHONE}
              </a>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT: FULL-BLEED IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative min-h-[280px] w-full overflow-hidden lg:min-h-0"
          >
            <Image
              src={finalImage}
              alt={`${vehicle.make} ${vehicle.model}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* =================================================
                SOFT BLEND INTO DARK GREEN SECTION
            ================================================= */}

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#07130e] via-[#07130e]/55 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          TRUST BADGE STRIP
      ====================================================== */}

      <div className="border-t border-[#07130e]/10 bg-[#f4f0eb] text-[#07130e]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 py-8 sm:px-10 lg:grid-cols-4 lg:px-14">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-[#07130e]"
                strokeWidth={1.4}
              />

              <span className="whitespace-pre-line text-xs leading-5 text-[#4f514d]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}