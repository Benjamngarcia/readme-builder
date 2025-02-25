import React, { FC } from 'react';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

const Landing: FC = () => (
  <div className="bg-backgroundSecondary text-white">
    {/* Hero Section */}
    <section className="text-center py-20 bg-background text-white relative">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold">Create Your README.md in Minutes</h1>
        <p className="mt-4 text-lg">Generate professional documentation for your projects quickly and effortlessly with our intuitive README builder.</p>
        <div className="mt-6 flex justify-center">
          <Link href="/editor" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full transition-transform transform hover:scale-105 flex items-center justify-center">
            <IconArrowRight size={16} className="mr-2" />
            Get Started Now
          </Link>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-background text-white relative mb-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">Key Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold flex justify-center items-center">
              🖥️ Easy to Use
            </h3>
            <p className="mt-2 text-center">An intuitive interface that guides you step-by-step through the process of creating your README.md file.</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold flex justify-center items-center">
              ⚙️ Highly Customizable
            </h3>
            <p className="mt-2 text-center">Add custom sections to tailor the README to the specific needs of your project.</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold flex justify-center items-center">
              🚀 Fast Export
            </h3>
            <p className="mt-2 text-center">Generate and download your README.md file ready to use in seconds.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Image Section */}
    <section className="relative -mt-24 -mb-24">
      <div className="container mx-auto px-6">
        <img
          src="./mockup.png"
          alt="App Demo"
          className="mx-auto rounded-lg shadow-lg w-full  -mt-24 z-10"
        />
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-background text-white mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">What Our Users Are Saying</h2>
        <div className="mt-10 flex justify-center">
          <div className="w-full md:w-1/2 text-center">
            <p className="text-lg italic">"An essential tool for any developer. It saves me hours of work!"</p>
            <p className="mt-4 font-semibold">Ian Pérez</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Landing;
