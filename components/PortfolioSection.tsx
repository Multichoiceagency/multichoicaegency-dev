"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface PortfolioItem {
  title: string;
  subtitle: string;
  media: {
    type: "video" | "image";
    src: string;
  };
  image: string;
  logo: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Zenhub",
    subtitle: "Projectmanagement Platform",
    media: {
      type: "video",
      src: "https://cdn.pixabay.com/video/2018/12/24/20218-308135835_large.mp4",
    },
    image: "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23FF5733'/%3E%3Cpath d='M30 40 L50 60 L70 40' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["Branding", "Webontwerp", "Webflow Ontwikkeling"],
  },
  {
    title: "Pimly",
    subtitle: "Productinformatie Beheer",
    media: {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    },
    image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%2333B5E5'/%3E%3Cpath d='M20 50 L40 30 L40 70 L60 30 L60 70 L80 50' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["Branding", "Webontwerp", "Webflow Ontwikkeling"],
  },
  {
    title: "Salesforce",
    subtitle: "Enterprise CRM Oplossingen",
    media: {
      type: "video",
      src: "https://cdn.pixabay.com/video/2021/09/29/16-27-50-4_720.mp4",
    },
    image: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%234CAF50'/%3E%3Cpath d='M30 50 L45 65 L70 40' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["Webontwerp", "Frontend Ontwikkeling", "API Integratie"],
  },
  {
    title: "TechFlow",
    subtitle: "Ontwikkelaarsproductiviteit Tools",
    media: {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    },
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23FFC107'/%3E%3Cpath d='M20 50 L40 30 M40 70 L60 50 M60 50 L80 30 M80 70' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["UX Ontwerp", "Frontend Ontwikkeling", "Backend Ontwikkeling"],
  },
  {
    title: "DataSync",
    subtitle: "Real-time Data Platform",
    media: {
      type: "video",
      src: "https://cdn.pixabay.com/video/2020/05/31/06-55-07-26_720.mp4",
    },
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%239C27B0'/%3E%3Cpath d='M30 50 L50 30 L70 50 L50 70 Z' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["Systeemontwerp", "Backend Ontwikkeling", "API Ontwikkeling"],
  },
  {
    title: "CloudScale",
    subtitle: "Cloud Infrastructuur Beheer",
    media: {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg",
    },
    image: "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23607D8B'/%3E%3Cpath d='M20 80 Q50 20 80 80' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["DevOps", "Backend Ontwikkeling", "API Integratie"],
  },
  {
    title: "SecureAuth",
    subtitle: "Authenticatie Platform",
    media: {
      type: "video",
      src: "https://cdn.pixabay.com/video/2021/03/22/08-13-24-43_720.mp4",
    },
    image: "https://cdn.pixabay.com/photo/2017/01/23/19/40/cyber-security-2003786_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23E91E63'/%3E%3Cpath d='M50 20 L50 80 M30 50 L70 50' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["Beveiliging", "Backend Ontwikkeling", "API Ontwikkeling"],
  },
  {
    title: "EcomFlow",
    subtitle: "E-commerce Oplossingen",
    media: {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2017/12/12/12/44/bitcoin-3014614_1280.jpg",
    },
    image: "https://cdn.pixabay.com/photo/2017/12/12/12/44/bitcoin-3014614_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23795548'/%3E%3Cpath d='M20 50 L40 30 L60 50 L80 30' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["E-commerce", "Frontend Ontwikkeling", "Backend Ontwikkeling"],
  },
  {
    title: "AnalyticsPro",
    subtitle: "Business Intelligence Tools",
    media: {
      type: "video",
      src: "https://cdn.pixabay.com/video/2020/06/22/14/49/network-5330205_720.mp4",
    },
    image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23009688'/%3E%3Cpath d='M30 70 L50 30 L70 70' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["Data Analyse", "Frontend Ontwikkeling", "API Integratie"],
  },
  {
    title: "ContentHub",
    subtitle: "Content Management Systeem",
    media: {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2020/03/06/08/23/digital-marketing-4906977_1280.jpg",
    },
    image: "https://cdn.pixabay.com/photo/2020/03/06/08/23/digital-marketing-4906977_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%233F51B5'/%3E%3Cpath d='M30 30 L70 30 L70 70 L30 70 Z' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["CMS Ontwikkeling", "Frontend Ontwikkeling", "Backend Ontwikkeling"],
  },
  {
    title: "AIAssist",
    subtitle: "AI-Powered Customer Service",
    media: {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png",
    },
    image: "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23673AB7'/%3E%3Cpath d='M30 50 C30 30, 70 30, 70 50 C70 70, 30 70, 30 50' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["AI", "Klantenservice", "Chatbot Ontwikkeling"],
  },
  {
    title: "BlockChainX",
    subtitle: "Blockchain Solutions for Business",
    media: {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_1280.jpg",
    },
    image: "https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_1280.jpg",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23FF9800'/%3E%3Cpath d='M30 30 L70 30 L70 70 L30 70 Z M50 30 L50 70 M30 50 L70 50' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E",
    tags: ["Blockchain", "Smart Contracts", "Cryptocurrency"],
  },
];

export function PortfolioSection() {
  return (
    <section className="bg-[#0A0A0B] py-24">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-green-400 text-lg font-medium tracking-wide uppercase">
            KLANTPROJECTEN
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white">
            Onze cases
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && videoRef.current && item.media.type === "video") {
      videoRef.current.play().catch(error => console.error("Autoplay failed:", error));
    }
  }, [isInView, item.media.type]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl bg-[#141417] p-4 transition-all duration-300 hover:bg-[#1A1A1D]"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
        {item.media.type === "video" ? (
          <video
            ref={videoRef}
            src={item.media.src}
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/5">
          <Image
            src={item.logo}
            alt={`${item.title} logo`}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white">
            {item.title}
          </h4>
          <p className="text-gray-400">{item.subtitle}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

