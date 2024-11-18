"use client";

import { useEffect, useState } from "react";
import { ApolloProvider, gql, useQuery } from "@apollo/client";
import client from "../../lib/apollo-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import RelatedCasesSlider from "@/components/RelatedCasesSlider";

const GET_PORTFOLIO_CASES = gql`
  query GetPortfolioCases {
    posts {
      nodes {
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
      }
    }
  }
`;

const CasesPage = () => {
  const { loading, error, data } = useQuery(GET_PORTFOLIO_CASES);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    if (data && data.posts && data.posts.nodes) {
      setCases(data.posts.nodes);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      {/* Header Section */}
      <div className="relative w-full h-[500px] mb-16">
        <Image
          src="/images/hero-image.jpg" // Replace with actual hero image URL
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">
            Cases: Hoe leer je kinderen over de gevaren van sociale media, met AI?
          </h1>
          <Button variant="primary">Lees het verhaal</Button>
        </div>
      </div>

      {/* Portfolio Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.length > 0 ? (
          cases.map((portfolioCase) => (
            <div key={portfolioCase.slug} className="group relative border rounded-lg overflow-hidden shadow-md">
              {portfolioCase.featuredImage?.node?.sourceUrl && (
                <Image
                  src={portfolioCase.featuredImage.node.sourceUrl}
                  alt={portfolioCase.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                <Link href={`/cases/${portfolioCase.slug}`} passHref>
                  <span className="text-white text-2xl font-bold hover:underline">
                    {portfolioCase.title}
                  </span>
                </Link>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{portfolioCase.excerpt}</p>
                <Link href={`/cases/${portfolioCase.slug}`} passHref>
                  <Button variant="link" className="mt-4">Lees meer</Button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No cases available.</p>
        )}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center mt-16">
        <Button variant="ghost">
          <ChevronRight className="w-6 h-6" />
        </Button>
        <p className="text-lg">1/5</p>
        <Button variant="ghost">
          <ChevronRight className="w-6 h-6 rotate-180" />
        </Button>
      </div>

      {/* Related Cases Slider Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Gerelateerde cases</h2>
        {cases.length > 0 && <RelatedCasesSlider cases={cases} />}
      </div>

      {/* Footer Section */}
      <div className="mt-20 border-t pt-10 text-center">
        <p className="text-lg font-semibold mb-4">
          Behoren ook tot onze klantenportefeuille
        </p>
        {/* Logos (replace with real logo images) */}
        <div className="flex flex-wrap justify-center gap-6">
          <div>
            <Image src="/images/logo1.png" alt="Client Logo 1" width={100} height={50} />
          </div>
          <div>
            <Image src="/images/logo2.png" alt="Client Logo 2" width={100} height={50} />
          </div>
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
};

const ApolloCasesPage = () => (
  <ApolloProvider client={client}>
    <CasesPage />
  </ApolloProvider>
);

export default ApolloCasesPage;