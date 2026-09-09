"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const waUrl = createWhatsAppUrl(DEFAULT_WA_MESSAGE);

  return (
    <div className="fixed z-100 bottom-4 right-4 sm:bottom-5.5 sm:right-5.5 flex flex-row-reverse items-center gap-3">
      <Link
        href={`tel:${siteConfig.phone.primary}`}
        aria-label="Call us"
        className="
          rounded-full flex items-center justify-center
          bg-[#2563EB]
          w-13 h-13 sm:w-15 sm:h-15
          shadow-[0_10px_26px_rgba(37,99,235,0.45)]
          animate-call-pulse motion-reduce:animate-none
          hover:brightness-105 transition-[filter] duration-150
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563EB]/50
        "
      >
        <Phone
          className="w-6.5 h-6.5 sm:w-7 sm:h-7 text-white"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </Link>
      <Link
        href="https://www.instagram.com/dheerajsharma2043/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram पर संपर्क करें"
        className="
          rounded-full flex items-center justify-center
          bg-linear-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]
          w-13 h-13 sm:w-15 sm:h-15
          shadow-[0_10px_26px_rgba(225,48,108,0.45)]
          hover:brightness-105 transition-[filter] duration-150
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FD1D1D]/50
        "
      >
        <svg
          className="w-6.5 h-6.5 sm:w-7 sm:h-7 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </Link>
    <Link
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp पर संपर्क करें"
      className="
        rounded-full flex items-center justify-center
        bg-[#25D366]
        w-13 h-13 sm:w-15 sm:h-15
        shadow-wa
        animate-wa-pulse motion-reduce:animate-none
        hover:brightness-105 transition-[filter] duration-150
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50
      "
    >
      <svg
        className="w-6.5 h-6.5 sm:w-7 sm:h-7 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    </Link>
    </div>
  );
}
