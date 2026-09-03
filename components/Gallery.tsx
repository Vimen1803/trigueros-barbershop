import React, { useRef } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
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
    <section id="gallery" className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">ESTILOS <span className="text-gold-500">DESTACADOS</span></h2>
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
          {GALLERY_IMAGES.map((img, index) => (
            <div 
                key={index} 
                className="min-w-[280px] md:min-w-[350px] snap-center group relative rounded-2xl overflow-hidden aspect-[4/5] bg-dark-800"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Triguero's Style</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;