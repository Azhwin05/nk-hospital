-- ============================================================
-- NK Hospital — add Dr. Shrutika & Dr. Mohammed Taif Bendigeri
-- to the Book Appointment page (/book)
--
-- Run this in Supabase → SQL Editor → New query → Run.
-- Safe to run more than once (skips doctors already present).
-- ============================================================

insert into public.doctors (name, specialty, location, experience, photo_url, available_days, available_slots)
select v.name, v.specialty, v.location, v.experience, v.photo_url, v.available_days, v.available_slots
from (values
  (
    'Dr. Shrutika',
    'Gynecology',
    'NK Hospital, Kalaburagi',
    '',
    'https://res.cloudinary.com/dmhonzqrm/image/upload/v1784901591/2_ywveqh.jpg',
    array['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    array['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM']
  ),
  (
    'Dr. Mohammed Taif Bendigeri',
    'Urology',
    'NK Hospital, Kalaburagi',
    '',
    'https://res.cloudinary.com/dmhonzqrm/image/upload/v1784901589/3_gzbqkz.jpg',
    array['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    array['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM']
  )
) as v(name, specialty, location, experience, photo_url, available_days, available_slots)
where not exists (
  select 1 from public.doctors d where d.name = v.name
);

-- Years of experience weren't supplied for either doctor. The column is NOT NULL,
-- so it's set to an empty string — the booking popup hides the line when it's
-- empty. To fill it in later:
--   update public.doctors set experience = '8+' where name = 'Dr. Shrutika';
--   update public.doctors set experience = '10+' where name = 'Dr. Mohammed Taif Bendigeri';

select name, specialty, experience, photo_url from public.doctors order by name;
