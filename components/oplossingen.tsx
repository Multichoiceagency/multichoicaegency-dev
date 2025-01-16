'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShoppingCart, faLaptop, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface SolutionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const Solution: React.FC<SolutionProps> = ({ icon, title, description, link }) => (
  <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12 lg:mb-0">
    <div className="flex flex-col h-full bg-gray-900 py-4 px-6 rounded-xl transition-transform duration-300 hover:transform hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl">
      <div className="text-white text-4xl mb-6 transition-transform duration-300 hover:transform hover:scale-110 hover:rotate-6 hover:text-teal-500">
        {icon}
      </div>
      <h5 className="text-xl font-semibold text-white mt-6 mb-3 hover:text-teal-500">{title}</h5>
      <p className="text-white opacity-80 mb-6">{description}</p>
      <Link
        href={link}
        className="inline-block mt-auto text-lg font-medium text-white hover:text-teal-500 transition duration-200"
      >
        Meer informatie
      </Link>
    </div>
  </div>
);

const Oplossingen: React.FC = () => {
  const solutions = [
    {
      icon: <FontAwesomeIcon icon={faLaptop} />,
      title: 'Websites',
      description:
        'Wij ontwerpen en bouwen diverse websites, van indrukwekkende zakelijke pagina’s tot geavanceerde platforms die helpen bij het genereren van leads.',
      link: 'http://localhost:3000/websites',
    },
    {
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
      title: 'E-commerce',
      description:
        'Wij creëren gebruiksvriendelijke en visueel aantrekkelijke bestelportalen die ontworpen zijn om hoge conversies te behalen.',
      link: 'http://localhost:3000/e-commerce',
    },
    {
      icon: <FontAwesomeIcon icon={faUserShield} />,
      title: 'Portalen',
      description:
        'Een klantportaal biedt een centrale plek waar klanten, leden en collega’s eenvoudig kunnen inloggen en informatie kunnen beheren.',
      link: 'http://localhost:3000/portalen',
    },
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Software Development',
      description:
        'Wij ontwikkelen op maat gemaakte softwareoplossingen die perfect aansluiten bij jouw bedrijfsdoelen en processen automatiseren.',
      link: 'http://localhost:3000/software-development',
    },
  ];

  return (
    <motion.section
      className="p-4 bg-teal-900 rounded-3xl mx-4 sm:px-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-white">
              Onze Diensten
            </span>
          </div>
          <div className="border-t border-white border-opacity-25 pt-14">
            <h1 className="font-heading text-4xl sm:text-6xl text-white mb-24">
              Full Service Digital Agency
            </h1>
            <div className="flex flex-wrap -mx-4">
              {solutions.map((solution, index) => (
                <Solution key={index} {...solution} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Oplossingen;
