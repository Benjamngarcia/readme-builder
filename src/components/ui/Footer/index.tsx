import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex justify-between container items-center">
        <div className="text-sm flex flex-row sm:flex-col items-center justify-center sm:justify-start w-full sm:w-auto">
          <Link
            href="https://portfolio-benjamn.vercel.app/"
            target="_blank"
            className="text-gray-600 hover:text-blue-500 transition-all duration-300"
          >
            &copy; {new Date().getFullYear()} Benjamín García
          </Link>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            Made with 💙 in
            <img src="./mexico.svg" alt="Bandera de México" className="w-6" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-0">
          <Link
            href="https://github.com/Benjamngarcia/readme-builder"
            target="_blank"
            className="text-gray-600 hover:text-blue-500 transition-all duration-300"
          >
            Repo
          </Link>
          <div className="w-1 h-1 rounded-full mx-4 bg-gray-500 my-auto" />
          <Link
            href="https://github.com/Benjamngarcia"
            target="_blank"
            className="text-gray-600 hover:text-blue-500 transition-all duration-300 mx-2"
          >
            <IconBrandGithub className="w-6 h-6" stroke={2} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/benjamngarcia"
            target="_blank"
            className="text-gray-600 hover:text-blue-500 transition-all duration-300 mx-2"
          >
            <IconBrandLinkedin className="w-6 h-6" stroke={2} />
          </Link>
          <Link
            href="https://www.instagram.com/benjamngarcia/"
            target="_blank"
            className="text-gray-600 hover:text-blue-500 transition-all duration-300 mx-2"
          >
            <IconBrandInstagram className="w-6 h-6" stroke={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
