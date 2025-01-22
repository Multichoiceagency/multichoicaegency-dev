/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';

const PageComponent: React.FC = () => {
  return (
    <div>
      <section>
        {/* Navbar */}
        <nav className="py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              <a href="#" className="inline-block">
                <img className="h-8" src="flow-assets/logos/flow-logo.svg" alt="" />
              </a>
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                <li className="mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="#">
                    About us
                  </a>
                </li>
                <li className="mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="#">
                    Team
                  </a>
                </li>
                <li className="mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="#">
                    Solutions
                  </a>
                </li>
                <li>
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="#">
                    Blog
                  </a>
                </li>
              </ul>
              <div className="flex items-center justify-end">
                <div className="hidden md:block">
                  <a
                    href="#"
                    className="inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                  >
                    <span className="mr-2">Get in touch</span>
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.75 10H15.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4.75L15.25 10L10 15.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <button className="md:hidden text-teal-900 hover:text-teal-800">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.19995 23.2H26.7999"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.19995 16H26.7999"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.19995 8.79999H26.7999"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative">
          <div className="container mx-auto px-4">
            <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
              <div className="flex mb-6 items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="12" height="12" rx="2" fill="#022C22" />
                  <circle cx="6" cy="6" r="4" fill="#BEF264" />
                </svg>
                <span className="ml-2 text-sm font-medium">Powering Tomorrow</span>
              </div>
              <h1 className="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight mb-8">
                The Future of Green Energy
              </h1>
              <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
                Our commitment to green energy is paving the way for a cleaner, healthier planet.
                Join us on a journey towards a future where clean, renewable energy sources
                transform the way we power our lives.
              </p>
              <div className="flex flex-col sm:flex-row">
                <a
                  href="#"
                  className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                >
                  See our solutions
                </a>
                <a
                  href="#"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div>
                <h1 className="font-heading text-6xl">About us</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <p className="text-xl font-medium mb-10">
                  At Flow, we're committed to a sustainable future. As a pioneering force in the
                  green energy sector, we've been at the forefront of the transition to clean,
                  renewable power sources. Our mission is simple yet profound: to create a world
                  where energy is not only abundant but also environmentally responsible. We believe
                  that by harnessing the power of nature, we can power the world and protect it
                  simultaneously.
                </p>
                <a
                  href="#"
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      {/* Convert the rest of your sections similarly */}
    </div>
  );
};

export default PageComponent;
