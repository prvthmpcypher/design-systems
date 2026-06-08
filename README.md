# 🎨 Design Systems

A curated collection of **production-ready React UI templates** — each designed in Figma and exported via **Figma Make**. Built with React 18, Tailwind CSS v4, Framer Motion, and shadcn/ui.

Clone any folder, run `npm i && npm run dev`, and you have a fully animated, responsive site ready to customize.

---

## 📦 Projects

| Project | Type | Description |
|---|---|---|
| `Architect Portfolio Website` | Portfolio | Blueprint-themed, scroll-driven animations, SVG grid |
| `Artist Portfolio Website` | Portfolio | Creative, gallery-focused layout |
| `Cinematic Photographer Portfolio` | Portfolio | Dark, immersive full-screen visuals |
| `Immersive Music Producer Portfolio` | Portfolio | Audio-inspired interactive UI |
| `Interactive Data Portfolio Website` | Portfolio | Chart-heavy, data visualization focus |
| `Interactive Game Developer Portfolio` | Portfolio | Bold, game-UI aesthetic |
| `Language Learning Mobile App` | Mobile UI | App mockup with lesson flows |
| `Musify Mobile App Mockup` | Mobile UI | Music streaming app UI |
| `Portfolio Website Design` | Portfolio | Clean general-purpose template |
| `cypher` | Brand | Personal brand / Cypher project files |

---

## 🛠️ Tech Stack (all projects)

| Tool | Version |
|---|---|
| React | 18.3.1 |
| Vite | 6.3.5 |
| Tailwind CSS | 4.1.12 |
| Framer Motion | 12.x |
| shadcn/ui (Radix UI) | Full suite |
| Lucide React | 0.487.0 |

---

## 🚀 Getting Started

Each project is self-contained. Navigate into any folder and run:

```bash
cd "Architect Portfolio Website"

npm i
npm run dev
```

> `pnpm` workspace is configured by default. `npm` works too.

---

## 📁 Folder Structure (per project)

```
ProjectName/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Main layout & sections
│   │   └── components/
│   │       ├── figma/           # Figma utilities (ImageWithFallback)
│   │       └── ui/              # shadcn/ui component library
│   └── styles/
│       ├── theme.css            # Design tokens & color palette
│       ├── fonts.css            # Google Fonts import
│       └── index.css            # Entry stylesheet
├── guidelines/
│   └── Guidelines.md            # AI customization rules
├── vite.config.ts
└── package.json
```

---

## 🎨 Design System

All projects use CSS variable-based theming defined in `src/styles/theme.css`. Supports light and dark mode out of the box.

UI components are from [shadcn/ui](https://ui.shadcn.com) under [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).  
Photos via [Unsplash](https://unsplash.com) — see `ATTRIBUTIONS.md` in each project.

---

## ✏️ Customization

Each project has a `guidelines/Guidelines.md` with rules for AI-assisted editing. For manual customization, edit the `App.tsx` data arrays (projects, awards, etc.) and token values in `theme.css`.

---

> Built with [Figma Make](https://www.figma.com/make) → React · by [prvthmpcypher](https://github.com/prvthmpcypher)