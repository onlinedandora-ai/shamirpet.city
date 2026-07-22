import React, { useState } from 'react';
import { COMMUNITY_NEWS } from '../data/mockData';
import type { NewsItem } from '../data/mockData';
import { Newspaper, ThumbsUp, PlusCircle, CheckCircle2 } from 'lucide-react';

interface NewsPageProps {
  onOpenSubmitNews: () => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onOpenSubmitNews }) => {
  const [newsFeed, setNewsFeed] = useState<NewsItem[]>(COMMUNITY_NEWS);
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const handleUpvote = (id: string) => {
    setNewsFeed(prev =>
      prev.map(item => (item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item))
    );
  };

  const filteredNews = newsFeed.filter(
    item => selectedCat === 'All' || item.category === selectedCat
  );

  return (
    <div className="py-12 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-3">
              <Newspaper className="w-3.5 h-3.5 text-teal-500" />
              <span>Community News Desk</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Shamirpet Local News Feed
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Factual, verified civic updates, transit notices, and environmental news submitted by local residents and business owners.
            </p>
          </div>

          <button
            onClick={onOpenSubmitNews}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post Local News</span>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          {['All', 'Civic', 'Traffic', 'Environment', 'Economy'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                selectedCat === cat
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Feed List */}
        <div className="space-y-4">
          {filteredNews.map(item => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-teal-500/50 transition-all duration-200"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                    {item.category}
                  </span>
                  {item.verified && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Update
                    </span>
                  )}
                  <span className="text-slate-400 dark:text-slate-400">• {item.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                <div className="text-[11px] text-slate-400 dark:text-slate-400 pt-1">
                  Reported by: <span className="font-semibold text-slate-700 dark:text-slate-300">{item.submittedBy}</span>
                </div>
              </div>

              <button
                onClick={() => handleUpvote(item.id)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-teal-700 text-xs font-bold transition-all cursor-pointer self-start sm:self-center"
              >
                <ThumbsUp className="w-4 h-4 text-teal-500" />
                <span>{item.upvotes} Upvotes</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
