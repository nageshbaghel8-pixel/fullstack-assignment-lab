export default function Skills({ skills }) {
  return (
    <section id="skills" data-section>
      <h2>Skills</h2>
      <dl className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skill-row">
            <dt>{g.group}</dt>
            <dd>
              <ul className="tags">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
