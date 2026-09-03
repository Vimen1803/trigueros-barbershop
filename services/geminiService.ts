import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { BOOKSY_URL, ADDRESS, PHONE_NUMBER } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual inteligente de "Triguero's Barbershop" en Zaragoza.
Tu nombre es "TrigueroBot".
Tu tono es profesional, cercano, urbano y eficaz.

Tu objetivo principal es conseguir que el cliente reserve cita.

INSTRUCCIONES CRÍTICAS SOBRE INFORMACIÓN (HORARIOS Y PRECIOS):
1. NO tienes memorizados los horarios de apertura ni los precios actuales.
2. Si el usuario pregunta por **horarios**, **precios** o **servicios específicos**, DEBES usar OBLIGATORIAMENTE la herramienta [googleSearch] para buscar la información actualizada en el perfil de Booksy de "Triguero's Barbershop Zaragoza".
3. Una vez encuentres la información en la búsqueda, resúmela de forma clara y directa.
4. Si la búsqueda no devuelve un horario claro, indica que pueden consultarlo en tiempo real en el enlace de reservas.

Datos de contacto:
- Link de reserva Booksy: ${BOOKSY_URL}
- Dirección: ${ADDRESS}.
- Teléfono: ${PHONE_NUMBER}.

Reglas de comportamiento:
- Prioriza enviar al usuario a reservar: ${BOOKSY_URL}
- Se breve y directo.
- SI EL USUARIO PREGUNTA SOBRE TEMAS AJENOS A LA BARBERÍA (como deportes, política, matemáticas, chistes generales, programación, etc.):
  Responde educadamente: "Lo siento, solo estoy programado para ayudarte con dudas sobre Triguero's Barbershop y tus reservas."
  NO respondas a la pregunta fuera de tema bajo ninguna circunstancia.
`;

export const initializeChat = (): Chat | null => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("API_KEY not found in environment variables. Chatbot will not function.");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    // Attempt to initialize if null
    initializeChat();
    if (!chatSession) {
      return "Lo siento, mi sistema de IA no está disponible en este momento. Por favor, contáctanos por Instagram o reserva directamente en Booksy.";
    }
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    const text = response.text || "Lo siento, no he podido procesar tu respuesta.";

    // Logic to append sources has been removed as per request.
    
    return text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Hubo un error de conexión. Por favor intenta de nuevo.";
  }
};