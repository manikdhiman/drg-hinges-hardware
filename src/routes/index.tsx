import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import leverImg from "@/assets/lever-handle.jpg";
import hingesImg from "@/assets/hinges.jpg";
import cabinetImg from "@/assets/cabinet.jpg";
import gateImg from "@/assets/gate.jpg";
import knobsImg from "@/assets/knobs.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import craftImg from "@/assets/craft.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DRG Hinges & Architectural Hardware — Crafted for a Lifetime" },
      {
        name: "description",
        content:
          "DRG Hinges & Architectural Hardware — precision-engineered brass, stainless steel and cast iron hinges, handles and ironmongery for architects, builders and interior designers worldwide.",
      },
      { property: "og:title", content: "DRG Hinges & Architectural Hardware" },
      {
        property: "og:description",
        content: "Precision-engineered hinges, handles and ironmongery. Crafted for a lifetime.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const categories = [
  { name: "Butt Hinges", image: hingesImg, tag: "01" },
  { name: "Lever Handles", image: leverImg, tag: "02" },
  { name: "Cabinet Pulls", image: cabinetImg, tag: "03" },
  { name: "Door Knobs", image: knobsImg, tag: "04" },
  { name: "Gate & Iron Fittings", image: gateImg, tag: "05" },
  { name: "Bathroom Hardware", image: bathroomImg, tag: "06" },
];

const advantages = [
  { n: "01", t: "Three Decades of Craft", d: "Over 30 years of manufacturing precision architectural hardware for global markets." },
  { n: "02", t: "Bespoke Finishes", d: "Antique brass, satin nickel, matte black — customised to your specification." },
  { n: "03", t: "Global Compliance", d: "ISO 9001 certified. Manufactured to BS EN, ANSI and ISI standards." },
  { n: "04", t: "On-Time Delivery", d: "Dedicated export team ensures shipping timelines are always met." },
  { n: "05", t: "Quality Assured", d: "100% inspection at every stage from casting to final polish." },
  { n: "06", t: "Trusted Worldwide", d: "Supplying builders, architects and distributors across 30+ countries." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={hero}
          alt="Brass architectural hinges on dark marble"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Est. 1992 — Aligarh, India</p>
            <h1 className="text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
              DRG Hinges
              <span className="block italic text-gradient-brass">& Architectural Hardware</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Precision-engineered hinges, handles and ironmongery in brass, stainless steel and cast iron.
              Crafted for architects, builders and interiors that endure.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-none bg-brass px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all hover:bg-brass-glow"
              >
                Explore Collection
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-brass/40 px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:border-brass hover:bg-brass/5"
              >
                Request Catalogue
              </Link>
            </div>

            <div className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              <Stat n="30+" l="Years of Craft" />
              <Stat n="800+" l="SKUs" />
              <Stat n="30+" l="Countries" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow">Our House</p>
            <div className="hairline mt-4 w-16" />
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl leading-tight md:text-5xl lg:text-6xl">
              A house of hardware,
              <span className="italic text-brass"> devoted to detail.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              For three decades, DRG has forged the small, essential objects that hold buildings together —
              hinges that turn without complaint, handles that feel considered in the hand, ironmongery that
              patinas with grace. Every piece leaves our workshop inspected, weighed and warranted.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 border-b border-brass pb-1 text-sm uppercase tracking-widest text-brass hover:gap-4 transition-all"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Product Portfolio</p>
              <h2 className="max-w-xl text-4xl md:text-5xl lg:text-6xl">
                The complete
                <span className="italic text-brass"> collection.</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm uppercase tracking-widest text-brass hover:text-brass-glow"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.name}
                to="/products"
                className="group relative aspect-[4/5] overflow-hidden bg-muted"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="eyebrow mb-2 opacity-80">{c.tag}</p>
                    <h3 className="text-2xl md:text-3xl">{c.name}</h3>
                  </div>
                  <span className="text-brass opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT STRIP */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={craftImg}
              alt="Craftsman polishing brass hardware"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-brass/20" />
          </div>
          <div>
            <p className="eyebrow">The Workshop</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
              Forged by hand.
              <span className="block italic text-brass">Finished by eye.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sand-cast, hot-forged or CNC-machined — every DRG piece passes through the hands of a craftsman
              before it earns our mark. It is slower. It is how we prefer it.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="text-3xl text-brass font-display">Solid Brass</p>
                <p className="mt-2 text-sm text-muted-foreground">Lead-free, hand-polished, lacquered on request.</p>
              </div>
              <div>
                <p className="text-3xl text-brass font-display">SS 304 / 316</p>
                <p className="mt-2 text-sm text-muted-foreground">Marine-grade stainless for coastal and exterior use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-4">Why DRG</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Six reasons the
              <span className="italic text-brass"> world specifies us.</span>
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.n} className="group bg-background p-8 transition-colors hover:bg-card md:p-10">
                <p className="font-display text-5xl text-brass/60 transition-colors group-hover:text-brass">
                  {a.n}
                </p>
                <h3 className="mt-6 text-2xl">{a.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">
          <p className="eyebrow mb-6">Let's Build Together</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl">
            Specify DRG on your
            <span className="italic text-gradient-brass"> next project.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
            From boutique residences to hotel chains — our team supports architects and contractors with
            samples, custom finishes and technical drawings.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-brass px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:bg-brass-glow"
            >
              Get in Touch →
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 border border-brass/40 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:border-brass hover:bg-brass/5"
            >
              Browse Catalogue
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-brass md:text-4xl">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
    </div>
  );
}
