import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ShieldCheck, HardHat, Award } from "lucide-react";
import globe from "@/assets/globe.jpg";
import industrial from "@/assets/industrial.jpg";
import ideAaVideo from "@/assets/newvideo.mp4"; 

/**
 * =========================================================================
 * SEO & HEAD CONFIGURATION FOR /about
 * =========================================================================
 * Establishes company authority, manufacturing history since 2020,
 * factory divisions in Bahadurgarh, and OEM credentials.
 */
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      // 1. Primary Title & Search Engine Result Description
      { title: "About Us — Goel Industries & Goel Enterprises | DRG Hinges" },
      {
        name: "description",
        content:
          "Established in 2020 in Bahadurgarh, Haryana, Goel Industries and Goel Enterprises are premier manufacturers and OEM suppliers of precision architectural door hardware and hydraulic fittings.",
      },
      // 2. High-Intent Target Keywords
      {
        name: "keywords",
        content:
          "Goel Industries Bahadurgarh, Goel Enterprises Haryana, architectural hardware manufacturers India, door hinges OEM factory, DRG hinges infrastructure, HSIIDC Bahadurgarh industry",
      },
      // 3. Open Graph (WhatsApp, LinkedIn, Facebook Link Previews)
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.drghinges.co.in/about" },
      { property: "og:title", content: "About Goel Industries — Precision Hardware Manufacturing" },
      {
        property: "og:description",
        content:
          "Learn about our precision manufacturing plants, OEM capabilities, and ISO-standard hardware production across Bahadurgarh, Haryana.",
      },
      { property: "og:image", content: "https://www.drghinges.co.in/og-image.jpeg" },
      // 4. Twitter / X Card Tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Goel Industries & Goel Enterprises" },
      {
        name: "twitter:description",
        content: "Discover our precision engineering legacy and manufacturing infrastructure in Haryana, India.",
      },
      { name: "twitter:image", content: "https://www.drghinges.co.in/og-image.jpeg" },
    ],
    links: [
      // Canonical URL: Confirms authoritative domain for search indexers
      { rel: "canonical", href: "https://www.drghinges.co.in/about" },
    ],
  }),
  component: About,
});

/**
 * =========================================================================
 * SCHEMA.ORG STRUCTURED DATA (JSON-LD AboutPage & Organization)
 * =========================================================================
 * Helps Google Knowledge Graph map your founding date, industrial physical
 * addresses (Plot 204 & Plot 196, HSIIDC), and manufacturing scope.
 */
function AboutCompanySchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Goel Industries",
      "alternateName": ["Goel Enterprises", "DRG Hinges"],
      "url": "https://www.drghinges.co.in",
      "logo": "https://www.drghinges.co.in/logo.png",
      "foundingDate": "2020",
      "description": "Manufacturer and OEM supplier of precision architectural door hardware, hydraulic soft-close hinges, and kitchen fittings.",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 204, Sector 16, HSIIDC",
          "addressLocality": "Bahadurgarh",
          "addressRegion": "Haryana",
          "postalCode": "124507",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 196, HSIIDC",
          "addressLocality": "Bahadurgarh",
          "addressRegion": "Haryana",
          "postalCode": "124507",
          "addressCountry": "IN"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

const timeline = [
  { y: "2020", t: "Foundation", d: "Goel Industries established, rapidly emerging as a trusted architectural hardware manufacturer and OEM partner." },
  { y: "2022", t: "Tech Investment", d: "Continuous investment in advanced manufacturing technologies and stringent quality control systems." },
  { y: "2024", t: "Portfolio Expansion", d: "Expanded portfolio to a comprehensive range of architectural hardware for residential and commercial layouts." },
  { y: "2025", t: "Global Sourcing", d: "Strategic diversification into premium kitchen accessory imports from trusted international partners." },
  { y: "2026", t: "Goel Enterprises", d: "Established our second manufacturing division at Plot No. 196, HSIIDC, Bahadurgarh, Haryana." },
];

const values = [
  { t: "Precision Engineering", d: "Driven by innovation, precision engineering, and an unwavering commitment to industrial quality." },
  { t: "OEM Customization", d: "Collaborating with leading brands, providing customized manufacturing solutions tailored to exact brand specs." },
  { t: "Unified Excellence", d: "Combining advanced production, domestic and international standards, and flexible, fast logistics." },
];

function About() {
  const [activeMilestone, setActiveMilestone] = useState<string>("2020");

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2B2927] antialiased">
      {/* Google Structured Data Injection */}
      <AboutCompanySchema />

      <SiteHeader />

      {/* --- HERO PROFILE BANNER HEADER --- */}
      <section className="relative pt-40 pb-12 bg-[#FAF9F5]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#D49A5B] font-bold mb-6 flex items-center gap-2">
            <HardHat className="w-3.5 h-3.5 text-[#D49A5B]" /> ESTABLISHED 2020
          </p>
          <h1 className="max-w-5xl text-6xl font-black tracking-tight leading-[0.95] md:text-8xl text-[#1C1A19]">
            Advanced manufacturing,
            <span className="italic font-normal text-[#D49A5B] block mt-2 md:inline md:mt-0 md:ml-4">engineered with precision.</span>
          </h1>
        </div>
      </section>

      {/* --- UNIFIED MANIFESTO STRUCTURE --- */}
      <section className="pb-24 bg-[#FAF9F5] border-b border-[#E6E2D8]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-10">
          <p className="text-base md:text-lg text-[#6E6861] font-light leading-relaxed pl-6">
            Established in 2020, Goel Industries has rapidly emerged as a trusted manufacturer and OEM partner in the architectural hardware industry. Driven by innovation, precision engineering, and an unwavering commitment to quality, the company specializes in manufacturing premium architectural hardware solutions that meet the evolving demands of modern construction and interior design.
          </p>
          
          <div className="border-l-2 border-[#E0A96D] pl-6 py-1">
            <p className="text-base md:text-lg text-[#4A4540] leading-relaxed font-light">
              With continuous investment in advanced manufacturing technologies and stringent quality control systems, we have expanded our portfolio beyond door hinges to offer a comprehensive range of architectural door hardware fittings for residential, commercial, hospitality, and institutional applications. Every product is engineered to meet the highest standards of performance, reliability, and aesthetics.
            </p>
          </div>

          <p className="text-base md:text-lg text-[#4A4540] leading-relaxed font-light pl-6">
            As a trusted OEM manufacturing partner, Goel Industries collaborates with leading brands, distributors, wholesalers, and project suppliers by providing customized manufacturing solutions tailored to their product specifications and branding requirements. Our integrated manufacturing capabilities, experienced workforce, and commitment to operational excellence enable us to consistently deliver products that meet both domestic and international quality standards.
          </p>

          <p className="text-base md:text-lg text-[#4A4540] leading-relaxed font-light pl-6">
            As part of our continued growth strategy, we have expanded our manufacturing infrastructure with the establishment of our second manufacturing division, Goel Enterprises, located at Plot No. 196, HSIIDC, Bahadurgarh, Haryana. Equipped with modern production facilities and advanced manufacturing capabilities, Goel Enterprises strengthens our production capacity, enhances operational efficiency, and enables us to serve our OEM partners and customers with greater flexibility, faster deliveries, and consistent quality.
          </p>

          <p className="text-base md:text-lg text-[#4A4540] leading-relaxed font-light pl-6">
            Further strengthening our product portfolio, we have also expanded into the import business by offering premium kitchen accessories sourced from trusted international partners. This strategic diversification enables us to provide a complete range of architectural and interior hardware solutions under one roof, delivering greater value and convenience to our customers.
          </p>

          <div className="ml-6 font-medium text-[#1C1A19] bg-white border border-[#E6E2D8] p-6 rounded-xs shadow-xs flex items-start gap-4">
            <Award className="w-5 h-5 text-[#D49A5B] shrink-0 mt-0.5" />
            <p className="text-sm md:text-base font-bold tracking-tight">
              Today, Goel Industries and Goel Enterprises together represent a unified commitment to excellence, combining advanced manufacturing, OEM expertise, and an expanding product portfolio to meet the evolving needs of the architectural and interior hardware industry across India and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PHILOSOPHY GRID --- */}
      <section className="border-b border-[#E6E2D8] bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xs border border-[#E6E2D8] bg-neutral-100">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,154,91,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <img src={industrial} alt="Goel Industries Manufacturing Facility" loading="lazy" className="h-full w-full object-cover relative z-10" />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A69E94] font-bold">Our Pillars</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1A19] tracking-tight">
              Setting new benchmarks <span className="italic font-normal text-[#D49A5B]">in hardware reliability.</span>
            </h2>
            <div className="space-y-4 pt-4">
              {values.map((v) => (
                <div key={v.t} className="border border-[#E6E2D8] bg-[#FAF9F5]/50 p-5 rounded-xs transition-colors hover:border-[#D49A5B]">
                  <h3 className="text-base font-bold text-[#1C1A19] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D49A5B]" /> {v.t}
                  </h3>
                  <p className="mt-1 text-xs text-[#6E6861] font-light pl-3.5">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CHRONOLOGY SECTOR TIMELINE --- */}
      <section className="border-b border-[#E6E2D8] bg-[#FAF9F5]/60">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A69E94] font-bold mb-3">Chronology</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1C1A19] tracking-tight">
            Our corporate growth, <span className="italic font-normal text-[#D49A5B]">strategic milestones.</span>
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xs bg-[#E6E2D8] border border-[#E6E2D8] md:grid-cols-5">
            {timeline.map((t) => {
              const isActive = activeMilestone === t.y;
              return (
                <div 
                  key={t.y} 
                  onMouseEnter={() => setActiveMilestone(t.y)}
                  onClick={() => setActiveMilestone(t.y)}
                  className={`p-6 transition-all duration-300 bg-white min-h-[200px] flex flex-col justify-between cursor-pointer ${
                    isActive ? "shadow-md translate-y-[-1px]" : "opacity-90"
                  }`}
                >
                  <div>
                    <p className={`font-mono text-2xl font-black ${isActive ? "text-[#D49A5B]" : "text-[#A69E94]"}`}>{t.y}</p>
                    <h3 className="mt-3 text-sm font-bold text-[#1C1A19]">{t.t}</h3>
                  </div>
                  <p className="mt-2 text-[11px] text-[#6E6861] font-light leading-relaxed">{t.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: OPERATIONAL IMPACT METRICS WITH INTERACTIVE VIDEO --- */}
      <section className="border-b border-[#E6E2D8] bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A69E94] font-bold">Innovation & Future</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1A19] tracking-tight">
              Modern facilities, <span className="italic font-normal text-[#D49A5B] block mt-1">global parameters.</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#6E6861] font-light pt-2">
              Our vision is to become a globally trusted name in architectural hardware by delivering world-class products, building long-term partnerships, and setting new benchmarks in quality, reliability, and service.
            </p>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5" /> STRICTOR ISO QUALITY ASSURANCE SYSTEMS
            </div>
          </div>
          
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xs border border-[#E6E2D8] bg-black">
              <video 
                src={ideAaVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                controls
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: INTAKE CALL TO ACTION --- */}
      <section className="relative overflow-hidden bg-[#1C1A19] py-28 text-white">
        <img src={globe} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Looking for an OEM partner <span className="italic font-normal text-[#D49A5B] block mt-2">for custom specs?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-xs font-light text-neutral-400 leading-relaxed">
            Collaborate directly with our Bahadurgarh plants to establish rapid custom component runs and bespoke hardware branding.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#D49A5B] hover:bg-white hover:text-[#1C1A19] px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-bold transition-all text-white">
              Connect With OEM Desk →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}