export default function Education({ education }) {
  return (
    <section id="education" data-section>
      <h2>Education</h2>
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.title}>
            <p className="when">{e.when}</p>
            <h3>{e.title}</h3>
            <p>{e.place}</p>
            {e.note && <p className="muted">{e.note}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
