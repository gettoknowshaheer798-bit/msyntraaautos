"use client";

import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import Link from "next/link";

const inventoryLinks = [
  {
    label: "All Vehicles",
    href: "/inventory",
  },
  {
    label: "Performance",
    href: "/inventory?type=performance",
  },
  {
    label: "Luxury",
    href: "/inventory?type=luxury",
  },
  {
    label: "SUV",
    href: "/inventory?type=suv",
  },
  {
    label: "Electric",
    href: "/inventory?type=electric",
  },
];

const experienceLinks = [
  {
    label: "Private Viewings",
    href: "/experience",
  },
  {
    label: "Test Drive",
    href: "/experience",
  },
  {
    label: "Concierge",
    href: "/experience",
  },
  {
    label: "Our Space",
    href: "/experience",
  },
];

const companyLinks = [
  {
    label: "About MSYNTRA",
    href: "/about",
  },
  {
    label: "The MSYNTRA Standard",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#07130e] text-[#e7e3dc]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">

        {/* =====================================================
            BRAND INTRO
        ===================================================== */}

        <div className="border-b border-[#18362b] py-16 md:py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            {/* Brand */}
            <div>
              <div className="flex items-start gap-5">

                <span className="font-serif text-6xl font-light leading-none text-[#9e6d48] md:text-7xl">
                  M
                </span>

                <div className="pt-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#e7e3dc]">
                    MSYNTRA
                  </p>

                  <p className="mt-1 text-[9px] font-light uppercase tracking-[0.22em] text-[#718078]">
                    Automotive
                  </p>
                </div>

              </div>

              <p className="mt-8 max-w-md text-sm font-light leading-7 text-[#8a9992]">
                Exceptional automobiles, carefully selected and
                thoughtfully presented for those who appreciate every
                detail.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="lg:text-right">

              <p className="text-[9px] uppercase tracking-[0.25em] text-[#718078]">
                Begin your journey
              </p>

              <Link
                href="/contact"
                className="group mt-4 inline-flex items-center gap-5 text-2xl font-light tracking-[-0.02em] text-[#e7e3dc] transition-colors hover:text-[#9e6d48] md:text-3xl"
              >
                Talk to MSYNTRA

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1}
                />
              </Link>

            </div>

          </div>
        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <div className="grid gap-12 border-b border-[#18362b] py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">

          {/* Inventory */}
          <div className="lg:col-span-3">

            <h4 className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#e7e3dc]">
              Inventory
            </h4>

            <ul className="mt-6 space-y-3">
              {inventoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xs font-light text-[#718078] transition-colors hover:text-[#e7e3dc]"
                  >
                    <span className="h-px w-0 bg-[#9e6d48] transition-all duration-300 group-hover:w-3" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Experience */}
          <div className="lg:col-span-3">

            <h4 className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#e7e3dc]">
              Experience
            </h4>

            <ul className="mt-6 space-y-3">
              {experienceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xs font-light text-[#718078] transition-colors hover:text-[#e7e3dc]"
                  >
                    <span className="h-px w-0 bg-[#9e6d48] transition-all duration-300 group-hover:w-3" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Company */}
          <div className="lg:col-span-3">

            <h4 className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#e7e3dc]">
              Company
            </h4>

            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xs font-light text-[#718078] transition-colors hover:text-[#e7e3dc]"
                  >
                    <span className="h-px w-0 bg-[#9e6d48] transition-all duration-300 group-hover:w-3" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact */}
          <div className="border-l border-[#18362b] pl-6 sm:pl-0 sm:border-none lg:col-span-3 lg:border-l lg:pl-8">

            <h4 className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#e7e3dc]">
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              {/* Location */}
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#52645c]">
                  Location
                </p>

                <p className="mt-2 text-xs font-light text-[#8a9992]">
                  Karachi, Pakistan
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#52645c]">
                  Email
                </p>

                <a
                  href="mailto:contact@msyntra.com"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-light text-[#8a9992] transition-colors hover:text-[#e7e3dc]"
                >
                  contact@msyntra.com

                  <Mail
                    className="h-3 w-3 text-[#9e6d48]"
                    strokeWidth={1.5}
                  />
                </a>
              </div>

              {/* Viewing */}
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#52645c]">
                  Viewing
                </p>

                <p className="mt-2 text-xs font-light text-[#8a9992]">
                  By appointment
                </p>
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border-b border-[#9e6d48]/50 pb-2 pt-2 text-[9px] uppercase tracking-[0.18em] text-[#9e6d48] transition-colors hover:border-[#9e6d48] hover:text-[#e7e3dc]"
              >
                Contact MSYNTRA

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>
          </div>

        </div>

        {/* =====================================================
            SOCIAL / BRAND STATEMENT
        ===================================================== */}

        <div className="border-b border-[#18362b] py-12 lg:py-16">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

            {/* Statement */}
            <div>

              <p className="text-[clamp(2rem,5vw,4.5rem)] font-light leading-[0.9] tracking-[-0.045em] text-[#e7e3dc]">
                EXCEPTIONAL
                <br />
                AUTOMOBILES.
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.25em] text-[#52645c]">
                Curated for those who appreciate every detail.
              </p>

            </div>

            {/* Social */}
            <div>

              <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-[#52645c]">
                Stay connected
              </p>

              <div className="flex items-center gap-3">

                {/* Instagram */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center border border-[#18362b] text-[#718078] transition-all duration-300 hover:border-[#9e6d48] hover:bg-[#9e6d48] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center border border-[#18362b] text-[#718078] transition-all duration-300 hover:border-[#9e6d48] hover:bg-[#9e6d48] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center border border-[#18362b] text-[#718078] transition-all duration-300 hover:border-[#9e6d48] hover:bg-[#9e6d48] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@msyntra.com"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center border border-[#18362b] text-[#718078] transition-all duration-300 hover:border-[#9e6d48] hover:bg-[#9e6d48] hover:text-white"
                >
                  <Mail
                    className="h-4 w-4"
                    strokeWidth={1.4}
                  />
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            GIANT BRAND MARK
        ===================================================== */}

        <div className="overflow-hidden py-8 md:py-10 lg:py-12">

          <p className="whitespace-nowrap text-[18vw] font-light leading-[0.72] tracking-[-0.08em] text-[#10231b]">
            MSYNTRA
          </p>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-5 border-t border-[#18362b] py-7 text-[8px] font-light uppercase tracking-[0.18em] text-[#52645c] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} MSYNTRA AUTOMOTIVE. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy"
              className="transition-colors hover:text-[#e7e3dc]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#e7e3dc]"
            >
              Terms of Service
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}