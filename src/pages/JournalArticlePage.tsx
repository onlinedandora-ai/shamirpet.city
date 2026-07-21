import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { JOURNAL_ARTICLES, NETWORK_SITES } from '../data/mockData';
import { Calendar, Clock, ArrowLeft, ExternalLink, Share2, CheckCircle2, Building2 } from 'lucide-react';

export const JournalArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = JOURNAL_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="py-10 bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      
      {/* Top Breadcrumb Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <Link
          to="/journal"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Journal Articles</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Category & Date */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
              {article.category}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-teal-500" />
              {article.publishDate}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-500" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {article.dek}
          </p>

          {/* Author Bar */}
          <div className="flex items-center justify-between py-4 border-y border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {article.author.name}
                </div>
                <div className="text-xs text-slate-500">
                  {article.author.role}
                </div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-teal-500" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-80 sm:h-96 w-full">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Callout Box */}
        {article.keyTakeaways && (
          <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-slate-900 dark:text-white space-y-3">
            <div className="flex items-center gap-2 font-bold text-teal-700 dark:text-teal-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Key Takeaways for Readers & Investors</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div
          className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed space-y-6 text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Dandora Real Estate Partner Callout Banner */}
        {article.dandoraLink && (
          <div className="my-10 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-teal-400 font-bold text-xs">
                <Building2 className="w-4 h-4" />
                <span>Dandora Growth & Real Estate Partner</span>
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Planning real-estate layout marketing or land acquisition in Shamirpet?
              </p>
            </div>
            <a
              href={article.dandoraLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md whitespace-nowrap"
            >
              <span>Visit Dandora Real Estate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Sister Network Sites Cross-Links */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            More Growth Corridor Guides Across Hyderabad
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {NETWORK_SITES.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium"
              >
                {s.name} ({s.tagline.split('&')[0]})
              </a>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
};
