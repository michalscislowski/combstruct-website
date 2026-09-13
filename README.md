# Combstruct website

The current customer website lives in `site/`: the Polish and English landing pages, Combstruct 30/90/125 catalogue, material and assembly prices including VAT, three interactive structural models, the web spot and construction footage.

## Run locally

Node.js is sufficient; the current static website has no install step.

```sh
npm run dev
```

Open http://127.0.0.1:4173. `npm run build` verifies local asset references and creates `dist/` from `site/`. `npm start` serves an existing build, including video byte ranges and the configured legacy redirects.

## Vercel

The existing GitHub/Vercel integration is retained. `vercel.json` overrides the previous framework preset, skips dependency installation, builds with `node scripts/build-site.mjs`, and publishes only `dist/`. No local parent folders, reports, source measurements, or business documents are included in the deployed directory.

The previous Next.js source remains in the repository for reference and is excluded from the static build. Its root locale middleware has been removed because Vercel auto-discovers it even with the framework set to Other; locale redirects now live only in `vercel.json`. The build checks for leftover middleware. The previous production revision is `b300607de6ce90f30e1e33ee88a673fae56bded8`. Git history and earlier Vercel deployments allow restoring it.

Polish stays at the root; English lives under `/en/`. `/en` redirects to `/en/index.html` so relative assets resolve consistently. Old English contact, project and FAQ links keep visitors in English. Old `/pl` and `/de` routes retain their Polish destinations; no German translation is presented.

Contact links open `kontakt.html`, which uses the existing published `contact@combstruct.com` mail address. No mail delivery integration is configured, and there is no simulated form submission. The previous source contained a placeholder phone number and a form that only logged data and displayed an alert; these are not exposed in the new deployment.

## Updating content

Edit `site/index.html`, the catalogue `site/projekty.html`, and the individual `site/combstruct-30.html`, `site/combstruct-90.html`, `site/combstruct-125.html` pages with their associated CSS/JS. Each house has its own sticky view navigation, project switch and return link. Legacy catalogue hashes redirect to the corresponding house. Prices are pre-rendered on the detail pages with their material and assembly alternatives; the build derives `site/assets/project-offers.js` from those same prices for the inquiry summary. Copy, quantities, VAT labels, and the 1–2 week assembly estimate match the approved local version.

`Zamów ten wariant` opens `site/zamowienie.html` with an allowlisted project, material and assembly mode. The page shows the selected scope and price including VAT, accepts optional contact context, and prepares an email to `contact@combstruct.com`. The visitor sends it in their own mail application; copying the message is also available, with a selectable-text fallback. No payment, server submission or simulated success is implemented. Prices passed in the URL are ignored. Inquiry pages are noindex and do not store personal data.

The practical-benefits section includes the 40-second `site/assets/featured-project.mp4` construction footage from the former website, with its original poster. It uses native playback/fullscreen controls and `preload="none"`; video bytes are not requested during initial page loading. The final two seconds were trimmed in an earlier update; playback speed is unchanged.

The lightweight film is `site/assets/combstruct-spot-web.mp4`. It retains its original audio/video bytes. The models and native beam profiles are copied unchanged. Public display libraries retain their bundled licence notices.

The initial migration was prepared from the approved `outputs/combstruct-website` artefact in the local Combstruct workspace. The packaging helper stays in that workspace; it is not required to build this repository.

## Link previews and icons

`scripts/share-metadata.mjs` writes complete Open Graph and large-image card metadata into every HTML head during the build. It takes the title and description from each page, assigns the matching house image and reads dimensions from the actual JPEG. These tags are available without JavaScript. Optimized previews in `site/assets/share/` preserve the approved images and framing; they are 125–199 KB instead of 2.8–3.0 MB. Original page visuals remain unchanged. Keep preview JPEGs under 300 KB.

The original Combstruct favicon and Apple/Android icons are restored at public root paths and linked in the HTML. `site.webmanifest` describes browser shortcuts; it does not install a service worker. The local server includes MIME types for ICO and webmanifest files.

Metadata reference: https://ogp.me/. Favicon discovery: https://developers.google.com/search/docs/appearance/favicon-in-search. Live checks verify static HTML, images, icon responses and representative crawler user agents; they do not claim to clear caches inside messaging applications.


## English version

`scripts/build-locales.mjs` generates `site/en/` from the same Polish pages,
model bundles, SVG floor plans and parts data using reviewed copy in
`locales/en.json`. The build runs with Node only. Do not edit generated English
files directly: update the source or dictionary and run `npm run build`.
The generated bundles retain their library licence comments. Numeric model and
kit data, component IDs and prices are shared; prices remain PLN including VAT.
The English enquiry prepares an English email in the existing mail workflow.
The existing brand film has an English subtitle track, `assets/spot-en.vtt`;
its on-screen Polish titles and soundtrack remain in the video itself.

Every public page has a visible PL / EN switch. `site/language.js` preserves
query parameters, the open project tab and the assembly choice, including a
round trip between languages. There is no automatic language detection or
storage of visitor data. Each language has static titles, descriptions,
canonical URLs, reciprocal hreflang links and Open Graph locale metadata.
The sitemap includes both languages; enquiries keep their noindex directive.
Images and video are shared to avoid duplicate large media files.

`node --test scripts/locales.test.mjs` checks language routes, metadata, price
and parts consistency, translated floor plans, script syntax and build
repeatability. Browser QA also covers all three models, 17 handbook scenes,
BIM/Flow, project language switching and enquiry summaries at mobile and desktop
widths. The site still has no arbitrary-plan AI conversion or AR camera service;
English copy preserves those development-status distinctions.
