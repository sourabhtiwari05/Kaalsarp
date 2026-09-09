import { siteConfig } from "@/data/site";

/**
 * Creates a properly encoded WhatsApp URL with a pre-filled message.
 * Fixes the original bug where %0a was used instead of encodeURIComponent().
 */
export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Default greeting message for the floating button */
export const DEFAULT_WA_MESSAGE =
  "नमस्ते पंडित जी, मुझे Dosh Nivaran Puja के बारे में जानकारी चाहिए।";
