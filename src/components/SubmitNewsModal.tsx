import React, { useState } from 'react';
import { X, Newspaper, CheckCircle2 } from 'lucide-react';

interface SubmitNewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitNewsModal: React.FC<SubmitNewsModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [newsTitle, setNewsTitle] = useState('');
  const [category, setCategory] = useState<'Civic' | 'Traffic' | 'Environment' | 'Economy'>('Civic');
  const [summary, setSummary] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
            <Newspaper className="w-5 h-5 text-teal-500" />
            <span>Post Local News or Civic Update</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              News Submitted to Desk!
            </h3>
            <p className="text-xs text-slate-500">
              Your community news submission will be verified and added to the local Shamirpet feed.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Headline / Title *
              </label>
              <input
                type="text"
                required
                value={newsTitle}
                onChange={e => setNewsTitle(e.target.value)}
                placeholder="e.g. New bus stop shelter installed near Majeedpur X Roads"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option>Civic</option>
                  <option>Traffic</option>
                  <option>Environment</option>
                  <option>Economy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Your Name / Org *
                </label>
                <input
                  type="text"
                  required
                  value={submittedBy}
                  onChange={e => setSubmittedBy(e.target.value)}
                  placeholder="e.g. Ramesh K. (Resident)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                News Details / Summary *
              </label>
              <textarea
                rows={3}
                required
                value={summary}
                onChange={e => setSummary(e.target.value)}
                placeholder="Provide factual details, locations, and context for the community..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div className="pt-2 flex justify-end border-t border-slate-200 dark:border-slate-800">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Post Community News
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
