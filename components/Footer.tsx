import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { BOOKSY_URL, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 pt-16 pb-8 border-t border-dark-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Columna 1: Info Marca */}
            <div className="space-y-4">
                <h3 className="text-2xl font-black text-white tracking-tighter">TRIGUERO’S</h3>
                <p className="text-gray-500 leading-relaxed max-w-xs">
                    Más que una barbería, un espacio donde la tradición se encuentra con el estilo urbano moderno en Zaragoza.
                </p>
            </div>
            
            {/* Columna 2: Enlaces Rápidos (2 columnas en móvil, 1 en PC) */}
            <div className="space-y-4">
                <h4 className="text-white font-bold tracking-wide uppercase text-sm">Enlaces Rápidos</h4>
                <div className="grid grid-cols-2 md:flex md:flex-col gap-3">
                    <a href="#services" className="text-gray-500 hover:text-gold-500 transition-colors">Servicios</a>
                    <a href="#team" className="text-gray-500 hover:text-gold-500 transition-colors">Equipo</a>
                    <a href="#gallery" className="text-gray-500 hover:text-gold-500 transition-colors">Galería</a>
                    <a href={BOOKSY_URL} className="text-gray-500 hover:text-gold-500 transition-colors">Reservar en Booksy</a>
                </div>
            </div>

            {/* Columna 3: Contacto */}
            <div className="space-y-4">
                <h4 className="text-white font-bold tracking-wide uppercase text-sm">Contacto</h4>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-500">
                        <Phone size={18} className="text-gold-500 shrink-0" />
                        <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
                    </li>
                    <li className="flex items-center gap-3 text-gray-500">
                        <Mail size={18} className="text-gold-500 shrink-0" />
                        <span>DM via Instagram</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-dark-900 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-gray-600 gap-4 text-center">
            <p>&copy; {new Date().getFullYear()} Desarrollado por Víctor Menjón, todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;