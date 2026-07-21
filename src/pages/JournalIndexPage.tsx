import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/mockData';
import { ArticleCard } from '../components/ArticleCard';
import { BookOpen, Search } from 'lucide-react';

export const JournalIndexPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Real Estate', 'Civic', 'Education'];

  const filteredArticles = JOURNAL_ARTICLES.filter(art => {
    const matchesCat = selectedCat === 'All' || art.category === selectedCat;
    const matchesSearch =
      searchQuery === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.dek.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-50/50 dark:bg-slate-900/40 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            <BookOpen className="w-3.5 h-3.5 text-teal-500" />
            <span>Local Journalism & Urban Analysis</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Shamirpet Journal
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            In-depth reporting on Genome Valley biopharmaceutical expansion, real estate dynamics along ORR Exit 7, lake conservation, and university profiles.
          </p>

          {/* Search & Category Filter */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
              {categories.map(c => {
                const isSelected = selectedCat === c;
                let activeBgClass = 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-500/20';
                if (c === 'Real Estate') activeBgClass = 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20';
                if (c === 'Civic') activeBgClass = 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20';
                if (c === 'Education') activeBgClass = 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md shadow-sky-500/20';

                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCat(c)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? activeBgClass
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
              />
            </div>

          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </div>
  );
};
