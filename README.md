# 💈 Triguero's Barbershop - Web Oficial & AI Chatbot

Sitio web profesional, moderno y responsivo desarrollado para **Triguero's Barbershop** (Zaragoza). Este proyecto combina una interfaz elegante en modo oscuro con un **Asistente Virtual impulsado por IA (Google Gemini)** capaz de buscar información en tiempo real sobre horarios y precios.

![React](https://img.shields.io/badge/React-19-blue) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8) ![Gemini](https://img.shields.io/badge/Google_Gemini-AI-orange) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6) ![Vite](https://img.shields.io/badge/Vite-6.0-646cff)

## 🚀 Características Principales

### 🎨 Frontend & Diseño

- **Estética "Dark & Gold":** Diseño premium utilizando la paleta de colores corporativa.
- **Totalmente Responsivo:** Adaptado perfectamente a móviles, tablets y escritorio.
- **Navegación Fluida:** Scroll suave y menú móvil interactivo.
- **Galería Dinámica:** Carrusel de estilos y cortes destacados.
- **SEO & Social Sharing:** Etiquetas Open Graph y Twitter Cards configuradas para compartir en redes sociales (WhatsApp, Twitter, Facebook) con vista previa enriquecida.

### ⚡ Rendimiento

- **Lazy Loading:** Implementado en imágenes y mapas para una carga inicial rápida.
- **Optimización de Recursos:** Uso eficiente de assets y scripts.

### 🤖 Chatbot IA Avanzado (TrigueroBot)

- **Motor:** Google Gemini 2.5 Flash.
- **Google Search Grounding:** El bot **no inventa datos**. Utiliza la herramienta de búsqueda de Google para consultar en tiempo real el perfil de Booksy y dar horarios y precios exactos.
- **Reconocimiento de Voz:** Integración con Web Speech API para permitir a los usuarios hablar con el bot mediante micrófono.
- **Interfaz Moderna:** Soporte para Markdown (negritas, enlaces inteligentes y listas) dentro del chat.

## 🛠️ Tecnologías

- **Frontend Framework:** React 19.
- **Build Tool:** Vite.
- **Lenguaje:** TypeScript.
- **Estilizado:** Tailwind CSS (Configurado vía CDN/Script para inyección rápida y personalización).
- **Iconografía:** Lucide React.
- **Inteligencia Artificial:** `@google/genai` SDK.
- **Mapas:** Google Maps Embed.

## 📋 Requisitos Previos

Para ejecutar o construir este proyecto necesitarás:

1.  **Node.js** (v18 o superior).
2.  Una **Google Gemini API Key**. Puedes obtenerla gratis en [Google AI Studio](https://aistudio.google.com/).

## 🔧 Instalación y Ejecución Local

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/trigueros-barbershop.git
    cd trigueros-barbershop
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Configurar Variable de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade tu API Key. Es importante usar el prefijo `VITE_` para que sea accesible desde el cliente:

    ```env
    VITE_GEMINI_API_KEY=tu_clave_que_empieza_por_AIza
    ```

4.  **Iniciar el proyecto:**
    ```bash
    npm run dev
    ```

## 🌍 Despliegue en Netlify / Vercel

Este proyecto está listo para producción. Sigue estos pasos:

1.  Sube tu código a **GitHub**.
2.  Conecta tu repositorio a tu plataforma de despliegue favorita (Netlify, Vercel, etc.).
3.  **Configuración de Build:**
    - Build command: `npm run build`
    - Output directory: `dist`
4.  **⚠️ IMPORTANTE (Environment Variables):**
    En el panel de configuración de tu hosting, añade la variable de entorno:

    - **Key:** `VITE_GEMINI_API_KEY`
    - **Value:** `tu_clave_api_de_google`

    _Sin esto, el chatbot no podrá autenticarse con Google Gemini._

## 📂 Estructura del Proyecto

```text
/
├── components/        # Componentes UI (Header, Hero, Chatbot, Team, Services, etc.)
├── services/          # Servicio de integración con Google Gemini
├── img/               # Recursos gráficos (Imágenes optimizadas)
├── constants.ts       # Datos estáticos (Precios, Equipo, Links, Textos)
├── types.ts           # Definiciones de TypeScript
├── App.tsx            # Componente raíz
├── index.html         # Entry point y configuración Tailwind
├── vite.config.ts     # Configuración de Vite
└── .env               # Variables de entorno (No subir al repo)
```

## 📄 Licencia

Este proyecto es de uso libre para propósitos educativos o comerciales propios bajo la licencia MIT.
