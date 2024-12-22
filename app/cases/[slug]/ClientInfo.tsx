interface ClientInfoProps {
    clientName?: string;
    industry?: string;
    projectDate?: string;
  }
  
  export default function ClientInfo({ clientName, industry, projectDate }: ClientInfoProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Client Informatie</h3>
        <dl className="space-y-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Naam</dt>
            <dd className="mt-1 text-sm text-gray-900">{clientName || 'N/A'}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Industrie</dt>
            <dd className="mt-1 text-sm text-gray-900">{industry || 'N/A'}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Projectdatum</dt>
            <dd className="mt-1 text-sm text-gray-900">{projectDate || 'N/A'}</dd>
          </div>
        </dl>
      </div>
    );
  }
  
  