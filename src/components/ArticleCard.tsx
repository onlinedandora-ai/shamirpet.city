import React from 'react';
import { Link } from 'react-router-dom';
import type { JournalArticle } from '../data/mockData';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: JournalArticle;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden card-hover-effect">
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
            <span className="px-3 py-1 rounded-md text-xs font-bold bg-slate-900/85 text-teal-300 backdrop-blur-md border border-white/10">
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
