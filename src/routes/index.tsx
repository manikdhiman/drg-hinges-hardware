import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import globe from "@/assets/globe.jpg";
import sustainability from "@/assets/sustainability.jpg";
import worldMap from "@/assets/world-map.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// 1. IMPORT YOUR VIDEO AT THE TOP SO VITE CAN PROCESS IT:
import silverVideoAsset from "@/assets/silvervideo.mp4"; 

// Unified 100% correct local asset imports matching your asset filenames exactly
import ballBearingImg from "@/assets/ball_bearing_hinges.png";
import concealedImg from "@/assets/concealed_hinges.png";
import towerBoltImg from "@/assets/new_tower.jpeg";
import aldropsImg from "@/assets/aldrops.png";
import hydraulicImg from "@/assets/hydraulic_hinges.png";
import telescopicImg from "@/assets/telescopic.png";
import softCloseImg from "@/assets/soft_close.png";
import kitchenImg from "@/assets/kitchen_accessories.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DRG Hinges & Hardware — Premium Architectural Fittings" },
      {
        name: "description",
        content:
          "DRG (Goel Industries) — manufacturer of premium architectural hardware, including Ball Bearing, Concealed, and Hydraulic Hinges, Tower Bolts, and Drawer Slides.",
      },
      { property: "og:title", content: "DRG Premium SS Hinges & Hardware" },
      { property: "og:description", content: "Premium hardware solutions combining durability, functionality, and modern design." },
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

const mainCategories = [
  { name: "Ball Bearing Hinges", img: ballBearingImg },
  { name: "Butt Hinges", img: concealedImg },
  { name: "Tower Bolts", img: towerBoltImg },
  { name: "Aldrops", img: aldropsImg },
  { name: "Hydraulic Hinges", img: hydraulicImg },
  { name: "Telescopic Drawer Slides", img: telescopicImg },
  { name: "Soft Close Channels", img: softCloseImg },
  { name: "Kitchen Accessories", img: kitchenImg },
];

const services = [
  { t: "Modular Kitchens & Wardrobes", img: kitchenImg, d: "Advanced dampening hinges and smooth runner channel infrastructures purpose-built to maximize storage efficiency and daily cabinet usability." },
  { t: "Residential Hardware", img: aldropsImg, d: "Premium high-grade door latches, robust heavy-duty hinges, and elegantly polished security tower bolts providing maximum structural safety for homes." },
  { t: "Commercial Spaces", img: hydraulicImg, d: "Heavy-duty load-bearing solutions tested for continuous operation inside contemporary office architectures, luxury hotels, and industrial sites." },
];

const advantages = [
  "Premium Quality Hardware Manufacturing",
  "Elegant & Modern Architectural Designs",
  "Smooth & Completely Silent Performance",
  "Corrosion & Rust-Resistant Metal Finishing",
  "Heavy Duty Load-Bearing Operational Limits",
  "Long Engineering Product Lifespan",
  "Easy Installation Setup Process",
  "Precision-Engineered Components & Alignment",
  "100% Quality Assurance & Testing Standards",
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Awards />
      <ProductPortfolio tag="Our Product Range" title="Premium Hardware & Furniture Fittings" items={mainCategories} />
      <Services />
      <Marquee />
      <WhyChoose />
      <Sustainability />
      <GlobalReach />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink flex flex-col justify-end">
      {/* 🎥 Video setup using the dynamic variable variable imported from assets */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none opacity-90 animate-reveal-in"
      >
        <source src={silverVideoAsset} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay protection vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/50 via-ink/20 to-background pointer-events-none" />

      {/* Content Canvas */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-10 md:pb-32 flex flex-col items-start">
        <div 
  className="inline-flex items-center justify-center rounded-full bg-cream px-6 py-2 mb-6 shadow-sm animate-reveal" 
  style={{ animationDelay: "0.2s" }}>
  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.35em] text-mustard-deep">
    Premium Door Hardware Manufacturer
  </p>
      </div>
        <h1 className="max-w-5xl text-6xl leading-[0.95] text-cream md:text-8xl lg:text-[8.5rem] animate-reveal" style={{ animationDelay: "0.35s" }}>
          Where Metal
          <br />
          <span className="italic text-gradient-mustard">meets Craft.</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-6 animate-reveal" style={{ animationDelay: "0.55s" }}>
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 rounded-full bg-mustard px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:bg-cream hover:text-ink shadow-lg"
          >
            Explore Portfolio
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link to="/contact" className="link-underline text-xs uppercase tracking-[0.3em] text-cream">
            Get In Touch
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cream/60 md:flex">
        <span className="h-px w-10 bg-cream/40" /> Scroll
      </div>
    </section>
  );
}

function Awards() {
  const items = [
    { t: "ISO 9001:2015 Certified", d: "Formally evaluated for compliance under strict manufacturing standard systems for architectural hardware development." },
    { t: "Quality Assurance Priority", d: "Manufactured using premium-quality materials and advanced technology to ensure reliable quality through strict testing processes." },
    { t: "Advanced Engineering", d: "Incorporating precision ball-bearing sliding pathways and custom hydraulic damping configurations across products." },
  ];
  return (
    <section className="relative border-y border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Quality Assurance</p>
            <h2 className="text-5xl md:text-6xl">
              Manufacturing & <span className="italic text-gradient-mustard">Compliance</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Driven by excellence and trust, our hardware configurations undergo strict inspections to maintain structural service life across operations.
            </p>
          </div>
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

function ProductPortfolio({ tag, title, items }: { tag: string; title: string; items: { name: string; img: string }[] }) {
  return (
    <section className="py-28 md:py-36 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-6 text-mustard">{tag}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream">{title}</h2>
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-mustard opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    View Specs →
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

// Fixed nested video asset reference inside the lower Sustainability array card block as well:
function Services() {
  return (
    <section className="relative border-y border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-6">Applications</p>
          <h2 className="text-5xl md:text-6xl">Engineered for <span className="italic text-gradient-mustard">every application.</span></h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Our premium architectural fittings are widely integrated across high-end commercial spaces, offices, and residential landscapes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.t} className="group overflow-hidden rounded-lg bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-mustard-deep backdrop-blur">
                  Application
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-mustard-deep">
                  Explore Series →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Premium Hardware Solutions", "Smooth Performance", "Modular Kitchen Layouts", "Goel Industries", "High-Quality Standards"];
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

function WhyChoose() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="eyebrow mb-6">Our Advantages</p>
          <h2 className="text-5xl md:text-6xl">Why customers <span className="italic text-gradient-mustard">trust us.</span></h2>
          <p className="mt-6 text-muted-foreground">
            We focus on delivering premium-quality hardware solutions that combine innovation, performance, and durability flawlessly.
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

function Sustainability() {
  return (
    <section className="border-y border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/20 z-10 pointer-events-none" />
            <video
              src={silverVideoAsset}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-mustard/20" />
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="eyebrow mb-6">Continuous Innovation</p>
          <h2 className="text-5xl md:text-6xl">Advanced Material <span className="italic text-gradient-mustard">Testing.</span></h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Through advanced manufacturing processes and strict hardware testing inspection stages, our team guarantees everyday operational reliability for residential systems.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["High Load Stability", "Modular Kitchen Fits", "Rust Protective Cores", "Noise-Free Mechanisms", "ISO 9001:2015 Inspections"].map((v) => (
              <li key={v} className="flex items-center gap-3 border-b border-border pb-3 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-mustard" /> {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GlobalReach() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-6">Our Factory Location</p>
          <h2 className="text-5xl md:text-6xl">National <span className="italic text-gradient-mustard">Presence.</span></h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Supplying premium hardware configurations reliably across the entire country directly from our manufacturing facility in Haryana, India.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img src={worldMap} alt="Domestic layout system map" width={1600} height={900} loading="lazy" className="h-auto w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-wrap items-end gap-6 p-8 md:p-14">
            <span className="rounded-full bg-ink/80 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cream backdrop-blur">
              Goel Industries Factory Base: Bahadurgarh, Haryana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}