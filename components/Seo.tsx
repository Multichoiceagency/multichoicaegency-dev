"use client";

import { DefaultSeo } from 'next-seo';

export function Seo() {  // ✅ Gebruik een named export
  return (
    <DefaultSeo
      titleTemplate="%s | Multichoiceagency"
      defaultTitle="Multichoiceagency | Jouw Online Maatwerk en Webdesign Specialisten"
      description="Professionele website laten maken? Wij helpen met maatwerk webdesign en online oplossingen voor bedrijven en ondernemers."
      canonical="https://www.multichoiceagency.nl"
      openGraph={{
        type: 'website',
        url: 'https://www.multichoiceagency.nl',
        title: 'Website Laten Maken | Professioneel Webdesign voor Bedrijven',
        description:
          'Wil je een website laten maken? Ontdek de voordelen van een professionele website en hoe je de beste webdesigner kiest voor jouw bedrijf. Vraag een offerte aan!',
        images: [
          {
            url: 'https://www.multichoiceagency.nl/images/webdesign-expert.jpg',
            width: 1200,
            height: 630,
            alt: 'Multichoiceagency Webdesign',
          },
        ],
      }}
    />
  );
}
