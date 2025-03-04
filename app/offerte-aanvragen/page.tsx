import HeroNieuw from '@/components/HeroNieuw'
import OfferteAanvragenPage from '@/components/offerte-aanvragen'
import React from 'react'

function OfferteAanvragen() {
  return (
    <div className="bg-white text-black">
      <HeroNieuw
        title={"Backend Development & Custom Software"}
        description={
          "Versterk uw digitale infrastructuur met krachtige backend oplossingen. Onze expertise in backend development en custom software zorgt voor schaalbare, veilige en efficiënte systemen die uw bedrijf naar het volgende niveau tillen. Ontdek hoe wij uw ideeën kunnen omzetten in robuuste digitale realiteit."
        }
        buttonText={"Offerte aanvragen"}
        buttonLink={"/offerte-aanvragen"}
        videoSrc={"https://cdn.dribbble.com/userupload/17855128/file/large-45aef91c794d3dfe747127edc550fd15.mp4"}
      />
      <OfferteAanvragenPage />
    </div>
  )
}

export default OfferteAanvragen
