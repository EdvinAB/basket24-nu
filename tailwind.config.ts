import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // basket24 NYA BRAND COLORS (från färgpalett)
        primary: {
          DEFAULT: '#E84A3F',      // Röd - Primary CTA, hover, live
          light: '#F9A26C',        // Ljus orange - Secondary
          dark: '#C63D34',
        },
        secondary: {
          DEFAULT: '#F9A26C',      // Ljus Orange - Accenter, badges
          light: '#FDB896',
          dark: '#F7844A',
        },
        accent: {
          DEFAULT: '#F5E56B',      // Gul - Highlights, hover-states
          light: '#F9ED8F',
          dark: '#F0DB47',
        },
        // Mörkblå - Header, Footer, Dark elements
        dark: {
          DEFAULT: '#20295b',      // Mörkare blå (från TVsporten)
          light: '#2d3a6e',
          lighter: '#3a4781',
          900: '#151d3f',          // Extra mörk
        },
        // Court Gray - Meta text (behåller från original)
        gray: {
          DEFAULT: '#6B7280',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Live Signal - Använder primary red
        live: {
          DEFAULT: '#E84A3F',      // Röd från palett
          pulse: '#FF6B5E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Smooth transitions
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      // Box shadows
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'dropdown': '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
