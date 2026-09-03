import React from 'react';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const InstagramContact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950">
      <div className="container mx-auto px-4 text-center">
        <Instagram className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">SÍGUENOS EN INSTAGRAM</h2>
        <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto">
          Mantente al día de nuestras últimas creaciones, sorteos y novedades.
          ¡Escríbenos por DM si tienes dudas!
        </p>
        <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark-950 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-dark-950 transition-all shadow-xl transform hover:-translate-y-1"
        >
            @triguerosbarbershop
        </a>
      </div>
    </section>
  );
};

export default InstagramContact;