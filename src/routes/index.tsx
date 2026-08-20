import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import globe from "@/assets/globe.jpg";
import sustainability from "@/assets/sustainability.jpg";
import worldMap from "@/assets/world-map.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { 
  Building2, 
  Layers, 
  CheckCircle2, 
  Settings, 
  Truck, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";

// Video Asset Import
import silverVideoAsset from "@/assets/finalvideo.mp4"; 

// Video Import
import silverVideoAsset from "@/assets/finalvideo.mp4"; 

// Hardware Product Image Imports (matching your renamed files)
import hinges1 from "@/assets/hinges1.png"; // or .jpg / .jpeg depending on your file extension
import hinges2 from "@/assets/hinges2.jpeg";
import hinges3 from "@/assets/hinges3.jpeg";
import hinges4 from "@/assets/hinges4.png";
import hinges5 from "@/assets/hinges_5.png";
import hinges6 from "@/assets/hinges6.png";
import hinges7 from "@/assets/hinges7.png";
import hinges8 from "@/assets/hinges8.jpg";

// Certificate Asset Imports
import cert1 from "@/assets/certificate1.jpeg";
import cert2 from "@/assets/certificate2.jpeg";
import cert3 from "@/assets/certificate3.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DRG by Goel Industries — Premium Hinges & Architectural Hardware Manufacturer in India" },
      {
        name: "description",
        content:
          "DRG by Goel Industries is a trusted hardware manufacturer in Bahadurgarh, Haryana. Delivering precision-engineered hinges, hydraulic solutions, ball bearing fittings, and bulk OEM supplies across India.",
      },
      { name: "keywords", content: "hinges manufacturer in India, hardware suppliers in Haryana, architectural hardware manufacturers, bulk hinges supply, Goel Industries, DRG Hinges, door fittings, hydraulic hinges" },
      { property: "og:title", content: "DRG by Goel Industries — Premium Architectural Hardware" },
      { property: "og:description", content: "High-quality door & furniture hardware manufactured in Bahadurgarh, Haryana for residential, commercial & OEM applications." },
    ],
  }),
  component: Home,
});

const mainCategories = [
  { name: "Ball Bearing Hinges", img: hinges1 },
  { name: "Butt Hinges", img: hinges2 },
  { name: "Tower Bolts", img: hinges3 },
  { name: "Aldrops", img: hinges4 },
  { name: "Hydraulic Hinges", img: hinges5 },
  { name: "Telescopic Drawer Slides", img: hinges6 },
  { name: "Soft Close Channels", img: hinges7 },
  { name: "Kitchen & Furniture Accessories", img: hinges8 },
];

const productHighlights = [
  {
    title: "Ball Bearing Hinges",
    desc: "Designed for smooth, stable door movement and dependable load-bearing performance. Made using quality stainless steel for frequently used doors where low friction and long service life matter.",
    link: "/products#ball-bearing",
  },
  {
    title: "Butt Hinges",
    desc: "Provides reliable alignment and controlled movement for door and furniture applications. Built for durability and a clean finish, making them an effective choice for strong, practical hardware needs.",
    link: "/products#butt",
  },
  {
    title: "Hydraulic Hinges",
    desc: "Employs advanced soft-close technology to reduce sudden impacts and create smoother, quieter closing. Ideal for modular furniture, cabinets, and refined interior spaces.",
    link: "/products#hydraulic",
  },
];

const keyAdvantages = [
  { title: "Precision-Engineered Components", desc: "Crafted for consistent fit, alignment, and long-term smooth movement." },
  { title: "Corrosion-Resistant Hardware", desc: "Premium stainless steel selection for extended service life in demanding environments." },
  { title: "Smooth & Low-Noise Operation", desc: "Designed to minimize friction and deliver quiet, effortless door operation." },
  { title: "Heavy-Duty Load Support", desc: "High-strength engineering suited for high-traffic and heavy commercial doors." },
  { title: "Soft-Close Hydraulic Technology", desc: "Advanced damping mechanics built specifically for modern furniture and cabinetry." },
  { title: "Varied Sizes & Specifications", desc: "A comprehensive range of dimensional parameters for diverse project blueprints." },
  { title: "OEM & Customization Support", desc: "Custom private-label manufacturing tailored to defined commercial specifications." },
  { title: "Reliable Wholesale Supply", desc: "Dependable nationwide delivery pipelines for distributors, wholesalers, and project buyers." },
];

interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "ISO 9001:2015 Certified",
    description: "International standard for premium quality management systems.",
    image: cert1,
  },
  {
    id: 2,
    title: "CE Compliance",
    description: "Certified conformance with health, safety, and environmental protection standards.",
    image: cert2,
  },
  {
    id: 3,
    title: "SS Premium Grade Assurance",
    description: "Material authenticity and high-durability load testing certification.",
    image: cert3,
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background antialiased text-foreground">
      <SiteHeader />
      <Hero />
      <ValueProposition />
      <ProductPortfolio tag="Our Product Range" title="Premium Hardware & Furniture Fittings" items={mainCategories} />
      <ProductDeepDive />
      <WhyChoose />
      <ApplicationsAndOEM />
      <Certifications />
      <Sustainability />
      <GlobalReach />
      <SiteFooter />
    </div>
  );
}

{/* --- HERO SECTION WITH VIDEO BACKGROUND --- */}
function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink flex flex-col justify-end">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/60 via-ink/30 to-background pointer-events-none" />

      {/* Content Canvas */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-10 md:pb-32 flex flex-col items-start">
        <div 
          className="inline-flex items-center justify-center rounded-full bg-cream px-6 py-2 mb-6 shadow-sm border border-mustard/20" 
        >
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.35em] text-mustard-deep">
            Premium Door Hardware Manufacturer in India
          </p>
        </div>
        <h1 className="max-w-5xl text-5xl leading-[0.95] text-cream md:text-7xl lg:text-[8rem] font-black tracking-tight">
          Where Metal
          <br />
          <span className="italic text-gradient-mustard font-normal">meets Craft.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-cream/80 font-light leading-relaxed">
          DRG by Goel Industries delivers precision-engineered hinges and architectural fittings for residential, commercial, hospitality, and interior applications. Manufactured in Bahadurgarh, Haryana.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 rounded-full bg-mustard px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:bg-cream hover:text-ink shadow-lg font-bold"
          >
            Explore Portfolio
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link to="/contact" className="link-underline text-xs uppercase tracking-[0.3em] text-cream font-bold">
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

{/* --- BRAND VALUE PROPOSITION --- */}
function ValueProposition() {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mustard-deep">Quality Hardware Performance</span>
          <h2 className="text-3xl md:text-5xl font-black text-ink tracking-tight leading-tight">
            High-Quality Door Hardware Designed for <span className="italic font-normal text-gradient-mustard">Everyday Use.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>
            A good door or cabinet depends on the quality of the hardware supporting it. At DRG, we manufacture components that combine durability, smooth operation, and clean architectural appeal. Our product range is suitable for modern homes, offices, hotels, modular kitchens, wardrobes, commercial interiors, and other demanding applications.
          </p>
          <p className="border-l-2 border-mustard pl-4 italic text-ink font-medium">
            Every product is designed around real installation and usage requirements. Whether the priority is heavy-load support, quiet movement, corrosion resistance, or soft closing, DRG offers solutions engineered to perform reliably over repeated daily use.
          </p>
        </div>
      </div>
    </section>
  );
}

{/* --- VISUAL PRODUCT PORTFOLIO GRID --- */}
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
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-mustard opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 font-bold">
                    View Specs →
                  </p>
                  <h3 className="mt-1 text-lg text-cream font-bold">{it.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* --- DETAILED PRODUCT DEEP DIVE CARDS --- */}
function ProductDeepDive() {
  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mustard-deep">Product Range Highlights</span>
          <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tight">
            Explore Our Range of <span className="italic font-normal text-gradient-mustard">Door & Furniture Hardware.</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            From stainless steel and ball bearing designs to hydraulic solutions and complementary fittings, our products are developed for smooth movement, dependable strength, and long-term performance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {productHighlights.map((prod) => (
            <div key={prod.title} className="bg-white border border-border p-8 rounded-xl space-y-4 flex flex-col justify-between hover:border-mustard transition-colors shadow-xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-border flex items-center justify-center text-mustard-deep">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-ink tracking-tight">{prod.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-normal leading-relaxed">{prod.desc}</p>
              </div>
              <Link to={prod.link} className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-mustard-deep hover:underline pt-4">
                View Specifications →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* --- WHY CHOOSE DRG --- */}
function WhyChoose() {
  return (
    <section className="py-28 md:py-36 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 space-y-16">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">The DRG Advantage</p>
          <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tight">
            Why Choose <span className="italic font-normal text-gradient-mustard">DRG Hardware?</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Choosing the right hardware can improve door alignment, furniture life, user comfort, and overall installation quality. Supported by the manufacturing capabilities of Goel Industries in Bahadurgarh, Haryana.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyAdvantages.map((adv) => (
            <div key={adv.title} className="p-6 rounded-xl border border-border bg-[#FAF9F5]/60 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-mustard-deep shrink-0" />
              <h3 className="text-base font-bold text-ink pt-2">{adv.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* --- APPLICATIONS & BULK OEM MANUFACTURING --- */}
function ApplicationsAndOEM() {
  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-16 lg:grid-cols-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mustard-deep">Versatile Integration</span>
          <h2 className="text-3xl md:text-5xl font-black text-ink tracking-tight">
            Hardware for Residential, Commercial & <span className="italic font-normal text-gradient-mustard">Furniture Applications.</span>
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-ink">Residential Projects:</strong> Ideal for main doors, wardrobes, interior cabinets, and modular home setups requiring durability and aesthetic polish.
            </p>
            <p>
              <strong className="text-ink">Commercial Spaces:</strong> Heavy-duty fittings built to support high-traffic office doors, hospitality environments, and institutional facilities.
            </p>
            <p>
              <strong className="text-ink">Furniture & Kitchens:</strong> Specialized hydraulic hardware and concealed channels that deliver smooth, quiet everyday movement for modular kitchens and modern cabinetry.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white border border-border rounded-2xl p-8 md:p-10 space-y-6 shadow-sm">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mustard-deep flex items-center gap-2">
            <Settings className="w-4 h-4 text-mustard-deep" /> B2B & Wholesale Division
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-ink">
            Manufacturing for Brands & Bulk Buyers
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Goel Industries collaborates with brands, distributors, wholesalers, and project suppliers requiring hinges manufactured to defined specifications and commercial requirements. We provide long-term support for private-label ranges, repeat bulk supply, and customized product specifications from our Bahadurgarh infrastructure.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink hover:text-mustard-deep transition-colors">
              Partner With Our Manufacturing Desk →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* --- CERTIFICATIONS COMPONENT WITH LIGHTBOX MODAL --- */}
function Certifications() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section className="relative border-y border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-6">Quality Guaranteed</p>
          <h2 className="text-5xl md:text-6xl">
            Our Official <span className="italic text-gradient-mustard">Certifications.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            At DRG, structural reliability and engineering precision are non-negotiable. 
            Our hardware undergoes rigorous testing protocols to hit absolute industrial benchmarks.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer rounded-xl border border-border bg-background p-5 transition-all duration-500 hover:shadow-soft hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted border border-border/40">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/50 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-cream px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-ink shadow-lg transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    Expand Certificate
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <h3 className="font-display text-2xl text-ink group-hover:text-mustard-deep transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Layer */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={() => setActiveCert(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-cream text-xs uppercase tracking-[0.25em] bg-white/10 px-5 py-2.5 rounded-full backdrop-blur transition-all hover:bg-white/20"
            onClick={() => setActiveCert(null)}
          >
            ✕ Close
          </button>

          <div
            className="relative max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl bg-background p-4 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="w-auto max-h-[70vh] object-contain rounded-lg mx-auto"
            />
            <div className="mt-4 px-4 py-2 text-center">
              <h4 className="font-display text-2xl text-ink">{activeCert.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{activeCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

{/* --- SUSTAINABILITY & CONTINUOUS TESTING WITH SECONDARY VIDEO --- */}
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

{/* --- NATIONAL GEOGRAPHIC REACH --- */}
function GlobalReach() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-6">Our Factory Location</p>
          <h2 className="text-5xl md:text-6xl">Made in Haryana, <span className="italic text-gradient-mustard">Supplied Across India.</span></h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Operating from Bahadurgarh, Haryana—one of North India's established industrial centers—DRG provides a direct manufacturing-focused solution backed by product variety and strict quality control.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img src={worldMap} alt="Domestic layout system map" width={1600} height={900} loading="lazy" className="h-auto w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-wrap items-end gap-6 p-8 md:p-14">
            <span className="rounded-full bg-ink/80 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cream backdrop-blur font-bold">
              Goel Industries Factory Base: Bahadurgarh, Haryana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}