"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  currentModelName?: string;
}

const menuItems = [
  { name: "MODELS", href: "/catalog" },
  { name: "TECHNOLOGY", href: "/about" },
  { name: "FINANCING", href: "/financing" },
  { name: "EXPERIENCE", href: "/experience" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar({ currentModelName }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Lock background scrolling when menu drawer is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Framer Motion Variants for Staggered Link Reveals
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: 20 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] as const 
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.25 },
    },
  };

  return (
    <>
      <nav className="relative z-50 flex w-full items-center justify-between px-6 py-6 sm:px-10 md:px-14">
        {/* 1. Brand Logo */}
        <Link href="/" className="z-50 flex items-center group">
          <svg
            viewBox="0 0 100 115"
            className="h-7 w-7 fill-white transition-opacity group-hover:opacity-80 sm:h-8 sm:w-8"
            aria-label="Brand Logo"
          >
            <path d="M50 0 L100 20 V65 C100 90 70 108 50 115 C30 108 0 90 0 65 V20 Z M50 12 L15 28 V63 C15 82 38 97 50 102 C62 97 85 82 85 63 V28 Z M35 40 L65 40 L35 75 L65 75" />
          </svg>
        </Link>

        {/* 2. Fixed Company Name */}
        <div className="absolute left-1/2 top-1/2 z-50 max-w-[50%] -translate-x-1/2 -translate-y-1/2 truncate text-center">
          <span className="font-sans text-xs font-semibold tracking-[0.35em] uppercase text-white sm:text-sm">
            {currentModelName || "MSYNTRA"}
          </span>
        </div>

        {/* 3. Toggle Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="z-50 p-1 text-white transition-opacity hover:opacity-70 focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="h-7 w-7 stroke-[1.25]" />
          ) : (
            <svg
              viewBox="0 0 36 18"
              className="h-4 w-9 fill-none stroke-current stroke-[1.25]"
            >
              <line x1="0" y1="2" x2="36" y2="2" />
              <line x1="0" y1="9" x2="36" y2="9" />
              <line x1="0" y1="16" x2="36" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      {/* 4. Fullscreen Animated Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-hidden bg-[#05070a] px-8 py-10 text-white backdrop-blur-2xl md:px-16 md:py-14"
          >
            {/* Cinematic Background Gradient Atmosphere */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.35 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="pointer-events-none absolute -left-1/4 -top-1/4 h-[150%] w-[150%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900/10 to-transparent blur-3xl"
            />

            {/* Subtle Top Spacer */}
            <div className="h-12 w-full" />

            {/* Staggered Navigation Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative z-10 my-auto flex flex-col items-start space-y-3 sm:space-y-4 md:space-y-5"
            >
              {menuItems.map((item, idx) => {
                const isHovered = hoveredIndex === idx;
                const isAnyHovered = hoveredIndex !== null;

                return (
                  <div key={item.name} className="overflow-hidden">
                    <motion.div variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group relative block text-3xl font-thin tracking-[0.22em] text-white transition-all duration-500 sm:text-5xl md:text-6xl lg:text-7xl ${
                          isAnyHovered && !isHovered
                            ? "opacity-25 blur-[1px]"
                            : "opacity-90 hover:opacity-100"
                        }`}
                      >
                        <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-3">
                          {item.name}
                        </span>

                        {/* Animated Glow Line on Hover */}
                        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-white via-blue-200 to-transparent opacity-80 transition-all duration-500 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Footer Information Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative z-10 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase sm:text-xs"
            >
              <div>© 2026 MSYNTRA</div>
              <div>GLOBAL / AUTOMATED</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}