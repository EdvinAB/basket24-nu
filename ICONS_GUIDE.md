# 🎨 Liga-Ikoner & TV-Kanal Logotyper - Guide

## 📋 Översikt

Den här guiden visar hur du lägger till **liga-ikoner** och **TV-kanal logotyper** när du är redo.

---

## 1️⃣ LIGA-IKONER

### 📁 Var du ska placera dem:

```
basket-matcher/
└── public/
    └── icons/
        └── leagues/
            ├── all.svg (eller .png)
            ├── nba.svg
            ├── euroleague.svg
            └── sbl.svg
```

### 📐 Specifikationer:

- **Format:** SVG (bäst) eller PNG
- **Storlek:** 32x32px eller 40x40px
- **Bakgrund:** Transparent
- **Aspect ratio:** 1:1 (kvadratisk)

### 🔍 Var du hittar ikoner:

**NBA:**
- https://www.nba.com/news/press-kit
- Wikipedia: https://en.wikipedia.org/wiki/NBA

**EuroLeague:**
- https://www.euroleaguebasketball.net/
- Wikipedia: https://en.wikipedia.org/wiki/EuroLeague

**SBL:**
- https://www.basket.se/
- https://basketligan.se/

**ALLA (generisk basket-ikon):**
- Flaticon: https://www.flaticon.com/search?word=basketball
- Font Awesome: fa-basketball

### 💻 Kod för att använda ikoner:

**LeagueFilter.tsx - Uppdatering:**

```typescript
const leagues = [
  { id: 'all', name: 'ALLA', icon: '/icons/leagues/all.svg' },
  { id: 'nba', name: 'NBA', icon: '/icons/leagues/nba.svg' },
  { id: 'euroleague', name: 'EuroLeague', icon: '/icons/leagues/euroleague.svg' },
  { id: 'sbl', name: 'SBL', icon: '/icons/leagues/sbl.svg' },
];

// I render:
<img 
  src={league.icon} 
  alt={league.name}
  className="w-6 h-6"
/>
```

**Ersätt emojis med:**
```typescript
// TIDIGARE:
<span className="text-2xl mb-1">{league.icon}</span>

// NY KOD:
<img 
  src={league.icon} 
  alt={league.name}
  className="w-6 h-6 mb-1"
/>
```

---

## 2️⃣ TV-KANAL LOGOTYPER

### 📁 Var du ska placera dem:

```
basket-matcher/
└── public/
    └── icons/
        └── channels/
            ├── viaplay.svg
            ├── nba-league-pass.svg
            ├── hbo-max.svg
            ├── amazon-prime.svg
            ├── expressen.svg
            ├── euroleague-tv.svg
            └── tv4-play.svg
```

### 📐 Specifikationer:

- **Format:** SVG eller PNG
- **Storlek:** Width: 80-100px, Height: 24-32px
- **Bakgrund:** Transparent eller vit
- **Style:** Original logo eller ren vit text på dark bakgrund

### 🎨 Två olika styles:

#### Style 1: Original logotyper (färgade)
```
Viaplay: Röd/vit
NBA LP: Blå/röd
HBO MAX: Svart/lila
```

#### Style 2: White labels (minimalistisk)
```
Alla logotyper: Vit text på dark charcoal bakgrund
Ser mer enhetligt ut, mer TV broadcast feel
```

### 💻 Kod för att använda kanal-logotyper:

**MatchCard.tsx - Uppdatering:**

```typescript
// Funktion för att hämta kanal-logotyp
const getChannelLogo = (channelName: string): string | null => {
  const channelMap: Record<string, string> = {
    'Viaplay': '/icons/channels/viaplay.svg',
    'NBA League Pass': '/icons/channels/nba-league-pass.svg',
    'HBO MAX': '/icons/channels/hbo-max.svg',
    'Amazon Prime': '/icons/channels/amazon-prime.svg',
    'Expressen': '/icons/channels/expressen.svg',
    'EuroLeague TV': '/icons/channels/euroleague-tv.svg',
    'TV4 Play': '/icons/channels/tv4-play.svg',
  };
  
  // Hitta match (case-insensitive)
  const key = Object.keys(channelMap).find(
    k => k.toLowerCase() === channelName.toLowerCase()
  );
  
  return key ? channelMap[key] : null;
};

// I render:
{broadcaster.split(',').slice(0, 2).map((channel, idx) => {
  const channelTrimmed = channel.trim();
  const logoPath = getChannelLogo(channelTrimmed);
  
  return (
    <div 
      key={idx}
      className="bg-dark px-3 py-1.5 flex items-center justify-center"
    >
      {logoPath ? (
        <img 
          src={logoPath} 
          alt={channelTrimmed}
          className="h-5 w-auto"
        />
      ) : (
        <span className="text-white text-xs font-medium">
          {channelTrimmed}
        </span>
      )}
    </div>
  );
})}
```

### 🆓 Var du hittar kanal-logotyper:

**Option 1: Officiella källor**
- Viaplay: https://viaplay.se/press
- HBO Max: https://www.hbomax.com/press
- Amazon Prime: https://www.amazon.com/gp/browse.html?node=18190436011

**Option 2: LogoSVG / Brandfetch**
- https://www.brandfetch.com/
- Sök på varumärket och ladda ner SVG

**Option 3: Skapa egna (minimalistiska)**
```css
/* White label style */
background: #1F1F1F (Broadcast Charcoal)
color: #FFFFFF
font: Inter, 12px, bold, uppercase
padding: 6px 12px
```

---

## 🎯 IMPLEMENTATION STEPS

### Steg 1: Samla bilder
1. Ladda ner alla liga-ikoner (4 st)
2. Ladda ner alla kanal-logotyper (7-10 st)
3. Spara alla som SVG eller PNG

### Steg 2: Skapa mappar
```bash
mkdir -p public/icons/leagues
mkdir -p public/icons/channels
```

### Steg 3: Lägg till bilder
- Kopiera alla ikoner till rätt mappar
- Kolla att filnamnen stämmer

### Steg 4: Uppdatera komponenter
- Uppdatera `LeagueFilter.tsx` med img tags
- Uppdatera `MatchCard.tsx` med kanal-logotyper

### Steg 5: Testa
```bash
npm run dev
```

---

## 🎨 DESIGN TIPS

### Liga-ikoner:
- ✅ Använd **officiella** logotyper (mest professionellt)
- ✅ Håll dem **samma storlek** (consistency)
- ✅ **Transparent** bakgrund (ser bättre ut)

### Kanal-logotyper:
- ✅ **Style 1 (färgad):** Ser mer levande ut, men kan kännas rörigt
- ✅ **Style 2 (white label):** Ser mer professionellt och broadcast-likt ut
- 💡 **Rekommendation:** Använd Style 2 (white label) för bästa basket24 brand

---

## 📦 EXEMPEL FILER

### leagues/all.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F57C00">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  <!-- Basketball icon path -->
</svg>
```

### channels/viaplay.svg (white label style)
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24">
  <text x="50" y="18" text-anchor="middle" fill="white" font-family="Inter" font-size="14" font-weight="700">
    VIAPLAY
  </text>
</svg>
```

---

## ⚠️ COPYRIGHT VARNING

**För liga-logotyper:**
- Officiella logotyper är trademark-skyddade
- För **TV-guide editorial use** är det oftast OK
- Kolla alltid användarvillkoren

**För kanal-logotyper:**
- Samma regler gäller
- Använd för **informational purposes** (visa var matcher sänds)
- Inkludera länkar till respektive tjänst

---

## 🚀 RESULTAT

Efter implementation:
- ✅ Professionella liga-ikoner istället för emojis
- ✅ TV-kanal logotyper istället för text
- ✅ Mer polished look
- ✅ Bättre brand consistency

---

**När du är redo, följ stegen ovan!** 🎨

**Fråga mig om du behöver hjälp med något!** 💪
