# Globaal Foods — Website Build Plan

A premium, responsive marketing site for a Jaipur-based food manufacturer (Poha, Pasta, Macaroni, Vermicelli). Clean, hygienic, food-industry aesthetic with the brand's deep blue + leaf green palette and generous white space.

## Brand & Design System

- **Palette** (added as oklch tokens in `src/styles.css`):
  - Deep Blue `#1E3A8A` → `--primary`
  - Leaf Green `#22A93C` → `--secondary` / accent
  - Off-white `#FAFAF7` background, white cards
  - Dark navy `#0F1E4D` for footer
- **Typography:** Inter (body) + Plus Jakarta Sans (display headings) via Google Fonts.
- **Components:** Rounded-xl cards, soft shadows, subtle green underline accents echoing the business card's diagonal stripes.
- **Logo:** Copy `user-uploads://image.png` → `src/assets/globaal-foods-logo.png`, imported in Header & Footer.

## Routes (TanStack Start file-based)

```
src/routes/
  __root.tsx        (existing — add Header/Footer layout + Outlet)
  index.tsx         (Home)
  about.tsx         (About Us)
  products.tsx      (Our Products + gallery)
  contact.tsx       (Contact form + card)
```

Each route gets its own `head()` with unique title, description, og:title, og:description.

## Shared Components (`src/components/`)

- `Header.tsx` — sticky, white/blur background, logo left, nav links (Home, About Us, Our Products, Contact), green "Get a Quote" CTA → `/contact`. Mobile hamburger via Sheet.
- `Footer.tsx` — dark navy bg, 4 columns: brand+logo+tagline, quick links, business hours (Mon–Sat 9:00–18:00), contact info (Abhishek Agarwal, phone, email, Jaipur address). Bottom copyright bar.
- `SectionHeading.tsx` — reusable eyebrow + headline pattern.
- `ProductCard.tsx` — image placeholder + title + short desc + arrow link.
- `ImagePlaceholder.tsx` — labeled tile (e.g. "Product Photo 01") with aspect ratio, gradient background, hover zoom + green overlay. Easy swap-in target.
- `ProductGallery.tsx` — responsive masonry-style grid (CSS columns: 2 mobile / 3 tablet / 4 desktop) rendering 22 `ImagePlaceholder` tiles with varied aspect ratios.

## Page Content

**Home (`/`)**
1. Hero — split layout: left = headline "Premium Quality Poha, Pasta & Vermicelli Manufacturer", sub-headline, two CTAs ("Explore Products" → /products, "Contact Us" → /contact); right = layered image placeholder + green accent shape.
2. Why Choose Us — 4-icon grid (lucide: Wheat, Factory, ShieldCheck, Truck) with the four benefits.
3. Mini Product Showcase — 3 cards (Poha, Pasta/Macaroni, Vermicelli) → /products.
4. CTA strip — "Partner with Globaal Foods" + Get a Quote button.

**About (`/about`)**
- Hero band with page title.
- "Our Story" — 2-column text + image placeholder (facility photo).
- "Mission & Vision" — two cards side-by-side with subtle green left border.
- Leadership snippet card for Abhishek Agarwal.

**Products (`/products`)**
- Header section with title + description.
- 3 alternating image/text rows (zigzag) for Poha, Pasta & Macaroni, Vermicelli with provided copy.
- Product Gallery — 22 masonry placeholders, hover effects (scale + green tint + label).

**Contact (`/contact`)**
- Two-column: left = contact form (Name, Email, Phone, Inquiry Type select [Wholesale / Retail / Distribution / General], Message) using shadcn Form + zod validation + sonner toast on submit (frontend-only, no backend).
- Right = stylized contact card (dark blue bg, green accents, icons): Abhishek Agarwal, +91 91169 45577, abhikagarwal@gmail.com, Plot No. 1, Riddhi Siddhi Nagar, Jaipur – 302029, business hours.

## SEO

- Per-route `head()`: distinct title (e.g. "About Globaal Foods — Premium Food Manufacturer in Jaipur"), description, og tags, relative `og:url`, canonical link on leaf routes only.
- Root: viewport, charset, sitewide Organization JSON-LD with name, address, telephone, email.
- Semantic HTML: single H1 per page, proper section/article tags, alt text on every placeholder.

## Technical Notes

- All colors via semantic tokens — no hardcoded hex in components.
- Animations: subtle fade-up on scroll via Tailwind utility classes (no Framer Motion needed for v1).
- Form is UI-only; submission shows success toast. No Cloud/backend in this build.
- Mobile-first responsive across all pages.

## Out of Scope (v1)

- Real product photos (placeholders only, ready for swap).
- Backend form submission / email delivery.
- CMS or product database.
