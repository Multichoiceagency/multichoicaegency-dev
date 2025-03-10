import { NextResponse } from "next/server";

// Zelfde data als in de index; in een echt project haal je dit uit een database
const vacatures = [
        {
          slug: "webdesigner",
          title: "Ervaren Webdesigner",
          shortDescription:
            "Ontwerp visueel aantrekkelijke, SEO-geoptimaliseerde websites die de gebruikerservaring verbeteren.",
          description:
            "Als ervaren webdesigner bij Multichoiceagency ontwerp en implementeer je creatieve concepten voor websites die zowel esthetisch als functioneel zijn.",
          details:
            "Je ontwikkelt unieke designs en werkt nauw samen met ons development team. Ervaring met Adobe Creative Suite en responsive design is essentieel.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "webdeveloper",
          title: "Webdeveloper",
          shortDescription:
            "Bouw dynamische en responsieve webapplicaties met moderne technologieën en optimaliseer de performance voor zoekmachines.",
          description:
            "Als webdeveloper ben je verantwoordelijk voor zowel front- als backend oplossingen met focus op schaalbaarheid en SEO.",
          details:
            "Je ontwikkelt kwalitatieve code, integreert API's en zorgt voor een optimale gebruikerservaring. Ervaring met JavaScript en React of Nuxt.js is vereist.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "online-marketeer",
          title: "Online Marketeer",
          shortDescription:
            "Versterk onze digitale strategie met doelgerichte online marketingcampagnes en optimaliseer onze zichtbaarheid via SEO.",
          description:
            "Als online marketeer zet je gerichte campagnes op en analyseer je de resultaten om de online aanwezigheid te versterken.",
          details:
            "Je bent verantwoordelijk voor contentoptimalisatie, campagnebeheer en het uitvoeren van data-analyse. Ervaring met SEO, SEA en marketing automation tools is gewenst.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "seo-specialist",
          title: "SEO Specialist",
          shortDescription:
            "Verbeter de zoekmachineprestaties door technische en content-gerichte optimalisaties voor meer organisch verkeer.",
          description:
            "Als SEO specialist optimaliseer je onze website en content om de organische vindbaarheid te verbeteren.",
          details:
            "Je voert keyword research uit, analyseert de websiteprestaties en implementeert optimalisaties. Ervaring met SEO-tools en analytische vaardigheden zijn essentieel.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "stage-open-sollicitatie",
          title: "Stage / Open Sollicitatie",
          shortDescription:
            "Solliciteer voor een stageplek of stuur een open sollicitatie voor een unieke kans binnen ons team.",
          description:
            "Solliciteer voor een stageplek of stuur een open sollicitatie voor een unieke kans binnen ons team.",
          details:
            "We bieden een leerzame omgeving waarin je praktijkervaring kunt opdoen. Geef in je sollicitatie aan wat je wilt bereiken.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "video-editor-maker",
          title: "Video Editor & Maker",
          shortDescription:
            "Creëer pakkende videoclips en marketingvideo’s met een focus op storytelling en digitale optimalisatie.",
          description:
            "Als Video Editor & Maker creëer je pakkende content voor verschillende mediakanalen.",
          details:
            "Je bent verantwoordelijk voor het monteren en produceren van video’s die onze boodschap krachtig overbrengen. Ervaring met editing software is een must.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "content-marketeer",
          title: "Content Marketeer",
          shortDescription:
            "Ontwikkel en implementeer conversiegerichte contentstrategieën die zowel aantrekkelijk als SEO-geoptimaliseerd zijn.",
          description:
            "Ontwikkel en implementeer conversiegerichte contentstrategieën voor diverse kanalen.",
          details:
            "Je maakt content die zowel de merkidentiteit als SEO-criteria versterkt. Ervaring met contentmanagementsystemen is een pre.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "reel-social-media-beheerder",
          title: "Reel & Social Media Beheerder",
          shortDescription:
            "Beheer onze socialmediakanalen en creëer boeiende reels en content om de online engagement te verhogen.",
          description:
            "Beheer onze socialmediakanalen en creëer boeiende reels en content voor online engagement.",
          details:
            "Je ontwikkelt en implementeert creatieve strategieën op platforms als Instagram, TikTok en Facebook. Ervaring met social media analytics is gewenst.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "ai-specialist",
          title: "AI Specialist",
          shortDescription:
            "Implementeer en optimaliseer AI-oplossingen om innovatie en automatisering binnen onze processen te stimuleren.",
          description:
            "Implementeer en optimaliseer AI-oplossingen om innovatie en automatisering te stimuleren.",
          details:
            "Je werkt aan projecten die machine learning en data-analyse combineren om bedrijfsprocessen te verbeteren. Ervaring met Python en AI-frameworks is vereist.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "frontend-ontwikkelaar",
          title: "Frontend Ontwikkelaar",
          shortDescription:
            "Ontwerp intuïtieve en responsieve interfaces die zowel esthetisch als SEO-geoptimaliseerd zijn.",
          description:
            "Ontwerp intuïtieve en responsieve interfaces die zowel esthetisch als functioneel zijn.",
          details:
            "Je werkt nauw samen met designers en backend developers om de gebruikerservaring te optimaliseren. Ervaring met moderne frameworks is een must.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "backend-ontwikkelaar",
          title: "Backend Ontwikkelaar",
          shortDescription:
            "Bouw schaalbare en veilige backend systemen en API's die onze digitale oplossingen ondersteunen.",
          description:
            "Bouw schaalbare en veilige backend systemen die onze digitale oplossingen ondersteunen.",
          details:
            "Je ontwikkelt API's en server-side logica met focus op performance en veiligheid. Ervaring met databases en servertechnologieën is noodzakelijk.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "api-specialist",
          title: "API Specialist",
          shortDescription:
            "Ontwikkel en beheer robuuste API-integraties voor een naadloze gegevensuitwisseling.",
          description:
            "Ontwikkel en beheer robuuste API-integraties voor een naadloze gegevensuitwisseling.",
          details:
            "Je bent verantwoordelijk voor het ontwerpen en onderhouden van API's, en zorgt voor optimale communicatie tussen systemen. Ervaring met RESTful design is een plus.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "data-analyst",
          title: "Data Analyst",
          shortDescription:
            "Analyseer en interpreteer bedrijfsdata om waardevolle inzichten te genereren voor strategische besluitvorming.",
          description:
            "Analyseer en interpreteer bedrijfsdata om waardevolle inzichten te genereren voor strategische besluitvorming.",
          details:
            "Je werkt met data visualisatie tools en statistische methoden om trends te identificeren. Ervaring met SQL en data-analyse software is gewenst.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
        {
          slug: "accountmanager-ervaren",
          title: "Ervaren Accountmanager",
          shortDescription:
            "Beheer en groei ons klantenbestand met strategische verkoopinspanningen en een proactieve aanpak.",
          description:
            "Beheer en groei ons klantenbestand met strategische verkoopinspanningen en een proactieve aanpak.",
          details:
            "Je onderhoudt sterke klantrelaties en identificeert nieuwe zakelijke kansen. Ervaring in B2B sales en klantbeheer is vereist.",
          werkuren: ["fulltime", "parttime"],
          contract: ["loondienst", "zzp", "parttime"],
        },
      ];
      

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const vacature = vacatures.find((vac) => vac.slug === slug);
  if (!vacature) {
    return NextResponse.json({ message: "Vacature niet gevonden" }, { status: 404 });
  }
  return NextResponse.json(vacature);
}
