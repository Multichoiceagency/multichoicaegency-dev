'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Phone, Mail, MessageCircle, Clock, ArrowRight } from 'lucide-react'

export default function AskQuestionPage() {
  const faqs = [
    {
      question: "Wat zijn de kosten voor een website?",
      answer: "De kosten voor een website zijn afhankelijk van uw specifieke wensen en eisen. We maken graag een persoonlijke offerte op basis van uw project."
    },
    {
      question: "Hoe lang duurt het ontwikkelen van een website?",
      answer: "De ontwikkeltijd varieert per project. Gemiddeld duurt een website 6-8 weken, maar dit kan korter of langer zijn afhankelijk van de complexiteit."
    },
    {
      question: "Bieden jullie ook hosting aan?",
      answer: "Ja, we bieden professionele hosting aan met 24/7 monitoring en support. We zorgen voor een snelle en veilige hosting-omgeving."
    },
    {
      question: "Kan ik mijn website zelf beheren?",
      answer: "Ja, we bouwen websites met gebruiksvriendelijke CMS-systemen zodat u eenvoudig zelf content kunt beheren. We bieden ook training aan."
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefonisch",
      description: "Direct contact met ons team",
      action: "+31 (0)6 12345678"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      description: "Binnen 24 uur antwoord",
      action: "info@multichoiceagency.nl"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Direct chatten met een expert",
      action: "Start chat"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Openingstijden",
      description: "Ma-Vr: 09:00 - 17:00",
      action: "Plan afspraak"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80svh] sm:pt-30px flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Heeft u een vraag over onze diensten?
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ons team van experts staat klaar om al uw vragen te beantwoorden en u te helpen bij het realiseren van uw digitale ambities.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Stel uw vraag
          </Button>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <Button variant="link" className="text-primary">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Neem contact met ons op
              </h2>
              <p className="text-gray-600 mb-8">
                Vul het formulier in en we nemen binnen 24 uur contact met u op. We denken graag met u mee over de beste oplossing voor uw project.
              </p>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg"
                  alt="Customer support"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Naam</label>
                    <Input type="text" placeholder="Uw naam" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bedrijf</label>
                    <Input type="text" placeholder="Uw bedrijfsnaam" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <Input type="email" placeholder="uw@email.nl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefoon</label>
                    <Input type="tel" placeholder="Uw telefoonnummer" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Onderwerp</label>
                  <Input type="text" placeholder="Waar gaat uw vraag over?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Uw vraag</label>
                  <Textarea 
                    placeholder="Beschrijf uw vraag zo specifiek mogelijk" 
                    rows={6}
                  />
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Verstuur vraag
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Veelgestelde vragen
              </h2>
              <p className="text-gray-600 mb-8">
                Bekijk hier de antwoorden op veelgestelde vragen. Staat uw vraag er niet tussen? Neem dan contact met ons op.
              </p>
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Team discussion"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-bold mb-1">Nog meer vragen?</h3>
                  <p className="text-gray-600">We helpen u graag verder</p>
                </div>
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Contact opnemen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

