# Web Development Lab Assignments

A beginner-friendly React and Vite home page for six web development labs. Each assignment is listed with its main technology and a short description. Assignment actions currently display a “Coming soon” message; the assignment activities will be added in a later step.

## Project structure

```text
.
├── public/                  # Static files served as-is by Vite
├── src/
│   ├── components/
│   │   ├── AssignmentCard.jsx
│   │   └── AssignmentCard.css
│   ├── App.jsx               # Assignment data and landing page layout
│   ├── App.css               # Page layout and responsive styles
│   ├── index.css             # Global styles
│   └── main.jsx              # React application entry point
├── index.html
├── vite.config.js            # GitHub Pages repository base path
└── package.json
```

## Requirements

- Node.js (current LTS recommended)
- npm

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Build and lint

```bash
npm run build
npm run lint
```

To preview a production build locally:

```bash
npm run preview
```

## GitHub Pages

Vite is configured with the repository base path `/web-development-lab-assignments/`, and production asset URLs are generated with that prefix. This repository currently has no GitHub Pages workflow, so deployment is not automated or confirmed. After enabling GitHub Pages for the repository, publish the generated `dist/` directory. The expected site URL is:

<https://sayli9045.github.io/web-development-lab-assignments/>

## Assignment plan

1. JavaScript Calculator — functions and switch/if-else.
2. DOM To-Do List — HTML, CSS, and vanilla JavaScript.
3. Registration Form Validation — HTML, CSS, and vanilla JavaScript.
4. React Profile Card — reusable components and props.
5. Controlled React Form — controlled inputs with `useState`.
6. React Counter App — state updates with `useState`.
