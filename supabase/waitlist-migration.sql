-- Waitlist table for Anaqio early access signups
-- Run this in your Supabase SQL Editor
create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  name text,
  created_at timestamptz default now() not null
);
-- Enable Row Level Security
alter table public.waitlist enable row level security;
-- Allow anonymous inserts (for the public waitlist form)
create policy "Allow anonymous inserts" on public.waitlist for
insert to anon with check (true);
-- Allow authenticated users to read (for admin purposes)
create policy "Allow authenticated reads" on public.waitlist for
select to authenticated using (true);
-- Create index on email for fast lookups
create index if not exists waitlist_email_idx on public.waitlist (email);
-- Create index on created_at for sorting
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);