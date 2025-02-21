"use client";

import HeroNieuw from "@/components/HeroNieuw";
import { useOfferStore } from "@/store/useOfferStore";
import { LayoutGrid, Brush, CheckCircle } from "lucide-react";

export default function OfferteAanvragen() {
  const {
    // Huidige stap
    step,
    // Contactgegevens
    name,
    email,
    phone,
    address,
    company,
    // Inhoud
    selectedDesign,
    selectedPages,
    // Projectdetails
    domain,
    projectType,
    budget,
    deadline,
    notes,
    additionalFeatures,
    // Adviesgesprek
    wantsConsultation,
    // Setters
    setName,
    setEmail,
    setPhone,
    setAddress,
    setCompany,
    setDesign,
    setPages,
    setDomain,
    setProjectType,
    setBudget,
    setDeadline,
    setNotes,
    toggleFeature,
    setWantsConsultation,
    // Navigatie
    nextStep,
    prevStep,
    // Submit
    submitForm,
  } = useOfferStore();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black">
        <HeroNieuw
          title="Offerte aanvragen"
          description="Vraag nu een offerte aan en ontvang binnen 1 uur een reactie."
          buttonText="Offerte aanvragen"
          buttonLink="/offerte-aanvragen"
          videoSrc="https://cdn.dribbble.com/userupload/17855128/file/large-45aef91c794d3dfe747127edc550fd15.mp4"
        />
      </section>

      {/* Container voor het formulier */}
      <section className="container mx-auto w-full max-w-5xl px-6 py-12">
        <div className="bg-white p-6 border rounded-lg shadow-lg">
          {/* Stappen-indicator */}
          <div className="flex justify-between mb-6 text-sm font-medium">
            <span
              className={`py-2 px-4 rounded ${
                step === 1 ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              1. Algemeen
            </span>
            <span
              className={`py-2 px-4 rounded ${
                step === 2 ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              2. Inhoud
            </span>
            <span
              className={`py-2 px-4 rounded ${
                step === 3 ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              3. Projectdetails
            </span>
            <span
              className={`py-2 px-4 rounded ${
                step === 4 ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              4. Afronden
            </span>
          </div>

          {/* Stap 1: Contactgegevens */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Stap 1: Contactgegevens</h2>
              <p className="mb-4">
                Vul hier je persoonlijke gegevens in, zodat we je kunnen bereiken
                over de offerte.
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Voor- en achternaam *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. Jan Jansen"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Bedrijfsnaam (optioneel)</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. Jansen Web"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">E-mailadres *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. info@jansenweb.nl"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Telefoonnummer *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. 0612345678"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Adres (optioneel)</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Straatnaam + huisnummer"
                  />
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-orange-500 text-white px-6 py-3 rounded mt-4"
                >
                  Volgende stap
                </button>
              </form>
            </div>
          )}

          {/* Stap 2: Inhoud (Design + aantal pagina's) */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Stap 2: Inhoud</h2>
              <p className="mb-4">
                Wil je een uniek design of gebruikmaken van onze bestaande designs?  
                En hoeveel pagina’s verwacht je ongeveer nodig te hebben?
              </p>
              {/* Designkeuze */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold">Designkeuze</label>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="designChoice"
                      checked={selectedDesign === "uniek"}
                      onChange={() => setDesign("uniek")}
                    />
                    <span>Ik wil een uniek design</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="designChoice"
                      checked={selectedDesign === "standaard"}
                      onChange={() => setDesign("standaard")}
                    />
                    <span>Ik maak graag gebruik van jullie designs</span>
                  </label>
                </div>
              </div>

              {/* Aantal pagina's */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold">Aantal pagina’s</label>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pageChoice"
                      checked={selectedPages === "1-5"}
                      onChange={() => setPages("1-5")}
                    />
                    <span>1 tot 5 pagina’s</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pageChoice"
                      checked={selectedPages === "5-10"}
                      onChange={() => setPages("5-10")}
                    />
                    <span>5 tot 10 pagina’s</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pageChoice"
                      checked={selectedPages === "10plus"}
                      onChange={() => setPages("10plus")}
                    />
                    <span>Meer dan 10 pagina’s</span>
                  </label>
                </div>
              </div>

              {/* Navigatie knoppen */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-6 py-3 rounded"
                >
                  Vorige stap
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-orange-500 text-white px-6 py-3 rounded"
                >
                  Volgende stap
                </button>
              </div>
            </div>
          )}

          {/* Stap 3: Projectdetails */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Stap 3: Projectdetails</h2>
              <p className="mb-4">
                Vertel ons wat meer over het project zelf: welk domein, type website, budget,
                deadline en eventuele aanvullende wensen.
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Domeinnaam (optioneel)</label>
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. www.mijnbedrijfsnaam.nl"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Projecttype</label>
                  <input
                    type="text"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. webshop, bedrijfswebsite, etc."
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Geschat budget</label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. €1000 - €5000"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Deadline (optioneel)</label>
                  <input
                    type="text"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. binnen 2 maanden"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-semibold">Extra toelichting of wensen</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 border rounded"
                    placeholder="Bijv. voorkeur voor kleuren, speciale functionaliteiten..."
                  />
                </div>

                {/* Extra functionaliteiten (toggleFeature) */}
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">
                    Selecteer extra functionaliteiten:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className={`px-4 py-2 border rounded ${
                        additionalFeatures.includes("seo") ? "border-orange-500" : "border-gray-300"
                      }`}
                      onClick={() => toggleFeature("seo")}
                    >
                      SEO
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 border rounded ${
                        additionalFeatures.includes("blog") ? "border-orange-500" : "border-gray-300"
                      }`}
                      onClick={() => toggleFeature("blog")}
                    >
                      Blog
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 border rounded ${
                        additionalFeatures.includes("contactForm") ? "border-orange-500" : "border-gray-300"
                      }`}
                      onClick={() => toggleFeature("contactForm")}
                    >
                      Contactformulier
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 border rounded ${
                        additionalFeatures.includes("analytics") ? "border-orange-500" : "border-gray-300"
                      }`}
                      onClick={() => toggleFeature("analytics")}
                    >
                      Analytics
                    </button>
                    {/* Voeg meer opties toe naar wens */}
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-400 text-white px-6 py-3 rounded"
                  >
                    Vorige stap
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-orange-500 text-white px-6 py-3 rounded"
                  >
                    Volgende stap
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Stap 4: Afronden (met keuze voor 30 minuten adviesgesprek) */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Stap 4: Afronden</h2>
              <p className="mb-4">
                Wil je een gratis 30 minuten adviesgesprek inplannen? We kunnen dan samen
                je wensen bespreken en adviseren over de volgende stappen.
              </p>

              <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  className={`p-3 border rounded-lg ${
                    wantsConsultation ? "border-orange-500" : "border-gray-300"
                  }`}
                  onClick={() => setWantsConsultation(true)}
                >
                  Ja, ik wil een gratis 30 minuten adviesgesprek
                </button>
                <button
                  type="button"
                  className={`p-3 border rounded-lg ${
                    !wantsConsultation ? "border-orange-500" : "border-gray-300"
                  }`}
                  onClick={() => setWantsConsultation(false)}
                >
                  Nee, bedankt
                </button>
              </div>

              {/* Alleen tonen als wantsConsultation = true */}
              {wantsConsultation && (
                <div className="mb-4">
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2r-BtK2ByjLdjbUzHD56gv5PjOLFiNHnB-Oso70N81dDkz_lVzTcx3r8AaqK1G3248W7QF59lc?gv=true"
                    className="w-full h-[600px] rounded-lg"
                    frameBorder="0"
                    title="Google Calendar Appointment Scheduling"
                  ></iframe>
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-6 py-3 rounded"
                >
                  Vorige stap
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // submitForm stuurt na 500ms door naar /bedankt (zie store).
                    submitForm();
                  }}
                  className="bg-green-500 text-white px-6 py-3 rounded"
                >
                  Offerte aanvragen
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
