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
        return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/25';
      case 'Life Sciences / Biotech Employers':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25';
      case 'Education':
        return 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/25';
      case 'Healthcare':
        return 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/25';
      case 'Hospitality & Food':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25';
      default:
        return 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/25';
    }
  };

  return (
    <div
      onClick={() => onSelect && onSelect(listing)}
      className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-300 card-hover-effect cursor-pointer ${
        listing.isSponsored
          ? 'border-amber-400/60 dark:border-amber-500/50 shadow-md ring-1 ring-amber-400/20'
          : 'border-slate-200/90 dark:border-slate-800/90 hover:border-teal-500/40 dark:hover:border-teal-400/40'
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
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-500 text-slate-900 shadow-sm uppercase tracking-wider">
                Sponsored
              </span>
            )}

            {listing.isFeatured && !listing.isSponsored && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                Featured
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {listing.rating.toFixed(1)}
            </span>
            <span className="text-[10px] text-slate-500">
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
          <MapPin className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
          <span>{listing.villageArea} • {listing.address}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {listing.description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
        
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-teal-500" />
            {listing.phone}
          </span>
          <span className="hidden sm:inline flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {listing.hours.split(';')[0]}
          </span>
        </div>

        <div className="flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold group-hover:underline">
          <span>View Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>

      </div>

    </div>
  );
};
