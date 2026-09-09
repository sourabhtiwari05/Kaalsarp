import { Yatra_One, Cormorant_Garamond, Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { generateOrganizationSchema, generateFAQSchema } from "@/lib/seo";
import LayoutV1 from "@/components/layout/LayoutV1";

const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["latin", "devanagari"],
  variable: "--font-yatra",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const workSans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-worksans",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    title: "Kaal Sarp Dosh Nivaran Pooja Ujjain | Pandit Dheeraj Sharma",
    description:
      "Ujjain mein Kaal Sarp Dosh, Mangal Dosh, Navgraha Shanti aur anya Vedic Pooja — 20+ varsh anubhav. Call/WhatsApp: 9977999075.",
    url: `${siteConfig.url}/`,
    locale: "hi_IN",
    images: [
      {
        url: `${siteConfig.url}/images/pandit-dheeraj-sharma1.webp`,
        width: 900,
        height: 1200,
        alt: "Pandit Dheeraj Sharma Ji - Vedic Pandit Ujjain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaal Sarp Dosh Nivaran Pooja Ujjain | Pandit Dheeraj Sharma",
    description:
      "Ujjain mein Kaal Sarp Dosh, Mangal Dosh, Navgraha Shanti aur anya Vedic Pooja — 20+ varsh anubhav.",
    images: [`${siteConfig.url}/images/pandit-dheeraj-sharma1.webp`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema();

  return (
    <html
      lang="hi"
      className={`${yatraOne.variable} ${cormorantGaramond.variable} ${workSans.variable}`}
    >
      <body className="font-worksans bg-ivory text-ink antialiased">
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:px-4 focus:py-2 focus:bg-maroon focus:text-ivory focus:rounded-lg focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <LayoutV1>{children}</LayoutV1>
      </body>
    </html>
  );
}
