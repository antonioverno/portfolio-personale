"use client";

import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [testo, setTesto] = useState("");
  
  // Creazuibe della memoria della chat!
  const [messaggi, setMessaggi] = useState<{role: string, content: string}[]>([]);
  const [inCaricamento, setInCaricamento] = useState(false);
  const [errore, setErrore] = useState(false);

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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{ position: "fixed", bottom: "30px", right: "30px", width: "65px", height: "65px", zIndex: 1000, fontSize: "24px" }}
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {isOpen && (
        <div
          className="card shadow-lg border-0"
          style={{ position: "fixed", bottom: "110px", right: "30px", width: "350px", height: "450px", zIndex: 1000, display: 'flex', flexDirection: 'column' }}
        >
          <div className="card-header bg-primary text-white fw-bold d-flex justify-content-between align-items-center rounded-top">
            Assistente CV AI
          </div>
          
          <div className="card-body overflow-auto bg-body-tertiary" style={{ flexGrow: 1 }}>
            {messaggi.length === 0 && (
              <p className="text-muted small text-center mt-3">
                Ciao! Sono l&apos;assistente virtuale di Antonio. Chiedimi pure informazioni sulle sue competenze o progetti!
              </p>
            )}
            
            {messaggi.map((m, index) => (
              <div key={index} className={`mb-3 ${m.role === "user" ? "text-end" : "text-start"}`}>
                <div
                  className={`d-inline-block p-2 rounded shadow-sm ${
                    m.role === "user" ? "bg-primary text-white" : "bg-secondary text-white"
                  }`}
                  style={{ maxWidth: "85%", textAlign: "left", fontSize: "0.9rem" }}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {inCaricamento && (
              <div className="mb-3 text-start">
                 <div className="d-inline-block p-2 rounded shadow-sm bg-secondary text-white fst-italic" style={{ fontSize: "0.8rem" }}>
                   Sto scrivendo...
                 </div>
              </div>
            )}
            
            {errore && (
              <div className="text-danger small text-center mt-3 fw-bold">
                Ops! Errore di connessione.
              </div>
            )}
          </div>
          
          <div className="card-footer bg-body p-2 rounded-bottom">
            <form onSubmit={inviaMessaggio} className="d-flex gap-2">
              <input
                className="form-control form-control-sm"
                value={testo} 
                onChange={(e) => setTesto(e.target.value)}
                placeholder="Scrivi una domanda..."
                disabled={inCaricamento}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm fw-bold" disabled={inCaricamento}>Invia</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}