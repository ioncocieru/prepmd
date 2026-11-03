-- Instalare MANUALĂ după backup și testare. Nu conține datele utilizatorilor.
-- Ziua este calculată la ora Europe/Chisinau, nu după ceasul telefonului.
begin;
create table if not exists public.prep_daily_streaks (
  user_id uuid primary key references auth.users(id) on delete cascade,
  last_day date not null,
  streak integer not null check (streak >= 1)
);
alter table public.prep_daily_streaks enable row level security;
revoke all on table public.prep_daily_streaks from public, anon, authenticated;

-- Numai utilizatorul autentificat, numai dacă are cel puțin un examen activ.
-- Blocarea pe utilizator evită incrementarea dublă la cereri simultane.
create or replace function public.prep_record_daily_streak()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  u uuid := auth.uid();
  today date := (pg_catalog.now() at time zone 'Europe/Chisinau')::date;
  previous_day date;
  current_streak integer;
  changed boolean := false;
begin
  if u is null then raise exception 'Autentificare necesară'; end if;
  if not exists(select 1 from public.user_exams e where e.user_id = u) then return null; end if;
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended('prep-streak:' || u::text, 0));
  select s.last_day, s.streak into previous_day, current_streak from public.prep_daily_streaks s where s.user_id=u for update;
  if not found then
    current_streak := 1; changed := true;
    insert into public.prep_daily_streaks(user_id,last_day,streak) values(u,today,current_streak);
  elsif previous_day < today then
    current_streak := case when previous_day = today - 1 then current_streak + 1 else 1 end;
    changed := true;
    update public.prep_daily_streaks set last_day=today,streak=current_streak where user_id=u;
  end if;
  return pg_catalog.jsonb_build_object('days',current_streak,'new_day',changed,'day',today);
end $$;
revoke all on function public.prep_record_daily_streak() from public, anon;
grant execute on function public.prep_record_daily_streak() to authenticated;

-- Datele altor utilizatori sunt disponibile numai administratorilor autorizați.
create or replace function public.prep_admin_daily_streaks(p_user_ids uuid[])
returns jsonb language plpgsql security definer set search_path = '' as $$
declare result jsonb; today date := (pg_catalog.now() at time zone 'Europe/Chisinau')::date;
begin
  perform public._prep_require_admin();
  if p_user_ids is null or pg_catalog.cardinality(p_user_ids)>30 then raise exception 'Listă invalidă'; end if;
  select coalesce(pg_catalog.jsonb_object_agg(t.user_id::text,
    case when s.last_day >= today - 1 then s.streak else 0 end),'{}'::jsonb)
  into result
  from (select distinct x.user_id from pg_catalog.unnest(p_user_ids) as x(user_id)
        where exists(select 1 from public.user_exams e where e.user_id=x.user_id)) t
  left join public.prep_daily_streaks s on s.user_id=t.user_id;
  return result;
end $$;
revoke all on function public.prep_admin_daily_streaks(uuid[]) from public, anon;
grant execute on function public.prep_admin_daily_streaks(uuid[]) to authenticated;
commit;
