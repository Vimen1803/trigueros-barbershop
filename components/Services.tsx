import React, { useRef } from 'react';
import { SERVICES, BOOKSY_URL } from '../constants';
import { Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-dark-950 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">NUESTROS <span className="text-gold-500">SERVICIOS</span></h2>
            </div>
            
            {/* Arrows hidden on mobile, visible on md+ */}
            <div className="hidden md:flex items-center gap-4">
                 <button onClick={() => scroll('left')} className="p-3 rounded-full border border-dark-700 text-white hover:bg-gold-500 hover:text-dark-950 transition-colors">
                    <ChevronLeft size={20} />
                 </button>
                 <button onClick={() => scroll('right')} className="p-3 rounded-full border border-dark-700 text-white hover:bg-gold-500 hover:text-dark-950 transition-colors">
                    <ChevronRight size={20} />
                 </button>
            </div>
        </div>

        {/* Carousel Container */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service) => (
            <div 
                key={service.id} 
                className="min-w-[280px] md:min-w-[350px] snap-center group relative rounded-2xl overflow-hidden aspect-[4/5] bg-dark-800 flex-shrink-0"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.name} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent opacity-90"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gold-500 text-dark-950 font-bold px-3 py-1 rounded shadow-lg flex items-center gap-1 text-sm">
                  <Tag size={14} /> {service.price}
              </div>
              
              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-gold-500 transition-colors mb-2">
                  {service.name}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3 uppercase tracking-wide">
                    <Clock size={14} className="text-gold-500" />
                    {service.duration}
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                
                <a 
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold py-3 rounded transition-all text-sm"
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