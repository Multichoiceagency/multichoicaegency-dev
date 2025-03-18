import HeroNieuw from '@/components/HeroNieuw'
import OfferteAanvragenPage from '@/components/offerte-aanvragen'
import React from 'react'

function OfferteAanvragen() {
  return (
<>      <HeroNieuw
        title={"Offerte Aanvragen"}
        description={
          "Wilt u uw digitale ambities realiseren? Vraag vandaag nog een vrijblijvende offerte aan voor onze op maat gemaakte digitale oplossingen. Ons team van experts staat klaar om u te helpen bij het ontwerpen en implementeren van efficiënte, schaalbare en veilige systemen die perfect aansluiten op uw bedrijfsdoelstellingen."
        }
        buttonText={"Terug naar diensten"}
        buttonLink={"diensten"}
        videoSrc={"https://cdn.dribbble.com/userupload/17855128/file/large-45aef91c794d3dfe747127edc550fd15.mp4"}
      />
      <OfferteAanvragenPage />
    </>
  )
}

export default OfferteAanvragen
