"use client";

import { Link, useNavigate } from "@tanstack/react-router"; 
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

export function SiteFooter() {
  const navigate = useNavigate();
  
  const handleProductJump = (targetSection: string) => {
    if (typeof window !== "undefined") {
      // Automatically read current location path to preserve matching routing styles
      const isPluralPath = window.location.pathname.includes("/products");
      const basePath = isPluralPath ? "/products" : "/product";
      const targetUrl = `${basePath}#${targetSection}`;
      
      if (window.location.pathname === "/product" || window.location.pathname === "/products") {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.location.hash = targetSection;
        }
      } else {
        // Try passing through TanStack first, fallback to hard window move if layout tree intercepts
        navigate({ to: basePath }).then(() => {
          setTimeout(() => {
            const element = document.getElementById(targetSection);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              window.location.hash = targetSection;
            }
          }, 150);
        }).catch(() => {
          // Absolute fallback escape hatch to handle structural mismatches safely without 404 crashes
          window.location.href = targetUrl;
        });
      }
    }
  };

  return (
    <footer className="bg-[#110E0B] text-[#A69E94] border-t border-white/5 font-sans relative overflow-hidden">
      
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#D49A5B]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* --- TOP CTA SECTION --- */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-16 border-b border-white/5">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#D49A5B] block mb-4">
          LET'S BUILD TOGETHER
        </span>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none max-w-4xl">
            Where metal <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D49A5B] to-[#E0A96D]">meets craft.</span>
          </h2>
          <div className="shrink-0 pt-2">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-[#D49A5B] hover:bg-white text-black font-mono text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all shadow-lg group"
            >
              <span>Start An Enquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* --- DIRECTORY GRID --- */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-sm">
        
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D49A5B] flex items-center justify-center font-serif text-black font-black text-lg shadow-sm">
              D
            </div>
            <div>
              <h4 className="font-black text-white tracking-wider uppercase text-base">DRG</h4>
              <p className="text-[10px] font-mono tracking-widest text-[#D49A5B] uppercase font-bold">HINGES & ARCHITECTURAL HARDWARE</p>
            </div>
          </div>
          <p className="text-[#8E867E] text-xs font-light leading-relaxed max-w-sm">
            Precision-engineered architectural hardware — supplying architects, builders and distributors across five continents.
          </p>
        </div>

        {/* Column 2: Explore Links */}
        <div className="lg:col-span-2 space-y-4">
          <h5 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D49A5B]">Explore</h5>
          <ul className="space-y-2.5 text-xs font-light text-[#FAF9F5]/80">
            <li><Link to="/" className="hover:text-[#D49A5B] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#D49A5B] transition-colors">About</Link></li>
            <li><Link to="/product" className="hover:text-[#D49A5B] transition-colors">Product</Link></li>
            <li><Link to="/contact" className="hover:text-[#D49A5B] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Product Subcategories */}
        <div className="lg:col-span-2 space-y-4">
          <h5 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D49A5B]">Product</h5>
          <ul className="space-y-2.5 text-xs font-light text-[#FAF9F5]/80">
            <li>
              <button onClick={() => handleProductJump("ball-bearing")} className="hover:text-[#D49A5B] transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer">
                Ball Bearing Hinges
              </button>
            </li>
            <li>
              <button onClick={() => handleProductJump("concealed")} className="hover:text-[#D49A5B] transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer">
                Concealed Hinges
              </button>
            </li>
            <li>
              <button onClick={() => handleProductJump("hydraulic")} className="hover:text-[#D49A5B] transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer">
                Hydraulic Hinges
              </button>
            </li>
            <li>
              <button onClick={() => handleProductJump("tower-bolts")} className="hover:text-[#D49A5B] transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer">
                Premium Tower Bolts
              </button>
            </li>
            <li>
              <button onClick={() => handleProductJump("aldrops")} className="hover:text-[#D49A5B] transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer">
                Aldrops
              </button>
            </li>
            <li>
              <button onClick={() => handleProductJump("drawer-slides")} className="hover:text-[#D49A5B] transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer">
                Drawer Slides
              </button>
            </li>
            <li>
              <button onClick={() => handleProductJump("soft-close")} className="hover:text-[#D49A5B] transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer">
                Soft Close Channels
              </button>
            </li>
            <li>
              <button onClick={() => handleProductJump("kitchen")} className="hover:text-[#D49A5B] transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer">
                Kitchen Accessories
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Credentials */}
        <div className="lg:col-span-3 space-y-4 font-light text-xs">
          <h5 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D49A5B]">Get In Touch</h5>
          <div className="space-y-3 text-[#FAF9F5]/80">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D49A5B] shrink-0 mt-0.5" />
              <div className="leading-normal">
                <span className="font-bold text-white block text-[11px] mb-0.5">WORKSHOP</span>
                DRG Hinges & Hardware Architecture<br />
                Plot No. 204, Sector 16, HSIIDC Bahadurgarh,<br />
                Haryana - 124507 India
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <Mail className="w-4 h-4 text-[#D49A5B] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block text-[11px] mb-0.5">EMAIL</span>
                <a href="mailto:drghinges@rediffmail.com" className="hover:text-[#D49A5B] transition-colors block">drghinges@rediffmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <Phone className="w-4 h-4 text-[#D49A5B] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block text-[11px] mb-0.5">PHONE</span>
                <a href="tel:+919080222398" className="hover:text-[#D49A5B] transition-colors block">+91 9080222398</a>
                <a href="tel:+919812540303" className="hover:text-[#D49A5B] transition-colors block">+91 9812540303</a>
                <div className="flex items-center gap-1 text-[11px] text-[#8E867E] mt-1">
                  <Clock className="w-3 h-3 text-[#D49A5B]" />
                  <span>Mon–Sat, 9am – 7pm IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/5 bg-black/20 py-6 font-mono text-[10px]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#6E6861]">
          <p>© 2026 DRG Hinges & Architectural Hardware.</p>
          <div className="flex items-center gap-2 text-neutral-500 font-bold tracking-widest uppercase">
            <span>CRAFTED IN INDIA</span>
            <span className="text-[#D49A5B]">•</span>
            <span>SHIPPED WORLDWIDE</span>
          </div>
        </div>
      </div>

    </footer>
  );
}