# Cum să pui site-ul online pe Vercel (GRATIS)

## Metoda 1: Prin Vercel Dashboard (CEL MAI UȘOR) ⭐

### Pasul 1: Pregătește codul
```bash
# Asigură-te că ai toate schimbările commit-ate
git add .
git commit -m "Ready for deployment"
git push
```

### Pasul 2: Conectează cu GitHub
1. Mergi pe https://vercel.com
2. Sign up / Login cu contul tău GitHub
3. Click pe **"Add New Project"**
4. Selectează repository-ul `alex-varga-coach-landing`
5. Vercel detectează automat că e un proiect Next.js

### Pasul 3: Configurează (de obicei nu trebuie să schimbi nimic)
- **Framework Preset**: Next.js (detectat automat)
- **Root Directory**: `./` (sau `alex-varga-coach-landing` dacă e într-un monorepo)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

### Pasul 4: Deploy!
- Click **"Deploy"**
- Așteaptă 1-2 minute
- Gata! 🎉 Site-ul tău e live pe un URL de tip `alex-varga-coach-landing.vercel.app`

---

## Metoda 2: Prin Vercel CLI (dacă preferi terminalul)

### Instalare CLI (local, în terminalul tău):
```bash
npm i -g vercel
# SAU
npx vercel
```

### Deploy:
```bash
cd alex-varga-coach-landing
vercel
```

Urmează instrucțiunile:
- Login cu contul tău Vercel
- Confirmă setările (de obicei default-urile sunt OK)
- Deploy!

---

## Configurare automată pentru viitor

După primul deploy, Vercel va:
- ✅ Deploy automat la fiecare push pe `main` branch
- ✅ Creează preview deployments pentru fiecare pull request
- ✅ Totul GRATIS pe planul Hobby

---

## Note importante:

1. **Variabile de mediu**: Dacă ai nevoie de `.env` variables, le adaugi în Vercel Dashboard → Project Settings → Environment Variables

2. **Custom domain**: Poți adăuga un domeniu personalizat GRATIS în Project Settings → Domains

3. **Build errors**: Dacă apare o eroare la build, verifică:
   - Toate dependențele sunt în `package.json`
   - Nu există erori de TypeScript (`npm run build` local)
   - Toate fișierele necesare sunt în repository

---

## Verificare rapidă înainte de deploy:

```bash
# Testează build-ul local
npm run build

# Dacă merge, ești gata! 🚀
```
