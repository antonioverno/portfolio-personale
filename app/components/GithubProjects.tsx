// Dati attesi da gitHub
interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
}

export default async function GithubProjects() {
  const res = await fetch('https://api.github.com/users/antonioverno/repos?sort=updated&per_page=6', {
    next: { revalidate: 3600 }
  });
  
  const repos = await res.json();

  return (
    <div className="row g-4">
      {/*interfaccia Repo invece di "any" */}
      {repos.map((repo: Repo) => (
        <div className="col-md-4" key={repo.id}>
          <div className="card h-100 shadow-sm border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title fw-bold text-capitalize">
                {repo.name.replace(/-/g, ' ')}
              </h5>
              <p className="card-text text-muted">
                {repo.description || "Nessuna descrizione disponibile per questo progetto."}
              </p>
              <div className="mb-3 d-flex flex-wrap gap-1">
                {repo.language && (
                  <span className="badge bg-primary">{repo.language}</span>
                )}
              </div>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                Vedi su GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}