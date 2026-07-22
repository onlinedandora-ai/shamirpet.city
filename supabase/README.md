# Supabase Integration Directory

This folder contains all Supabase database schemas, seed datasets, and TypeScript client configurations for **shamirpet.city**.

## Folder Structure

```
supabase/
├── client.ts      # Supabase JS Client & GitHub Auth helpers
├── schema.sql     # Database tables (places, reviews), spatial indexes & RLS policies
├── seed.sql       # Seed dataset SQL script for Google Maps places in Shamirpet
└── README.md      # Integration documentation
```

## Quick Setup Instructions

1. **Create Supabase Project**
   - Go to [Supabase Console](https://supabase.com) and create a project.
   - Go to **Project Settings > API** and copy `URL` and `anon public key`.

2. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. **Run Database Migrations & Seeds**
   - Open **Supabase SQL Editor**.
   - Paste and execute `supabase/schema.sql` to create `places` and `reviews` tables and RLS rules.
   - Paste and execute `supabase/seed.sql` to populate initial places.

4. **Enable GitHub OAuth Authentication**
   - In Supabase, navigate to **Authentication > Providers > GitHub**.
   - Register an OAuth app on GitHub (Developer Settings > OAuth Apps).
   - Set Homepage URL: `http://localhost:5173` (or your domain).
   - Set Callback URL: `https://<your-project-ref>.supabase.co/auth/v1/callback`.
