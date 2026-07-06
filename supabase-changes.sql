-- ============================================================
-- NK Hospital — DB changes
-- Run this in Supabase → SQL Editor → New query → Run
-- Safe to run once. (Items 2, 3, 4 data + Item 1 new table)
-- ============================================================

-- ── Item 2: remove Dr. Sohail and Dr. Numan Ali from booking ──
delete from public.doctors
where name in ('Dr. Sohail', 'Dr. Numan Ali');

-- ── Item 3: fix Zeeshan Ali's specialty ──
update public.doctors
set specialty = 'Medical Gastroenterology'
where name = 'Dr. Zeeshan Ali';

-- ── Item 4: swap local .JPG paths for fast Cloudinary URLs ──
update public.doctors set photo_url = 'https://res.cloudinary.com/dmhonzqrm/image/upload/dr_arif_ahmedjpg_o0mbyn.jpg' where name = 'Dr. Arif Raza Ahmed';
update public.doctors set photo_url = 'https://res.cloudinary.com/dmhonzqrm/image/upload/Dr_zeeshan_ali_vhcdft.jpg'   where name = 'Dr. Zeeshan Ali';
update public.doctors set photo_url = 'https://res.cloudinary.com/dmhonzqrm/image/upload/Dr_veeresh_godi_awqtsd.jpg'  where name = 'Dr. Veeresh Godi';
update public.doctors set photo_url = 'https://res.cloudinary.com/dmhonzqrm/image/upload/Dr_Mahaligam_jppgtd.jpg'     where name = 'Dr. Mahalingam';

-- ============================================================
-- Item 1: Health Package bookings
-- ============================================================
create table if not exists public.package_bookings (
  id             uuid primary key default gen_random_uuid(),
  patient_id     text not null,            -- e.g. NK-4F9K2A (shown to patient)
  patient_name   text not null,
  phone          text not null,
  package_name   text not null,
  tier_label     text,
  price          text,
  preferred_date date,
  message        text,
  status         text not null default 'pending',
  created_at     timestamptz not null default now()
);

-- Row Level Security (mirrors the appointments table pattern)
alter table public.package_bookings enable row level security;

-- Anyone on the website can create a booking
drop policy if exists "public can insert package bookings" on public.package_bookings;
create policy "public can insert package bookings"
  on public.package_bookings for insert
  to anon, authenticated
  with check (true);

-- Only logged-in admin/doctor can read them
drop policy if exists "authenticated can read package bookings" on public.package_bookings;
create policy "authenticated can read package bookings"
  on public.package_bookings for select
  to authenticated
  using (true);

-- Only logged-in admin/doctor can change status
drop policy if exists "authenticated can update package bookings" on public.package_bookings;
create policy "authenticated can update package bookings"
  on public.package_bookings for update
  to authenticated
  using (true) with check (true);
