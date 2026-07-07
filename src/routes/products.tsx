import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import leverImg from "@/assets/lever-handle.jpg";
import hingesImg from "@/assets/hinges.jpg";
import cabinetImg from "@/assets/cabinet.jpg";
import gateImg from "@/assets/gate.jpg";
import knobsImg from "@/assets/knobs.jpg";
import bathroomImg from "@/assets/bathroom.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — DRG Hinges & Architectural Hardware" },
      {
        name: "description",
        content:
          "Explore the complete DRG catalogue: butt hinges, lever handles, cabinet pulls, door knobs, gate ironmongery and bathroom hardware in brass and stainless steel.",
      },
      { property: "og:title", content: "Products — DRG Architectural Hardware" },
      { property: "og:description", content: "The complete collection of DRG hardware." },
    ],
  }),
  component: Products,
});

const collections = [
  {
    tag: "Series 01",
    name: "Butt Hinges",
    desc: "Ball-bearing and plain-bearing hinges in solid brass and SS 304/316. Sizes from 2\" to 8\".",
    image: hingesImg,
    items: ["Ball Bearing Hinges", "Plain Bearing", "Concealed Hinges", "Rising Butt", "Parliament Hinges"],
  },
  {
    tag: "Series 02",
    name: "Lever Handles",
    desc: "Mortice lever handles on rose and plate. Contemporary, classic and Art Deco silhouettes.",
    image: leverImg,
    items: ["On Rose", "On Plate", "Privacy Sets", "Passage Sets", "Bathroom Sets"],
  },
  {
    tag: "Series 03",
    name: "Cabinet Pulls",
    desc: "Machined brass and stainless pulls, knurled bars and edge pulls for cabinetry and joinery.",
    image: cabinetImg,
    items: ["Bar Pulls", "Edge Pulls", "Knurled Series", "Cup Pulls", "Finger Pulls"],
  },
  {
    tag: "Series 04",
    name: "Door Knobs",
    desc: "Turned solid brass knobs — beehive, mushroom, reeded and octagonal profiles.",
    image: knobsImg,
    items: ["Beehive", "Mushroom", "Reeded", "Octagonal", "Centre Knobs"],
  },
  {
    tag: "Series 05",
    name: "Gate & Iron Fittings",
    desc: "Sand-cast iron gate hinges, strap hinges, latches and decorative ironmongery.",
    image: gateImg,
    items: ["Strap Hinges", "Tee Hinges", "Latches", "Gate Stops", "Cleats"],
  },
  {
    tag: "Series 06",
    name: "Bathroom Hardware",
    desc: "Coordinated bathroom collections — towel bars, rings, hooks and paper holders.",
    image: bathroomImg,
    items: ["Towel Bars", "Robe Hooks", "Paper Holders", "Rings", "Shelves"],
  },
];

const finishes = [
  { name: "Polished Brass", swatch: "linear-gradient(135deg,#c8a24a,#e6c774)" },
  { name: "Satin Brass", swatch: "linear-gradient(135deg,#b18c48,#d4b26a)" },
  { name: "Antique Brass", swatch: "linear-gradient(135deg,#6a4a24,#a37a3e)" },
  { name: "Matte Black", swatch: "linear-gradient(135deg,#0a0a0a,#2a2a2a)" },
  { name: "Satin Nickel", swatch: "linear-gradient(135deg,#8a8a8e,#c8c8cc)" },
  { name: "Polished Chrome", swatch: "linear-gradient(135deg,#a8b0b6,#e4e8ec)" },
  { name: "Oil-Rubbed Bronze", swatch: "linear-gradient(135deg,#2a1a12,#5c3a24)" },
  { name: "Rose Gold", swatch: "linear-gradient(135deg,#b56c58,#e2a48c)" },
];

function Products() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow mb-6">The Catalogue</p>
          <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-7xl lg:text-[5rem]">
            Six series.
            <span className="italic text-gradient-brass"> Endless possibility.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Browse the complete DRG collection — from architectural hinges to bathroom fittings, each series
            available in the finish and dimension your project demands.
          </p>
        </div>
      </section>

      <section>
        {collections.map((c, i) => (
          <div key={c.name} className="border-b border-border">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-28">
              <div className={`relative aspect-[4/5] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-brass/20" />
                <span className="absolute left-6 top-6 bg-background/80 px-3 py-1 text-[10px] uppercase tracking-widest text-brass backdrop-blur">
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
                      <span className="text-brass">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 border-b border-brass pb-1 text-sm uppercase tracking-widest text-brass"
                >
                  Request Specification →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">Finishes</p>
            <h2 className="text-4xl md:text-5xl">
              Eight signature finishes,
              <span className="italic text-brass"> hand-applied.</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {finishes.map((f) => (
              <div key={f.name} className="group">
                <div
                  className="aspect-square w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ background: f.swatch }}
                />
                <p className="mt-4 text-sm uppercase tracking-widest">{f.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
