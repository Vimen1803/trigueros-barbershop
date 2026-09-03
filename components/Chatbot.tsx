import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Trash2, Mic, MicOff } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { FunBarberCharacter } from './FunBarberCharacter';

const SUGGESTIONS = [
  { label: "📅 Reservar cita", text: "¿Cómo puedo reservar una cita?" },
  { label: "✂️ Servicios", text: "¿Qué servicios y precios tenéis?" },
  { label: "🕒 Horario", text: "¿Cuál es vuestro horario de apertura?" }
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de Triguero’s Barbershop. 💈\n¿En qué puedo ayudarte hoy? Pregúntame sobre nuestros cortes, precios o ubicación.' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Voice recognition setup
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.lang = 'es-ES';
        recognitionRef.current.interimResults = false;

        recognitionRef.current.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInputText(transcript);
            setIsListening(false);
        };

        recognitionRef.current.onerror = (event: any) => {
            console.error('Speech recognition error', event.error);
            setIsListening(false);
        };

        recognitionRef.current.onend = () => {
            setIsListening(false);
        };
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    
    if (isListening) {
        recognitionRef.current.stop();
        setIsListening(false);
    } else {
        recognitionRef.current.start();
        setIsListening(true);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const clearHistory = () => {
    setMessages([{ role: 'model', text: 'Historial borrado. ¿En qué puedo ayudarte de nuevo?' }]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Refactored to separate sending logic for reuse in suggestions
  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, hubo un error. Por favor intenta más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendClick = () => {
    sendMessage(inputText);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendClick();
  };

  // Improved message renderer with Markdown support (Bold, Links, Lists)
  const renderMessage = (text: string, role: 'user' | 'model') => {
    // Clean up potentially malformed markdown links [text](url) -> url first
    // We want to show the URL or clickable text.
    const cleanText = text.replace(/\[([^\]]*)\]\(([^)]*)\)/g, '$2');
    
    // Split by newlines to handle paragraphs and lists
    const lines = cleanText.split('\n');

    return lines.map((line, lineIdx) => {
      // Check for bullet points (* or -)
      const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
      const content = isBullet ? line.trim().substring(2) : line;

      // Don't render empty lines unless it's a break
      if (!content.trim() && !isBullet) return <div key={lineIdx} className="h-2"></div>;

      // Parse Bold (**text**) and Links (http...)
      // We split by the bold syntax first
      const parts = content.split(/(\*\*.*?\*\*)/g);

      const renderedParts = parts.map((part, partIdx) => {
        // Handle Bold
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIdx} className={role === 'model' ? 'text-white font-bold' : 'font-black'}>{part.slice(2, -2)}</strong>;
        }

        // Handle Links inside the text part
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const subParts = part.split(urlRegex);

        return subParts.map((subPart, subIdx) => {
          if (subPart.match(/^https?:\/\//)) {
             const linkColor = role === 'model' ? 'text-gold-500 hover:text-gold-400' : 'text-dark-950 underline decoration-dark-950/50';
             return (
               <a 
                 key={`${partIdx}-${subIdx}`}
                 href={subPart}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`${linkColor} font-bold underline break-all`}
               >
                 {subPart}
               </a>
             );
          }
          return <span key={`${partIdx}-${subIdx}`}>{subPart}</span>;
        });
      });

      return (
        <div key={lineIdx} className={`leading-relaxed ${isBullet ? 'pl-3 flex gap-2' : ''}`}>
          {isBullet && <span className="text-gold-500">•</span>}
          <div>{renderedParts}</div>
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className={`
            bg-dark-900 border border-dark-700 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-slide-in-bottom
            w-[calc(100vw-3rem)] sm:w-[380px]
            fixed sm:static 
            top-24 left-6 right-6 bottom-auto
            sm:mb-4
            h-[600px] max-h-[80vh] sm:max-h-none
        `}>
          {/* Header */}
          <div className="bg-gradient-to-r from-gold-600 to-gold-500 p-4 flex justify-between items-center text-dark-950 shrink-0 relative">
            <div className="flex items-center gap-2 z-10">
              <FunBarberCharacter size={40} />
            </div>
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full pointer-events-none">
              <h3 className="font-bold text-sm">TrigueroBot</h3>
              <span className="text-xs opacity-80 block">Siempre activo</span>
            </div>

            <div className="flex items-center gap-1 z-10">
                <button 
                    onClick={clearHistory} 
                    className="hover:bg-black/10 p-1.5 rounded transition-colors text-dark-950"
                    title="Borrar historial"
                >
                    <Trash2 size={18} />
                </button>
                <button onClick={toggleChat} className="hover:bg-black/10 p-1 rounded transition-colors">
                    <X size={20} />
                </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900 scrollbar-thin scrollbar-thumb-dark-700">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up-fade`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-gold-500 text-dark-950 rounded-br-none font-medium' 
                      : 'bg-dark-800 text-gray-200 rounded-bl-none border border-dark-700'
                  }`}
                >
                  {renderMessage(msg.text, msg.role)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-slide-up-fade">
                <div className="bg-dark-800 p-3 rounded-2xl rounded-bl-none border border-dark-700 flex gap-1 items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions / Quick Replies */}
          <div className="bg-dark-900 px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide border-t border-dark-800/50">
             {SUGGESTIONS.map((suggestion, index) => (
               <button
                 key={index}
                 onClick={() => sendMessage(suggestion.text)}
                 disabled={isLoading}
                 className="flex-shrink-0 text-xs font-medium bg-dark-800 text-gray-300 border border-dark-700 hover:border-gold-500 hover:text-gold-500 rounded-full px-3 py-1.5 transition-all duration-200 whitespace-nowrap"
               >
                 {suggestion.label}
               </button>
             ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-dark-950 border-t border-dark-800 flex gap-2 shrink-0">
            <button
                onClick={toggleListening}
                className={`p-2 rounded-md transition-colors ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-dark-800 text-gray-400 hover:text-white'}`}
                title={isListening ? "Detener escucha" : "Activar voz"}
            >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isListening ? "Escuchando..." : "Escribe tu pregunta..."}
              className="flex-1 bg-dark-900 border border-dark-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button 
              onClick={handleSendClick}
              disabled={isLoading || !inputText.trim()}
              className="bg-gold-500 hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed text-dark-950 p-2 rounded-md transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`${isOpen ? 'bg-dark-800 text-white' : 'bg-gold-500 text-dark-950 animate-bounce'} hover:scale-110 transition-transform p-4 rounded-full shadow-lg shadow-gold-500/20`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} fill="currentColor" />}
      </button>
    </div>
  );
};

export default Chatbot;