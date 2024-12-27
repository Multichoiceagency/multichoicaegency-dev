'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Case {
  id: number;
  title: string;
  subtitle: string;
  media: {
    type: "video" | "image";
    src: string;
  };
  image: string;
  logonew: string;
  tags: string[];
  slug: string;
  category: string;
}

interface Category {
  id: number;
  name: string;
}

export default function CasesPage() {
  const [cases, setCases] = useState<Case[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCases, setFilteredCases] = useState<Case[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    // Fetch all cases from WordPress
    const fetchCases = async () => {
      const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed');
      const data = await res.json();

      const formattedCases = data.map((item: any) => ({
        id: item.id,
        title: item.title.rendered,
        subtitle: item.acf?.subtitle || "",
        media: {
          type: item.acf?.media_type || "image",
          src:
            item.acf?.media_type === "video"
              ? item.acf?.video_url
              : item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
        },
        image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
        logonew: item.acf?.logonew || "",
        tags: item.acf?.tags ? item.acf.tags.split(",").map((tag: string) => tag.trim()) : [],
        slug: item.slug,
        category: item.acf?.category || 'Uncategorized',
      }));

      setCases(formattedCases);
      setFilteredCases(formattedCases);
    };

    // Fetch categories from WordPress
    const fetchCategories = async () => {
      const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/categories');
      const data = await res.json();

      const formattedCategories = data.map((item: any) => ({
        id: item.id,
        name: item.name,
      }));

      setCategories([{ id: 0, name: 'All' }, ...formattedCategories]);
    };

    fetchCases();
    fetchCategories();
  }, []);

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredCases(cases);
    } else {
      setFilteredCases(cases.filter((c) => c.category.toLowerCase() === category.toLowerCase()));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-[#0A0A0B] text-white py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Onze Cases</h1>
          <p className="text-lg text-gray-300">
            Bekijk onze succesvolle projecten en ontdek hoe wij waarde creëren.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories */}
        <div className="flex space-x-4 mb-8 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilter(category.name)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.name
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href={`/cases/${caseItem.slug}`}>
                <div className="relative aspect-w-16 aspect-h-9">
                  {caseItem.media.type === "video" ? (
                    <video
                      src={caseItem.media.src}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  ) : (
                    <Image
                      src={caseItem.media.src}
                      alt={caseItem.title}
                      fill
                      className="object-cover rounded-t-lg"
                      onError={(e: any) => {
                        e.target.src = '/placeholder.jpg';
                      }}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{caseItem.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{caseItem.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-700 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
