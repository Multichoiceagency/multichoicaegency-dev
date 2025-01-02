"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Uw bericht is succesvol verzonden!');
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitMessage(data.message || 'Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Neem contact op</h2>
              <p className="text-base text-gray-600 mb-8">
                E-mail, bel of vul het formulier in om te ontdekken hoe Multichoice Agency uw digitale uitdagingen kan oplossen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>info@multichoiceagency.nl</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>010 322 0410</span>
                </div>
              </div>
              <Button className="mt-8">Klantenservice</Button>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Neem Contact Op</CardTitle>
                  <p className="text-sm text-gray-500">We reageren zo snel mogelijk</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Onderwerp</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Verzenden...' : 'Verstuur'}
                    </Button>
                  </form>
                  {submitMessage && (
                    <p className={`mt-4 text-center ${submitMessage.includes('succesvol') ? 'text-green-600' : 'text-red-600'}`}>
                      {submitMessage}
                    </p>
                  )}
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Door dit formulier te verzenden gaat u akkoord met onze{" "}
                    <a href="/voorwaarden" className="text-blue-600 hover:underline">Voorwaarden</a>
                    {" "}en{" "}
                    <a href="/privacy" className="text-blue-600 hover:underline">Privacybeleid</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Klantenservice</h3>
            <p className="text-sm text-gray-600">
              Ons support team staat 24/7 klaar om al uw vragen te beantwoorden.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Feedback en Suggesties</h3>
            <p className="text-sm text-gray-600">
              We waarderen uw feedback over onze diensten. Uw input is cruciaal voor onze verbetering.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Media Aanvragen</h3>
            <p className="text-sm text-gray-600">
              Voor media-gerelateerde vragen of interviewverzoeken, neem contact op via media@multichoiceagency.nl
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde vragen</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger>Hoe kan ik een project met jullie starten?</AccordionTrigger>
              <AccordionContent>
                U kunt contact met ons opnemen via het contactformulier of direct via sales@multichoiceagency.nl. We plannen dan een gesprek in om uw wensen te bespreken.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wat zijn jullie specialisaties?</AccordionTrigger>
              <AccordionContent>
                We zijn gespecialiseerd in digitale transformatie, webontwikkeling, en online marketing strategieën.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Hoe lang duurt een gemiddeld project?</AccordionTrigger>
              <AccordionContent>
                De doorlooptijd varieert per project. We bespreken dit uitgebreid tijdens het eerste gesprek en maken duidelijke afspraken over de planning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Bieden jullie ook onderhoud en support?</AccordionTrigger>
              <AccordionContent>
                Ja, we bieden verschillende onderhouds- en supportpakketten aan om uw digitale oplossingen optimaal te laten functioneren.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Input type="email" placeholder="Uw e-mailadres" className="max-w-sm w-full" />
            <Button>Aanmelden voor updates</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
