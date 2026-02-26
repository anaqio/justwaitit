-- 
-- ANAQIO Waitlist Update
-- Description: Adds a preferences JSONB column for style/aesthetic data.
--

-- 1. Add preferences column
alter table public.waitlist 
add column if not exists preferences jsonb default '{}'::jsonb;

-- 2. Update Documentation
comment on column public.waitlist.preferences is 'Stores user style preferences (e.g., aesthetic, categories) as JSON.';
