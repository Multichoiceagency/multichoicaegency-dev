'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, X, UploadCloud } from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  'websites', 'webshops', 'portalen', 'maatwerk-websites', 'shopify-webshop',
  'woocommerce-webshop', 'wordpress-website',
  'seo', 'google-ads', 'social-media', 'content-marketing', 'bedrijfsvideo', 'productvideo',
  'software-ontwikkeling', 'app-ontwikkeling', 'digitale-transformatie', 'systeem-integratie', 'data-integratie',
  'business-intelligence', 'veiligheid-compliance', 'ai-automatisering'
];

export default function Multibot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !initialized) {
      const welcomeMessage = {
        role: 'assistant',
        content: 'Welkom bij Multibot! Wat is je naam en waar kunnen we je vandaag mee helpen?'
      };
      setMessages([welcomeMessage]);
      setInitialized(true);
    }
  }, [isOpen, initialized]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const updatedMessages = [...messages, { role: 'user', content: input }];
    setMessages(updatedMessages);
    setInput('');

    const emailMatch = input.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = input.match(/\b(\+\d{1,3}[- ]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}\b/);
    if (emailMatch) localStorage.setItem('clientEmail', emailMatch[0]);
    if (phoneMatch) localStorage.setItem('clientPhone', phoneMatch[0]);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    const data = await res.json();
    const aiReply = data.reply;
    const allMessages = [...updatedMessages, aiReply];
    setMessages(allMessages);

    const detectedService = SERVICES.find(service => aiReply.content.toLowerCase().includes(service));
    if (detectedService) localStorage.setItem('selectedService', detectedService);

    const email = localStorage.getItem('clientEmail');
    const phone = localStorage.getItem('clientPhone');
    const service = localStorage.getItem('selectedService');

    // Verstuur automatisch als gegevens compleet zijn
    if (email && phone && service) {
      const transcript = allMessages.map(m => `${m.role === 'user' ? 'Klant' : 'AI'}: ${m.content}`).join('\n');
      const clientInfo = localStorage.getItem('clientInfo') || '';

      const fullMessage = `Klantinformatie:\nNaam: ${clientInfo}\nE-mail: ${email}\nTelefoon: ${phone}\nVoorgestelde dienst: ${service}\n\nGesprek:\n${transcript}`;

      const formData = new FormData();
      formData.append('transcript', fullMessage);
      formData.append('clientEmail', email);
      if (file) formData.append('attachment', file);

      await fetch('/api/email', {
        method: 'POST',
        body: formData,
      });

      setIsOpen(false);
      setMessages([]);
      setFile(null);
      setInitialized(false);
      localStorage.clear();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen ? (
        <div className="w-80 h-[30rem] bg-white rounded-xl shadow-lg border flex flex-col overflow-hidden">
          <div className="bg-green-100 p-3 flex justify-between items-center border-b">
            <span className="font-semibold text-sm text-green-800">Welkom bij Multibot</span>
            <button onClick={() => setIsOpen(false)}><X className="h-4 w-4 text-green-800" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-2 rounded text-sm ${msg.role === 'user' ? 'bg-green-200 self-end text-right' : 'bg-green-50 self-start text-left'}`}>
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-2 flex flex-col gap-2 border-t">
            <input
              className="border rounded px-2 py-1 text-sm"
              placeholder="Typ je bericht..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <UploadCloud className="h-4 w-4 text-green-700" />
              Upload bestand
              <input type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            </label>
            <button onClick={handleSend} className="text-sm text-white bg-green-600 px-3 py-1 rounded">Verstuur</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-xl transition-all flex items-center gap-2"
          aria-label="Open Multibot"
        >
          <Image src="/icon.png" alt="Multibot" width={24} height={24} />
          <span className="hidden sm:inline text-sm font-medium">Stel je vraag</span>
        </button>
      )}
    </div>
  );
}