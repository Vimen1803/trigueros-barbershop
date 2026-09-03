import React from 'react';
import { SERVICES, BOOKSY_URL } from '../constants';
import { Clock, Tag } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-950 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Nuestros <span className="text-gold-500">Servicios</span></h2>
        </div>

        {/* 2 columns on mobile (grid-cols-2), 2 on md, 2 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-dark-900 rounded-xl overflow-hidden border border-dark-800 hover:border-gold-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] flex flex-col"
            >
              {/* Image Container - smaller height on mobile */}
              <div className="h-32 md:h-48 overflow-hidden relative">
                <img 
                    src={service.image} 
                    alt={service.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gold-500 text-dark-950 font-bold px-2 py-0.5 md:px-3 md:py-1 rounded shadow-lg flex items-center gap-1 text-[10px] md:text-sm">
                    <Tag size={12} className="md:w-[14px] md:h-[14px]" /> {service.price}
                </div>
              </div>
              
              <div className="p-3 md:p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1 md:mb-2">
                    <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-gold-500 transition-colors leading-tight">
                    {service.name}
                    </h3>
                </div>
                
                <div className="flex items-center gap-1 md:gap-2 text-gray-500 text-[10px] md:text-xs font-medium mb-2 md:mb-4 uppercase tracking-wide">
                    <Clock size={12} className="text-gold-500 md:w-[14px] md:h-[14px]" />
                    {service.duration}
                </div>

                {/* Description clamped or smaller on mobile */}
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-6 leading-relaxed flex-grow line-clamp-2 md:line-clamp-none">
                  {service.description}
                </p>
                
                <a 
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-dark-950 hover:bg-gold-500 text-white hover:text-dark-950 font-bold py-2 md:py-3 rounded border border-dark-800 hover:border-transparent transition-all text-xs md:text-base"
                >
                  RESERVAR
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;