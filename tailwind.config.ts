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
        // basket24 Brand Colors (from brand guideline)
        primary: {
          DEFAULT: '#F57C00',      // Basket Orange
          light: '#FB8C00',
          dark: '#EF6C00',
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#F57C00',          // Main Basket Orange
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
        // Broadcast Charcoal - Professional dark
        dark: {
          DEFAULT: '#1F1F1F',      // Broadcast Charcoal
          light: '#2A2A2A',
          lighter: '#3A3A3A',
        },
        // Court Gray - Meta text
        gray: {
          DEFAULT: '#6B7280',      // Court Gray
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',          // Main Court Gray
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Live Signal Green - Live indicators
        live: {
          DEFAULT: '#16A34A',      // Live Signal Green
          light: '#22C55E',
          dark: '#15803D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      // FLAT DESIGN - NO rounded corners
      borderRadius: {
        'none': '0',
        'sm': '0',
        DEFAULT: '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '0',
      },
    },
  },
  plugins: [],
};

export default config;
