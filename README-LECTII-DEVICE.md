# Prep — versiune actualizată

## Modificările incluse
- Python Next Generation: eticheta „Beta” eliminată de pe pagina publică, autentificare, dashboard și ghid. Întrebările și laburile rămân funcționale.
- Înregistrare în ordinea Nume → Prenume → Email → Număr de telefon → Parolă → Repetă parola.
- Conturile existente trebuie să confirme numele și prenumele la următoarea intrare, inclusiv cele cu nume deja salvat în profilul vechi. După salvarea reușită nu se solicită din nou la fiecare autentificare. Telefonul existent este precompletat.
- Numele și prenumele sunt salvate în contul Supabase (user_metadata), afișate în salut și meniul contului și sincronizate cu profilul și certificatele interne.
- În Admin: numele complet apare împreună cu emailul și telefonul, în listă și în detaliul utilizatorului; căutare după nume, prenume, email sau telefon.
- Curs Device: design editorial simplificat, navigare laterală, text lizibil, cuprins, filtre, teme deschisă/închisă, continuarea lecturii, semn de lectură și reglarea dimensiunii textului.
- Materialele integrale ale celor 21 de lecții sunt incluse, alături de sinteze, ilustrații, 96 de fișe și 84 de întrebări de verificare. Cele 13 playere Google Drive sunt integrate în lecțiile relevante.
- Contactul Telegram este păstrat în subsol, pe ecranele aplicației. Grila examenelor rămâne responsive.

## Publicare
1. Fă o copie de siguranță a proiectului și a bazei de date existente.
2. În proiectul Supabase existent, rulează `prep-profil-nume-supabase.sql` din rădăcina arhivei, în SQL Editor. Scriptul presupune că actualizările Admin / MDL / Python Next Generation sunt deja instalate. Nu recreează baza de date și nu șterge conturi, acces, progres sau plăți.
3. Publică fișierele din folderul `prep` prin fluxul tău Vercel obișnuit. Nu încărca fișierul SQL în locul paginii web.
4. Verifică mai întâi într-un Preview Deployment: cont existent → confirmarea datelor → salut cu nume; cont nou → ordinea câmpurilor; Admin → nume și căutare; Python Next Generation → configurarea testului/laburi; cursul Device → materiale/video.
5. Verifică și permisiunile Drive pentru publicul autorizat. Un iframe integrat nu modifică partajarea fișierului original.

**Nu este publicat pe site-ul live. SQL-ul nu a fost executat pe baza ta de date.**

## Date și limitări
- Numele și telefonul sunt declarate de utilizator; nu sunt verificate prin SMS, Telegram sau documente. Nu sunt folosite pentru a acorda rolul Admin.
- Markerul `name_details_version: 1` din user_metadata indică salvarea noului formular. Conturile noi primesc markerul la înregistrare; cele existente după confirmarea datelor. Actualizarea păstrează celelalte câmpuri metadata.
- Numele este afișat ca Nume Prenume. `last_name` = Nume, `first_name` = Prenume. Câmpurile din profilul vechi `first`/`last` sunt păstrate și sincronizate în aceeași convenție.
- Progresul lecturii, fișelor și mini-testelor Device se păstrează local, separat pentru fiecare cont și browser. Nu este progresul videocursului sau al testelor de examen și nu se sincronizează între dispozitive.
- Materialele JavaScript și imaginile sunt fișiere statice publice; verificarea accesului în interfață nu constituie un paywall securizat pe server.
- Textul integral din surse este păstrat; clarificările editoriale sunt etichetate separat. Sinteza este o alternativă la materialul complet, nu un înlocuitor.

## Verificări locale
- 21 de lecții, 2.936 de blocuri de text principale comparate la randare cu sursele generate, plus verificarea variantelor și a obiectivelor incluse.
- 13 playere integrate verificate structural; în testele locale răspunsul Drive a fost simulat. Redarea efectivă și permisiunile nu au fost validate online.
- 84 de răspunsuri de mini-test, fișe, semn de lectură, mărire text, teme, separarea conturilor și revenirea la videocurs.
- Formulare și răspunsuri Supabase simulate: înregistrare, confirmarea obligatorie o singură dată, eroare la salvare, salut cu numele complet, sincronizarea profilului, afișare/căutare Admin și configurarea Python Next Generation.
- Verificare vizuală pe desktop și telefon. Aceste teste nu înlocuiesc verificarea integrării pe Supabase real și un Preview Deployment.
