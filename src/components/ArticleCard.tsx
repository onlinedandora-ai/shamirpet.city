import React from 'react';
import { Link } from 'react-router-dom';
import type { JournalArticle } from '../data/mockData';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: JournalArticle;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Real Estate':
        return 'bg-indigo-600/90 text-indigo-100 border-indigo-400/30 shadow-indigo-500/20';
      case 'Civic':
        return 'bg-emerald-600/90 text-emerald-100 border-emerald-400/30 shadow-emerald-500/20';
      case 'Education':
        return 'bg-sky-600/90 text-sky-100 border-sky-400/30 shadow-sky-500/20';
      case 'Industry & Economy':
        return 'bg-amber-600/90 text-amber-100 border-amber-400/30 shadow-amber-500/20';
      default:
        return 'bg-teal-600/90 text-teal-100 border-teal-400/30 shadow-teal-500/20';
    }
  };

  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/90 overflow-hidden card-hover-effect shadow-sm hover:shadow-xl hover:border-teal-500/40 dark:hover:border-teal-400/40 transition-all duration-300">
      <div>
        {/* Article Featured Image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-md border shadow-md ${getCategoryBadgeStyle(article.category)}`}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-teal-500" />
              {article.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-500" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug mb-2">
            <Link to={`/journal/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
            {article.dek}
          </p>
        </div>
      </div>

      {/* Card Footer Author Bar */}
      <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700"
          />
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-200">
              {article.author.name}
            </div>
            <div className="text-[10px] text-slate-500">
              {article.author.role.split('&')[0]}
            </div>
          </div>
        </div>

        <Link
          to={`/journal/${article.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 group/link"
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
