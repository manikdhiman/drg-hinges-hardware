import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroFlow from "@/assets/hero-flow.jpg";
import globe from "@/assets/globe.jpg";
import residential from "@/assets/residential.jpg";
import industrial from "@/assets/industrial.jpg";
import commercial from "@/assets/commercial.jpg";
import sustainability from "@/assets/sustainability.jpg";
import worldMap from "@/assets/world-map.jpg";
import furniture from "@/assets/furniture-fittings.jpg";
import gate from "@/assets/gate-hardware.jpg";
import pull from "@/assets/pull-handles.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DRG Hinges & Architectural Hardware — Where Metal Meets Craft" },
      {
        name: "description",
        content:
          "DRG — precision-engineered stainless steel, cast iron and brass hardware. Hinges, handles, gate & fencing ironmongery for architects and global exporters.",
      },
      { property: "og:title", content: "DRG Hinges & Architectural Hardware" },
      { property: "og:description", content: "Where metal meets craft. Exported worldwide." },
    ],
  }),
  component: Home,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

const stainless = [
  { name: "Bathroom Accessories", img: pull },
  { name: "Furniture Fittings", img: furniture },
  { name: "SS 316 Ironmongery", img: pull },
  { name: "Pull Handles", img: pull },
  { name: "Lever Handle", img: furniture },
  { name: "Cabinet Handles", img: furniture },
  { name: "Furniture Knobs", img: furniture },
  { name: "Privacy Sets", img: pull },
];

const gates = [
  { name: "Stainless Steel Ironmongery", img: gate },
  { name: "Aluminium Hardware", img: pull },
  { name: "Trailer Fittings", img: gate },
  { name: "Fieldgate Fittings", img: gate },
  { name: "Door & Gate Hardware", img: gate },
  { name: "Brackets", img: gate },
  { name: "Antique Cast Iron", img: gate },
  { name: "Fasteners & Fixings", img: gate },
];

const services = [
  { t: "Residential", img: residential, d: "The perfect blend of function and aesthetics — from cozy homes to luxurious villas, we help you build with precision and care." },
  { t: "Industrial", img: industrial, d: "Maximum efficiency for sectors that demand it. High-quality products that hold every international standard." },
  { t: "Commercial", img: commercial, d: "Elevate your business presence. Modern offices, retail, hospitality — style and durability, together." },
];

const advantages = [
  "30+ years in manufacturing & exporting",
  "Wide range of builders hardware products",
  "Customization for global client requirements",
  "Hassle-free shipping & buyer-friendly policies",
  "International quality standards & certifications",
  "Dedicated export support team",
  "Timely delivery commitment for every order",
  "100% quality assurance at every production stage",
  "Deliverables guaranteed exactly as per quotation",
];

const testimonials = [
  { q: "We've been impressed with DRG's commitment to quality and customer satisfaction. Their hardware has exceeded our expectations, and their team is always responsive.", n: "William Duck", c: "Australia" },
  { q: "DRG has been a reliable partner for our business. They deliver high-quality products on time, and their competitive pricing has helped us stay ahead in the market.", n: "Steve Marks", c: "United Kingdom" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <Awards />
      <ProductPortfolio tag="Product Portfolio" title="Stainless Steel Architectural Hardware" items={stainless} />
      <ProductPortfolio tag="Product Portfolio" title="Door, Gates, Fencing Hardware & Ironmongery" items={gates} dark />
      <Services />
      <Marquee />
      <WhyChoose />
      <Sustainability />
      <GlobalReach />
      <Testimonials />
      <SiteFooter />
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      <img
        src={heroFlow}
        alt="Molten brass flowing over textured earth"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-90 animate-reveal-in"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-background" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <p className="eyebrow mb-6 text-mustard animate-reveal" style={{ animationDelay: "0.2s" }}>
          Strength Behind Real Infrastructure
        </p>
        <h1 className="max-w-5xl text-6xl leading-[0.95] text-cream md:text-8xl lg:text-[8.5rem] animate-reveal" style={{ animationDelay: "0.35s" }}>
          Where Metal
          <br />
          <span className="italic text-gradient-mustard">meets Craft.</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-6 animate-reveal" style={{ animationDelay: "0.55s" }}>
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 rounded-full bg-mustard px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:bg-cream hover:text-ink"
          >
            Explore Products
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link to="/about" className="link-underline text-xs uppercase tracking-[0.3em] text-cream">
            Our Story
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cream/60 md:flex">
        <span className="h-px w-10 bg-cream/40" /> Scroll
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  const { ref, seen } = useReveal();
  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className={`md:col-span-5 transition-all duration-1000 ${seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-br from-mustard/30 to-mustard-deep/20 p-6">
            <div className="relative h-full w-full overflow-hidden rounded-full animate-float">
              <img src={globe} alt="World globe" width={1200} height={1200} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
        <div className={`md:col-span-7 transition-all duration-1000 delay-200 ${seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="eyebrow mb-6">About Us</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl">
            About <span className="italic text-gradient-mustard">DRG</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            DRG Hinges & Architectural Hardware is a leading manufacturer and exporter of premium
            builders hardware. For over three decades, we have crafted stainless steel, cast iron and
            brass products for residential, commercial and industrial projects across the world.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From our facility in Aligarh — the historic hardware capital of India — we combine time-
            honored craftsmanship with modern precision engineering to deliver hardware that lasts
            generations.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 border-b border-mustard pb-1 text-xs uppercase tracking-[0.3em] text-mustard-deep">
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Awards ---------- */
function Awards() {
  const items = [
    { t: "Quality & Innovation", d: "Recognized globally for sustained export growth and customer satisfaction." },
    { t: "Sustainability & CSR", d: "Celebrated for sustainable operations and impactful community welfare programs." },
    { t: "ISO & Sedex", d: "Global commitment to quality, integrity and ethical trade practices." },
  ];
  return (
    <section className="relative border-y border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Our Benefits</p>
            <h2 className="text-5xl md:text-6xl">
              Awards & <span className="italic text-gradient-mustard">Certification</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Honored by national and international bodies for our commitment to quality and export
              excellence — a testament to the values we uphold in every product.
            </p>
          </div>
          <Link to="/about" className="link-underline text-xs uppercase tracking-[0.3em] text-mustard-deep">
            View All →
          </Link>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.t} className="group relative bg-background p-10 transition-all duration-500 hover:bg-mustard/5">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-mustard/40 font-display text-xl text-mustard-deep transition-all group-hover:bg-mustard group-hover:text-primary-foreground">
                0{i + 1}
              </div>
              <h3 className="text-2xl">{it.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Product portfolio grid ---------- */
function ProductPortfolio({ tag, title, items, dark = false }: { tag: string; title: string; items: { name: string; img: string }[]; dark?: boolean }) {
  return (
    <section className={`py-28 md:py-36 ${dark ? "bg-ink text-cream" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className={`eyebrow mb-6 ${dark ? "text-mustard" : ""}`}>{tag}</p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl ${dark ? "text-cream" : ""}`}>
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((it, i) => (
            <Link
              key={it.name + i}
              to="/products"
              className="group relative overflow-hidden rounded-lg"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${dark ? "from-ink/90 via-ink/30" : "from-ink/80 via-ink/10"} to-transparent opacity-90`} />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-mustard opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    Discover →
                  </p>
                  <h3 className="mt-1 text-lg text-cream">{it.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section className="relative border-y border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-6">Featured Services</p>
          <h2 className="text-5xl md:text-6xl">
            Customize your <span className="italic text-gradient-mustard">project.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Tailored hardware solutions designed to match your unique project needs — ensuring
            precision, durability and style.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.t} className="group overflow-hidden rounded-lg bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-mustard-deep backdrop-blur">
                  {s.t}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-mustard-deep">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const words = ["Trusted by Builders", "Architects", "International Partners", "Global Exporters", "Interior Designers"];
  return (
    <section className="overflow-hidden bg-ink py-16">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 font-display text-4xl md:text-6xl text-cream/90">
            {w}
            <span className="h-2 w-2 rounded-full bg-mustard" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- Why choose ---------- */
function WhyChoose() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="eyebrow mb-6">Our Advantage</p>
          <h2 className="text-5xl md:text-6xl">
            Why choose <span className="italic text-gradient-mustard">us.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Trusted globally for quality, innovation, reliability and customer satisfaction — with
            competitive prices and on-time delivery.
          </p>
        </div>
        <ul className="md:col-span-7 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 md:grid-cols-3">
          {advantages.map((a, i) => (
            <li key={a} className="group bg-background p-6 transition-all duration-500 hover:bg-mustard hover:text-primary-foreground">
              <p className="font-display text-2xl text-mustard-deep transition-colors group-hover:text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-sm leading-relaxed">{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Sustainability ---------- */
function Sustainability() {
  return (
    <section className="border-y border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img src={sustainability} alt="Sustainable manufacturing" width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-mustard/20" />
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="eyebrow mb-6">Sustainability</p>
          <h2 className="text-5xl md:text-6xl">
            Innovation with <span className="italic text-gradient-mustard">Responsibility.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            At DRG, sustainability is woven into every thread of our business. Our vision for a
            greener society drives us to adopt eco-friendly practices, prioritize our people's
            well-being and reduce our environmental footprint.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Environmental Stewardship", "Labor Welfare & Safety", "Community Development", "Ethical Business Practices", "ISO & Sedex Compliance"].map((v) => (
              <li key={v} className="flex items-center gap-3 border-b border-border pb-3 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-mustard" /> {v}
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.3em] text-cream transition-all hover:bg-mustard hover:text-primary-foreground">
            Explore More →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Global reach ---------- */
function GlobalReach() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-6">Check Out All</p>
          <h2 className="text-5xl md:text-6xl">
            Global <span className="italic text-gradient-mustard">Reach.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Our export network spans key markets — UK, mainland Europe, USA and the Middle East.
            Streamlined logistics, trusted partnerships and consistent quality across the world.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img src={worldMap} alt="World shipping map" width={1600} height={900} loading="lazy" className="h-auto w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-wrap items-end gap-6 p-8 md:p-14">
            {["UK", "Europe", "USA", "Middle East", "Australia"].map((c) => (
              <span key={c} className="rounded-full bg-ink/80 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cream backdrop-blur">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <section className="border-t border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-6">Testimonials</p>
          <h2 className="text-5xl md:text-6xl">
            What people <span className="italic text-gradient-mustard">say.</span>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.n} className="group relative rounded-lg bg-background p-10 shadow-soft transition-transform duration-500 hover:-translate-y-2">
              <span className="absolute -top-6 left-8 font-display text-8xl leading-none text-mustard/50">"</span>
              <blockquote className="relative text-lg leading-relaxed text-ink">{t.q}</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard/20 font-display text-xl text-mustard-deep">
                  {t.n[0]}
                </span>
                <div>
                  <p className="text-sm font-medium">{t.n}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.c}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
