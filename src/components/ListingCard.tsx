import React from 'react';
import type { DirectoryListing } from '../data/mockData';
import { Star, MapPin, Phone, ExternalLink, Clock } from 'lucide-react';

interface ListingCardProps {
  listing: DirectoryListing;
  onSelect?: (listing: DirectoryListing) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onSelect }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Real Estate & Developers':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800';
      case 'Life Sciences / Biotech Employers':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
      case 'Education':
        return 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800';
      case 'Healthcare':
        return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
      case 'Hospitality & Food':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800';
      default:
        return 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800';
    }
  };

  return (
    <div
      onClick={() => onSelect && onSelect(listing)}
      className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-teal-500/50 hover:shadow-md cursor-pointer ${
        listing.isSponsored
          ? 'ring-1 ring-teal-500/40 shadow-sm'
          : ''
      }`}
    >
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getCategoryColor(listing.category)}`}>
              {listing.category}
            </span>
            
            {listing.isSponsored && (
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 uppercase tracking-wider">
                Sponsored
              </span>
            )}

            {listing.isFeatured && !listing.isSponsored && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                Featured
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {listing.rating.toFixed(1)}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              ({listing.reviewsCount})
            </span>
          </div>

        </div>

        {/* Business Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-1">
          {listing.name}
        </h3>

        {/* Village / Area Tag */}
        <div className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
          <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
          <span>{listing.villageArea} • {listing.address}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
          {listing.description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
        
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
            {listing.phone}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
            {listing.hours.split(';')[0]}
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-900 dark:text-teal-300 font-semibold group-hover:underline">
          <span>View Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>

      </div>

    </div>
  );
};
