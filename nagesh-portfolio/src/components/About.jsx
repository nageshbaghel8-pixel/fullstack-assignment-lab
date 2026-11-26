export default function About({ profile }) {
  return (
    <section id="about" data-section>
      <h2>About</h2>
      {profile.about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <p className="muted">Based in {profile.location}.</p>
    </section>
  );
}
