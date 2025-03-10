"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/HeroNieuw"
import Image from "next/image"
import { PricingTable } from "@/components/pricing-table"

export default function Medewerkersportaal() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een medewerkersportaal essentieel voor uw organisatie?",
      answer:
        "Een modern medewerkersportaal centraliseert alle interne communicatie en HR-processen op één plek. Dit maakt het voor uw medewerkers eenvoudiger om toegang te krijgen tot persoonlijke gegevens, looninformatie, bedrijfsnieuws, en interne documenten. Het portaal stimuleert de betrokkenheid en verhoogt de efficiëntie door selfservice-opties te bieden voor veel administratieve taken.",
    },
    {
      question: "Hoe draagt een medewerkersportaal bij aan de efficiëntie van de interne processen?",
      answer:
        "Door een centraal platform te bieden, kunnen medewerkers gemakkelijk hun eigen profiel bijwerken, verlofaanvragen indienen en trainingen volgen. Hierdoor neemt de administratieve druk af en kunnen HR-teams zich richten op strategische initiatieven, wat leidt tot een soepelere bedrijfsvoering.",
    },
    {
      question: "Welke functionaliteiten biedt een modern medewerkersportaal?",
      answer:
        "Ons portaal biedt een breed scala aan functionaliteiten, waaronder toegang tot persoonlijke en salarisgegevens, een agenda voor bedrijfsafspraken, meldingen van interne nieuwsberichten, en tools voor samenwerking zoals chat en projectbeheer. Ook kunnen medewerkers via het portaal gebruikmaken van selfservice modules voor verlofaanvragen, declaraties en interne communicatie.",
    },
    {
      question: "Hoe waarborgt u de veiligheid en privacy van medewerkersgegevens?",
      answer:
        "Wij hanteren de nieuwste beveiligingstechnologieën zoals data-encryptie, multi-factor authenticatie en regelmatige beveiligingsaudits. Dit zorgt ervoor dat alle gevoelige informatie veilig wordt opgeslagen en dat alleen geautoriseerde personen toegang hebben tot bepaalde delen van het portaal.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakt medewerkersportaal?",
      answer:
        "Een op maat gemaakt portaal sluit perfect aan op de unieke behoeften van uw organisatie. Het biedt flexibiliteit in design en functionaliteit, waardoor u het platform kunt aanpassen aan de specifieke wensen van uw medewerkers. Dit leidt tot een hogere tevredenheid en een sterkere betrokkenheid bij uw organisatie.",
    },
    {
      question: "Hoe schaalbaar is het medewerkersportaal?",
      answer:
        "Onze oplossingen zijn ontworpen om mee te groeien met uw organisatie. Of u nu te maken heeft met een stijgend aantal medewerkers of extra functionaliteiten wilt toevoegen, het portaal is flexibel genoeg om deze veranderingen zonder prestatieverlies te verwerken.",
    },
    {
      question: "Is integratie met bestaande HR-systemen mogelijk?",
      answer:
        "Absoluut. Ons medewerkersportaal kan naadloos worden geïntegreerd met bestaande HR- en ERP-systemen, waardoor een uniforme gegevensstroom ontstaat en de efficiëntie van interne processen verder wordt verhoogd.",
    },
    {
      question: "Welke ondersteuning biedt u na de lancering van het portaal?",
      answer:
        "Wij bieden uitgebreide nazorg met regelmatige updates, onderhoud en 24/7 technische ondersteuning. Dit garandeert dat het portaal altijd up-to-date en optimaal functioneert, zodat uw medewerkers zonder onderbrekingen gebruik kunnen maken van de beschikbare tools.",
    },
  ]

  return (
    <div className="bg-white text-black">
      <HeroNieuw
        title={"Medewerkersportaal & Digitale Werkomgeving"}
        description={
          "Versterk uw interne communicatie en HR-processen met een op maat gemaakt medewerkersportaal. Geef uw medewerkers 24/7 toegang tot persoonlijke gegevens, bedrijfsnieuws, en selfservice tools voor een efficiëntere en meer betrokken werkomgeving."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://videos.pexels.com/video-files/5527832/pexels-artem-podrez-5527832.mp4"}
      />

      {/* Medewerkersportaal - Uitgebreide Informatie */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="prose max-w-none">
            <h2>Een Centrale Digitale Hub voor uw Medewerkers</h2>
            <p>
              In de huidige digitale wereld is een goed ingericht medewerkersportaal een onmisbaar instrument voor organisaties die hun interne processen willen stroomlijnen. Het portaal fungeert als één centrale toegangspoort waar medewerkers eenvoudig toegang hebben tot belangrijke bedrijfsinformatie, persoonlijke data, en diverse selfservice-opties. Dit bevordert niet alleen de efficiëntie, maar versterkt ook de betrokkenheid en samenwerking binnen uw organisatie.
            </p>
            <p>
              Met een modern medewerkersportaal kunnen uw medewerkers inloggen op een gebruiksvriendelijke interface om direct toegang te krijgen tot hun persoonlijke profiel, looninformatie en andere HR-gerelateerde data. Daarnaast biedt het platform de mogelijkheid om interne nieuwsberichten, evenementen en aankondigingen te bekijken, zodat iedereen op de hoogte blijft van de laatste ontwikkelingen binnen de organisatie.
            </p>
            <p>
              Een belangrijk voordeel van een digitaal portaal is de selfservice functionaliteit. Medewerkers kunnen zelf hun gegevens bijwerken, verlofaanvragen indienen en declaraties verwerken zonder dat ze hiervoor een tussenpersoon nodig hebben. Dit vermindert de administratieve lasten voor uw HR-afdeling en zorgt ervoor dat uw medewerkers sneller geholpen worden, wat uiteindelijk leidt tot een verhoogde tevredenheid en productiviteit.
            </p>
            <p>
              Het portaal is daarnaast ontworpen met veiligheid en privacy als topprioriteit. Gevoelige informatie wordt beschermd door de nieuwste beveiligingstechnologieën, zoals dataversleuteling en multi-factor authenticatie. Regelmatige audits en updates zorgen ervoor dat het systeem voldoet aan de strengste beveiligingsnormen, zodat uw medewerkers met een gerust hart hun persoonlijke gegevens kunnen beheren.
            </p>
            <p>
              Een ander strategisch voordeel is de mogelijkheid tot integratie met bestaande HR-systemen. Hierdoor kunnen alle gegevens in één uniforme omgeving worden beheerd, wat de efficiëntie verhoogt en de kans op fouten minimaliseert. Of het nu gaat om het synchroniseren van personeelsgegevens of het automatiseren van administratieve processen, een geïntegreerd systeem zorgt voor een naadloze workflow en een betere algehele bedrijfsvoering.
            </p>
            <p>
              Bovendien biedt een medewerkersportaal uitgebreide rapportagemogelijkheden en realtime dashboards. Hiermee krijgt het management direct inzicht in belangrijke metrics, zoals de betrokkenheid van medewerkers, het gebruik van selfservice tools en de algehele tevredenheid. Deze gegevens stellen u in staat om trends te herkennen en gericht verbeteringen door te voeren, wat leidt tot een continu optimaliserend intern beleid.
            </p>
            <p>
              De schaalbaarheid van het portaal is eveneens een belangrijk aspect. Naarmate uw organisatie groeit, kan het platform eenvoudig worden aangepast en uitgebreid met extra functionaliteiten. Dit zorgt ervoor dat het systeem toekomstbestendig is en kan meegroeien met de behoeften van uw medewerkers, zonder dat er ingrijpende aanpassingen nodig zijn.
            </p>
            <p>
              Naast de technische voordelen speelt een medewerkersportaal ook een cruciale rol in het versterken van de interne communicatie. Het biedt een centraal platform waar informatie snel en effectief gedeeld kan worden, waardoor miscommunicatie wordt voorkomen en de samenwerking tussen teams verbetert. Dit resulteert in een meer betrokken en geïnformeerde organisatie, waarin iedereen op de hoogte is van belangrijke beslissingen en bedrijfsontwikkelingen.
            </p>
            <p>
              Tenslotte helpt het medewerkersportaal om een cultuur van transparantie en zelfredzaamheid te bevorderen. Wanneer medewerkers de mogelijkheid hebben om zelf hun gegevens te beheren en proactief informatie op te vragen, voelen zij zich meer gewaardeerd en betrokken bij de organisatie. Dit draagt bij aan een positieve werkcultuur en versterkt de loyaliteit, wat essentieel is voor het succes op lange termijn.
            </p>
            <p>
              Samenvattend biedt een goed ingericht medewerkersportaal talloze voordelen. Het centraliseert de toegang tot belangrijke bedrijfsinformatie, vereenvoudigt administratieve processen via selfservice functionaliteiten, en verbetert de interne communicatie en betrokkenheid. Bovendien zorgt het voor een veilige, schaalbare en geïntegreerde digitale werkomgeving die bijdraagt aan een efficiënte en moderne bedrijfsvoering.
            </p>
            <p>
              Door te investeren in een modern medewerkersportaal legt u de basis voor een toekomstbestendige organisatie. Het versterkt niet alleen de interne processen, maar bevordert ook een cultuur van transparantie en samenwerking, waardoor uw organisatie beter gepositioneerd is voor groei en innovatie.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-300">
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over ons medewerkersportaal.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 4).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-green-900/10 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.69995V18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <div className="w-full lg:w-1/2 px-4">
                {faqItems.slice(4).map((item, index) => (
                  <button
                    key={index + 4}
                    onClick={() => setOpenAccordion(openAccordion === index + 4 ? null : index + 4)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-green-900/10 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 4 ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 4 ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.69995V18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M5.69995 12H18.3" stroke="#BEF264" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="max-w-xl mx-auto text-center">
              <span className="inline-block mb-8 ml-10">
                <Image src="/logos/logo.png" alt="" height={800} width={400} />
              </span>
              <h5 className="text-4xl font-medium mb-4 text-black">
                Heeft u nog vragen?
              </h5>
              <p className="text-gray-700">
                Voor meer informatie over ons medewerkersportaal en de digitale werkomgeving kunt u onze{" "}
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">071 203 24 88</span>. Ons deskundige team staat klaar om u te ondersteunen bij het realiseren van een efficiënte en moderne interne communicatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar om uw medewerkersportaal te lanceren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Transformeer uw interne communicatie en HR-processen met een modern, gebruiksvriendelijk digitaal portaal dat uw organisatie versterkt.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw project
          </Link>
        </div>
      </section>
    </div>
  )
}
