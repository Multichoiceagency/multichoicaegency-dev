"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowRight,
} from "@tabler/icons-react";

// HeaderSection Component
const HeaderSection = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Onze Specialisaties
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-300">
        Discover our comprehensive range of digital solutions designed to drive your business forward in the digital age.
      </p>
      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
        Bekijk al onze diensten
      </button>
    </div>
  );
};

// BentoGrid Component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[18rem] max-w-7xl mx-auto px-4 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem Component
export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  image,
  video,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  video?: string;
  link?: string;
}) => {
  const Content = (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] group bg-[#232323] border-none cursor-pointer h-full",
        className
      )}
    >
      {/* Media Section */}
      <div className="relative h-48">
        {video ? (
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay={true}
            loop
            muted
            playsInline
            preload="auto"
          />
        ) : image ? (
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={image}
              alt={title ? title.toString() : "Bento Grid Item"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : null}
      </div>

      {/* Content Container */}
      <div className="relative flex-grow">
        {/* Content Section */}
        <div className="absolute inset-0 flex items-start space-x-4 p-4 bg-[#232323] transition-opacity duration-300 group-hover:opacity-0">
          {icon && (
            <div className="text-neutral-400 mt-1 flex-shrink-0">
              {icon}
            </div>
          )}
          <div>
            {title && (
              <h3 className="text-lg font-bold text-white">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-sm text-neutral-300">
                {description}
              </p>
            )}
          </div>
        </div>
        {/* Direct Bekijken - Same Position */}
        <div className="absolute inset-0 flex items-center justify-between px-6 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-medium">Direct bekijken</span>
          <IconArrowRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return link ? (
    <Link href={link} passHref>
      {Content}
    </Link>
  ) : (
    Content
  );
};

// Example Usage
export function BentoGridDemo() {
  const items = [
    {
      title: "Websites & E-commerce",
      description:
        "Een website is jouw digitale visitekaartje en zorgt voor een professionele uitstraling online.",
      icon: <IconClipboardCopy className="h-6 w-4" />,
      video: "https://videos.pexels.com/video-files/3114574/3114574-uhd_2560_1440_25fps.mp4",
      link: "https://ess.nl",
    },
    {
      title: "Technologie en AI",
      description:
        "Wij bieden slimme AI-oplossingen voor een efficiënte en duurzame digitale transformatie.",
      icon: <IconFileBroken className="h-8 w-4" />,
      video: "https://filmora.wondershare.com/2023video/ai-page/04-AI-Text-To-Video_transcode_100800.mp4",
      link: "https://ess.nl",
    },
    {
      title: "UX / UI Design",
      description:
        "Een goed UX/UI design is essentieel voor gebruiksvriendelijke en aantrekkelijke digitale producten.",
      icon: <IconSignature className="h-8 w-4" />,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Marketing",
      description:
        "Met meer dan 8 jaar ervaring optimaliseren wij jouw online marketingstrategie. Wij zorgen voor meetbare resultaten en duurzame groei.",
      icon: <IconTableColumn className="h-8 w-4" />,
      video: "https://videos.pexels.com/video-files/4549682/4549682-hd_1920_1080_30fps.mp4 ",
    },
    {
      title: "IT- infrastructuur & hosting",
      description:
        "Een schaalbare en veilige IT-strategie stelt jouw organisatie in staat om te groeien en toekomstbestendig te blijven.",
      icon: <IconArrowWaveRightUp className="h-8 w-4" />,
      image: "https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://ess.nl",
    },
    {
      title: "Onderhoud en beheer",
      description:
        "Wij onderhouden software applicaties en nemen bestaande applicaties in beheer.",
      icon: <IconBoxAlignTopLeft className="h-8 w-4" />,
      video: "https://videos.pexels.com/video-files/3209829/3209829-uhd_2560_1440_25fps.mp4",
    },
    {
      title: "Platforms & partners",
      description:
        "Wij versnellen je digitale transformatie door gebruik te maken van bewezen technologie.",
      icon: <IconBoxAlignRightFilled className="h-8 w-4" />,
      image: "https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="py-16 bg-[#111111]">
      <HeaderSection />
      <BentoGrid className="max-w-[1440px] mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
            video={item.video}
            link={item.link}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
