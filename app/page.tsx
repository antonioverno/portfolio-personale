import GithubProjects from "./components/GithubProjects";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <>
      <div className="bg-body-tertiary min-vh-100">
        {/* NAVBAR BENTO STYLE */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary border-opacity-25 py-3">
          <div className="container-fluid px-4 px-lg-5" style={{ maxWidth: '1600px' }}>
            <a className="navbar-brand fw-bold fs-4" href="#">
              Antonio<span className="text-primary">.dev</span>
            </a>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item"><a className="nav-link" href="#chi-sono">Chi Sono</a></li>
                <li className="nav-item"><a className="nav-link" href="#esperienze">Esperienze</a></li>
                <li className="nav-item"><a className="nav-link" href="#progetti">Progetti</a></li>
                <li className="nav-item"><a className="nav-link" href="#contatti">Contatti</a></li>
              </ul>
              <div className="ms-lg-3 mt-2 mt-lg-0">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        {/* MAIN CONTAINER AD AMPIEZZA ELEVATA */}
        <main className="container-fluid px-3 px-md-4 my-4 my-lg-5" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          
          {/* ==================== BENTO GRID PRINCIPALE ==================== */}
          <div className="row g-3 g-md-4">
            
            {/* TESSERA 1: HERO PRINCIPALE */}
            <div className="col-12 col-lg-8">
              <div className="p-4 p-md-5 bg-body rounded-4 shadow-sm border border-secondary border-opacity-10 h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill fs-6 mb-3">
                    🟢 Full Stack IT Consultant
                  </span>
                  <h1 className="display-4 fw-bold mb-3">
                    Ciao, sono Antonio Verno<span className="text-primary">.</span>
                  </h1>
                  <p className="fs-5 text-body-secondary leading-relaxed mb-4">
                    Dottore Magistrale in Ingegneria Informatica & Full Stack Software Developer. Specializzato in architetture enterprise, microservizi backend (Java, Spring Boot) e soluzioni frontend moderne (Angular, React, Next.js).
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-3">
                  <a href="#progetti" className="btn btn-primary px-4 py-2 fw-semibold rounded-3">
                    I Miei Progetti
                  </a>
                  <a href="/CV_Antonio_Verno.pdf" target="_blank" download className="btn btn-outline-primary px-4 py-2 fw-semibold rounded-3">
                    📄 Scarica CV PDF
                  </a>
                  <a href="#contatti" className="btn btn-outline-secondary px-4 py-2 fw-semibold rounded-3">
                    Contattami
                  </a>
                </div>
              </div>
            </div>

            {/* TESSERA 2: FOTO PROFILO / AVATAR */}
            <div className="col-12 col-lg-4">
              <div className="p-4 bg-body rounded-4 shadow-sm border border-secondary border-opacity-10 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                <div 
                  className="bg-body-tertiary rounded-circle border border-primary border-3 shadow-sm d-flex align-items-center justify-content-center mb-3" 
                  style={{ width: '150px', height: '150px' }}
                >
                  <span className="text-body-secondary small">La tua foto</span>
                </div>
                <h5 className="fw-bold mb-1">Antonio Verno</h5>
                <p className="text-body-secondary small mb-1">Dott. in Ingegneria Informatica</p>
                <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-1">
                  Politecnico di Bari (110)
                </span>
              </div>
            </div>

            {/* TESSERA 3: TECH STACK COMPLETO */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="p-4 bg-body rounded-4 shadow-sm border border-secondary border-opacity-10 h-100">
                <h5 className="fw-bold mb-3 text-primary">⚡ Competenze Tecniche</h5>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    'Java 17/21', 'Spring Boot', 'Angular', 'React', 'Next.js', 
                    'TypeScript', 'Microservizi', 'Kafka', 'Oracle SQL', 'PostgreSQL', 
                    'MongoDB', 'Docker', 'OpenShift', 'Jenkins CI/CD', 'GitLab'
                  ].map((tech) => (
                    <span key={tech} className="badge bg-body-tertiary border text-body px-2.5 py-2 rounded-3 fs-6 fw-normal">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* TESSERA 4: CHI SONO & FORMAZIONE */}
            <div className="col-12 col-md-6 col-lg-5" id="chi-sono">
              <div className="p-4 bg-body rounded-4 shadow-sm border border-secondary border-opacity-10 h-100">
                <h5 className="fw-bold mb-3 text-primary">🎓 Formazione & Profilo</h5>
                <p className="text-body-secondary mb-3 leading-relaxed">
                  Laurea Magistrale in Ingegneria Informatica conseguita con <strong>110/110</strong> presso il <strong>Politecnico di Bari</strong>.
                </p>
                <p className="text-body-secondary small mb-0">
                  Persona determinata e orientata al problem solving con forte esperienza nella progettazione di architetture distribuite, analisi dati e metodologie Agile/DevOps.
                </p>
              </div>
            </div>

            {/* TESSERA 5: STATS RAPIDE & CLIENT ENTERPRISE */}
            <div className="col-12 col-lg-3">
              <div className="p-4 bg-body rounded-4 shadow-sm border border-secondary border-opacity-10 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="fs-1 fw-bold text-primary mb-0">110/110</div>
                  <div className="text-body-secondary small fw-medium mb-3">Laurea Magistrale Poliba</div>
                </div>
                <div>
                  <div className="text-body-secondary small fw-bold text-uppercase mb-2">Progetti Enterprise:</div>
                  <div className="d-flex flex-wrap gap-1">
                    <span className="badge-enterprise small">Poste Italiane</span>
                    <span className="badge-enterprise small">WindTre</span>
                    <span className="badge-enterprise small">Maserati</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TESSERA ESPERIENZE LAVORATIVE */}
            <div className="col-12" id="esperienze">
              <div className="p-4 p-md-5 bg-body rounded-4 shadow-sm border border-secondary border-opacity-10">
                <h3 className="display-6 fw-bold mb-4">💼 Esperienza Lavorativa</h3>
                <div className="row g-4">
                  
                  <div className="col-12 col-md-6">
                    <div className="p-4 bg-body-tertiary border border-secondary border-opacity-10 rounded-4 h-100">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-primary px-3 py-2 rounded-pill">2025 - Attuale</span>
                        <span className="text-body-secondary small">Canosa di Puglia</span>
                      </div>
                      <h5 className="fw-bold mb-1">Consulente IT – Full Stack Developer</h5>
                      <p className="text-primary fw-semibold small mb-3">EliteDivision</p>
                      <p className="text-body-secondary small mb-0 leading-relaxed">
                        Sviluppo software enterprise in Java 17/21 (Spring Boot) e Angular 10. Gestione database Oracle SQL, pipeline Jenkins CI/CD, test integrati e piattaforma Appian.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="p-4 bg-body-tertiary border border-secondary border-opacity-10 rounded-4 h-100">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-secondary px-3 py-2 rounded-pill">2022 - 2025</span>
                        <span className="text-body-secondary small">Bari</span>
                      </div>
                      <h5 className="fw-bold mb-1">Analyst Consultant</h5>
                      <p className="text-primary fw-semibold small mb-3">Capgemini</p>
                      <p className="text-body-secondary small mb-0 leading-relaxed">
                        Sviluppo Full Stack e microservizi per clienti enterprise (Poste Italiane, WindTre, Maserati). Spring Boot, Quarkus, Kafka, Docker, OpenShift e PostgreSQL/MongoDB.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* TESSERA PROGETTI GITHUB */}
            <div className="col-12" id="progetti">
              <div className="p-4 p-md-5 bg-body rounded-4 shadow-sm border border-secondary border-opacity-10">
                <h3 className="display-6 fw-bold mb-4">🚀 I Miei Progetti GitHub</h3>
                <GithubProjects />
              </div>
            </div>

            {/* TESSERA CONTATTI */}
            <div className="col-12" id="contatti">
              <div className="p-4 p-md-5 bg-body rounded-4 shadow-sm border border-secondary border-opacity-10">
                <div className="row g-4 align-items-center">
                  <div className="col-12 col-lg-5">
                    <h3 className="display-6 fw-bold mb-3">📬 Parliamo!</h3>
                    <p className="fs-5 text-body-secondary mb-4">
                      Sei un recruiter o hai una proposta lavorativa/progetto? Inviami un messaggio!
                    </p>
                    <div className="d-flex flex-column gap-3 text-body-secondary fs-6">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-5">📍</span> Canosa di Puglia, Italia
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-5">✉️</span> anto.verno@gmail.com
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-5">📞</span> +39 327 4067422
                      </div>
                    </div>

                    {/* LINK SOCIAL */}
                    <div className="d-flex gap-2 mt-4">
                      <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary rounded-pill px-3 fw-semibold">
                        🐱 GitHub
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-semibold">
                        💼 LinkedIn
                      </a>
                    </div>

                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="p-3 p-md-4 bg-body-tertiary border border-secondary border-opacity-10 rounded-4">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* ==================== FINE BENTO GRID ==================== */}

        </main>

        {/* FOOTER */}
        <footer className="border-top border-secondary border-opacity-25 py-4 mt-5 bg-body">
          <div className="container-fluid px-4 text-center text-body-secondary fs-6" style={{ maxWidth: '1600px' }}>
            <p className="mb-0">© {new Date().getFullYear()} Dott. Antonio Verno. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </div>

      <ChatBot />
    </>
  );
}