import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Layers, CheckCircle2, Settings } from "lucide-react";

import worldMap from "@/assets/world-map.jpg";
import silverVideoAsset from "@/assets/finalvideo.mp4";

import hinges1 from "@/assets/hinges1.png";
import hinges2 from "@/assets/hinges2.jpeg";
import hinges3 from "@/assets/hinges3.jpeg";
import hinges4 from "@/assets/hinges4.png";
import hinges5 from "@/assets/hinges_5.png";
import hinges6 from "@/assets/hinges6.png";
import hinges7 from "@/assets/hinges7.png";
import hinges8 from "@/assets/hinges8.jpg";

import cert1 from "@/assets/certificate1.jpeg";
import cert2 from "@/assets/certificate2.jpeg";
import cert3 from "@/assets/certificate3.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DRG by Goel Industries | Precision Hinges Manufacturer in India" },
      {
        name: "description",
        content:
          "Precision-engineered stainless steel hinges, soft-close hydraulic fittings, and custom OEM door solutions manufactured in Bahadurgarh, Haryana by Goel Industries.",
      },
      {
        name: "keywords",
        content:
          "hinges manufacturer India, stainless steel hinges, hydraulic hinges, ball bearing butt hinges, door fittings Haryana, Goel Industries, DRG Hinges",
      },
      { property: "og:site_name", content: "DRG Hinges" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.drghinges.co.in/" },
      {
        property: "og:title",
        content: "DRG by Goel Industries — Precision Hinges Manufacturer",
      },
      {
        property: "og:description",
        content:
          "Precision-engineered stainless steel hinges, soft-close hydraulic fittings, and custom OEM door solutions manufactured in Haryana, India.",
      },
      {
        property: "og:image",
        content: "https://www.drghinges.co.in/og-image.jpeg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DRG Hinges by Goel Industries" },
      {
        name: "twitter:description",
        content:
          "Precision-engineered stainless steel hinges and door fittings manufactured in Haryana, India.",
      },
      {
        name: "twitter:image",
        content: "https://www.drghinges.co.in/og-image.jpeg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.drghinges.co.in/" }],
  }),
  component: Home,
});

function BusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DRG by Goel Industries",
    legalName: "Goel Industries",
    url: "https://www.drghinges.co.in",
    logo: "https://www.drghinges.co.in/logo.png",
    image: "https://www.drghinges.co.in/og-image.jpeg",
    description:
      "Manufacturer of precision-engineered stainless steel hinges, hydraulic soft-close fittings, tower bolts, and custom door components in Bahadurgarh, Haryana.",
    telephone: "+91-9812540303",
    email: "drghinges@rediffmail.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 204, Sector 16, HSIIDC",
      addressLocality: "Bahadurgarh",
      addressRegion: "Haryana",
      postalCode: "124507",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6924",
      longitude: "76.9249",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

const mainCategories = [
  { name: "Ball Bearing Hinges", img: hinges1, link: "/products#ball-bearing" },
  { name: "Butt Hinges", img: hinges2, link: "/products#butt" },
  { name: "Tower Bolts", img: hinges3, link: "/products#tower-bolts" },
  { name: "Aldrops", img: hinges4, link: "/products#aldrops" },
  { name: "Hydraulic Hinges", img: hinges5, link: "/products#hydraulic" },
  { name: "Telescopic Drawer Slides", img: hinges6, link: "/products#drawer-slides" },
  { name: "Soft Close Channels", img: hinges7, link: "/products#soft-close-channels" },
  { name: "Kitchen & Furniture Accessories", img: hinges8, link: "/products#kitchen-accessories" },
];

const productHighlights = [
  {
    title: "Ball Bearing Hinges",
    desc: "Designed for smooth, stable door movement and dependable load-bearing performance. Made using quality stainless steel for frequently used doors where low friction and long service life matter.",
    link: "/products#ball-bearing",
  },
  {
    title: "Butt Hinges",
    desc: "Provides reliable alignment and controlled movement for door and furniture applications. Built for durability and a clean finish, making them an effective choice for strong, practical installations.",
    link: "/products#butt",
  },
  {
    title: "Hydraulic Hinges",
    desc: "Employs advanced soft-close technology to reduce sudden impacts and create smoother, quieter closing. Ideal for modular furniture, cabinets, and refined interior spaces.",
    link: "/products#hydraulic",
  },
];

const keyAdvantages = [
  {
    title: "Precision-Engineered Hinges",
    desc: "Crafted for consistent fit, alignment, and long-term smooth door movement.",
  },
  {
    title: "Corrosion-Resistant Steel",
    desc: "Premium stainless steel selection for extended service life in demanding environments.",
  },
  {
    title: "Smooth & Low-Noise Operation",
    desc: "Designed to minimize friction and deliver quiet, effortless opening and closing.",
  },
  {
    title: "Heavy-Duty Load Support",
    desc: "High-strength engineering suited for high-traffic and heavy commercial doors.",
  },
  {
    title: "Soft-Close Hydraulic Technology",
    desc: "Advanced damping mechanics built specifically for modern furniture and cabinetry.",
  },
  {
    title: "Varied Sizes & Specifications",
    desc: "A comprehensive range of dimensional parameters for diverse project blueprints.",
  },
  {
    title: "OEM & Customization Support",
    desc: "Custom private-label hinge manufacturing tailored to defined commercial specifications.",
  },
  {
    title: "Reliable Wholesale Supply",
    desc: "Dependable nationwide delivery pipelines for distributors, wholesalers, and project buyers.",
  },
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
    description:
      "Certified conformance with health, safety, and environmental protection standards.",
    image: cert2,
  },
  {
    id: 3,
    title: "SS Premium Grade Assurance",
    description:
      "Material authenticity and high-durability load testing certification.",
    image: cert3,
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background antialiased text-foreground">
      <BusinessSchema />
      <SiteHeader />
      <Hero />
      <ValueProposition />
      <ProductPortfolio
        tag="Our Product Range"
        title="Precision Hinges & Door Fittings"
        items={mainCategories}
      />
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

function Hero() {
  const heroWhatsappUrl = `https://wa.me/919812540303?text=${encodeURIComponent(
    "Hello DRG Hinges, I have a query regarding your hinges and door fittings: "
  )}`;

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

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/60 via-ink/30 to-background pointer-events-none" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-10 md:pb-32 flex flex-col items-start">
        <div className="inline-flex items-center justify-center rounded-full bg-cream px-6 py-2 mb-6 shadow-sm border border-mustard/20">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.35em] text-mustard-deep">
            Precision Door Hinges Manufacturer in India
          </p>
        </div>
        <h1 className="max-w-5xl text-4xl leading-[1.02] text-cream md:text-6xl lg:text-7xl font-black tracking-tight">
          Precision-Engineered Hinges{" "}
          <span className="italic text-gradient-mustard font-normal block sm:inline">
            Crafted for Lasting Strength.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-base text-cream/80 font-light leading-relaxed">
          DRG by Goel Industries manufactures stainless steel hinges, hydraulic
          soft-close fittings, and architectural door components for residential,
          commercial, and interior projects in Bahadurgarh, Haryana.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 rounded-full bg-mustard px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:bg-cream hover:text-ink shadow-lg font-bold"
          >
            Explore Hinges Catalog
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <a
            href={heroWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs uppercase tracking-[0.3em] text-cream font-bold"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cream/60 md:flex">
        <span className="h-px w-10 bg-cream/40" /> Scroll
      </div>
    </section>
  );
}

function ValueProposition() {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mustard-deep">
            Reliable Hinge Performance
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-ink tracking-tight leading-tight">
            High-Quality Door Hinges Designed for{" "}
            <span className="italic font-normal text-gradient-mustard">
              Everyday Use.
            </span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>
            Every door or cabinet depends on the strength and precision of the
            hinges supporting it. At DRG, we manufacture components that combine
            structural durability, smooth movement, and clean architectural
            appeal—from heavy-duty{" "}
            <Link
              to="/products"
              hash="ball-bearing"
              className="text-mustard-deep font-semibold underline underline-offset-4 hover:text-ink transition-colors"
            >
              ball bearing hinges
            </Link>{" "}
            for main entrances to soft-close{" "}
            <Link
              to="/products"
              hash="hydraulic"
              className="text-mustard-deep font-semibold underline underline-offset-4 hover:text-ink transition-colors"
            >
              hydraulic hinges
            </Link>{" "}
            for modular kitchens and wardrobes.
          </p>
          <p className="border-l-2 border-mustard pl-4 italic text-ink font-medium">
            Each series is engineered around real installation demands. Whether
            the priority is heavy-load support, quiet movement, corrosion
            resistance, or controlled soft closing, DRG delivers hinges built to
            perform reliably over years of daily operation.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductPortfolio({
  tag,
  title,
  items,
}: {
  tag: string;
  title: string;
  items: { name: string; img: string; link: string }[];
}) {
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
              to={it.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-mustard opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 font-bold">
                    View Specs →
                  </p>
                  <h3 className="mt-1 text-lg text-cream font-bold">
                    {it.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductDeepDive() {
  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mustard-deep">
            Core Hinge Series
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tight">
            Explore Our Range of{" "}
            <span className="italic font-normal text-gradient-mustard">
              Door & Cabinet Hinges.
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            From stainless steel ball bearing designs to hydraulic soft-close
            solutions and complementary door fittings, our products are
            developed for smooth movement, dependable strength, and long-term
            performance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {productHighlights.map((prod) => (
            <div
              key={prod.title}
              className="bg-white border border-border p-8 rounded-xl space-y-4 flex flex-col justify-between hover:border-mustard transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-border flex items-center justify-center text-mustard-deep">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-ink tracking-tight">
                  {prod.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground font-normal leading-relaxed">
                  {prod.desc}
                </p>
              </div>
              <Link
                to={prod.link}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-mustard-deep hover:underline pt-4"
              >
                View Specifications →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-28 md:py-36 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 space-y-16">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">The DRG Advantage</p>
          <h2 className="text-4xl md:text-6xl font-black text-ink tracking-tight">
            Why Choose{" "}
            <span className="italic font-normal text-gradient-mustard">
              DRG Hinges?
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Choosing precision-built hinges improves door alignment, cabinet
            longevity, user comfort, and overall installation quality. Backed by
            the manufacturing capabilities of Goel Industries in Bahadurgarh,
            Haryana.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyAdvantages.map((adv) => (
            <div
              key={adv.title}
              className="p-6 rounded-xl border border-border bg-[#FAF9F5]/60 space-y-2"
            >
              <CheckCircle2 className="w-5 h-5 text-mustard-deep shrink-0" />
              <h3 className="text-base font-bold text-ink pt-2">{adv.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationsAndOEM() {
  const b2bWhatsappUrl = `https://wa.me/919812540303?text=${encodeURIComponent(
    "Hello Goel Industries, I have a query regarding B2B and wholesale hinge manufacturing: "
  )}`;

  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-16 lg:grid-cols-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mustard-deep">
            Versatile Integration
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-ink tracking-tight">
            Hinges for Residential, Commercial &{" "}
            <span className="italic font-normal text-gradient-mustard">
              Furniture Applications.
            </span>
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-ink">Residential Projects:</strong> Ideal
              for main doors, wardrobes, interior cabinets, and modular home
              setups requiring durability and aesthetic polish.
            </p>
            <p>
              <strong className="text-ink">Commercial Spaces:</strong>{" "}
              Heavy-duty hinges built to support high-traffic office doors,
              hospitality environments, and institutional facilities.
            </p>
            <p>
              <strong className="text-ink">Furniture & Kitchens:</strong>{" "}
              Specialized hydraulic hinges and concealed channels that deliver
              smooth, quiet everyday movement for modular kitchens and modern
              cabinetry.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white border border-border rounded-2xl p-8 md:p-10 space-y-6 shadow-sm">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-mustard-deep flex items-center gap-2">
            <Settings className="w-4 h-4 text-mustard-deep" /> B2B & Wholesale
            Division
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-ink">
            OEM Hinge Manufacturing for Brands & Bulk Buyers
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Goel Industries collaborates with brands, distributors, wholesalers,
            and project suppliers requiring hinges manufactured to defined
            specifications and commercial standards. We provide long-term
            support for private-label ranges, repeat bulk supply, and customized
            product specifications from our Bahadurgarh infrastructure.
          </p>
          <div className="pt-2">
            <a
              href={b2bWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink hover:text-mustard-deep transition-colors"
            >
              Partner With Our Manufacturing Desk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section className="relative border-y border-border bg-gradient-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-6">Quality Guaranteed</p>
          <h2 className="text-5xl md:text-6xl">
            Our Official{" "}
            <span className="italic text-gradient-mustard">
              Certifications.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            At DRG, structural reliability and engineering precision are
            non-negotiable. Every batch of hinges undergoes rigorous testing
            protocols to meet industrial benchmarks.
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
              <p className="font-display text-2xl text-ink font-bold">
                {activeCert.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {activeCert.description}
              </p>
            </div>
          </div>
        </div>
      )}
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
          <h2 className="text-5xl md:text-6xl">
            Advanced Material{" "}
            <span className="italic text-gradient-mustard">Testing.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Through precision manufacturing processes and multi-stage load
            testing inspections, our team guarantees consistent operational
            reliability for residential and commercial door systems.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "High Load Stability",
              "Modular Kitchen Fits",
              "Rust Protective Cores",
              "Noise-Free Mechanisms",
              "ISO 9001:2015 Inspections",
            ].map((v) => (
              <li
                key={v}
                className="flex items-center gap-3 border-b border-border pb-3 text-sm"
              >
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
          <h2 className="text-5xl md:text-6xl">
            Made in Haryana,{" "}
            <span className="italic text-gradient-mustard">
              Supplied Across India.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Operating from Bahadurgarh, Haryana—one of North India's established
            industrial centers—DRG provides direct hinge manufacturing backed by
            broad sizing options and strict quality control.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={worldMap}
            alt="Domestic layout system map"
            width={1600}
            height={900}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
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