import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ShieldCheck, HardHat, Award } from "lucide-react";
import globe from "@/assets/globe.jpg";
import sustainability from "@/assets/sustainability.jpg";
import industrial from "@/assets/industrial.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DRG Hinges & Architectural Hardware" },
      { name: "description", content: "Three decades of manufacturing architectural hardware in Aligarh, India. Learn about DRG's craft, values and global reach." },
      { property: "og:title", content: "About DRG Hardware" },
      { property: "og:description", content: "Three decades of hinges, handles and ironmongery." },
    ],
  }),
  component: About,
});

const timeline = [
  { y: "1992", t: "Foundation", d: "DRG founded in Aligarh — India's historic hardware capital." },
  { y: "2001", t: "First Export", d: "Shipped our first container to the United Kingdom." },
  { y: "2010", t: "ISO 9001", d: "Certified for quality management across all operations." },
  { y: "2016", t: "New Foundry", d: "Commissioned an in-house brass foundry to control every stage." },
  { y: "2024", t: "30 Countries", d: "Serving architects and distributors across five continents." },
];

const values = [
  { t: "Craft over Volume", d: "We would rather ship one hundred perfect hinges than one thousand adequate ones." },
  { t: "Material Honesty", d: "Solid brass. Real steel. No plating over pot metal — ever." },
  { t: "Lifetime Warranty", d: "Every mechanical piece is guaranteed for the life of the installation." },
];

function About() {
  const [activeMilestone, setActiveMilestone] = useState<string>("1992");

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2B2927] antialiased">
      <SiteHeader />

      {/* --- HERO PROFILE BANNER HEADER --- */}
      <section className="relative pt-40 pb-12 bg-[#FAF9F5]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#D49A5B] font-bold mb-6 flex items-center gap-2">
            <HardHat className="w-3.5 h-3.5 text-[#D49A5B]" /> ESTABLISHED 1992
          </p>
          <h1 className="max-w-5xl text-6xl font-black tracking-tight leading-[0.95] md:text-8xl text-[#1C1A19]">
            A family of makers,
            <span className="italic font-normal text-[#D49A5B] block mt-2 md:inline md:mt-0 md:ml-4">in the city of hardware.</span>
          </h1>
        </div>
      </section>

      {/* --- UNIFIED MANIFESTO STRUCTURE (FIXES IMAGE_72ED24.PNG MISALIGNMENT) --- */}
      <section className="pb-24 bg-[#FAF9F5] border-b border-[#E6E2D8]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-10">
          
          {/* Realigned Lead Intro Paragraph */}
          <p className="text-base md:text-lg text-[#6E6861] font-light leading-relaxed pl-6">
            DRG began in a small workshop in Aligarh — a city that has forged locks and hinges for
            over four centuries. Three decades later, our craft remains rooted in the same soil,
            refined by high-precision machinery but always guided by hand.
          </p>
          
          {/* Mustard Accent Highlight Card */}
          <div className="border-l-2 border-[#E0A96D] pl-6 py-1">
            <p className="text-base md:text-lg text-[#4A4540] leading-relaxed font-light">
              At DRG Hinges, we are committed to delivering high-quality architectural hardware and furniture fittings that combine durability, functionality, and modern design. With a strong focus on quality manufacturing and customer satisfaction, we offer a comprehensive range of products including Ball Bearing Hinges, Concealed Hinges, Hydraulic Hinges, Tower Bolts, Aldrops, Drawer Slides, Soft Close Channels, and Kitchen Accessories.
            </p>
          </div>

          {/* Standard Informational Block */}
          <p className="text-base md:text-lg text-[#4A4540] leading-relaxed font-light pl-6">
            Our products are designed to meet the evolving needs of residential, commercial, and industrial applications while ensuring superior performance, reliability, and long service life. Through continuous innovation, advanced manufacturing processes, and stringent quality standards, we strive to provide hardware solutions that enhance safety, convenience, and everyday living.
          </p>

          {/* Bottom Certified Badge Frame */}
          <div className="ml-6 font-medium text-[#1C1A19] bg-white border border-[#E6E2D8] p-6 rounded-xs shadow-xs flex items-start gap-4">
            <Award className="w-5 h-5 text-[#D49A5B] shrink-0 mt-0.5" />
            <p className="text-sm md:text-base font-bold tracking-tight">
              Driven by excellence and trust, DRG Hinges aims to be a preferred partner for customers seeking premium hardware solutions across India and beyond.
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
              <img src={industrial} alt="DRG workshop" loading="lazy" className="h-full w-full object-cover relative z-10" />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A69E94] font-bold">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1A19] tracking-tight">
              Hardware is architecture <span className="italic font-normal text-[#D49A5B]">at its smallest scale.</span>
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
            Three decades, <span className="italic font-normal text-[#D49A5B]">five milestones.</span>
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xs bg-[#E6E2D8] border border-[#E6E2D8] md:grid-cols-5">
            {timeline.map((t) => {
              const isActive = activeMilestone === t.y;
              return (
                <div 
                  key={t.y} 
                  onMouseEnter={() => setActiveMilestone(t.y)}
                  onClick={() => setActiveMilestone(t.y)}
                  className={`p-6 transition-all duration-300 bg-white min-h-[200px] flex flex-col justify-between ${
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

      {/* --- SECTION 5: SUSTAINABILITY METRICS --- */}
      <section className="border-b border-[#E6E2D8] bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A69E94] font-bold">Sustainability</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C1A19] tracking-tight">
              Greener workshops, <span className="italic font-normal text-[#D49A5B] block mt-1">stronger communities.</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#6E6861] font-light pt-2">
              As a 100% export-focused brand, we adhere to global sustainability standards — from
              solar-powered polishing lines to fair-wage workshops and community welfare programs.
            </p>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED SUSTAINABLE PRODUCTION
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xs border border-[#E6E2D8]">
              <img src={sustainability} alt="Sustainable operations" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: INTAKE CALL TO ACTION --- */}
      <section className="relative overflow-hidden bg-[#1C1A19] py-28 text-white">
        <img src={globe} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Interested in visiting <span className="italic font-normal text-[#D49A5B] block mt-2">the workshop?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-xs font-light text-neutral-400 leading-relaxed">
            Architects and buyers are welcome. We'll walk you from the foundry to the polish room.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#D49A5B] hover:bg-white hover:text-[#1C1A19] px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-bold transition-all text-white">
              Arrange a Visit →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}