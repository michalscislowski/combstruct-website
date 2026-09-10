# Combstruct website

The current customer website lives in `site/`: the approved Polish landing page, Combstruct 30/90/125 catalogue, material and assembly prices including VAT, three interactive structural models, and one web video.

## Run locally

Node.js is sufficient; the current static website has no install step.

```sh
npm run dev
```

Open http://127.0.0.1:4173. `npm run build` verifies local asset references and creates `dist/` from `site/`. `npm start` serves an existing build, including video byte ranges and the configured legacy redirects.

## Vercel

The existing GitHub/Vercel integration is retained. `vercel.json` overrides the previous framework preset, skips dependency installation, builds with `node scripts/build-site.mjs`, and publishes only `dist/`. No local parent folders, reports, source measurements, or business documents are included in the deployed directory.

The previous Next.js source remains in the repository for reference and is excluded from the static build. Its root locale middleware has been removed because Vercel auto-discovers it even with the framework set to Other; locale redirects now live only in `vercel.json`. The build checks for leftover middleware. The previous production revision is `b300607de6ce90f30e1e33ee88a673fae56bded8`. Git history and earlier Vercel deployments allow restoring it.

The new site is Polish. Old `/en`, `/pl`, and `/de` entry points redirect to it; old contact/project/system/FAQ URLs redirect to their current equivalents. No English or German translation of the new copy is claimed.

Contact links open `kontakt.html`, which uses the existing published `contact@combstruct.com` mail address. No mail delivery integration is configured, and there is no simulated form submission. The previous source contained a placeholder phone number and a form that only logged data and displayed an alert; these are not exposed in the new deployment.

## Updating content

Edit `site/index.html`, `site/projekty.html`, and the associated CSS/JS. Prices are pre-rendered with their material and assembly alternatives; each project retains an independent switch. Copy, quantities, VAT labels, and the 1–2 week assembly estimate match the approved local version.

The lightweight film is `site/assets/combstruct-spot-web.mp4`. It retains its original audio/video bytes. The models and native beam profiles are copied unchanged. Public display libraries retain their bundled licence notices.

The initial migration was prepared from the approved `outputs/combstruct-website` artefact in the local Combstruct workspace. The packaging helper stays in that workspace; it is not required to build this repository.
