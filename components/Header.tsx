import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME, BOOKSY_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Equipo', href: '#team' },
    { name: 'Ubicación', href: '#map' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // 1. Close mobile menu immediately
    setIsMobileMenuOpen(false);
    
    // 2. Smooth scroll logic (simulating scroll-snap behavior)
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset for fixed header (approx 80px) to ensure section title is visible
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          TRIGUERO’S <span className="text-gold-500">BARBERSHOP</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-gold-500 text-sm uppercase tracking-widest font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={BOOKSY_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold-500 hover:bg-gold-600 text-dark-950 px-5 py-2 rounded font-bold text-sm transition-transform hover:scale-105"
          >
            RESERVAR
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-900 absolute top-full left-0 w-full border-t border-dark-800 animate-in slide-in-from-top-5 shadow-2xl h-[calc(100vh-80px)] bg-opacity-95 backdrop-blur-md overflow-y-auto">
          <nav className="flex flex-col p-8 gap-6 items-center pt-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-2xl font-bold hover:text-gold-500 transition-colors tracking-wide w-full text-center py-2 active:scale-95 duration-150"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={BOOKSY_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold-500 text-center text-dark-950 py-4 px-10 rounded-full font-black mt-8 hover:scale-105 transition-transform w-full max-w-xs shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              RESERVAR AHORA
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;