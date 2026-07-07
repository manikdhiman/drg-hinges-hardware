import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-brass text-brass font-display text-xl">
                D
              </span>
              <div>
                <p className="font-display text-xl">DRG</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Hinges & Architectural Hardware
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Precision-engineered architectural hardware crafted in Aligarh, India — supplying architects,
              builders and distributors worldwide since 1992.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-brass">Home</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-brass">Products</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-brass">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-brass">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Products</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Hinges</li>
              <li>Handles</li>
              <li>Knobs</li>
              <li>Ironmongery</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Get in Touch</p>
            <address className="not-italic space-y-3 text-sm text-muted-foreground">
              <p>DRG Industries<br />Industrial Estate, Aligarh<br />Uttar Pradesh 202001, India</p>
              <p><a href="mailto:hello@drghardware.com" className="hover:text-brass">hello@drghardware.com</a></p>
              <p><a href="tel:+910000000000" className="hover:text-brass">+91 000 000 0000</a></p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DRG Hinges & Architectural Hardware. All rights reserved.</p>
          <p className="uppercase tracking-widest">Crafted in India · Shipped Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
