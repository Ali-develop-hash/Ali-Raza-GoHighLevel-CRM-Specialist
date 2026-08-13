# Ali Raza — GoHighLevel CRM Specialist Portfolio

React + Vite portfolio with a Three.js signature hero element, built for a
GoHighLevel CRM specialist targeting US/UK home service, real estate, and
legal clients.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload that folder to Vercel, Netlify, or any static host.

## Where to edit content

- `src/data/content.js` — services list, all 3 project case studies, stats
- `src/components/Contact.jsx` — social links (LinkedIn / Upwork / email) and booking link
- `src/components/Hero.jsx` — headline, subheadline, hero stats

## Adding real screenshots

Each project card in `src/components/ProjectCard.jsx` currently shows a
placeholder box where a screenshot should go. To add a real one:

1. Drop the image file into `src/assets/` (e.g. `astra-pipeline.png`)
2. In `ProjectCard.jsx`, replace the `<div className="project-card__screenshot">`
   placeholder block with an `<img src={yourImportedImage} alt="..." />`
3. Repeat for each project — 2-3 screenshots per project is ideal
   (pipeline view, automation/workflow builder, chatbot or calendar view)

Blur or redact any real client phone numbers/emails in the Astra Driving
School screenshots before using them publicly.

## Design tokens

Colors, fonts, and spacing live as CSS variables in `src/index.css`:

- Background: `#0B0F14` (base), `#12171F` (panels)
- Accent: `#2ED9A8` (emerald), `#F5B841` (amber)
- Fonts: Sora (headings), Inter (body), JetBrains Mono (labels/tags)
