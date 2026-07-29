"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [testo, setTesto] = useState("");
  
  // Memoria della chat
  const [messaggi, setMessaggi] = useState<{role: string, content: string}[]>([]);
  const [inCaricamento, setInCaricamento] = useState(false);
  const [errore, setErrore] = useState(false);
  
  // Riferimento per l'auto-scroll dei messaggi
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messaggi, inCaricamento, isOpen]);

  const inviaMessaggio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (!testo.trim()) return; 

    // 1. Salvataggio del messaggio dell'utente in chat
    const nuovoMessaggio = { role: 'user', content: testo };
    const cronologia = [...messaggi, nuovoMessaggio];
    
    setMessaggi(cronologia);
    setTesto(""); 
    setInCaricamento(true);
    setErrore(false);

    try {
      // 2. Chiamata API
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: cronologia })
      });

      if (!res.ok) throw new Error("Errore dal server");

      // 3. Ricezione della risposta e visualizzazione in chat
      const data = await res.json();
      setMessaggi([...cronologia, { role: 'assistant', content: data.text }]);
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setErrore(true);
    } finally {
      setInCaricamento(false);
    }
  };

  return (
    <>
      {/* BOTTONE FLUTTUANTE SEMPRE IN PRIMO PIANO */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{ 
          position: "fixed", 
          bottom: "24px", 
          right: "24px", 
          width: "60px", 
          height: "60px", 
          zIndex: 9999, 
          fontSize: "22px",
          transition: "transform 0.2s ease"
        }}
        aria-label="Apri chat assistente"
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {/* FINESTRA DELLA CHAT FLUTTUANTE */}
      {isOpen && (
        <div
          className="card shadow-lg border-0 rounded-4"
          style={{ 
            position: "fixed", 
            bottom: "95px", 
            right: "24px", 
            width: "360px", 
            maxWidth: "calc(100vw - 48px)",
            height: "480px", 
            zIndex: 9999, 
            display: 'flex', 
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* HEADER CHAT */}
          <div className="card-header bg-primary text-white fw-bold d-flex justify-content-between align-items-center py-3 px-4">
            <div className="d-flex align-items-center gap-2">
              <span className="fs-5">🤖</span>
              <span>Assistente AI - Dott. Verno</span>
            </div>
            <button 
              type="button" 
              className="btn-close btn-close-white small" 
              onClick={() => setIsOpen(false)}
            ></button>
          </div>
          
          {/* CORPO MESSAGGI */}
          <div className="card-body overflow-auto bg-body-tertiary p-3" style={{ flexGrow: 1 }}>
            {messaggi.length === 0 && (
              <div className="text-center my-4">
                <p className="text-body-secondary small mb-0">
                  👋 Ciao! Sono l&apos;assistente AI di Antonio Verno. Chiedimi pure informazioni su formazione, esperienze enterprise o competenze tecniche!
                </p>
              </div>
            )}
            
            {messaggi.map((m, index) => (
              <div key={index} className={`mb-3 ${m.role === "user" ? "text-end" : "text-start"}`}>
                <div
                  className={`d-inline-block p-3 rounded-4 shadow-sm ${
                    m.role === "user" 
                      ? "bg-primary text-white" 
                      : "bg-body border border-secondary border-opacity-10 text-body"
                  }`}
                  style={{ maxWidth: "85%", textAlign: "left", fontSize: "0.9rem" }}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {inCaricamento && (
              <div className="mb-3 text-start">
                <div className="d-inline-block p-2 px-3 rounded-pill bg-body border border-secondary border-opacity-10 text-body-secondary small fst-italic">
                  Sto scrivendo... ✍️
                </div>
              </div>
            )}
            
            {errore && (
              <div className="text-danger small text-center mt-3 fw-semibold">
                Ops! Errore di connessione con l&apos;AI.
              </div>
            )}
            
            <div ref={chatBottomRef} />
          </div>
          
          {/* INPUT FORM */}
          <div className="card-footer bg-body border-top border-secondary border-opacity-10 p-3">
            <form onSubmit={inviaMessaggio} className="d-flex gap-2">
              <input
                className="form-control form-control-sm rounded-3 py-2"
                value={testo} 
                onChange={(e) => setTesto(e.target.value)}
                placeholder="Fai una domanda sul CV..."
                disabled={inCaricamento}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm fw-bold px-3 rounded-3" disabled={inCaricamento}>
                Invia
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}