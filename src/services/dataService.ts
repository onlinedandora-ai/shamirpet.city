import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { GOOGLE_MAPS_SEEDED_PLACES, type SeededPlace } from '../data/seedData';
import { type DirectoryListing, DIRECTORY_LISTINGS } from '../data/mockData';

// Map SeededPlace or Database row to DirectoryListing format used across UI
export function convertSeededToDirectoryListing(place: SeededPlace): DirectoryListing {
  // Map category to DirectoryListing format compatibility
  let mappedCat: DirectoryListing['category'] = 'Retail & Services';
  if (place.category === 'Wellness & Healthcare') mappedCat = 'Healthcare';
  else if (place.category === 'Real Estate') mappedCat = 'Real Estate & Developers';
  else if (place.category === 'Education & Research') mappedCat = 'Education';
  else if (place.category === 'Hospitality & Dining') mappedCat = 'Hospitality & Food';
  else if (place.category === 'Businesses') {
    if (place.subcategory.includes('Biotech') || place.subcategory.includes('Pharma')) {
      mappedCat = 'Life Sciences / Biotech Employers';
    } else {
      mappedCat = 'Retail & Services';
    }
  }

  // Map villageArea compatibility
  let mappedVillage: DirectoryListing['villageArea'] = 'ORR Exit 7';
  if (place.villageArea === 'Genome Valley Phase 1' || place.villageArea === 'Genome Valley Phase 2') {
    mappedVillage = 'Genome Valley Zone';
  } else if (place.villageArea === 'Lake Circle') {
    mappedVillage = 'Lake Circle';
  } else if (place.villageArea === 'Majeedpur') {
    mappedVillage = 'Majeedpur';
  } else if (place.villageArea === 'Ponnal') {
    mappedVillage = 'Ponnal';
  }

  // Map verifiedStatus compatibility
  let mappedVerified: DirectoryListing['verifiedStatus'] = 'Verified Business';
  if (place.verifiedStatus === 'Verified Healthcare' || place.verifiedStatus === 'Verified Real Estate' || place.verifiedStatus === 'Verified Business') {
    mappedVerified = 'Verified Business';
  } else if (place.verifiedStatus === 'Verified Institutional') {
    mappedVerified = 'Verified Institutional';
  } else {
    mappedVerified = 'Community Entry';
  }

  return {
    id: place.id,
    name: place.name,
    slug: place.slug,
    category: mappedCat,
    villageArea: mappedVillage,
    rating: place.rating,
    reviewsCount: place.reviewsCount,
    address: place.address,
    phone: place.phone,
    email: place.email,
    website: place.website,
    googleMapsUrl: place.googleMapsUrl,
    hours: place.hours,
    description: place.description,
    isFeatured: place.isFeatured,
    isSponsored: place.isSponsored,
    verifiedStatus: mappedVerified,
    badgeText: place.badgeText,
    lat: place.lat,
    lng: place.lng,
  };
}

// Get all combined directory listings (Seeded Google Maps places + Mock Data)
export function getAllSeededListings(): DirectoryListing[] {
  const seededMapped = GOOGLE_MAPS_SEEDED_PLACES.map(convertSeededToDirectoryListing);
  const existingIds = new Set(seededMapped.map(s => s.id));
  
  // Combine without duplicate IDs
  const combined = [...seededMapped];
  for (const mockItem of DIRECTORY_LISTINGS) {
    if (!existingIds.has(mockItem.id)) {
      combined.push(mockItem);
    }
  }
  return combined;
}

// Fetch places from Supabase or Fallback
export async function fetchPlacesFromDatabase(): Promise<{ places: SeededPlace[]; isLiveSupabase: boolean }> {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.from('places').select('*');
      if (!error && data && data.length > 0) {
        const dbPlaces: SeededPlace[] = data.map((row: any) => ({
          id: row.id,
          name: row.name,
          slug: row.slug,
          category: row.category,
          subcategory: row.subcategory || 'Local Business',
          villageArea: row.village_area || 'Shamirpet Junction',
          rating: Number(row.rating) || 4.5,
          reviewsCount: row.reviews_count || 10,
          address: row.address,
          phone: row.phone || '',
          email: row.email,
          website: row.website,
          googleMapsUrl: row.google_maps_url,
          hours: row.hours || '9:00 AM - 6:00 PM',
          description: row.description || '',
          isFeatured: Boolean(row.is_featured),
          isSponsored: Boolean(row.is_sponsored),
          verifiedStatus: row.verified_status || 'Community Entry',
          badgeText: row.badge_text,
          lat: Number(row.lat),
          lng: Number(row.lng),
          imageUrl: row.image_url || 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=800&auto=format&fit=crop&q=80',
          tags: row.tags || [],
          priceRange: row.price_range,
        }));
        return { places: dbPlaces, isLiveSupabase: true };
      }
    } catch (e) {
      console.warn('Could not fetch from Supabase, using local seeded dataset:', e);
    }
  }

  // Fallback to local stored + seeded Google Maps places
  const localSaved = localStorage.getItem('shamirpet_user_places');
  let customUserPlaces: SeededPlace[] = [];
  if (localSaved) {
    try {
      customUserPlaces = JSON.parse(localSaved);
    } catch (err) {}
  }
  return { places: [...customUserPlaces, ...GOOGLE_MAPS_SEEDED_PLACES], isLiveSupabase: false };
}

// Seed all Google Maps places to Supabase
export async function seedAllPlacesToSupabase(): Promise<{ success: boolean; count: number; message: string }> {
  if (!isSupabaseConfigured()) {
    // Local seed fallback
    localStorage.setItem('shamirpet_user_places', JSON.stringify(GOOGLE_MAPS_SEEDED_PLACES));
    return {
      success: true,
      count: GOOGLE_MAPS_SEEDED_PLACES.length,
      message: `Seeded ${GOOGLE_MAPS_SEEDED_PLACES.length} Google Maps places to local data store (Configure Supabase env vars to seed live cloud database).`,
    };
  }

  try {
    const payload = GOOGLE_MAPS_SEEDED_PLACES.map(p => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      category: p.category,
      subcategory: p.subcategory,
      village_area: p.villageArea,
      rating: p.rating,
      reviews_count: p.reviewsCount,
      address: p.address,
      phone: p.phone,
      email: p.email,
      website: p.website,
      google_maps_url: p.googleMapsUrl,
      hours: p.hours,
      description: p.description,
      is_featured: p.isFeatured || false,
      is_sponsored: p.isSponsored || false,
      verified_status: p.verifiedStatus,
      badge_text: p.badgeText,
      lat: p.lat,
      lng: p.lng,
      image_url: p.imageUrl,
      tags: p.tags,
      price_range: p.priceRange,
    }));

    const { error } = await supabase.from('places').upsert(payload, { onConflict: 'id' });
    if (error) {
      throw error;
    }
    return {
      success: true,
      count: payload.length,
      message: `Successfully seeded ${payload.length} places directly into Supabase 'places' table!`,
    };
  } catch (err: any) {
    console.error('Error seeding Supabase:', err);
    return {
      success: false,
      count: 0,
      message: `Supabase seeding error: ${err.message || 'Failed to seed'}`,
    };
  }
}

// Scrape / Add new place from Google Maps Search
export async function addNewGoogleMapsPlace(place: SeededPlace): Promise<{ success: boolean; message: string }> {
  if (isSupabaseConfigured()) {
    try {
      const payload = {
        id: place.id,
        name: place.name,
        slug: place.slug,
        category: place.category,
        subcategory: place.subcategory,
        village_area: place.villageArea,
        rating: place.rating,
        reviews_count: place.reviewsCount,
        address: place.address,
        phone: place.phone,
        email: place.email,
        website: place.website,
        google_maps_url: place.googleMapsUrl,
        hours: place.hours,
        description: place.description,
        is_featured: place.isFeatured || false,
        is_sponsored: place.isSponsored || false,
        verified_status: place.verifiedStatus,
        badge_text: place.badgeText,
        lat: place.lat,
        lng: place.lng,
        image_url: place.imageUrl,
        tags: place.tags,
        price_range: place.priceRange,
      };
      const { error } = await supabase.from('places').insert([payload]);
      if (error) throw error;
      return { success: true, message: 'Place added to Supabase database!' };
    } catch (e: any) {
      console.warn('Supabase save error, saving locally:', e);
    }
  }

  // Local storage save
  const existing = localStorage.getItem('shamirpet_user_places');
  let customPlaces: SeededPlace[] = [];
  if (existing) {
    try { customPlaces = JSON.parse(existing); } catch (e) {}
  }
  customPlaces.unshift(place);
  localStorage.setItem('shamirpet_user_places', JSON.stringify(customPlaces));
  return { success: true, message: 'Place saved to local directory store!' };
}
