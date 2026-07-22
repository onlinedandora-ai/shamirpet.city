-- =========================================================
-- SHAMIRPET.CITY SUPABASE DATABASE SCHEMA
-- Location: /supabase/schema.sql
-- Execute this script in your Supabase SQL Editor to set up
-- tables, indexes, row level security (RLS), and policies.
-- =========================================================

-- 1. Places Table (Businesses, Wellness & Healthcare, Real Estate, Education)
CREATE TABLE IF NOT EXISTS public.places (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  village_area TEXT,
  rating NUMERIC(3,2) DEFAULT 4.5,
  reviews_count INT DEFAULT 0,
  address TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  website TEXT,
  google_maps_url TEXT,
  hours TEXT,
  description TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_sponsored BOOLEAN DEFAULT FALSE,
  verified_status TEXT DEFAULT 'Community Entry',
  badge_text TEXT,
  lat NUMERIC(9,6) NOT NULL,
  lng NUMERIC(9,6) NOT NULL,
  image_url TEXT,
  tags TEXT[],
  price_range TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Reviews Table
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id TEXT REFERENCES public.places(id) ON DELETE CASCADE,
  user_id UUID,
  user_name TEXT NOT NULL,
  user_avatar TEXT,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable RLS
ALTER TABLE public.places ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies
-- Allow anyone to view places and reviews
CREATE POLICY "Public Read Places" ON public.places FOR SELECT USING (true);
CREATE POLICY "Public Read Reviews" ON public.reviews FOR SELECT USING (true);

-- Allow authenticated users (e.g. GitHub login) to add reviews & listings
CREATE POLICY "Authenticated Insert Places" ON public.places FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated Insert Reviews" ON public.reviews FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Indexes for ultra-fast geographical & category searches
CREATE INDEX IF NOT EXISTS idx_places_category ON public.places(category);
CREATE INDEX IF NOT EXISTS idx_places_village ON public.places(village_area);
CREATE INDEX IF NOT EXISTS idx_places_lat_lng ON public.places(lat, lng);
