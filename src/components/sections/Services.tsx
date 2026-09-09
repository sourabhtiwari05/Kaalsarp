"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 8);
  const hasMore = services.length > 8;

  return (
    <section
      id="services"
      className="py-14 sm:py-16 md:py-20 lg:py-22"
      style={{ background: "linear-gradient(135deg, #2C121C 0%, #4A1826 100%)" }}
    >
      <div className="mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-325">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block font-worksans tracking-[.16em] uppercase text-[0.72rem] font-semibold text-gold-soft mb-3">
            हमारी सेवाएँ
          </span>
          <h2 className="font-yatra text-2xl sm:text-3xl md:text-section text-ivory">
            वैदिक दोष-निवारण पूजा सेवाएँ
          </h2>
          <div className="marigold-divider">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <p className="font-cormorant italic text-lg sm:text-xl text-ivory/75 max-w-[52ch] mx-auto">
            शास्त्रोक्त विधि से सम्पन्न पूजा — सम्पूर्ण सामग्री एवं व्यक्तिगत
            संकल्प सहित
          </p>
        </div>

        {/* Cards: 1→2→3→4 cols */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5.5">
          {displayedServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="bg-[#FDF8EE] border border-[#D4B683] rounded-[20px] overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col shadow-sm"
            >
              {/* Thumbnail */}
              <div className="aspect-16/11 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 25vw"
                />
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 bg-linear-to-b from-[#FDF8EE] to-[#FAF1DE]">
                <h3 className="font-yatra text-lg sm:text-[1.15rem] text-[#4A0D15] mb-2 leading-snug font-bold">
                  {service.titleHi}
                </h3>
                <p className="font-worksans text-[0.9rem] text-[#475569] font-medium leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>
                <Link
                  href={createWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 rounded-full bg-[#4A0D15] text-[#FDF8ED] text-[0.95rem] font-medium hover:bg-[#380910] hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0D15]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4B683"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  पूजा बुक करें
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && !showAll && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gold-soft text-maroon-dark font-semibold hover:bg-gold-soft/90 hover:shadow-brand transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft"
            >
              और देखें (View More)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
