"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Appena il componente viene caricato (useEffect), controlliamo se l'utente aveva già scelto un tema in passato
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    // Se c'è salvato "dark" in memoria, oppure se il computer dell'utente è già impostato su tema scuro di default
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }, []);

  // La funzione che scatta quando clicchiamo il bottone
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute("data-bs-theme", "light"); // Cambia i colori
      localStorage.setItem("theme", "light"); // Salva in memoria
      setIsDark(false); // Aggiorna l'icona del bottone
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="btn btn-outline-light ms-lg-3 mt-2 mt-lg-0" 
      title="Cambia Tema"
    >
      {isDark ? "☀️ Chiaro" : "🌙 Scuro"}
    </button>
  );
}