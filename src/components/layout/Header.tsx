"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const inventoryItems = [
    { label: "ALL VEHICLES", href: "/inventory" },
    { label: "PERFORMANCE", href: "/inventory?category=performance" },
    { label: "LUXURY", href: "/inventory?category=luxury" },
    { label: "SUV", href: "/inventory?category=suv" },
    { label: "ELECTRIC", href: "/inventory?category=electric" },
  ];

  const servicesItems = [
    { label: "FINANCING", href: "/financing" },
    { label: "TRADE-IN", href: "/trade-in" },
    { label: "SERVICE", href: "/service" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-20 transition-all duration-300 ${
        isScrolled
          ? "py-3.5 bg-[#f7f5f0]/80 backdrop-blur-md border-b border-[#e5e0d8]/80 shadow-sm"
          : "py-5 bg-[#f7f5f0] border-b border-[#e5e0d8]"
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex flex-col">
          <span
            className={`font-serif tracking-[0.25em] text-[#0d1c17] uppercase font-light leading-none transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            MSYNTRA
          </span>
          <span
            className={`tracking-[0.4em] text-[#9e6d48] uppercase font-medium mt-1 transition-all duration-300 ${
              isScrolled ? "text-[7px]" : "text-[8px]"
            }`}
          >
            AUTOMOTIVE
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.25em] text-[#0d1c17] uppercase font-medium">
          
          {/* INVENTORY DROPDOWN */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setOpenDropdown("inventory")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/inventory"
              className={`flex items-center gap-1.5 transition-colors ${
                pathname.startsWith("/inventory")
                  ? "text-[#9e6d48]"
                  : "hover:text-[#9e6d48]"
              }`}
            >
              <span>INVENTORY</span>
              <ChevronDown className="w-3 h-3 text-[#0d1c17] group-hover:text-[#9e6d48] transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 min-w-[180px] bg-[#f7f5f0]/95 backdrop-blur-md border border-[#e5e0d8] shadow-lg py-3 transition-all duration-200 ${
                openDropdown === "inventory"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              {inventoryItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-5 py-2 text-[10px] tracking-[0.2em] text-[#2c302e] hover:text-[#9e6d48] hover:bg-[#eee9e0] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* EXPERIENCE LINK */}
          <Link
            href="/experience"
            className={`transition-colors ${
              pathname === "/experience"
                ? "text-[#9e6d48]"
                : "hover:text-[#9e6d48]"
            }`}
          >
            EXPERIENCE
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className={`flex items-center gap-1.5 transition-colors ${
                ["/financing", "/trade-in", "/service"].includes(pathname)
                  ? "text-[#9e6d48]"
                  : "hover:text-[#9e6d48]"
              }`}
            >
              <span>SERVICES</span>
              <ChevronDown className="w-3 h-3 text-[#0d1c17] group-hover:text-[#9e6d48] transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 min-w-[160px] bg-[#f7f5f0]/95 backdrop-blur-md border border-[#e5e0d8] shadow-lg py-3 transition-all duration-200 ${
                openDropdown === "services"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              {servicesItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-5 py-2 text-[10px] tracking-[0.2em] text-[#2c302e] hover:text-[#9e6d48] hover:bg-[#eee9e0] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ABOUT LINK */}
          <Link
            href="/about"
            className={`transition-colors ${
              pathname === "/about"
                ? "text-[#9e6d48]"
                : "hover:text-[#9e6d48]"
            }`}
          >
            ABOUT
          </Link>
        </nav>

        {/* ACTION BUTTON */}
        <Link
          href="/contact"
          className={`group flex items-center gap-4 border border-[#0d1c17] text-[#0d1c17] text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#0d1c17] hover:text-[#e7e3dc] transition-all duration-300 ${
            isScrolled ? "px-5 py-2" : "px-6 py-2.5"
          }`}
        >
          <span>BOOK A VIEWING</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0d1c17] group-hover:text-[#e7e3dc] transition-transform group-hover:translate-x-1" />
        </Link>

      </div>
    </header>
  );
}

// Named export fallback
export { Header };
