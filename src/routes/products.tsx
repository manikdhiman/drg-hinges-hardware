import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import furniture from "@/assets/furniture-fittings.jpg";
import gate from "@/assets/gate-hardware.jpg";
import pull from "@/assets/pull-handles.jpg";
import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial.jpg";
import industrial from "@/assets/industrial.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product — DRG Hinges & Architectural Hardware" },
      { name: "description", content: "Complete DRG catalogue — stainless steel, cast iron, gate & fencing hardware, ironmongery and bathroom fittings." },
      { property: "og:title", content: "Product — DRG Architectural Hardware" },
      { property: "og:description", content: "The complete DRG collection." },
    ],
  }),
  component: Products,
});

const collections = [
  { tag: "Series 01", name: "Stainless Steel Hardware", desc: "Precision-machined SS 304/316 fittings — furniture, cabinet and bathroom hardware crafted for coastal and heavy-use environments.", image: pull, items: ["Bathroom Accessories", "Furniture Fittings", "Pull Handles", "Lever Handles", "Cabinet Handles", "Furniture Knobs", "Privacy Sets", "Door Stops"] },
  { tag: "Series 02", name: "Cast Iron & Gate Hardware", desc: "Sand-cast iron gate fittings, brackets and antique-finish ironmongery for heritage restoration and outdoor architecture.", image: gate, items: ["Strap Hinges", "Tee Hinges", "Field Gate Fittings", "Trailer Fittings", "Brackets", "Antique Cast Iron", "Fencing Hardware", "Fasteners & Fixings"] },
  { tag: "Series 03", name: "Furniture & Joinery", desc: "Turned brass and stainless knobs, cabinet pulls and joinery hardware — the small details a piece is remembered by.", image: furniture, items: ["Beehive Knobs", "Bar Pulls", "Edge Pulls", "Knurled Series", "Cup Pulls", "Ring Pulls", "Numerals", "Alphabets"] },
];

const finishes = [
  { name: "Polished Brass", swatch: "linear-gradient(135deg,#d4a44a,#f0d484)" },
  { name: "Satin Brass", swatch: "linear-gradient(135deg,#b18c48,#d4b26a)" },
  { name: "Antique Brass", swatch: "linear-gradient(135deg,#7a5a2c,#b3853e)" },
  { name: "Matte Black", swatch: "linear-gradient(135deg,#0a0a0a,#2a2a2a)" },
  { name: "Satin Nickel", swatch: "linear-gradient(135deg,#8a8a8e,#c8c8cc)" },
  { name: "Polished Chrome", swatch: "linear-gradient(135deg,#a8b0b6,#e4e8ec)" },
  { name: "Oil-Rubbed Bronze", swatch: "linear-gradient(135deg,#2a1a12,#5c3a24)" },
  { name: "Mustard Gold", swatch: "linear-gradient(135deg,#c9922e,#e8bd5c)" },
];

const applications = [
  { t: "Residential", img: residential },
  { t: "Commercial", img: commercial },
  { t: "Industrial", img: industrial },
];

function Products() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow mb-6">The Catalogue</p>
          <h1 className="max-w-4xl text-6xl leading-[0.95] md:text-8xl">
            Three series. <span className="italic text-gradient-mustard">Endless possibility.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Browse the complete DRG collection — from architectural hinges to bathroom fittings.
            Every piece available in the finish and dimension your project demands.
          </p>
        </div>
      </section>

      <section>
        {collections.map((c, i) => (
          <div key={c.name} className="border-b border-border">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
              <div className={`relative aspect-[4/5] overflow-hidden rounded-lg ${i % 2 ? "md:order-2" : ""}`}>
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105" />
                <span className="absolute left-6 top-6 rounded-full bg-cream/90 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-mustard-deep backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <div>
                <p className="eyebrow mb-4">{c.tag}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl">{c.name}</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.desc}</p>
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 border-b border-border pb-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-mustard" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.3em] text-cream hover:bg-mustard">
                  Request Specification →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="border-b border-border bg-gradient-cream py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-6">Finishes</p>
            <h2 className="text-5xl md:text-6xl">
              Eight signature finishes, <span className="italic text-gradient-mustard">hand-applied.</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {finishes.map((f) => (
              <div key={f.name} className="group">
                <div className="aspect-square w-full rounded-lg transition-transform duration-700 group-hover:scale-[1.03] shadow-soft" style={{ background: f.swatch }} />
                <p className="mt-4 text-sm uppercase tracking-[0.2em]">{f.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-6">Applications</p>
            <h2 className="text-5xl md:text-6xl">
              Built for <span className="italic text-gradient-mustard">every space.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {applications.map((a) => (
              <div key={a.t} className="group relative aspect-[4/5] overflow-hidden rounded-lg">
                <img src={a.img} alt={a.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-8 px-8 text-3xl text-cream">{a.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
