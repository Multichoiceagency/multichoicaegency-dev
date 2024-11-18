import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface RelatedCasesSliderProps {
  cases: {
    title: string;
    slug: string;
    featuredImage?: {
      node?: {
        sourceUrl: string;
      };
    };
    excerpt: string;
  }[];
}

const RelatedCasesSlider: FC<RelatedCasesSliderProps> = ({ cases }) => {
  if (!cases || cases.length === 0) return null;

  return (
    <div className="overflow-x-auto whitespace-nowrap flex space-x-8 pb-6">
      {cases.map((relatedCase) => (
        <div
          key={relatedCase.slug}
          className="inline-block w-[300px] border rounded-lg overflow-hidden shadow-md"
        >
          {relatedCase.featuredImage?.node?.sourceUrl && (
            <Image
              src={relatedCase.featuredImage.node.sourceUrl}
              alt={relatedCase.title}
              width={300}
              height={200}
              className="w-full h-[200px] object-cover"
            />
          )}
          <div className="p-4">
            <p className="text-xs text-muted-foreground uppercase mb-2">Case</p>
            <h3 className="text-lg font-bold mb-2">{relatedCase.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{relatedCase.excerpt}</p>
            <Link href={`/cases/${relatedCase.slug}`} passHref>
              <span className="flex items-center text-primary font-medium hover:underline">
                Lees meer <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedCasesSlider;