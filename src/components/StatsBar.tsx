import React from 'react';
import { STATS } from '../data/mockData';
import { Building, MapPin, Users, Navigation } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-4 px-4 sm:px-6 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold">
        
        <div className="flex items-center gap-2 text-slate-900 dark:text-teal-400">
          <Navigation className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>Shamirpet Growth Corridor Live Index</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-600 dark:text-slate-300">
          
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-slate-900 dark:text-white font-extrabold text-base">{STATS.businessesListed}</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal">businesses listed</span>
          </div>

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-slate-900 dark:text-white font-extrabold text-base">{STATS.villagesCovered}</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal">villages & sectors</span>
          </div>

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>

          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-slate-900 dark:text-white font-extrabold text-base">{STATS.monthlyResidents}</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal">monthly readers on shamirpet.city</span>
          </div>

        </div>

      </div>
    </div>
  );
};
