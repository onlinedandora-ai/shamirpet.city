import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Newspaper, Calendar } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-neutral-200 px-2 py-2 shadow-sm transition-colors">
      <div className="grid grid-cols-4 items-center max-w-md mx-auto">
        
        {/* 1. Home */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            isActive('/')
              ? 'text-neutral-900 font-extrabold scale-105'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Home</span>
        </Link>

        {/* 2. Directory */}
        <Link
          to="/directory"
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            isActive('/directory')
              ? 'text-neutral-900 font-extrabold scale-105'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <MapPin className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Directory</span>
        </Link>

        {/* 3. News */}
        <Link
          to="/news"
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            isActive('/news')
              ? 'text-neutral-900 font-extrabold scale-105'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <Newspaper className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">News</span>
        </Link>

        {/* 4. Events */}
        <Link
          to="/events"
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
            isActive('/events')
              ? 'text-neutral-900 font-extrabold scale-105'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Events</span>
        </Link>

      </div>
    </nav>
  );
};
