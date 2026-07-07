import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-brass text-brass font-display text-lg">
            D
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide">DRG</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Architectural Hardware
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-brass"
              activeProps={{ className: "text-brass" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden border border-brass/40 px-5 py-2.5 text-xs uppercase tracking-widest text-brass hover:bg-brass hover:text-primary-foreground md:inline-flex"
        >
          Enquire
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`h-px w-6 bg-brass transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-brass transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-brass transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm uppercase tracking-widest text-foreground"
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
