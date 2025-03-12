import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconBrandGoogle,
  IconClipboardCopy,
  IconDeviceLaptop,
  IconFileBroken,
  IconScale,
  IconShoppingCartDollar,
  IconSignature,
  IconTableColumn,
  IconTools,
  IconVideo,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <div className="py-16">
      <h2 className="text-center text-3xl font-bold mb-2">Ontdek Onze Professionele Design Services</h2>
      <p className="text-center text-neutral-600 mb-8">
        Versterk je online aanwezigheid en behaal succes met innovatieve digitale strategieën.
      </p>

      <BentoGrid className="max-w-[1640px] mx-auto align-items-center">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
            video={item.video}
            link={item.link}
            tags={item.tags}
            background={item.background}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// ✅ Geoptimaliseerde dataset met SEO-vriendelijke titels en beschrijvingen
const items = [
  {
    title: "Professioneel Webdesign",
    description: "Wil je een moderne, snelle en SEO-geoptimaliseerde website die jouw merk versterkt?",
    icon: <IconDeviceLaptop className="h-6 w-6 text-green-500" />,
    video: "https://cdn.dribbble.com/userupload/18827551/file/large-ebb8018fcdd46e6a7257b8163581a47c.mp4",
    link: "website-laten-maken",
    tags: ["Responsief Webdesign", "SEO-optimalisatie", "Gebruiksvriendelijk CMS"],
    background: "bg-green-50",
  },
  {
    title: "E-commerce & Webshops",
    description: "Maximaliseer je online verkoop met een op maat gemaakte, conversiegerichte webshop.",
    icon: <IconShoppingCartDollar className="h-6 w-6 text-green-500" />,
    video: "https://filmora.wondershare.com/2023video/ai-page/04-AI-Text-To-Video_transcode_100800.mp4",
    link: "webshop-laten-maken",
    tags: ["Online Betalingen", "WooCommerce", "Shopify Webshop"],
    background: "bg-green-50",
  },
  {
    title: "Branding & Visuele Identiteit",
    description: "Creëer een unieke merkidentiteit met een professioneel en onderscheidend design.",
    icon: <IconSignature className="h-6 w-6 text-green-500" />,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    link: "wat-is-ux-ui-design",
    tags: ["Gebruikerservaring", "Prototyping", "Creatieve Strategie"],
    background: "bg-green-50",
  },
  {
    title: "SEO & Online Marketing",
    description: "Vergroot je online zichtbaarheid met strategische SEO en effectieve Google Ads-campagnes.",
    icon: <IconBrandGoogle className="h-6 w-6 text-green-500" />,
    video: "https://videos.pexels.com/video-files/4549682/4549682-hd_1920_1080_30fps.mp4",
    link: "https://www.essmarketing.nl",
    tags: ["SEO Optimalisatie", "Google Ads", "Social Media Marketing"],
    background: "bg-green-50",
    className: "md:col-span-2",
  },
  {
    title: "Bedrijfsvideo's & Reels",
    description: "Professionele bedrijfsvideo's en social media reels die je merkverhaal krachtig vertellen.",
    icon: <IconVideo className="h-6 w-6 text-green-500" />,
    video: "https://cdn.dribbble.com/userupload/3343934/file/large-db28115f00f6cd118d0cfed16ba9c59f.mp4",
    link: "https://essmedia.nl",
    tags: ["Videoproductie", "Motion Graphics", "Drone Beelden"],
    background: "bg-green-50",
  },
  {
    title: "Website Onderhoud & Beheer",
    description: "Zorgeloos websitebeheer met betrouwbare hosting, beveiliging en technische ondersteuning.",
    icon: <IconTools className="h-6 w-6 text-green-500" />,
    image: "https://cdn.dribbble.com/userupload/15412680/file/original-a65b2b4a950aa5b59c6f80c3db78447d.jpg",
    link: "website-onderhoud",
    tags: ["Hosting", "Backups", "Website Beveiliging"],
    background: "bg-green-50",
  },
];
