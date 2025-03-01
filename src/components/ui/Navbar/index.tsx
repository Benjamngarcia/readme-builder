import React from "react";
import { IconStar } from "@tabler/icons-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background text-white shadow-md border border-gray-800 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-semibold">
              Readme Builder
            </a>
          </div>

          {/* TODO: This button will be able later */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Benjamngarcia/readme-builder"
              target="_blank"
              className="px-3 py-1 text-white rounded-md transition-all duration-300 transform hover:bg-gray-700 flex items-center justify-center"
            >
              <IconStar
                size={12}
                className="mr-2 transition-all duration-300 transform hover:scale-125"
              />
              GitHub
            </a>
          </div>
          {/* <div className="flex space-x-4">
            <a href="#" className="text-lg hover:text-blue-400 transition-colors">Donate</a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
