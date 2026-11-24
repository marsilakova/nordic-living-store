
# Nordic Living Store – E-Commerce i React
**Live-demo:** [https://nordic-living-store-mu.vercel.app]



En modern, interaktiv och responsiv e-handelsapplikation för skandinavisk heminredning och design, byggd med **React** och **Vite**.

## Projektplanering & Syfte
* **Vad jag bygger (What are you building?):** En interaktiv e-handelswebbplats (*Nordic Living Store*) där användare kan utforska produkter, filtrera efter kategori, söka i realtid, hantera en varukorg och genomföra beställningar.
* **Målgrupp (Who is it for?):** Kunder som söker tidlös skandinavisk inredning, belysning och keramik med en snabb, enkel och mobilanpassad shoppingupplevelse.
* **Problem som löses (What problem does it solve?):** Förenklar produktsökning och köpprocessen online genom direkt kategorifiltrering, automatisk prisberäkning i SEK och sparad varukorg i webbläsaren så att valda varor inte försvinner vid omladdning.
* **Huvudfunktioner (What are the main features?):** Produktkatalog med kategorifilter och fritextsökning, utdragbar varukorg med antal- och borttagningsknappar, automatisk totalsumma, `localStorage`-lagring samt snabbkassa med orderbekräftelse.

## Tekniska funktioner & React-koncept
* **Komponentbaserad arkitektur & Props:** Uppdelad i återanvändbara komponenter (`Navbar`, `ProductCard`, `CartDrawer`) som kommunicerar via `props`.
* **Tillståndshantering (`useState` & `useEffect`):** Dynamisk hantering av varukorg, sökfält, vald kategori och sidopanel.
* **Beständig data (`localStorage`):** Sparar användarens varukorg lokalt i webbläsaren.
* **Villkorlig rendering (Conditional Rendering):** Visar olika vyer beroende på om varukorgen är tom, innehåller varor eller om en beställning har slutförts.
* **Responsiv design:** Anpassad för mobil, surfplatta och dator med CSS Grid, Flexbox och media queries.

## Använda tekniker
* **React (ES6+)**
* **Vite**
* **HTML5 & CSS3** (CSS Variables, Grid, Flexbox)
* **JavaScript** (LocalStorage API, Array methods: `filter`, `map`, `reduce`)

## Projektstruktur
```text
nordic-living-store/
├── public/
│   └── images/             # Produktbilder
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sidhuvud med varukorgsräknare
│   │   ├── ProductCard.jsx # Återanvändbart produktkort
│   │   └── CartDrawer.jsx  # Utdragbar varukorg & kassaformulär
│   ├── data/
│   │   └── products.js     # Produktkatalog
│   ├── App.jsx             # Huvudkomponent med filtrering & state
│   ├── App.css             # Styling och responsiv layout
│   └── main.jsx            # Applikationens startpunkt
├── index.html              # Huvud-HTML-mall
├── package.json            # Projektberoenden
└── README.md               # Projektdokumentation
```

## Kör projektet lokalt
1. Klona detta repository till din dator.
2. Öppna projektmappen i terminalen och installera beroenden:
   ```bash
   npm install
   ```
3. Starta utvecklingsservern:
   ```bash
   npm run dev
   ```
4. Öppna länken som visas i terminalen (vanligtvis `http://localhost:5173/`).
