# 🏀 Sveriges enda Basketsajt med live data och TV & Stream-tablå - Next.js Project. 
Byggt med Next.js 14, TypeScript och Tailwind CSS.

## 📦 Vad finns i projektet?

- ✅ **Next.js 14** med App Router
- ✅ **TypeScript** för type-safety
- ✅ **Tailwind CSS** för styling
- ✅ **Fotboll.com-inspirerad layout**
- ✅ **Blog sidebar widget** (NYT!)
- ✅ **Responsiv design**
- ✅ **Mock data** (byter senare mot API-Basketball)

## 🚀 Kom igång

### Steg 1: Installera dependencies

```bash
npm install
```

Detta installerar alla paket som behövs (React, Next.js, Tailwind, etc.)

### Steg 2: Starta development server

```bash
npm run dev
```

### Steg 3: Öppna i browser

Gå till: http://localhost:3000

Du borde nu se din basket-sajt! 🎉

## 📁 Projektstruktur

```
basket-matcher/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (Header/Footer)
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global CSS
├── components/            # React komponenter
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── LeagueIcons.tsx    # Liga-ikoner
│   ├── TodaysMatches.tsx  # Dagens matcher
│   ├── UpcomingBigMatches.tsx
│   └── BlogSidebar.tsx    # NYHET! Blog widget
├── lib/                   # Utilities (kommer senare)
├── public/                # Statiska filer (bilder, etc)
├── package.json           # Dependencies
└── tailwind.config.ts     # Tailwind config
```

## 🎨 Anpassa Design

### Ändra färger

Öppna `tailwind.config.ts` och ändra:

```typescript
colors: {
  primary: {
    DEFAULT: '#FF6B35', // Din huvudfärg
  },
  secondary: {
    DEFAULT: '#004E89', // Din sekundära färg
  },
}
```

### Ändra typsnitt

Öppna `app/layout.tsx` och ändra:

```typescript
import { Inter } from "next/font/google"; // Byt ut Inter
```

## 📝 Nästa Steg

1. ✅ Projektet kör lokalt
2. ⏳ Anpassa färger och typsnitt
3. ⏳ Koppla ihop med API-Basketball
4. ⏳ Bygga match-sidor
5. ⏳ Skapa database
6. ⏳ Deploy till Vercel

## 🆘 Hjälp & Support

Om något går fel, fråga Claude! 

**Vanliga problem:**

- "npm install fungerar inte" → Kolla att Node.js är installerat
- "Sidan är tom" → Kör `npm run dev` igen
- "Error: Cannot find module" → Kör `npm install` igen

## 🎯 Mål

Vi bygger Sveriges bästa basket-sajt, inspirerad av fotboll.com!

**Features som kommer:**
- Live resultat från API-Basketball
- TV-guide med broadcasters
- Betting tips och odds
- Blog/nyheter system
- Admin panel för broadcaster-data

---

**Skapat med ❤️ av Claude Code & Edvin Bukvic**
