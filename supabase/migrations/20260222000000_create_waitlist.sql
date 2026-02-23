-- 
-- ANAQIO Waitlist Migration
-- Description: Creates the waitlist table for tracking early access signups.
-- Security: Enables RLS and allows anonymous inserts for the public waitlist form.
--

-- 1. Create Waitlist Table
create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  full_name text,
  status text not null default 'pending' check (status in ('pending', 'invited', 'active', 'unsubscribed')),
  source text default 'home', -- tracks where the signup came from (e.g. 'home', 'early-access', 'blog')
  metadata jsonb default '{}'::jsonb, -- flexible storage for additional info (browser, referral, etc)
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 2. Enable Row Level Security
alter table public.waitlist enable row level security;

-- 3. Security Policies
-- Allow public (anonymous) users to join the waitlist
create policy "Waitlist public insert" 
on public.waitlist for insert 
to anon 
with check (true);

-- Allow authenticated admins to manage the waitlist
create policy "Waitlist admin full access" 
on public.waitlist for all 
to authenticated 
using (true);

-- 4. Utility Functions
-- Auto-update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_waitlist_updated_at
before update on public.waitlist
for each row
execute function public.handle_updated_at();

-- 5. Performance Indexes
create index if not exists waitlist_email_idx on public.waitlist (email);
create index if not exists waitlist_status_idx on public.waitlist (status);
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

-- 6. Comment for Documentation
comment on table public.waitlist is 'Stores email signups for the Anaqio studio early access waitlist.';
comment on column public.waitlist.source is 'Identifies the entry point of the signup (home, early-access, etc).';
