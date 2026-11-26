const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar({ profile, active }) {
  return (
    <header className="sidebar">
      <div>
        <h1 className="name">
          {profile.name.split(" ").map((part) => (
            <span key={part}>{part}</span>
          ))}
        </h1>
        <p className="role">{profile.role}</p>
        <p className="intro">{profile.intro}</p>
      </div>

      <nav aria-label="Sections">
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? "is-active" : ""}
                aria-current={active === l.id ? "true" : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="social">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        {profile.resume && (
          <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
        )}
      </div>
    </header>
  );
}
