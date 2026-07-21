import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DIRECTORY_LISTINGS, JOURNAL_ARTICLES } from '../data/mockData';
import { Search, X, Building2, BookOpen, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filteredListings = query.trim()
    ? DIRECTORY_LISTINGS.filter(
        l => l.name.toLowerCase().includes(query.toLowerCase()) ||
             l.category.toLowerCase().includes(query.toLowerCase()) ||
             l.villageArea.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredArticles = query.trim()
    ? JOURNAL_ARTICLES.filter(
        a => a.title.toLowerCase().includes(query.toLowerCase()) ||
             a.category.toLowerCase().includes(query.toLowerCase()) ||
             a.targetKeyword.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-teal-500 ml-2 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Shamirpet businesses, real estate, Genome Valley, lake guides..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base outline-none font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-slate-500">
              Try searching for <span className="text-teal-600 dark:text-teal-400 font-semibold">"Genome Valley"</span>, <span className="text-teal-600 dark:text-teal-400 font-semibold">"Shamirpet real estate"</span>, or <span className="text-teal-600 dark:text-teal-400 font-semibold">"NALSAR"</span>
            </div>
          ) : (
            <>
              {/* Directory Results */}
              {filteredListings.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <Building2 className="w-4 h-4 text-teal-500" />
                    <span>Directory Listings ({filteredListings.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredListings.map(item => (
                      <div
                        key={item.id}
                        onClick={() => {
                          onClose();
                          navigate(`/directory?search=${encodeURIComponent(item.name)}`);
                        }}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-teal-500/10 border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {item.category} • {item.villageArea}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Journal Results */}
              {filteredArticles.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <BookOpen className="w-4 h-4 text-teal-500" />
                    <span>Journal Articles ({filteredArticles.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredArticles.map(art => (
                      <div
                        key={art.id}
                        onClick={() => {
                          onClose();
                          navigate(`/journal/${art.slug}`);
                        }}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-teal-500/10 border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                            {art.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {art.category} • {art.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredListings.length === 0 && filteredArticles.length === 0 && (
                <div className="py-12 text-center text-slate-500 text-sm">
                  No matching entries found for "{query}".
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
