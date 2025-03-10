"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import React from "react";

// Voorbeeld: stockfoto's van Pexels (pas deze naar wens aan)
const HERO_IMAGE =
  "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const RECRUITER_IMAGE =
  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100";

export default function VacancyDetailPage() {
  const { slug } = useParams();
  const [vacature, setVacature] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // State voor popup (modal) zichtbaar / onzichtbaar
  const [showModal, setShowModal] = useState(false);

  // Form state voor het sollicitatieformulier
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    linkedin: "",
    message: "",
  });

  // State om het geüploade bestand (CV) op te slaan
  const [cvFile, setCvFile] = useState<File | null>(null);

  const [status, setStatus] = useState("");

  // Haal de vacaturegegevens op via de API-route
  useEffect(() => {
    if (slug) {
      fetch(`/api/vacatures/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setVacature(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching vacancy:", error);
          setLoading(false);
        });
    }
  }, [slug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Specifieke handler voor het bestand (CV)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // We gebruiken FormData om tekst én bestanden te kunnen versturen
      const data = new FormData();
      data.append(
        "subject",
        `Sollicitatie: ${vacature?.title || "Onbekende vacature"}`
      );
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      data.append("city", formData.city);
      data.append("linkedin", formData.linkedin);
      data.append("message", formData.message);

      // Voeg het bestand (CV) toe als dit is geselecteerd
      if (cvFile) {
        data.append("cv", cvFile);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data, // let de browser zelf de juiste headers bepalen
      });

      if (res.ok) {
        setStatus(
          "Uw sollicitatie is succesvol verstuurd. We nemen zo snel mogelijk contact met u op."
        );
        // Reset formulier
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          linkedin: "",
          message: "",
        });
        setCvFile(null);
      } else {
        setStatus("Er is een fout opgetreden. Probeer het later opnieuw.");
      }
    } catch (error) {
      setStatus("Er is een fout opgetreden. Probeer het later opnieuw.");
    }
  };

  // Functie om de popup te openen
  const openModal = () => {
    setShowModal(true);
  };

  // Functie om de popup te sluiten
  const closeModal = () => {
    setShowModal(false);
    setStatus(""); // Eventueel status resetten
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }

  if (!vacature) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Vacature niet gevonden</h1>
        <p>De gevraagde vacature bestaat niet.</p>
        <Link href="/vacatures" className="text-green-600 font-bold hover:underline">
          Terug naar Vacatures
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      {/* Header / Navigatiebalk (optioneel, hier vereenvoudigd) */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">BedrijfsLogo</div>
          <nav className="space-x-4">
            <Link href="/vacatures" className="hover:underline">
              Vacatures
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero sectie met achtergrondafbeelding en vacaturetitel */}
      <section
        className="bg-cover bg-center text-white py-12 md:py-24"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
        }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold">{vacature.title}</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl">
              {vacature.shortDescription}
            </p>
            <button
              onClick={openModal}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition"
            >
              Direct solliciteren
            </button>
          </div>
        </div>
      </section>

      {/* Hoofdsectie met de vacature-inhoud links en een rechter sidebar */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* Linkerkolom: vacaturedetails */}
          <div className="md:w-8/12">
            <h2 className="text-2xl font-bold mb-4">Wat ga je doen?</h2>
            <p className="mb-6">{vacature.details}</p>

            <h2 className="text-2xl font-bold mb-4">Wat wij bieden</h2>
            <ul className="list-disc list-inside mb-6 text-gray-800">
              <li>Een marktconform salaris (pas dit aan)</li>
              <li>Een gezellige werkomgeving</li>
              <li>Doorgroeimogelijkheden</li>
              <li>Reiskostenvergoeding</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Wat wij vragen</h2>
            <ul className="list-disc list-inside mb-6 text-gray-800">
              <li>Minimaal mbo4-werk- en -denkniveau (voorbeeld)</li>
              <li>
                Je bent {vacature.werkuren?.join(" en ")} beschikbaar
              </li>
              <li>Goede communicatieve vaardigheden</li>
            </ul>

            {/* Werkuren & Contract */}
            <h2 className="text-2xl font-bold mb-4">Werkuren &amp; Contract</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Werkuren</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800">
                {vacature.werkuren?.map((uur: string, i: number) => (
                  <li key={i}>{uur}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Contractvormen</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800">
                {vacature.contract?.map((type: string, i: number) => (
                  <li key={i}>{type}</li>
                ))}
              </ul>
            </div>

            {/* Extra omschrijving */}
            <h2 className="text-2xl font-bold mb-4">Meer over deze functie</h2>
            <p className="mb-4 text-gray-800">{vacature.description}</p>
          </div>

          {/* Rechterkolom: Sidebar */}
          <div className="md:w-4/12 space-y-6">
            {/* In het kort */}
            <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold mb-2">In het kort</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <strong>Locatie:</strong> <span>Hoevelaken (voorbeeld)</span>
                </li>
                <li>
                  <strong>Dienstverband:</strong>{" "}
                  <span>Fulltime / Parttime</span>
                </li>
                <li>
                  <strong>Salarisindicatie:</strong>{" "}
                  <span>€2.000 - €2.500 (voorbeeld)</span>
                </li>
                <li>
                  <strong>Werkuren:</strong>{" "}
                  <span>{vacature.werkuren?.join(", ")}</span>
                </li>
                <li>
                  <strong>Contract:</strong>{" "}
                  <span>{vacature.contract?.join(", ")}</span>
                </li>
              </ul>
              <button
                onClick={openModal}
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold mt-4 py-2 rounded transition"
              >
                Solliciteer direct
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold mb-2">Deel deze vacature</h3>
              <div className="flex space-x-3 text-sm">
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  title="Deel op Facebook"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:underline"
                  title="Deel op Twitter"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:underline"
                  title="Deel op Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 flex items-center">
              <img
                src={RECRUITER_IMAGE}
                alt="Recruiter"
                className="w-16 h-16 rounded-full bg-gray-300 mr-4 object-cover"
              />
              <div>
                <h4 className="text-sm font-bold">Recruiter</h4>
                <p className="text-sm text-gray-700">Naam Recruiter</p>
                <p className="text-sm text-gray-700">Bel of mail voor info</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal (popup) voor het uitgebreidere sollicitatieformulier */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg mx-4 p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Solliciteer voor deze functie
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Naam
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Uw volledige naam"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Uw e-mailadres"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Uw telefoonnummer"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Adres
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Straatnaam en huisnummer"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Woonplaats
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Bijv. Amsterdam"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  LinkedIn-profiel (optioneel)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="Bijv. https://linkedin.com/in/..."
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Motivatie
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vertel ons waarom u de perfecte kandidaat bent..."
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              {/* CV upload */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Upload uw CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-700
                    file:mr-4 file:py-2 file:px-4
                    file:rounded file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-100 file:text-green-700
                    hover:file:bg-green-200
                  "
                />
                <p className="text-xs text-gray-500 mt-1">
                  Toegestane bestandstypen: .pdf, .doc, .docx
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Verzenden
              </button>
            </form>
            {status && <p className="mt-4 text-center text-green-700">{status}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
