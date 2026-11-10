import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/newlogo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Product" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E6E2D8] bg-[#FAF9F5]/95 backdrop-blur-xl py-2.5 shadow-sm"
          : "border-b border-[#E6E2D8]/70 bg-[#FAF9F5]/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Brand Logo & Title */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <img 
            src={logoAsset} 
            alt="DRG Premium SS Hinges Logo" 
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          
          <span className="flex flex-col leading-snug">
            <span className="font-display text-2xl sm:text-3xl tracking-tight text-[#1C1A19] font-black">
              DRG
            </span>
            {/* Highly readable, bold subtitle */}
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#4A4540] font-semibold">
              Hinges & Hardware Architecture
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              /* Increased to 14px-16px, bold weight, dark solid tone, clear hover effect */
              className="text-sm lg:text-base font-bold uppercase tracking-wider text-[#1C1A19] transition-colors duration-200 hover:text-[#D49A5B] py-1"
              activeProps={{ className: "text-[#D49A5B] underline underline-offset-8 decoration-2" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-[#1C1A19] px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FAF9F5] transition-all duration-300 hover:bg-[#D49A5B] hover:shadow-md md:inline-flex items-center justify-center"
        >
          Enquire
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden z-50 relative rounded-lg border border-[#E6E2D8] bg-white/60 p-2"
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-[#1C1A19] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#1C1A19] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#1C1A19] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF9F5]/98 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col justify-center items-center ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-7 text-center">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-xl font-bold uppercase tracking-widest text-[#1C1A19] transition-colors hover:text-[#D49A5B]"
              activeProps={{ className: "text-[#D49A5B]" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-[#1C1A19] px-9 py-3.5 text-sm font-bold uppercase tracking-widest text-[#FAF9F5] shadow-lg transition-all hover:bg-[#D49A5B]"
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}