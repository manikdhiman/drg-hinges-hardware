/**
 * src/components/seo-schema.tsx
 * * WHY THIS IS USED:
 * Schema.org is a shared vocabulary used by Google, Yahoo, and Bing.
 * It translates your web page into structured data so Google knows
 * you are a verified manufacturer in Bahadurgarh, Haryana.
 */

export function BusinessSchema() {
  // 1. Organization & LocalBusiness Schema
  // Helps Google understand your physical factory location and phone numbers
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DRG Hinges by Goel Industries",
    "legalName": "Goel Industries",
    "url": "https://www.drghinges.co.in",
    "logo": "https://www.drghinges.co.in/logo.png",
    "description": "Premium hinges and architectural hardware manufacturer in Bahadurgarh, Haryana. Specializing in ball bearing, butt, and hydraulic soft-close hinges.",
    "telephone": "+91-9080222398",
    "email": "drghinges@rediffmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 204, Sector 16, HSIIDC",
      "addressLocality": "Bahadurgarh",
      "addressRegion": "Haryana",
      "postalCode": "124507",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6924",
      "longitude": "76.9249"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}