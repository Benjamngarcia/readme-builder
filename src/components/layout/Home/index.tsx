"use client";

import { FC } from 'react';
import SectionList from '../../features/SectionList';
import Editor from '../../features/Editor';

const Home: FC = () => (
  <div className="mx-auto px-4 sm:px-8 py-8 bg-background border border-gray-800">
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <div className="flex w-full">
        <div className="w-full sm:w-2/6">
          <SectionList />
        </div>
        <div className="w-full sm:w-6/6">
          <Editor />
        </div>
      </div>
    </main>
  </div>
);

export default Home;
