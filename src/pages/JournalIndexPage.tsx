import React, { useState } from 'react';
import { BLOG_POSTS, COMMUNITY_NEWS } from '../data/mockData';
import { ArticleCard } from '../components/ArticleCard';
import { BlogSpotlight } from '../components/BlogSpotlight';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';
import { BookOpen, Search, Filter, TrendingUp, Newspaper, Building2, ExternalLink, Sun, Moon } from 'lucide-react';

export const JournalIndexPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { theme } = useTheme();

  const categories = [
    'All',
    'Real Estate',
    'Civic',
    'Education',
    'Industry & Economy',
    'Community News'
  ];

  // Find lead featured story for spotlight
  const featuredSpotlightPost = BLOG_POSTS.find(p => p.isFeatured) || BLOG_POSTS[0];

  const filteredArticles = BLOG_POSTS.filter(art => {
    const matchesCat = selectedCat === 'All' || art.category === selectedCat;
    const matchesSearch =
      searchQuery === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.dek.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (art.tags && art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-50/50 dark:bg-slate-950/80 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header & Subtitle */}
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
            <BookOpen className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>Unified Local Blog & Journal Hub</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Shamirpet Blog & Journal
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            All Shamirpet articles in one structure — in-depth reporting on Genome Valley biopharmaceutical expansion, real estate dynamics along ORR Exit 7, lake conservation, university profiles, and community civic news.
          </p>

          {/* Search & Category Filter Navigation Bar */}
          <div className="pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1 pr-1">
                <Filter className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                Category:
              </span>
              {categories.map(c => {
                const isSelected = selectedCat === c;
                let activeBgClass = 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/20';
                if (c === 'Real Estate') activeBgClass = 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-violet-500/20';
                if (c === 'Civic') activeBgClass = 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md shadow-sky-500/20';
                if (c === 'Education') activeBgClass = 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20';
                if (c === 'Industry & Economy') activeBgClass = 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-500/20';
                if (c === 'Community News') activeBgClass = 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-500/20';

                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCat(c)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? activeBgClass
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search blog articles & topics..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>

          </div>
        </div>

        {/* Featured Hero Blog Spotlight (when no search query filter is active) */}
        {selectedCat === 'All' && searchQuery === '' && featuredSpotlightPost && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>Spotlight Lead Blog Story</span>
            </div>
            <BlogSpotlight post={featuredSpotlightPost} />
          </section>
        )}

        {/* Main Content Area: Blog Grid + Right Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Blog Cards Grid (8 Cols on Desktop) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <span>Articles ({filteredArticles.length})</span>
              </h2>
              {selectedCat !== 'All' && (
                <button
                  onClick={() => setSelectedCat('All')}
                  className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                >
                  Clear Category Filter
                </button>
              )}
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map(article => (
                  <ArticleCard key={article.id} article={article} linkPrefix="/blog" />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                <Search className="w-10 h-10 text-slate-400 mx-auto" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  No blog articles found matching "{searchQuery}"
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Try searching for keywords like "Genome Valley", "Real Estate", "Lake", "BITS Pilani", or reset your category filter.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCat('All'); }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md cursor-pointer transition-colors"
                >
                  Reset Search & Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar Widgets (4 Cols on Desktop) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Community Bulletins Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-800 pb-3">
                <Newspaper className="w-4 h-4 text-rose-500" />
                <span>Live Community Updates</span>
              </div>
              <div className="space-y-4">
                {COMMUNITY_NEWS.map(item => (
                  <div key={item.id} className="space-y-1 group border-b border-slate-100 dark:border-slate-800/60 pb-3 last:border-none last:pb-0">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {item.category} • {item.date}
                    </span>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth & Advisory Banner Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-3 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 font-bold text-indigo-300 text-xs">
                <Building2 className="w-4 h-4" />
                <span>Growth Corridor Partner</span>
              </div>
              <h4 className="text-base font-extrabold text-white">
                Dandora Real Estate Growth Advisory
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strategic lead funnels and layout marketing execution for HMDA land developments near ORR Exit 7.
              </p>
              <a
                href="https://dandora.online/sectors/real-estate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors w-full justify-center"
              >
                <span>Visit Dandora Real Estate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Last Bit: Sun & Moon Theme Switcher Card at the bottom of the page */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-100 to-indigo-500/10 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            {theme === 'dark' ? (
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Moon className="w-5 h-5" />
              </div>
            ) : (
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-600 border border-amber-500/30">
                <Sun className="w-5 h-5" />
              </div>
            )}
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Theme Viewing Mode: {theme === 'dark' ? 'Moon (Night) Mode' : 'Sun (Day) Mode'}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Toggle between Sun Mode for daylight reading and Moon Mode for dark environments.
              </div>
            </div>
          </div>

          <ThemeSwitcher showLabel className="px-4 py-2 text-xs font-bold shadow-md" />
        </div>

      </div>
    </div>
  );
};
