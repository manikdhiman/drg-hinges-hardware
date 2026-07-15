import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { MapPin, Mail, Globe, Phone, FileText, Clock, ChevronRight } from "lucide-react";

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
      { title: "Contact Us — Goel Industries & Goel Enterprises" },
      { name: "description", content: "Get in touch with DRG for architectural hardware quotes, wholesale custom specifications, and product technical drawings." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeSpec, setActiveSpec] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    category: "Ball Bearing Hinges",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            country: formData.country,
            category: formData.category,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setSent(true);
      setFormData({ name: "", email: "", company: "", country: "", category: "Ball Bearing Hinges", message: "" });
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg("Failed to deliver submission. Please verify your network state and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2B2927] antialiased">
      <SiteHeader />

      {/* --- PREMIUM INTRO BANNER --- */}
      <section className="pt-40 pb-20 border-b border-[#E6E2D8] bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#D49A5B] block mb-4">
            GLOBAL PROJECT LOGISTICS
          </span>
          <h1 className="max-w-5xl text-5xl font-black tracking-tight leading-[1.0] md:text-7xl lg:text-8xl text-[#1C1A19]">
            Let's discuss <span className="italic font-normal text-[#D49A5B]">your project specifications.</span>
          </h1>
        </div>
      </section>

      {/* --- ASYMMETRIC CONTENT BLOCK --- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-16 lg:grid-cols-12 items-start">
          
          {/* LEFT PANEL: CORPORATE IDENTITY HIGHLIGHTS */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#1C1A19] tracking-tight">Speak with our desk</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#4A4540]">
                Whether you need a single configuration sample or an international multi-container assignment, our engineering sales group responds within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <ContactBlock icon={<MapPin />} label="Manufacturing Division" lines={["Goel Industries", "Plot No. 204, Sector 16, HSIIDC Bahadurgarh,", "Haryana - 124507 India"]} />
              <ContactBlock icon={<Mail />} label="Corporate Email" lines={["drghinges@rediffmail.com"]} />
              <ContactBlock icon={<Globe />} label="Official Digital Domain" lines={["www.drghinges.com"]} />
              <ContactBlock icon={<Phone />} label="Communications & Hours" lines={["+91 9080222398", "+91 9812540303"]} footerIcon={<Clock />} footerText="Mon–Sat, 9am – 7pm IST" />
              <ContactBlock icon={<FileText />} label="Taxation Credentials" lines={["GSTIN: 06BMFPG6947L1ZN"]} />
            </div>
          </div>

          {/* RIGHT PANEL: RESTRUCTURED PREMIUM FORM CARD */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E6E2D8] bg-white p-8 shadow-xl shadow-[#1C1A19]/5 md:p-12">
              {sent ? (
                <div className="py-20 text-center space-y-4 animate-in fade-in zoom-in-95 duration-500">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#D49A5B] block">TRANSMISSION COMPLETION</span>
                  <h3 className="text-4xl font-black text-[#1C1A19]">Thank you.</h3>
                  <p className="text-sm text-[#4A4540] max-w-md mx-auto">
                    Your wholesale requirements have been successfully synchronized. An assignment agent will verify technical logs shortly.
                  </p>
                  <button 
                    onClick={() => setSent(false)} 
                    className="mt-6 text-xs uppercase tracking-widest text-[#D49A5B] font-bold hover:underline"
                  >
                    Submit alternative requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Your Name *" name="name" value={formData.name} placeholder="e.g. Rahul Sharma" onChange={handleInputChange} />
                    <Field label="Email Address *" name="email" type="email" value={formData.email} placeholder="e.g. rahul@firm.com" onChange={handleInputChange} />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Company / Practice" name="company" value={formData.company} placeholder="e.g. Goel Enterprises" onChange={handleInputChange} />
                    <Field label="Target Destination Country" name="country" value={formData.country} placeholder="e.g. India" onChange={handleInputChange} />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#D49A5B]">
                      Hardware Series Category *
                    </label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-[#E6E2D8] bg-[#FAF9F5] px-4 py-3.5 text-sm text-[#2B2927] outline-none transition-all focus:border-[#D49A5B] cursor-pointer appearance-none shadow-inner"
                    >
                      {mainCategories.map((cat) => (
                        <option key={cat.name} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#D49A5B]">
                      Detailed Enquiry Specifications *
                    </label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-[#E6E2D8] bg-[#FAF9F5] px-4 py-3.5 text-sm text-[#2B2927] placeholder-[#A69E94] outline-none transition-all focus:border-[#D49A5B] resize-none shadow-inner leading-relaxed"
                      placeholder="Specify size counts, heavy-duty operational demands, or surface finish configuration parameters..."
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-600 font-medium tracking-wide">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#1C1A19] px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#FAF9F5] transition-all hover:bg-[#D49A5B] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#1C1A19]/10"
                  >
                    {loading ? "Transmitting Logs..." : "Send Assignment Request →"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* --- INTEGRATED FULL-WIDTH SIZE GUIDE REGION --- */}
      <section className="bg-white border-t border-[#E6E2D8] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#D49A5B] block mb-2">
              TECHNICAL METRICS REFERENCE
            </span>
            <h3 className="text-3xl font-black text-[#1C1A19] tracking-tight">Certified Dimensional Matrices</h3>
            <p className="mt-2 text-sm text-[#4A4540]">
              Select a hardware product line below to query sizing data matching international testing provisions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mainCategories.map((cat) => {
              const isOpen = activeSpec === cat.name;
              return (
                <div key={cat.name} className="relative">
                  <button
                    onClick={() => setActiveSpec(isOpen ? null : cat.name)}
                    className={`w-full text-left flex items-center justify-between gap-4 p-5 rounded-xl border transition-all duration-300 ${
                      isOpen 
                        ? "border-[#D49A5B] bg-[#FAF9F5] shadow-md" 
                        : "border-[#E6E2D8] bg-white hover:border-[#D49A5B]/60"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1A19]">{cat.name}</span>
                    <ChevronRight className={`w-4 h-4 text-[#D49A5B] transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
                  </button>

                  {/* Dropdown Specs Info Tray */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="p-4 rounded-xl border border-[#E6E2D8] bg-[#FAF9F5] text-xs leading-relaxed text-[#2B2927] font-medium shadow-inner">
                      <p className="text-[9px] font-mono font-bold text-[#D49A5B] uppercase tracking-wider mb-1.5">Sizing Framework:</p>
                      {cat.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// Fixed Outlined Input Wrapper Component
function Field({ 
  label, 
  name, 
  type = "text", 
  value, 
  placeholder,
  onChange 
}: { 
  label: string; 
  name: string; 
  type?: string; 
  value: string; 
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#D49A5B] pl-0.5">
        {label}
      </label>
      <input 
        required 
        type={type} 
        name={name} 
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-xl border border-[#E6E2D8] bg-[#FAF9F5] px-4 py-3.5 text-sm text-[#2B2927] placeholder-[#A69E94] outline-none transition-all focus:border-[#D49A5B] shadow-inner" 
      />
    </div>
  );
}

// Restructured High-Contrast Block Info Layout
function ContactBlock({ 
  icon, 
  label, 
  lines, 
  footerIcon, 
  footerText 
}: { 
  icon: React.ReactNode; 
  label: string; 
  lines: string[]; 
  footerIcon?: React.ReactNode; 
  footerText?: string;
}) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-[#E6E2D8] bg-white transition-all hover:shadow-md hover:shadow-[#1C1A19]/2">
      <div className="text-[#D49A5B] mt-0.5 shrink-0 [&>svg]:w-5 [&>svg]:h-5">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#A69E94]">
          {label}
        </h4>
        {lines.map((line, i) => (
          <p key={i} className="text-sm font-semibold text-[#1C1A19] leading-tight">
            {line}
          </p>
        ))}
        {footerText && (
          <div className="flex items-center gap-1.5 text-xs text-[#4A4540] font-normal pt-1.5 mt-1 border-t border-[#E6E2D8]/60 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:text-[#D49A5B]">
            {footerIcon}
            <span>{footerText}</span>
          </div>
        )}
      </div>
    </div>
  );
}