import React from 'react';
import { Link } from 'react-router-dom';
import { StatsBar } from '../components/StatsBar';
import { HighlightsGrid } from '../components/HighlightsGrid';
import { ShapeOfTheFuture } from '../components/ShapeOfTheFuture';
import { ListingCard } from '../components/ListingCard';
import { ArticleCard } from '../components/ArticleCard';
import { DIRECTORY_LISTINGS, JOURNAL_ARTICLES } from '../data/mockData';
import { Building2, BookOpen, ArrowRight, ShieldCheck, MapPin, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

interface HomePageProps {
  onSelectListing: (listing: any) => void;
  onOpenSubmitListing: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectListing, onOpenSubmitListing }) => {
  const featuredListings = DIRECTORY_LISTINGS.filter(l => l.isFeatured || l.isSponsored).slice(0, 4);
  const featuredArticles = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Block */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>Shamirpet, Telangana — Genome Valley & ORR Corridor</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
                Everything Shamirpet. <br className="hidden sm:inline" />
                <span className="gradient-text">
                  News, businesses, & neighbors
                </span> — in one place.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                The official local journal and verified business directory for Shamirpet — Genome Valley life-sciences jobs, real estate developments on ORR Exit 7, the lake, and local services.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/directory"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm shadow-md transition-all duration-200"
                >
                  <Building2 className="w-4 h-4 text-white" />
                  <span>Browse Business Directory</span>
                </Link>

                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all duration-200"
                >
                  <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Read Local Blog Hub</span>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-indigo-500 dark:text-indigo-400" /> Verified Listings
                </span>
                <span>•</span>
                <span>Genome Valley Special Category</span>
                <span>•</span>
                <span>HMDA Real Estate Updates</span>
              </div>

            </div>

            {/* Right Hero Feature Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 group">
                <img
                  src="/images/genome_valley.png"
                  alt="Genome Valley Shamirpet"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-extrabold bg-indigo-600 text-white uppercase tracking-wider">
                    Bio-Pharma & Lifestyle Corridor
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Genome Valley & ORR Exit 7 Axis
                  </h3>
                  <p className="text-xs text-slate-200">
                    Hyderabad's premier life-sciences corridor connecting R&D talent with lakeside living.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. STATS BAR SECTION */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <StatsBar />
      </div>

      {/* 3. HIGHLIGHTS GRID ("Know your town - Highlights of Shamirpet") */}
      <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
        <HighlightsGrid />
      </div>

      {/* 4. GENOME VALLEY & REAL ESTATE SPOTLIGHT */}
      <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-slate-900 text-white relative overflow-hidden shadow-md border border-slate-800">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <span>Bio-Pharma & Growth Corridor Brief</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Why Shamirpet is Hyderabad's Premier Investment Address
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  With baseline land values at ₹35,000–45,000/sq yd, signal-free ORR Exit 7 connectivity, and over 200 biopharmaceutical campuses in Genome Valley, Shamirpet balances high-yield growth with pristine ecology.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                  <a
                    href="https://dandora.online/sectors/real-estate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-md transition-colors"
                  >
                    <span>Developer Growth Advisory (Dandora Real Estate)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    to="/blog/why-shamirpet-is-becoming-hyderabads-bio-pharma-and-lifestyle-corridor"
                    className="text-indigo-300 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Full 2026 Corridor Report</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-xs space-y-3 shadow-inner">
                <div className="font-bold text-indigo-400 uppercase tracking-wider">
                  Corridor Metrics (2026)
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Land Price Range</span>
                  <span className="font-bold text-white">₹35k - ₹45k / sq yd</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Airport Access</span>
                  <span className="font-bold text-white">45 mins via ORR</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Hitec City Commute</span>
                  <span className="font-bold text-white">35 mins signal-free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Biotech Workforce</span>
                  <span className="font-bold text-white">20,000+ Professionals</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. FEATURED BUSINESS DIRECTORY */}
      <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Verified Local Index
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Featured Business Directory
              </h2>
            </div>

            <Link
              to="/directory"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>View All Listings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredListings.map(listing => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onSelect={onSelectListing}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenSubmitListing}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors shadow-md cursor-pointer"
            >
              <span>Own a business in Shamirpet? Add your listing for free</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. LATEST JOURNAL GUIDES */}
      <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Local Journalism
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Latest Journal Guides
              </h2>
            </div>

            <Link
              to="/blog"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} linkPrefix="/blog" />
            ))}
          </div>

        </div>
      </section>

      {/* 7. SHAPE OF THE FUTURE (2030 VISION & MASTER PLAN AT THE END) */}
      <ShapeOfTheFuture onOpenSubmitListing={onOpenSubmitListing} />

      {/* 8. BOTTOM COMMUNITY CTA BANNER (FULLY ADAPTS TO SUN & MOON MODES) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
            <Calendar className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>Community Portal Active</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-2xl mx-auto">
            Shape the Future of Shamirpet's Digital Public Square
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Whether you manage a biotech laboratory, own a lakeside resort, or publish local news, feature your voice on Shamirpet's official directory.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenSubmitListing}
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              Submit Business Listing
            </button>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Contact Editorial Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
