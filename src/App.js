import React from 'react';
import { InstaGallery } from './components/InstaGallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="w-full bg-gray-800 text-white">Over-Engineered Teapot</h1>
        <div className="w-full bg-gray-600 text-white">Lovingly crafted by TEAM TEAPOT</div>
      </header>
      <InstaGallery />
    </div>
  );
}

export default App;
