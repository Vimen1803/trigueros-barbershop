import React from 'react';
import { Star, Calendar, MapPin } from 'lucide-react';
import { BOOKSY_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/triguero.png" 
          alt="Interior de barbería moderna en Zaragoza" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-dark-950/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 mt-10">
        <div className="max-w-3xl">
          {/* Rating Badge replaces Premium Text */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-dark-900/80 border border-gold-500/30 rounded-full mb-8 backdrop-blur-md shadow-lg shadow-black/20">
              <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" className="text-gold-500" />
                  ))}
              </div>
              <div className="flex items-center gap-2 border-l border-gray-600 pl-3 ml-1">
                 <span className="text-white font-bold text-sm">4.9</span>
                 <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">+350 Reseñas</span>
              </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            ESTILO QUE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">
              MARCA
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Tu imagen es tu carta de presentación. En <strong>Triguero's Barbershop</strong> cuidamos cada detalle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-400 text-dark-950 font-black py-4 px-10 rounded text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] text-center tracking-wide flex items-center justify-center gap-2"
            >
              <Calendar size={20} /> RESERVAR AHORA
            </a>
          </div>
          <div className="mt-6">
            <a href="#map" className="text-white hover:text-gold-500 flex items-center gap-2 text-sm font-semibold transition-colors w-fit">
              <MapPin size={16} />
              Ver Ubicación y Horarios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;