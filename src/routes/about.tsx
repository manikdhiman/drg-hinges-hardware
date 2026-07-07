import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import craftImg from "@/assets/craft.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DRG Hinges & Architectural Hardware" },
      {
        name: "description",
        content:
          "Three decades of manufacturing architectural hardware in Aligarh, India. Learn about DRG's craft, values and global reach.",
      },
      { property: "og:title", content: "About DRG Hardware" },
      { property: "og:description", content: "Three decades of hinges, handles and ironmongery." },
    ],
  }),
  component: About,
});

const timeline = [
  { y: "1992", t: "Foundation", d: "DRG founded in Aligarh — the historic heart of India's hardware industry." },
  { y: "2001", t: "First Export", d: "Shipped our first container to the United Kingdom." },
  { y: "2010", t: "ISO 9001", d: "Certified for quality management systems across all operations." },
  { y: "2016", t: "New Foundry", d: "Commissioned an in-house brass foundry to control every stage." },
  { y: "2022", t: "30 Countries", d: "Serving architects and distributors across five continents." },
];

const values = [
  { t: "Craft over Volume", d: "We would rather ship one hundred perfect hinges than one thousand adequate ones." },
  { t: "Material Honesty", d: "Solid brass. Real steel. No plating over pot metal — ever." },
  { t: "Lifetime Warranty", d: "Every mechanical piece is guaranteed for the life of the installation." },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative border-b border-border pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow mb-6">Since 1992</p>
          <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-7xl lg:text-[5rem]">
            A family of makers,
            <span className="italic text-gradient-brass"> in the city of hardware.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            DRG began in a small workshop in Aligarh — a city that has forged locks and hinges for over four
            centuries. Three decades later, our craft remains rooted in the same soil, refined by machines,
            but always guided by hand.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={craftImg} alt="DRG workshop" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-brass/20" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Hardware is architecture
              <span className="italic text-brass"> at its smallest scale.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              A door is a threshold. The hinge is what makes it move; the handle is where the building meets
              the hand. We build these small things with the same seriousness a good architect brings to a
              facade — because these are the details a building is remembered by.
            </p>
            <div className="mt-10 space-y-6">
              {values.map((v) => (
                <div key={v.t} className="border-l-2 border-brass pl-6">
                  <h3 className="text-xl">{v.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow mb-4">Chronology</p>
          <h2 className="max-w-2xl text-4xl md:text-5xl lg:text-6xl">
            Three decades,
            <span className="italic text-brass"> five milestones.</span>
          </h2>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-5">
            {timeline.map((t) => (
              <div key={t.y} className="bg-background p-8">
                <p className="font-display text-4xl text-brass">{t.y}</p>
                <h3 className="mt-6 text-xl">{t.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={heroImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center md:px-10">
          <h2 className="text-4xl md:text-6xl">
            Interested in visiting
            <span className="italic text-gradient-brass"> the workshop?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Architects and buyers are welcome. We'll walk you from the foundry to the polish room.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-brass px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground hover:bg-brass-glow"
          >
            Arrange a Visit →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
