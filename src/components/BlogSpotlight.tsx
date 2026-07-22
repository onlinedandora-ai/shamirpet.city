import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../data/mockData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogSpotlightProps {
  post: BlogPost;
}

export const BlogSpotlight: React.FC<BlogSpotlightProps> = ({ post }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-2xl border border-slate-700/80 group">
      
      {/* Decorative Blur Background Effects */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 relative z-10 items-center">
        
        {/* Cover Image Block */}
        <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-slate-700/60 shadow-lg h-64 sm:h-80 relative">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-indigo-600 text-white uppercase tracking-wider shadow-md">
              Featured Story
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900/80 text-indigo-300 border border-slate-700 backdrop-blur-md">
              {post.category}
            </span>
          </div>
        </div>

        {/* Text Content Block */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {post.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight group-hover:text-indigo-300 transition-colors">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3">
            {post.dek}
          </p>

          {/* Author info & Read Article CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/50"
              />
              <div>
                <div className="text-xs font-bold text-white">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-slate-400">
                  {post.author.role}
                </div>
              </div>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg transition-all duration-200 transform group-hover:translate-x-1"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};
