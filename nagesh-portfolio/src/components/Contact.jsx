import { useState } from "react";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) e.message = "Write at least 10 characters.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // Opens the visitor's email app with the message filled in.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" data-section>
      <h2>Contact</h2>
      <p>
        Have an internship, project or question? Write to me at{" "}
        <a className="text-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>{" "}
        or use the form.
      </p>

      <form onSubmit={submit} noValidate>
        <label>
          Name
          <input name="name" value={form.name} onChange={update} autoComplete="name" />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message
          <textarea name="message" rows="5" value={form.message} onChange={update} />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit" className="btn">Send message</button>
        {sent && <p className="success" role="status">Your email app should open with the message ready to send.</p>}
      </form>

      <footer>
        <p className="muted">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </section>
  );
}
