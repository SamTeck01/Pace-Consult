-- Pace Consult Real Estate: properties and optional locations
-- Run this in Supabase SQL Editor after creating a project.

-- Optional: locations table for consistent filters/URLs
create table if not exists public.locations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  state text not null,
  slug text not null unique
);

-- Properties table
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  type text not null check (type in ('land', 'house', 'apartment', 'townhouse', 'commercial')),
  transaction text not null check (transaction in ('buy', 'sell', 'rent')),
  title text not null,
  description text not null default '',
  price_ngn bigint not null,
  location text not null,
  city text,
  state text,
  bedrooms int,
  bathrooms int,
  area_sqm numeric,
  plot_size_sqm numeric,
  images text[] default '{}',
  floor_plan_url text,
  map_lat numeric,
  map_lng numeric,
  contact_phone text,
  contact_whatsapp text,
  agency_name text,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS: public read for listings
alter table public.properties enable row level security;
alter table public.locations enable row level security;

create policy "Public can read properties"
  on public.properties for select
  using (true);

create policy "Public can read locations"
  on public.locations for select
  using (true);

-- Indexes for common filters
create index if not exists idx_properties_type on public.properties (type);
create index if not exists idx_properties_transaction on public.properties (transaction);
create index if not exists idx_properties_featured on public.properties (featured) where featured = true;
create index if not exists idx_properties_created_at on public.properties (created_at desc);
