"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, ArrowRight, Clock, ExternalLink, MessageSquare } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faLinkedin, faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center overflow-hidden pt-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact Hero Image"
            layout="fill"
            objectFit="cover"
            className="transform scale-110 motion-safe:animate-subtle-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/60 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left text-white max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
              Laten we samen iets <span className="text-lime-400">geweldigs</span> bouwen
            </h1>
            <p className="text-xl max-w-2xl text-gray-100 mb-8">
              Neem contact op met Multichoice Agency voor al uw digitale oplossingen. 
              Wij staan klaar om uw vragen te beantwoorden en uw projecten te realiseren.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-green-900 hover:bg-lime-400 hover:text-green-900 transition-all"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Direct contact opnemen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-green-700 hover:bg-black hover:text-white"
                onClick={() => document.getElementById('contact-options')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Bekijk contactopties
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 80.75C1248 89.625 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Contact Options Section */}
      <section id="contact-options" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hoe kunnen we je helpen?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kies de afdeling die het beste bij je vraag past voor de snelste service
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Administratie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-0 overflow-hidden group bg-white">
                <div className="h-2 bg-blue-500 w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-2xl dark:text-black">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    Administratie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <p className="text-gray-600">
                    Heb je een vraag over een betaling of factuur? Neem dan contact op via onderstaande gegevens:
                  </p>
                  
                  <div className="space-y-4">
                    <a href="mailto:administratie@multichoiceagency.nl" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group p-2 -mx-2 rounded-lg hover:bg-blue-50">
                      <Mail className="h-5 w-5 text-blue-500" />
                      <span className="font-medium text-sm group-hover:underline">administratie@multichoiceagency.nl</span>
                    </a>
                    
                    <a href="tel:0103220410" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group p-2 -mx-2 rounded-lg hover:bg-blue-50">
                      <Phone className="h-5 w-5 text-blue-500" />
                      <span className="font-medium text-sm group-hover:underline">010 - 3220410</span>
                    </a>
                    
                    <div className="flex items-start space-x-3 text-gray-600 p-2 -mx-2">
                      <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Openingstijden:</p>
                        <p>ma-vr: 09:00 - 17:00</p>
                        <p className="text-sm text-gray-500">(vrijdag tel. bereikbaar tot 12:30)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-0 overflow-hidden group dark:bg-white">
                <div className="h-2 bg-green-500 w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-2xl dark:text-black">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <p className="text-gray-600">
                    Ben je al klant en heb je een vraag over onze service of support nodig?
                  </p>
                  
                  <div className="space-y-4">
                    <a href="mailto:service@multichoiceagency.nl" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors group p-2 -mx-2 rounded-lg hover:bg-green-50">
                      <Mail className="h-5 w-5 text-green-500" />
                      <span className="font-medium text-sm group-hover:underline">service@multichoiceagency.nl</span>
                    </a>
                    
                    <a href="tel:0103220410" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors group p-2 -mx-2 rounded-lg hover:bg-green-50">
                      <Phone className="h-5 w-5 text-green-500" />
                      <span className="font-medium group-hover:underline">010 - 3220410</span>
                    </a>
                    
                    <div className="flex items-start space-x-3 text-gray-600 p-2 -mx-2">
                      <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Openingstijden:</p>
                        <p>ma-vr: 09:00 - 17:00</p>
                        <p className="text-sm text-gray-500">(vrijdag tel. bereikbaar tot 12:30)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Advies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-0 overflow-hidden group dark:bg-white">
                <div className="h-2 bg-purple-500 w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-2xl dark:text-black">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 ">
                      <Phone className="h-5 w-5 text-purple-600" />
                    </div>
                    Advies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <p className="text-gray-600">
                    Ben je nog geen klant, maar wil je meer weten over onze diensten? Neem contact op:
                  </p>
                  
                  <div className="space-y-4">
                    <a href="mailto:sales@multichoiceagency.nl" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors group p-2 -mx-2 rounded-lg hover:bg-purple-50">
                      <Mail className="h-5 w-5 text-purple-500" />
                      <span className="font-medium group-hover:underline">sales@multichoiceagency.nl</span>
                    </a>
                    
                    <a href="tel:0103220410" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors group p-2 -mx-2 rounded-lg hover:bg-purple-50">
                      <Phone className="h-5 w-5 text-purple-500" />
                      <span className="font-medium group-hover:underline">010 - 3220410</span>
                    </a>
                    
                    <div className="flex items-start space-x-3 text-gray-600 p-2 -mx-2">
                      <Clock className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Openingstijden:</p>
                        <p>ma-vr: 09:00 - 17:00</p>
                        <p className="text-sm text-gray-500">(vrijdag tel. bereikbaar tot 12:30)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Volg ons op social media</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Blijf op de hoogte van onze laatste projecten, nieuws en updates
              </p>
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: faWhatsapp, name: "WhatsApp", color: "bg-green-500", url: "https://wa.me/31103220410" },
              { icon: faLinkedin, name: "LinkedIn", color: "bg-blue-600", url: "https://www.linkedin.com/company/multichoiceagency" },
              { icon: faFacebook, name: "Facebook", color: "bg-blue-700", url: "https://www.facebook.com/share/1FTW3JYC7M/?mibextid=wwXIfr" },
              { icon: faInstagram, name: "Instagram", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500", url: "https://www.instagram.com/multichoiceagency?igsh=MTA2NHp1djFoZWpzdA%3D%3D&utm_source=qry" },
              { icon: faTiktok, name: "TikTok", color: "bg-gradient-to-r from-gray-500 via-gray-500 to-green-500", url: "http://www.tiktok.com/@multichoiceagency7" },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${social.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center w-40 h-40`}
              >
                <FontAwesomeIcon icon={social.icon} className="text-4xl mb-3" />
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-green-900 mb-6 dark:text-white">Waar kunnen we je mee helpen?</h2>
              <p className="text-lg text-gray-600 mb-8 dark:text-white">
                Laat ons weten wat je precies zoekt en we nemen z.s.m. contact met je op om de mogelijkheden te bespreken.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4">Waarom kiezen voor Multichoice Agency?</h3>
                <ul className="space-y-3">
                  {[
                    "Persoonlijke aanpak en maatwerk oplossingen",
                    "Jarenlange ervaring in digitale transformatie",
                    "Transparante communicatie en duidelijke afspraken",
                    "Doorlopende ondersteuning en service",
                    "Innovatieve technologieën en best practices"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-900 hover:bg-green-800 text-white"
                  asChild
                >
                  <Link href="/offerte-aanvragen">
                    Offerte aanvragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-900 text-green-900 hover:bg-green-50"
                  asChild
                >
                  <Link href="/diensten">
                    Bekijk onze diensten
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary rounded-2xl shadow-xl overflow-hidden text-dark"
            >
             <h2 className="text-2xl text-white py-6 text-center font-bold">Contactformulier</h2>
              <div className="w-full h-[600px]">
                <iframe
                  src="https://projecten.mlt.multichoiceagency.nl/forms/wtl/ec8311d43001d7a98bd1127884843c9c"
                  frameBorder="0"
                  sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">Ons Kantoor</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl mb-4 text-black dark:text-white">Hoofdkantoor</h3>
                  <div className="flex items-start space-x-3 text-gray-600 dark:text-white mb-4">
                    <MapPin className="h-5 w-5 mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-lg text-black dark:text-white">Multichoice Agency</p>
                      <p>Rotterdam, Nederland</p>
                      <p className="font-bold text-black dark:text-white">Wij werken momenteel uitsluitend op locatie en op afstand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 text-gray-600 mb-4">
                    <Clock className="h-5 w-5 mt-1 text-green-600" />
                    <div>
                      <p className="font-medium text-black dark:text-white">Openingstijden:</p>
                      <p className="font-medium text-black dark:text-white">Maandag t/m vrijdag: 09:00 - 17:00</p>
                      <p className="text-sm text-gray-500 dark:text-white">(vrijdag telefonisch bereikbaar tot 12:30)</p>
                    </div>
                  </div>
                </div>
                </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.5925927453604!2d4.4669393!3d51.9177113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU1JzAzLjgiTiA0wrAyOCcwMS4wIkU!5e0!3m2!1sen!2snl!4v1635000000000!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Veelgestelde vragen</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Antwoorden op de meest gestelde vragen over onze diensten en werkwijze
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Hoe kan ik een offerte aanvragen?",
                  answer: "U kunt een offerte aanvragen via ons contactformulier op deze pagina, door te mailen naar sales@multichoiceagency.nl of door te bellen naar 010-3220410. We nemen dan zo snel mogelijk contact met u op om uw wensen te bespreken."
                },
                {
                  question: "Wat zijn de kosten voor jullie diensten?",
                  answer: "De kosten voor onze diensten zijn afhankelijk van uw specifieke wensen en de omvang van het project. We stellen graag een offerte op maat voor u op na een vrijblijvend gesprek."
                },
                {
                  question: "Hoe lang duurt het om een project af te ronden?",
                  answer: "De doorlooptijd van een project is afhankelijk van de complexiteit en omvang. Een eenvoudige website kan binnen enkele weken worden opgeleverd, terwijl complexere projecten enkele maanden kunnen duren. We maken vooraf duidelijke afspraken over de planning."
                },
                {
                  question: "Bieden jullie ook onderhoud en support na oplevering?",
                  answer: "Ja, we bieden verschillende onderhouds- en supportpakketten aan om ervoor te zorgen dat uw digitale oplossing optimaal blijft functioneren. Neem contact op met onze supportafdeling voor meer informatie."
                },
                {
                  question: "Werken jullie ook voor klanten buiten Nederland?",
                  answer: "Ja, we werken voor klanten in heel Nederland en daarbuiten. Dankzij moderne communicatiemiddelen kunnen we effectief samenwerken, ongeacht uw locatie."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Heeft u een andere vraag die hier niet wordt beantwoord?</p>
              <Button 
                className="bg-green-900 hover:bg-green-800 text-white"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Neem contact met ons op
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CSS voor animaties */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}
