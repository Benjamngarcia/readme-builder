import React, { FC } from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconSparkles,
  IconDeviceDesktop,
  IconSettings,
  IconRocket,
} from "@tabler/icons-react";
import HeroImage from "../../../assets/hero-image.png";
import MemojiFer from "../../../assets/memoji-fer.jpg";
import Mockup from "../../../assets/mockup.png";

const Landing: FC = () => (
  <div className="text-white">
    {/* Hero Section */}
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-6 flex flex-col gap-2 md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <div className="flex">
            <span className="px-3 py-1 text-xs border-2 border-blue-500 text-blue-500 rounded-full transition-all duration-300 hover:bg-blue-500 hover:border-blue-500 hover:bg-opacity-20 flex items-center justify-center mb-8">
              <IconSparkles size={16} className="mr-2" />
              Build your README.md in seconds
            </span>
          </div>
          <h1 className="text-4xl font-bold">
            Create Your{" "}
            <span className="markdown-body">
              <code>README.md</code>
            </span>{" "}
            in Seconds
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Generate professional documentation for your projects quickly and
            effortlessly with our intuitive README builder.
          </p>

          <div className="mt-6 flex">
            <Link
              href="/editor"
              className="flex items-center justify-center rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white py-2 px-4 text-md space-x-2 gap-2"
            >
              <IconArrowRight size={16} className="mr-2" />
              Try it now
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={HeroImage.src}
            alt="App Demo"
            className="mx-auto rounded-lg shadow-lg w-full max-w-[800px] z-10"
          />
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="pt-20 bg-background text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">Key Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-background border border-gray-500 text-white p-6 rounded-lg shadow-lg flex flex-col gap-4 h-full transform transition-all duration-300 hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500 transform transition-all duration-500 hover:scale-100 opacity-0 hover:opacity-20 z-10"></div>
            <h3 className="text-xl font-semibold">
              <IconDeviceDesktop size={32} className="mr-2" />
            </h3>
            <h3 className="text-lg font-semibold">Easy to use</h3>
            <p className="text-md text-gray-400">
              An intuitive interface that guides you step-by-step through the
              process of creating your README.md file.
            </p>
          </div>
          <div className="bg-background border border-gray-500 text-white p-6 rounded-lg shadow-lg flex flex-col gap-4 h-full transform transition-all duration-300 hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500 transform transition-all duration-500 hover:scale-100 opacity-0 hover:opacity-20 z-10"></div>
            <h3 className="text-xl font-semibold">
              <IconSettings size={32} className="mr-2" />
            </h3>
            <h3 className="text-lg font-semibold">Highly Customizable</h3>
            <p className="text-md text-gray-400">
              Add custom sections to tailor the README to the specific needs of
              your project.
            </p>
          </div>
          <div className="bg-background border border-gray-500 text-white p-6 rounded-lg shadow-lg flex flex-col gap-4 h-full transform transition-all duration-300 hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500 transform transition-all duration-500 hover:scale-100 opacity-0 hover:opacity-20 z-10"></div>
            <h3 className="text-xl font-semibold">
              <IconRocket size={32} className="mr-2" />
            </h3>
            <h3 className="text-lg font-semibold">Fast export</h3>
            <p className="text-md text-gray-400">
              Generate and download your README.md file ready to use in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Image Section */}
    <section
      style={{
        backgroundImage: "url('/wave.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-4xl h-fit mx-auto">
        <img src={Mockup.src} alt="App Demo" className="rounded-lg w-full" />
      </div>
    </section>

    {/* Testimonials */}
    <section className="pb-20 bg-background text-white mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          What Our Users Are Saying
        </h2>
        <div className="mt-10 flex justify-center">
          <div className="w-full md:w-1/2 text-left flex items-start justify-between p-6 border-2 border-gray-500 rounded-lg shadow-lg bg-background">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Amazing Experience</h3>
              <p className="mt-2 text-lg text-gray-400">
                This app is a game-changer! It makes creating README files so
                easy and fun.
              </p>
              <div className="mt-4 font-semibold text-gray-100 flex gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={MemojiFer.src}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="justify-center flex flex-col p-2 rounded-lg">
                  @fer_tru_
                  <div className="text-sm text-gray-400">
                    Frontend Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12 bg-background text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Found a bug or got an idea?
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          If you discover any bug or have suggestions to improve the app, feel
          free to send me a message on Instagram.
        </p>
        <Link
          href="https://instagram.com/benjamngarcia"
          target="_blank"
          className="inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white py-2 px-4 text-md space-x-2 gap-2"
        >
          <IconArrowRight size={16} className="mr-2 transform -rotate-45" />
          Message on Instagram
        </Link>
      </div>
    </section>
  </div>
);

export default Landing;
