export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Antonio Verno</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#chi-sono">Chi Sono</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#progetti">Progetti</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contatti">Contatti</a>
              </li>
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
          <a href="#progetti" className="btn btn-primary btn-lg me-3">
            I Miei Progetti
          </a>
          <a href="#contatti" className="btn btn-outline-dark btn-lg">
            Contattami
          </a>
        </div>
      </main>
    </>
  );
}