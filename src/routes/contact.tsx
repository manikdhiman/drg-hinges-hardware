import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DRG Hinges & Architectural Hardware" },
      { name: "description", content: "Get in touch with DRG for quotes, samples, custom finishes and technical drawings. We reply within 24 hours." },
      { property: "og:title", content: "Contact DRG Hardware" },
      { property: "og:description", content: "Quotes, samples and specification support." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow mb-6">Get in Touch</p>
          <h1 className="max-w-4xl text-6xl leading-[0.95] md:text-8xl">
            Let's discuss <span className="italic text-gradient-mustard">your project.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl">Speak with our team</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Whether you need a single sample or a full container, our export desk replies within
              24 hours.
            </p>

            <div className="mt-12 space-y-8">
              <ContactBlock label="Workshop" lines={["DRG Hinges & Hardware Architecture", "Plot No. 204, Sector 16, HSIIDC Bhadurgarh,","Haryana - 124507 India"]} />
              <ContactBlock label="Email" lines={["drghinges@rediffmail.com", "www.drghinges.com"]} />
              <ContactBlock label="Phone" lines={["+91 9080222398", "+91 9812540303", "Mon–Sat, 9am – 7pm IST"]} />
            </div>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={onSubmit} className="rounded-lg bg-gradient-cream p-8 shadow-soft md:p-12">
              {sent ? (
                <div className="py-20 text-center">
                  <p className="eyebrow mb-6">Message Sent</p>
                  <h3 className="text-4xl md:text-5xl">Thank you.</h3>
                  <p className="mt-4 text-muted-foreground">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <Field label="Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Company / Practice" name="company" />
                  <Field label="Country" name="country" />
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-mustard-deep">Enquiry</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-mustard"
                      placeholder="Tell us about your project…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.3em] text-cream transition-all hover:bg-mustard hover:text-primary-foreground md:w-auto"
                  >
                    Send Enquiry →
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-mustard-deep">{label}</label>
      <input required type={type} name={name} className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-mustard" />
    </div>
  );
}

function ContactBlock({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      {lines.map((l) => (
        <p key={l} className="text-muted-foreground">{l}</p>
      ))}
    </div>
  );
}
