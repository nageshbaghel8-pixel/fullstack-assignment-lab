// ✏️ EDIT THIS FILE to personalise your portfolio. No other file needs to change.

export const profile = {
  name: "Nagesh Baghel",
  role: "MCA student and aspiring developer",
  intro:
    "I enjoy building practical web applications and I am learning to write clean, reliable code and design useful databases.",
  about: [
    "I completed my bachelor's degree at GLA University and I am now pursuing my Master of Computer Applications (MCA). I like understanding how software works end to end, from the interface to the database behind it.",
    "I am building a set of small projects to practise web development, SQL and problem solving, and I am looking for internship opportunities where I can learn from a team.",
  ],
  location: "India",
  email: "your.email@example.com", // ← replace with the email you want visitors to use
  github: "https://github.com/nageshbaghel8-pixel",
  linkedin: "https://www.linkedin.com/in/nagesh-b610092a0",
  resume: "", // put resume.pdf inside /public and set "/resume.pdf"
};

// Sample projects: replace with your own and add a "link" to each GitHub repo.
export const projects = [
  {
    title: "Expense Tracker",
    lang: "JavaScript",
    summary: "Record daily spending by category and see a monthly summary.",
    details:
      "A web app where you add income and expenses, filter them by category and date, and view totals for the month. Data is stored in the browser so it stays after a refresh.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "",
  },
  {
    title: "Student Management System",
    lang: "SQL",
    summary: "Store student records, courses and marks in a relational database.",
    details:
      "A DBMS project with a normalised schema, primary and foreign keys, and queries for result reports, course enrolments and toppers per course.",
    stack: ["MySQL", "SQL", "ER modelling"],
    link: "",
  },
  {
    title: "Online Quiz App",
    lang: "React",
    summary: "Timed multiple-choice quizzes with instant scoring.",
    details:
      "Users pick a topic, answer timed questions and see their score and the correct answers at the end. Questions are kept in a separate data file so new topics are easy to add.",
    stack: ["React", "CSS", "Vite"],
    link: "",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["HTML", "CSS", "React"] },
  { group: "Database", items: ["MySQL", "ER modelling"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "Currently pursuing",
    when: "2026 to present",
    note: "Coursework: DBMS, data structures, web technologies.",
  },
  {
    title: "Bachelor's degree",
    place: "GLA University",
    when: "Completed",
    note: "", // optional: add degree name and years
  },
];
