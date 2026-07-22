import React from 'react';
import { ExternalLink } from 'lucide-react';
import { NETWORK_SITES } from '../data/mockData';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            About shamirpet.city
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built for Shamirpet, by Shamirpet.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Everything Shamirpet. News, businesses, and neighbors — in one place.
          </p>
        </div>

        {/* Core Positioning */}
        <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 space-y-6 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Positioning & Mission</h2>
          <p>
            Shamirpet is Hyderabad's bio-pharma-and-lifestyle corridor — a lake-and-deer-park town on ORR Exit 7 that is rapidly becoming the residential address of choice for Genome Valley's life-sciences workforce.
          </p>
          <p>
            <strong>shamirpet.city</strong> is designed to read as a credible, locally-rooted news and directory source that also happens to be the best single page on the internet for anyone researching real estate, relocation, or businesses in the area.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Dandora Network Integration</h2>
          <p>
            shamirpet.city is part of the regional growth corridor network supported by <strong>Dandora</strong> (dandora.online), a Hyderabad growth and execution partner specializing in real estate developer advisory and digital SEO infrastructure.
          </p>
          <p>
            By delivering factual, high-intent coverage of land pricing, Genome Valley corporate demand, and transit infrastructure, shamirpet.city provides transparent value for home buyers and real estate developers alike.
          </p>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 my-6">
            <h3 className="font-bold text-teal-600 dark:text-teal-400 text-sm mb-2">Editorial Guidelines</h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>• <strong>Verifiable Facts:</strong> All land pricing and infrastructure metrics are verified locally.</li>
              <li>• <strong>Transparent Sponsorship:</strong> Paid real-estate layouts are clearly marked with a "Sponsored" tag.</li>
              <li>• <strong>Community Open Registry:</strong> Local small businesses can claim or submit listings at zero cost.</li>
            </ul>
          </div>
        </div>

        {/* Regional Network Grid */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Explore Telangana Growth Corridor Network
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NETWORK_SITES.map(site => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-teal-500 transition-colors group flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 text-sm">
                    {site.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {site.tagline}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-500" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
