import React from 'react';
import { TEAM } from '../constants';
import { Instagram } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-dark-950 relative">
       {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-800 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Nuestro <span className="text-gold-500">Equipo</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-dark-900 rounded-xl overflow-hidden shadow-2xl border border-dark-800 group hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              {/* Adjusted image height for mobile: h-auto aspect-square or similar */}
              <div className="relative h-96 md:h-auto md:aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90"></div>
                
                {/* Info Text */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white leading-tight">{member.name}</h3>
                  <p className="text-gold-500 font-medium text-sm uppercase tracking-wider">{member.role}</p>
                </div>

                {/* Instagram Icon Overlay */}
                <a 
                    href={member.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-dark-950/50 hover:bg-gold-500 text-white hover:text-dark-950 p-2.5 rounded-full backdrop-blur-sm border border-white/10 hover:border-gold-500 transition-all duration-300 z-20 group-hover:scale-110"
                    aria-label={`Instagram de ${member.name}`}
                >
                    <Instagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;