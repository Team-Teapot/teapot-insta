import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InstaGallery } from './components/InstaGallery';

function App() {
  return (
    <div className="bg-blue-300 h-screen">
      <Header />
      <div className="flex pt-16">
        <InstaGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
