import React, { useState } from 'react';
import { X, Database, Plus, CheckCircle2, RefreshCw, Layers, ExternalLink } from 'lucide-react';
import { GOOGLE_MAPS_SEEDED_PLACES, CATEGORY_SUMMARY, type SeededPlace } from '../data/seedData';
import { seedAllPlacesToSupabase, addNewGoogleMapsPlace } from '../services/dataService';
import { isSupabaseConfigured } from '../lib/supabase';

interface GoogleMapsSeederModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlaceAdded?: () => void;
}

export const GoogleMapsSeederModal: React.FC<GoogleMapsSeederModalProps> = ({
  isOpen,
  onClose,
  onPlaceAdded,
}) => {
  const [activeTab, setActiveTab] = useState<'seed' | 'custom'>('seed');
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Custom Place Form State
  const [name, setName] = useState('');
  const [category, setCategory] = useState<SeededPlace['category']>('Businesses');
  const [subcategory, setSubcategory] = useState('Local Service');
  const [villageArea, setVillageArea] = useState<SeededPlace['villageArea']>('Shamirpet Junction');
  const [address, setAddress] = useState('Main Road, Shamirpet, Medchal, Telangana 500078');
  const [phone, setPhone] = useState('+91 98000 12345');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('');
  const [rating, setRating] = useState('4.7');
  const [reviewsCount] = useState('45');
  const [lat, setLat] = useState('17.5950');
  const [lng, setLng] = useState('78.5680');
  const [description, setDescription] = useState('');

  const configured = isSupabaseConfigured();

  if (!isOpen) return null;

  const handleRunSeeder = async () => {
    setIsSeeding(true);
    setSeedMessage(null);

    const res = await seedAllPlacesToSupabase();
    setIsSeeding(false);

    if (res.success) {
      setSeedMessage({ text: res.message, type: 'success' });
      if (onPlaceAdded) onPlaceAdded();
    } else {
      setSeedMessage({ text: res.message, type: 'error' });
    }
  };

  const handleAddCustomPlace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newPlace: SeededPlace = {
      id: 'gmaps_' + Date.now(),
      name: name.trim(),
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category,
      subcategory: subcategory || 'Local Business',
      villageArea,
      rating: parseFloat(rating) || 4.5,
      reviewsCount: parseInt(reviewsCount, 10) || 12,
      address,
      phone,
      googleMapsUrl: googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(name + ' Shamirpet')}`,
      hours: '8:00 AM - 8:00 PM',
      description: description || `Verified Google Maps scraped location for ${name} in ${villageArea}, Shamirpet.`,
      verifiedStatus: 'Verified Business',
      lat: parseFloat(lat) || 17.595,
      lng: parseFloat(lng) || 78.568,
      imageUrl: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=800&auto=format&fit=crop&q=80',
      tags: [category, subcategory, villageArea],
    };

    const res = await addNewGoogleMapsPlace(newPlace);
    if (res.success) {
      setSeedMessage({ text: `Successfully added "${name}" to directory database!`, type: 'success' });
      setName('');
      setDescription('');
      if (onPlaceAdded) onPlaceAdded();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-lg">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Google Maps & Supabase Data Seeding
              </h3>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                configured 
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
              }`}>
                {configured ? 'Supabase Live' : 'Local Data Mode'}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Scrape and seed Businesses, Wellness & Healthcare, and Real Estate places in Shamirpet
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6">
          <button
            onClick={() => setActiveTab('seed')}
            className={`pb-3 px-4 font-semibold text-sm transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'seed'
                ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Batch Seed Datasets ({CATEGORY_SUMMARY.total} Places)</span>
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`pb-3 px-4 font-semibold text-sm transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'custom'
                ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Add Google Maps Listing</span>
          </button>
        </div>

        {/* Seed Tab Content */}
        {activeTab === 'seed' && (
          <div className="space-y-6">
            
            {/* Category Statistics Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-900/50">
                <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 block">Businesses</span>
                <span className="text-xl font-black text-teal-900 dark:text-white">{CATEGORY_SUMMARY.businesses} Places</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/50">
                <span className="text-xs font-semibold text-rose-700 dark:text-rose-300 block">Wellness & Healthcare</span>
                <span className="text-xl font-black text-rose-900 dark:text-white">{CATEGORY_SUMMARY.wellnessHealthcare} Places</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 block">Real Estate</span>
                <span className="text-xl font-black text-emerald-900 dark:text-white">{CATEGORY_SUMMARY.realEstate} Places</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/50">
                <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 block">Education & Research</span>
                <span className="text-xl font-black text-indigo-900 dark:text-white">{CATEGORY_SUMMARY.educationResearch} Places</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/50">
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 block">Hospitality & Dining</span>
                <span className="text-xl font-black text-amber-900 dark:text-white">{CATEGORY_SUMMARY.hospitalityDining} Places</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-900/50">
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 block">Total Database Seed</span>
                <span className="text-xl font-black text-purple-900 dark:text-white">{CATEGORY_SUMMARY.total} Verified</span>
              </div>
            </div>

            {/* Seed Message Feedback */}
            {seedMessage && (
              <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                seedMessage.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  : 'bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
              }`}>
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-xs font-medium leading-relaxed">{seedMessage.text}</span>
              </div>
            )}

            {/* Trigger Seed Button */}
            <button
              onClick={handleRunSeeder}
              disabled={isSeeding}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all cursor-pointer disabled:opacity-50"
            >
              {isSeeding ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Seeding Google Maps Places into Supabase...</span>
                </>
              ) : (
                <>
                  <Database className="w-5 h-5" />
                  <span>Seed All {CATEGORY_SUMMARY.total} Places into Supabase</span>
                </>
              )}
            </button>

            {/* Seeded Preview List */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Sample Seeded Places Preview
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {GOOGLE_MAPS_SEEDED_PLACES.slice(0, 6).map((place) => (
                  <div
                    key={place.id}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <h5 className="font-bold text-xs text-slate-900 dark:text-white">
                        {place.name}
                      </h5>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {place.category} • {place.villageArea}
                      </span>
                    </div>
                    <a
                      href={place.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/60"
                      title="View on Google Maps"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Custom Place Tab Content */}
        {activeTab === 'custom' && (
          <form onSubmit={handleAddCustomPlace} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Place Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Medchal Dental Care Clinic"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option value="Businesses">Businesses</option>
                  <option value="Wellness & Healthcare">Wellness & Healthcare</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Education & Research">Education & Research</option>
                  <option value="Hospitality & Dining">Hospitality & Dining</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Subcategory
                </label>
                <input
                  type="text"
                  placeholder="e.g. Diagnostic Center / Gated Villa"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Village / Area Zone
                </label>
                <select
                  value={villageArea}
                  onChange={(e) => setVillageArea(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option value="Shamirpet Junction">Shamirpet Junction</option>
                  <option value="Genome Valley Phase 1">Genome Valley Phase 1</option>
                  <option value="Genome Valley Phase 2">Genome Valley Phase 2</option>
                  <option value="ORR Exit 7">ORR Exit 7</option>
                  <option value="Lake Circle">Lake Circle</option>
                  <option value="Majeedpur">Majeedpur</option>
                  <option value="Ponnal">Ponnal</option>
                  <option value="Aliabad">Aliabad</option>
                  <option value="Lalgadi Malakpet">Lalgadi Malakpet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Full Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Google Maps URL
                </label>
                <input
                  type="url"
                  placeholder="https://maps.google.com/?q=..."
                  value={googleMapsUrl}
                  onChange={(e) => setGoogleMapsUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Rating
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Latitude
                </label>
                <input
                  type="number"
                  step="0.0001"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Longitude
                </label>
                <input
                  type="number"
                  step="0.0001"
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Description & Services
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Key services, opening hours, or highlights..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-lg transition-colors cursor-pointer"
            >
              Add Scraped Location to Database
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
