-- Pregătit pentru instalare MANUALĂ după testare și copie de siguranță.
-- Creează o funcție nouă; nu șterge utilizatori, date, plăți sau funcții existente.
-- O vânzare acordă acces nelimitat prin schema actuală. NU creează abonamente.
begin;
create or replace function public.prep_admin_new_sale_currency(
 p_id uuid, p_login text, p_exam_keys text[], p_amount numeric,
 p_currency text, p_paid_on date, p_note text default ''
) returns jsonb language plpgsql security definer set search_path = '' as $$
declare n integer; u uuid; existed boolean; k text; keys text[]; single_key text; curr text := upper(trim(coalesce(p_currency,''))); begin
 perform public._prep_require_admin();
 if p_id is null or coalesce(length(trim(p_login)),0)<1 or length(p_login)>254
 or curr not in ('MDL','EUR')
 or coalesce(cardinality(p_exam_keys),0)<1 or cardinality(p_exam_keys)>6
 or exists(select 1 from unnest(p_exam_keys) x where x is null or not exists(select 1 from public.prep_catalog c where c.exam_key=x))
 then raise exception 'Verifică utilizatorul, moneda și examenele selectate.'; end if;
 select array_agg(x order by x) into keys from (select distinct unnest(p_exam_keys) x) a;
 single_key:=case when cardinality(keys)=1 then keys[1] else null end;
 select count(*),min(id::text)::uuid into n,u from auth.users where lower(email)=lower(trim(p_login))
 or (position('@' in p_login)=0 and lower(split_part(email,'@',1))=lower(trim(p_login)));
 if n<>1 then raise exception 'Contul nu există sau numele este ambiguu. Folosește emailul complet.'; end if;
 perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(p_id::text,0));
 existed:=exists(select 1 from public.prep_payments where id=p_id);
 if exists(select 1 from public.prep_payments where id=p_id and voided_at is not null) then raise exception 'Această vânzare a fost anulată. Creează o înregistrare nouă.'; end if;
 if existed and not exists(select 1 from public.prep_payments where id=p_id and exam_keys=keys) then raise exception 'ID-ul vânzării este deja folosit pentru alte examene.'; end if;
 if curr='MDL' then
  perform public.prep_admin_add_payment_mdl(p_id,u,single_key,p_amount,p_paid_on,p_note);
 else
  perform public.prep_admin_add_payment(p_id,u,single_key,p_amount,p_paid_on,p_note);
 end if;
 if not existed then
  update public.prep_payments set exam_keys=keys where id=p_id;
  foreach k in array keys loop perform public.prep_admin_set_exam(u,k,true); end loop;
  insert into public.prep_admin_audit(actor_id,target_id,action,details)
  values(auth.uid(),u,'new_sale',jsonb_build_object('payment_id',p_id,'exams',keys,'currency',curr,'amount',p_amount,'grant_access',true));
 end if;
 return jsonb_build_object('user_id',u,'email',(select email from auth.users where id=u),'payment_id',p_id,'exam_keys',keys,'already_recorded',existed,
 'access_granted',not exists(select 1 from unnest(keys) x where not exists(select 1 from public.user_exams e where e.user_id=u and e.exam_key=x)));
end $$;
revoke all on function public.prep_admin_new_sale_currency(uuid,text,text[],numeric,text,date,text) from public, anon;
grant execute on function public.prep_admin_new_sale_currency(uuid,text,text[],numeric,text,date,text) to authenticated;
commit;
