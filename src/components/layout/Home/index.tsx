"use client";

import { FC, useState, useEffect } from "react";
import SectionList from "../../features/SectionList";
import Editor from "../../features/Editor";

const Home: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1030);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-background text-white text-center py-2 h-full opacity-95 flex justify-center items-center overflow-hidden z-90">
        <p>For a better experience, we recommend viewing this on a desktop.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 sm:px-8 py-8 bg-background border border-gray-800">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <div className={`flex w-full ${isMobile ? "flex-col" : "flex-row"}`}>
          <div className={`${isMobile ? "w-full" : "w-full sm:w-2/6"}`}>
            <SectionList />
          </div>
          <div className={`${isMobile ? "w-full" : "w-full sm:w-6/6"}`}>
            <Editor />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
