import { useEffect, useState } from "react";
import { profile, projects, skills, education } from "./data.js";
import Sidebar from "./components/Sidebar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [active, setActive] = useState("about");

  // Highlights the nav link of the section currently in view.
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="layout">
      <Sidebar profile={profile} active={active} />
      <main>
        <About profile={profile} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact profile={profile} />
      </main>
    </div>
  );
}
