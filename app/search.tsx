/* eslint-disable @next/next/no-img-element */
'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || ''; // Get query from URL
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchSearchResults(query);
    }
  }, [query]);

  const fetchSearchResults = async (searchQuery: string) => {
    try {
      const res = await fetch(
        `https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?search=${searchQuery}`
      );
      if (!res.ok) {
        throw new Error('Failed to fetch search results.');
      }
      const data = await res.json();
      setResults(data);
      setError(null);
    } catch (err) {
      setError('Er is iets misgegaan bij het ophalen van zoekresultaten.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Zoekresultaten</h1>

        {isLoading && <p className="text-gray-500">Laden...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!isLoading && !error && results.length === 0 && (
          <p className="text-gray-500">Geen resultaten gevonden voor: "{query}"</p>
        )}

        {/* Display Search Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result) => (
            <div
              key={result.id}
              className="border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href={`/cases/${result.slug}`}>
                <a>
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={result._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
                      alt={result.title.rendered}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{result.title.rendered}</h3>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
