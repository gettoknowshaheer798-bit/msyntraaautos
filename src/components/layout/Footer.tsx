'use client';

import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#07130e] text-[#e7e3dc] pt-20 pb-12 px-8 md:px-16 lg:px-24 border-t border-[#122820]">
      <div className="max-w-[1500px] mx-auto">
        
        {/* TOP / MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* Brand Mark & Tagline */}
          <div className="lg:col-span-5 flex items-start gap-6">
            {/* Serif 'M' Logo Mark */}
            <span className="font-serif text-5xl md:text-6xl text-[#9e6d48] font-light leading-none select-none">
              M
            </span>
            <div className="space-y-1 pt-1">
              <p className="text-[10px] tracking-[0.25em] text-[#e7e3dc] uppercase font-medium">
                EXCEPTIONAL AUTOMOBILES.
              </p>
              <p className="text-[10px] tracking-[0.2em] text-[#8a9992] uppercase font-light">
                CURATED FOR THOSE WHO APPRECIATE EVERY DETAIL.
              </p>
            </div>
          </div>

          {/* Navigation & Socials Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Inventory */}
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.25em] text-[#e7e3dc] uppercase font-semibold">
                INVENTORY
              </h4>
              <ul className="space-y-2.5 text-xs text-[#8a9992] font-light">
                <li><Link href="/inventory" className="hover:text-[#9e6d48] transition-colors">All Vehicles</Link></li>
                <li><Link href="/inventory?type=performance" className="hover:text-[#9e6d48] transition-colors">Performance</Link></li>
                <li><Link href="/inventory?type=luxury" className="hover:text-[#9e6d48] transition-colors">Luxury</Link></li>
                <li><Link href="/inventory?type=suv" className="hover:text-[#9e6d48] transition-colors">SUV</Link></li>
                <li><Link href="/inventory?type=electric" className="hover:text-[#9e6d48] transition-colors">Electric</Link></li>
              </ul>
            </div>

            {/* Column 2: Experience */}
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.25em] text-[#e7e3dc] uppercase font-semibold">
                EXPERIENCE
              </h4>
              <ul className="space-y-2.5 text-xs text-[#8a9992] font-light">
                <li><Link href="/about#viewings" className="hover:text-[#9e6d48] transition-colors">Viewings</Link></li>
                <li><Link href="/about#test-drive" className="hover:text-[#9e6d48] transition-colors">Test Drive</Link></li>
                <li><Link href="/about#concierge" className="hover:text-[#9e6d48] transition-colors">Concierge</Link></li>
                <li><Link href="/about#our-space" className="hover:text-[#9e6d48] transition-colors">Our Space</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4">
              <h4 className="text-[10px] tracking-[0.25em] text-[#e7e3dc] uppercase font-semibold">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-xs text-[#8a9992] font-light">
                <li><Link href="/about" className="hover:text-[#9e6d48] transition-colors">About Us</Link></li>
                <li><Link href="/about#standard" className="hover:text-[#9e6d48] transition-colors">The MSyntra Standard</Link></li>
                <li><Link href="/about#careers" className="hover:text-[#9e6d48] transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-[#9e6d48] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 4: Stay Connected */}
            <div className="space-y-4 border-l border-[#18362b] pl-6 sm:pl-0 sm:border-none">
              <h4 className="text-[10px] tracking-[0.25em] text-[#e7e3dc] uppercase font-semibold">
                STAY CONNECTED
              </h4>
              <div className="flex items-center gap-4 text-[#9e6d48] pt-1">
                {/* Instagram Icon */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#e7e3dc] transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Facebook Icon */}
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#e7e3dc] transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* YouTube Icon */}
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#e7e3dc] transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* Mail Icon */}
                <a href="mailto:contact@msyntra.com" className="hover:text-[#e7e3dc] transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT LINE */}
        <div className="pt-8 border-t border-[#122820] flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] tracking-[0.2em] text-[#8a9992] uppercase font-light">
          <p>© {new Date().getFullYear()} MSYNTRA AUTOMOTIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#e7e3dc] transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms" className="hover:text-[#e7e3dc] transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}