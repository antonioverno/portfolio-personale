export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;
    const rawSystemPrompt = process.env.SYSTEM_PROMPT;

    // Controllo presenza chiavi d'ambiente
    if (!apiKey) {
      return Response.json({ text: "Chiave GROQ_API_KEY mancante nel file .env.local" }, { status: 500 });
    }

    if (!rawSystemPrompt) {
      return Response.json({ text: "Variabile SYSTEM_PROMPT mancante nel file .env.local" }, { status: 500 });
    }

    // Convertiamo le sequenze '\n' della stringa env in reali a capo
    const systemPrompt = rawSystemPrompt.replace(/\\n/g, '\n');

    // Formattazione dei messaggi per l'API compatibile OpenAI/Groq
    const formattedMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content
      }))
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: formattedMessages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Errore Groq:", data);
      return Response.json(
        { text: `Errore Groq (${data.error?.code}): ${data.error?.message}` },
        { status: response.status }
      );
    }

    const responseText = data.choices?.[0]?.message?.content || "Nessuna risposta generata.";
    return Response.json({ text: responseText });

  } catch (error) {
    console.error("Errore Server Chat:", error);
    return Response.json({ text: "Si è verificato un errore di connessione." }, { status: 500 });
  }
}