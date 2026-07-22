import React from 'react';
import { EVENTS_CALENDAR } from '../data/mockData';
import { Calendar, MapPin } from 'lucide-react';

export const EventsPage: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-200 dark:border-slate-800 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
            <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Seasonal & Cultural Draws</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Events & Festivals Calendar
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Maha Shivaratri celebrations at local heritage shrines, Shamirpet Lake nature walks, and Genome Valley life-sciences industry expos.
          </p>
        </div>

        {/* Events Cards */}
        <div className="space-y-6">
          {EVENTS_CALENDAR.map(evt => (
            <div
              key={evt.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-amber-400 transition-all duration-200"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                    {evt.category} Event
                  </span>
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {evt.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {evt.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <MapPin className="w-4 h-4 text-teal-500" />
                  <span>{evt.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {evt.description}
                </p>

                <div className="text-[11px] text-slate-400 dark:text-slate-400">
                  Organized by: <span className="font-semibold text-slate-700 dark:text-slate-300">{evt.organizer}</span>
                </div>
              </div>

              <div className="md:border-l md:border-slate-200 dark:md:border-slate-800 md:pl-6 flex flex-col items-center justify-center text-center">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Entry Status
                </div>
                <span className="px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold border border-emerald-200 dark:border-emerald-800 shadow-sm">
                  Public Open Event
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
