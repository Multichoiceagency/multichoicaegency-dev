# Multichoice Agency

Multichoice Agency is een modern en professioneel project gericht op het ontwikkelen van hoogwaardige websites en applicaties. Dit project is ontworpen om klantprojecten te beheren, resultaten te presenteren en een portfolio weer te geven.

## Inhoud

- [Overzicht](#overzicht)
- [Functionaliteiten](#functionaliteiten)
- [Technologieën](#technologieën)
- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Projectstructuur](#projectstructuur)
- [Bijdragen](#bijdragen)
- [Licentie](#licentie)

## Overzicht

Multichoice Agency biedt een gebruiksvriendelijke interface waarmee gebruikers case studies kunnen bekijken, projectresultaten kunnen presenteren en gerelateerde projecten kunnen ontdekken via een interactieve slider.

## Functionaliteiten

- **Case Studies**: Presenteren van klantprojecten met details zoals naam, industrie en projectdatum.
- **Projectgalerij**: Bekijk een galerij van afbeeldingen en video's met zoom- en sliderfunctionaliteit.
- **Gerelateerde Projecten**: Een interactieve slider om meer projecten te ontdekken.
- **Donkere Modus**: Ondersteuning voor lichte en donkere thema's.

## Technologieën

Dit project maakt gebruik van de volgende technologieën:

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **Styling**: Tailwind CSS
- **Animaties**: Framer Motion
- **API**: WordPress REST API met Advanced Custom Fields (ACF)
- **Slider**: Swiper.js

## Installatie

Volg deze stappen om het project lokaal te installeren:

1. **Repository Klonen**:

   ```bash
   git clone https://github.com/username/multichoiceagency.git
   ```

2. **Ga naar de map**:

   ```bash
   cd multichoiceagency
   ```

3. **Installeer Afhankelijkheden**:

   ```bash
   npm install
   ```

4. **Omgevingsvariabelen Configureren**:
   Maak een `.env.local` bestand en voeg de volgende variabelen toe:

   ```env
   NEXT_PUBLIC_API_BASE_URL=https://cloud.multichoiceagency.nl/wp-json
   ```

5. **Project Starten**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in je browser.

## Gebruik

- **Case Studies Bekijken**: Navigeer naar `/cases` om een overzicht te zien van alle klantprojecten.
- **Donkere Modus**: Schakel tussen licht en donker thema via je systeeminstellingen.
- **Interactie**: Gebruik sliders en zoom-functionaliteit om projecten te verkennen.

## Projectstructuur

```
multichoiceagency/
├── public/           # Statische assets zoals afbeeldingen
├── src/              # Broncode van het project
│   ├── components/   # Herbruikbare React-componenten
│   ├── pages/        # Pagina's voor de Next.js applicatie
│   ├── styles/       # Styling en Tailwind configuratie
│   └── utils/        # Hulpmiddelen en helpers
└── package.json      # Projectconfiguratie en afhankelijkheden
```

## Bijdragen

Bijdragen zijn welkom! Volg deze stappen om bij te dragen:

1. Fork deze repository.
2. Maak een nieuwe feature branch aan:

   ```bash
   git checkout -b feature-naam
   ```

3. Commit je wijzigingen:

   ```bash
   git commit -m "Voeg nieuwe feature toe"
   ```

4. Push naar je fork:

   ```bash
   git push origin feature-naam
   ```

5. Maak een Pull Request aan.

## Licentie

Dit project is gelicenseerd onder de MIT-licentie. Zie het bestand `LICENSE` voor meer informatie.