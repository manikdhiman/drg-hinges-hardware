import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState } from "react";

// The official product range details as found on the website home page
const mainCategories = [
  { name: "Ball Bearing Hinges", desc: "4\" x 3\" x 2.5mm | 4\" x 3\" x 3.0mm | 5\" x 3\" x 3.0mm" },
  { name: "Butt Hinges", desc: "3\" x 2\" x 2.0mm | 4\" x 2.5\" x 2.5mm | 4\" x 3\" x 2.5mm" },
  { name: "Tower Bolts", desc: "Hex Round | Xylo | Pyramid | Royale | Sizes: 4\"-36\"" },
  { name: "Aldrops", desc: "8 Inch | 10 Inch | 12 Inch | 14 Inch | 16 Inch | 24 Inch" },
  { name: "Hydraulic Hinges", desc: "Full Overlay | Half Overlay | Inset (Soft Close)" },
  { name: "Telescopic Drawer Slides", desc: "10 Inch (250mm) to 22 Inch (550mm) Soft Close" },
  { name: "Kitchen Accessories", desc: "Space-saving multi-tier smart storage solutions" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DRG Hinges — Request Architectural Hardware Quotes" },
      { name: "description", content: "Submit quotes for Ball Bearing, Concealed, or Hydraulic Hinges, Tower Bolts, and Drawer Slides." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Ball Bearing Hinges",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [activeSpec, setActiveSpec] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* --- Page Header Section --- */}
      <section className="pt-40 pb-24 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow mb-6">Connect With Us</p>
          <h1 className="max-w-4xl text-6xl leading-[0.95] md:text-8xl">
            Let's build <span className="italic text-gradient-mustard">your project.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Submit your hardware inquiry below or explore our certified premium production specs to find the ideal fittings for your architectural designs.
          </p>
        </div>
      </section>

      {/* --- Unified Content Canvas Section --- */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-16 lg:grid-cols-12 items-start">
          
          {/* Left Column: Form Canvas (Replaced old form layout) */}
          <div className="lg:col-span-7 bg-[#FAF9F5] border border-border/40 rounded-2xl p-10 shadow-lg shadow-ink/5">
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-10 tracking-tight leading-tight">
              Request a Hardware <span className="italic text-gradient-mustard block mt-1">Inquiry.</span>
            </h2>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="field-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="field-input focus:border-mustard"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="field-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="field-input focus:border-mustard"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="field-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="field-input focus:border-mustard"
                  placeholder="+91 99999 99999"
                />
              </div>

              <div>
                <label className="field-label">Enquiry Category *</label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="field-input focus:border-mustard cursor-pointer"
                >
                  {mainCategories.map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="field-label">Message Requirements *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="field-input focus:border-mustard resize-none"
                  placeholder="Outline your detailed hardware needs or project specs here..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.3em] text-cream hover:bg-mustard transition-all duration-300"
              >
                Submit Enquiry →
              </button>
            </form>
          </div>

          {/* Right Column: Specification Interactive Tooltips Section */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-ink">Certified Hardware Specs</h3>
            <p className="text-sm leading-relaxed text-muted-foreground pb-4 border-b border-border/40">
              Hover or click below to view the official industrial specifications and sizing parameters for each premium hardware series as displayed on our catalog.
            </p>
            
            <div className="space-y-4">
              {mainCategories.map((cat) => (
                <div key={cat.name} className="relative group/size">
                  {/* The interactive "Size Chart" style button for each category */}
                  <button 
                    onClick={() => setActiveSpec(activeSpec === cat.name ? null : cat.name)}
                    className="w-full inline-flex items-center justify-between gap-2 rounded-full border border-border bg-white px-6 py-4 text-xs uppercase tracking-[0.25em] text-ink hover:bg-muted/30 transition-all duration-300"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-mustard-deep font-semibold">Size Chart →</span>
                  </button>
                  
                  {/* Tooltip Popup Layer (Pure CSS activation) */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-30 w-64 p-5 rounded-xl border border-border bg-white shadow-xl opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-out group-hover/size:opacity-100 group-hover/size:scale-100 ${activeSpec === cat.name ? 'opacity-100 scale-100 pointer-events-auto' : ''}`}>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-mustard-deep font-bold mb-3 pb-1.5 border-b border-border">
                      Available Sizing
                    </p>
                    <p className="text-xs font-medium text-ink/90 leading-relaxed">
                      {cat.desc}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                  }
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}