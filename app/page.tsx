import GithubProjects from "./components/GithubProjects";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Antonio Verno</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#chi-sono">Chi Sono</a></li>
              <li className="nav-item"><a className="nav-link" href="#progetti">Progetti</a></li>
              <li className="nav-item"><a className="nav-link" href="#contatti">Contatti</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="container mt-5 pt-5 text-center">
        <h1 className="display-3 fw-bold mb-3">Ciao, sono Antonio.</h1>
        <h2 className="text-muted fs-4 mb-4">
          Sviluppatore Software | Costruisco soluzioni web moderne
        </h2>
        <div className="mt-4">
          <a href="#progetti" className="btn btn-primary btn-lg me-3">I Miei Progetti</a>
          <a href="#contatti" className="btn btn-outline-dark btn-lg">Contattami</a>
        </div>
      </main>

      {/* SEZIONE CHI SONO */}
      <section id="chi-sono" className="container mt-5 pt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Chi Sono</h2>
            <p className="lead">
              Sono uno sviluppatore appassionato. Mi piace risolvere problemi complessi
              e creare applicazioni web veloci e funzionali.
            </p>
            <p>Le tecnologie che utilizzo maggiormente:</p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-secondary">JavaScript</span>
              <span className="badge bg-secondary">Next.js</span>
              <span className="badge bg-secondary">Bootstrap</span>
              <span className="badge bg-secondary">React</span>
              <span className="badge bg-secondary">Git</span>
            </div>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
             <div className="bg-light rounded mx-auto d-flex align-items-center justify-content-center shadow-sm" style={{width: '250px', height: '250px'}}>
               <span className="text-muted">La tua foto qui</span>
             </div>
          </div>
        </div>
      </section>

      {/* SEZIONE PROGETTI */}
      <section id="progetti" className="container mt-5 pt-5 pb-5">
        <h2 className="fw-bold mb-4 text-center">I Miei Progetti</h2>
        
        {/* Iniezione Componente gitHub */}
        <GithubProjects />
        
      </section>
    </>
  );
}