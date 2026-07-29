# 🚀 Antonio Verno - Interactive Portfolio & AI Assistant

An interactive and modern personal portfolio built with [Next.js](https://nextjs.org) (bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)).

It features a sleek **Bento Grid** design layout, dynamic GitHub repository fetching, theme customization, and an integrated **AI Chatbot** (powered by Groq & LLaMA 3.3) trained on my professional background and enterprise experience.

---

## ⚡ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Bootstrap 5](https://getbootstrap.com/) + Custom CSS (Bento Grid Layout)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **AI Integration:** [Groq Cloud API](https://groq.com/) (`llama-3.3-70b-versatile`)
- **Font Optimization:** [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist font family)
- **Deployment:** [Vercel Platform](https://vercel.com/)

---

## ✨ Key Features

- **📐 Responsive Bento Grid Layout:** Organized information cards designed to auto-fit widescreen monitors and mobile devices seamlessly.
- **🤖 Integrated AI Assistant:** A floating chatbot ready to assist recruiters and visitors with real-time inquiries regarding my education at Politecnico di Bari, career achievements, and enterprise projects (e.g., Poste Italiane, WindTre, Maserati).
- **🌙 Light / Dark Mode Toggle:** Switch themes dynamically with user preference retention.
- **📁 Dynamic GitHub Integration:** Automatically fetches and presents public repositories.
- **📄 Curriculum Download & Contact Form:** Direct access to download my PDF resume and get in touch.

---

## 🛠️ Environment Configuration (.env.local)

Before launching the project, create a `.env.local` file in the root directory and define the required variables:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your_web3forms_access_key_here"
GROQ_API_KEY="your_groq_api_key_here"
SYSTEM_PROMPT="Detailed instructions and CV context passed to the AI model..."