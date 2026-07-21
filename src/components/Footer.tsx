import React from 'react';
import { Link } from 'react-router-dom';
import { NETWORK_SITES } from '../data/mockData';
import { Building2, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors duration-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                shamirpet<span className="text-teal-400">.city</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                ORR Exit 7
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The local journal and business directory built for Shamirpet, by Shamirpet — covering Genome Valley jobs, real estate growth on ORR Exit 7, Shamirpet Lake, and verified local businesses.
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-400 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent Local Journalism & Business Registry</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Explore Portal
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/directory" className="hover:text-teal-400 transition-colors">
                  Business Directory
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-teal-400 transition-colors">
                  Journal Articles
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-teal-400 transition-colors">
                  Community News Feed
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-teal-400 transition-colors">
                  Events & Festivals
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About & Editorial Standards
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="hover:text-teal-400 transition-colors">
                  Advertise & Featured Listings
                </Link>
              </li>
            </ul>
          </div>

          {/* Directory Categories Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/directory?category=Real Estate %26 Developers" className="hover:text-teal-400 transition-colors">
                  Real Estate & Developers
                </Link>
              </li>
              <li>
                <Link to="/directory?category=Life Sciences %2F Biotech Employers" className="hover:text-teal-400 transition-colors text-teal-300 font-medium">
                  Genome Valley Bio Employers
                </Link>
              </li>
              <li>
                <Link to="/directory?category=Education" className="hover:text-teal-400 transition-colors">
                  Universities & Schools
                </Link>
              </li>
              <li>
                <Link to="/directory?category=Healthcare" className="hover:text-teal-400 transition-colors">
                  Clinics & Healthcare
                </Link>
              </li>
              <li>
                <Link to="/directory?category=Hospitality %26 Food" className="hover:text-teal-400 transition-colors">
                  Resorts & Dining
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Network Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Telangana Corridor Network
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {NETWORK_SITES.map((site) => (
                <li key={site.name}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-teal-400 transition-colors group"
                  >
                    <span className="font-semibold text-slate-300 group-hover:text-teal-400">{site.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-teal-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Growth Partner Banner & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>© 2026 shamirpet.city. All rights reserved.</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              Powered by <Building2 className="w-3.5 h-3.5 text-teal-400" /> 
              <a 
                href="https://dandora.online/sectors/real-estate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline font-semibold"
              >
                Dandora Growth Partner
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/about" className="hover:text-white">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white">Editorial Code</Link>
            <span>•</span>
            <Link to="/advertise" className="hover:text-white">Media Kit</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
