"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <footer className="bg-gray-100 p-9">
      <div className="bg-[#1E7933] text-white rounded-xl">
        {/* Newsletter Section */}
        <div className="border-b border-green-700">
          <div className="max-w-[1668px] mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-2">Need products to start?</h2>
            <p className="text-gray-100 mb-4">No worries. We're here to help you at every stage of your journey.</p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 max-w-md px-4 py-2 bg-white/10 rounded border border-green-600 text-white placeholder:text-gray-200"
              />
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded font-medium">
                Get started
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1668px] mx-auto px-4 py-16">
          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Web Development */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Web development</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="#" className="hover:text-white">UI/UX Design</Link></li>
                <li><Link href="#" className="hover:text-white">Websites</Link></li>
                <li><Link href="#" className="hover:text-white">Webshops</Link></li>
                <li><Link href="#" className="hover:text-white">Development</Link></li>
                <li><Link href="#" className="hover:text-white">Umbraco CMS</Link></li>
                <li><Link href="#" className="hover:text-white">Umbraco koppeling</Link></li>
                <li><Link href="#" className="hover:text-white">Umbraco API</Link></li>
              </ul>
            </div>

            {/* Online Marketing */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Online marketing</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="#" className="hover:text-white">Drop of Orange</Link></li>
                <li><Link href="#" className="hover:text-white">Internetbureau Groningen</Link></li>
                <li><Link href="#" className="hover:text-white">Google Ads Search</Link></li>
                <li><Link href="#" className="hover:text-white">Google Ads Display</Link></li>
                <li><Link href="#" className="hover:text-white">Google Shopping</Link></li>
                <li><Link href="#" className="hover:text-white">SEO</Link></li>
              </ul>
            </div>

            {/* Over ons */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Over ons</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="#" className="hover:text-white">Ons verhaal</Link></li>
                <li><Link href="#" className="hover:text-white">Onze werkwijze</Link></li>
                <li><Link href="#" className="hover:text-white">Ons team</Link></li>
                <li><Link href="#" className="hover:text-white">Vacatures</Link></li>
              </ul>
            </div>

            {/* Kenniscentrum */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kenniscentrum</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="#" className="hover:text-white">Helpdesk</Link></li>
                <li><Link href="#" className="hover:text-white">Veelgestelde vragen</Link></li>
                <li><Link href="#" className="hover:text-white">Kennisbank</Link></li>
                <li><Link href="#" className="hover:text-white">Downloads</Link></li>
                <li><Link href="#" className="hover:text-white">Powerpoint</Link></li>
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
              <p className="italic mb-2">Wij bedienen onze klanten ook in:</p>
              <p>
                <Link href="#" className="underline hover:text-white">Zwolle</Link>,{" "}
                <Link href="#" className="underline hover:text-white">Amsterdam</Link> en{" "}
                <Link href="#" className="underline hover:text-white">Apeldoorn</Link>
              </p>
              <p className="mt-4">
                <Link href="mailto:info@multichoiceagency.nl" className="hover:text-white">
                  info@multichoiceagency.nl
                </Link>
              </p>
              <p>
                <Link href="tel:0103220410" className="hover:text-white">
                  0103220410
                </Link>
              </p>
            </div>

            {/* Service & Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Service & Support</h3>
              <p>ma-do 09:00 tot 17:00</p>
              <p className="mb-4">vrij: 09:00 - 13:00</p>
              <p>
                <Link href="mailto:service@multichoiceagency.nl" className="hover:text-white">
                  service@multichoiceagency.nl
                </Link>
              </p>
              <p>
                <Link href="tel:0103220410" className="hover:text-white">
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
              <div className="text-2xl font-bold">
                Maatwerk Specialisten<sup>®</sup>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 text-gray-100">
                <Link href="#" className="hover:text-white">
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" /> LinkedIn 
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" /> Facebook
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" /> Instagram
                </Link>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-100">
                <Link href="/website-laten-maken" className="hover:text-white">
                  Website laten maken
                </Link>
                <span>|</span>
                <Link href="/privacy-beleid" className="hover:text-white">
                  Privacy & Avg
                </Link>
                <span>|</span>
                <Link href="/vacatures" className="hover:text-white">
                  Vacatures
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-white">
                  Werkveld
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </div>

              {/* Google Rating */}
              <div className="flex items-center space-x-2 text-gray-100">
                <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
                <span className="font-semibold">Wij worden gewaardeerd met </span>
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

