import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getVacatureBySlug, vacaturesData, formatSalaryIndication } from "@/lib/vacatures" // Importeer formatSalaryIndication en Vacature type
import { Briefcase, MapPin, Clock, CalendarDays, Award, CheckCircle, ArrowLeft, Mail, CreditCard } from 'lucide-react' // CreditCard icoon voor salaris
import VacancyDetailHero from "@/components/vacancy-detail-hero"

interface VacatureDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: VacatureDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const vacature = getVacatureBySlug(slug)

  if (!vacature) {
    return {
      title: "Vacature niet gevonden",
    }
  }

  return {
    title: `${vacature.title} | Vacatures - Multichoiceagency`,
    description: vacature.shortDescription,
    openGraph: {
      title: `${vacature.title} | Multichoiceagency`,
      description: vacature.shortDescription,
      url: `/vacatures/${vacature.slug}`,
      type: "article",
      publishedTime: vacature.postedDate,
    },
  }
}

export async function generateStaticParams() {
  return vacaturesData.map((vacature) => ({
    slug: vacature.slug,
  }))
}

const DetailItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | null }) => {
  if (!value) return null // Render niets als er geen waarde is
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-6 h-6 text-lime-600 dark:text-lime-400 mr-3 mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="font-semibold text-gray-800 dark:text-gray-100">{value}</p>
      </div>
    </div>
  )
}

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start mb-2">
    <CheckCircle className="w-5 h-5 text-lime-500 dark:text-lime-400 mr-3 mt-1 flex-shrink-0" />
    <span className="text-gray-700 dark:text-gray-300">{children}</span>
  </li>
)

export default async function VacatureDetailPage({ params }: VacatureDetailPageProps) {
  const { slug } = await params
  const vacature = getVacatureBySlug(slug)

  if (!vacature) {
    notFound()
  }

  const salaryIndicationText = formatSalaryIndication(vacature)

  return (
    <>
      <VacancyDetailHero
        title={vacature.title}
        department={vacature.department}
        location={vacature.location}
        jobType={vacature.type}
      />
      <div className="bg-white dark:bg-gray-950 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button
                variant="outline"
                asChild
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-gray-300 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-500"
              >
                <Link href="/vacatures">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Terug naar alle vacatures
                </Link>
              </Button>
            </div>

            <article className="bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800">
              <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Details van de functie</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <DetailItem icon={<Briefcase />} label="Afdeling" value={vacature.department} />
                  <DetailItem icon={<MapPin />} label="Locatie" value={vacature.location} />
                  <DetailItem icon={<Clock />} label="Type" value={vacature.type} />
                  <DetailItem icon={<Award />} label="Niveau" value={vacature.experienceLevel} />
                  <DetailItem
                    icon={<CalendarDays />}
                    label="Geplaatst op"
                    value={new Date(vacature.postedDate).toLocaleDateString("nl-NL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  />
                  {/* Salarisindicatie toegevoegd */}
                  {salaryIndicationText && (
                    <DetailItem icon={<CreditCard />} label="Salarisindicatie" value={salaryIndicationText} />
                  )}
                  {vacature.closingDate && (
                    <DetailItem
                      icon={<CalendarDays />}
                      label="Sluitingsdatum"
                      value={new Date(vacature.closingDate).toLocaleDateString("nl-NL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    />
                  )}
                </div>
              </header>

              <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Functieomschrijving</h2>
                <div dangerouslySetInnerHTML={{ __html: vacature.fullDescription }} />
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Jouw Verantwoordelijkheden
                </h2>
                <ul className="space-y-2">
                  {vacature.responsibilities.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Jouw Kwalificaties</h2>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3">Vereist:</h3>
                <ul className="space-y-2 mb-6">
                  {vacature.qualificationsRequired.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </ul>
                {vacature.qualificationsPreferred && vacature.qualificationsPreferred.length > 0 && (
                  <>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3">Pré:</h3>
                    <ul className="space-y-2">
                      {vacature.qualificationsPreferred.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                      ))}
                    </ul>
                  </>
                )}
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Wat Wij Bieden</h2>
                <ul className="space-y-2">
                  {vacature.whatWeOffer.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </ul>
              </section>

              <footer className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Geïnteresseerd? Solliciteer nu!
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Klaar om de volgende stap in je carrière te zetten bij Multichoiceagency? We horen graag van je!
                </p>
                {vacature.applyLink && (
                  <Button
                    size="lg"
                    asChild
                    className="bg-lime-500 hover:bg-lime-600 text-gray-900 dark:text-white dark:bg-lime-600 dark:hover:bg-lime-700"
                  >
                    <Link href={vacature.applyLink} target="_blank" rel="noopener noreferrer">
                      Direct Solliciteren
                    </Link>
                  </Button>
                )}
                {vacature.applyEmail && !vacature.applyLink && (
                  <Button
                    size="lg"
                    asChild
                    className="bg-lime-500 hover:bg-lime-600 text-gray-900 dark:text-white dark:bg-lime-600 dark:hover:bg-lime-700"
                  >
                    <Link href={`mailto:${vacature.applyEmail}?subject=Sollicitatie: ${vacature.title}`}>
                      <Mail className="w-5 h-5 mr-2" /> Solliciteer via E-mail
                    </Link>
                  </Button>
                )}
                {!vacature.applyLink && !vacature.applyEmail && (
                  <p className="text-gray-500 dark:text-gray-400">
                    Contacteer ons voor meer informatie over hoe te solliciteren.
                  </p>
                )}
              </footer>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}