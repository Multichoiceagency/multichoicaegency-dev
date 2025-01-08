import React from 'react'
import Image from "next/image"
import Link from 'next/link'

export default function HeroNieuw() {
  return (
    <section className="bg-orange-50">
        
        <div className="relative py-36">
            <Image className="hidden md:block absolute top-0 left-0 mt-28 w-32 lg:w-64 xl:w-auto" src="/flow-assets/headers/header-4-left-top.png" alt="" width={300} height={300} />
            <Image className="hidden md:block absolute top-0 right-0 mt-20 w-32 lg:w-64 xl:w-auto" src="/flow-assets/headers/header-4-right-top.png" alt="" width={300} height={300} />
            <div className="container mx-auto px-4 relative">
                <div className="max-w-lg xl:max-w-xl mx-auto mb-12 lg:mb-0 text-center">
                    <div className="flex mb-6 items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                            <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
                        </svg>
                        <span className="ml-2 text-sm font-medium">Powering Tomorrow</span>
                    </div>
                    <h1 className="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight mb-8">The Future of Green Energy</h1>
                    <p className="text-lg text-gray-700 mb-10">Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p>
                    <div className="flex flex-col sm:flex-row justify-center">
                        <Link href="#" className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200">See our solutions</Link>
                        <Link href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200">Get in touch</Link>
                    </div>
                </div>
                <div className="flex -mx-4 items-end relative">
                    <div className="w-1/3 xs:w-1/2 lg:w-auto px-4">
                        <Image className="block h-32 lg:h-48 w-auto" src="/flow-assets/headers/header-4-bottom-lleft.png" alt="" width={200} height={192} />
                    </div>
                    <div className="w-2/3 xs:w-1/2 lg:w-auto ml-auto px-4">
                        <Image className="block w-1/2 md:w-64 lg:w-auto ml-auto" src="/flow-assets/headers/header-4-bottom-right.png" alt="" width={300} height={300} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full py-32 bg-gradient-to-t from-orange-50 to-transparent"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

