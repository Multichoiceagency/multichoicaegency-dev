import HeroNieuw from '@/components/Hero-section'
import OverOns from '@/components/OverOns'
import React from 'react'

function page() {
  return (
    <section>
    <HeroNieuw
    title={"Over ons"}
    description={
      " Met onze expertise in maatwerk webdesign, backend development en digitale strategieën, helpen we bedrijven en ondernemers om hun online doelen te realiseren."
    }
    buttonText={"Offerte aanvragen"}
    buttonLink={"/offerte-aanvragen"}
    videoSrc={
      "https://cdn.dribbble.com/userupload/7872434/file/original-a1397ab48ba1331e935ca52bcab129fa.mp4"
    }
  />
  <OverOns />
  </section>
  )
}

export default page