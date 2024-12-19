"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white text-gray-600">
      <div className="max-w-[1800px] mx-auto px-4 py-16">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Web Development */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Web development</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-600">Website laten maken</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Website op maat</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Webshop op maat</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Umbraco website</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Umbraco CMS</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Umbraco koppeling</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Umbraco API</Link></li>
            </ul>
          </div>

          {/* Online Marketing */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Online marketing</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-600">Drop of Orange</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Internetbureau Groningen</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Google Ads Search</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Google Ads Display</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Google Shopping</Link></li>
              <li><Link href="#" className="hover:text-blue-600">SEO</Link></li>
            </ul>
          </div>

          {/* Over ons */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Over ons</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-600">Ons verhaal</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Onze werkwijze</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Ons team</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Vacatures</Link></li>
            </ul>
          </div>

          {/* Kenniscentrum */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kenniscentrum</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-600">Helpdesk</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Veelgestelde vragen</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Kennisbank</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Downloads</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Powerpoint</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
            <p className="font-bold mb-2">Multichoiceagency B.V.</p>
            <p>Edisonstraat 5c</p>
            <p className="mb-4">Rotterdam</p>
            <p className="italic mb-2">Wij bedienen onze klanten ook in:</p>
            <p>
              <Link href="#" className="underline hover:text-blue-600">Zwolle</Link>,{" "}
              <Link href="#" className="underline hover:text-blue-600">Amsterdam</Link> en{" "}
              <Link href="#" className="underline hover:text-blue-600">Apeldoorn</Link>
            </p>
            <p className="mt-4">
              <Link href="mailto:info@multichoiceagency.nl" className="hover:text-blue-600">
                info@multichoiceagency.nl
              </Link>
            </p>
            <p>
              <Link href="tel:0103220410" className="hover:text-blue-600">
                0103220410
              </Link>
            </p>
          </div>

          {/* Service & Support */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Service & Support</h3>
            <p>ma-do 09:00 tot 17:00</p>
            <p className="mb-4">vrij: 09:00 - 13:00</p>
            <p>
              <Link href="mailto:service@multichoiceagency.nl" className="hover:text-blue-600">
                service@multichoiceagency.nl
              </Link>
            </p>
            <p>
              <Link href="tel:0103220410" className="hover:text-blue-600">
                0103220410
              </Link>
            </p>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Overige gegevens</h3>
            <p>KVK: 77481445</p>
            <p>BTW: NL.861020741.B01</p>
            <p>IBAN: NL50.INGB.0005.655.287</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Umbraco Partner Badge */}
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg"
                alt="Umbraco Partner"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="bg-gray-300 px-4 py-2 rounded">SILVER</div>
            </div>

            {/* Profit by Design Logo */}
            <div className="text-2xl font-bold text-gray-900">
              Profit by Design<sup>®</sup>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                LinkedIn
              </Link>
              <span>|</span>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Facebook
              </Link>
              <span>|</span>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Instagram
              </Link>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Website laten maken
              </Link>
              <span>|</span>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Privacy & Avg
              </Link>
              <span>|</span>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Vacatures
              </Link>
              <span>|</span>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Werkveld
              </Link>
              <span>|</span>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </div>

            {/* Google Rating */}
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="font-bold text-xl">4.7</span>
              <div className="flex text-yellow-400">
                ★★★★½
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

