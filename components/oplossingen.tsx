import React from 'react';
import Link from 'next/link';

interface SolutionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Solution: React.FC<SolutionProps> = ({ icon, title, description }) => (
  <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12 lg:mb-0">
    <div className="flex flex-col h-full">
      {icon}
      <h5 className="text-2xl font-medium text-white mt-6 mb-3">{title}</h5>
      <p className="text-white opacity-80 mb-6">{description}</p>
      <Link href="#" className="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">
        Read more
      </Link>
    </div>
  </div>
);

const Oplossingen: React.FC = () => {
  const solutions = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264" />
          <circle cx="16" cy="16" r="4" fill="#022C22" />
          <circle cx="24" cy="32" r="4" fill="#022C22" />
          <circle cx="32" cy="16" r="4" fill="#022C22" />
        </svg>
      ),
      title: "EV charging",
      description: "EVs use electricity as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264" />
          <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22" />
          <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22" />
          <rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22" />
          <rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22" />
          <rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22" />
          <rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22" />
          <rect x="26.1213" y="27.5356" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5356)" fill="#022C22" />
          <rect x="11.9792" y="13.3936" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3936)" fill="#022C22" />
        </svg>
      ),
      title: "Solar Energy",
      description: "Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264" />
          <path d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z" fill="#022C22" />
          <path fillRule="evenodd" clipRule="evenodd" d="M24 25C24.5523 25 25 24.5523 25 24C25 23.4477 24.5523 23 24 23C23.4477 23 23 23.4477 23 24C23 24.5523 23.4477 25 24 25Z" fill="#022C22" />
          <path fillRule="evenodd" clipRule="evenodd" d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z" fill="#022C22" />
          <path fillRule="evenodd" clipRule="evenodd" d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z" fill="#022C22" />
          <path fillRule="evenodd" clipRule="evenodd" d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z" fill="#022C22" />
          <path fillRule="evenodd" clipRule="evenodd" d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="#022C22" />
          <path fillRule="evenodd" clipRule="evenodd" d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z" fill="#022C22" />
          <path fillRule="evenodd" clipRule="evenodd" d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z" fill="#022C22" />
        </svg>
      ),
      title: "Wind Energy",
      description: "Wind turbines harness the kinetic energy of the wind to generate electricity. Wind farms with multiple turbines are commonly used to produce large amounts of clean energy."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264" />
          <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36L24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22" />
        </svg>
      ),
      title: "Hydropower",
      description: "This technology uses the energy from flowing water, such as rivers and dams, to turn turbines and generate electricity. It's one of the oldest forms of renewable energy."
    }
  ];

  return (
    <section className="p-4 bg-white">
      <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-teal-900 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-white">Onze oplossingen</span>
          </div>
          <div className="border-t border-white border-opacity-25 pt-14">
            <h1 className="font-heading text-4xl sm:text-6xl text-white mb-24">Full Service Digital Agency</h1>
            <div className="flex flex-wrap -mx-4">
              {solutions.map((solution, index) => (
                <Solution key={index} {...solution} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oplossingen;

