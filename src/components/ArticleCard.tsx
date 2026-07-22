import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { JournalArticle } from '../data/mockData';
import { Calendar, Clock, Tag } from 'lucide-react';

interface ArticleCardProps {
  article: JournalArticle;
  linkPrefix?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, linkPrefix = '/blog' }) => {
  const navigate = useNavigate();

  const getCategoryBadgeStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case 'real estate':
      case 'market report':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800';
      case 'civic':
      case 'infrastructure':
      case 'transit':
        return 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800';
      case 'education':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800';
      case 'industry & economy':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800';
      case 'community news':
        return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
      default:
        return 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800';
    }
  };

  const articleUrl = `${linkPrefix}/${article.slug}`;

  return (
    <article
      onClick={() => navigate(articleUrl)}
      className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
    >
      <div>
        {/* Article Featured Image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className={`px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-md border ${getCategoryBadgeStyle(article.category)}`}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              {article.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2">
            <Link to={articleUrl} onClick={(e) => e.stopPropagation()}>
              {article.title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
            {article.dek}
          </p>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {article.tags.slice(0, 3).map(tag => (
                <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <Tag className="w-2.5 h-2.5 text-indigo-500 dark:text-indigo-400" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
