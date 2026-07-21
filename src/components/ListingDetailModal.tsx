import React, { useState } from 'react';
import type { DirectoryListing } from '../data/mockData';
import { X, Star, MapPin, Phone, Globe, ExternalLink, Clock, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

interface ListingDetailModalProps {
  listing: DirectoryListing | null;
  onClose: () => void;
}

export const ListingDetailModal: React.FC<ListingDetailModalProps> = ({ listing, onClose }) => {
  const [reviewText, setReviewText] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!listing) return null;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setReviewText('');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
              {listing.category}
            </span>
            {listing.isSponsored && (
              <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-500 text-slate-900 uppercase tracking-wider">
                Sponsored Listing
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Rating */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
              {listing.name}
            </h2>
            
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold px-2.5 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{listing.rating.toFixed(1)}</span>
                <span className="text-slate-500 font-normal">({listing.reviewsCount} verified reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{listing.verifiedStatus}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            {listing.description}
          </p>

          {/* Key Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
              <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">Location & Address</span>
              <div className="flex items-start gap-2 text-slate-800 dark:text-slate-200 font-medium">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>{listing.address} ({listing.villageArea})</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
              <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">Operating Hours</span>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                <Clock className="w-4 h-4 text-teal-500" />
                <span>{listing.hours}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
              <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">Direct Contact</span>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                <Phone className="w-4 h-4 text-teal-500" />
                <span>{listing.phone}</span>
              </div>
            </div>

            {listing.website && (
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">Official Website</span>
                <a
                  href={listing.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline font-medium"
                >
                  <Globe className="w-4 h-4" />
                  <span className="truncate">{listing.website.replace('https://', '')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={listing.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* User Review Form Section */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <MessageSquare className="w-4 h-4 text-teal-500" />
              <span>Leave a Community Review</span>
            </h4>

            {reviewSubmitted ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! Your review has been submitted for moderation.</span>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-500">Your Rating:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        onClick={() => setUserRating(star)}
                        className={`w-4 h-4 cursor-pointer ${
                          star <= userRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <textarea
                  rows={2}
                  required
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder={`Share your experience with ${listing.name}...`}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                />

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                >
                  Post Review
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
