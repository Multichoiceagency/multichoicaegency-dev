"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function OnzeWerkwijze() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  return (
    <div className="bg-white text-black">
      <HeroNieuw 
        title={"Onze Werkwijze - Het Slimme Stappenplan van Multichoiceagency"}
        description={
          "Ontdek hoe Multichoiceagency uw digitale ambities omzet in realiteit via een gestructureerd en resultaatgericht stappenplan. Wij begeleiden u van de eerste analyse tot aan een succesvolle lancering en nazorg, zodat uw project vanaf de basis solide staat."
        }
        buttonText={"Lees Meer"}
        buttonLink={"/onze-werkwijze"}
        videoSrc={"https://videos.pexels.com/video-files/123456789/example.mp4"}
      />

      {/* Inleiding */}
      <section className="py-12 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Inleiding: Onze Filosofie</h2>
          <p className="mb-4">
            Bij Multichoiceagency geloven we dat een succesvolle digitale transformatie begint met een gedegen planning en een heldere visie. Ons stappenplan is gebaseerd op transparantie, samenwerking en innovatie. Wij zorgen ervoor dat elke fase van het project zorgvuldig wordt doorlopen, zodat we uw ideeën omzetten in een robuuste en toekomstbestendige oplossing.
          </p>
          <p className="mb-4">
            In deze pagina nemen we u mee door ons slimme stappenplan. Van de eerste strategische analyse tot aan de lancering en de voortdurende ondersteuning, elke stap is ontworpen om maximale waarde te creëren voor uw organisatie. Ons doel is om niet alleen een technisch perfect werkende oplossing te leveren, maar ook een platform dat uw bedrijfsprocessen optimaliseert en uw digitale toekomst waarborgt.
          </p>
        </div>
      </section>

      {/* Stap 1: Analyse en Strategie */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Stap 1: Analyse en Strategie</h2>
          <p className="mb-4">
            Het succes van elk project begint met een grondige analyse. We starten met het in kaart brengen van uw huidige situatie, het onderzoeken van uw bedrijfsdoelstellingen en het identificeren van potentiële uitdagingen. Door middel van interviews, workshops en data-analyse verzamelen we waardevolle inzichten die de basis vormen voor een gedegen strategie.
          </p>
          <p className="mb-4">
            Op basis van deze analyse ontwikkelen we een strategisch plan dat als routekaart dient voor de rest van het project. Dit plan bevat niet alleen technische specificaties, maar ook aanbevelingen voor een optimale gebruikerservaring en een efficiënte bedrijfsvoering. Door vanaf het begin een helder strategisch kader te creëren, minimaliseren we risico’s en zorgen we voor een soepele uitvoering.
          </p>
          <p className="mb-4">
            Deze fase is cruciaal, want een goed begrip van uw behoeften en doelstellingen zorgt ervoor dat alle volgende stappen naadloos op elkaar aansluiten. Wij geloven dat een sterke strategie de sleutel is tot duurzame groei en succes.
          </p>
        </div>
      </section>

      {/* Stap 2: Concept en Ontwerp */}
      <section className="py-12 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Stap 2: Concept en Ontwerp</h2>
          <p className="mb-4">
            Na het vaststellen van de strategie vertalen we de inzichten naar concrete concepten. Ons creatieve team gaat aan de slag met het ontwikkelen van meerdere ontwerpvoorstellen. We experimenteren met verschillende layouts en designs die niet alleen visueel aantrekkelijk zijn, maar ook de functionaliteit en gebruiksvriendelijkheid maximaliseren.
          </p>
          <p className="mb-4">
            Tijdens deze fase betrekken we u nauw bij het ontwerpproces. Uw feedback is essentieel om tot een definitief concept te komen dat volledig aansluit op uw merk en de wensen van uw doelgroep. Het resultaat is een ontwerp dat esthetisch en functioneel in balans is en de basis vormt voor een succesvolle implementatie.
          </p>
          <p className="mb-4">
            Een goed ontwerp is immers meer dan alleen mooi; het moet intuïtief en effectief zijn. Daarom besteden we extra aandacht aan de gebruiksvriendelijkheid en toegankelijkheid van de interface.
          </p>
        </div>
      </section>

      {/* Stap 3: Ontwikkeling en Implementatie */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Stap 3: Ontwikkeling en Implementatie</h2>
          <p className="mb-4">
            Na goedkeuring van het ontwerp gaan we over tot de ontwikkeling. Onze ervaren ontwikkelaars werken met de nieuwste technologieën om een robuust en schaalbaar systeem te bouwen. Hierbij staat kwaliteit voorop: we schrijven schone, efficiënte code en volgen de best practices binnen de industrie.
          </p>
          <p className="mb-4">
            De implementatiefase omvat tevens de integratie met bestaande systemen binnen uw organisatie. Wij zorgen voor een soepele koppeling met uw ERP, CRM of andere relevante software, zodat er een uniforme gegevensstroom ontstaat. Dit maakt het mogelijk om alle bedrijfsprocessen naadloos op elkaar af te stemmen.
          </p>
          <p className="mb-4">
            Door continue tests en feedbackrondes garanderen we dat de uiteindelijke oplossing voldoet aan de hoogste kwaliteitsnormen en toekomstbestendig is.
          </p>
        </div>
      </section>

      {/* Stap 4: Testen en Optimaliseren */}
      <section className="py-12 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Stap 4: Testen en Optimaliseren</h2>
          <p className="mb-4">
            Voor de lancering doorloopt uw project een intensieve testfase. We voeren uitgebreide functionele tests uit, samen met gebruikerstests en beveiligingstests. Dit om er zeker van te zijn dat alle onderdelen van de oplossing feilloos werken.
          </p>
          <p className="mb-4">
            Feedback van een selecte groep gebruikers wordt nauwkeurig geanalyseerd, zodat eventuele verbeterpunten snel kunnen worden doorgevoerd. Optimalisatie is een doorlopend proces en we blijven ook na de lancering werken aan het verfijnen van de functionaliteiten.
          </p>
          <p className="mb-4">
            Dit continu optimaliseren zorgt ervoor dat uw digitale oplossing niet alleen op het moment van lancering voldoet aan de hoogste standaarden, maar ook in de toekomst flexibel en effectief blijft.
          </p>
        </div>
      </section>

      {/* Stap 5: Lancering en Nazorg */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Stap 5: Lancering en Nazorg</h2>
          <p className="mb-4">
            De laatste fase van ons stappenplan is de officiële lancering van uw project. Na een succesvolle testfase introduceren we uw digitale oplossing aan uw doelgroep. Een doordachte lancering zorgt voor een soepele overgang en een groot succes bij de eerste gebruikers.
          </p>
          <p className="mb-4">
            Onze betrokkenheid eindigt niet bij de lancering. Wij bieden uitgebreide nazorg, inclusief continue monitoring, technische ondersteuning en regelmatige updates. Dit garandeert dat uw oplossing altijd optimaal functioneert en u zich kunt blijven richten op de groei van uw organisatie.
          </p>
          <p className="mb-4">
            Dankzij deze uitgebreide ondersteuning en de flexibele architectuur van onze oplossingen bent u verzekerd van een duurzame en succesvolle digitale transformatie.
          </p>
        </div>
      </section>

      {/* Conclusie */}
      <section className="py-12 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Conclusie: Uw Digitale Toekomst Start Hier</h2>
          <p className="mb-4">
            Multichoiceagency combineert creativiteit, technische expertise en strategisch inzicht om uw digitale ambities te realiseren. Ons slimme stappenplan is ontworpen om elke fase van het project zorgvuldig te doorlopen en zo optimale resultaten te behalen. Van de eerste analyse tot en met de nazorg, wij staan voor u klaar om u te ondersteunen bij elke stap.
          </p>
          <p className="mb-4">
            Door te investeren in een goed doordacht en op maat gemaakt digitaal project legt u de basis voor een toekomstbestendige organisatie. Onze aanpak zorgt voor een efficiënte, schaalbare en veilige oplossing die uw bedrijfsprocessen optimaliseert en uw concurrentiepositie versterkt.
          </p>
          <p className="mb-4">
            Bent u klaar om de volgende stap te zetten? Neem vandaag nog contact met ons op en ontdek hoe wij uw ideeën kunnen omzetten in een robuuste digitale realiteit. Laat ons samen uw digitale toekomst vormgeven en uw organisatie naar het volgende niveau tillen.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Bent u klaar om uw digitale ambities te realiseren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Ontdek hoe Multichoiceagency uw project kan transformeren met een op maat gemaakt en toekomstbestendig digitaal platform. Neem vandaag nog contact met ons op en start uw transformatie.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Vraag een demo aan
          </Link>
        </div>
      </section>
    </div>
  )
}
