import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DIRECTORY_LISTINGS } from '../data/mockData';
import type { DirectoryListing } from '../data/mockData';
import { ListingCard } from '../components/ListingCard';
import { MapView } from '../components/MapView';
import { Search, Map, LayoutGrid, Filter, PlusCircle, Building2, MapPin, Sparkles } from 'lucide-react';

interface DirectoryPageProps {
  onSelectListing: (listing: DirectoryListing) => void;
  onOpenSubmitListing: () => void;
}

export const DirectoryPage: React.FC<DirectoryPageProps> = ({ onSelectListing, onOpenSubmitListing }) => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedVillage, setSelectedVillage] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);

  const categories = [
    'All',
    'Life Sciences / Biotech Employers',
    'Real Estate & Developers',
    'Education',
    'Healthcare',
    'Hospitality & Food',
    'Retail & Services',
  ];

  const villages = ['All', 'ORR Exit 7', 'Lake Circle', 'Genome Valley Zone', 'Majeedpur', 'Ponnal'];

  const filteredListings = useMemo(() => {
    return DIRECTORY_LISTINGS.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesVillage = selectedVillage === 'All' || item.villageArea === selectedVillage;
      const matchesSearch =
        searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesVillage && matchesSearch;
    });
  }, [selectedCategory, selectedVillage, searchTerm]);

  return (
    <div className="py-10 bg-slate-50/50 dark:bg-slate-900/40 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-3">
              <Building2 className="w-3.5 h-3.5 text-teal-500" />
              <span>Verified Local Business & Employer Index</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Shamirpet Business Directory
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Explore Genome Valley corporate campuses, HMDA real-estate layouts, universities, clinics, and local services across Shamirpet and ORR Exit 7.
            </p>
          </div>

          {/* View Toggle & Add Business */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* View Mode Toggle Buttons */}
            <div className="flex items-center p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-teal-600'
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
                    : 'text-slate-600 dark:text-slate-300 hover:text-teal-600'
                }`}
              >
                <Map className="w-4 h-4" />
                <span>Map View</span>
              </button>
            </div>

            <button
              onClick={onOpenSubmitListing}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Submit Listing</span>
            </button>

          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search listing by name or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
              />
            </div>

            {/* Village Area Select */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <MapPin className="w-4 h-4 text-teal-500 hidden sm:inline" />
              <select
                value={selectedVillage}
                onChange={e => setSelectedVillage(e.target.value)}
                className="w-full md:w-48 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
              >
                {villages.map(v => (
                  <option key={v} value={v}>
                    {v === 'All' ? 'All Areas & Sectors' : v}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xs text-slate-500 ml-auto font-medium">
              Showing <span className="font-bold text-teal-600 dark:text-teal-400">{filteredListings.length}</span> verified entries
            </div>

          </div>

          {/* Category Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-md'
                    : cat === 'Life Sciences / Biotech Employers'
                    ? 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30 hover:bg-purple-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-teal-500'
                }`}
              >
                {cat === 'Life Sciences / Biotech Employers' && (
                  <Sparkles className="w-3 h-3 inline mr-1 text-purple-400" />
                )}
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Directory View Area */}
        {viewMode === 'map' ? (
          <MapView
            listings={filteredListings}
            onSelectListing={onSelectListing}
          />
        ) : (
          <div>
            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map(listing => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    onSelect={onSelectListing}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <Filter className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  No listings found for this filter
                </h3>
                <p className="text-xs text-slate-500">
                  Try selecting "All" categories or resetting your search term.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedVillage('All');
                    setSearchTerm('');
                  }}
                  className="px-4 py-2 rounded-lg bg-teal-600 text-white text-xs font-bold"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
