---
name: Tuckerbox Motor Inn
description: A roadside motor inn's site that reads like a well-kept paddock gate — ivory-and-forest, editorial-serif, placeholder-honest.
colors:
  ivory: "#faf6ee"
  sandstone: "#e7d9c3"
  sandstone-dark: "#d7c3a3"
  eucalyptus: "#8fa396"
  eucalyptus-dark: "#637569"
  forest: "#2f4538"
  forest-dark: "#203027"
  charcoal: "#2b2a27"
  text-muted: "#5c5a54"
  clay: "#b2593a"
  clay-dark: "#8e4229"
  white: "#ffffff"
  line: "rgba(43, 42, 39, 0.12)"
typography:
  display:
    fontFamily: "Petrona, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 4.5vw + 1rem, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Petrona, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.75rem, 2.5vw + 1rem, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Petrona, Georgia, 'Times New Roman', serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.15
  body:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "10px"
  lg: "18px"
  pill: "999px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "4rem"
  9: "6rem"
  10: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.clay-dark}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "0px"
  nav-header:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
---

# Design System: Tuckerbox Motor Inn

## Overview

**Creative North Star: "The Well-Kept Paddock Gate"**

Tuckerbox Motor Inn's site is a practical, honest roadside stop rendered in editorial type and warm earth tones — not a resort fantasy, not a generic hotel-template default. It refuses the dense rate-search hero widget, the uniform icon-tile amenity grid, and the gold-and-script spa aesthetic in favor of a confident dark forest-green header/footer, a single clay accent reserved for one call-to-action per view, and full-bleed photography standing in for decoration. Imagery throughout the shipped build is a clearly labelled hairline-grid placeholder (camera icon + "Photo pending" tag) — a deliberate "pending real photography" marker, not a finished visual texture, and it must be swapped for real property photography before the site is treated as production-final.

As shipped, typography is Petrona (display serif, editorial and warm) paired with Public Sans (body/UI sans) — a substitution the build made from the direction contract's original Fraunces/Inter pairing specifically to avoid the overused "AI-default" font set, while keeping the same editorial-serif-plus-clean-sans character the brief called for. Room listings use an alternating editorial photo/detail row (`.room-row`), never a uniform card grid; facilities use a grouped, annotated two-column list (`.facility-group`/`.facility-row`), never an icon-tile grid.

**Key Characteristics:**
- Warm ivory ground, sandstone banding between sections — never stark white.
- Forest green as a committed dark field for header, footer, and primary navigation context (not a thin accent).
- Clay reserved for exactly one job per view: the primary CTA and small active-state marks.
- Editorial alternating rows and grouped annotated lists in place of generic card/tile grids.
- Every image is a labelled dev placeholder, not finished art.

## Colors

The palette is a warm, sandstone-and-forest earth range drawn directly from the client's own brief.

### Primary
- **Forest** (`#2f4538`, dark variant `#203027`): the committed dark field for the sticky header, footer, and `.section--forest` bands. Carries ivory text/headings when reversed.
- **Clay** (`#b2593a`, dark/hover `#8e4229`): the single primary-action color — `.btn--primary`, focus-visible outlines, active nav-link underline, text selection. Used nowhere else as a fill.

### Neutral
- **Ivory** (`#faf6ee`): the page ground (`--color-bg`) — never stark white.
- **Sandstone** (`#e7d9c3`, dark variant `#d7c3a3`): section banding (`.section--sandstone`) and the hero content panel background.
- **Eucalyptus** (`#8fa396`, dark variant `#637569`): secondary tint — facility-group heading rule, ghost-button underline, phone-icon stroke in the header.
- **Charcoal** (`#2b2a27`): body text and line-art icon strokes.
- **Text-muted** (`#5c5a54`, derived from charcoal): secondary/supporting copy (`--color-text-muted`) — section-head subheads, facility descriptions, review-link captions on light grounds.
- **White** (`#ffffff`): card/tag surfaces (`--color-surface`) sitting on ivory or sandstone.
- **Line** (`rgba(43,42,39,0.12)`): hairline dividers between rows, facts-strip cells, and facility rows.

### Named Rules
**The One Job Rule.** Clay fills exactly one element per view — the page's single primary call-to-action (or an active-state mark) — never a secondary button, a background tint, or decoration.

**The Never-Stark-White Rule.** Page and panel backgrounds are ivory or sandstone; pure white (`#ffffff`) is reserved for small surfaces sitting on top of those grounds (tag chips, facility notes), never the page canvas itself.

## Typography

**Display Font:** Petrona (with Georgia, Times New Roman, serif fallback)
**Body Font:** Public Sans (with system sans fallback)

**Character:** An editorial warm serif for headings against a clean, highly legible grotesque for body and UI — chosen specifically to read as considered and un-templated rather than reaching for Fraunces/Inter, the two faces the direction contract originally named and the build deliberately swapped away from as "overused AI defaults."

### Hierarchy
- **Display/H1** (600, `clamp(2.25rem, 4.5vw + 1rem, 3.75rem)`, line-height 1.15): page-level hero heading, one per page.
- **Headline/H2** (600, `clamp(1.75rem, 2.5vw + 1rem, 3rem)`, line-height 1.15): section headings.
- **Title/H3** (500, 1.375rem): subsection and room/facility-group headings.
- **Body** (400, 1rem, line-height 1.6, max 68ch): paragraph copy.
- **Label** (600, 0.875rem, letter-spacing 0.02em): nav links, room bed-count labels (uppercase), footer headings (uppercase).

### Named Rules
**The No-Kicker Rule.** No standalone label/eyebrow sits above a heading anywhere in the shipped build (confirmed absent from hero, section heads, and room rows); headings carry their own weight via size and the serif face, not a kicker device.

## Layout

Containers cap at 1240px (`--container-max`) with a 820px narrow variant for prose-heavy content; gutter is 1.5rem. Section padding is a generous 6rem block rhythm (`--space-9`) on a 4px-based spacing scale running from 0.25rem to 8rem. Two-column split layouts (`.split`) reverse on alternating sections; the editorial `.room-row` alternates photo/detail sides per row (`nth-child(even)` flips media to the right) and collapses to a single column under 860px. `.facility-groups` is an auto-fit grid of grouped annotated lists (min 280px per column), not a fixed tile grid. The header is sticky; nav collapses to a hamburger-triggered overlay under 860px. Hero sits at 72vh (100svh on narrow screens) with the content panel anchored bottom-left.

## Elevation & Depth

Shadows are soft and ambient, not hard-offset: `--shadow-sm` (`0 1px 2px rgba(43,42,39,.08)`), `--shadow-md` (`0 8px 24px rgba(43,42,39,.12)`), `--shadow-lg` (`0 20px 48px rgba(43,42,39,.18)`) lift the hero panel and gallery lightbox controls. Primary buttons carry a tinted ambient glow (`0 10px 24px -8px rgba(178,89,58,.55)`), stronger against the forest band. There is no hard offset/neobrutalist shadow anywhere in the build; depth is otherwise conveyed through ivory/sandstone/forest tonal banding between sections, not boxed cards.

### Named Rules
**The Ambient-Only Rule.** Shadows are soft and diffuse (blurred, low-opacity) for lift; a hard, solid-offset shadow (neobrutalist style) does not belong in this system.

## Shapes

Corners are gently rounded: 4px (small controls, focus-ring corner), 10px (map frame, skip link, facility note, nav-toggle), 18px (hero panel, room-row media, gallery thumbnails, review-link cards). Buttons are fully pill-shaped (999px) except the ghost/link-style button, which is unrounded with a bottom border instead. Dividers are 1px hairline rules (`--color-line`) between rows and columns — never boxed cards with heavy borders or shadow containers.

## Components

### Buttons
- **Shape:** pill (999px radius) for primary/outline; ghost buttons are unrounded with a `1.5px` bottom border instead of a fill.
- **Primary:** clay fill (`#b2593a`), white text, `0.85rem 1.6rem` padding, ambient clay-tinted shadow; hover darkens to `#8e4229`.
- **Outline:** transparent fill, `currentColor` border; on forest sections it inverts to ivory-on-dark, on light sections it resolves to forest-on-ivory.
- **Ghost:** no padding-inline, underline in eucalyptus-dark that turns clay on hover — used for in-line "View details →" links, never as a primary action.

### Cards / Containers
- **Corner Style:** 18px (room-row media, gallery tiles, review-link cards) or 10px (facility note, map frame).
- **Background:** white surface on ivory/sandstone grounds; `rgba(250,246,238,0.08–0.16)` translucent ivory on forest grounds (review links).
- **Shadow Strategy:** none at rest on flat content cards; shadow is reserved for the hero panel and overlay chrome (see Elevation & Depth).
- **Border:** 1px hairline (`--color-line`) on tag chips, facility notes, map frame.

### Navigation
- Sticky forest-green header bar; logotype + small uppercase locality line, nav links in ivory with a 2px clay underline on hover/`aria-current`, phone number always visible as a direct `tel:` link. Collapses to a bordered 44px hamburger button under 860px, opening a full-width forest dropdown panel.

### Placeholder Photography (signature component)
Every image slot in the shipped build is a `.photo-placeholder`: a sandstone-tinted hairline-grid texture (22px diagonal crosshatch) with a dark pill-shaped tag (camera icon + "Photo pending — [subject]" caption) anchored bottom-right. This is a durable, intentional "pending real photography" marker and must be preserved as the swap-in point for real client photography, not treated as finished decorative texture.

### Editorial Room Row (signature component)
`.room-row`: an alternating two-column grid (photo/detail, flipping sides on even rows) used for all six room listings on accommodation.html — explicitly not a uniform card grid. Bed configuration renders as an uppercase forest-green label; amenities as a `.tag-list` of pill chips.

### Grouped Facility List (signature component)
`.facility-group`: a themed group (Arrival / In your room / Outdoors, etc.) heading underlined in eucalyptus, containing `.facility-row` definition-list rows (icon + term + description) separated by hairline dividers — explicitly not an icon-tile grid.

## Do's and Don'ts

### Do:
- **Do** reserve clay (`#b2593a`) for exactly one primary action or active-state mark per view.
- **Do** keep all booking/contact actions pointed at the real external channels — the Bookings247 booking engine, `tel:0269440300`, `mailto:enquiries@tuckerbox.com.au` — never a new form backend.
- **Do** use the `.photo-placeholder` hairline-grid + "Photo pending" tag for any image slot until real, approved property photography replaces it.
- **Do** keep room listings as alternating editorial rows and facilities as grouped annotated lists; both were deliberate choices against the generic card/tile default.
- **Do** respect `prefers-reduced-motion` (durations collapse to 0ms; `.reveal` renders fully visible with no transition).

### Don't:
- **Don't** add a kicker/eyebrow label above any heading — none exists in the shipped build, and it is not part of this system.
- **Don't** introduce hard-offset (neobrutalist-style) shadows; all elevation in this system is soft and ambient.
- **Don't** replace the inline line-art SVG icon set with a glyph icon font or emoji.
- **Don't** fabricate guest-review quotes, ratings, or prices — the build intentionally links out to Google/Tripadvisor instead.
- **Don't** treat placeholder photography as final decoration; it is a defect-marker pending real assets, not a texture choice to keep.
