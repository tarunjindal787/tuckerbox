# Tuckerbox Motor Inn — website

A static marketing site for Tuckerbox Motor Inn, a 4-star motel in South Gundagai, NSW. Plain
HTML/CSS/JS, no build step, deployed via GitHub Pages.

## Before this goes live for real guests

**Every photograph on this site is a placeholder.** No licensed property photography was
available when this was built, so every image is a clearly labelled "Photo pending" placeholder
(see `CONTENT-SOURCES.md`). Replace each `.photo-placeholder` block with a real `<img>` of the
actual property before treating this as finished marketing material.

There is intentionally no booking engine, payment flow, or contact-form backend in this repo —
all "Check Availability" buttons link to the motel's existing Booking.com listing, and contact
actions use `tel:`/`mailto:` links. That's by design, not an oversight.

## Structure

- `index.html`, `accommodation.html`, `facilities.html`, `gallery.html`, `contact.html` — the five pages
- `css/tokens.css` — design tokens (colour, type, spacing)
- `css/styles.css` — components and layout
- `js/main.js` — mobile nav toggle, scroll reveal, accessible gallery lightbox
- `PRODUCT.md` / `DESIGN.md` — product and design-system reference for future work
- `CONTENT-SOURCES.md` — where every factual claim on the site came from

## Local preview

No build step — just serve the folder, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000/`.

## Deploying

Pages are published via GitHub Pages from this repository (see repo Settings → Pages).
