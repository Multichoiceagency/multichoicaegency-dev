"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />
        <div className="relative mx-auto max-w-5xl px-6 py-32 md:py-40 text-white">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Algemene Voorwaarden Multichoiceagency B.V.</h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-200">
            Deze voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en diensten van Multichoiceagency B.V.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-sm text-gray-300">Versie</p>
              <p className="font-semibold">19 augustus 2025</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-sm text-gray-300">Contact</p>
              <div className="space-y-1">
                <p className="font-medium">info@multichoiceagency</p>
                <p className="font-medium">010 322 04 10</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-sm text-gray-300">Adres</p>
              <p className="font-medium">Johannes Brandstraat 28<br />3072BH Rotterdam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content as Accordion */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <Accordion type="multiple" className="w-full space-y-3">
          <AccordionItem value="artikel-1">
            <AccordionTrigger>Artikel 1 – Begrippen</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li><strong>Aanbod:</strong> ieder voorstel of offerte van Multichoiceagency aan Opdrachtgever tot het verrichten van Diensten.</li>
                <li><strong>Content creation:</strong> het bedenken, creëren en uitwerken van tekstuele en visuele content in elk formaat.</li>
                <li><strong>Design(s):</strong> door Multichoiceagency ontwikkelde ontwerpen, logo’s en huisstijlen.</li>
                <li><strong>Diensten:</strong> o.a. ontwerp, ontwikkeling en onderhoud van websites/webshops, hosting, domeinregistratie, content & design, (online) marketing, SEO/SEA en social‑mediabeheer.</li>
                <li><strong>Dienstverlener:</strong> Multichoiceagency.</li>
                <li><strong>Opdrachtgever:</strong> de professionele wederpartij die Diensten bij Multichoiceagency afneemt of daarvoor een Aanbod heeft ontvangen.</li>
                <li><strong>Overeenkomst:</strong> elke rechtsverhouding tussen Multichoiceagency en Opdrachtgever, incl. aanbiedingen, acceptaties en deze voorwaarden.</li>
                <li><strong>Content:</strong> elk element zoals tekst, beeld, audio of video bestemd voor website of social media van Opdrachtgever.</li>
                <li><strong>Post:</strong> door Multichoiceagency geplaatste content op social media.</li>
                <li><strong>Social media:</strong> door Opdrachtgever gebruikte accounts waarop Multichoiceagency Diensten verleent.</li>
                <li><strong>Website:</strong> de door Multichoiceagency ontwikkelde website/webshop.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-2">
            <AccordionTrigger>Artikel 2 – Toepasselijkheid</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Deze voorwaarden gelden voor elk Aanbod, iedere Overeenkomst en alle Diensten van Multichoiceagency.</li>
                <li>Opdrachtgever krijgt vóór of bij het sluiten van de Overeenkomst inzage in deze voorwaarden; anders wordt aangegeven waar deze te raadplegen zijn.</li>
                <li>Afwijkingen gelden alleen als ze uitdrukkelijk en schriftelijk zijn overeengekomen.</li>
                <li>Ook van toepassing op aanvullende, gewijzigde of vervolgopdrachten.</li>
                <li>Inkoop- of andere voorwaarden van Opdrachtgever zijn uitgesloten.</li>
                <li>(Deel)nietigheid tast de overige bepalingen niet aan; een vervangende bepaling met vergelijkbare strekking treedt ervoor in de plaats.</li>
                <li>Ongelijkheden worden uitgelegd naar de geest van deze voorwaarden; afspraken in de Overeenkomst gaan voor.</li>
                <li>Art. 7:404 en 7:407 lid 2 BW zijn uitgesloten.</li>
                <li>Overdracht van rechten/verplichtingen door Opdrachtgever kan alleen met schriftelijke toestemming.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-3">
            <AccordionTrigger>Artikel 3 – Het Aanbod</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Aanbiedingen zijn vrijblijvend, tenzij anders vermeld.</li>
                <li>Multichoiceagency is gebonden na schriftelijke bevestiging van Opdrachtgever binnen 30 dagen; aanvragen mogen gemotiveerd worden geweigerd.</li>
                <li>Het Aanbod beschrijft de Diensten voldoende duidelijk; kennelijke fouten binden niet. Afbeeldingen/gegevens zijn indicatief.</li>
                <li>Offertes gelden niet automatisch voor vervolgopdrachten.</li>
                <li>Oplevertermijnen zijn indicatief.</li>
                <li>Een samengestelde prijsopgave verplicht niet tot (deel)levering tegen evenredige prijs.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-4">
            <AccordionTrigger>Artikel 4 – Totstandkoming Overeenkomst</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>De Overeenkomst komt tot stand door schriftelijke/elektronische acceptatie.</li>
                <li>Bij kennelijke vergissingen/verschrijvingen kunnen geen rechten worden ontleend.</li>
                <li>Overeenkomsten worden met Multichoiceagency gesloten, niet met een natuurlijke persoon.</li>
                <li>Herroepingsrecht is uitgesloten, tenzij anders overeengekomen.</li>
                <li>Bij meerdere Opdrachtgevers is ieder hoofdelijk aansprakelijk.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-5">
            <AccordionTrigger>Artikel 5 – Duur</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Tenzij anders overeengekomen, minimale looptijd: één jaar.</li>
                <li>Jaarlijks stilzwijgend verlengd met de oorspronkelijke termijn; opzegtermijn één maand.</li>
                <li>Tussentijdse beëindiging is uitgesloten, tenzij schriftelijk anders overeengekomen.</li>
                <li>Bij tussentijdse beëindiging worden reeds gemaakte uren/kosten afgerekend; urenregistratie is leidend.</li>
                <li>Opdrachtgever blijft bij voortijdige beëindiging resterende termijnen verschuldigd, tenzij anders bepaald.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-6">
            <AccordionTrigger>Artikel 6 – Uitvoering</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Diensten worden zorgvuldig uitgevoerd op basis van een inspanningsverplichting, tenzij een concreet resultaat is afgesproken.</li>
                <li>Instructies die de omvang wijzigen zijn meerwerk.</li>
                <li>Multichoiceagency mag derden inschakelen.</li>
                <li>Werkzaamheden door overheden/wet komen voor rekening van Opdrachtgever.</li>
                <li>Wijzigingen in software/functionaliteit kunnen plaatsvinden.</li>
                <li>Broncode/technische documentatie maken geen deel uit van licentie/overdracht, tenzij anders overeengekomen.</li>
                <li>Scopewijzigingen leiden tot meerkosten.</li>
                <li>Geen verplichting om fysieke datadragers te verstrekken.</li>
                <li>Back‑ups (indien overeengekomen) zonder garantie op volledigheid; bewaarplicht blijft bij Opdrachtgever.</li>
                <li>Aangeleverde materialen/specs kunnen worden getoetst; bij onvolkomenheden mag worden opgeschort.</li>
                <li>Gebruik van derden‑software/stock/open‑source is toegestaan; Opdrachtgever vrijwaart voor claims over aangeleverd materiaal.</li>
                <li>Bronbestanden van designs worden redelijk bewaard en daarna verwijderd.</li>
                <li>Voor social‑mediabeheer is toegang vereist.</li>
                <li>Opdrachtgever levert tijdig info, beslissingen en toegang.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-7">
            <AccordionTrigger>Artikel 7 – Verplichtingen Opdrachtgever</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Tijdige, volledige en juiste informatie verschaffen.</li>
                <li>Multichoiceagency hoeft aangeleverde info niet op juistheid te controleren.</li>
                <li>Bij extra informatieverzoeken kan Multichoiceagency opschorten; kosten/planning lopen door.</li>
                <li>Respecteer IE‑rechten en beveiligingen van de Website.</li>
                <li>Zorg voor geschikte apparatuur/werkomgeving.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-8">
            <AccordionTrigger>Artikel 8 – Ontwikkelen van designs/huisstijl</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Wensen/eisen worden schriftelijk vastgelegd; waar nodig kan worden afgeweken.</li>
                <li>Fasen: concept → visualisatie → feedback → oplevering (conform offerte).</li>
                <li>Gebruikslicentie op eindontwerp; schetsen blijven eigendom van Multichoiceagency.</li>
                <li>Wijzigingen zonder schriftelijke toestemming zijn verboden.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-9">
            <AccordionTrigger>Artikel 9 – Content creation</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Content kan worden gecreëerd; garanties alleen indien schriftelijk overeengekomen.</li>
                <li>Opdrachtgever meldt relevante omstandigheden vooraf.</li>
                <li>Creatie is deels smaak; akkoord impliceert acceptatie van stijl/aanpak.</li>
                <li>Extra materiaal/derden/meerwerk leidt tot aanvullende kosten.</li>
                <li>Externe factoren kunnen kosten/afspraken beïnvloeden.</li>
                <li>Auteursrechten berusten bij Multichoiceagency; licentie binnen afgesproken scope.</li>
                <li>Overdracht van rechten kan alleen na toestemming en aanvullende voorwaarden/kosten.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-10">
            <AccordionTrigger>Artikel 10 – Ontwikkeling Website</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Advies/plan/planning kan worden opgesteld; Opdrachtgever blijft verantwoordelijk voor keuzes.</li>
                <li>Benodigde info/bestanden/software/documentatie tijdig en correct aanleveren.</li>
                <li>Functionaliteiten/kenmerken worden vooraf vastgelegd.</li>
                <li>Voorafgaande goedkeuring kan worden verlangd.</li>
                <li>Gebruiksrecht is niet‑exclusief, niet‑overdraagbaar en niet‑sublicentieerbaar; bronbestanden/broncode worden niet geleverd, tenzij anders overeengekomen.</li>
                <li>Oplevering: expliciet akkoord of stilzwijgend na 7 dagen zonder feedback; herstel na die termijn is meerwerk.</li>
                <li>Tijdens testperiode: gebreken schriftelijk melden; herstel binnen redelijke termijn voor toerekenbare gebreken.</li>
                <li>Wijzigingen na test/oplevering = nieuwe opdracht; revisierondes zijn beperkt conform Overeenkomst.</li>
                <li>Tijdige beoordeling is vereist; vertraging door uitblijven beoordeling is voor Opdrachtgever.</li>
                <li>Resultaat is mede afhankelijk van externe factoren.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-11">
            <AccordionTrigger>Artikel 11 – (Op)Levering</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Vertraging door uitblijven info/medewerking/voorschot etc. geeft recht op termijnverlenging; termijnen zijn niet fataal.</li>
                <li>Schade/kosten uit vertraging zijn voor Opdrachtgever.</li>
                <li>Vereiste goedkeuringen mogen worden afgewacht; tot die tijd mag worden opgeschort.</li>
                <li>Spoed leidt tot meerkosten.</li>
                <li>Levering conform Aanbod, zoveel mogelijk.</li>
                <li>Naam/signering mag op werk worden vermeld; portfolio‑gebruik is toegestaan.</li>
                <li>Oplevering geaccepteerd bij akkoord of na 5 dagen zonder concrete schriftelijke feedback.</li>
                <li>Herstel na deze termijn is meerwerk.</li>
                <li>Bij testtraject geldt eveneens 5 dagen reactietermijn.</li>
                <li>Na oplevering is Opdrachtgever verantwoordelijk voor licenties van derden.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-12">
            <AccordionTrigger>Artikel 12 – Risico-overgang</AccordionTrigger>
            <AccordionContent>
              <p>Risico van verlies/diefstal/beschadiging van gegevens, documenten, programmatuur en/of zaken gaat over op Opdrachtgever zodra deze in diens macht zijn of bij eerste ingebruikname. Vervangende informatiedragers en herinstallatie geschieden tegen (meer)kosten.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-13">
            <AccordionTrigger>Artikel 13 – Garanties</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Diensten conform gangbare normen; garanties alleen voor zover schriftelijk afgesproken.</li>
                <li>Garantie geldt na volledige betaling.</li>
                <li>Bij terecht beroep op garantie: kosteloos herstel/vervanging; verdere schadevergoeding beperkt.</li>
                <li>Geen garantie op foutloze/ononderbroken werking; herstel betreft eigen onderdelen en gemelde gebreken.</li>
                <li>Website wordt “as is” geaccepteerd.</li>
                <li>Gebreken onmiddellijk en gedetailleerd schriftelijk melden.</li>
                <li>Tijdelijke oplossingen kunnen als herstel gelden; verminkte/verloren dataherstel valt buiten garantie.</li>
                <li>Geen verantwoordelijkheid voor onbeschikbaarheid door storingen/overmacht.</li>
                <li>In garantieperiode uitsluitend herstel/vervanging; geen aanvullende schadevergoeding.</li>
                <li>Buiten garantie vallende werkzaamheden worden doorbelast.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-14">
            <AccordionTrigger>Artikel 14 – Social‑mediabeheer</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Opdrachtgever verleent alle noodzakelijke toegang en medewerking.</li>
                <li>Omvang conform afspraak; content na voorafgaande goedkeuring, tenzij anders afgesproken.</li>
                <li>Resultaten afhankelijk van externe factoren; geen recht op ontbinding/schadevergoeding bij tegenvallende resultaten.</li>
                <li>Geen garantie op likes/volgers/views; platformvoorwaarden worden gevolgd.</li>
                <li>Voor werkzaamheden buiten scope kunnen derden worden ingeschakeld of doorverwezen.</li>
                <li>Opdrachtgever blijft verantwoordelijk voor eigen accounts en licenties.</li>
                <li>Content voor posts minimaal 1 week vooraf aanleveren (tenzij anders afgesproken).</li>
                <li>Schommelingen in vindbaarheid/ranking geven geen recht op schadevergoeding.</li>
                <li>Diensten zijn afhankelijk van beleid/regels van derden en worden daarmee in overeenstemming uitgevoerd.</li>
                <li>Wijzigingen door Opdrachtgever/derden zonder afstemming zijn voor risico van Opdrachtgever.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-15">
            <AccordionTrigger>Artikel 15 – Gebruik en onderhoud Website</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Gebruikslicentie voor de duur van de Overeenkomst; niet‑exclusief, niet‑overdraagbaar en niet‑sublicentieerbaar.</li>
                <li>Onderhoud voor zover overeengekomen of noodzakelijk; kan tijdelijke onderbrekingen geven.</li>
                <li>Fouten/storingen schriftelijk melden; herstel volgens procedures.</li>
                <li>Opdrachtgever verleent medewerking waar nodig.</li>
                <li>Opdrachtgever blijft verantwoordelijk voor beheer en gebruik.</li>
                <li>Bestanden mogen worden gecontroleerd op malware; noodzakelijke handelingen zijn toegestaan.</li>
                <li>Onderhoud omvat correctief, preventief en adaptief onderhoud; (tijdelijke) buitengebruikstelling is toegestaan.</li>
                <li>Technische/netwerk‑wijzigingen kunnen invloed hebben op randapparatuur; hiervoor geen aansprakelijkheid.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-16">
            <AccordionTrigger>Artikel 16 – Hosting en e‑mail</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Bij hosting kunnen limieten gelden (opslag, resources).</li>
                <li>Publiceren/verspreiden van onrechtmatige of onacceptabele gegevens is verboden.</li>
                <li>Bij (vermoeden van) strafbare feiten kan aangifte worden gedaan en data worden verstrekt aan bevoegde instanties.</li>
                <li>Misbruik kan leiden tot beëindiging/ontbinding.</li>
                <li>Spam/overlast kan tot blokkade leiden; e‑mailfunctionaliteit kan worden beperkt zonder restitutie.</li>
                <li>Opdrachtgever vrijwaart Multichoiceagency voor schade door misbruik.</li>
                <li>Doorverhuur/doorverkoop van hosting is verboden, tenzij schriftelijk toegestaan.</li>
                <li>Overschrijving opslaglimieten kan tot extra kosten leiden; uitval bij volle quota is voor risico Opdrachtgever.</li>
                <li>Bij extreem verkeer (DDoS/brute force) mag de site tijdelijk offline worden gehaald.</li>
                <li>Schade door ondeskundig gebruik of niet-naleving regels is voor risico Opdrachtgever.</li>
                <li>Gebruik van hosting/e‑mail is op eigen risico; geen aansprakelijkheid voor storingen.</li>
                <li>Geen aansprakelijkheid voor e‑mailproblemen door spamfilters/blacklists/externe providers.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-17">
            <AccordionTrigger>Artikel 17 – Connectiviteit/dataverkeer</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Verbruik wordt periodiek beoordeeld; verhogingen direct mogelijk, verlagingen per contracteinde.</li>
                <li>Dataverkeer is niet overdraagbaar tussen maanden/apparatuur.</li>
                <li>Dataverkeer omvat in‑ en uitgaand verkeer, incl. e‑mail; massamailings via standaard accounts zijn niet toegestaan.</li>
                <li>Overschrijding verkeerslimieten leidt tot meerkosten; uitval bij overschrijding is voor risico Opdrachtgever.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-18">
            <AccordionTrigger>Artikel 18 – Domeinnaamregistratie</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Multichoiceagency kan domeinen registreren; Opdrachtgever is verantwoordelijk voor naleving relevante regels; domein is geen merkrecht.</li>
                <li>Registratie onder regels van de registry; inspanningsverplichting, geen resultaatgarantie.</li>
                <li>Vergoedingen voor registratie/gebruik/houderschap conform afspraak.</li>
                <li>Opdrachtgever vrijwaart voor aanspraken over IE‑rechten en content.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-19">
            <AccordionTrigger>Artikel 19 – Notice & Takedown</AccordionTrigger>
            <AccordionContent>
              <p>Bij inbreuk/onrechtmatigheid mag (een deel van) de dienst direct worden afgesloten of gegevens worden verwijderd, zonder recht op vergoeding.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-20">
            <AccordionTrigger>Artikel 20 – (Online) marketing</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Advertenties (Google/social) kunnen worden opgezet; onrechtmatige of maatschappelijk onbetamelijke inhoud wordt geweigerd.</li>
                <li>Geen resultaatgaranties (posities/leads/omzet).</li>
                <li>SEO/SEA‑budgetten door Opdrachtgever; extra werkzaamheden = meerkosten.</li>
                <li>Diensten afhankelijk van beleid/regels van derden.</li>
                <li>Geen garantie op rankings of continuïteit bij algoritmewijzigingen.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-21">
            <AccordionTrigger>Artikel 21 – Meerwerk en wijzigingen</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Aanpassingen of extra werkzaamheden worden vergoed volgens tarief; aparte Overeenkomst kan worden verlangd.</li>
                <li>Wijzigingen aan een SaaS‑dienst kunnen extra kosten meebrengen; opzegging alleen zoals contractueel bepaald of wettelijk vereist.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-22">
            <AccordionTrigger>Artikel 22 – Prijzen en betaling</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Alle prijzen exclusief btw, tenzij anders vermeld.</li>
                <li>Afrekening tegen (uur)tarief of vaste prijs.</li>
                <li>Bij jaarcontracten doorgaans maandfacturatie; bij wanbetaling kan jaarsom ineens worden opgeëist.</li>
                <li>Derdenkosten (na akkoord) worden doorbelast; automatische incasso mogelijk na toestemming.</li>
                <li>Geen rechten aan begrotingen/offertes, tenzij schriftelijk anders overeengekomen.</li>
                <li>Jaarlijkse indexatie toegestaan; overige prijswijzigingen volgens contract.</li>
                <li>Betalingstermijn: 14 dagen na factuurdatum, zonder verrekening of opschorting.</li>
                <li>Bij faillissement/surseance/insolventie zijn vorderingen direct opeisbaar.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-23">
            <AccordionTrigger>Artikel 23 – Incasso</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Betalingstermijnen zijn fataal; bij overschrijding is Opdrachtgever in verzuim.</li>
                <li>Vanaf verzuimdatum: wettelijke (handels)rente en buitengerechtelijke incassokosten (conform Besluit).</li>
                <li>Redelijke aanvullende, gerechtelijke en executiekosten komen voor rekening van Opdrachtgever.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-24">
            <AccordionTrigger>Artikel 24 – Privacy, gegevensverwerking en beveiliging</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Zorgvuldig omgaan met (persoons)gegevens conform privacyverklaring.</li>
                <li>Opdrachtgever is verwerkingsverantwoordelijke en vrijwaart Multichoiceagency.</li>
                <li>Beveiliging passend naar techniek, gevoeligheid en kosten (indien overeengekomen).</li>
                <li>Partijen handelen conform AVG; verwerkersovereenkomst waar nodig.</li>
                <li>Opdrachtgever handelt verzoeken van betrokkenen af; Multichoiceagency ondersteunt technisch waar mogelijk.</li>
                <li>Geen aansprakelijkheid voor datalekken/AVG‑schendingen, tenzij opzet of grove schuld.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-25">
            <AccordionTrigger>Artikel 25 – Opschorting</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Gegevens/bestanden mogen worden achtergehouden bij openstaande betalingen.</li>
                <li>Bij verzuim mag Multichoiceagency verplichtingen opschorten; schade hierdoor is niet verhaalbaar.</li>
                <li>Bij geschillen/opzegging kan (tijdelijke) blokkade/offline plaatsing volgen tot volledige nakoming.</li>
                <li>Betalingsverplichtingen lopen door tijdens opschorting.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-26">
            <AccordionTrigger>Artikel 26 – Opzegging</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Door Opdrachtgever: per e‑mail naar <a href="mailto:info@multichoiceagency">info@multichoiceagency</a> met onderwerp “Opzegging”. Effectief na volledige betaling.</li>
                <li>Verificatie van betaling kan worden verlangd.</li>
                <li>Bij opzegging zonder volledige betaling blijven verplichtingen bestaan en kunnen incassostappen volgen.</li>
                <li>Door Multichoiceagency: bij ernstige schending (bijv. wanbetaling) kan het contract worden beëindigd.</li>
                <li>Na geldige opzegging vervallen gebruiksrechten, tenzij schriftelijk anders overeengekomen.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-27">
            <AccordionTrigger>Artikel 27 – Overmacht</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Geen aansprakelijkheid bij niet‑nakoming door overmacht.</li>
                <li>Overmacht omvat o.a. storingen bij toeleveranciers, gebrekkige zaken/programmatuur van derden, overheidsmaatregelen, netwerkstoringen (incl. cyberaanvallen/DDoS), natuurrampen, oorlog/terrorisme, vervoersproblemen, epidemieën/pandemieën en andere buiteninvloeden.</li>
                <li>Overmacht geeft geen recht op ontbinding.</li>
                <li>Reeds geleverde prestaties mogen afzonderlijk worden gefactureerd.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-28">
            <AccordionTrigger>Artikel 28 – Aansprakelijkheid (beperking)</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Alleen bij expliciet gegarandeerd resultaat dat niet is gehaald kan sprake zijn van toerekenbare tekortkoming.</li>
                <li>Na schriftelijke ingebrekestelling met redelijke hersteltermijn pas schadeplichtig.</li>
                <li>Aansprakelijkheid beperkt tot factuurwaarde van de betreffende opdracht (max. 12 maanden voorafgaand) voor directe schade.</li>
                <li><strong>Uitsluitingen:</strong> gevolg‑/indirecte schade, bedrijfs‑ en stagnatieschade, gederfde winst, gemiste besparingen, dataverlies, termijnoverschrijding, vertragings‑ en renteschade.</li>
                <li>Geen aansprakelijkheid voor onjuiste/onvolledige info op websites van ons of derden.</li>
                <li>Geen aansprakelijkheid voor storingen of onbeschikbaarheid van de Website.</li>
                <li>Geen aansprakelijkheid voor plug‑ins/derden‑software of wijzigingen zonder toestemming.</li>
                <li>Opdrachtgever is zelf verantwoordelijk voor beveiliging van apparatuur/wachtwoorden.</li>
                <li>Geen aansprakelijkheid voor gevolgen van wijzigingen aan social‑media‑accounts of platform‑updates.</li>
                <li>Verstrekking van inloggegevens is op eigen risico.</li>
                <li>Door Opdrachtgever ingeschakelde derden vallen buiten onze aansprakelijkheid.</li>
                <li>Claims vervallen indien niet binnen één jaar na einde Overeenkomst schriftelijk gemeld.</li>
                <li>Daarnaast beperkt tot uitkering door verzekering; bij geen dekking: maximaal de bedongen prijs (excl. btw) met absoluut maximum van € 3.000.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-29">
            <AccordionTrigger>Artikel 29 – Intellectuele eigendom</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Alle IE‑rechten op geleverde/ontwikkelde werken berusten bij Multichoiceagency of licentiegevers.</li>
                <li>Opdrachtgever krijgt uitsluitend verleende gebruiksrechten; overige rechten voorbehouden.</li>
                <li>Zonder toestemming is wijzigen, decompileren, reverse‑engineeren, verveelvoudigen of openbaar maken buiten de licentie verboden.</li>
                <li>Verwijderen/aanpassen van IE‑aanduidingen is niet toegestaan.</li>
                <li>Inbreuk leidt tot een niet‑verminderbare boete van € 2.500 per overtreding per dag, onverminderd volledige schadevergoeding.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-30">
            <AccordionTrigger>Artikel 30 – Geheimhouding</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Vertrouwelijke informatie blijft geheim; dit geldt ook na beëindiging van de Overeenkomst.</li>
                <li>Gebruik uitsluitend voor het verstrekte doel; geen openbaarmaking aan derden, behalve waar wet/overheid dit vereist.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-31">
            <AccordionTrigger>Artikel 31 – Non‑sollicitatie / Relatiebeding</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Tijdens de Overeenkomst en 12 maanden daarna geen medewerkers/ingeschakelde derden benaderen of in dienst nemen zonder toestemming.</li>
                <li>Boete: € 5.000 per overtreding plus € 500 per dag, onverminderd volledige schadevergoeding.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-32">
            <AccordionTrigger>Artikel 32 – Toepasselijk recht en forumkeuze</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Uitsluitend Nederlands recht van toepassing.</li>
                <li>Geschillen voor de bevoegde rechter in het arrondissement van onze vestigingsplaats (thans Rotterdam), tenzij dwingend recht anders voorschrijft.</li>
                <li>Eerst trachten in der minne te schikken.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artikel-33">
            <AccordionTrigger>Artikel 33 – Slot‑ en overige bepalingen</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Nietigheid/vernietigbaarheid van een bepaling laat de rest in stand; vervangende bepaling met gelijke strekking treedt ervoor in de plaats.</li>
                <li>Voorwaarden mogen eenzijdig worden gewijzigd; na kennisgeving gelden ze ook voor bestaande Overeenkomsten met redelijke termijnen. Bij wezenlijke nadelige wijzigingen kan Opdrachtgever per einde lopende termijn opzeggen, voor zover wettelijk toegestaan.</li>
                <li>Elektronische communicatie (e‑mail) geldt als schriftelijk.</li>
                <li>De Nederlandse tekst prevaleert boven vertalingen.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Footer note after last article */}
        <div className="mt-12 rounded-xl border bg-gray-50 p-6 text-sm text-gray-700">
          <p className="font-medium">Contact voor opzeggingen en juridische correspondentie</p>
          <p className="mt-1">
            E‑mail: <a className="underline" href="mailto:info@multichoiceagency">info@multichoiceagency</a> • Tel: <a className="underline" href="tel:0103220410">010 322 04 10</a><br />
            Adres: Johannes Brandstraat 28, 3072BH Rotterdam
          </p>
          <p className="mt-2 text-gray-500">Laatst bijgewerkt: 19‑08‑2025</p>
        </div>
      </section>
    </main>
  )
}