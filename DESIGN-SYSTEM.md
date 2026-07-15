# Alex Varga — Design System

Sistemul vizual folosit pe landing page-ul Alex Varga. Scopul acestui document:
să poți reproduce **exact același look** pe alt site (ex. `formular.wayfindercoaching.ro`),
indiferent de tehnologia folosită acolo (HTML simplu, WordPress, React etc.).

Estetica pe scurt: **cinematic, întunecat, premium.** Fundal aproape negru, titluri
serif elegante (Playfair Display), accente teal + arămiu (copper), carduri de sticlă
(glass), textură fină de film (grain), fără culori stridente, fără aspect „de template".

---

## 1. Culori

Copiază exact aceste valori. Nu improviza nuanțe noi.

| Rol | HEX | Unde se folosește |
|-----|-----|-------------------|
| **Fundal principal** | `#050505` | body, secțiunea de bază |
| **Fundal alternativ** | `#0a0a0a` | secțiuni intercalate (ex. „Povestea mea") |
| **Fundal card închis** | `#111111` | secțiuni de tip „card mare" (ex. „Ce fac azi") |
| **Negru pur** | `#000000` | footer, secțiunea „Adevărul pe care nu-l spune nimeni" |
| **Accent teal** (primar) | `#14b8a6` | CTA, sublinieri pozitive, iconuri, „pasul nou" |
| **Accent copper/arămiu** (secundar) | `#C89B7B` | eyebrow-uri (label-uri mici), accente calde, italice |
| **Roșu (tensiune)** | `#f87171` / `rgba(220,38,38,…)` | folosit RAR, doar pentru punct de durere („când clachezi") |
| **Text principal** | `#f8fafc` | text pe fundal negru |
| **Text alb pur** | `#ffffff` | titluri, cuvinte accentuate |

### Griuri (paleta „zinc" — de la deschis la închis)
Sunt esențiale pentru ierarhie. Text-ul NU e alb peste tot — respiră prin griuri.

| Nume | HEX | Folosire |
|------|-----|----------|
| zinc-300 | `#d4d4d8` | text de bază pe negru |
| zinc-400 | `#a1a1aa` | paragrafe, text secundar (cel mai des folosit) |
| zinc-500 | `#71717a` | text terțiar, descrieri de card, note |
| zinc-600 | `#52525b` | text foarte discret, citate footer |
| zinc-700 | `#3f3f46` | numere mari decorative (01, 02, 03) |
| zinc-800 | `#27272a` | borduri, linii de separare |

### Borduri & suprafețe translucide
Nu folosi borduri solide gri. Folosește alb cu opacitate mică:
- Bordură standard: `rgba(255,255,255,0.05)` → în Tailwind `border-white/5`
- Bordură ceva mai vizibilă: `rgba(255,255,255,0.10)` → `border-white/10`
- Fundal glass: `rgba(255,255,255,0.02)`

---

## 2. Tipografie

Două fonturi, atât. Fără al treilea.

| Font | Rol | Unde |
|------|-----|------|
| **Playfair Display** (serif) | Titluri „cinematice" | toate h1–h4, citate mari, accente italice |
| **Inter** (sans-serif) | Text de corp | paragrafe, liste, butoane, label-uri |

### Import fonturi (dacă NU folosești Next.js)
Pune în `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet">
```

CSS de bază:
```css
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background-color: #050505;
  color: #f8fafc;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.font-cinematic { font-family: "Playfair Display", serif; }
```

### Reguli de tipografie (importante — de asta arată „ca lumea")

1. **Titlurile sunt Playfair, textul e Inter.** Niciodată invers.
2. **Italic pe accente.** Cuvântul-cheie dintr-un titlu se pune italic + culoare copper sau teal.
   Ex: „nu trăiești *viața ta.*" — italicul e Playfair italic.
3. **Line-height strâns pe titluri.** `line-height: 1.1` (`leading-tight`). Altfel diacriticele
   (ă, î, ț, â, ș) se pot tăia și titlul se sparge.
4. **Fără cuvinte orfane** (un singur cuvânt pe ultimul rând). Pune:
   ```css
   h1, h2, h3, h4, h5, h6 { text-wrap: balance; }
   p, li { text-wrap: pretty; }
   ```
   Pentru text în containere flex sau span-uri imbricate, aplică `text-wrap: balance`
   direct pe elementul cu text.
5. **Text de corp minim 16px.** Paragrafele mari sunt 18–20px (`text-lg` / `text-xl`),
   font-weight 300 (light) pe fundal negru — arată elegant.
6. **Eyebrow-uri** (label mic deasupra titlului): uppercase, 12px, `letter-spacing` mare
   (`0.3em`), culoare copper `#C89B7B`, font-weight 600. NU sunt titluri (`<p>`, nu `<h2>`).

### Scala de dimensiuni (desktop → mobil)

| Element | Desktop | Mobil | Tailwind |
|---------|---------|-------|----------|
| Titlu hero (h1) | 96px | 48px | `text-4xl md:text-7xl lg:text-8xl` |
| Titlu secțiune (h2) | 48px | 30px | `text-3xl md:text-5xl` |
| Sub-titlu (h3) | 24–36px | 24px | `text-2xl md:text-4xl` |
| Titlu card | 20–24px | 20px | `text-xl md:text-2xl` |
| Paragraf mare | 20px | 18px | `text-lg md:text-xl` |
| Paragraf | 16–18px | 16px | `text-base md:text-lg` |
| Eyebrow / label | 12px | 12px | `text-xs` |

---

## 3. Spațiere

Scala e bazată pe **4px / 8px**. Nu folosi valori aleatorii (ex. 13px, 27px).

### Padding vertical pe secțiuni (regula de aur)
Secțiunile au aer MULT pe desktop, dar redus pe mobil. Fără asta, pe telefon pare gol.

| Tip secțiune | Desktop | Mobil |
|--------------|---------|-------|
| Secțiune standard | `128px` (py-32) | `80px` (py-20) |
| Secțiune „grea" (hero de tranziție) | `160px` (py-40) | `96px` (py-24) |
| CTA final | `192px` (py-48) | `96px` (py-24) |

### Lățimi de conținut (max-width)
Textul NU se întinde pe tot ecranul. Limitează-l:
- Container general: `max-width: 1152px` (`max-w-6xl`)
- Text de citit (paragrafe): `max-width: 768px` (`max-w-3xl` / `max-w-2xl`)
- Padding lateral: `24px` mobil, `48px` desktop (`px-6 md:px-12`)

### Gap-uri
- Între carduri: `24px` (gap-6)
- Între paragrafe: `20px` (space-y-5)
- Între secțiuni de listă: `16px` (space-y-4)

---

## 4. Componente-cheie (cu CSS gata de copiat)

### Glass card (cardul de sticlă)
Elementul vizual de bază. Aproape totul stă într-un glass card.
```css
.glass-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 4px; /* colțuri MICI, nu bubbly */
}
```
Variantă cu accent: adaugă o bordură colorată pe o singură latură:
`border-left: 2px solid #14b8a6;` (teal) sau `#C89B7B` (copper).

### Buton premium (CTA principal)
```css
.btn-premium {
  background: linear-gradient(145deg, rgba(20,184,166,0.15) 0%, rgba(0,0,0,0) 100%);
  border: 1px solid rgba(20, 184, 166, 0.5);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 14px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.btn-premium:hover {
  border-color: #14b8a6;
  box-shadow: 0 0 30px rgba(20, 184, 166, 0.2);
  transform: translateY(-2px);
}
/* efect de „shine" care traverseaza butonul la hover */
.btn-premium::after {
  content: "";
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(20,184,166,0.1), transparent);
  transform: skewX(-20deg);
  transition: all 0.7s ease;
}
.btn-premium:hover::after { left: 200%; }
```

### Texturi & glow-uri
Textură de film (grain) peste toată pagina — subtilă, dă senzația „premium":
```css
.bg-noise {
  position: fixed;
  inset: 0;
  width: 100vw; height: 100vh;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 50;
}
```
Glow pe text (halou fin în jurul cuvintelor accentuate):
```css
.text-glow-copper { text-shadow: 0 0 25px rgba(200, 155, 123, 0.3); }
.text-glow-teal   { text-shadow: 0 0 25px rgba(20, 184, 166, 0.3); }
```
Gradient radial „mistic" pe fundalul unei secțiuni:
```css
.mystic-gradient {
  background: radial-gradient(circle at 50% 50%, rgba(20,184,166,0.05) 0%, rgba(5,5,5,1) 60%);
}
```

### Inputuri de formular (relevant pentru formular.wayfindercoaching.ro)
Așa arată câmpurile în stilul ăsta:
```css
.field {
  width: 100%;
  background: #050505;
  border: 1px solid rgba(255, 255, 255, 0.10);
  padding: 16px;
  color: #fff;
  font-size: 16px; /* min 16px ca sa nu faca zoom pe iOS */
  border-radius: 4px;
  transition: border-color 0.2s ease;
}
.field::placeholder { color: #52525b; }
.field:focus {
  outline: none;
  border-color: #14b8a6; /* focus = teal */
}
/* label vizibil DEASUPRA campului, nu doar placeholder */
.field-label {
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #C89B7B;
  margin-bottom: 8px;
}
```

### Scrollbar personalizat
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #050505; }
::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #C89B7B; }
```

---

## 5. Border-radius (colțuri)

Regulă anti-„template": colțuri **mici și consistente**, nu rotunjimi mari peste tot.
- Carduri, inputuri, butoane: `4px` (`rounded-sm`)
- Elemente circulare (logo, avatar): `9999px` (cerc perfect)
- NU folosi `border-radius: 16px+` pe carduri — asta dă aspectul de „SaaS starter".

---

## 6. Mișcare & animație

Discretă, cu scop. Fără animații care sar în ochi.

- **Reveal la scroll:** elementele apar cu fade + translate up (12px) când intră în viewport.
  Durată `1200ms`, easing `cubic-bezier(0.16, 1, 0.3, 1)`. Se declanșează o singură dată.
- **Hover pe carduri:** fundal ușor mai deschis (`rgba(255,255,255,0.04)`) + ridicare 4px.
- **Tranziții:** `transition: all 0.4s ease` pe elemente interactive.
- **Respectă `prefers-reduced-motion`** — oprește animațiile pentru cine are setarea activă:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## 7. Reguli de aur (checklist rapid)

Când adaptezi formularul, verifică:

- [ ] Fundal `#050505`, NU alb, NU gri deschis.
- [ ] Titluri în **Playfair Display**, text în **Inter**. Doar aceste două fonturi.
- [ ] Accente doar **teal `#14b8a6`** și **copper `#C89B7B`**. Fără mov, fără albastru-electric, fără gradient mov→albastru.
- [ ] Text de corp în griuri (zinc-400), NU alb peste tot.
- [ ] Colțuri mici (`4px`), NU rotunjimi mari.
- [ ] Borduri = alb translucid (`rgba(255,255,255,0.05)`), NU gri solid.
- [ ] Padding vertical generos pe desktop, redus pe mobil.
- [ ] Un accent italic + colorat pe cuvântul-cheie din fiecare titlu important.
- [ ] Inputuri: fundal negru, focus teal, label vizibil deasupra (nu doar placeholder).
- [ ] Text minim 16px, mai ales pe inputuri (altfel iOS face zoom).
- [ ] `text-wrap: balance` pe titluri, `pretty` pe paragrafe → fără cuvinte orfane.
- [ ] Buton principal = `.btn-premium` (bordură teal + shine la hover).
- [ ] Testează pe mobil (375px): fără scroll orizontal.

---

## 8. Ce să EVIȚI (anti-patterns)

Ca să NU arate „generat de AI" sau „de template":
- ❌ Gradient mov/violet/indigo.
- ❌ Grila de 3 coloane cu „icon în cerc colorat + titlu + 2 rânduri".
- ❌ Totul centrat (`text-align: center` peste tot).
- ❌ Colțuri foarte rotunjite pe orice.
- ❌ Emoji ca elemente de design.
- ❌ Fundal alb plat.
- ❌ Al treilea font.
- ❌ Culori stridente/saturate.

---

*Sursă: codul landing page-ului Alex Varga (`suntalexvarga/coaching-landing`).*
*Referință live: pagina principală. Valorile de mai sus sunt extrase direct din
`globals.css` și `layout.tsx`, nu aproximate.*
