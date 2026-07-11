import { useState } from "react";

// ⚠️ CHANGE THESE TO YOUR ACTUAL CERTIFICATE IMAGE PATHS IN YOUR ASSETS FOLDER:
import cert1 from "@/assets/certificate1.jpeg";
import cert2 from "@/assets/certificate2.jpeg";
import cert3 from "@/assets/certificate3.jpeg";

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
    description: "Certified conformance with health, safety, and environmental protection standards.",
    image: cert2,
  },
  {
    id: 3,
    title: "SS Premium Grade Assurance",
    description: "Material authenticity and high-durability load testing certification.",
    image: cert3,
  },
];

export function Certifications() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section className="bg-cream py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-must-deep font-semibold bg-mustard/10 px-3 py-1 rounded-full">
            Quality Guaranteed
          </span>
          <h2 className="font-display text-4xl tracking-tight text-ink font-bold mt-4 sm:text-5xl">
            Our Certifications
          </h2>
          <div className="h-1 w-12 bg-mustard mx-auto mt-6 rounded-full" />
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            At DRG, structural reliability and engineering precision are non-negotiable. 
            Our hardware undergoes rigorous testing protocols to hit absolute industrial benchmarks.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer rounded-2xl border border-border/40 bg-white p-4 transition-all duration-500 hover:shadow-xl hover:shadow-ink/5 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Container with Custom Glass Overlay */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted/20 border border-border/20">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Micro-interaction Hover Mask */}
                <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-cream px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink shadow-lg transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="mt-6 pt-2 text-center sm:text-left">
                <h3 className="font-display text-lg font-bold text-ink tracking-tight group-hover:text-mustard-deep transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-normal">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Full Screen Lightbox Modal Layer */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={() => setActiveCert(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-cream text-sm uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur transition-colors"
            onClick={() => setActiveCert(null)}
          >
            ✕ Close
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl bg-white p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Stop click from closing modal
          >
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="w-auto max-h-[75vh] object-contain rounded-lg"
            />
            <div className="px-4 py-3 bg-white border-t border-border/20 text-center">
              <h4 className="font-display text-lg font-bold text-ink">{activeCert.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{activeCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}