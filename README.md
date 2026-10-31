# Martin — IT-säkerhetsportfolio

React och Vite med TanStack Router/Start. TanStack Start används för att skapa HTML **vid byggningen**, inte för att köra en server på GitHub Pages. Alla fyra sidor publiceras som statiska filer, med samma innehåll, design och gemensamma sidomeny. Ingen backend, serverfunktion eller serverrendering vid besök krävs.

## Lokal utveckling och produktionsbygge

Använd Node.js 22 och Bun 1.4.4 (samma som GitHub Actions):

```sh
bun install --frozen-lockfile
bun run dev
```

För att testa och skapa det färdiga paketet:

```sh
bun run test
bun run build:pages
```

`build:pages` bygger produktionsversionen, hämtar porträttbilden från den befintliga offentliga bildadressen och inkluderar den i paketet samt kontrollerar att sidor, bild, JavaScript, CSS, CNAME och 404-sida finns. Byggningen behöver internet för beroenden och bilden; den publicerade sidan serverar därefter bilden själv och är inte beroende av Lovables bildproxy. Inga API-nycklar behövs. Om den ursprungliga bilden raderas eller blir otillgänglig stoppas publiceringen i stället för att en trasig bild skickas ut.

Endast **`dist/client/`** ska publiceras:

```text
dist/client/
  index.html
  om-mig/index.html
  projekt/index.html
  kontakt/index.html
  404.html
  CNAME
  .nojekyll
  assets/...
  __l5e/assets-v1/.../profilbild-kvadrat.png
```

Vite använder `base: "/"` eftersom domänen är **martinlabs.se** (inte marinlabs.se). GitHub Pages öppnar `/om-mig`, `/projekt` och `/kontakt` som katalogernas HTML-sidor, vanligtvis med en omdirigering till avslutande `/`. Routern använder därför samma avslutande snedstreck; direktlänkar och omladdningar behöver ingen serverfallback eller hash-routing. Okända adresser ger en riktig 404.

## GitHub Pages — manuella inställningar

1. Öppna repots **Settings → Pages → Build and deployment** och välj **GitHub Actions** som Source. Kontrollera att Pages är tillgängligt för repots synlighet och kontots plan.
2. Under **Settings → Actions → General**, tillåt Actions och de actions som används i `.github/workflows/pages.yml`. Miljön `github-pages` måste tillåta deployment från `main`; eventuella godkännanderegler behöver uppfyllas.
3. Verifiera helst domänen i GitHub-kontots **Settings → Pages → Add a domain**. Lägg den personliga TXT-post GitHub visar hos DNS-leverantören och behåll den efter verifiering.
4. Ange **martinlabs.se** i repots **Settings → Pages → Custom domain**, innan du pekar DNS mot GitHub. `public/CNAME` följer med paketet enligt projektets krav, men med en Actions-publicering ersätter filen **inte** denna manuella inställning.
5. Push till `main` startar tester, låst installation, produktionsbyggning, kontroll av statiska filer och publicering. Det kan också startas via **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
6. När DNS-kontrollen och certifikatet är klara, aktivera **Enforce HTTPS**.

## DNS — ändra själv hos din domänleverantör

Inga DNS-poster ändras av projektet eller workflowet. Spara dina nuvarande poster innan en ändring. Byt endast poster för webbsidan; behåll e-postens MX, SPF, DKIM och DMARC samt domänverifieringar.

Lägg följande fyra A-poster på rotdomänen (`@`):

| Typ | Namn | Värde |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Ta bort gamla eller konkurrerande webb-A/AAAA-poster för samma namn. IPv6 är frivilligt; om det används ska samtliga fyra AAAA-poster vara:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

För `www.martinlabs.se`, lägg `CNAME www → nfjmartin.github.io` **om repot ägs av nfjmartin**; annars används det faktiska kontot/organisationen följt av `.github.io`. Ange inte repots namn i DNS. Undvik wildcard-poster. DNS och HTTPS kan behöva tid innan de fungerar överallt.

## Kontroll efter publicering

- Öppna `https://martinlabs.se/`, `/om-mig`, `/projekt` och `/kontakt` direkt, även i en ny flik, och ladda om varje sida.
- Kontrollera att porträttet visas och att sidomenyn markerar rätt sida och behåller sitt hopfällda läge när du navigerar.
- Testa e-postlänken, kopieringsknappen samt GitHub och LinkedIn.
- En lyckad körning i Actions bekräftar **produktionsbygge och filverifiering**. Ett lokalt utvecklingstest bekräftar inte DNS, HTTPS eller att GitHub Pages är aktiverat.

Officiella anvisningar:
- [GitHub Pages med egna workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Egen domän och DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

Projektet kan fortsatt redigeras i [Lovable](https://lovable.dev/projects/457d7c26-67f3-4fce-bcac-9ebe12e49671).
