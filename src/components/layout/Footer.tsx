import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-night text-ivory/60 py-8 sm:py-8.5 text-center text-sm font-worksans">
      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-285">
        <span className="font-yatra text-gold-soft text-[1.1rem] block mb-2">
          {siteConfig.name}
        </span>
        <p>
          {siteConfig.pandit.nameHi} • {siteConfig.address.full} •{" "}
          <Link
            href={`tel:${siteConfig.phone.primary}`}
            className="hover:text-gold-soft transition-colors"
          >
            +91 {siteConfig.phone.primaryDisplay}
          </Link>{" "}
          /{" "}
          <Link
            href={`tel:${siteConfig.phone.secondary}`}
            className="hover:text-gold-soft transition-colors"
          >
            +91 {siteConfig.phone.secondaryDisplay}
          </Link>
        </p>
        <p className="mt-1.5">© {year}. All rights reserved.</p>
      </div>
    </footer>
  );
}
