# Product


## Platform

web

## Stack

static HTML/CSS/JS (no build step, no framework) — chosen by the user for an empty repo with GitHub Pages as the deploy target.

## Users

Travellers driving the Hume Highway corridor between Sydney, Canberra, and Melbourne who need overnight accommodation in Gundagai, NSW. Specific situations to support: a traveller making a quick overnight stop, a couple comparing room options, a family checking room/bed configurations, a guest checking accessibility or pet policy before booking, a guest who prefers to call rather than book online, a returning guest who wants to book quickly, and a mobile visitor on a slower connection.

## Product Purpose

A marketing/informational website for Tuckerbox Motor Inn, a real, independently operated 4-star motel. The site must let a visitor quickly understand what the property is, where it is, what room options exist, what facilities are available, what the rooms look like, how to check availability, and how to contact the property or get directions. Success is a visitor confidently calling, emailing, or clicking through to the property's existing Bookings247 online booking system — not a new booking/payment system.

## Positioning

An independently run, 4-star roadside motor inn in South Gundagai — a practical, comfortable stopover on the Hume Highway between Sydney, Canberra and Melbourne, distinct from both budget highway motels and resort-style accommodation.

## Operating Context

- No existing website codebase: this is a brand-new static site, not a redesign of running code.
- There is no booking engine, payment system, or backend to build or integrate — availability/booking happens entirely through the property's existing Bookings247 booking engine (the same one embedded on the official tuckerbox.com.au site), plus phone and email.
- Deploy target: GitHub Pages, repository `tarunjindal787/tuckerbox`.
- Check-in: 14:00–20:00. Check-out: until 10:00. Reception hours: 10am–8pm.
- Payment methods accepted at the property: Visa, Mastercard, American Express.
- Not pet-friendly. No on-site restaurant or included breakfast (see OWNER_VERIFICATION_REQUIRED.md for a signage/FAQ discrepancy on this). Outdoor pool; "seasonal" vs "solar heated" is disputed across official sources, so neither is claimed.

## Capabilities and Constraints

- Confirmed room categories (names, bed configuration, and amenities must not be invented or altered): Deluxe Queen Room; Family Suite With Balcony; Twin Room; Family Room; Family Room With Spa Bath; Two-Bedroom Suite. Per-room bed counts/facilities are recorded in `CONTENT-SOURCES.md`.
- Confirmed property facilities: free parking, free WiFi, outdoor swimming pool, BBQ facilities, disabled access, non-smoking rooms only, daily housekeeping, designated smoking area, family rooms, tea/coffee maker in rooms.
- No on-site restaurant, no included breakfast, not pet-friendly — must not be implied otherwise.
- No real guest-review quotes, ratings, or counts are on hand; the site must link out to Google/Tripadvisor review pages rather than fabricate testimonials.
- No licensed, owner-approved property photography or video is on hand for this build; all imagery must be clearly labelled development placeholders until the client supplies real assets.
- This is a frontend-only, backend-free build: all "availability" and "enquiry" actions route to existing external channels (the Bookings247 booking engine, phone link, email link), never to a new form backend.

## Brand Commitments

- Business name: Tuckerbox Motor Inn (must not be altered).
- Address: 87 Mount Street, South Gundagai, Gundagai, NSW 2722, Australia.
- Phone: 02 6944 0300. Email: enquiries@tuckerbox.com.au.
- Bookings247 booking engine: https://bookings247.com.au/booking2/booknow.php?property_id=3658 (general) and https://bookings247.com.au/booking2/bookroom.php?property_id=3658&roomid=950X (per room, X = 1-6) — verified directly from the official site's own markup.

## Evidence on Hand

- Official site content fetched and verified 2026-11-04 from tuckerbox.com.au (home, accommodation, facilities, gallery pages) — room names/configurations, facility list, address, phone, email, check-in/out times, reception hours, payment methods, pet/breakfast policy. Full extracted notes kept in `CONTENT-SOURCES.md` for traceability.
- No real photos, video, press, or guest-review text on hand — placeholders only until the client provides approved assets.

## Product Principles

1. Never fabricate room details, prices, availability, facilities, or reviews — only confirmed facts or clearly labelled placeholders appear.
2. All booking/contact actions must point to the property's real existing channels (Bookings247, phone, email) since no booking backend exists or should be built.
3. Design for the real decision-making traveller on the highway, not a luxury-resort fantasy — practical clarity (location, rooms, facilities, contact) always outranks decoration.
4. Every visual flourish must degrade gracefully (reduced motion, no JS, slow mobile connection) without hiding essential information.

## Accessibility & Inclusion

Target WCAG 2.2 AA: keyboard operability, visible focus states, semantic landmarks/headings, accessible lightbox (Escape, prev/next, focus return), captions if any video is added later, and respect for `prefers-reduced-motion`.
