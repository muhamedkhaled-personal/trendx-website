import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2559",
          light: "#232E6A",
          dark: "#111B45",
        },
        green: {
          DEFAULT: "#2FA66A",
          hover: "#27905B",
          light: "#E8F7EF",
          pale: "#D1FAE5",
        },
        ice: {
          DEFAULT: "#EEF2FB",
          dark: "#E4EAF6",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans-arabic)", "sans-serif"],
      },
      fontSize: {
        "section-title": ["clamp(28px, 5vw, 42px)", { lineHeight: "1.3" }],
        "hero-title": ["clamp(30px, 5vw, 48px)", { lineHeight: "1.3" }],
        "cta-title": ["clamp(26px, 4.5vw, 40px)", { lineHeight: "1.3" }],
      },
      boxShadow: {
        "card": "0 2px 8px rgba(0,0,0,0.03)",
        "card-hover": "0 12px 40px rgba(47,166,106,0.1)",
        "hero-card": "0 20px 60px rgba(0,0,0,0.25)",
        "navbar": "0 2px 20px rgba(0,0,0,0.06)",
        "float-badge": "0 6px 24px rgba(0,0,0,0.12)",
        "phone": "0 25px 60px rgba(0,0,0,0.3)",
        "phone-main": "0 30px 70px rgba(0,0,0,0.35)",
        "form": "0 4px 24px rgba(27,37,89,0.06)",
      },
      animation: {
        "float": "floatA 6s ease-in-out infinite",
        "float-slow": "floatA 5s ease-in-out infinite 1s",
        "float-med": "floatA 5.5s ease-in-out infinite 1.8s",
        "float-delayed": "floatA 6s ease-in-out infinite 2.5s",
        "float-badge": "floatA 4s ease-in-out infinite",
        "float-badge-delayed": "floatA 4s ease-in-out infinite 0.6s",
        "marquee": "marqueeScroll 25s linear infinite",
        "marquee-rtl": "marqueeScrollRTL 25s linear infinite",
      },
      keyframes: {
        floatA: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marqueeScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeScrollRTL: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
