export interface Vacature {
  slug: string
  title: string
  department: string
  location: string
  type: "Full-time" | "Part-time" | "Internship"
  postedDate: string // YYYY-MM-DD
  closingDate?: string // YYYY-MM-DD
  experienceLevel: "Junior" | "Medior" | "Senior" | "Lead"
  shortDescription: string
  fullDescription: string
  responsibilities: string[]
  qualificationsRequired: string[]
  qualificationsPreferred?: string[]
  whatWeOffer: string[]
  applyLink?: string
  applyEmail?: string
  // Nieuwe salarisvelden
  salaryMin?: number
  salaryMax?: number
  salaryPeriod?: "jaar" | "maand" | "uur"
  salaryCurrency?: string // Standaard 'EUR' indien niet opgegeven
}

export const vacaturesData: Vacature[] = [
  {
    slug: "nextjs-developer-senior",
    title: "Senior Next.js Developer",
    department: "Web Development",
    location: "Amsterdam / Remote",
    type: "Full-time",
    postedDate: "2025-06-01",
    experienceLevel: "Senior",
    salaryMin: 4500,
    salaryMax: 6500,
    salaryPeriod: "maand",
    salaryCurrency: "EUR",
    shortDescription:
      "Bouw high-performance webapplicaties met Next.js en draag bij aan innovatieve projecten voor toonaangevende klanten.",
    fullDescription:
      "<p>Als Senior Next.js Developer bij Multichoiceagency ben je de drijvende kracht achter de technische realisatie van complexe webplatformen. Je werkt nauw samen met designers, projectmanagers en andere developers om state-of-the-art oplossingen te bouwen die onze klanten helpen hun digitale ambities waar te maken.</p><p>Je bent niet alleen een expert in Next.js, React en TypeScript, maar hebt ook een scherp oog voor performance, schaalbaarheid en codekwaliteit. Je deelt graag je kennis en coacht medior/junior developers.</p>",
    responsibilities: [
      "Ontwikkelen en onderhouden van complexe frontend applicaties met Next.js en React.",
      "Technische architectuur ontwerpen en implementeren voor nieuwe projecten.",
      "Zorgen voor optimale performance, SEO en toegankelijkheid.",
      "Samenwerken in een multidisciplinair team (design, backend, PM).",
      "Code reviews uitvoeren en bijdragen aan de verbetering van onze development standaarden.",
      "Mentoren van junior en medior developers.",
    ],
    qualificationsRequired: [
      "Minimaal 5 jaar ervaring met frontend development, waarvan minimaal 3 jaar met React en Next.js.",
      "Diepgaande kennis van TypeScript, JavaScript (ES6+), HTML5, CSS3.",
      "Ervaring met state management (bijv. Zustand, Redux, Context API).",
      "Ervaring met het bouwen en consumeren van RESTful APIs en GraphQL.",
      "Kennis van CI/CD pipelines en Git.",
      "Uitstekende probleemoplossende vaardigheden en een proactieve houding.",
    ],
    qualificationsPreferred: [
      "Ervaring met headless CMS systemen (Contentful, Strapi, Sanity).",
      "Kennis van server-side rendering (SSR) en static site generation (SSG).",
      "Ervaring met testing frameworks (Jest, React Testing Library, Cypress).",
      "Affiniteit met UI/UX design principes.",
    ],
    whatWeOffer: [
      "Een competitief salaris en uitstekende secundaire arbeidsvoorwaarden.",
      "Werken aan uitdagende projecten voor diverse, interessante klanten.",
      "Veel ruimte voor persoonlijke ontwikkeling en doorgroeimogelijkheden.",
      "Een inspirerende en informele werksfeer in een getalenteerd team.",
      "Flexibele werktijden en mogelijkheid tot (deels) remote werken.",
      "Moderne tech stack en de nieuwste tools.",
      "Regelmatige teamuitjes en kennissessies.",
    ],
    applyEmail: "careers@multichoice.nl",
  },
  {
    slug: "ui-ux-designer-medior",
    title: "Medior UI/UX Designer",
    department: "Design & Creatie",
    location: "Amsterdam",
    type: "Full-time",
    postedDate: "2025-05-20",
    experienceLevel: "Medior",
    salaryMin: 2000,
    salaryMax: 3500,
    salaryPeriod: "maand",
    shortDescription:
      "Vertaal complexe vraagstukken naar intuïtieve en esthetisch aantrekkelijke digitale ervaringen voor web en mobiel.",
    fullDescription:
      "<p>Als Medior UI/UX Designer bij Multichoiceagency speel je een cruciale rol in het ontwerpproces van onze digitale producten. Je bent verantwoordelijk voor het creëren van wireframes, prototypes en high-fidelity designs die zowel gebruiksvriendelijk als visueel verbluffend zijn.</p><p>Je werkt nauw samen met klanten, developers en strategen om ervoor te zorgen dat het eindproduct perfect aansluit bij de gebruikersbehoeften en bedrijfsdoelstellingen.</p>",
    responsibilities: [
      "Uitvoeren van user research en vertalen van inzichten naar designoplossingen.",
      "Creëren van user flows, wireframes, mockups en interactieve prototypes.",
      "Ontwerpen van visueel aantrekkelijke en consistente user interfaces (UI).",
      "Bewaken en doorontwikkelen van design systems.",
      "Presenteren van designkeuzes aan klanten en interne stakeholders.",
      "Samenwerken met developers om de implementatie van designs te waarborgen.",
    ],
    qualificationsRequired: [
      "Minimaal 3 jaar ervaring als UI/UX Designer.",
      "Een sterk portfolio dat je designproces en vaardigheden demonstreert.",
      "Ervaring met design tools zoals Figma, Sketch, of Adobe XD.",
      "Kennis van user-centered design principes en methodologieën.",
      "Uitstekende communicatieve en presentatievaardigheden.",
      "Oog voor detail en passie voor esthetiek en gebruiksvriendelijkheid.",
    ],
    qualificationsPreferred: [
      "Ervaring met het ontwerpen voor complexe webapplicaties of SaaS-producten.",
      "Kennis van HTML/CSS en de technische mogelijkheden/beperkingen van webdevelopment.",
      "Ervaring met het uitvoeren van gebruikerstesten.",
    ],
    whatWeOffer: [
      "Een creatieve en dynamische werkomgeving.",
      "Samenwerken met een gepassioneerd team aan diverse projecten.",
      "Ruimte voor eigen initiatief en professionele groei.",
      "Een goed salaris en secundaire voorwaarden.",
      "Inspirerende werkplek in Amsterdam.",
    ],
    applyEmail: "careers@multichoice.nl",
  },
  {
    slug: "ai-integratie-specialist",
    title: "AI Integratie Specialist",
    department: "AI & Innovatie",
    location: "Remote / Amsterdam",
    type: "Full-time",
    postedDate: "2025-06-05",
    experienceLevel: "Medior",
    salaryMin: 2000,
    salaryMax: 4500,
    salaryPeriod: "maand",
    shortDescription:
      "Implementeer en integreer geavanceerde AI-oplossingen (zoals chatbots en data-analyse tools) in de systemen van onze klanten.",
    fullDescription:
      "<p>Als AI Integratie Specialist ben je de brug tussen de potentie van kunstmatige intelligentie en de praktische toepassing ervan voor onze klanten. Je analyseert bedrijfsprocessen, identificeert kansen voor AI en implementeert oplossingen die meetbare resultaten opleveren.</p><p>Je hebt ervaring met diverse AI-platformen en -technologieën en bent in staat om deze naadloos te integreren met bestaande IT-infrastructuren.</p>",
    responsibilities: [
      "Analyseren van klantbehoeften en adviseren over AI-toepassingen.",
      "Ontwerpen, configureren en implementeren van AI-modellen en -tools (bijv. LLM's, chatbots, machine learning modellen).",
      "Integreren van AI-oplossingen met CRM, ERP en andere bedrijfssystemen via API's.",
      "Data-analyse en -visualisatie om inzichten uit AI-systemen te presenteren.",
      "Monitoren en optimaliseren van de prestaties van geïmplementeerde AI-oplossingen.",
      "Op de hoogte blijven van de laatste ontwikkelingen in AI en machine learning.",
    ],
    qualificationsRequired: [
      "Bachelor of Master in Computer Science, AI, Data Science of een gerelateerd veld.",
      "Minimaal 2-3 jaar ervaring met het implementeren van AI- of machine learning-projecten.",
      "Ervaring met Python en relevante AI/ML libraries (bijv. TensorFlow, PyTorch, scikit-learn, LangChain).",
      "Kennis van cloud platforms (AWS, Azure, GCP) en hun AI-diensten.",
      "Ervaring met API-integraties.",
      "Sterke analytische en probleemoplossende vaardigheden.",
    ],
    qualificationsPreferred: [
      "Ervaring met Natural Language Processing (NLP) en Large Language Models (LLMs).",
      "Kennis van data engineering en MLOps.",
      "Consultancy-ervaring of klantgerichte rollen.",
    ],
    whatWeOffer: [
      "Een vooruitstrevende rol in een snelgroeiend vakgebied.",
      "Werken met cutting-edge AI-technologieën.",
      "Mogelijkheden om impact te maken bij diverse klanten.",
      "Continue leer- en ontwikkelingsmogelijkheden.",
      "Flexibele werklocatie (remote/Amsterdam).",
      "Een competitief salarispakket.",
    ],
    applyEmail: "careers@multichoice.nl",
  },
]

export const getVacatureBySlug = (slug: string): Vacature | undefined => {
  return vacaturesData.find((vacature) => vacature.slug === slug)
}

// Helper functie om salaris te formatteren
export const formatSalaryIndication = (vacature: Vacature): string | null => {
  const { salaryMin, salaryMax, salaryPeriod, salaryCurrency = "EUR" } = vacature
  const currencySymbol = salaryCurrency === "EUR" ? "€" : salaryCurrency // Eenvoudige currency check

  if (!salaryMin && !salaryMax) {
    return "Marktconform" // Of null als je niets wilt tonen
  }

  let indication = ""
  if (salaryMin && salaryMax) {
    indication = `${currencySymbol}${salaryMin.toLocaleString("nl-NL")} - ${currencySymbol}${salaryMax.toLocaleString("nl-NL")}`
  } else if (salaryMin) {
    indication = `Vanaf ${currencySymbol}${salaryMin.toLocaleString("nl-NL")}`
  } else if (salaryMax) {
    indication = `Tot ${currencySymbol}${salaryMax.toLocaleString("nl-NL")}`
  }

  if (salaryPeriod) {
    indication += ` per ${salaryPeriod}`
  }
  return indication
}
