const me = {
  name: "Vegard Brobakken",
  tagline: "Software engineer from Norway.",
  email: "veg.bro@hotmail.no",
  github: "https://github.com/VegardBrobakken",
  linkedin: "https://www.linkedin.com/in/vegardbrobakken/",
};

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    title: "Brobakken Solutions",
    description: "Web development for companies in Norway.",
    tags: ["Astro", "React", "Google SEO"],
    link: "https://brobakkensolutions.no/",
    image: asset("projects/brobakken-solutions.png"),
  },
  {
    title: "QR Pause",
    description: "iPhone App to block social media apps by scanning a QR Code.",
    tags: ["Swift"],
    link: "App store",
    image: asset("projects/qr-pause.jpg"),
  },
  {
    title: "Gavehandleren",
    description: "iPhone App to organize your christmas gift shopping.",
    tags: ["React Native", "SQLite"],
    link: "https://apps.apple.com/no/app/gavehandleren/id6832375983?l=nb",
    image: asset("projects/gavehandleren.jpg"),
  },
  {
    title: "Lesehest",
    description: "iPhone App to register and rate the books you have read.",
    tags: ["React Native", "Supabase"],
    link: "https://apps.apple.com/no/app/lesehest/id6821960350?l=nb",
    image: asset("projects/lesehest.jpg"),
  },
  {
    title: "MatPlan",
    description: "iPhone App for food shopping and budget overview.",
    tags: ["React Native", "Google Firebase"],
    link: "https://apps.apple.com/no/app/matplan/id6759494573?l=nb",
    image: asset("projects/matplan.jpg"),
  },
];

export default function App() {
  return (
    <>
      <nav>
        <a href="#top" className="logo">
          {me.name}
        </a>
        <div>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="hero-title">
            <img src={asset("VegardBrobakken.jpg")} alt={me.name} className="avatar" />
            <h1>{me.name}.</h1>
          </div>
          <p>{me.tagline}</p>
        </header>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                {p.image && <img src={p.image} alt={p.title} loading="lazy" />}
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="links">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Code ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Want to work together? Reach out.</p>
          <div className="links">
            <a href={`mailto:${me.email}`}>{me.email}</a>
            <a href={me.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={me.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} {me.name}
      </footer>
    </>
  );
}
