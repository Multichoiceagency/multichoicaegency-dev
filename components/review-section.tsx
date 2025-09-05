'use client'

import { useState } from 'react'
import { Star, Quote, User, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// Genereer random datum vanaf 2013
function getRandomDate() {
  const start = new Date(2013, 0, 1)
  const end = new Date()
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return date.toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Dummy bedrijfsnamen en teksten
const businessNames = [
  'Lionzone', 'Myserybox', 'Autoservice Maaspoort', 'Thuiszorg D.R.', 'Volta Elektrotechniek', 'Autotrader Voorschoten', 'WJ Webdesign', 'Bin Groothandel',
  'Zonwering Experts', 'CleanCar Nederland', 'Huisstijl Helden', 'TechnoFix BV', 'Bouwbedrijf De Brug', 'Fysiotherapie Zuid', 'Bloem & Groen', 'Klusbedrijf Hoekstra',
  'ICT Partners', 'Admino Boekhouding', 'Digitale Makers', 'CodeKlaar', 'Makelaarsgroep NL', 'LogiTrans', 'FastFood Solutions', 'Drukkerij van Dam', 'Green Energy Pro',
  'TravelWide', 'SafeHome Security', 'Kinderopvang De Regenboog', 'Juridisch Punt', 'De Schoonmaak Express',
]

const feedbackTexts = [
  'Top service! Echt een aanrader.',
  'Snel, professioneel en vriendelijk geholpen.',
  'Website is strak en functioneert perfect!',
  'Korte lijntjes en duidelijke communicatie.',
  'Denkt mee en levert topkwaliteit.',
  'Heel tevreden met de samenwerking!',
  'Onze omzet is gestegen sinds de nieuwe site.',
  'Support is altijd bereikbaar en behulpzaam.',
  'Een creatieve en technische partij in één.',
  'Heldere strategie en mooi eindresultaat.',
]

const baseReviews = [
  {
    id: 1,
    name: 'Lionzone',
    rating: 5,
    text: 'Snelle service en fixt het allemaal super snel! Thanks',
    image: '',
    date: getRandomDate(),
  },
  {
    id: 2,
    name: 'Myserybox',
    rating: 5,
    text: 'Levert uitstekend en professioneel werk',
    image: '',
    date: getRandomDate(),
  },
  {
    id: 3,
    name: 'Autoservice Maaspoort',
    rating: 5,
    text: 'Goede samenwerking met Enes, korte lijnen en mooi website als eindresultaat!',
    image: '',
    date: getRandomDate(),
  },
  {
    id: 4,
    name: 'Thuiszorg D.R.',
    rating: 5,
    text: 'Top Service. Altijd bereikbaar en erg behulpzaam',
    image: '',
    date: getRandomDate(),
  },
  {
    id: 5,
    name: 'Volta Elektrotechniek',
    rating: 5,
    text: 'Heeft een website met een top layout gemaakt!',
    image: '',
    date: getRandomDate(),
  },
  {
    id: 6,
    name: 'Autotrader Voorschoten',
    rating: 5,
    text: 'Hele strakke website gemaakt erg blij mee!',
    image: '',
    date: getRandomDate(),
  },
  {
    id: 7,
    name: 'WJ Webdesign',
    rating: 5,
    text: 'Fijne samenwerking met Enes, aardige gozer en snelle contactlijntjes',
    image: '',
    date: getRandomDate(),
  },
  {
    id: 8,
    name: 'Bin Groothandel',
    rating: 5,
    text: 'Geeft veel aandacht aan werk. Heel behulpzaam en verricht top werk!',
    image: '',
    date: getRandomDate(),
  },
]

// Genereer 100 extra reviews
const generatedReviews = Array.from({ length: 100 }, (_, i) => ({
  id: i + 9,
  name: businessNames[i % businessNames.length],
  rating: 5,
  text: feedbackTexts[i % feedbackTexts.length],
  image: '',
  date: getRandomDate(),
}))

const allReviews = [...baseReviews, ...generatedReviews]

export default function ReviewSection() {
  const [visibleCount, setVisibleCount] = useState(6)
  const visibleReviews = allReviews.slice(0, visibleCount)

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  return (
    <section className="bg-white text-[#1a2a18] py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-[#e4ecd4] text-[#1a2a18] rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Klantervaringen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Wat onze klanten zeggen</h2>
          <p className="text-gray-600 text-lg">Ontdek waarom bedrijven door heel Nederland kiezen voor onze digitale oplossingen.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence initial={false}>
            {visibleReviews.map((r, index) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#f8faf8] border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#a6e267] mb-4" />
                <p className="text-gray-800 text-base mb-6 leading-relaxed">{r.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e4ecd4] flex items-center justify-center">
                    {r.image ? (
                      <Image src={r.image} alt={r.name} width={48} height={48} className="rounded-full object-cover" />
                    ) : (
                      <User className="text-[#1a2a18] w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a2a18]">{r.name}</h4>
                    <p className="text-sm text-gray-500">{r.date}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < r.rating ? 'text-[#a6e267]' : 'text-gray-300'}`}
                          fill={i < r.rating ? '#a6e267' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < allReviews.length && (
          <div className="text-center mt-16">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#a6e267] text-[#1a2a18] hover:bg-[#b7ee79] rounded-full font-medium transition-colors"
            >
              Laad meer reviews
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
