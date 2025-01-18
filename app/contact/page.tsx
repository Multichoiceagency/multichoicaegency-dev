"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Contact Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 text-left text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl font-bold mb-4 text-white">Contact</h1>
          <p className="text-lg max-w-2xl text-gray-200">
            Neem contact op met Multichoice Agency voor al uw digitale oplossingen. Wij staan klaar om uw vragen te beantwoorden en uw projecten te realiseren.
          </p>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contactopties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Administratie */}
            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle>Administratie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Heb je een vraag over een betaling of factuur? Neem dan contact op via onderstaande gegevens:</p>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:administratie@multichoiceagency.nl"
                    className="hover:text-blue-600 font-semibold"
                  >
                    administratie@multichoiceagency.nl
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:0103220410"
                    className="hover:text-blue-600 font-semibold"
                  >
                    010 - 3220410
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Openingstijden:</strong> ma-vr: 09:00 - 17:00
                  <br />
                  (vrijdag tel. bereikbaar tot 12:30)
                </p>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Ben je al klant en heb je een vraag over onze service of support nodig?</p>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:service@multichoiceagency.nl"
                    className="hover:text-blue-600 font-semibold"
                  >
                    service@multichoiceagency.nl
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:0103220410"
                    className="hover:text-blue-600 font-semibold"
                  >
                    010 - 3220410
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Openingstijden:</strong> ma-vr: 09:00 - 17:00
                  <br />
                  (vrijdag tel. bereikbaar tot 12:30)
                </p>
              </CardContent>
            </Card>

            {/* Advies */}
            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle>Advies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Ben je nog geen klant, maar wil je meer weten over onze diensten? Neem contact op:</p>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:sales@multichoiceagency.nl"
                    className="hover:text-blue-600 font-semibold"
                  >
                    sales@multichoiceagency.nl
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:0103220410"
                    className="hover:text-blue-600 font-semibold"
                  >
                    010 - 3220410
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Openingstijden:</strong> ma-vr: 09:00 - 17:00
                  <br />
                  (vrijdag tel. bereikbaar tot 12:30)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-teal-900 mb-6">Waar kunnen we je mee helpen?</h2>
          <p className="text-base text-gray-600 mb-8">
            Laat ons weten wat je precies zoekt en we nemen z.s.m. contact met je op om de mogelijkheden te bespreken.
          </p>
          <div className="w-full h-[500px]">
            <iframe
              src="https://projecten.mlt.multichoiceagency.nl/forms/wtl/ec8311d43001d7a98bd1127884843c9c"
              frameBorder="0"
              sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
              allowFullScreen
              className="rounded-lg shadow-md w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.5925927453604!2d4.4669393!3d51.9177113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU1JzAzLjgiTiA0wrAyOCcwMS4wIkU!5e0!3m2!1sen!2snl!4v1635000000000!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ons Kantoor</h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Hoofdkantoor</h3>
                <div className="flex items-start space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Multichoice Agency</p>
                    <p>Rotterdam, Nederland</p>
                    <p>Adres: [Vul hier het exacte adres in]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
