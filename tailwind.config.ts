import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // ── Breakpoints (mobile-first) ──────────────────────────────
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      // ── Brand Colors ────────────────────────────────────────────
      colors: {
        ivory: { DEFAULT: "#FBF3E4", deep: "#F3E6CB" },
        maroon: { DEFAULT: "#7A1F2B", deep: "#5A1420", nav: "#2e0011" },
        gold: { DEFAULT: "#C9962C", soft: "#E8C978", dark: "#a97a1f" },
        night: "#2C121C",
        vermillion: "#C1432B",
        teal: { DEFAULT: "#1F6F5C", soft: "#4FA88F" },
        ink: "#2A1D14",
        line: "rgba(122,31,43,0.18)",
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
        arch: "170px 170px 18px 18px",
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
          "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.5), 0 10px 26px rgba(37,211,102,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37,211,102,0), 0 10px 26px rgba(37,211,102,0.45)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0), 0 10px 26px rgba(37,211,102,0.45)" },
        },
        callPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(37,99,235,0.5), 0 10px 26px rgba(37,99,235,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37,99,235,0), 0 10px 26px rgba(37,99,235,0.45)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,99,235,0), 0 10px 26px rgba(37,99,235,0.45)" },
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
        "call-pulse": "callPulse 2.4s infinite",
        "fade-up": "fadeUp 0.5s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
