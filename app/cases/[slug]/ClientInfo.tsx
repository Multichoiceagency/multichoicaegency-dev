'use client';

import { useTheme } from 'next-themes';
import { parseISO, isValid } from 'date-fns';
import Image from 'next/image';
import { decodeHtml } from '@/utils/decodeHtml';

interface ClientInfoProps {
  clientName: string;
  industry: string;
  projectDate: string;
  logonew: string; // New prop for logo
}

export default function ClientInfo({ clientName, industry, projectDate, logonew }: ClientInfoProps) {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-white' : 'bg-gray-100'} p-6 rounded-lg shadow-md transition-colors duration-200`}>
      {/* Client Information */}
      {logonew && (
        <div className="flex justify-left mb-6">
          <Image
            src={logonew}
            alt={`${clientName} logo`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      )}
      <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-black' : 'text-gray-900'}`}>Client Informatie</h3>
      <ul className="space-y-2">
        <li className={`${theme === 'dark' ? 'text-black' : 'text-gray-700'}`}>
          <span className="font-semibold">Naam:</span> {clientName}
        </li>
        <li className={`${theme === 'dark' ? 'text-black' : 'text-gray-700'}`}>
          <span className="font-semibold">Industrie:</span> {industry}
        </li>
        <li className={`${theme === 'dark' ? 'text-black' : 'text-gray-700'}`}>
          <span className="font-semibold">Projectdatum:</span>{' '}
          {(() => {
            const date = parseISO(projectDate);
            if (isValid(date)) {
              return new Intl.DateTimeFormat('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }).format(date);
            }
            return projectDate; // Return original string if parsing fails
          })()}
        </li>
      </ul>
    </div>
  );
}
