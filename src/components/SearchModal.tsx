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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 border-b border-neutral-200">
          <Search className="w-5 h-5 text-neutral-700 ml-2 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Shamirpet businesses, real estate, Genome Valley, lake guides..."
            className="w-full bg-transparent text-neutral-900 placeholder-neutral-400 text-sm sm:text-base outline-none font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-neutral-500">
              Try searching for <span className="text-neutral-900 font-semibold">"Genome Valley"</span>, <span className="text-neutral-900 font-semibold">"Shamirpet real estate"</span>, or <span className="text-neutral-900 font-semibold">"NALSAR"</span>
            </div>
          ) : (
            <>
              {/* Directory Results */}
              {filteredListings.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    <Building2 className="w-4 h-4 text-neutral-800" />
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
                        className="p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="text-sm font-bold text-neutral-900 group-hover:text-black">
                            {item.name}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {item.category} • {item.villageArea}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Journal Results */}
              {filteredArticles.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    <BookOpen className="w-4 h-4 text-neutral-800" />
                    <span>Journal Articles ({filteredArticles.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredArticles.map(art => (
                      <div
                        key={art.id}
                        onClick={() => {
                          onClose();
                          navigate(`/blog/${art.slug}`);
                        }}
                        className="p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="text-sm font-bold text-neutral-900 group-hover:text-black">
                            {art.title}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {art.category} • {art.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredListings.length === 0 && filteredArticles.length === 0 && (
                <div className="py-12 text-center text-neutral-500 text-sm">
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
