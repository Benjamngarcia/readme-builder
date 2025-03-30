"use client";
import React, { useState, useEffect } from "react";
import { IconArrowRight, IconStar, IconMenu, IconX } from "@tabler/icons-react";
import Button from "../../../components/ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-background text-white shadow-md border border-gray-800 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold">
              Readme Builder
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            {mounted && pathname !== "/editor" && (
              <Button
                as="a"
                href="/editor"
                variant="outlined"
                color="blue"
                icon={<IconArrowRight size={16} />}
              >
                Go to Editor
              </Button>
            )}
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
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition-transform duration-300 ease-out"
            >
              {isMenuOpen ? (
                <IconX size={24} className="transition-transform duration-300 ease-out" />
              ) : (
                <IconMenu size={24} className="transition-transform duration-300 ease-out" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className="sm:hidden bg-background border-t border-gray-800 overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isMenuOpen ? "150px" : "0px" }}
      >
        <div className="px-4 py-2 flex flex-col space-y-2">
          {mounted && pathname !== "/editor" && (
            <Button
              as="a"
              href="/editor"
              variant="outlined"
              color="blue"
              icon={<IconArrowRight size={16} />}
            >
              Go to Editor
            </Button>
          )}
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
    </nav>
  );
};

export default Navbar;
