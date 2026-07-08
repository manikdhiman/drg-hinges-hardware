import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Perfectly aligned import mappings point directly to lowercase file formats
import ballBearingImg from "@/assets/ball_bearing_hinges.png";
import concealedImg from "@/assets/concealed_hinges.png";
import towerBoltImg from "@/assets/tower_bolts.png";
import aldropsImg from "@/assets/aldrops.png";
import hydraulicImg from "@/assets/hydraulic_hinges.png";
import telescopicImg from "@/assets/telescopic.png";
import softCloseImg from "@/assets/soft_close.png";
import kitchenImg from "@/assets/kitchen_accessories.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — DRG Premium SS Hinges & Architectural Hardware" },
      { name: "description", content: "Explore the premium collection of DRG hardware including Ball Bearing Hinges, Concealed Hinges, Tower Bolts, Aldrops, and Hydraulic fittings." },
      { property: "og:title", content: "Products — DRG Architectural Hardware" },
      { property: "og:description", content: "The premium collection from DRG Hinges (Goel Industries)." },
    ],
  }),
  component: Products,
});

const collections = [
  {
    tag: "Series 01",
    name: "Ball Bearing Hinges",
    desc: "Premium ball-bearing hinges designed for smooth, stable, and long-lasting door movement. Manufactured from high-quality stainless steel, they ensure effortless operation and noise-free performance in high-traffic areas.",
    image: ballBearingImg,
    items: [
      "Smooth & friction-free door movement",
      "Heavy-duty load-bearing performance",
      "Durable ball-bearing mechanism",
      "Corrosion & rust-resistant finish",
      "Noise-free and stable operation",
      "Strong construction for long life",
      "Suitable for wooden & metal doors",
      "Easy installation & low maintenance"
    ]
  },
  {
    tag: "Series 02",
    name: "Concealed Hinges",
    desc: "Designed to provide a clean, modern, and seamless furniture appearance. Hidden entirely inside the cabinet when closed, they enhance the aesthetics of modular interiors, wardrobes, and contemporary kitchens.",
    image: concealedImg,
    items: [
      "Hidden design for elegant appearance",
      "Smooth & effortless door movement",
      "Strong & durable steel construction",
      "Corrosion & rust-resistant finish",
      "Easy installation & adjustable fitting",
      "Noise-free opening/closing mechanism",
      "Ideal for modular kitchens & cabinets",
      "Precision-engineered alignment"
    ]
  },
  {
    tag: "Series 03",
    name: "Tower Bolts",
    desc: "Reliable, high-strength door and gate locking configurations engineered using premium materials for maximum security in residential and commercial spaces.",
    image: towerBoltImg,
    isComplex: true,
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
    sizes: "Available Sizes: 8 Inch to 24 Inch",
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
    items: [
      "Advanced soft-close hydraulic tech",
      "Smooth & noiseless door closing",
      "High-quality stainless steel build",
      "Corrosion and rust-resistant finish",
      "High load-bearing stability support",
      "Protects delicate furniture surfaces"
    ]
  },
  {
    tag: "Series 06",
    name: "Telescopic Drawer Slides",
    desc: "Precision ball-bearing channel infrastructure providing heavy-duty structural load limits alongside quiet, frictionless guidance across premium cabinetry layouts.",
    image: telescopicImg,
    items: [
      "Frictionless sliding mechanism",
      "Heavy-duty load-bearing capacity",
      "Soft close technology integrated",
      "Noise-free & vibration-free travel",
      "Precision-engineered stability",
      "Long operational engineering lifespan"
    ]
  },
  {
    tag: "Series 07",
    name: "Soft Close Channels",
    desc: "Engineered with integrated fluid dampers that provide quiet, controlled drawer closing functionality, adding luxury and modern convenience to any storage system.",
    image: softCloseImg,
    items: [
      "Silent controlled closing action",
      "Prevents hardware impacts & wear",
      "Premium corrosion-resistant treatment",
      "Precision ball-bearing slide path",
      "Low upkeep & simple installation",
      "Ideal for modern modular setups"
    ]
  },
  {
    tag: "Series 08",
    name: "Kitchen Accessories",
    desc: "Smart multi-tier storage configurations, organizers, and dynamic space-saving components engineered specifically to maximize spatial efficiency throughout residential and hotel kitchens.",
    image: kitchenImg,
    items: [
      "Space-saving smart storage solutions",
      "Modern and stylish configurations",
      "High-quality durable construction",
      "Corrosion-resistant layer coating",
      "Smooth and user-friendly operation",
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
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow mb-6">The Catalogue</p>
          <h1 className="max-w-4xl text-6xl leading-[0.95] md:text-8xl">
            Eight series. <span className="italic text-gradient-mustard">Premium hardware.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Browse the complete collection from DRG Hinges (Goel Industries) — engineered to meet strict quality and durability standards across India.
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
                
                {c.sizes && (
                  <p className="mt-4 text-sm font-semibold text-mustard-deep uppercase tracking-wider">{c.sizes}</p>
                )}

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
                  <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                    {c.items?.map((it) => (
                      <li key={it} className="flex items-center gap-3 border-b border-border pb-3 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-mustard" />
                        {it}
                      </li>
                    ))}
                  </ul>
                )}

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
              Signature finishes, <span className="italic text-gradient-mustard">precision applied.</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-5">
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