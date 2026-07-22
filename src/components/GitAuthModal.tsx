import React from 'react';
import { X, LogOut, CheckCircle2, ShieldCheck, Database, Key } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// GitHub SVG Component
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface GitAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitAuthModal: React.FC<GitAuthModalProps> = ({ isOpen, onClose }) => {
  const { profile, isConfigured, loginWithGithub, loginDemoGitUser, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-700 text-white flex items-center justify-center shadow-lg">
            <GithubIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Git Login & Supabase Auth
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sign in with your GitHub account to manage listings
            </p>
          </div>
        </div>

        {/* Logged In State */}
        {profile ? (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-14 h-14 rounded-full border-2 border-teal-500 object-cover shadow-sm"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xl">
                  {profile.name.charAt(0)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-slate-900 dark:text-white truncate text-base">
                    {profile.name}
                  </h4>
                  <ShieldCheck className="w-4 h-4 text-teal-500 flex-shrink-0" />
                </div>
                {profile.username && (
                  <p className="text-xs font-mono text-teal-600 dark:text-teal-400 truncate">
                    @{profile.username}
                  </p>
                )}
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  {profile.email || 'GitHub Authenticated User'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-800 dark:text-teal-300">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>GitHub OAuth Token Active</span>
              </div>
              <p className="text-xs text-teal-700 dark:text-teal-400">
                You can now submit verified places, review businesses, and seed Google Maps search data to Supabase.
              </p>
            </div>

            <button
              onClick={() => {
                logout();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 font-semibold text-sm hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Git Login</span>
            </button>
          </div>
        ) : (
          /* Not Logged In State */
          <div className="space-y-5">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
                <Database className="w-4 h-4 text-teal-500" />
                <span>Supabase Git Provider Integration</span>
              </div>
              <p>
                Connect your GitHub developer account to authenticate against Supabase database rules and seed Google Maps place records.
              </p>
            </div>

            {/* Primary GitHub OAuth Login Button */}
            <button
              onClick={async () => {
                await loginWithGithub();
                onClose();
              }}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <GithubIcon className="w-5 h-5" />
              <span>Sign in with GitHub</span>
            </button>

            {/* Demo Git User Mode */}
            {!isConfigured && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-center">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                  (Supabase env vars not set in local environment? Test with Instant Demo Git User)
                </p>
                <button
                  onClick={() => {
                    loginDemoGitUser();
                    onClose();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-semibold text-xs border border-teal-200 dark:border-teal-800 transition-colors cursor-pointer"
                >
                  <Key className="w-3.5 h-3.5 text-teal-500" />
                  <span>Use Instant Git Contributor Session</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
