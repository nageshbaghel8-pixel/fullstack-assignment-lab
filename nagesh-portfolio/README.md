# Nagesh Baghel | Portfolio (React + Vite)

## Run it
```bash
npm install
npm run dev        # opens at http://localhost:5173
```

## Build for deployment
```bash
npm run build      # output goes to /dist
npm run preview
```
Upload the `dist` folder to Netlify, Vercel or GitHub Pages.

## Customise
Everything personal lives in `src/data.js`: your email, GitHub, LinkedIn,
projects, skills and education. Add new projects by copying an entry in the `projects` list.
To add a resume, put `resume.pdf` in `/public` and set `resume: "/resume.pdf"`.

## Structure
```
src/
  App.jsx            page layout + active-section tracking
  data.js            all your content
  styles.css         all styling
  components/        Sidebar, About, Projects, Skills, Education, Contact
```

## Note on projects
The three projects in `src/data.js` are sample entries because the GitHub account
has no public repositories yet. Replace them with real projects and add a `link`
to each repository once it is pushed. If `link` is left empty, no source-code link is shown.
