import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Doeltreffende website laten maken
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Meer conversies, meer leads, meer succes
          </p>
          <Link href="#contact" className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600">
            Vraag een offerte aan
          </Link>
        </div>
      </section>

      {/* Introductie Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Waarom kiezen voor een op maat gemaakte website?
          </h2>
          <p className="text-lg text-center text-gray-700 leading-relaxed">
            Bij ons staat jouw visie centraal. Wij bouwen custom websites die volledig zijn afgestemd op jouw specifieke wensen en eisen. Geen standaard templates, maar unieke ontwerpen die perfect passen bij jouw merkidentiteit en bedrijfsdoelen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Image src="https://cdn.pixabay.com/photo/2016/11/29/03/30/work-1868496_1280.jpg" alt="Uniek ontwerp" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">Unieke ontwerpen</h3>
              <p className="text-gray-600">Een op maat gemaakt design dat jouw merk naar voren brengt.</p>
            </div>
            <div className="text-center">
              <Image src="https://cdn.pixabay.com/photo/2015/01/08/18/24/entrepreneur-593358_1280.jpg" alt="Responsive design" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">Volledig responsive</h3>
              <p className="text-gray-600">Een optimale gebruikservaring op elk apparaat.</p>
            </div>
            <div className="text-center">
              <Image src="https://cdn.pixabay.com/photo/2014/06/19/14/20/laptop-372625_1280.jpg" alt="SEO-optimalisatie" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">SEO-geoptimaliseerd</h3>
              <p className="text-gray-600">Betere vindbaarheid en meer bezoekers op je website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Configuratiesectie */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Voorbeeldconfiguraties
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            <Link href="#" className="text-red-500 underline hover:text-red-700">Offerte op maat ontvangen?</Link>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 p-4 text-left">Kenmerk</th>
                  <th className="border border-gray-200 p-4 text-center">Informeren</th>
                  <th className="border border-gray-200 p-4 text-center">Presenteren</th>
                  <th className="border border-gray-200 p-4 text-center">Converteren</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-4">Ideaal voor</td>
                  <td className="border border-gray-200 p-4 text-center">Kleinere bedrijven en ZZP&apos;ers</td>
                  <td className="border border-gray-200 p-4 text-center">Ambitieuze organisaties</td>
                  <td className="border border-gray-200 p-4 text-center">Organisaties met ambitieuze online doelstellingen</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4">Ontwerp</td>
                  <td className="border border-gray-200 p-4 text-center">Uniek en informatief</td>
                  <td className="border border-gray-200 p-4 text-center">Indrukwekkend en visueel</td>
                  <td className="border border-gray-200 p-4 text-center">Volledig geoptimaliseerd</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4">Pagina&apos;s</td>
                  <td className="border border-gray-200 p-4 text-center">3-7</td>
                  <td className="border border-gray-200 p-4 text-center">8-13</td>
                  <td className="border border-gray-200 p-4 text-center">15+</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4">Responsive</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4">CMS</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4">SEO Module</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                  <td className="border border-gray-200 p-4 text-center">✔</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4">Hosting</td>
                  <td className="border border-gray-200 p-4 text-center">Basis</td>
                  <td className="border border-gray-200 p-4 text-center">Professioneel</td>
                  <td className="border border-gray-200 p-4 text-center">Professioneel +</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4">Prijs indicatie</td>
                  <td className="border border-gray-200 p-4 text-center">Vanaf €3.500</td>
                  <td className="border border-gray-200 p-4 text-center">Vanaf €6.000</td>
                  <td className="border border-gray-200 p-4 text-center">Vanaf €8.500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <Link href="#" className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              Informatie ontvangen
            </Link>
            <Link href="#" className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
