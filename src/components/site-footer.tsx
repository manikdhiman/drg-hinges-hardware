import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-mustard/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-mustard-deep/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-20 max-w-4xl">
          <p className="eyebrow mb-6">Let's build together</p>
          <h2 className="text-5xl md:text-7xl text-cream">
            Where metal <span className="italic text-gradient-mustard">meets craft.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-mustard px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:bg-cream hover:text-ink"
          >
            Start an Enquiry →
          </Link>
        </div>

        <div className="grid gap-12 border-t border-cream/10 pt-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-mustard to-mustard-deep font-display text-lg text-primary-foreground">
                D
              </span>
              <div>
                <p className="font-display text-xl">DRG</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  Hinges & Architectural Hardware
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Precision-engineered architectural hardware — supplying architects,
              builders and distributors across five continents.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-cream/70 hover:text-mustard">Home</Link></li>
              <li><Link to="/about" className="text-cream/70 hover:text-mustard">About</Link></li>
              <li><Link to="/products" className="text-cream/70 hover:text-mustard">Product</Link></li>
              <li><Link to="/contact" className="text-cream/70 hover:text-mustard">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Product</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>Stainless Steel</li>
              <li>Gate & Fencing</li>
              <li>Ironmongery</li>
              <li>Cast Iron</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Get in Touch</p>
            <address className="not-italic space-y-3 text-sm text-cream/70">
              <p>DRG Industries<br />Aligarh, Uttar Pradesh 202001, India</p>
              <p><a href="mailto:hello@drghardware.com" className="hover:text-mustard">hello@drghardware.com</a></p>
              <p><a href="tel:+910000000000" className="hover:text-mustard">+91 000 000 0000</a></p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} DRG Hinges & Architectural Hardware.</p>
          <p className="uppercase tracking-[0.25em]">Crafted in India · Shipped Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
