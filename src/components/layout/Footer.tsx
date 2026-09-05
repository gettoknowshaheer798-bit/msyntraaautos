import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

const inventoryLinks = [
  { label: "All Vehicles", href: "/inventory" },
  { label: "Performance", href: "/inventory?type=performance" },
  { label: "Luxury", href: "/inventory?type=luxury" },
  { label: "SUV", href: "/inventory?type=suv" },
  { label: "Electric", href: "/inventory?type=electric" },
];

const experienceLinks = [
  { label: "Private Viewings", href: "/experience" },
  { label: "Test Drive", href: "/experience" },
  { label: "Concierge", href: "/experience" },
  { label: "Our Space", href: "/experience" },
];

const companyLinks = [
  { label: "About MSYNTRA", href: "/about" },
  { label: "The MSYNTRA Standard", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07130e] text-[#e7e3dc]">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/[0.08] py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-4"
            >
              <span className="font-serif text-5xl font-light leading-none text-[#9e6d48]">
                M
              </span>

              <span>
                <span className="block text-[10px] uppercase tracking-[0.28em] text-[#e7e3dc]">
                  MSYNTRA
                </span>

                <span className="mt-1 block text-[8px] uppercase tracking-[0.22em] text-[#68766f]">
                  Automotive
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-xs font-light leading-6 text-[#718078]">
              Exceptional automobiles, curated for those who
              appreciate every detail.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#9e6d48]/50 pb-2 text-[9px] uppercase tracking-[0.18em] text-[#9e6d48] transition-colors hover:border-[#9e6d48] hover:text-[#e7e3dc]"
            >
              Talk to MSYNTRA

              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.4}
              />
            </Link>
          </div>

          {/* Inventory */}
          <div className="lg:col-span-2">
            <h3 className="text-[8px] uppercase tracking-[0.22em] text-[#e7e3dc]">
              Inventory
            </h3>

            <ul className="mt-5 space-y-2.5">
              {inventoryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[10px] font-light text-[#718078] transition-colors hover:text-[#e7e3dc]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-[8px] uppercase tracking-[0.22em] text-[#e7e3dc]">
              Experience
            </h3>

            <ul className="mt-5 space-y-2.5">
              {experienceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[10px] font-light text-[#718078] transition-colors hover:text-[#e7e3dc]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-[8px] uppercase tracking-[0.22em] text-[#e7e3dc]">
              Company
            </h3>

            <ul className="mt-5 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[10px] font-light text-[#718078] transition-colors hover:text-[#e7e3dc]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-[8px] uppercase tracking-[0.22em] text-[#e7e3dc]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#4f6058]">
                  Location
                </p>

                <p className="mt-1.5 text-[10px] font-light text-[#718078]">
                  Karachi, Pakistan
                </p>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#4f6058]">
                  Email
                </p>

                <a
                  href="mailto:contact@msyntra.com"
                  className="mt-1.5 inline-flex items-center gap-2 text-[10px] font-light text-[#718078] transition-colors hover:text-[#e7e3dc]"
                >
                  contact@msyntra.com

                  <Mail
                    className="h-3 w-3 text-[#9e6d48]"
                    strokeWidth={1.4}
                  />
                </a>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#4f6058]">
                  Viewing
                </p>

                <p className="mt-1.5 text-[10px] font-light text-[#718078]">
                  By appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-[8px] uppercase tracking-[0.16em] text-[#4f6058]">
            © {currentYear} MSYNTRA Automotive. All rights reserved.
          </p>

          {/* Social + legal */}
          <div className="flex flex-wrap items-center gap-5">

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[8px] uppercase tracking-[0.16em] text-[#4f6058] transition-colors hover:text-[#e7e3dc]"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[8px] uppercase tracking-[0.16em] text-[#4f6058] transition-colors hover:text-[#e7e3dc]"
            >
              Facebook
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[8px] uppercase tracking-[0.16em] text-[#4f6058] transition-colors hover:text-[#e7e3dc]"
            >
              YouTube
            </a>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <Link
              href="/privacy"
              className="text-[8px] uppercase tracking-[0.16em] text-[#4f6058] transition-colors hover:text-[#e7e3dc]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-[8px] uppercase tracking-[0.16em] text-[#4f6058] transition-colors hover:text-[#e7e3dc]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}