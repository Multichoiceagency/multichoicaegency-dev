'use client'

import { useTheme } from 'next-themes';

interface Result {
  title: string;
  description: string;
}

interface ProjectResultsProps {
  results: Result[];
}

export default function ProjectResults({ results }: ProjectResultsProps) {
  const { theme } = useTheme();

  return (
    <section className="mb-12">
      <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>Projectresultaten</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((result, index) => (
          <div key={index} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg shadow-md transition-colors duration-200`}>
            <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{result.title}</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{result.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

