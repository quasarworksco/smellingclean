# Smelling Clean — Professional Cleaning Services

Static website for Smelling Clean (Tampa Area, FL): residential and commercial cleaning.

## Structure
- `index.html` — single-page site: Home, Services, Portfolio, Contact (plus About, Process, Service Area and FAQ)
- `css/styles.css` — brand styles (#93e3fd, #cbf0ff, #3dffb1), glassmorphism, responsive layout
- `js/main.js` — EN/ES language toggle, mobile menu, scroll animations, contact form
- `assets/logo.png` / `assets/logo-white.png` — official logo (transparent, for light / dark backgrounds); original in `assets/logo-original.jpg`
- `assets/portfolio/` — real job photos (JPG originals + optimized WebP)

## SEO & sharing
- Live domain: https://smellingclean.dgp-link.com/ (`CNAME` file for GitHub Pages)
- Open Graph + Twitter Card tags with `assets/og-image.png` (1200x630)
- Schema.org `HouseCleaningService` JSON-LD (Google local results)
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, PNG icons in `assets/`
- Google Maps: https://maps.app.goo.gl/ErihBjFjVXKzsQ3c9 (embedded map + links)

## Contact form
No backend needed: the form composes the message and opens WhatsApp (+1 813 808 7772) or the email client (smellingcleanflorida@gmail.com).

## Before going live
- Add more real photos to `assets/portfolio/` (JPG + WebP) as new jobs are completed.
- Confirm the service list, the "Most requested" label and the service-area cities.

## Run locally
Open `index.html` in a browser, or serve the folder with any static server (GitHub Pages, Netlify, Vercel).
