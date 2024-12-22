interface ProjectResultsProps {
    results: string[];
  }
  
  export default function ProjectResults({ results }: ProjectResultsProps) {
    if (results.length === 0) return null;
  
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Projectresultaten</h2>
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">{result}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  