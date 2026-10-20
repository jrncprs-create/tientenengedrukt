# Tientenengedrukt — Joep portfolio

Minimale Next.js portfolio-site (App Router, TypeScript, lokale data).

## Starten

```bash
cd "/Users/hd/Documents/PlatformIO/Projects/Tientenengedrukt"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Home met hero + selected work
- `/work` — Alle projecten
- `/work/[slug]` — Projectdetail
- `/about` — Over
- `/contact` — Contact
- `/legal` — Legal placeholder

## Content aanpassen

- Projecten: `lib/projects.ts`
- Contact & socials: `lib/site.ts`
- Beelden: vervang bestanden in `public/images/` en update paden in `lib/projects.ts`
