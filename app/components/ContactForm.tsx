"use client";

import { useState } from "react";

export default function ContactForm() {
  const [inviato, setInviato] = useState(false);
  const [inCaricamento, setInCaricamento] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setInCaricamento(true);

    // Recupero dei dati scritti dall'utente nel form
    const formData = new FormData(e.currentTarget);

    // Recupero della chiave dal file .env.local in modo sicuro
    formData.append(
    "access_key", 
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    try {
      // Invio i dati all'API di Web3Forms
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        setInviato(true); // Se va a buon fine, mostriamo il messaggio di successo
      } else {
        alert("Si è verificato un errore durante l'invio. Riprova più tardi.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Errore di connessione. Verifica la tua rete.");
    } finally {
      setInCaricamento(false);
    }
  };

  if (inviato) {
    return (
      <div className="alert alert-success text-center shadow-sm" role="alert">
        <h4 className="alert-heading fw-bold">Messaggio inviato!</h4>
        <p>Grazie per avermi contattato. Ti risponderò il prima possibile.</p>
        <button className="btn btn-outline-success mt-3" onClick={() => setInviato(false)}>
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-body-tertiary">
      <div className="mb-3">
        <label htmlFor="nome" className="form-label fw-bold">Il tuo Nome</label>
        {/* L'attributo name="name" è obbligatorio per far capire all'API che questo è il nome */}
        <input type="text" name="name" className="form-control" id="nome" placeholder="Mario Rossi" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">La tua Email</label>
        {/* L'attributo name="email" è obbligatorio */}
        <input type="email" name="email" className="form-control" id="email" placeholder="mario@email.com" required />
      </div>
      <div className="mb-4">
        <label htmlFor="messaggio" className="form-label fw-bold">Messaggio</label>
        {/* L'attributo name="message" è obbligatorio */}
        <textarea name="message" className="form-control" id="messaggio" rows={5} placeholder="Scrivi qui il tuo messaggio..." required></textarea>
      </div>
      
      {/* Il bottone si disabilita da solo mentre l'email sta partendo per evitare doppi click */}
      <button type="submit" className="btn btn-dark btn-lg w-100" disabled={inCaricamento}>
        {inCaricamento ? "Invio in corso..." : "Invia Messaggio"}
      </button>
    </form>
  );
}