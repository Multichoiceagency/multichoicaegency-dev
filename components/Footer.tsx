"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, IconDefinition } from "@fortawesome/free-solid-svg-icons";

// TypeScript type voor navigatie-items
type NavItem = {
  title: string;
  links: { name: string; href: string }[];
};

// TypeScript type voor social media links
type SocialItem = {
  icon: IconDefinition;
  text: string;
  href: string;
};

// TypeScript type voor contactinformatie
type ContactItem = {
  title: string;
  info: string[];
  links?: { icon?: IconDefinition; text: string; href: string }[];
};

// Navigatie-secties
const navSections: NavItem[] = [
  {
    title: "Web Development",
    links: [
      { name: "Websites", href: "/website-laten-maken" },
      { name: "Webshops", href: "/wat-is-ui-ux-design" },
      { name: "UI/UX Design", href: "/wat-is-ui-ux-design" },
      { name: "Maatwerk Websites", href: "/maatwerk-website-laten-maken" },
      { name: "Shopify webshop", href: "/shopify-webshop-laten-maken" },
      { name: "Woocommerce webshop", href: "/woocommerce-webshop-laten-maken" },
      { name: "Wordpress website", href: "/wordpress-website-laten-maken" },
    ],
  },
  {
    title: "Online Marketing",
    links: [
      { name: "SEO", href: "https://www.essmarketing.nl/seo-specialist" },
      { name: "Google Ads", href: "https://www.essmarketing.nl/google-ads-uitbesteden" },
      { name: "Social Media", href: "https://www.essmarketing.nl/social-media-uitbesteden" },
      { name: "Content Marketing", href: "https://www.essmarketing.nl/content-marketing-uitbesteden" },
      { name: "Bedrijfsvideo laten maken", href: "https://www.essmedia.nl/bedrijfsvideo-laten-maken" },
      { name: "Productvideo laten maken", href: "https://www.essmedia.nl/productvideo-laten-maken" },
    ],
  },
  {
    title: "Over Ons",
    links: [
      { name: "Over ons", href: "/over-ons" },
      { name: "Onze Werkwijze", href: "/onze-werkwijze" },
      { name: "Ons Team", href: "/ons-team" },
      { name: "Vacatures", href: "/vacatures" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Informatie",
    links: [
      { name: "Inloggen bestaande klant", href: "https://projecten.mlt.multichoiceagency.nl" },
      { name: "Helpdesk", href: "/helpdesk" },
      { name: "Veelgestelde Vragen", href: "/veelgestelde-vragen" },
      { name: "Kennisbank", href: "/kennisbank" },
      { name: "Downloads", href: "/downloads" },
    ],
  },
];

// Social media links
const socialLinks: SocialItem[] = [
  { icon: faFacebook, text: "Volg ons op Facebook", href: "https://facebook.com/multichoiceagency" },
  { icon: faInstagram, text: "Volg ons op Instagram", href: "https://instagram.com/multichoiceagency" },
  { icon: faLinkedin, text: "Volg ons op LinkedIn", href: "https://linkedin.com/company/multichoiceagency" },
];

// Contactgegevens inclusief e-mail en telefoon
const contactSections: ContactItem[] = [
  {
    title: "Contact",
    info: ["Multichoiceagency", "Wij werken uitsluitend op locatie en op afspraak door heel Nederland."],
    links: [
      { icon: faEnvelope, text: "sales@multichoiceagency.nl", href: "mailto:sales@multichoiceagency.nl" },
      { icon: faPhone, text: "0103220410", href: "tel:0103220410" },
    ],
  },
  {
    title: "Service & Support",
    info: ["Ma - Do: 09:00 - 17:00", "Vrij: 09:00 - 13:00"],
    links: [
      { icon: faEnvelope, text: "service@multichoiceagency.nl", href: "mailto:service@multichoiceagency.nl" },
      { icon: faPhone, text: "0103220410", href: "tel:0103220410" },
    ],
  },
  {
    title: "Overige Gegevens",
    info: ["KVK: 71511776", "BTW: NL.002353407.B39", "IBAN: NL91.INGB.0008.3417.40"],
  },
];

export function Footer() {
  return (
    <section className="p-4">
      <div className="relative py-12 lg:py-24 bg-teal-900 dark:bg-gray-900 overflow-hidden rounded-xl">
        {/* Achtergrondafbeelding */}
        <Image
          className="absolute bottom-0 left-0 h-full"
          src="/flow-assets/footer/waves-lines-bg.png"
          alt="Decoratieve achtergrond"
          width={500}
          height={500}
        />

        <div className="container px-4 mx-auto relative">
          <div className="flex flex-wrap mb-12 md:mb-24 xl:mb-40 -mx-4">
            {/* Logo */}
            <div className="w-full lg:w-2/12 xl:w-3/12 px-4 mb-16 lg:mb-0">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="https://cloud.multichoiceagency.nl/wp-content/uploads/2024/12/Logo-wit@4x.png"
                  alt="Multichoiceagency logo"
                  width={400}
                  height={50}
                />
              </Link>
            </div>

            {/* Navigatie */}
            <div className="w-full md:w-7/12 lg:w-7/12 xl:w-6/12 px-4 mb-16 lg:mb-0">
              <div className="flex flex-wrap -mx-4">
                {navSections.map((section, index) => (
                  <div key={index} className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                    <h2 className="text-xl mb-6 text-white dark:text-gray-200 font-bold">{section.title}</h2>
                    <ul>
                      {section.links.map((link, idx) => (
                        <li key={idx} className="mb-4">
                          <Link
                            href={link.href}
                            className="inline-block text-white dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 font-medium"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-5/12 lg:w-3/12 xl:w-3/12 px-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="group flex p-1 max-w-xs mb-4 items-center rounded-full bg-white dark:bg-gray-800"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 text-teal-900 dark:text-white group-hover:text-lime-500 dark:group-hover:text-lime-400 bg-lime-500 dark:bg-lime-600 group-hover:bg-black rounded-full transition duration-200">
                    <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                  </div>
                  <span className="ml-4 font-medium text-gray-900 dark:text-gray-100">
                    {social.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Bedrijfsinformatie */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactSections.map((block, idx) => (
              <div
                key={idx}
                className="px-4 py-6 bg-white dark:bg-gray-800 text-black dark:text-gray-200 rounded-md shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{block.title}</h3>
                {block.info.map((text, index) => (
                  <p key={index} className="mb-2">
                    {text}
                  </p>
                ))}
                {block.links?.map((link, index) => (
                  <p key={index} className="mt-2">
                    <Link
                      href={link.href}
                      className="hover:text-teal-900 dark:hover:text-lime-400 font-medium flex items-center"
                    >
                      {link.icon && (
                        <FontAwesomeIcon icon={link.icon} className="w-5 h-5 mr-2" />
                      )}
                      {link.text}
                    </Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
