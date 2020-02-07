import React from 'react';
import { InstaGallery } from './components/InstaGallery';

function App() {
  return (
    <div className="bg-blue-300 h-screen">
      <h1 className="w-full bg-gray-800 text-white p-4 fixed top-0 z-10 flex">
        <img src="/logo.svg" alt="Logo of a teapot" className="h-10 w-10"/>
        <span className="pl-4">Over-Engineered Teapot</span>
      </h1>
      <div className="flex pt-16">
        <InstaGallery />
      </div>
      <div className="w-full bg-blue-600 p-4 fixed bottom-0 flex justify-center">
        <span className="text-white">
          Lovingly crafted by TEAM TEAPOT
        </span>
      </div>
    </div>
  );
}

export default App;
