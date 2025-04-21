import { NextSeo } from "next-seo"

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
}

export default function SEO({ title, description, canonical, ogImage }: SEOProps) {
  const defaultOgImage = "https://multichoiceagency.nl/og-image.jpg"

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: title,
          description: description,
          images: [
            {
              url: ogImage || defaultOgImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          site_name: "Multichoiceagency",
        }}
        twitter={{
          handle: "@multichoiceagency",
          site: "@multichoiceagency",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `${title}, marketing, branding, digital, agency, multichoiceagency`,
          },
        ]}
      />
    </>
  )
}
