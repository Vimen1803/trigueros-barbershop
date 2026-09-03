import { LucideIcon, Scissors, Star, Clock, MapPin, Instagram, Calendar } from 'lucide-react';

export const BRAND_NAME = "Triguero’s Barbershop";
export const BOOKSY_URL = "https://booksy.com/es-es/dl/show-business/23702";
export const INSTAGRAM_URL = "https://www.instagram.com/triguerosbarbershop?igsh=NWx3aWhrOHRpbWRj";
export const ADDRESS = "Avenida Compromiso de Caspe, 107, 50002, Zaragoza";
export const PHONE_NUMBER = "690 76 88 71";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.6!2d-0.88!3d41.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59150000000001%3A0x123456789abcdef!2sAvenida%20Compromiso%20de%20Caspe%2C%20107%2C%2050002%20Zaragoza!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses";

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export const SERVICES: Service[] = [
  { 
    id: 1, 
    name: "Corte Clásico & Urbano", 
    description: "Classico, Tapper, Fade... Todo tipo de cortes modernos y tradicionales.", 
    price: "13,00 €",
    duration: "30 min",
    image: "/img/fade3.png"
  },
  { 
    id: 2, 
    name: "Corte de cabello + barba", 
    description: "El servicio más popular. Corte de pelo y arreglo de barba completo.", 
    price: "18,00 €",
    duration: "45 min",
    image: "/img/coba.png"
  },
  { 
    id: 3, 
    name: "Arreglo de barba", 
    description: "Perfilado, rebajado y contornos de barba.", 
    price: "5,00 €",
    duration: "15 min",
    image: "/img/barba.png"
  },
  { 
    id: 4, 
    name: "Corte + diseño", 
    description: "Corte de cabello con dibujo, líneas o diseño freestyle.", 
    price: "14,00 €",
    duration: "30 min",
    image: "/img/diseño.png"
  },
  { 
    id: 5, 
    name: "Jubilado", 
    description: "Corte de pelo con tarifa especial para jubilados.", 
    price: "7,50 €",
    duration: "30 min",
    image: "/img/jubilao.png"
  }
];

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  instagramUrl: string;
}

export const TEAM: TeamMember[] = [
  { 
    id: 1, 
    name: "Sergi Triguero", 
    role: "Fundador & Barbero",
    image: "/img/triguero.png",
    instagramUrl: "https://www.instagram.com/triguerosbarbershop?igsh=NWx3aWhrOHRpbWRj"
  },
  { 
    id: 2, 
    name: "Edu Miñes", 
    role: "Barbero",
    image: "/img/edu.png",
    instagramUrl: "https://www.instagram.com/e.eme.cutzz?igsh=OHpjZDYwN244cGxv"
  },
  { 
    id: 3, 
    name: "Bossy", 
    role: "Barbero",
    image: "/img/bossy.png",
    instagramUrl: "https://www.instagram.com/bossybarberboyy?igsh=cG5qeDBzNThjdGZu"
  }
];

export const GALLERY_IMAGES = [
  { url: "/img/fade.png", title: "Fade Cut" },
  { url: "/img/barba.png", title: "Beard Trim" },
  { url: "/img/kid.png", title: "Kids Cut" },
  { url: "/img/fade2.png", title: "Fade Design" },
  { url: "/img/cosa.png", title: "Style Cut" },
  { url: "/img/exp.png", title: "Experience" },
];