import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-cream/85 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-mustard to-mustard-deep font-display text-lg text-primary-foreground shadow-mustard transition-transform duration-500 group-hover:rotate-[20deg]">
            D
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight text-ink">DRG</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Hinges & Hardware Accessories
            </span>
          </span>
        </Link>

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

        <Link
          to="/contact"
          className="hidden rounded-full bg-ink px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-cream transition-all duration-500 hover:bg-mustard hover:text-primary-foreground md:inline-flex"
        >
          Enquire
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-cream md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm uppercase tracking-[0.25em] text-ink"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
