import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { DirectoryListing } from '../data/mockData';
import { getAllSeededListings, fetchPlacesFromDatabase, convertSeededToDirectoryListing } from '../services/dataService';
import { ListingCard } from '../components/ListingCard';
import { MapView } from '../components/MapView';
import { Search, Map, LayoutGrid, Building2, Database, Stethoscope, Home, Briefcase, GraduationCap, Utensils } from 'lucide-react';

interface DirectoryPageProps {
  onSelectListing: (listing: DirectoryListing) => void;
  onOpenSubmitListing: () => void;
}

export const DirectoryPage: React.FC<DirectoryPageProps> = ({ onSelectListing, onOpenSubmitListing }) => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [allListings, setAllListings] = useState<DirectoryListing[]>(getAllSeededListings());
  const [isLiveDatabase, setIsLiveDatabase] = useState(false);
  
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedVillage, setSelectedVillage] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);

  useEffect(() => {
    fetchPlacesFromDatabase().then(({ places, isLiveSupabase }) => {
      if (places && places.length > 0) {
        const converted = places.map(convertSeededToDirectoryListing);
        const existingIds = new Set(converted.map(c => c.id));
        const base = getAllSeededListings().filter(l => !existingIds.has(l.id));
        setAllListings([...converted, ...base]);
        setIsLiveDatabase(isLiveSupabase);
      }
    });
  }, []);

  const villages = ['All', 'ORR Exit 7', 'Lake Circle', 'Genome Valley Zone', 'Majeedpur', 'Ponnal'];

  const filteredListings = useMemo(() => {
    return allListings.filter(item => {
      let matchesCategory = false;
      if (selectedCategory === 'All') {
        matchesCategory = true;
      } else if (selectedCategory === 'Businesses') {
        matchesCategory = item.category === 'Retail & Services' || item.category === 'Life Sciences / Biotech Employers';
      } else if (selectedCategory === 'Wellness & Healthcare') {
        matchesCategory = item.category === 'Healthcare' || item.name.toLowerCase().includes('clinic') || item.name.toLowerCase().includes('health') || item.name.toLowerCase().includes('hospital') || item.name.toLowerCase().includes('wellness');
      } else if (selectedCategory === 'Real Estate & Developers') {
        matchesCategory = item.category === 'Real Estate & Developers';
      } else {
        matchesCategory = item.category === selectedCategory;
      }

      const matchesVillage = selectedVillage === 'All' || item.villageArea === selectedVillage;
      const matchesSearch =
        searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesVillage && matchesSearch;
    });
  }, [selectedCategory, selectedVillage, searchTerm, allListings]);

  return (
    <div className="py-10 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                <Building2 className="w-3.5 h-3.5 text-teal-500" />
                <span>Verified Local Business & Employer Index</span>
              </div>
              {isLiveDatabase && (
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  <Database className="w-3 h-3 text-emerald-500" />
                  <span>Live Supabase Connected</span>
                </div>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Shamirpet Business Directory
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Explore Genome Valley corporate campuses, HMDA real-estate layouts, hospitals, clinics, and local businesses across Shamirpet and ORR Exit 7.
            </p>
          </div>

          {/* View Toggle & Add Business */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* View Mode Toggle Buttons */}
            <div className="flex items-center p-1 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Card Grid</span>
              </button>

              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === 'map'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Map className="w-4 h-4" />
                <span>Map View</span>
              </button>
            </div>

            <button
              onClick={onOpenSubmitListing}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
            >
              <Building2 className="w-4 h-4" />
              <span>Submit Listing</span>
            </button>
          </div>
        </div>

        {/* Quick Category Quick-Select Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-teal-400'
            }`}
          >
            All Listings ({allListings.length})
          </button>
          
          <button
            onClick={() => setSelectedCategory('Businesses')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedCategory === 'Businesses'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-teal-400'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-teal-600" />
            <span>Businesses</span>
          </button>

          <button
            onClick={() => setSelectedCategory('Wellness & Healthcare')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedCategory === 'Wellness & Healthcare'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-rose-400'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5 text-rose-500" />
            <span>Wellness & Healthcare</span>
          </button>

          <button
            onClick={() => setSelectedCategory('Real Estate & Developers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedCategory === 'Real Estate & Developers'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-indigo-400'
            }`}
          >
            <Home className="w-3.5 h-3.5 text-indigo-500" />
            <span>Real Estate</span>
          </button>

          <button
            onClick={() => setSelectedCategory('Education')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedCategory === 'Education'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-neutral-700" />
            <span>Education</span>
          </button>

          <button
            onClick={() => setSelectedCategory('Hospitality & Food')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedCategory === 'Hospitality & Food'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400'
            }`}
          >
            <Utensils className="w-3.5 h-3.5 text-amber-500" />
            <span>Hospitality & Dining</span>
          </button>
        </div>

        {/* Filter Toolbar & Search Bar */}
        <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by name, service, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
            />
          </div>

          {/* Area & Filter Selectors */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-neutral-500">Zone:</span>
              <select
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className="px-3 py-2 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-xs font-semibold outline-none"
              >
                {villages.map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter & View Display */}
        {viewMode === 'grid' ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                Showing {filteredListings.length} Places
              </span>
            </div>

            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    onSelect={() => onSelectListing(listing)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200">
                <Building2 className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-neutral-900">No listings found</h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto mt-1">
                  Try clearing your search terms or selecting a different category/zone.
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Map View Mode */
          <div className="h-[650px] rounded-3xl overflow-hidden border border-neutral-200 shadow-md">
            <MapView
              listings={filteredListings}
              onSelectListing={onSelectListing}
            />
          </div>
        )}

      </div>
    </div>
  );
};
