-- 
-- ANAQIO Waitlist Update Migration
-- Description: Adds B2B qualification fields to the waitlist table.
--

-- 1. Add new columns to Waitlist Table
alter table public.waitlist 
add column if not exists role text check (role in ('Brand', 'Stylist', 'Seller', 'Other')),
add column if not exists company text,
add column if not exists revenue_range text;

-- 2. Update Documentation
comment on column public.waitlist.role is 'The professional role of the person joining the waitlist.';
comment on column public.waitlist.company is 'Optional company name for B2B qualification.';
comment on column public.waitlist.revenue_range is 'Optional monthly revenue range for B2B qualification.';
