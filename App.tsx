import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-gold-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Team />
        <MapSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;