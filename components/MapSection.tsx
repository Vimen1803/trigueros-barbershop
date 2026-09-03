import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { ADDRESS, MAP_EMBED_URL, BOOKSY_URL } from '../constants';

const MapSection: React.FC = () => {
  return (
    <section id="map" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 rounded-3xl overflow-hidden bg-dark-900 border border-dark-800 shadow-2xl">
          
          <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">VISÍTANOS</h2>
            <p className="text-gold-500 font-medium mb-8">Zaragoza, España</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-dark-950 p-4 rounded-xl text-gold-500 group-hover:scale-110 transition-transform shadow-lg shadow-black/50 border border-dark-800">
                    <MapPin size={24} />
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg mb-2">Ubicación</h3>
                    <p className="text-gray-400 leading-relaxed">{ADDRESS}</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-gold-500 text-sm font-bold hover:text-white mt-2 inline-flex items-center gap-1 transition-colors">
                        Ver en Google Maps &rarr;
                    </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-dark-950 p-4 rounded-xl text-gold-500 group-hover:scale-110 transition-transform shadow-lg shadow-black/50 border border-dark-800">
                    <Clock size={24} />
                </div>
                <div className="w-full">
                    <h3 className="text-white font-bold text-lg mb-2">Horarios</h3>
                    {/* Updated to CSS Grid for better column alignment */}
                    <div className="grid grid-cols-[60px_1fr] gap-y-2 text-gray-400 text-sm">
                        <div className="text-gray-500 font-medium">L - V</div>
                        <div>10:00 - 14:00</div>
                        
                        <div className="text-gray-500 font-medium"></div>
                        <div>17:00 - 21:00</div>
                        
                        <div className="text-gray-500 font-medium mt-1">Sábados</div>
                        <div className="mt-1">10:00 - 14:00</div>
                    </div>
                </div>
              </div>
              
              {/* Button hidden on mobile, visible on medium screens and up */}
              <div className="pt-4 hidden md:block">
                <a 
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-dark-950 font-bold py-4 rounded-xl hover:bg-gold-500 transition-colors"
                >
                    RESERVAR CITA
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 h-[400px] lg:h-auto min-h-[400px] relative">
             <iframe 
                src={MAP_EMBED_URL} 
                className="absolute inset-0 w-full h-full filter grayscale contrast-[1.1] brightness-[0.8]"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación Triguero's Barbershop Zaragoza"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;