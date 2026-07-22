import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPostBySlug, getRelatedBlogPosts, NETWORK_SITES } from '../data/mockData';
import { ArticleCard } from '../components/ArticleCard';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';
import { Calendar, Clock, ArrowLeft, ExternalLink, Share2, CheckCircle2, Building2, List, Tag, BookOpen, Sun, Moon } from 'lucide-react';

export const JournalArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getBlogPostBySlug(slug) : undefined;
  const { theme } = useTheme();

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedBlogPosts(article.slug, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Blog article link copied to clipboard!');
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Real Estate':
        return 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30';
      case 'Civic':
        return 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30';
      case 'Education':
        return 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30';
      case 'Industry & Economy':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30';
      case 'Community News':
        return 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30';
      default:
        return 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-500/30';
    }
  };

  return (
    <div className="py-10 bg-slate-50/50 dark:bg-slate-950/80 transition-colors duration-300 min-h-screen">
      
      {/* Top Breadcrumb Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Blog Articles</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Category & Metadata Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-md text-xs font-bold border ${getCategoryBadgeStyle(article.category)}`}>
              {article.category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              {article.publishDate}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
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
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {article.author.role}
                </div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-80 sm:h-96 w-full">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tags bar if tags exist */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center text-xs">
            <span className="font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" /> Tags:
            </span>
            {article.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium shadow-sm">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Table of Contents (TOC) if available */}
        {article.toc && article.toc.length > 0 && (
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <List className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>Table of Contents</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {article.toc.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline flex items-center gap-2"
                  >
                    <span className="text-indigo-500 dark:text-indigo-400 font-mono font-bold text-xs">{idx + 1}.</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Takeaways Callout Box */}
        {article.keyTakeaways && (
          <div className="p-6 rounded-2xl bg-indigo-500/10 dark:bg-indigo-950/40 border border-indigo-500/30 text-slate-900 dark:text-slate-100 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-indigo-700 dark:text-indigo-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>Key Takeaways for Readers & Investors</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">•</span>
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
          <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-indigo-300 font-bold text-xs">
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
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md whitespace-nowrap transition-colors"
            >
              <span>Visit Dandora Real Estate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Related Blog Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <span>Related Blog Articles</span>
              </h3>
              <Link to="/blog" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                View All Blogs →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relPost => (
                <ArticleCard key={relPost.id} article={relPost} linkPrefix="/blog" />
              ))}
            </div>
          </div>
        )}

        {/* Last Bit: Sun & Moon Theme Reading Controls Bar */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-100 to-indigo-500/10 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            {theme === 'dark' ? (
              <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Moon className="w-5 h-5" />
              </div>
            ) : (
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-600 border border-amber-500/30">
                <Sun className="w-5 h-5" />
              </div>
            )}
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Reading Comfort: {theme === 'dark' ? 'Moon (Night) Mode Active' : 'Sun (Day) Mode Active'}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Switch themes for comfortable viewing in bright sunlight or dark rooms.
              </div>
            </div>
          </div>

          <ThemeSwitcher showLabel className="px-4 py-2 text-xs font-bold shadow-md" />
        </div>

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
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
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
