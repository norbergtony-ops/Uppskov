# Uppskov Hus PWA

En installerbar, offline-kapabel webbapp för privat beräkning av kapitalvinst och möjligt uppskov vid bostadsförsäljning.

> **Viktigt:** Appen är ett hjälp- och beräkningsunderlag, inte en officiell blankett. Den skickar inga uppgifter till Skatteverket. Kontrollera alltid resultatet i Skatteverkets e-tjänst eller aktuell K5/K2.

## Publicera med GitHub Pages

1. Skapa ett nytt GitHub-repository, till exempel `uppskov-hus`.
2. Packa upp ZIP-filen och ladda upp **innehållet i mappen** till repositoryts rot. `index.html` ska alltså ligga i roten.
3. Gå till **Settings → Pages** i repositoryt.
4. Under **Build and deployment**, välj **Deploy from a branch**.
5. Välj branch **main**, mapp **/(root)** och klicka **Save**.
6. Vänta tills GitHub visar webbadressen, normalt `https://DITT-NAMN.github.io/uppskov-hus/`.

PWA-filerna använder relativa sökvägar och fungerar därför även när appen publiceras under ett GitHub Pages-repositorynamn.

## Installera på iPhone

1. Öppna GitHub Pages-adressen i **Safari**.
2. Tryck på **Dela**-knappen.
3. Välj **Lägg till på hemskärmen**.
4. Bekräfta med **Lägg till**.
5. Starta appen från ikonen på hemskärmen en gång medan du är online. Därefter kan appskalet användas offline.

På iPhone visas normalt inte en automatisk installationsknapp; installationen görs från Safaris delningsmeny.

## Data och integritet

- Ifyllda uppgifter sparas lokalt i webbläsarens `localStorage` på den aktuella enheten och webbplatsadressen.
- Appen skickar inte formulärdata till någon server.
- Rensning av Safaris webbplatsdata kan ta bort sparade uppgifter.
- GitHub Pages använder HTTPS, vilket krävs för service worker/offline-stöd.
- Använd appens JSON-export regelbundet som säkerhetskopia.

## Lokal testning

Service workers fungerar inte korrekt när `index.html` öppnas direkt som `file://`. Starta i stället en lokal webbserver:

```bash
python3 -m http.server 8080
```

Öppna sedan `http://localhost:8080/`.

## Filer

- `index.html` – appen
- `manifest.webmanifest` – PWA-metadata
- `service-worker.js` – offline-cache
- `pwa.js` – registrerar service worker
- `icons/` – ikoner för iPhone och övriga enheter
- `.nojekyll` – gör att GitHub Pages publicerar filerna utan Jekyll-bearbetning
