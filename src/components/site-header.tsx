import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/logo.png";

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-cream/85 backdrop-blur-xl py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-4 group">
          {/* ✨ Increased Logo Size (h-10 -> h-16) */}
          <img 
            src={logoAsset} 
            alt="DRG Premium SS Hinges Logo" 
            className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-103" 
          />
          
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-tight text-ink font-bold">DRG</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-0.5">
              Hinges & Hardware Accessories
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-xs uppercase tracking-[0.25em] text-ink/80 transition-colors hover:text-mustard-deep"
              activeProps={{ className: "text-mustard-deep" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-ink px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-cream transition-all duration-500 hover:bg-mustard hover:text-primary-foreground md:inline-flex"
        >
          Enquire
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden z-50 relative"
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream/95 backdrop-blur-lg transition-all duration-500 md:hidden flex flex-col justify-center items-center ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-lg uppercase tracking-[0.25em] text-ink transition-colors hover:text-mustard-deep"
              activeProps={{ className: "text-mustard-deep font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-ink px-8 py-3 text-sm uppercase tracking-[0.25em] text-cream transition-all hover:bg-mustard"
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}