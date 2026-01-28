# 🚀 Enkel Installationsguide - basket24 Update

## ⚠️ VIKTIGT: GÖR BACKUP FÖRST!

Innan du gör någonting - **zippa din nuvarande basket-matcher mapp** som backup!

---

## 📦 Steg-för-steg

### Steg 1: Ladda ner basket24-updated.zip
Klicka på filen ovan och spara den.

---

### Steg 2: Packa upp zip-filen
- **Windows:** Högerklicka → "Extrahera alla"
- **Mac:** Dubbelklicka på filen

Du får en mapp: **basket24-updated**

---

### Steg 3: Ersätt filer i din basket-matcher mapp

Kopiera dessa 8 filer från **basket24-updated** → **basket-matcher**:

#### Config filer:
1. `tailwind.config.ts` → Ersätt

#### App filer:
2. `app/globals.css` → Ersätt
3. `app/page.tsx` → Ersätt  
4. `app/layout.tsx` → Ersätt

#### Component filer:
5. `components/Header.tsx` → Ersätt
6. `components/LeagueFilter.tsx` → Ersätt
7. `components/DateNavigation.tsx` → Ersätt
8. `components/MatchCard.tsx` → Ersätt

**BEHÅLL dessa filer (rör inte):**
- `components/Footer.tsx`
- `components/TodaysMatches.tsx`
- `components/UpcomingBigMatches.tsx`
- `components/LeagueIcons.tsx`
- Alla andra filer i basket-matcher

---

### Steg 4: Testa
Öppna terminal i basket-matcher:

```bash
npm run dev
```

Gå till: http://localhost:3000

---

## ✅ Vad du ska se:

### Hero
- **Flat orange block** (inte gradient)
- "Basket på TV och stream"

### Header
- **basket24** (inte basket23)
- Flat orange logo (inte gradient)

### Liga Filter
- **Fyrkantiga knappar** (inte rundade)
- Orange när aktiv

### Datum Navigation
- **Charcoal bakgrund** (mörk)
- Fyrkantiga knappar

### Match Cards
- **Fyrkantiga kort** (inte rundade hörn)
- Liga-färger behållna

---

## 🎨 Skillnader:

| Tidigare | Nu |
|----------|-----|
| Orange gradient | Flat orange |
| Rundade hörn | Fyrkantiga hörn |
| basket23 | basket24 |
| Ljus orange (#FF6B35) | Basket Orange (#F57C00) |

---

## ❓ Problem?

**Port redan i bruk?**
```bash
npm run dev -- -p 3001
```

**Styling ser konstigt ut?**
1. Stoppa servern (Ctrl+C)
2. Radera `.next` mappen
3. Kör `npm run dev` igen

**Fel vid npm run dev?**
Prova:
```bash
rm -rf node_modules .next
npm install
npm run dev
```

---

## 📊 Resultat

Din sajt har nu:
- ✅ basket24 branding (inte basket23)
- ✅ Basket Orange #F57C00 färg
- ✅ Flat design (inga gradienter)
- ✅ Hard edges (inga rundade hörn)
- ✅ TV broadcast professional look
- ✅ 100% brand guideline adherence

**All funktionalitet behålls - bara styling som ändras!**

---

**Lycka till!** 🏀
