import dynamic from "next/dynamic";

export const metadata = {
  title: "WordPress Website Laten Maken | Professioneel & Op Maat | Multichoice Agency",
  description:
    "Laat jouw WordPress website op maat maken door experts. Wij bouwen snelle, veilige en SEO-vriendelijke websites met Elementor en custom design.",
  alternates: {
    canonical: "/webdevelopment/wordpress-website-laten-maken",
  },
  openGraph: {
    title: "WordPress website laten maken | Professioneel & Op Maat",
    description:
      "Meer dan 200 WordPress websites op maat ontwikkeld met Elementor en custom design. Vraag vandaag nog een gratis consult aan.",
    url: "https://www.multichoiceagency.nl/webdevelopment/wordpress-website-laten-maken",
    siteName: "Multichoice Agency",
    images: [
      {
        url: "https://www.multichoiceagency.nl/images/og-wordpress-website.jpg",
        width: 1200,
        height: 630,
        alt: "Voorbeeld WordPress website",
      },
    ],
    type: "website",
  },
};

const WordPressWebsiteClient = dynamic(() => import("@/app/webdevelopment/wordpress-website-laten-maken/WordpressWebsiteClient"), { ssr: true });

export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.jouwdomein.nl/webdevelopment/wordpress-website-laten-maken",
                "url": "https://www.jouwdomein.nl/webdevelopment/wordpress-website-laten-maken",
                "name": "WordPress Website Laten Maken",
                "description":
                  "Professionele WordPress website laten maken? Wij bouwen custom WordPress websites met Elementor, volledig responsive en SEO-proof.",
                "inLanguage": "nl-NL",
                "isPartOf": {
                  "@id": "https://www.jouwdomein.nl/"
                },
                "about": {
                  "@id": "https://www.jouwdomein.nl/#organization"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://www.multichchoiceagency.nl/#organization",
                "name": "Multichoice Agency",
                "url": "https://www.multichoiceagency.nl",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.multichoiceagency.nl/logo.svg"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/multichoiceagency/",
                  "https://www.instagram.com/multichoiceagency/",
                  "https://www.facebook.com/profile.php?id=61553986303783"
                ]
              }
            ]
          })
        }}
      />
      <WordPressWebsiteClient />
    </>
  );
}
