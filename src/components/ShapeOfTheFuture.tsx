import React from 'react';
import { Compass, Sparkles, Building2, MapPin, ArrowRight } from 'lucide-react';

interface ShapeOfTheFutureProps {
  onOpenSubmitListing?: () => void;
}

export const ShapeOfTheFuture: React.FC<ShapeOfTheFutureProps> = ({ onOpenSubmitListing }) => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
            <Compass className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>Shamirpet Vision 2030 Masterplan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Shape of the Future: <br className="hidden sm:inline" />
            Hyderabad's Premier North Corridor
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            From Nizam-era lake sanctuary to India's life-sciences epicenter — discover how ORR Exit 7, Genome Valley Phase 3, and tier-1 academic campuses are shaping Shamirpet's decade ahead.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-3 shadow-sm hover:shadow-md transition-all">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 w-fit">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Genome Valley 3.0 R&D</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              300+ additional acres dedicated to biopharmaceutical R&D wet labs, vaccine innovation, and 8,000+ new high-skilled life-sciences careers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-3 shadow-sm hover:shadow-md transition-all">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">ORR Exit 7 Infrastructure</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              ₹45 Cr municipal grant upgrading service lanes, smart LED streetlights, bicycle tracks, and 35-min signal-free travel to Financial District.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-3 shadow-sm hover:shadow-md transition-all">
            <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 w-fit">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Lake Rejuvenation & Eco-Park</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Preserving Pelle Cheruvu catchment area with a 54-acre deer park promenade, bird watching trails, and green lakefront dining hubs.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        {onOpenSubmitListing && (
          <div className="pt-4 text-center">
            <button
              onClick={onOpenSubmitListing}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Add Your Business to Shamirpet City Index</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
