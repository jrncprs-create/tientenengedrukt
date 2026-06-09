# tientenengedrukt

Schone technische basis voor een portfolio-site in Next.js (App Router + TypeScript), zonder uitgewerkte eindcontent.

## Lokaal starten

1. Installeer dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

[http://localhost:3000](http://localhost:3000)

## Build en typecheck

```bash
npm run build
```

De build controleert ook TypeScript-validatie.

## Projectstructuur (belangrijkste bestanden)

- `app/page.tsx`: minimalistische homepage met naam, subtitel en selected work lijst
- `app/work/[slug]/page.tsx`: simpele dynamische projectpagina
- `components/Header.tsx`: hero/header met naam en subtitel
- `components/ProjectIndex.tsx`: overzichtssectie voor projecten
- `components/ProjectCard.tsx`: klikbare projectregel met hover state
- `components/ScrollReveal.tsx`: herbruikbare IntersectionObserver reveal component
- `data/projects.ts`: tijdelijke projectdata die homepage en detailpagina voedt
- `public/images/projects/_placeholder/placeholder.svg`: tijdelijke placeholder voor beeld

## Projecten aanpassen

- Pas projectinhoud aan in `data/projects.ts`
- Voeg/verwissel beelden via paden in `images: string[]`
- Plaats echte bestanden in `public/images/projects/<projectnaam>/...`
- Update daarna de image-paden in `data/projects.ts`

## Styling

- Globale styling staat in `app/globals.css`
- Opzet is sober: zwart/wit, veel witruimte, grote typografie en eenvoudige hover/reveal-states
