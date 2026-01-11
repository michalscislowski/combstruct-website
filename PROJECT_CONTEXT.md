# Combstruct Website - Project Context

## Overview
Corporate website for Combstruct - a Polish construction company specializing in sustainable, prefabricated wood-frame buildings using CNC-cut plywood technology (similar to WikiHouse).

**Live URL:** https://combstruct.com
**Repository:** https://github.com/michalscislowski/combstruct-website

---

## Tech Stack
- **Framework:** Next.js 16.1.1 with App Router
- **React:** 19.x
- **Styling:** Tailwind CSS 4 with CSS variables
- **Animations:** Framer Motion
- **i18n:** next-intl (EN, PL, DE locales)
- **Deployment:** Vercel
- **Icons:** Lucide React

---

## Design System
Minimal, light aesthetic with sharp edges (no border-radius):

```css
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
  --secondary: #f7f7f7;
  --muted: #525252;
  --border: #e5e5e5;
  --primary: #1a1a1a;
}
```

---

## Key Features Implemented

### Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/[locale]` | Hero video, features, projects showcase |
| Products | `/[locale]/products` | Panel system, technical specs, applications |
| Process | `/[locale]/process` | 4-phase build process with videos |
| Projects | `/[locale]/projects` | Project gallery with filtering |
| About | `/[locale]/about` | Company story, team, values |
| FAQ | `/[locale]/faq` | Technical FAQ with accurate data |
| Contact | `/[locale]/contact` | Contact form + Cost Calculator |
| Blog | `/[locale]/blog` | Blog listing (placeholder) |

### Special Components
- **Cost Calculator** (`components/ui/CostCalculator.tsx`)
  - Real-time pricing based on: building type, area, storeys, insulation, finishing level, self-build option
  - Base cost: 2,600 PLN/m² vs traditional 4,800 PLN/m²
  - Shows savings, build time comparison, CO2 reduction
  - Currency switches based on locale (PLN for PL, USD for EN)

- **Hero Video** (`components/sections/Hero.tsx`)
  - Auto-playing background video with fade-in transition
  - `object-contain` to show full frame

---

## File Structure Highlights

```
combstruct-website/
├── app/
│   ├── [locale]/           # i18n routing
│   │   ├── page.tsx        # Home
│   │   ├── products/
│   │   ├── process/
│   │   ├── projects/
│   │   ├── about/
│   │   ├── faq/
│   │   ├── contact/
│   │   └── blog/
│   ├── globals.css         # Design system variables
│   └── layout.tsx
├── components/
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   ├── ui/                 # Reusable components
│   │   ├── CostCalculator.tsx
│   │   ├── Section.tsx
│   │   └── ...
│   └── layout/             # Header, Footer, Navigation
├── messages/
│   ├── en.json             # English translations
│   ├── pl.json             # Polish translations
│   └── de.json             # German translations
├── public/
│   └── images/             # All media (images + videos)
└── i18n/                   # next-intl configuration
```

---

## Key Technical Data (for FAQ/Calculator)

| Metric | Combstruct | Traditional |
|--------|------------|-------------|
| Cost per m² | 2,600 PLN | 4,800 PLN |
| Build time | 1-4 weeks | 6-12 months |
| CO2 emissions | ≤150 kg/m² | 600-750 kg/m² |
| U-value (walls) | 0.09 W/m²K | 0.20 W/m²K |
| Fire rating | REI 60 | - |
| Structural warranty | 50 years | - |

---

## Deployment

```bash
# Deploy to Vercel
vercel --prod --yes

# Or push to main branch (auto-deploys)
git push origin main
```

**Vercel Project:** combstructs-projects/combstruct-website
**Custom Domain:** combstruct.com (configured)

---

## Media Assets Location
All videos and images are in `/public/images/`:
- `hero-video.mp4` - Main hero background
- `CNC_NASZE.mp4` - CNC manufacturing process
- `featured-project.mp4` - Delivery/preparation phase
- `Dom_Warstwy.jpeg` - Layer diagram
- `Dom_Jednorodzinny.png` - Single-family home
- Various project photos and product images

---

## Translations
All UI text is in `/messages/{locale}.json`. Key namespaces:
- `nav`, `hero`, `features`, `process`, `products`, `projects`, `about`, `faq`, `contact`, `calculator`, `footer`

---

## Potential Future Enhancements
- Blog with actual content/CMS integration
- Project detail pages with full case studies
- Contact form backend (currently just logs to console)
- Image optimization (WebP conversion)
- Analytics integration

---

## Session Notes
Last worked on: January 2026
- Completed cost calculator matching site's minimal aesthetic
- All pages functional with i18n support
- Deployed and live at combstruct.com
