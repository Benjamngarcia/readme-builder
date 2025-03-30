import React from "react";
import { IconStar } from "@tabler/icons-react";
import Button from "../../../components/ui/Button";

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
          <div className="flex items-center">
            <Button
              as="a"
              href="https://github.com/Benjamngarcia/readme-builder"
              target="_blank"
              variant="outlined"
              color="gray"
              icon={<IconStar size={16} />}
            >
              Star us on GitHub
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
