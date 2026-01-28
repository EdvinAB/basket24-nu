# 🚀 KOMPLETT SETUP-GUIDE - STARTA DITT BASKET-PROJEKT!

## 📦 VAD DU HAR FÅTT

Jag har skapat ett komplett Next.js-projekt åt dig med:

✅ **15 filer** totalt
✅ **Fotboll.com-layout** anpassad för basket
✅ **Blog sidebar widget** på höger sida (din nya funktion!)
✅ **Responsiv design**
✅ **Mock data** (vi byter senare mot API-Basketball)
✅ **Professional struktur**

## 🎯 STEG-FÖR-STEG: KOM IGÅNG NU!

### STEG 1: Ladda ner projektet (5 minuter)

1. **Klicka på nedladdningsknappen** ovanför (basket-matcher mappen)
2. Zippa upp filen på din dator
3. Flytta mappen till någonstans lätt att hitta (t.ex. Desktop eller Documents)

**Exempel (Windows):**
```
C:\Users\Edvin\Desktop\basket-matcher
```

**Exempel (Mac):**
```
/Users/edvin/Desktop/basket-matcher
```

---

### STEG 2: Öppna projektet i VS Code (2 minuter)

1. Öppna **VS Code**
2. Klicka **File** → **Open Folder**
3. Välj `basket-matcher` mappen
4. Klicka **Select Folder**

Du borde nu se alla filer i vänster sidebar!

---

### STEG 3: Öppna Terminal i VS Code (1 minut)

1. I VS Code, klicka **Terminal** (top menu) → **New Terminal**
2. En terminal öppnas längst ner i VS Code
3. Du borde se något som: `C:\...\basket-matcher>` (Windows) eller `~/basket-matcher %` (Mac)

---

### STEG 4: Installera alla dependencies (5-10 minuter)

**I terminalen, skriv detta kommando:**

```bash
npm install
```

**Tryck Enter**

**Vad händer?**
- npm laddar ner alla paket (React, Next.js, Tailwind, etc.)
- Detta kan ta 5-10 minuter första gången
- Du ser massa text rulla förbi - det är normalt!
- När det är klart ser du något som: "added 340 packages"

✅ **SUCCESS när du ser:** Terminalen visar ingen loading-spinner längre

---

### STEG 5: Starta development server (30 sekunder)

**I terminalen, skriv:**

```bash
npm run dev
```

**Tryck Enter**

**Du borde se:**
```
 ✓ Ready in 2.3s
 ○ Local:        http://localhost:3000
 ○ Network:      http://192.168.x.x:3000
```

✅ Detta betyder att din sajt är LIVE!

---

### STEG 6: Öppna i browser! (10 sekunder)

1. Öppna din favorit-browser (Chrome, Safari, Firefox, Edge)
2. Gå till: **http://localhost:3000**

## 🎉 DU BORDE NU SE DIN BASKET-SAJT!

**Vad du ser:**
- ✅ Header med navigation (Matcher, Ligor, Lag, TV-Guide, etc.)
- ✅ Liga-ikoner (NBA, EuroLeague, Basketligan, etc.)
- ✅ Dagens matcher (3 mock-matcher)
- ✅ **Blog sidebar på höger sida** (din nya feature!)
- ✅ Kommande stormatcher
- ✅ Footer med länkar

---

## 🎨 PROVA DETTA NU (5 minuter)

### Test 1: Ändra färgen!

1. Öppna filen: `tailwind.config.ts`
2. Hitta raden:
```typescript
DEFAULT: '#FF6B35', // Orange (basket-färg)
```
3. Ändra till en annan färg (t.ex. `'#FF0000'` för röd)
4. Spara filen (Ctrl+S / Cmd+S)
5. Gå tillbaka till browsern - färgen har ändrats automatiskt! 🎨

### Test 2: Ändra texten!

1. Öppna filen: `app/page.tsx`
2. Hitta raden:
```typescript
<h1 className="text-3xl font-bold mb-6">
  Basket Idag med Resultat och Statistik
</h1>
```
3. Ändra texten till något annat (t.ex. "Välkommen till Sveriges Bästa Basket-sajt!")
4. Spara filen
5. Browsern uppdateras automatiskt!

---

## 📁 VIKTIGA FILER ATT KÄNNA TILL

| Fil | Vad den gör |
|-----|-------------|
| `app/page.tsx` | **Huvudsidan** - här är allt innehåll på homepage |
| `components/Header.tsx` | **Navigation** - menyn högst upp |
| `components/BlogSidebar.tsx` | **Blog widget** - din nya feature! |
| `components/TodaysMatches.tsx` | **Dagens matcher** - visar matcher |
| `tailwind.config.ts` | **Färger & design** - ändra färgschema här |
| `app/globals.css` | **Global styling** - övergripande CSS |

---

## 🆘 FELSÖKNING - OM NÅGOT GÅR FEL

### Problem 1: "npm: command not found"
**Lösning:** Node.js är inte installerat korrekt
```bash
node --version  # Kör detta för att testa
```
Om du inte får ett versionsnummer, installera om Node.js

### Problem 2: "Cannot find module 'next'"
**Lösning:** Dependencies inte installerade
```bash
npm install  # Kör detta igen
```

### Problem 3: "Port 3000 is already in use"
**Lösning:** Du har redan något som kör på port 3000
```bash
# Stäng andra program eller använd en annan port:
npm run dev -- -p 3001
# Gå sedan till: http://localhost:3001
```

### Problem 4: Sidan är helt vit
**Lösning:** Kolla terminalen för error-meddelanden
- Om det står "Error: ..." → copy-paste felet till mig!
- Annars: Tryck Ctrl+C i terminalen, och kör `npm run dev` igen

### Problem 5: Ändringar syns inte
**Lösning:** 
1. Spara filen (Ctrl+S / Cmd+S)
2. Vänta 2-3 sekunder
3. Refresh browser (F5)
4. Om fortfarande inget: Tryck Ctrl+C i terminalen, kör `npm run dev` igen

---

## ✅ CHECKLIST: HAR DU KLARAT DETTA?

- [ ] Laddat ner projektet
- [ ] Öppnat i VS Code
- [ ] Kört `npm install` (utan errors)
- [ ] Kört `npm run dev`
- [ ] Sett sajten på http://localhost:3000
- [ ] Testat ändra en färg eller text

**OM DU HAR CHECKAT AV ALLT = DU ÄR REDO FÖR NÄSTA STEG! 🚀**

---

## 🎯 NÄSTA STEG (När du är redo)

1. **Vecka 1:** Lär dig grunderna, tweka design
2. **Vecka 2:** Koppla ihop med API-Basketball
3. **Vecka 3:** Bygg match-sidor
4. **Vecka 4:** Skapa database för broadcasters
5. **Vecka 5:** Deploy till internet!

---

## 💬 FRÅGOR?

**Fråga mig om:**
- ❓ Hur jag ändrar något
- ❓ Vad en fil gör
- ❓ Varför något inte fungerar
- ❓ Vad vi ska göra härnäst

**Copy-paste errors direkt till mig - jag löser dem!**

---

## 🎉 GRATTIS!

Du har nu ett fullt fungerande Next.js-projekt!

Detta är EXAKT samma stack som moderna företag använder:
- Vercel (företag som Spotify, Airbnb)
- Next.js (används av Netflix, TikTok, Nike)
- Tailwind CSS (GitHub, Shopify, OpenAI)

Du bygger med professionella verktyg! 💪

---

**Redo för nästa steg? Meddela mig när du:**
1. ✅ Ser sajten på localhost:3000
2. ✅ Testat ändra något
3. ✅ Vill lära dig mer!

Lycka till! 🏀🚀

