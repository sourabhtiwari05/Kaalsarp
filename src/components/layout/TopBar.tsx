"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { CTADynamic } from "@/components/ui/CTADynamic";

export function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("होम");
  const waUrl = createWhatsAppUrl(DEFAULT_WA_MESSAGE);

  const navItems = [
    { name: "होम", href: "/" },
    { name: "सेवाएं", href: "#services" },
    { name: "हमारे बारे में", href: "#about" },
    { name: "वीडियो", href: "#videos" },
    { name: "संपर्क", href: "#contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-maroon-nav text-white border-b border-gold-soft/20 shadow-md font-worksans"
      aria-label="Main navigation"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl flex items-center justify-between py-5 sm:py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image 
            src="/images/omImg.webp" 
            alt="Om Logo" 
            width={40} 
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="font-yatra text-white text-base xs:text-lg sm:text-lg lg:text-xl leading-tight">
            श्री महाकाल दोष निवारण पूजा, उज्जैन
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 mt-1">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`text-sm lg:text-[15px] font-medium transition-colors hover:text-gold-soft flex flex-col items-center ${
                activeItem === item.name ? "text-gold-soft" : "text-white/90"
              }`}
            >
              {item.name}
              {activeItem === item.name && (
                <span className="w-6 h-0.5 bg-gold-soft rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-4 shrink-0">
          <CTADynamic
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="px-4 py-3"
            icon={
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#25D366]" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            }
          >
            WhatsApp पर जुड़ें
          </CTADynamic>
          <CTADynamic
            href={`tel:${siteConfig.phone.primary}`}
            variant="solid"
            className="px-5 py-3"
            icon={
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            }
          >
            {siteConfig.phone.primaryDisplay}
          </CTADynamic>
        </div>

        {/* Mobile menu button (Hamburger) */}
        <div className="flex lg:hidden items-center gap-3">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1.5 text-gold-soft hover:bg-gold-soft/10 rounded-md focus:outline-none transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-60 lg:hidden transition-opacity backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sheet */}
      <div 
        className={`fixed top-0 right-0 h-dvh w-[80%] max-w-sm bg-maroon-nav shadow-2xl z-70 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gold-soft/20">
          <span className="font-yatra text-gold-soft text-xl">मेनू</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto py-4 px-4 gap-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setIsMobileMenuOpen(false);
              }}
              className={`text-lg font-medium py-3 px-2 border-b border-white/5 transition-colors ${
                activeItem === item.name ? "text-gold-soft" : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="mt-8 flex flex-col gap-4">
            <CTADynamic
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="w-full py-3.5"
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#25D366]" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              }
            >
              WhatsApp पर जुड़ें
            </CTADynamic>

            <CTADynamic
              href={`tel:${siteConfig.phone.primary}`}
              variant="solid"
              className="w-full py-3.5 text-base font-bold"
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              }
            >
              {siteConfig.phone.primaryDisplay}
            </CTADynamic>
          </div>
        </div>
      </div>
    </nav>
  );
}
