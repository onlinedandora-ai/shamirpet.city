import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured, signInWithGithub, signOut as supabaseSignOut } from '../lib/supabase';

export interface UserProfile {
  id: string;
  email?: string;
  name: string;
  avatarUrl?: string;
  provider: 'github' | 'demo';
  username?: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  isLoading: boolean;
  isConfigured: boolean;
  loginWithGithub: () => Promise<void>;
  loginDemoGitUser: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    const savedProfile = localStorage.getItem('shamirpet_auth_user');
    return savedProfile ? JSON.parse(savedProfile) : null;
  });
  const [isLoading, setIsLoading] = useState(true);
  const configured = isSupabaseConfigured();

  useEffect(() => {
    if (!configured) {
      setIsLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        const gitUser: UserProfile = {
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata?.full_name || session.user.user_metadata?.user_name || 'GitHub User',
          avatarUrl: session.user.user_metadata?.avatar_url,
          username: session.user.user_metadata?.user_name,
          provider: 'github',
        };
        setProfile(gitUser);
        localStorage.setItem('shamirpet_auth_user', JSON.stringify(gitUser));
      }
      setIsLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        const gitUser: UserProfile = {
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata?.full_name || session.user.user_metadata?.user_name || 'GitHub User',
          avatarUrl: session.user.user_metadata?.avatar_url,
          username: session.user.user_metadata?.user_name,
          provider: 'github',
        };
        setProfile(gitUser);
        localStorage.setItem('shamirpet_auth_user', JSON.stringify(gitUser));
      } else if (!localStorage.getItem('shamirpet_auth_user')) {
        setProfile(null);
      }
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [configured]);

  const loginWithGithub = async () => {
    if (configured) {
      await signInWithGithub();
    } else {
      // Demo git login fallback when Supabase keys aren't set in local env
      loginDemoGitUser();
    }
  };

  const loginDemoGitUser = () => {
    const demoGitProfile: UserProfile = {
      id: 'git_user_' + Date.now(),
      email: 'developer@github.com',
      name: 'Git Contributor',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      username: 'git-developer',
      provider: 'github',
    };
    setProfile(demoGitProfile);
    localStorage.setItem('shamirpet_auth_user', JSON.stringify(demoGitProfile));
  };

  const logout = async () => {
    if (configured) {
      await supabaseSignOut();
    }
    setUser(null);
    setSession(null);
    setProfile(null);
    localStorage.removeItem('shamirpet_auth_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        session,
        isLoading,
        isConfigured: configured,
        loginWithGithub,
        loginDemoGitUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
