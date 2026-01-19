# Project Context – Landing Page Coaching 1:1 pe Autosabotare

## Tech & Structure

- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind CSS
- Layout: 12-column responsive grid (desktop), single-column stacked on mobile
- Single-page landing at `/` (file: `src/app/page.tsx`)
- Structură pe secțiuni clare, în ordinea de mai jos
- Toate textele în **limba română**

## Brand & Tone

- Nume utilizat în site (placeholder): **Alexandru Varga**
- Rol: coach 1:1 pe autosabotare / tipare de autosabotare
- Ton:
  - direct, calm, inteligent
  - fără hype, fără motivațional ieftin
  - orientat spre rezultat și comportament
  - zero spiritual generic
  - matur, clar, profesionist
- Mesaj: „nu te repar, nu te motivez”, ci:
  - clarific mecanisme
  - structurăm comportamente
  - lucrăm aplicat, pe viața ta reală

---

## Visual Design / UI

### General

- Stil clean, minimalistic
- Predominant **white / off-white background**
- Accent colors: tonuri premium **beige / gold** (buton, linii subtile, mici accente)
- Text: negru / gri închis, contrast bun
- Mult **whitespace**, respirație vizuală, line-height mare
- Simetrie, structură clară, aspect editorial premium

### Layout

- Desktop:
  - 12-column grid
  - Content max-width: ~1100–1200px, centrat
  - Margini laterale generoase
  - Spațiere verticală liniștită, secțiuni bine delimitate
- Mobile:
  - Single column, padding lateral consistent
  - CTA-urile mereu full-width sau aproape full-width
  - Tipografie redusă, dar clară

### Typography

- Pairing:
  - **Serif**: pentru H1, H2, citate, elemente de autoritate
  - **Sans-serif**: pentru body text, bullets, butoane
- Stil:
  - H1 mare, clar, fără all caps
  - Subheadline lizibil, line-height ridicat
  - Paragrafe relativ scurte, aerisite

### Componente

- CTA buttons:
  - formă: rectangular, small radius (2–4px) sau zero radius
  - fill: accent neutru premium (beige închis / gold discret)
  - text: bold, contrast puternic, uppercase sau small caps opțional
  - hover: schimbare discretă de nuanță / mică umbră
- Card-uri:
  - testimoniale / pachete în carduri simple, cu bordură subțire sau shadow foarte subtil
- Motion:
  - doar fade-in / mic slide-up la scroll
  - no flashy / bounce / parallax agresiv
- Imagery:
  - high-resolution human imagery cu fundal neutru
  - fără stock evident, fără clișee „coach” (nu oameni pe munte, nu handshake-uri corporatiste)
  - hero: portret simplu, profesional, natural (placeholder imagine)

---

## Functionality

- CTA principal:
  - Text: **„Programează o discuție scurtă”**
  - Link: placeholder `[CTA_LINK]` (de completat ulterior – ex. formular / Calendly)
- CTA secundar ofertă:
  - Text: **„Vreau să încep”**
  - Link: același `[CTA_LINK]` sau alt placeholder `[CTA_START_LINK]`
- Testimoniale:
  - zone pentru 3–6 carduri cu text + placeholders pentru screenshot-uri
  - de menționat explicit: „Aici încarci screenshot-uri WhatsApp / email.”

---

## Page Structure (Sections in Order)

1. HERO
2. PENTRU CINE ESTE
3. PROBLEMA REALĂ (CE SE ÎNTÂMPLĂ ÎN TINE)
4. METODA (CUM LUCRĂM)
5. STRUCTURA PROCESULUI (4 ȘEDINȚE)
6. CE OBȚII (OUTCOMES)
7. OFERTA (PACHETE)
8. TESTIMONIALE
9. ORIGIN STORY (DESPRE MINE)
10. FAQ
11. CTA FINAL

---

## SECTION 1 – HERO

### Layout

- Hero full-width cu background off-white
- Layout desktop:
  - stânga: text (headline, subheadline, micro-promise, CTA)
  - dreapta: portret coach + mic text sub imagine (ex: nume + „Coaching 1:1 pe autosabotare”)

### Content

**Headline:**

> Îți sabotezi propriile planuri fără să înțelegi de ce?

**Subheadline (2 fraze):**

> Coaching 1 la 1 pentru oameni care vor rezultate reale, nu motivație de o zi.  
> Dacă trăiești mai mult reacționând decât construind și te învârți între „ar trebui” și „nu reușesc să mă țin”, te sprijin să înțelegi ce te oprește și să construiești un mod de a acționa pe care să te poți baza.

**Micro promise:**

> În 4 ședințe punem pe masă ce te ține blocat, cum funcționează, ce parte din tine trage frâna și cum o transformi în aliat.

**CTA:**

- Primary button: **„Programează o discuție scurtă”**
- Subtext (2 linii sub buton, tip body small):

> 20 de minute în care vei afla dacă ești pregătit să lucrezi la ceea ce amâni de ani de zile.  
> Fără presiune. Vedem dacă are sens să lucrăm împreună.

**Hero image:**

- Placeholder pentru portret simplu, profesional (dreapta)
- Sub imagine, text mic:
  - „Alexandru Varga”
  - „Coaching 1:1 pe autosabotare și comportament”

---

## SECTION 2 – PENTRU CINE ESTE

### Layout

- Secțiune cu background alb, cu titlu centrat și content în 2 coloane pe desktop
  - stânga: intro + bullets „E pentru tine dacă…”
  - dreapta: o mică casetă „Nu este pentru tine dacă…”

### Content

**Intro:**

> E pentru tine dacă te-ai săturat să fii mereu în modul „sting incendii” și vrei să construiești ceva care depinde de tine.

**Bullets (E pentru tine dacă):**

- Ai trăit mult timp reactiv și simți că viața ta e mai mult „rezolvat” decât „ales”.
- Începi lucruri, dar nu le duci până la capăt.
- Te pierzi în analiză, perfecționism sau amânare.
- Te apasă teama de eșec sau teama că, dacă reușești, vei fi văzut / judecat / respins.
- Ai senzația că nu poți conta constant pe tine, chiar dacă din exterior „te descurci”.

**Not for you (într-o casetă separată):**

Titlu mic: „Nu este pentru tine dacă…”

Text:

> Nu este pentru tine dacă vrei o soluție magică și nu ești dispus să fii sincer cu tine.

---

## SECTION 3 – PROBLEMA REALĂ (CE SE ÎNTÂMPLĂ ÎN TINE)

### Layout

- Secțiune cu vibe editorial, mai mult text, paragrafe scurte
- Serif pentru titlu, sans-serif pentru paragrafe
- Max-width mai îngust pentru text (pentru confort)

**Title:**

> Problema reală: ce se întâmplă, de fapt, în tine

**Body (curățat, fără repetiții):**

> Reacționezi, nu alegi. Ai multă informație, ai citit, ai înțeles lucruri. Dar, în practică, te-ai obișnuit să răspunzi la ce vine din exterior.  
> Când trăiești pe modul „rezolv ce e important pentru alții”, nu mai rămâne timp și spațiu pentru ce e important pentru tine.  
> În timp, când apare ceva important de făcut pentru tine, parcă nu mai poți conta pe tine.

> De cele mai multe ori, nu lipsa de informație e problema. Ci faptul că ai fost mult timp antrenat să reacționezi, nu să alegi.  
> Când trăiești în modul „rezolv ce apare”, se creează o convingere tăcută: „nu pot conta pe mine”.

> Anxietatea devine o alarmă permanentă. Autosabotarea devine „logică”. Și ajungi să te oprești exact când contează.

> Noi nu ne luptăm cu aceste mecanisme. Le înțelegem, le decodăm și le folosim în favoarea ta.  
> Vrei să înveți să nu te mai lupți cu tine, ci să lucrezi cu tine? Asta facem aici.

---

## SECTION 4 – METODA (CUM LUCRĂM)

### Layout

- Background foarte deschis (ușor off-white)
- Titlu + scurt intro
- 3 carduri / blocuri orizontale sau în grid:
  - Claritate psihologică / mentală
  - Reglaj emoțional
  - Strategie aplicată

**Title:**

> Metoda mea

**Intro (explicativ, profesionist):**

> Lucrăm în sesiuni 1 la 1, live, într-un proces structurat, dar flexibil.  
> Nu îți dau „rețete rapide”, ci te ajut să înțelegi precis cum funcționezi, ce te blochează și ce ai de făcut, concret, diferit.  
> Lucrăm pe trei niveluri, în paralel:

**Block 1 – Claritate psihologică / mentală**

Subtitlu: „Claritate psihologică / mentală”

Text:

> Identificăm mecanismul exact: ce te declanșează, ce poveste rulează în fundal, ce beneficii ascunse are blocajul.  
> Nu rămânem la „mă autosabotez”. Coborâm la:
> - ce anume activează reacția,
> - ce îți spui în minte în acel moment,
> - ce rol are, de fapt, partea care trage frâna.  
> Când vezi clar harta, nu mai pare „un haos”, ci un proces logic pe care îl poți influența.

**Block 2 – Reglaj emoțional**

Subtitlu: „Reglaj emoțional”

Text:

> Emoțiile sunt feedback, nu defect. Nu încercăm să le „oprim”, ci să le înțelegem.  
> Înveți să:
> - recunoști diferența dintre emoție și povestea despre ea,
> - stai cu emoția fără să intri în spirala de overthinking,
> - iei decizii fără să fugi de disconfort.  
> Scopul nu e „să nu mai simți nimic”, ci să nu mai fii condus de reacții automate.

**Block 3 – Strategie aplicată**

Subtitlu: „Strategie aplicată”

Text:

> Transformăm „vreau să” în direcție, pași mici și consistență.  
> Nu lucrăm cu planuri rigide, imposibil de susținut.  
> Ne uităm la:
> - ce depinde cu adevărat de tine,
> - care este cel mai mic pas realist,
> - cum urmărești progresul fără să te lovești cu perfecționismul.  
> Accent pe consistență, nu pe performanță spectaculoasă de o zi.

**Detalii proces (sub blocuri, text scurt):**

> Lucrăm online, prin video call. Între ședințe poți primi exerciții, reflecții sau mici experimente de făcut în viața ta reală.  
> Scopul fiecărei întâlniri este să pleci cu claritate + un pas concret, nu cu „inspirație” care se stinge în 24 de ore.

---

## SECTION 5 – STRUCTURA PROCESULUI (4 ȘEDINȚE)

### Layout

- Titlu + 4 carduri numerotate (S1–S4), într-un grid sau listă verticală

**Title:**

> Cum arată colaborarea (4 ședințe)

**Cards:**

- **S1 – Harta problemei**  
  > Clarificăm tiparul: trigger → gând → emoție → reacție → consecință.  
  > Pui pe masă exemple concrete din viața ta, nu scenarii teoretice. La final, ai o hartă clară a modului în care funcționează autosabotarea la tine.

- **S2 – Conflictul intern**  
  > Partea care vrea să crească și partea care vrea siguranță. Le identificăm și le punem la aceeași masă.  
  > În loc să încerci să „învingi” o parte din tine, înveți să o înțelegi și să o transformi în aliat.

- **S3 – Rescrierea strategiei**  
  > Schimbăm structura din minte, nu doar conținutul. Ne uităm la ce faci, când, cum și de ce.  
  > Ajustăm modul în care iei decizii și îți planifici acțiunile, astfel încât să fie aliniate cu ce vrei, nu cu fricile automate. Asta schimbă emoția și comportamentul.

- **S4 – Integrare**  
  > Plan simplu pe 30 de zile: ce continui, ce oprești, ce începi.  
  > Accent pe consistență, nu perfecțiune. Ajustăm ce nu funcționează și stabilim cum vei ști că ești pe direcția potrivită.

**Disclaimer (sub carduri, text mic):**

> Chiar dacă acesta este cadrul propus, lucrăm cu ce este prioritar pentru tine.  
> Dacă în timpul procesului apare o problemă cu o urgență mai mare decât ce am stabilit inițial, ne concentrăm pe ea și ajustăm împreună structura.

---

## SECTION 6 – CE OBȚII (OUTCOMES)

### Layout

- Background alb, titlu + subtitlu, apoi listă de rezultate
- Ton calm, fără promisiuni exagerate

**Title:**

> Ce obții concret

**Subtitle:**

> Atât cât te implici, atât obții la final. Fair?

**Intro (narrativ, onest):**

> Claritate, dar nu îți promit că îți va fi mai ușor.  
> Direcție, dar nu și rezultate fără să te miști.

**Bullets / paragrafe:**

> Lucrurile nu devin neapărat mai ușoare. Dar devin mai clare.  
> Nu mai trăiești doar reacționând. Nu mai abandonezi lucruri importante pe drum.

> Îți oprești spirala anxietății mai repede și revii la acțiune.  
> Înveți, pas cu pas, să contezi pe tine.  
> Nu pe chef. Nu pe context. Pe tine.

---

## SECTION 7 – OFERTA (PACHETE)

### Layout

- Două carduri de pachet, side-by-side pe desktop, stacked pe mobile
- CTA „Vreau să încep” sub carduri

**Title:**

> Pachete (temporar)

**Pachet 1 – START**

Descriere în card:

- 4 ședințe 1:1 (săptămânal)
- suport scurt între ședințe, orientat pe aplicare (mesaje scurte / clarificări)
- exerciții și resurse personalizate

Placeholder preț (text mic):

> Investiție: [de completat]

**Pachet 2 – DEEP DIVE**

Descriere în card:

- tot ce include START
- + 1 ședință extra de follow-up (după 2 săptămâni)
- + protocol de menținere pe 30 de zile

Placeholder preț:

> Investiție: [de completat]

**CTA sub pachete:**

- Button: **„Vreau să încep”** → link `[CTA_LINK]` sau `[CTA_START_LINK]`
- Micro note (text mic sub CTA):

> Dacă nu știi ce pachet ți se potrivește, clarificăm în discuția scurtă.

---

## SECTION 8 – TESTIMONIALE

### Layout

- Titlu + grid de 3–6 carduri
- Fiecare card: citat scurt + nume/opțional oraș
- Sub grid: notă despre screenshot-uri

**Title:**

> Ce spun oamenii cu care am lucrat

**Instruction placeholder (în text, ca să știe utilizatorul ce să facă):**

> Aici încarci screenshot-uri WhatsApp sau citate scurte, concrete.  
> Evită formulările vagi de tip „a fost wow”.

**Template testimonial card (text generic):**

- Card 1 – finalizare lucruri:

> „Am trecut de la a începe 5 proiecte și a nu termina niciunul, la a duce la capăt exact ce îmi propun, pas cu pas.”  
> — [Nume], [oraș] (opțional)

- Card 2 – anxietate & overthinking:

> „Anxietatea nu a dispărut complet, dar nu mai conduce ea. În loc să intru în bucle de overthinking, știu ce am de făcut concret.”  
> — [Nume], [oraș]

- Card 3 – din reacție în direcție:

> „Trăiam în modul ‘sting incendii’. Acum știu foarte clar care sunt direcțiile mele și îmi fac timp pentru ele fără să mă simt vinovat.”  
> — [Nume], [oraș]

**Sub testimoniale (text mic):**

> Poți folosi 3–6 screenshot-uri reale din conversații (WhatsApp / email) în locul sau pe lângă citatele scrise.

---

## SECTION 9 – ORIGIN STORY (DESPRE MINE)

### Layout

- Secțiune „Despre mine” cu text în stânga și (opțional) o fotografie mică sau o versiune diferită a portretului în dreapta
- Ton personal, dar matur

**Title:**

> Despre mine

**Body:**

> O perioadă bună din viața mea n-am fost „blocat”. Eram ocupat. Foarte ocupat.  
> Stingeam incendii. Rezolvam ce apărea. Răspundeam la ce cereau alții. Trăiam într-un mod reactiv, convins că asta înseamnă să fii responsabil.

> Nu mă uitam la ce depinde de mine. Nu pentru că nu voiam, ci pentru că nu credeam că pot prea mult pe cont propriu.  
> Stima mea de sine era mică, chiar dacă din exterior nu se vedea neapărat. Așa că începeam proiecte și le abandonam. Nu din lipsă de idei, ci din lipsă de încredere că pot duce ceva până la capăt.

> Din afară părea lipsă de disciplină. Din interior era o convingere tăcută: „nu pot conta pe mine”.  
> Autosabotarea mea nu era zgomotoasă. Era liniștită. Se manifesta prin amânare, prin prioritățile altora puse înaintea mea, prin renunțări „raționale”.

> Procesul pe care îl folosesc azi vine de acolo. Din mutarea atenției de la ce se întâmplă în jur la ce pot face eu, constant, chiar și cu frică.  
> Lucrez cu oameni care se recunosc în asta. Oameni care au fost mult timp ocupați să se adapteze și care simt că e momentul să construiască ceva al lor.

**Sub text (mic):**

> Nume afișat: **Alexandru Varga**  
> (poți înlocui ulterior cu numele final și cu detalii de formare profesională, dacă vrei.)

---

## SECTION 10 – FAQ

### Layout

- Titlu + listă de întrebări expandabile (accordion) sau simple Q&A blocks

**Title:**

> Întrebări frecvente

**Q&A:**

- **Q1: „Nu sunt chiar atât de rău. Are sens pentru mine?”**  
  **A:** Nu trebuie să fii „la pământ” ca să beneficiezi de coaching pe autosabotare.  
  Autosabotarea e subtilă. Dacă te regăsești în tiparul de „încep, dar nu duc la capăt”, „știu ce am de făcut, dar nu fac”, are sens să explorăm.

- **Q2: „Poate nu e pentru mine.”**  
  **A:** Dacă te-ai recunoscut în descriere, merită o discuție scurtă.  
  În acele 20 de minute îți explic cum lucrez, pun întrebări, vezi cum mă simți. Dacă nu e potrivit, îți spun direct.

- **Q3: „Nu cred că pot schimba asta.”**  
  **A:** Autosabotarea nu e personalitate. E un set de comportamente învățate.  
  Ce ai învățat se poate dezînvăța, pas cu pas. Nu îți promit magie. Îți propun muncă aplicată și structură.

- **Q4: „E terapie?”**  
  **A:** Nu. Nu fac diagnostic clinic.  
  Lucrăm pe mecanisme, comportamente și implementare în viața ta de zi cu zi.  
  Dacă, pe parcurs, observ că ai nevoie de suport clinic sau de terapie, îți spun clar și, dacă pot, te îndrum mai departe.

- **Q5: „Cum decurge, concret?”**  
  **A:** 4 ședințe 1:1, online, cu exerciții între ele, tracking simplu și aplicare în viața reală.  
  Fiecare sesiune are un focus clar, iar la final pleci cu un pas concret, nu doar cu idei.

- **Q6: „Ce se întâmplă dacă sunt foarte ocupat?”**  
  **A:** Tocmai atunci are sens. Procesul e construit să fie aplicabil, nu consumator de timp.  
  Nu îți umplu agenda cu teme. Ne uităm la cum să introduci schimbările în contextul vieții pe care o ai deja.

---

## SECTION 11 – CTA FINAL

### Layout

- Secțiune de închidere, background off-white
- Text centrat, CTA principal, subtext

**Main text:**

> Vrei să poți conta pe tine?

**Body:**

> Dacă te-ai regăsit în rândurile de mai sus, nu ai nevoie de mai multă motivație.  
> Ai nevoie de claritate și de un sistem care să te învețe, din nou, să contezi pe tine.

**CTA button:**

- Text: **„Programează o discuție scurtă”**  
- Link: `[CTA_LINK]`

**Subtext CTA:**

> 20 de minute. Cost: 20 de minute pentru amândoi. Fără presiune.

---

## Implementation Notes for Cursor

- Fă layout complet responsive (desktop + mobile).
- Folosește un singur fișier principal de pagină (`src/app/page.tsx`) și componente separate dacă e nevoie (Hero, Section, FAQ etc).
- Folosește Tailwind pentru spacing, font sizes, culori, grid.
- Respectă:
  - whitespace generos,
  - tipografie calmă,
  - butoane simple,
  - fără elemente vizuale stridente.
- Lasă comentarii clare în cod unde trebuie înlocuite:
  - `[CTA_LINK]`
  - `[CTA_START_LINK]`
  - testimonial screenshots
  - hero image
  - logo-uri de social proof
::contentReference[oaicite:0]{index=0}
