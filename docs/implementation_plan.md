# Rebuild kalsharppooja.in as a Production-Ready Next.js Application

Rebuild the existing single-page static HTML website ([index.html](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html)) into a modular, SEO-optimized, accessible, mobile-first Next.js application — preserving the exact visual identity, content, and conversion flow.

---

## User Review Required

> [!IMPORTANT]
> **Project location**: The Next.js app will be created at `d:\Cohort 2.0 Sheriyans Dev\Projects\kalsharppooja.in\` (the workspace root). The existing `website/` folder containing the original `index.html` and `images/` will be preserved as reference. The new Next.js project files (`src/`, `public/`, `package.json`, etc.) will live alongside it.

> [!WARNING]
> **Pitra Dosh image**: `pitra-dosh.webp` exists in the images folder but is not used in the current HTML. The plan adds a **Pitra Dosh Puja** service card using this image (it's a legitimate Vedic service the pandit offers). Please confirm this is acceptable, or we'll remove the unused image instead.

> [!IMPORTANT]
> **No content invention**: All Hindi text, phone numbers, service descriptions, and credentials are taken verbatim from the existing `index.html`. Where exact wording is needed and not available, `TODO` markers will be used instead of fabricated content.

## Open Questions

1. **Domain confirmation**: The canonical URL from the original is `https://kaalsarpdoshnivaranujjain.com/` — should we continue using this, or has the domain changed?
2. **Additional videos**: The original has a duplicate YouTube video ID (`rDZ8237RUyM`). Should we keep only 3 unique videos, or do you have a 4th unique video ID to replace the duplicate?
3. **Favicon/Logo**: Is there a logo or icon file to use as favicon? If not, I'll generate one matching the maroon/gold branding.

---

## Proposed Changes

### Phase 1 — Project Setup & Foundation

#### [NEW] Next.js project initialization

- Initialize a Next.js project at the workspace root using `npx create-next-app@latest`
- Configuration: **App Router**, **TypeScript**, **Tailwind CSS**, **ESLint**, `src/` directory, import aliases
- Install additional dependencies: `lucide-react`
- Initialize shadcn/ui for the component system

#### [NEW] `tailwind.config.ts` — Extended Theme

Extend the Tailwind theme to expose all design tokens as first-class utilities:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // ── Breakpoints (mobile-first) ──────────────────────────────
      screens: {
        xs: "375px", // Small phones (iPhone SE, Android)
        sm: "640px", // Large phones / phablets
        md: "768px", // Tablets (iPad portrait)
        lg: "1024px", // Tablets landscape / small laptops
        xl: "1280px", // Laptops / desktops
        "2xl": "1440px", // Large desktops / 4K
      },
      // ── Brand Colors ────────────────────────────────────────────
      colors: {
        ivory: { DEFAULT: "#FBF3E4", deep: "#F3E6CB" },
        maroon: { DEFAULT: "#7A1F2B", deep: "#5A1420" },
        gold: { DEFAULT: "#C9962C", soft: "#E8C978", dark: "#a97a1f" },
        night: "#2C121C",
        vermillion: "#C1432B",
        teal: { DEFAULT: "#1F6F5C", soft: "#4FA88F" },
        ink: "#2A1D14",
      },
      // ── Font Families ───────────────────────────────────────────
      fontFamily: {
        yatra: ["var(--font-yatra)", "cursive"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        worksans: ["var(--font-worksans)", "sans-serif"],
      },
      // ── Fluid Font Sizes ────────────────────────────────────────
      fontSize: {
        "hero-xl": ["clamp(1.8rem, 4.5vw, 3.1rem)", { lineHeight: "1.2" }],
        section: ["clamp(1.4rem, 3vw, 2.2rem)", { lineHeight: "1.25" }],
      },
      // ── Custom Shadows ──────────────────────────────────────────
      boxShadow: {
        brand: "0 18px 40px rgba(90,20,32,0.14)",
        card: "0 8px 20px rgba(90,20,32,0.06)",
        cta: "0 10px 24px rgba(122,31,43,0.35)",
        wa: "0 10px 26px rgba(37,211,102,0.45)",
      },
      // ── Border Radius ───────────────────────────────────────────
      borderRadius: {
        arch: "170px 170px 18px 18px", // temple arch top
      },
      // ── Animations ──────────────────────────────────────────────
      keyframes: {
        spinCW: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinCCW: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        waPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37,211,102,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-cw": "spinCW 40s linear infinite",
        "spin-ccw": "spinCCW 60s linear infinite",
        "wa-pulse": "waPulse 2.4s infinite",
        "fade-up": "fadeUp 0.5s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
```

#### [NEW] `src/app/globals.css`

```css
@import "tailwindcss";

/* ── Design Tokens (also available as Tailwind utilities above) ── */
:root {
  --ivory: #fbf3e4;
  --ivory-deep: #f3e6cb;
  --maroon: #7a1f2b;
  --maroon-deep: #5a1420;
  --gold: #c9962c;
  --gold-soft: #e8c978;
  --night: #2c121c;
  --accent-teal: #1f6f5c;
  --accent-teal-soft: #4fa88f;
  --vermillion: #c1432b;
  --ink: #2a1d14;
  --line: rgba(122, 31, 43, 0.18);
  --shadow: 0 18px 40px rgba(90, 20, 32, 0.14);
}

/* ── Base ─────────────────────────────────────────────────────── */
html {
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden;
  background: var(--ivory);
  color: var(--ink);
}
img {
  max-width: 100%;
  display: block;
}

/* ── Reduced Motion ──────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation: none !important;
    transition: none !important;
  }
}

/* ── Marigold Divider ─────────────────────────────────────────── */
.marigold-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 8px 0 36px;
}
.marigold-divider .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}
```

#### [NEW] `src/app/layout.tsx`

- Configure `next/font/google` for all three font families:
  - **Yatra One** (weight 400) — Hindi display headings
  - **Cormorant Garamond** (weights 500, 600, 700) — serif accent/lead text
  - **Work Sans** (weights 400, 500, 600, 700) — body/UI text
- Set `<html lang="hi">`
- Apply font CSS variables to the body
- Include `<TopBar />` and `<Footer />` as layout-level components
- Include `<FloatingWhatsApp />` as a layout-level component
- Include skip-to-content link: `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to main content</a>`

#### [NEW] `public/images/`

- Copy all 13 images from [website/images/](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/images) into `public/images/`
- All images remain as JPEG (Next.js `<Image>` automatically serves WebP/AVIF via its optimizer)

---

## Responsive Design System (Tailwind CSS)

This section defines exactly how every component and section behaves at each breakpoint, using **Tailwind's mobile-first utility classes**. The breakpoints are:

| Prefix   | Min-width | Target Devices                                     |
| -------- | --------- | -------------------------------------------------- |
| _(none)_ | `0px`     | All — default mobile styles                        |
| `xs:`    | `375px`   | Standard small phones (iPhone SE, Moto G)          |
| `sm:`    | `640px`   | Large phones / phablets (iPhone Pro Max, Galaxy S) |
| `md:`    | `768px`   | Tablets portrait (iPad, Surface)                   |
| `lg:`    | `1024px`  | Tablets landscape / small laptops                  |
| `xl:`    | `1280px`  | Laptops / standard desktops                        |
| `2xl:`   | `1440px`  | Wide monitors / large screens                      |

> [!IMPORTANT]
> All Tailwind classes are written **mobile-first** (smallest screen first, then override upward). Never write desktop-only classes without a mobile fallback.

---

### Responsive: Global Container / Wrapper

A reusable `.wrap` concept implemented as a Tailwind component:

```tsx
// src/components/ui/Container.tsx
export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4", // mobile: 16px padding
        "xs:px-5", // 375px+: 20px
        "sm:px-6", // 640px+: 24px
        "lg:px-8", // 1024px+: 32px
        "xl:max-w-2xl", // cap at 1140px on large screens
        "2xl:max-w-7xl", // slightly wider on 1440p
        className,
      )}
    >
      {children}
    </div>
  );
}
```

---

### Responsive: Section Padding

Every `<section>` uses the same vertical rhythm pattern:

```tsx
// Tailwind classes applied to every <section>
"py-14"; // mobile: 56px top/bottom
"sm:py-16"; // 640px+: 64px
"md:py-20"; // 768px+: 80px
"lg:py-22"; // 1024px+: 88px (original design)
```

---

### Responsive: Typography Scale

| Element        | Mobile           | sm               | md              | lg              | xl   |
| -------------- | ---------------- | ---------------- | --------------- | --------------- | ---- |
| H1 (hero)      | `text-3xl`       | `text-4xl`       | `text-5xl`      | `text-[3.1rem]` | same |
| H2 (section)   | `text-2xl`       | `text-3xl`       | `text-[2.2rem]` | same            | same |
| H3 (card)      | `text-base`      | same             | same            | same            | same |
| Lead paragraph | `text-lg`        | `text-xl`        | `text-[1.3rem]` | same            | same |
| Body text      | `text-sm`        | `text-[0.95rem]` | same            | same            | same |
| Eyebrow        | `text-[0.72rem]` | same             | same            | same            | same |
| Button         | `text-sm`        | `text-[0.9rem]`  | same            | same            | same |

Use `clamp()` via the custom `text-hero-xl` and `text-section` Tailwind tokens (defined above) where fluid scaling is preferred.

---

### Responsive: TopBar

```
Mobile (0–639px)
  - Single row: brand left | action buttons right
  - Brand: truncate text, reduced font size (`text-[0.9rem]`)
  - Buttons: compact padding (`px-3 py-2 text-xs`)
  - Hide full phone number text; show icon only if space is tight

sm (640px+)
  - Brand full text visible
  - Buttons: normal padding (`px-4 py-2 text-sm`)

lg (1024px+)
  - Buttons: full padding (`px-5 py-2.5 text-[0.9rem]`)
  - Brand: larger (`text-[1.1rem]`)
```

Tailwind classes example on the wrapper:

```tsx
<nav className="sticky top-0 z-50 bg-night text-ivory">
  <div className="wrap flex items-center justify-between py-2.5 sm:py-3">
    <span className="font-yatra text-gold-soft text-[0.9rem] sm:text-[1.05rem] lg:text-[1.1rem] truncate max-w-[55%] sm:max-w-none">
      श्री महाकाल दोष निवारण पूजा, उज्जैन
    </span>
    <div className="flex gap-2 sm:gap-2.5">{/* WhatsApp & Call buttons */}</div>
  </div>
</nav>
```

---

### Responsive: Hero Section

```
Mobile (0–767px)
  - Single column layout (text above, image below)
  - Text: center-aligned
  - Stats row: centered, flex-wrap
  - Arch frame: max-width 280px, centered, top margin
  - Orbit animation: HIDDEN (display:none via `md:hidden` inverted)
  - CTA buttons: full width stacked OR side-by-side small
  - Padding: py-14

md (768px+)
  - Two-column grid: `grid-cols-[1fr_auto]`
  - Text: left-aligned
  - Arch frame: visible on right
  - Orbit: still hidden
  - CTA row: flex-row

lg (1024px+)
  - Orbit animation SHOWN (`hidden md:block lg:block`)
  - Grid columns: `grid-cols-[1.1fr_0.9fr]`
  - Arch frame: max-width 340px
  - Hero padding: py-[72px] to py-[90px]

xl/2xl (1280px+)
  - More horizontal breathing room via container max-width
  - Stats: gap-7
```

Tailwind grid example:

```tsx
<div className="
  grid grid-cols-1 gap-8 items-center text-center
  md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:text-left
  lg:gap-14
">
```

Orbit visibility:

```tsx
<div className="absolute inset-0 pointer-events-none z-1 hidden lg:block motion-reduce:hidden">
  {/* orbit rings */}
</div>
```

---

### Responsive: Problem Cards

```
Mobile (0–639px):  1 column   → grid-cols-1
sm  (640px+):      2 columns  → sm:grid-cols-2
lg  (1024px+):     3 columns  → lg:grid-cols-3
```

```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
```

---

### Responsive: Why Ujjain

```
Mobile (0–767px)
  - Stack: image on top, text below (single column)
  - Image: aspect-square, full width, max-width 400px centered

md (768px+)
  - Two columns: `grid-cols-[0.8fr_1.2fr]`
  - Image left, text right
  - Image: aspect-square (maintains proportion)

lg (1024px+)
  - Gap increases to `gap-14`
```

```tsx
<div className="grid grid-cols-1 gap-8 items-center md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-14">
```

---

### Responsive: Pandit Bio

```
Mobile (0–767px)
  - Stack: circular image top center, text below center
  - Image: max-width 220px, centered
  - Credentials pills: centered flex-wrap
  - Text: center-aligned

md (768px+)
  - Two columns: `grid-cols-[0.75fr_1.25fr]`
  - Image left, text right
  - Text: left-aligned
  - Pills: left-aligned

lg (1024px+)
  - Image max-width 300px
```

```tsx
<div className="grid grid-cols-1 gap-10 items-center text-center md:grid-cols-[0.75fr_1.25fr] md:gap-14 md:text-left">
```

---

### Responsive: Service Cards

```
Mobile (0–639px):  1 column   → grid-cols-1
sm  (640px+):      2 columns  → sm:grid-cols-2
lg  (1024px+):     3 columns  → lg:grid-cols-3
xl  (1280px+):     4 columns  → xl:grid-cols-4
```

```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5.5">
```

Service card image thumbnail:

```tsx
<div className="aspect-16/10 relative overflow-hidden">
  <Image
    src={service.image}
    alt={service.alt}
    fill
    className="object-cover"
    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 25vw"
    loading="lazy"
  />
</div>
```

---

### Responsive: Video Gallery

```
Mobile (0–559px)
  - 1 column: cards stack vertically
  - Portrait cards: width 80%, max-width 280px, centered
  - Landscape card: width 92%

sm (560px–899px)
  - 2-column flex-wrap
  - Portrait: width 44%
  - Landscape: width 92%

lg (900px+)
  - Max-width 1000px container
  - Portrait cards: width 230px fixed
  - Landscape card: width 400px
  - Flex-wrap centered row
```

```tsx
<div className="flex flex-wrap justify-center gap-5 sm:gap-6">
  {/* portrait card */}
  <div className="w-[80%] max-w-70 sm:w-[44%] lg:w-57.5">
  {/* landscape card */}
  <div className="w-[92%] lg:w-100">
```

---

### Responsive: Benefits Grid

```
Mobile (0–639px):  1 column   → grid-cols-1
sm  (640px+):      2 columns  → sm:grid-cols-2
lg  (1024px+):     3 columns  → lg:grid-cols-3
xl  (1280px+):     4 columns  → xl:grid-cols-4
```

```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
```

---

### Responsive: Booking Steps

```
Mobile (0–639px)
  - Grid: `grid-cols-[44px_1fr]` — smaller icon
  - Full width, single column
  - Icon circle: 44×44px

sm (640px+)
  - Grid: `grid-cols-[56px_1fr]`
  - Icon circle: 52×52px
  - Max-width 700px, centered
```

```tsx
<div className="grid grid-cols-[44px_1fr] gap-4 sm:grid-cols-[56px_1fr] sm:gap-5">
```

---

### Responsive: FAQ

```
Mobile
  - Full width, single column
  - Padding: px-4 py-4
  - Summary: padding px-4 py-4

sm (640px+)
  - Max-width 760px, mx-auto
  - Summary: padding px-5 py-[18px]

All screens
  - One question at a time expandable
  - No multi-column layout (focus is reading)
```

```tsx
<div className="max-w-full sm:max-w-190 mx-auto space-y-3">
  <details className="bg-ivory border border-line rounded-2xl overflow-hidden group">
    <summary className="flex items-center justify-between px-4 py-4 sm:px-5.5 sm:py-4.5 cursor-pointer font-semibold text-maroon-deep">
```

---

### Responsive: Contact Form

```
Mobile
  - Full width box, px-4 py-6
  - Input padding: px-4 py-3
  - Submit: full width

sm (640px+)
  - Max-width 640px, centered
  - Box padding: px-[34px] py-[38px]
  - Input padding: px-4 py-[13px]
```

```tsx
<div className="mx-auto max-w-full sm:max-w-160 bg-ivory-deep border border-line rounded-2xl p-6 sm:p-[38px_34px] shadow-brand">
```

---

### Responsive: Final CTA

```
Mobile
  - Text: center, single column
  - CTA buttons: stacked column → flex-wrap row
  - Padding: py-14

sm (640px+)
  - CTA row: flex-row, centered, gap-3

lg (1024px+)
  - Padding: py-22
```

```tsx
<div className="flex flex-col gap-3 items-center xs:flex-row xs:flex-wrap xs:justify-center sm:gap-3.5">
```

---

### Responsive: Footer

```
All screens
  - Center-aligned text
  - Stack: brand → address → copyright
  - Padding: py-8 sm:py-[34px]
```

---

### Responsive: Floating WhatsApp Button

```
Mobile
  - Width/height: 52×52px
  - Position: bottom-4 right-4
  - SVG icon: 26×26px

sm (640px+)
  - Width/height: 60×60px
  - Position: bottom-5.5 right-5.5
  - SVG icon: 30×30px
```

```tsx
<a
  href={whatsappUrl}
  aria-label="WhatsApp पर संपर्क करें"
  className="
    fixed z-100 rounded-full flex items-center justify-center
    bg-[#25D366] shadow-wa
    w-13 h-13 bottom-4 right-4
    sm:w-15 sm:h-15 sm:bottom-5.5 sm:right-5.5
    animate-wa-pulse motion-reduce:animate-none
    hover:brightness-105 transition-[filter]
  "
>
  <svg className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5" .../>
</a>
```

---

### Responsive: Temple Arch Frame (Pandit Image)

```
Mobile
  - max-width: 240px, centered
  - margin-top: 24px (stacked below text)

xs (375px+)
  - max-width: 260px

md (768px+)
  - margin-top: 0 (side by side)
  - max-width: 280px

lg (1024px+)
  - max-width: 340px
```

```tsx
<div className="relative w-full max-w-60 xs:max-w-65 md:max-w-70 lg:max-w-85 mx-auto mt-6 md:mt-0 aspect-3/4 ...">
```

---

### Responsive: Credential Pills (Bio Section)

```
Mobile
  - flex-wrap, justify-center
  - gap-2

md (768px+)
  - justify-start
  - gap-3.5
```

```tsx
<div className="flex flex-wrap gap-2 justify-center md:justify-start md:gap-3.5 mt-5">
```

---

### Tailwind Responsive Pattern Reference

A quick reference for the most commonly repeated responsive patterns in this project:

| Pattern                  | Classes                                                    |
| ------------------------ | ---------------------------------------------------------- |
| Section padding          | `py-14 sm:py-16 md:py-20 lg:py-22`                         |
| 1→2→3 grid               | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`                |
| 1→2→4 grid               | `grid-cols-1 sm:grid-cols-2 xl:grid-cols-4`                |
| 1→2→3→4 grid             | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` |
| Center→left text         | `text-center md:text-left`                                 |
| Stack→row                | `flex-col sm:flex-row`                                     |
| Section heading size     | `text-2xl sm:text-3xl md:text-section`                     |
| Hero H1 size             | `text-3xl sm:text-4xl md:text-hero-xl`                     |
| Hide on mobile           | `hidden lg:block`                                          |
| Show only mobile         | `block lg:hidden`                                          |
| Hide orbit on mobile     | `hidden lg:block motion-reduce:hidden`                     |
| Full-width CTA on mobile | `w-full sm:w-auto`                                         |
| Compact padding mobile   | `px-3 py-2 sm:px-5 sm:py-2.5`                              |
| Container                | `mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-285` |
| No horizontal scroll     | `overflow-x-hidden` on body                                |

---

### Phase 2 — Data Layer & Utilities

#### [NEW] `src/data/site.ts`

Centralized site configuration — single source of truth for all contact info, URLs, and branding:

```ts
export const siteConfig = {
  name: "श्री महाकाल दोष निवारण पूजा, उज्जैन",
  nameEn: "Shree Mahakal Dosh Nivaran Pooja, Ujjain",
  description:
    "Ujjain mein Kaal Sarp Dosh, Mangal Dosh, Navgraha Shanti, Rudrabhishek aur Vastu Dosh Nivaran Puja — Pandit Dheeraj Sharma, 20+ varsh anubhav.",
  url: "https://kaalsarpdoshnivaranujjain.com",
  phone: { primary: "+919977999075", secondary: "+917999065420" },
  whatsapp: "919977999075",
  pandit: {
    name: "Pandit Dheeraj Sharma",
    nameHi: "पंडित धीरज शर्मा जी",
    experience: "20+",
  },
  address: { locality: "Ujjain", region: "Madhya Pradesh", country: "IN" },
};
```

#### [NEW] `src/data/services.ts`

Array of 11 service objects (10 existing + 1 new Pitra Dosh card using the unused image). Each entry:

```ts
{
  id: "kaal-sarp-dosh",
  title: "Kaal Sarp Dosh Puja",
  titleHi: "काल सर्प दोष पूजा",
  description: "कुंडली में कालसर्प दोष होने पर वैदिक विधि से पूजा सम्पन्न कराई जाती है।",
  image: "/images/kaal-sarp-dosh.webp",
  alt: "Kaal Sarp Dosh Nivaran Puja Ujjain by Pandit Dheeraj Sharma",
  whatsappMessage: "नमस्ते पंडित जी, मुझे काल सर्प दोष पूजा के बारे में जानकारी चाहिए।",
}
```

All titles, descriptions, and alt text taken verbatim from the original [index.html lines 735–815](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L735-L815).

#### [NEW] `src/data/faq.ts`

Array of 5 FAQ items (exact Hindi Q&A from original [lines 905–924](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L905-L924)). Used for **both** UI rendering and JSON-LD generation — no duplication.

#### [NEW] `src/data/videos.ts`

Array of **3 unique** YouTube video entries (fixing the duplicate):

| #   | Video ID      | Type      | Label              |
| --- | ------------- | --------- | ------------------ |
| 1   | `rDZ8237RUyM` | portrait  | पूजा अनुष्ठान झलक  |
| 2   | `SigQw9bAXtU` | portrait  | पूजा अनुष्ठान झलक  |
| 3   | `RgAn3B9asMM` | landscape | सम्पूर्ण पूजा विधि |

#### [NEW] `src/data/problems.ts`

Array of 6 problem-identification cards (from original [lines 679–684](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L679-L684)):

1. ज्योतिषाचार्य ने Kaal Sarp Dosh बताया है
2. Mangal Dosh के कारण विवाह में विलम्ब हो रहा है
3. वास्तु दोष के कारण घर/व्यापार में परेशानी है
4. बार-बार कार्यों में रुकावट महसूस हो रही है
5. Navgraha Shanti Puja की आवश्यकता बताई गई है
6. दोष निवारण हेतु उज्जैन आने की योजना बना रहे हैं

#### [NEW] `src/data/benefits.ts`

Array of 8 benefit strings (from original [lines 868–875](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L868-L875)).

#### [NEW] `src/data/bookingSteps.ts`

Array of 5 booking steps (from original [lines 888–892](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L888-L892)).

#### [NEW] `src/lib/whatsapp.ts`

Reusable WhatsApp utility:

```ts
export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
```

Fixes the original bug where `%0a` was used instead of `encodeURIComponent()`.

#### [NEW] `src/lib/utils.ts`

shadcn `cn()` utility + any shared helpers.

---

### Phase 3 — Layout Components

#### [NEW] `src/components/layout/TopBar.tsx` (Server Component)

- Semantic `<nav>` element (fixes the missing `<nav>` issue)
- Brand text: `श्री महाकाल दोष निवारण पूजा, उज्जैन`
- WhatsApp CTA button (outline style)
- Call CTA button (gold linear style)
- `aria-label` on both CTAs
- Sticky positioning (`sticky top-0 z-50`)
- Mobile-responsive: buttons shrink on small screens
- Phone numbers from `siteConfig` — not hardcoded

#### [NEW] `src/components/layout/Footer.tsx` (Server Component)

- Brand name
- Contact info (phone numbers from `siteConfig`)
- Copyright with dynamic year
- Dark background (`--night`)

#### [NEW] `src/components/layout/FloatingWhatsApp.tsx` (Client Component)

- `"use client"` — needs CSS animation (pulse) managed by Tailwind, but link is interactive
- Fixed position bottom-right
- WhatsApp SVG icon
- `aria-label="WhatsApp पर संपर्क करें"`
- Pulse animation via Tailwind `animate-` class
- `prefers-reduced-motion` disables animation
- Mobile: slightly smaller size, higher bottom offset to avoid overlap with form buttons

---

### Phase 4 — Section Components

All sections render inside `<main id="main-content">` in `page.tsx`.

#### [NEW] `src/components/sections/Hero.tsx` (Server + Client hybrid)

**Server Component** for the main content. A small **Client Component** (`HeroOrbit.tsx`) for the orbiting animation.

Content (from [lines 644–667](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L644-L667)):

- Eyebrow: `उज्जैन के अनुभवी वैदिक पंडित`
- H1: `महाकाल की नगरी में, शास्त्रोक्त विधि से दोष निवारण पूजा` (with gold linear on `शास्त्रोक्त विधि`)
- Lead paragraph (Cormorant Garamond)
- CTA row: Call Now + WhatsApp
- Stats: `20+` | `Online + Offline` | `100%`
- Temple-arch frame with `<Image>` of pandit (priority, fetchpriority high)
- Caption: `पंडित धीरज शर्मा जी`

**HeroOrbit** (Client Component):

- Two orbit rings with 6 images total
- CSS `@keyframes` for CW/CCW rotation
- Hidden on `<900px` and on `prefers-reduced-motion`
- Images: `<Image>` with `alt=""` and `aria-hidden="true"` (decorative)

#### [NEW] `src/components/sections/Problems.tsx` (Server Component)

- Section heading: `क्या आप इनमें से किसी समस्या से गुजर रहे हैं?`
- H2: `यदि हाँ, तो सही मार्गदर्शन आज ही प्राप्त करें`
- 6 cards rendered via `.map()` from `problems.ts`
- Responsive grid: `3 cols → 2 cols → 1 col`
- Numbered markers (1–6) styled as maroon circles
- `id="problems"` for anchor linking

#### [NEW] `src/components/sections/WhyUjjain.tsx` (Server Component)

- Two-column layout: Mahakal Ji image + text content
- `<Image>` with `loading="lazy"`, proper alt text, overlay caption
- Content from [lines 696–702](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L696-L702)
- `id="about"`

#### [NEW] `src/components/sections/PanditBio.tsx` (Server Component)

- Circular gold-bordered photo frame using `<Image>`
- Eyebrow + H2 (name) + role badge
- 3 paragraphs from [lines 714–716](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L714-L716)
- Credential pills: `20+ वर्षों का अनुभव`, `Online एवं Offline पूजा`, `व्यक्तिगत संकल्प`, `सम्पूर्ण पूजा सामग्री`

#### [NEW] `src/components/sections/Services.tsx` (Server Component)

- Section heading from [lines 731–732](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L731-L732)
- 11 service cards rendered via `.map()` from `services.ts`
- Each card: `<Image>` thumbnail + title + description + CTA button
- CTA: `<a>` linking to `createWhatsAppUrl(service.whatsappMessage)`
- Each card has `id={service.id}` for deep linking
- Responsive: `4 → 2 → 1` columns
- `id="services"`

#### [NEW] `src/components/sections/VideoGallery.tsx` (Client Component)

- `"use client"` — click-to-play interaction requires state
- Section heading from [lines 823–826](file:///d:/Cohort%202.0%20Sheriyans%20Dev/Projects/kalsharppooja.in/website/index.html#L823-L826)
- 3 unique video cards from `videos.ts`
- Each card: YouTube thumbnail `<Image>`, play button overlay
- On click: replace thumbnail with `<iframe>` (lazy YouTube embed)
- Portrait cards: `aspect-ratio: 9/16`; Landscape: `aspect-ratio: 16/9`
- `id="videos"`

#### [NEW] `src/components/sections/Benefits.tsx` (Server Component)

- Dark night background
- 8 benefit cards from `benefits.ts`
- Each card: teal checkmark + white text
- Responsive: `4 → 2 → 1` columns
- Contrast check: ensure gold-soft text meets WCAG AA on night background (4.5:1 ratio). If not, use pure ivory for text.

#### [NEW] `src/components/sections/BookingSteps.tsx` (Server Component)

- 5 steps rendered from `bookingSteps.ts`
- Numbered circles (maroon bg, gold text)
- Semantic: `<ol>` with visually-styled list items
- `id="booking"`

#### [NEW] `src/components/sections/FAQ.tsx` (Server Component)

- 5 FAQ items from `faq.ts`
- Use **native `<details>/<summary>`** elements (fixes the accessibility issue from the analysis)
- Styled with Tailwind to match the original card aesthetic
- Smooth open/close via CSS `transition` on max-height
- No JavaScript required — fully server-rendered
- `id="faq"`

#### [NEW] `src/components/sections/Contact.tsx` (Client Component)

- `"use client"` — form state and validation
- H2: `अपनी जानकारी भेजें, हम आपको Call करेंगे`
- Form fields: Name, Mobile (pattern `[0-9]{10}`), Message
- Client-side validation with visual error states
- On submit: validate → construct WhatsApp message → `window.open(createWhatsAppUrl(msg))` → show success message
- Success state: `🙏 धन्यवाद! आपकी जानकारी प्राप्त हो गई है`
- Architecture: form handler structured so a future `/api/contact` route can be added alongside WhatsApp
- `id="contact"`

#### [NEW] `src/components/sections/FinalCTA.tsx` (Server Component)

- linear maroon/vermillion background
- H2 + lead text
- Three CTAs: Call (primary), Call (secondary), WhatsApp
- Phone numbers from `siteConfig`

---

### Phase 5 — SEO, Metadata & Structured Data

#### [NEW] `src/app/layout.tsx` — Metadata export

```ts
export const metadata: Metadata = {
  title: "Kaal Sarp Dosh Nivaran Pooja Ujjain | Mangal Dosh, Navgraha Shanti | Pandit Dheeraj Sharma",
  description: "Ujjain mein Kaal Sarp Dosh, Mangal Dosh, Navgraha Shanti, Rudrabhishek aur Vastu Dosh Nivaran Puja — Pandit Dheeraj Sharma, 20+ varsh anubhav. Online aur Offline dono booking. Call/WhatsApp: 9977999075.",
  keywords: ["kaal sarp dosh puja ujjain", "dosh nivaran puja ujjain", ...],
  alternates: { canonical: "https://kaalsarpdoshnivaranujjain.com/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "...",
    description: "...",
    url: "https://kaalsarpdoshnivaranujjain.com/",  // ✅ FIX: absolute URL
    locale: "hi_IN",
    images: [{ url: "https://kaalsarpdoshnivaranujjain.com/images/pandit-dheeraj-sharma.webp" }],  // ✅ FIX: absolute URL
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
    images: ["https://kaalsarpdoshnivaranujjain.com/images/pandit-dheeraj-sharma.webp"],
  },
};
```

**Fixes from analysis**: Adds `og:url`, converts OG image to absolute URL, adds Twitter card metadata.

#### [NEW] `src/lib/seo.ts` — JSON-LD generators

Two functions that generate structured data from the data files:

1. **`generateOrganizationSchema()`** — `ReligiousOrganization` schema using `siteConfig` + `services.ts`
   - All URLs and images as **absolute paths** (✅ FIX)
2. **`generateFAQSchema()`** — `FAQPage` schema using `faq.ts`
   - Single source of truth — no content duplication

Both injected as `<script type="application/ld+json">` in `layout.tsx` or `page.tsx`.

#### [NEW] `src/app/sitemap.ts`

```ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://kaalsarpdoshnivaranujjain.com", lastModified: new Date() },
  ];
}
```

#### [NEW] `src/app/robots.ts`

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://kaalsarpdoshnivaranujjain.com/sitemap.xml",
  };
}
```

#### [NEW] `src/app/manifest.ts`

Web app manifest with name, short_name, theme_color (`#5A1420`), background_color (`#FBF3E4`), icons.

#### [NEW] `public/favicon.ico` + `src/app/icon.tsx`

Generate a simple favicon matching the maroon/gold/Om branding. If no logo file is provided, create a minimal branded icon.

#### [NEW] `src/app/opengraph-image.tsx` (Optional)

If the static pandit image isn't ideal for social sharing, generate a branded OG image using Next.js Image Response API with the site name, maroon/gold linear, and Om symbol.

---

### Phase 6 — Optimization & Polish

#### Image Optimization

| Action                      | How                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| Use `next/image` everywhere | Automatic WebP/AVIF conversion by Next.js image optimizer                                 |
| Hero pandit image           | `priority`, explicit `width={600} height={800}`, `sizes="(max-width: 768px) 90vw, 340px"` |
| Service card images         | `loading="lazy"`, `width={400} height={250}`, `sizes="(max-width: 768px) 90vw, 25vw"`     |
| Orbit images                | `loading="lazy"`, small fixed size `width={92} height={92}`, `alt=""`, `aria-hidden`      |
| All images                  | Explicit `width`/`height` to prevent CLS                                                  |

#### Font Optimization

- `next/font/google` with `display: 'swap'` — no render-blocking
- Subset to `latin` + `devanagari` where supported
- Font variables applied via CSS custom properties

#### Accessibility

| Fix               | Detail                                                         |
| ----------------- | -------------------------------------------------------------- |
| Skip link         | `<a href="#main-content">` visible on focus                    |
| Semantic `<nav>`  | TopBar wrapped in `<nav>`                                      |
| Native FAQ        | `<details>/<summary>` instead of custom JS accordion           |
| Focus indicators  | Tailwind `focus-visible:ring-2 focus-visible:ring-gold`        |
| Decorative images | `alt=""` + `aria-hidden="true"`                                |
| Form labels       | Proper `<label htmlFor>` + validation states                   |
| Contrast          | Verify gold-on-dark passes WCAG AA; upgrade to ivory if needed |
| Reduced motion    | `motion-reduce:` Tailwind variant disabling all animations     |

#### Performance Architecture

| Optimization                 | Detail                                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| Server Components by default | Only `VideoGallery`, `Contact`, `FloatingWhatsApp`, and `HeroOrbit` are Client Components |
| YouTube lazy loading         | Thumbnail + click-to-play — no iframes at page load                                       |
| No unnecessary libraries     | Zero external animation/state libs                                                        |
| Tailwind purge               | Production CSS is tiny — only used classes shipped                                        |
| Image optimizer              | Next.js serves responsive WebP/AVIF automatically                                         |

---

## File Tree Summary

```
src/
├── app/
│   ├── layout.tsx              [NEW] Root layout, fonts, metadata, skip link
│   ├── page.tsx                [NEW] Assembles all sections
│   ├── globals.css             [NEW] Tailwind config, design tokens, base styles
│   ├── sitemap.ts              [NEW] XML sitemap
│   ├── robots.ts               [NEW] robots.txt
│   ├── manifest.ts             [NEW] PWA manifest
│   ├── icon.tsx                [NEW] Favicon generation
│   └── opengraph-image.tsx     [NEW] OG image (optional)
│
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx          [NEW] Sticky nav (Server)
│   │   ├── Footer.tsx          [NEW] Footer (Server)
│   │   └── FloatingWhatsApp.tsx [NEW] Floating CTA (Client)
│   │
│   ├── sections/
│   │   ├── Hero.tsx            [NEW] Hero section (Server)
│   │   ├── HeroOrbit.tsx       [NEW] Orbit animation (Client)
│   │   ├── Problems.tsx        [NEW] Problem cards (Server)
│   │   ├── WhyUjjain.tsx       [NEW] Why Ujjain (Server)
│   │   ├── PanditBio.tsx       [NEW] Bio section (Server)
│   │   ├── Services.tsx        [NEW] Service cards (Server)
│   │   ├── VideoGallery.tsx    [NEW] Videos (Client)
│   │   ├── Benefits.tsx        [NEW] Benefits (Server)
│   │   ├── BookingSteps.tsx    [NEW] Booking steps (Server)
│   │   ├── FAQ.tsx             [NEW] FAQ accordion (Server)
│   │   ├── Contact.tsx         [NEW] Contact form (Client)
│   │   └── FinalCTA.tsx        [NEW] Final CTA (Server)
│   │
│   └── ui/                     [NEW] shadcn/ui components (as needed)
│
├── data/
│   ├── site.ts                 [NEW] Global config
│   ├── services.ts             [NEW] 11 services
│   ├── faq.ts                  [NEW] 5 FAQ items
│   ├── videos.ts               [NEW] 3 unique videos
│   ├── problems.ts             [NEW] 6 problem cards
│   ├── benefits.ts             [NEW] 8 benefits
│   └── bookingSteps.ts         [NEW] 5 steps
│
├── lib/
│   ├── whatsapp.ts             [NEW] WhatsApp URL utility
│   ├── seo.ts                  [NEW] JSON-LD generators
│   └── utils.ts                [NEW] cn() + helpers
│
public/
├── images/                     [NEW] 13 images copied from website/images/
└── favicon.ico                 [NEW] Branded favicon
```

**Total new files**: ~30
**Client Components**: 4 of ~15 (HeroOrbit, VideoGallery, Contact, FloatingWhatsApp)
**Server Components**: 11 of ~15

---

## Issues Fixed from Original Analysis

| #   | Issue                    | Status   | How                                         |
| --- | ------------------------ | -------- | ------------------------------------------- |
| 1   | No `og:url`              | ✅ Fixed | Added in Next.js metadata `openGraph.url`   |
| 2   | OG image relative path   | ✅ Fixed | Absolute URL in metadata                    |
| 3   | JSON-LD image relative   | ✅ Fixed | `seo.ts` uses `siteConfig.url` prefix       |
| 4   | Duplicate YouTube video  | ✅ Fixed | Removed; only 3 unique videos               |
| 5   | No favicon               | ✅ Fixed | New `icon.tsx` / `favicon.ico`              |
| 6   | CSS inline (510 lines)   | ✅ Fixed | Tailwind + `globals.css` design tokens      |
| 7   | No font preconnect       | ✅ Fixed | `next/font/google` handles this             |
| 8   | Large image payloads     | ✅ Fixed | `next/image` auto-serves WebP/AVIF          |
| 9   | Missing image dimensions | ✅ Fixed | Explicit `width`/`height` on all `<Image>`  |
| 10  | No form backend path     | ✅ Fixed | Architecture supports future `/api/contact` |
| 11  | WhatsApp encoding bug    | ✅ Fixed | `encodeURIComponent()` in `whatsapp.ts`     |
| 12  | No `<nav>`               | ✅ Fixed | TopBar uses semantic `<nav>`                |
| 13  | FAQ not native           | ✅ Fixed | `<details>/<summary>` elements              |
| 14  | No skip link             | ✅ Fixed | Skip-to-content in layout                   |
| 15  | Unused `pitra-dosh.webp` | ✅ Fixed | Added as 11th service card                  |
| 16  | No service anchor IDs    | ✅ Fixed | Each service card gets `id={service.id}`    |

---

## Verification Plan

### Automated Tests

```bash
# TypeScript compilation
npx tsc --noEmit

# ESLint
npx next lint

# Production build (catches SSR/hydration errors)
npm run build
```

### Manual Verification

| Check            | Method                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| WhatsApp CTAs    | Click every WhatsApp button — verify pre-filled messages open correctly                                                                     |
| Call CTAs        | Click call buttons — verify `tel:` links                                                                                                    |
| Service WhatsApp | Click each service "पूजा बुक करें" — verify service name in message                                                                         |
| Contact form     | Submit with valid/invalid data — verify validation + WhatsApp redirect                                                                      |
| FAQ              | Click each question — verify open/close                                                                                                     |
| Videos           | Click play — verify iframe loads with autoplay                                                                                              |
| Responsive       | Test at 320px, 375px, 390px, 430px (mobile), 640px, 768px (tablet), 1024px, 1280px, 1440px (desktop) using browser DevTools responsive mode |
| Keyboard nav     | Tab through entire page — verify all interactive elements reachable                                                                         |
| Skip link        | Press Tab on page load — verify skip link appears                                                                                           |
| OG preview       | Use [opengraph.xyz](https://opengraph.xyz) or WhatsApp share to verify preview                                                              |
| JSON-LD          | Use [Google Rich Results Test](https://search.google.com/test/rich-results)                                                                 |
| Lighthouse       | Run Lighthouse audit — target 90+ on all categories                                                                                         |
| Images           | Verify no layout shift; check Network tab for WebP/AVIF delivery                                                                            |

---

## Build Order

| Phase | Components                                                                                                                          | Dependencies |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **1** | Next.js init, Tailwind config, fonts, `globals.css`, `layout.tsx`                                                                   | None         |
| **2** | All `data/*.ts` files, `lib/whatsapp.ts`, `lib/utils.ts`, `lib/seo.ts`                                                              | Phase 1      |
| **3** | TopBar, Footer, FloatingWhatsApp                                                                                                    | Phase 2      |
| **4** | Hero → Problems → WhyUjjain → PanditBio → Services → VideoGallery → Benefits → BookingSteps → FAQ → Contact → FinalCTA → `page.tsx` | Phases 2–3   |
| **5** | Metadata, JSON-LD, sitemap, robots, manifest, favicon, OG image                                                                     | Phase 4      |
| **6** | Image optimization, accessibility audit, responsive polish, build verification                                                      | Phase 5      |
