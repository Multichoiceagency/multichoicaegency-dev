import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

function ContactOpnemen() {
  return (
    <div className='bg-white dark:bg-gray-700 py-12'>
    <div className="max-w-xl mx-auto text-center dark:bg-white">
    <Link href="www.multichoiceagency.nl">
<span className="inline-block ml-10">
<Image src="/logos/logo.png" 
  alt={""}
    height={800}
    width={400}>
  </Image>
</span>
</Link>

<h5 className="text-4xl font-medium mb-4 text-black dark:text-white">🔥 Klaar om jouw digitale toekomst te bouwen?</h5>
<p className="text-gray-700">
  <span>Laten we samen een impact maken. Neem vandaag nog contact met ons op en ontdek hoe we jouw visie kunnen realiseren!</span>
  <Link href="contact" className="inline-block text-lime-500 font-medium underline">
    Contactpagina
  </Link>
  <span> bezoeken of bel onze klantenservice op </span>
  <Link href="www.multichoiceagency.nl">
  <span className="text-lime-500 font-medium">010 322 04 10</span>
  </Link>
  <span>
  Ons toegewijde team staat klaar om u te helpen bij het realiseren van uw perfecte backend oplossing.
  </span>
  </p>
  <div className="w-full xl:w-auto ml-auto px-4 py-6 xl:text-center">
     <Link
    href="/offerte-aanvragen"
    className="inline-block w-full dark:bg-green-700 dark:hover:text-black sm:w-auto py-4 px-6 text-center font-heading font-medium text-base text-gray-900 dark:text-white border border-gray-900 dark:border-white hover:bg-green-900 hover:text-white hover:text-green-500 hover:border-green-500 rounded-sm transition duration-150"
    >
    Start jouw project vandaag! 🚀
    </Link>
    </div>
</div>
</div>
  )
}

export default ContactOpnemen

