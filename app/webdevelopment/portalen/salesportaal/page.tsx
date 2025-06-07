"use client"

import { useState } from "react"
import Link from "next/link"
import HeroNieuw from "@/components/Hero-section"
import Image from "next/image"

export default function Salesportaal() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "Waarom is een salesportaal essentieel voor uw organisatie?",
      answer:
        "Een salesportaal fungeert als een centrale hub voor al uw verkoopactiviteiten. Het stelt uw team in staat om leads, orders en klantgegevens overzichtelijk te beheren en realtime inzicht te verkrijgen in verkoopresultaten, wat leidt tot een efficiënter verkoopproces en hogere conversies.",
    },
    {
      question: "Hoe draagt een salesportaal bij aan een hogere omzet?",
      answer:
        "Door een geïntegreerd systeem voor leadbeheer, ordertracking en klantcommunicatie kunnen uw salesmedewerkers snel inspelen op kansen en effectiever samenwerken. Dit resulteert in een snellere opvolging en een gerichtere aanpak die direct bijdraagt aan een hogere omzet.",
    },
    {
      question: "Welke functionaliteiten biedt een modern salesportaal?",
      answer:
        "Ons salesportaal combineert diverse tools zoals lead tracking, orderbeheer, CRM-integratie, realtime dashboards en geavanceerde rapportagefuncties. Hierdoor kan uw team alle cruciale informatie binnen handbereik krijgen en beslissingen baseren op accurate en actuele data.",
    },
    {
      question: "Hoe waarborgt u de veiligheid van gevoelige verkoopgegevens?",
      answer:
        "Wij implementeren de nieuwste beveiligingstechnologieën, waaronder dataversleuteling, multi-factor authenticatie en regelmatige beveiligingsaudits. Zo garanderen we dat al uw verkoop- en klantgegevens veilig en vertrouwelijk worden beheerd.",
    },
    {
      question: "Wat zijn de voordelen van een op maat gemaakt salesportaal?",
      answer:
        "Een custom salesportaal sluit naadloos aan op de specifieke behoeften van uw organisatie. Het is volledig configureerbaar en integreert moeiteloos met uw bestaande systemen, waardoor u flexibel kunt inspelen op veranderingen in de markt en uw verkoopprocessen voortdurend kunt optimaliseren.",
    },
    {
      question: "Hoe schaalbaar is het salesportaal?",
      answer:
        "Onze oplossingen zijn ontworpen om mee te groeien met uw organisatie. Of u nu uw verkoopteam uitbreidt of extra functionaliteiten wilt toevoegen, het platform kan eenvoudig worden aangepast zonder prestatieverlies.",
    },
    {
      question: "Is integratie met bestaande CRM- en ERP-systemen mogelijk?",
      answer:
        "Absoluut. Ons salesportaal kan naadloos worden geïntegreerd met uw bestaande CRM- en ERP-systemen, wat zorgt voor een uniforme gegevensstroom en een consistente gebruikerservaring voor uw hele verkooporganisatie.",
    },
    {
      question: "Welke ondersteuning biedt u na de lancering van het salesportaal?",
      answer:
        "Wij bieden uitgebreide nazorg, met regelmatige updates, onderhoud en 24/7 technische ondersteuning. Hierdoor blijft het platform altijd up-to-date en functioneert het optimaal, zodat uw sales team zich volledig kan richten op het sluiten van deals.",
    },
    {
      question: "Hoe helpt het salesportaal uw team bij selfservice?",
      answer:
        "Door selfservice-functies te integreren, kunnen uw salesmedewerkers zelf hun gegevens bijwerken, leads kwalificeren en direct toegang krijgen tot trainingsmaterialen. Dit vermindert de afhankelijkheid van ondersteunende afdelingen en versnelt het verkoopproces.",
    },
    {
      question: "Hoe verloopt de migratie van bestaande verkoopdata naar het nieuwe systeem?",
      answer:
        "Wij zorgen voor een zorgvuldige migratie van al uw huidige verkoop- en klantgegevens naar het nieuwe systeem, zodat de overgang soepel verloopt en er geen gegevens verloren gaan. Dit minimaliseert verstoringen in uw dagelijkse verkoopactiviteiten.",
    },
  ]

  return (
<>      <HeroNieuw
        title={"Salesportaal & Digitale Verkoopoptimalisatie"}
        description={
          "Versterk uw verkoopteam met een geïntegreerd salesportaal dat leadbeheer, ordertracking en realtime rapportages combineert. Transformeer uw verkoopproces met een platform dat ontworpen is om efficiëntie en prestaties te verhogen."
        }
        buttonText={"Vraag een demo aan"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://videos.pexels.com/video-files/5527832/pexels-artem-podrez-5527832.mp4"}
      />

      {/* Salesportaal - Uitgebreide Informatie */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="prose max-w-none">
            <h2>Een Centrale Digitale Hub voor Uw Verkooporganisatie</h2>
            <p>
              In de hedendaagse competitieve markt is het essentieel dat uw verkoopteam beschikt over een centraal platform dat alle verkoopactiviteiten samenbrengt. Een salesportaal biedt uw team een overzichtelijke omgeving waar leads, klantinformatie en orderdetails eenvoudig te beheren zijn. Dit zorgt voor een snellere respons op verkoopkansen en een efficiëntere opvolging van potentiële klanten.
            </p>
            <p>
              Dankzij realtime dashboards en uitgebreide rapportagetools krijgt uw management direct inzicht in belangrijke verkoopmetrics. Hierdoor kunt u trends analyseren, de effectiviteit van marketingcampagnes meten en strategische beslissingen nemen die leiden tot een hogere omzet. De combinatie van selfservice en geautomatiseerde processen zorgt ervoor dat uw salesmedewerkers minder tijd kwijt zijn aan administratieve taken en meer kunnen focussen op het sluiten van deals.
            </p>
            <p>
              Een ander significant voordeel is de mogelijkheid om uw bestaande systemen te integreren. Ons salesportaal kan naadloos worden gekoppeld aan uw CRM- en ERP-systemen, zodat alle klant- en verkoopgegevens in één overzicht beschikbaar zijn. Dit bevordert niet alleen de efficiëntie, maar zorgt er ook voor dat uw verkoopteam altijd beschikt over de meest actuele en nauwkeurige informatie.
            </p>
            <p>
              Veiligheid is een kernaspect van ons platform. Gevoelige klant- en verkoopgegevens worden beschermd met geavanceerde beveiligingsmaatregelen, zoals dataversleuteling en multi-factor authenticatie. Regelmatige beveiligingsaudits garanderen dat uw data te allen tijde veilig en vertrouwelijk blijft. Dit schept vertrouwen bij zowel uw salesteam als uw klanten.
            </p>
            <p>
              Het salesportaal is bovendien ontworpen met flexibiliteit en schaalbaarheid in gedachten. Naarmate uw organisatie groeit, kan het platform eenvoudig worden uitgebreid met extra modules en functionaliteiten. Of het nu gaat om extra analysetools, nieuwe communicatiemiddelen of geavanceerde integraties, het systeem kan mee evolueren met uw bedrijfsbehoeften, zonder in te boeten aan prestaties.
            </p>
            <p>
              Naast de operationele voordelen versterkt een salesportaal ook de strategische relaties met uw klanten. Door een centraal platform te bieden waar uw klanten en prospects gemakkelijk toegang hebben tot productinformatie, offerteaanvragen en orderstatussen, creëert u een transparante en efficiënte communicatie. Dit draagt bij aan een hogere klanttevredenheid en een sterkere marktpositie.
            </p>
            <p>
              Het implementeren van een salesportaal betekent ook dat uw salesmedewerkers profiteren van uitgebreide selfservice-opties. Ze kunnen zelf hun accountgegevens bijwerken, leads kwalificeren en direct toegang krijgen tot trainingsmateriaal en support. Dit bevordert een cultuur van zelfstandigheid en continue verbetering, waardoor uw team altijd op de hoogte is van de nieuwste verkoopstrategieën en marktontwikkelingen.
            </p>
            <p>
              Tot slot helpt het salesportaal bij de migratie van bestaande verkoopdata. Ons team zorgt voor een zorgvuldige en veilige overdracht van al uw huidige klant- en verkoopgegevens, zodat de overgang soepel verloopt en er geen informatie verloren gaat. Dit minimaliseert de onderbreking van uw dagelijkse verkoopactiviteiten en garandeert een naadloze integratie in uw nieuwe digitale omgeving.
            </p>
            <p>
              Samenvattend biedt een goed ingericht salesportaal talloze voordelen: het centraliseert alle verkoopactiviteiten, optimaliseert de communicatie en verbetert de efficiëntie van uw salesprocessen. Met realtime inzichten, flexibele integraties en robuuste beveiligingsmaatregelen legt u de basis voor een toekomstbestendige verkoopstrategie die uw concurrentiepositie versterkt en uw omzet verhoogt.
            </p>
            <p>
              Door te investeren in een modern salesportaal kiest u voor een geïntegreerde, klantgerichte aanpak die zowel uw interne processen als de externe klantrelaties optimaliseert. Het platform biedt een complete oplossing die u helpt bij het realiseren van duurzame groei en succes in een steeds competitievere markt.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sectie */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Veelgestelde vragen</h2>
            <p className="text-gray-300">
              Hier vindt u uitgebreide antwoorden op de meest gestelde vragen over ons salesportaal en de voordelen die het biedt.
            </p>
          </div>
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                {faqItems.slice(0, 5).map((item, index) => (
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
                {faqItems.slice(5).map((item, index) => (
                  <button
                    key={index + 5}
                    onClick={() => setOpenAccordion(openAccordion === index + 5 ? null : index + 5)}
                    className="flex w-full py-4 px-8 mb-4 items-start justify-between text-left bg-green-900 dark:bg-green-900/10 shadow-md rounded-2xl"
                  >
                    <div className="pr-5">
                      <h5 className="text-lg font-medium text-white">{item.question}</h5>
                      <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index + 5 ? "max-h-96" : "max-h-0"}`}>
                        <p className="text-white mt-4">{item.answer}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0">
                      {openAccordion === index + 5 ? (
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
                Voor meer informatie over ons salesportaal en hoe wij uw verkoopprocessen digitaal kunnen optimaliseren, kunt u onze{" "}
                <Link href="#" className="inline-block text-lime-500 font-medium underline">
                  Contactpagina
                </Link>{" "}
                bezoeken of bel onze klantenservice op{" "}
                <span className="text-lime-500 font-medium">071 203 24 88</span>. Ons deskundige team staat klaar om u te ondersteunen bij het realiseren van een efficiënte en klantgerichte verkoopstrategie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sectie */}
      <section className="py-12 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Bent u klaar om uw salesportaal te lanceren?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Transformeer uw verkoopprocessen met een modern, geïntegreerd digitaal portaal dat uw sales team ondersteunt en optimaliseert.
          </p>
          <Link
            href="/offerte-aanvragen"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white bg-green-500 hover:bg-transparent border border-lime-500 hover:border-white rounded-full transition duration-200"
          >
            Start uw project
          </Link>
        </div>
      </section>
    </>
  )
}
