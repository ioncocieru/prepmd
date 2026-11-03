-- INSTALARE MANUALĂ după copie de siguranță. Adaugă doar identificatorii noi, fără să șteargă progresul.
-- Repetarea este sigură; nu modifică utilizatorii sau plățile.
begin;
update public.prep_catalog c
set question_ids = coalesce(c.question_ids, '[]'::jsonb) || coalesce((
 select jsonb_agg(v.value order by v.ordinality)
 from jsonb_array_elements('["its-1.1-05","its-2.1-01","its-2.1-09","its-2.2-02","its-2.2-04","its-1.2-04","its-1.2-01","its-1.3-02","its-1.4-01","its-1.1-02","its-2.1-05","its-1.2-09","its-1.4-06","its-1.3-03","its-1.4-02","its-1.4-03","its-1.2-03","its-1.4-05","its-1.2-07","its-1.2-10","its-2.1-02","its-1.1-04","its-1.3-01","its-2.1-04","its-1.2-06","its-1.4-09","its-2.1-08","its-2.1-03","its-1.2-08","its-2.1-06","its-1.3-05","its-2.2-09","its-1.4-07","its-2.2-06","its-2.2-05","its-grila-01","its-grila-02","its-grila-03","its-grila-04","its-grila-05","its-grila-06","its-grila-07","its-grila-08","its-grila-09","its-grila-10","its-grila-11","its-grila-12","its-grila-13","its-grila-14","its-grila-15","its-grila-16","its-grila-17","its-grila-18","its-grila-19","its-grila-20","its-grila-21","its-grila-22","its-grila-23","its-grila-24","its-grila-25","its-grila-26","its-grila-27","its-grila-28","its-grila-29","its-grila-30","its-grila-31","its-grila-32","its-grila-33","its-grila-34","its-grila-35","its-grila-36","its-grila-37","its-grila-38","its-grila-39","its-grila-40","its-grila-41","its-grila-42","its-l01","its-l02","its-l03","its-l04","its-l05","its-l06","its-l07","its-l08","its-l09","its-l10"]'::jsonb) with ordinality as v(value, ordinality)
 where not coalesce(c.question_ids, '[]'::jsonb) @> jsonb_build_array(v.value)
), '[]'::jsonb)
where c.exam_key = 'pythonNextGen';
commit;
