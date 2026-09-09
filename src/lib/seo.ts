import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { faqItems } from "@/data/faq";

/** ReligiousOrganization JSON-LD — all URLs are absolute */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: siteConfig.nameEn,
    image: `${siteConfig.url}/images/pandit-dheeraj-sharma1.webp`,
    url: siteConfig.url,
    telephone: [siteConfig.phone.primary, siteConfig.phone.secondary],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.address.locality,
    priceRange: "Contact for pricing",
    founder: {
      "@type": "Person",
      name: siteConfig.pandit.name,
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
      },
    })),
  };
}

/** FAQPage JSON-LD — generated from the same faqItems used by UI */
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
