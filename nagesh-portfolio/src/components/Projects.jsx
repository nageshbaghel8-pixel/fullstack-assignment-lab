import { useState } from "react";

export default function Projects({ projects }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="projects" data-section>
      <h2>Projects</h2>
      <ul className="projects">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <li key={p.title} className={isOpen ? "project is-open" : "project"}>
              <button
                className="project-head"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`project-${i}`}
              >
                <span className="project-title">{p.title}</span>
                <span className="project-lang">{p.lang}</span>
                <span className="project-toggle" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <p className="project-summary">{p.summary}</p>
              <div id={`project-${i}`} className="project-body" hidden={!isOpen}>
                <p>{p.details}</p>
                <ul className="tags">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-link">
                    View source code
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
