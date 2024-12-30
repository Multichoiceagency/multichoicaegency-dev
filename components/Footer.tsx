"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faInbox, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-[#1E7933] text-white rounded-xl">
        {/* Newsletter Section */}
        <div className="border-b border-green-700">
          <div className="max-w-[1800px] mx-auto py-12">
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto px-4">
          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
            {/* Web Development */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Web development</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">UI/UX Design</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Websites</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Webshops</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Development</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Umbraco CMS</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Umbraco koppeling</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Umbraco API</Link></li>
              </ul>
            </div>

            {/* Online Marketing */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Online marketing</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Drop of Orange</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Internetbureau Groningen</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Google Ads Search</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Google Ads Display</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Google Shopping</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">SEO</Link></li>
              </ul>
            </div>

            {/* Over ons */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Over ons</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Ons verhaal</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Onze werkwijze</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Ons team</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Vacatures</Link></li>
              </ul>
            </div>

            {/* Kenniscentrum */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kenniscentrum</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Helpdesk</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Veelgestelde vragen</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Kennisbank</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Downloads</Link></li>
                <li><Link href="#" className="hover:text-green-950 hover:font-bold">Powerpoint</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-gray-100">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <p className="font-semibold text-white mb-2">Multichoiceagency B.V.</p>
              <p>Edisonstraat 5c</p>
              <p className="mb-4">Rotterdam</p>
              <p className="italic mb-2">Wij bedienen onze klanten door heel Nederland</p>
              <p className="mt-4">
                <Link href="mailto:sales@multichoiceagency.nl" className="hover:text-green-950 hover:font-bold">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" /> sales@multichoiceagency.nl
                </Link>
              </p>
              <p>
                <Link href="tel:0103220410" className="hover:text-green-950 hover:font-bold">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" /> 0103220410
                </Link>
              </p>

            </div>

            {/* Service & Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Service & Support</h3>
              <p>ma-do 09:00 tot 17:00</p>
              <p className="mb-4">vrij: 09:00 - 13:00</p>
              <p>
                <Link href="mailto:service@multichoiceagency.nl" className="hover:text-green-950 hover:font-bold">
                  service@multichoiceagency.nl
                </Link>
              </p>
              <p>
                <Link href="tel:0103220410" className="hover:text-green-950 hover:font-bold">
                  0103220410
                </Link>
              </p>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Overige gegevens</h3>
              <p>KVK: 77481445</p>
              <p>BTW: NL.861020741.B01</p>
              <p>IBAN: NL50.INGB.0005.655.287</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-green-700 pt-8">
            <div className="flex flex-col items-center space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <Image
                  src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/11/logo-multichoiceagency.png"
                  alt="Multichoiceagency"
                  width={300}
                  height={150}
                  className="min-w-5 brightness-0 invert"
                />
              </div>

              {/* Tagline */}
              <div className="text-2xl pb-2 font-bold">
                Maatwerk Specialisten<sup>®</sup>
              </div>
              <div>
              <Link href={"/offerte-aanvragen"}>
              <button className="group flex items-center pt-5 rounded-full border-green-400 hover:translate-x-105 font-bold bg-white text-black sm:px-6 py-8 sm:py-3 text-sm sm:text-base transition-colors hover:bg-black hover:text-white">
                <span>Gratis advies aanvragen</span>
              </button>
              </Link>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 font-bold hover:text-green-950 text-gray-100">Volg ons op social media</div>
              <div className="flex space-x-6 text-gray-100">
                <Link href="#" className="hover:text-green-950 hover:font-bold">
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" /> LinkedIn 
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-green-950 hover:font-bold">
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" /> Facebook
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-green-950 hover:font-bold">
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" /> Instagram
                </Link>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-100">
                <Link href="/website-laten-maken" className="hover:text-green-950 hover:font-bold">
                  Website laten maken
                </Link>
                <span>|</span>
                <Link href="/privacy-beleid" className="hover:text-green-950 hover:font-bold">
                  Privacy & Avg
                </Link>
                <span>|</span>
                <Link href="/vacatures" className="hover:text-green-950 hover:font-bold">
                  Vacatures
                </Link>
                <span>|</span>
                <Link href="/contact" className="hover:text-green-950 hover:font-bold">
                  Contact
                </Link>
                <span>|</span>
                <Link href="/request-for-proposal" className="hover:text-green-950 hover:font-bold">
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
      </div>
    </footer>
  );
}

