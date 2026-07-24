-- ============================================================
-- NK Hospital — DB changes (Find-a-Doctor requests + Home Pickup)
-- Run this in Supabase → SQL Editor → New query → Run
-- Safe to run once.
-- ============================================================

-- ── Find-a-Doctor: inline appointment requests (no OTP) ──────
create table if not exists public.doctor_appointment_requests (
  id             uuid primary key default gen_random_uuid(),
  patient_name   text not null,
  phone          text not null,
  doctor_name    text not null,
  specialty      text,
  preferred_date date,
  time_slot      text,
  message        text,
  status         text not null default 'pending',
  created_at     timestamptz not null default now()
);

alter table public.doctor_appointment_requests enable row level security;

drop policy if exists "public can insert doctor requests" on public.doctor_appointment_requests;
create policy "public can insert doctor requests"
  on public.doctor_appointment_requests for insert
  to anon, authenticated
  with check (true);

drop policy if exists "authenticated can read doctor requests" on public.doctor_appointment_requests;
create policy "authenticated can read doctor requests"
  on public.doctor_appointment_requests for select
  to authenticated
  using (true);

drop policy if exists "authenticated can update doctor requests" on public.doctor_appointment_requests;
create policy "authenticated can update doctor requests"
  on public.doctor_appointment_requests for update
  to authenticated
  using (true) with check (true);

-- ── Health Packages: home sample pickup requests ────────────
create table if not exists public.home_pickup_requests (
  id             uuid primary key default gen_random_uuid(),
  patient_name   text not null,
  phone          text not null,
  address        text not null,
  preferred_date date,
  time_slot      text,
  status         text not null default 'pending',
  created_at     timestamptz not null default now()
);

alter table public.home_pickup_requests enable row level security;

drop policy if exists "public can insert home pickup" on public.home_pickup_requests;
create policy "public can insert home pickup"
  on public.home_pickup_requests for insert
  to anon, authenticated
  with check (true);

drop policy if exists "authenticated can read home pickup" on public.home_pickup_requests;
create policy "authenticated can read home pickup"
  on public.home_pickup_requests for select
  to authenticated
  using (true);

drop policy if exists "authenticated can update home pickup" on public.home_pickup_requests;
create policy "authenticated can update home pickup"
  on public.home_pickup_requests for update
  to authenticated
  using (true) with check (true);
