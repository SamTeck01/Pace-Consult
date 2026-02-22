# Pace Consult – Real Estate Website

A modern real estate marketing site for Pace Consult (Nigeria): land, homes, and apartments. Built with Next.js, Tailwind CSS, Hugeicons, and Supabase.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Supabase**

   - Create a project at [supabase.com](https://supabase.com).
   - In the SQL Editor, run `supabase/schema.sql` then optionally `supabase/seed.sql`.
   - Create a Storage bucket (e.g. `property-images`) and set it to public read if needed.
   - Copy `.env.example` to `.env.local` and set:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Optional: `NEXT_PUBLIC_SITE_URL` for sitemap and Open Graph (e.g. `https://paceconsult.ng`).

3. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Features

- **Home:** Hero, search (Type, City, Bedrooms), featured properties, “See what we offer”, CTA.
- **Properties:** Filters (Buy/Sell/Rent, type, city, bedrooms), results grid, map placeholder.
- **Category pages:** `/properties/land`, `/properties/homes`, `/properties/apartments`, etc.
- **Property detail:** Gallery, price, Contact Agent, description, house/plot plan, map.
- **About & Contact:** Company info and contact form.
- **Resources (Blog):** Placeholder for SEO content.
- **SEO:** Meta tags, JSON-LD (RealEstateAgent, Product, BreadcrumbList), sitemap, robots.

## Tech stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS
- Hugeicons (React + core-free-icons)
- Supabase (PostgreSQL, Storage)

## Project structure

- `app/` – Routes and pages
- `components/` – UI components (Header, Footer, PropertyCard, etc.)
- `lib/` – Supabase client/server, types, schema (JSON-LD), property helpers
- `supabase/` – schema.sql, seed.sql
