import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState } from "react";

import ballBearingImg from "@/assets/hinges1.png";
import concealedImg from "@/assets/hinges2.jpeg";
import towerBoltImg from "@/assets/hinges3.jpeg";
import aldropsImg from "@/assets/hinges4.png";
import hydraulicImg from "@/assets/hinges_5.png";
import telescopicImg from "@/assets/hinges6.png";
import softCloseImg from "@/assets/hinges7.png";
import kitchenImg from "@/assets/hinges8.jpg";

/**
 * =========================================================================
 * SEO & HEAD CONFIGURATION FOR /products
 * =========================================================================
 * Tells search engines about your architectural catalogue, dimensions,
 * and OEM hardware options.
 */
export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      // 1. Primary Title & Search Engine Result Snippet Description
      { title: "Architectural Hardware & Hinges Catalog — DRG by Goel Industries" },
      {
        name: "description",
        content:
          "Explore DRG's precision hardware catalog: Ball Bearing Hinges, Butt Hinges, Tower Bolts, Aldrops, Hydraulic Soft-Close Hinges, and Telescopic Slides made in Haryana, India.",
      },
      // 2. High-Intent Target Keywords
      {
        name: "keywords",
        content:
          "stainless steel hinges catalog, hydraulic hinges manufacturer, butt hinges, tower bolts India, aldrops suppliers, telescopic drawer slides, soft close channels Haryana",
      },
      // 3. Open Graph (WhatsApp, LinkedIn, Facebook Link Previews)
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.drghinges.co.in/products" },
      { property: "og:title", content: "Hardware & Hinges Catalog — DRG by Goel Industries" },
      {
        property: "og:description",
        content:
          "Precision-engineered door fittings, soft-close hydraulic solutions, and architectural hardware catalog.",
      },
      { property: "og:image", content: "https://www.drghinges.co.in/og-image.jpeg" },
      // 4. Twitter / X Card Tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DRG Architectural Hardware Catalog" },
      {
        name: "twitter:description",
        content: "Explore stainless steel hinges, tower bolts, and hydraulic fittings catalog from DRG Goel Industries.",
      },
      { name: "twitter:image", content: "https://www.drghinges.co.in/og-image.jpeg" },
    ],
    links: [
      // Canonical URL: Identifies the primary URL for Google indexing
      { rel: "canonical", href: "https://www.drghinges.co.in/products" },
    ],
  }),
  component: Products,
});

/**
 * =========================================================================
 * SCHEMA.ORG STRUCTURED DATA (JSON-LD ItemList)
 * =========================================================================
 * Helps Google identify this page as an itemized product catalog
 * containing 8 distinct hardware collections.
 */
function ProductCatalogSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "DRG Hardware Product Collections",
    "description": "Architectural door hardware, hydraulic hinges, and drawer slide series manufactured by Goel Industries.",
    "numberOfItems": 8,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ball Bearing Hinges" },
      { "@type": "ListItem", "position": 2, "name": "Butt Hinges" },
      { "@type": "ListItem", "position": 3, "name": "Tower Bolts" },
      { "@type": "ListItem", "position": 4, "name": "Aldrops" },
      { "@type": "ListItem", "position": 5, "name": "Hydraulic Hinges" },
      { "@type": "ListItem", "position": 6, "name": "Telescopic Drawer Slides" },
      { "@type": "ListItem", "position": 7, "name": "Soft Close Channels" },
      { "@type": "ListItem", "position": 8, "name": "Kitchen & Furniture Accessories" }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

const collections = [
  {
    tag: "Series 01",
    name: "Ball Bearing Hinges",
    desc: "Premium ball-bearing hinges designed for smooth, stable, and long-lasting door movement. Manufactured from high-quality stainless steel, they ensure effortless operation and noise-free performance in high-traffic areas.",
    image: ballBearingImg,
    sizesChart: ["102 x 76 x 2.5 mm", "102 x 76 x 3.0 mm", "127 x 76 x 3.0 mm", "127 x 89 x 3.0 mm", "127 x 102 x 3.0 mm"],
    items: [
      "Smooth & friction-free door movement",
      "Heavy-duty load-bearing performance",
      "Durable ball-bearing mechanism",
      "Corrosion & rust-resistant finish",
      "Noise-free and stable operation"
    ]
  },
  {
    tag: "Series 02",
    name: "Butt Hinges",
    desc: "Designed to provide a clean, modern, and seamless furniture appearance. Hidden entirely inside the cabinet when closed, they enhance the aesthetics of modular interiors, wardrobes, and contemporary kitchens.",
    image: concealedImg,
    sizesChart: ["Open Hinge: 110x57x24mm", "Closed Hinge: 62x57x24mm", "Leaf Thickness: Min. 28mm", "Load Capacity: 40 Kg/Pair"],
    items: [
      "Hidden design for elegant appearance",
      "Smooth & effortless door movement",
      "Strong & durable steel construction",
      "Corrosion & rust-resistant finish",
      "Precision-engineered alignment"
    ]
  },
  {
    tag: "Series 03",
    name: "Tower Bolts",
    desc: "Reliable, high-strength door and gate locking configurations engineered using premium materials for maximum security in residential and commercial spaces.",
    image: towerBoltImg,
    isComplex: true,
    sizesChart: ["Base Length: 200mm", "Usable Rod: 182mm", "Bolt Diameter: Ø16mm", "Base Width: 60mm", "Thickness: 3mm"],
    subsections: [
      {
        title: "Steel Tower Bolts",
        info: "Variants: 2 Piece, 10mm Rod, 12mm Rod",
        finishes: "Finishes: Matte, Antique, Black Finish"
      },
      {
        title: "Aluminium Tower Bolts",
        info: "Designs: Hex Round, Xylo, Pyramid, Royale, Regal, Crown",
        sizes: "Available Sizes: 4 Inch to 36 Inch"
      }
    ]
  },
  {
    tag: "Series 04",
    name: "Aldrops",
    desc: "Premium-quality hardware units explicitly designed to provide enhanced structural security and reliable latching mechanisms for residential and commercial entry doors or structural gates.",
    image: aldropsImg,
    sizesChart: ["Available Variant Range: 8 Inch to 24 Inch Configurations"],
    items: [
      "Strong and durable construction",
      "Easy installation setup",
      "Corrosion-resistant metal finish",
      "Smooth structural locking mechanism",
      "Suitable for doors & heavy gates"
    ]
  },
  {
    tag: "Series 05",
    name: "Hydraulic Hinges",
    desc: "Built using advanced soft-close hydraulic damping technology to completely eliminate hard slamming, reduce noise impact, and cushion furniture surfaces during operation.",
    image: hydraulicImg,
    sizesChart: ["Opening Angle: 105°", "Side Adjustment: ±2.0 mm", "Height Adjustment: ±2.0 mm", "Depth Adjustment: ±1.5 mm"],
    items: [
      "Advanced soft-close hydraulic tech",
      "Smooth & noiseless door closing",
      "High-quality stainless steel build",
      "Corrosion and rust-resistant finish",
      "Protects delicate furniture surfaces"
    ]
  },
  {
    tag: "Series 06",
    name: "Telescopic Drawer Slides",
    desc: "Precision ball-bearing channel infrastructure providing heavy-duty structural load limits alongside quiet, frictionless guidance across premium cabinetry layouts.",
    image: telescopicImg,
    sizesChart: ["Profile Width: 12.7mm", "Pitch Holes Space: 64mm", "End Hole Distance: 35mm"],
    items: [
      "Frictionless sliding mechanism",
      "Heavy-duty load-bearing capacity",
      "Soft close technology integrated",
      "Noise-free & vibration-free travel",
      "Precision-engineered stability"
    ]
  },
  {
    tag: "Series 07",
    name: "Soft Close Channels",
    desc: "Engineered with integrated fluid dampers that provide quiet, controlled drawer closing functionality, adding luxury and modern convenience to any storage system.",
    image: softCloseImg,
    sizesChart: ["Dynamic Specifications Available Upon Request Matrix Alignment"],
    items: [
      "Silent controlled closing action",
      "Prevents hardware impacts & wear",
      "Premium corrosion-resistant treatment",
      "Precision ball-bearing slide path",
      "Ideal for modern modular setups"
    ]
  },
  {
    tag: "Series 08",
    name: "Kitchen Accessories",
    desc: "Smart multi-tier storage configurations, organizers, and dynamic space-saving components engineered specifically to maximize spatial efficiency throughout residential and hotel kitchens.",
    image: kitchenImg,
    sizesChart: ["Width Profiles: 6 Inch | 8 Inch | 9 Inch Layout Systems"],
    items: [
      "Space-saving smart storage solutions",
      "Modern and stylish configurations",
      "High-quality durable construction",
      "Corrosion-resistant layer coating",
      "Maximizes small corner utility paths"
    ]
  }
];

const finishes = [
  { name: "Matte Finish", swatch: "linear-gradient(135deg,#1c1c1c,#3a3a3a)" },
  { name: "Antique Finish", swatch: "linear-gradient(135deg,#6e5531,#947447)" },
  { name: "Black Finish", swatch: "linear-gradient(135deg,#050505,#1a1a1a)" },
  { name: "Satin Finish", swatch: "linear-gradient(135deg,#8a8a8e,#c8c8cc)" },
  { name: "Polished Steel", swatch: "linear-gradient(135deg,#a8b0b6,#e4e8ec)" },
];

const applications = [
  { t: "Modular Kitchens & Wardrobes", img: kitchenImg },
  { t: "Commercial Interiors & Offices", img: hydraulicImg },
  { t: "Residential Architecture", img: aldropsImg },
];

function Products() {
  const [activeSizeChart, setActiveSizeChart] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Search Engine Microdata Injection */}
      <ProductCatalogSchema />

      <SiteHeader />

      <section className="border-b border-border pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow mb-6">The Catalogue</p>
          <h1 className="max-w-4xl text-5xl leading-[0.95] md:text-8xl">
            Eight series. <span className="italic text-gradient-mustard">Premium hardware.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Browse the complete collection from DRG Hinges (Goel Industries) — engineered to meet strict quality and durability standards across India.
          </p>
        </div>
      </section>

      <section>
        {collections.map((c, i) => {
          const sectionId = c.name
            .toLowerCase()
            .replace(" hinges", "")
            .replace(" premium ", "")
            .replace(" telescopic ", "")
            .replace(" ", "-");

          const isChartOpen = activeSizeChart === c.name;

          return (
            <div key={c.name} id={sectionId} className="border-b border-border scroll-mt-24">
              <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
                
                {/* Product Image Panel Wrapper */}
                <div className={`relative aspect-[4/5] overflow-hidden rounded-lg ${i % 2 ? "md:order-2" : ""}`}>
                  <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105" />
                  <span className="absolute left-6 top-6 rounded-full bg-cream/90 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-mustard-deep backdrop-blur">
                    {c.tag}
                  </span>
                </div>

                {/* Technical Meta Content Column */}
                <div className="w-full overflow-hidden">
                  <p className="eyebrow mb-4">{c.tag}</p>
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight">{c.name}</h2>
                  <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">{c.desc}</p>

                  {c.isComplex && c.subsections ? (
                    <div className="mt-6 grid grid-cols-1 gap-4 rounded-md border border-border p-4 bg-muted/20">
                      {c.subsections.map((sub, idx) => (
                        <div key={idx} className="border-b border-border last:border-0 pb-2 last:pb-0">
                          <h4 className="font-semibold text-sm text-foreground">{sub.title}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{sub.info}</p>
                          {sub.finishes && <p className="text-xs text-muted-foreground">{sub.finishes}</p>}
                          {sub.sizes && <p className="text-xs text-mustard-deep font-medium">{sub.sizes}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
                      {c.items?.map((it) => (
                        <li key={it} className="flex items-center gap-2 sm:gap-3 border-b border-border pb-3 text-xs sm:text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-mustard shrink-0" />
                          <span className="truncate">{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Responsive Button Matrix Wrapper */}
                  <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 relative">
                    <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.3em] text-cream hover:bg-mustard transition-colors duration-300 w-full sm:w-auto">
                      Request Specification →
                    </Link>

                    <div className="relative w-full sm:w-auto">
                      <button 
                        onClick={() => setActiveSizeChart(isChartOpen ? null : c.name)}
                        className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-4 text-xs uppercase tracking-[0.3em] transition-colors duration-300 cursor-pointer w-full sm:w-auto ${
                          isChartOpen ? "border-mustard bg-mustard/10 text-mustard-deep" : "border-border bg-transparent text-ink hover:bg-muted/40"
                        }`}
                      >
                        Size Chart {isChartOpen ? "✕" : "→"}
                      </button>
                      
                      {/* Tooltip Panel */}
                      <div 
                        className={`absolute bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2 mb-3 z-30 w-full sm:w-64 p-4 rounded-xl border border-border bg-white shadow-xl transition-all duration-300 ease-out ${
                          isChartOpen 
                            ? "opacity-100 scale-100 pointer-events-auto" 
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        <p className="font-mono text-[9px] uppercase tracking-wider text-mustard-deep font-bold mb-2 pb-1 border-b border-border">
                          Technical Blueprint Dimensions
                        </p>
                        <ul className="space-y-1">
                          {c.sizesChart?.map((size, sIdx) => (
                            <li key={sIdx} className="text-xs font-semibold text-ink/90 flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-mustard shrink-0" />
                              <span>{size}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                        <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-border -z-10 mt-[1px]" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
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