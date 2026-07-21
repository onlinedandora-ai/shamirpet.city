import React from 'react';
import { Link } from 'react-router-dom';
import { StatsBar } from '../components/StatsBar';
import { HighlightsGrid } from '../components/HighlightsGrid';
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
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-500/5 via-transparent to-transparent dark:from-teal-500/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Block */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                <MapPin className="w-3.5 h-3.5 text-teal-500" />
                <span>Shamirpet, Telangana — lake, labs, and the ORR</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Everything Shamirpet. <br className="hidden sm:inline" />
                <span className="gradient-text">News, businesses, & neighbors</span> — in one place.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                The local journal and business directory built for Shamirpet, by Shamirpet — Genome Valley jobs, real estate growth on ORR Exit 7, the lake, and local businesses.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/directory"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-lg hover:shadow-teal-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Browse Business Directory</span>
                </Link>

                <Link
                  to="/journal"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-bold text-sm shadow-sm transition-all duration-200"
                >
                  <BookOpen className="w-4 h-4 text-teal-500" />
                  <span>Read Local Journal</span>
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Verified Listings
                </span>
                <span>•</span>
                <span>Genome Valley Special Category</span>
                <span>•</span>
                <span>HMDA Real Estate Updates</span>
              </div>

            </div>

            {/* Right Hero Feature Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
                <img
                  src="/images/genome_valley.png"
                  alt="Genome Valley Shamirpet"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-teal-500 text-slate-950 uppercase tracking-wider">
                    Bio-Pharma & Lifestyle Hub
                  </span>
                  <h3 className="text-xl font-bold">
                    Genome Valley & ORR Exit 7 Axis
                  </h3>
                  <p className="text-xs text-slate-300">
                    Hyderabad's fastest growing life-sciences corridor connecting R&D talent with lakeside living.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Honest Stats Bar */}
      <StatsBar />

      {/* Highlights Grid ("Know your town") */}
      <HighlightsGrid />

      {/* Genome Valley & Real Estate Spotlight */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-900 to-slate-900 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold shadow-md transition-colors"
                  >
                    <span>Developer Growth Advisory (Dandora Real Estate)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    to="/journal/why-shamirpet-is-becoming-hyderabads-bio-pharma-and-lifestyle-corridor"
                    className="text-teal-300 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Full 2026 Corridor Report</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-800 text-xs space-y-3">
                <div className="font-bold text-teal-400 uppercase tracking-wider">
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

      {/* Featured Business Directory Listings */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Verified Local Index
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Featured Business Directory
              </h2>
            </div>

            <Link
              to="/directory"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors shadow-md"
            >
              <span>Own a business in Shamirpet? Add your listing for free</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>

        </div>
      </section>

      {/* Featured Journal Articles */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Local Journalism
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Latest Journal Guides
              </h2>
            </div>

            <Link
              to="/journal"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              <span>Read Full Journal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

        </div>
      </section>

      {/* Events & Festivals Preview Banner */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Shamirpet Community & Cultural Events Calendar
              </h3>
              <p className="text-xs text-slate-400">
                Maha Shivaratri at Katta Maisamma shrine, Lake nature walks, and Genome Bio-Tech expos.
              </p>
            </div>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-colors shadow-md whitespace-nowrap"
          >
            <span>View Events Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};
