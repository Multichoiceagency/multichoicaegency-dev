"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="w-screen h-screen animated-background bg-gradient-to-b from-black to-green-700 text-white ">
<div className="mx-auto">
{/* Newsletter Section */}
        <div className="max-w-[1800px] mx-auto px-4 py-16 inset-7">
          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
            {/* Web Development */}
            <div className="text-white px-4 py-6 bg-white/25 backdrop-blur-md rounded-md w-3/4 shadow-lg transform origin-center hover:skew-y-3 hover:scale-110 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4">Web development</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">UI/UX Design</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Responsief webdesign</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Maatwerk websites</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Frontend Development</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Backend Development</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">E-commerce website</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Headless e-commerce</Link></li>
              </ul>
            </div>

            {/* Online Marketing */}
            <div className="text-white px-4 py-6 bg-white/25 backdrop-blur-md rounded-md w-3/4 shadow-lg transform origin-center hover:skew-y-3 hover:scale-110 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4">Online marketing</h3>
              <ul className="space-y-2 ">
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Ess Online Marketing</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Ess Media</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Ess Drukwerk</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Internetbureau Rotterdam</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">ADS</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">SEO</Link></li>
              </ul>
            </div>

            {/* Over ons */}
            <div className="text-white px-4 py-6 bg-white/25 backdrop-blur-md rounded-md w-3/4 shadow-lg transform origin-center hover:skew-y-3 hover:scale-110 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4">Over ons</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Ons verhaal</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Onze werkwijze</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Ons team</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Vacatures</Link></li>
              </ul>
            </div>

            {/* Kenniscentrum */}
            <div className="text-white px-4 py-6 bg-white/25 backdrop-blur-md rounded-md w-3/4 shadow-lg transform origin-center hover:skew-y-3 hover:scale-110 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4">Kenniscentrum</h3>
              <ul className="space-y-2 rounded-md w-3/4">
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold ">Helpdesk</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Veelgestelde vragen</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Kennisbank</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Downloads</Link></li>
                <li><Link href="#" className="hover:text-teal-900 hover:font-bold">Powerpoint</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-gray-100">
            {/* Contact */}
            <div className="text-white px-4 py-6 bg-white/25 backdrop-blur-md rounded-md w-3/4 shadow-lg transform origin-center hover:skew-y-3 hover:scale-110 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 ">Contact</h3>
              <p className="font-semibold mb-2">Multichoiceagency B.V.</p>
              <p>Edisonstraat 5c</p>
              <p className="mb-4">Rotterdam</p>
              <p className="italic mb-2">Wij bedienen onze klanten door heel Nederland</p>
              <p className="mt-4">
                <Link href="mailto:sales@multichoiceagency.nl" className="hover:text-teal-900 hover:font-bold ">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" /> sales@multichoiceagency.nl
                </Link>
              </p>
              <p>
                <Link href="tel:0103220410" className="hover:text-teal-900 hover:font-bold">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" /> 0103220410
                </Link>
              </p>

            </div>

            {/* Service & Support */}
            <div className="text-white px-4 py-6 bg-white/25 backdrop-blur-md rounded-md w-3/4 shadow-lg transform origin-center hover:skew-y-3 hover:scale-110 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4">Service & Support</h3>
              <p>ma-do 09:00 tot 17:00</p>
              <p className="mb-4">vrij: 09:00 - 13:00</p>
              <p>
                <Link href="mailto:service@multichoiceagency.nl" className="hover:text-teal-900 hover:font-bold">
                  service@multichoiceagency.nl
                </Link>
              </p>
              <p>
                <Link href="tel:0103220410" className="hover:text-teal-900 hover:font-bold">
                  0103220410
                </Link>
              </p>
            </div>
            {/* Additional Information */}
            <div className="text-white px-4 py-6 font-bold bg-white/25 backdrop-blur-md rounded-md w-3/4 shadow-lg transform origin-center hover:skew-y-3 hover:scale-110 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4">Overige gegevens</h3>
              <p>KVK: 77481445</p>
              <p>BTW: NL.861020741.B01</p>
              <p>IBAN: NL50.INGB.0005.655.287</p>
            </div>
          </div>
          </div>
          {/* Bottom Section */}
          <div className="flex flex-col items-center space-y-6 ">
            {/* Logo */}
            <div className="group flex items-center space-x-4 hover:skew-y-3 hover:b hover:scale-110 transition-all duration-300 bg-white/25 backdrop-blur-md rounded-md py-4 px-4">
            <Image
              src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
              alt="Multichoiceagency"
              width={300}
              height={150}
              className="min-w-5 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
            />
          </div>
            {/* Tagline */}
            <div className="text-2xl pb-2 font-bold">
              Maatwerk Specialisten<sup>®</sup>
            </div>
            <div>
            <Link href={"/offerte-aanvragen"}>
            <button className="group flex items-center pt-5 rounded-md border-green-400 hover:translate-x-105 font-bold bg-white text-black sm:px-6 py-8 sm:py-3 text-sm sm:text-base transition-colors hover:bg-black hover:text-white">
              <span>Gratis advies aanvragen</span>
            </button>
            </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 font-bold hover:text-teal-900 text-gray-100">Volg ons op social media</div>
            <div className="flex space-x-6 text-gray-100">
              <Link href="#" className="hover:text-teal-900 hover:font-bold">
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" /> LinkedIn 
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-teal-900 hover:font-bold">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" /> Facebook
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-teal-900 hover:font-bold">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" /> Instagram
              </Link>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-100">
              <Link href="/website-laten-maken" className="hover:text-teal-900 hover:font-bold">
                Website laten maken
              </Link>
              <span>|</span>
              <Link href="/privacy-beleid" className="hover:text-teal-900 hover:font-bold">
                Privacy & Avg
              </Link>
              <span>|</span>
              <Link href="/vacatures" className="hover:text-teal-900 hover:font-bold">
                Vacatures
              </Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-teal-900 hover:font-bold">
                Contact
              </Link>
              <span>|</span>
              <Link href="/request-for-proposal" className="hover:text-teal-900 hover:font-bold">
              Request for Proposal
              </Link>
            </div>

            {/* Google Rating */}
            <div className="flex items-center space-x-2 text-gray-100">
              <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
              <span className="font-semibold">Wij worden gewaardeerd met een </span>
              <div className="flex text-yellow-400">
                4.9 ★★★★
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
