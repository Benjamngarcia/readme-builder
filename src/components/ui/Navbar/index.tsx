import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-semibold">Readme Builder</a>
          </div>

          {/* TODO: This button will be able later */}
          {/* <div className="flex space-x-4">
            <a href="#" className="text-lg hover:text-blue-400 transition-colors">Donate</a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
