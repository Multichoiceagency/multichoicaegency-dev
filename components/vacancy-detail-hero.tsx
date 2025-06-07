interface VacancyDetailHeroProps {
  title: string
  department: string
  location: string
  jobType: string
}

export default function VacancyDetailHero({ title, department, location, jobType }: VacancyDetailHeroProps) {
  return (
    <section className="bg-green-950 dark:bg-lime-600 text-white dark:text-black py-32 md:py-56">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-lg md:text-xl opacity-90">
          {department} &bull; {location} &bull; {jobType}
        </p>
      </div>
    </section>
  )
}
