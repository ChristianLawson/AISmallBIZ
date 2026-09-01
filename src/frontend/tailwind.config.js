import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring) / <alpha-value>)",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "rgb(var(--popover))",
          foreground: "rgb(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))",
        },
        chart: {
          1: "rgb(var(--chart-1))",
          2: "rgb(var(--chart-2))",
          3: "rgb(var(--chart-3))",
          4: "rgb(var(--chart-4))",
          5: "rgb(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "rgb(var(--sidebar))",
          foreground: "rgb(var(--sidebar-foreground))",
          primary: "rgb(var(--sidebar-primary))",
          "primary-foreground": "rgb(var(--sidebar-primary-foreground))",
          accent: "rgb(var(--sidebar-accent))",
          "accent-foreground": "rgb(var(--sidebar-accent-foreground))",
          border: "rgb(var(--sidebar-border))",
          ring: "rgb(var(--sidebar-ring))",
        },
        /* Accessible text shades. Use these for body or muted text when the
           default --foreground or --muted-foreground fails the 4.5:1 body or
           3:1 headline ratio on a given background. Existing palette is left
           intact. */
        readable: "rgb(var(--text-readable) / <alpha-value>)",
        "muted-readable": "rgb(var(--text-muted-readable) / <alpha-value>)",
        /* Neutral slate/zinc decorative accent. Use for backgrounds, borders,
           and icon fills that previously used hardcoded indigo so saturated
           indigo stays reserved for CTAs, links, and checklist accents. */
        "accent-neutral": "rgb(var(--accent-neutral) / <alpha-value>)",
        "accent-neutral-soft": "rgb(var(--accent-neutral-soft) / <alpha-value>)",
        "accent-neutral-border":
          "rgb(var(--accent-neutral-border) / <alpha-value>)",
        /* Reserved Electric Indigo accent. Use ONLY for CTAs, links, and
           checklist accent marks so saturated indigo reads as a true accent.
           Do NOT use for decorative backgrounds, borders, or icon fills; use
           accent-neutral* for those instead. */
        "accent-indigo": "rgb(var(--accent-indigo) / <alpha-value>)",
        /* Deep navy accent. Used for prominent attribution badges that need a
           strong, brand-distinct color separate from the orange primary. */
        "accent-navy": "rgb(var(--accent-navy) / <alpha-value>)",
      },
      fontSize: {
        xs: ["0.917rem", { lineHeight: "1.4" }],
        sm: ["0.917rem", { lineHeight: "1.5" }],
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        card: "0 1px 3px rgba(0,0,0,0.06)",
        elevated: "0 4px 12px rgba(0,0,0,0.08)",
        premium: "0 8px 24px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)",
        /* Neutral slate/zinc decorative shadow. Replaces the former indigo
           shadow so saturated indigo stays reserved for CTAs, links, and
           checklist accents via the --accent-indigo token in index.css. */
        neutral: "0 4px 16px rgba(71,85,105,0.15), 0 1px 3px rgba(0,0,0,0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-vibrant": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "verify-pop": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "pulse-vibrant": "pulse-vibrant 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slide-up 0.5s ease-out",
        marquee: "marquee 32s linear infinite",
        "verify-pop": "verify-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
