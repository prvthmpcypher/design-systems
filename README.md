# 🏛️ Architect Portfolio Website

A sleek, scroll-driven portfolio site for architects — built with **React**, **Tailwind CSS v4**, and **Framer Motion**. Originally designed in Figma and exported via **Figma Make**.

Live blueprint grid animations, parallax hero, project cards with hover overlays, and a full shadcn/ui component library under the hood.

---

## ✨ Features

- **Animated Blueprint Grid** — SVG grid lines that draw on load
- **Scroll-driven Hero** — parallax opacity + scale with isometric building illustration
- **Signature Projects** — 3-column masonry with hover blueprint overlay
- **Design Process** — 4-step workflow with animated entry
- **Awards Section** — staggered slide-in list
- **Studio & Contact** — responsive split layout + office locations
- **Dark mode ready** — full CSS variable theming with `.dark` class support

---

## 🛠️ Tech Stack

| Tool | Version |
|---|---|
| React | 18.3.1 |
| Vite | 6.3.5 |
| Tailwind CSS | 4.1.12 |
| Framer Motion | 12.x |
| shadcn/ui (Radix) | Full suite |
| Lucide React | 0.487.0 |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm i

# Start dev server
npm run dev

# Build for production
npm run build
```

> Uses `pnpm` workspace by default. `npm` works too.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx              # Main layout + all sections
│   └── components/
│       ├── figma/           # ImageWithFallback utility
│       └── ui/              # Full shadcn/ui component library
├── styles/
│   ├── theme.css            # Design tokens (blueprint color palette)
│   ├── fonts.css            # Inter font import
│   └── index.css            # Entry stylesheet
└── main.tsx
```

---

## 🎨 Design Tokens

Custom blueprint-inspired palette defined in `src/styles/theme.css`:

```css
--blueprint-navy:      #0a1628
--blueprint-blue:      #1e3a8a
--blueprint-light-blue:#3b82f6
--blueprint-grid:      rgba(30, 58, 138, 0.15)
```

---

## 📸 Image Credits

Photos via [Unsplash](https://unsplash.com) — see `ATTRIBUTIONS.md` for license.  
UI components from [shadcn/ui](https://ui.shadcn.com) under [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

---

## 🔧 Customization

Edit `src/app/App.tsx` to swap out:
- **Projects** — update the `projects` array in `SignatureProjects()`
- **Awards** — update the `awards` array in `Awards()`
- **Contact info** — office addresses in `Contact()`
- **Colors** — all tokens in `src/styles/theme.css`

Guidelines for AI-assisted customization are in `guidelines/Guidelines.md`.

---

Made with 🧱 using Figma Make → React