import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// ✅ **BentoGrid Component**
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
        "grid md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

// ✅ **BentoGridItem Component**
export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  image,
  video,
  link,
  tags,
  background,
}: {
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  video?: string;
  link?: string;
  tags?: string[];
  background?: string;
}) => {
  const Content = (
    <div
      className={cn(
        `rounded-xl dark:bg-gray-10 overflow-hidden shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]`,
        background ? background : "bg-white",
        className
      )}
    >
      {/* ✅ Video of afbeelding tonen */}
      {video ? (
        <video
          className="w-full h-56 rounded-lg object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : image ? (
        <Image
          src={image}
          alt={title || "BentoGrid item"}
          width={600}
          height={300}
          className="w-full h-56 rounded-lg object-cover"
        />
      ) : null}

      {/* ✅ Content */}
      <div className="mt-4">
        {icon && <div className="mb-2">{icon}</div>}
        <h3 className="text-1xl font-bold dark:text-black">{title}</h3>
        <p className="mt-1 text-sm dark:text-black">{description}</p>

        {/* ✅ Tags */}
        {tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-black/10 text-black/80 px-3 py-1 rounded-full text-xs hover:bg-green-900 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return link ? <Link href={link}>{Content}</Link> : Content;
};
