"use client";

import { Link, useNavigate } from "@tanstack/react-router"; 
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import logoAsset from "@/assets/newlogo.png";

export function SiteFooter() {
  const navigate = useNavigate();
  
  const handleProductJump = (targetSection: string) => {
    if (typeof window === "undefined") return;

    // Standardized target anchor URL generation safely handled
    if (window.location.pathname === "/products") {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.location.hash = targetSection;
      }
    } else {
      // Direct navigation window dispatch to prevent TanStack async state lockups
      navigate({ to: "/products" })
        .then(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              const element = document.getElementById(targetSection);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.location.hash = targetSection;
              }
            }, 100);
          });
        })
        .catch(() => {
          window.location.href = `/products#${targetSection}`;
        });
    }
  };

  return (
    <footer className="bg-[#110E0B] text-[#A69E94] border-t border-white/5 font-sans relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* --- TOP CTA SECTION: Made highly compact on mobile --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-12 pb-8 sm:pt-24 sm:pb-16 border-b border-white/5">
        <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-2 sm:mb-4">
          LET'S BUILD TOGETHER
        </span>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Where metal <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">meets craft.</span>
          </h2>
          <div className="shrink-0">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-white text-white hover:text-[#110E0B] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all shadow-lg group w-full sm:w-auto justify-center"
            >
              <span>Start An Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* --- DIRECTORY GRID: Asymmetric layout fixing vertical overflow --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 text-sm">
        
        {/* Column 1: Brand Info Layout */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3 group">
            <img 
              src={logoAsset} 
              alt="DRG Premium SS Hinges Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-103" 
            />
            <div>
              <h4 className="font-black text-white tracking-wider uppercase text-sm sm:text-base">DRG</h4>
              <p className="text-[9px] sm:text-[10px] font-mono tracking-widest text-primary uppercase font-bold">HINGES & ARCHITECTURAL HARDWARE</p>
            </div>
          </div>
          <p className="text-[#8E867E] text-xs font-light leading-relaxed max-w-sm">
            Precision-engineered architectural hardware — supplying premium components providing maximum structural safety for modern infrastructures.
          </p>
        </div>

        {/* Column 2 & 3 Combined into a clean horizontal grid layout on mobile screens */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:col-span-4 lg:grid-cols-2">
          {/* Explore Sub-Navigation */}
          <div className="space-y-3">
            <h5 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">Explore</h5>
            <ul className="space-y-2 text-xs font-light text-[#FAF9F5]/80">
              <li><Link to="/" className="hover:text-primary transition-colors block py-0.5">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors block py-0.5">About</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors block py-0.5">Product</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors block py-0.5">Contact</Link></li>
            </ul>
          </div>

          {/* Product Subcategories - Stacked as simple text lines to eliminate space consumption */}
          <div className="space-y-3">
            <h5 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">Product</h5>
            <ul className="space-y-2 text-xs font-light text-[#FAF9F5]/80">
              <li>
                <button onClick={() => handleProductJump("ball-bearing")} className="hover:text-primary transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer py-0.5">
                  Ball Bearing
                </button>
              </li>
              <li>
                <button onClick={() => handleProductJump("Butt")} className="hover:text-primary transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer py-0.5">
                  Butt Hinges
                </button>
              </li>
              <li>
                <button onClick={() => handleProductJump("hydraulic")} className="hover:text-primary transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer py-0.5">
                  Hydraulic
                </button>
              </li>
              <li>
                <button onClick={() => handleProductJump("tower-bolts")} className="hover:text-primary transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer py-0.5">
                  Tower Bolts
                </button>
              </li>
              <li>
                <button onClick={() => handleProductJump("aldrops")} className="hover:text-primary transition-colors text-left block w-full bg-transparent border-none p-0 cursor-pointer py-0.5">
                  Aldrops
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Highly structured Contact Information Credentials */}
        <div className="lg:col-span-3 space-y-4 font-light text-xs border-t border-white/5 pt-6 lg:border-t-0 lg:pt-0">
          <h5 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">Get In Touch</h5>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:space-y-3 text-[#FAF9F5]/80">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="leading-normal">
                <span className="font-bold text-white block text-[10px] mb-0.5">WORKSHOP</span>
                Goel Industries, HSIIDC Bahadurgarh, Haryana, India
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block text-[10px] mb-0.5">EMAIL</span>
                <a href="mailto:drghinges@rediffmail.com" className="hover:text-primary transition-colors block breaking-all">drghinges@rediffmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-2.5 sm:col-span-2 lg:col-span-1">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block text-[10px] mb-0.5">PHONE</span>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                  <a href="tel:+919080222398" className="hover:text-primary transition-colors">+91 9080222398</a>
                  <a href="tel:+919812540303" className="hover:text-primary transition-colors">+91 9812540303</a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#6E6861] mt-1">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>Mon–Sat, 9am – 7pm IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- SUB-FOOTER BOTTOM BANNER --- */}
      <div className="border-t border-white/5 bg-black/20 py-4 sm:py-6 font-mono text-[9px] sm:text-[10px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-[#6E6861]">
          <p>© 2026 DRG Hinges & Architectural Hardware.</p>
          <div className="flex items-center gap-2 text-neutral-500 font-bold tracking-widest uppercase text-[8px] sm:text-[10px]">
            <span>CRAFTED IN INDIA</span>
            <span className="text-primary">•</span>
            <span>SHIPPED WORLDWIDE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}