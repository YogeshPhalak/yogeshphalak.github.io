import{j as e}from"./index-Djear2Xh.js";import{C as t}from"./CodeBlock-3-K2jJ1U.js";const o=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"lead-paragraph",children:[e.jsx("p",{children:"When I decided to build my personal portfolio I wanted something clean, modern, and easy to maintain — not another static résumé or an off-the-shelf template that felt disconnected from my work. I picked a small, practical toolset (React + Vite + Tailwind CSS) and built the site myself over a few focused sessions. Along the way a few tutorials and a handful of generative AI prompts saved a lot of time; AI these days is a genuine life-saver for repetitive pieces of code and for idea iteration."}),e.jsx("p",{children:"This post is a concise, first-person walk-through of the exact steps I followed: bootstrapping the project, adding Tailwind, organizing components, and finally deploying to GitHub Pages. The goal is to stay minimal and practical — you can adapt these steps to your own preferences."})]}),e.jsx("h2",{id:"section-1",children:"1. The Stack: Why React, Vite, & Tailwind"}),e.jsx("p",{children:"I wanted a stack that is fast to iterate with, easy to reason about, and simple to deploy. These three tools hit that balance:"}),e.jsxs("div",{className:"tech-stack-grid",children:[e.jsxs("div",{className:"tech-item",children:[e.jsx("h4",{children:"React"}),e.jsx("p",{children:"Component-first UI building makes it straightforward to split your portfolio into isolated sections (Hero, About, Projects, Research, etc.). Reusability matters when you want to keep the site tidy."})]}),e.jsxs("div",{className:"tech-item",children:[e.jsx("h4",{children:"Vite"}),e.jsx("p",{children:"Extremely fast dev server and quick builds. Development feels fluid because hot-reloads are almost instantaneous, which keeps feedback loops short."})]}),e.jsxs("div",{className:"tech-item",children:[e.jsx("h4",{children:"Tailwind CSS"}),e.jsx("p",{children:"Utility-first styling lets you keep styles next to markup, reduce custom CSS, and iterate layouts quickly without context switching between files."})]}),e.jsxs("div",{className:"tech-item",children:[e.jsx("h4",{children:"GitHub Pages"}),e.jsx("p",{children:"Free, reliable hosting for static sites. For a portfolio, it’s sufficient and simple to maintain."})]})]}),e.jsx("h2",{id:"section-2",children:"2. Before We Build: Check Your Tools"}),e.jsxs("p",{children:["Before writing a single line of code, make sure ",e.jsx("strong",{children:"Node.js"})," is installed. This powers the dev server and build tools."]}),e.jsx("p",{children:"Check your installed version:"}),e.jsx(t,{language:"bash",code:"node -v"}),e.jsxs("p",{children:["You should have ",e.jsx("strong",{children:"Node.js v18.0.0 or higher"}),". If your version is older (v14 or v16), you may run into compatibility issues with some packages. The recommended way to install or manage Node versions is",e.jsx("strong",{children:" nvm (Node Version Manager)"}),"."]}),e.jsx("blockquote",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Pro Tip:"})," With nvm you can switch Node versions per project. It’s useful when you work across older and newer codebases."]})}),e.jsx("p",{children:"Install nvm (follow the instructions on the official repo), then in a fresh terminal run:"}),e.jsx(t,{language:"bash",code:"nvm install --lts"}),e.jsx("p",{children:"Once Node is set up, we’re ready to scaffold the project."}),e.jsx("h2",{id:"section-3",children:"3. Part 1: Lightning-Fast Setup with Vite"}),e.jsx("p",{children:"Vite creates a React project in seconds and gets you to a working page immediately. Run the following from the folder where you keep projects:"}),e.jsx(t,{language:"bash",code:`# 1. Create the project
npm create vite@latest my-portfolio -- --template react

# 2. Move into the new folder
cd my-portfolio

# 3. Install the dependencies
npm install`}),e.jsx("p",{children:"Start the dev server:"}),e.jsx(t,{language:"bash",code:"npm run dev"}),e.jsxs("p",{children:["Open the local URL printed by Vite (e.g., ",e.jsx("code",{children:"http://localhost:5173/"}),") to confirm the base app runs. Leave this server running while you work through the next steps."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("h4",{children:"Bonus: Preview on Your Phone"}),e.jsxs("p",{children:["If you want to test the site on another device on the same network, relaunch the dev server with the",e.jsx("code",{children:"--host"})," flag:"]}),e.jsx(t,{language:"bash",code:"npm run dev -- --host"}),e.jsxs("p",{children:["The extra ",e.jsx("code",{children:"--"})," is required — it forwards the flag to Vite. Your terminal will show two URLs:"]}),e.jsx(t,{language:"bash",code:`> Local:    http://localhost:5173/
> Network:  [http://192.168.1.101:5173/](http://192.168.1.101:5173/)`}),e.jsx("p",{children:"Open the Network URL on any device connected to the same Wi-Fi to see live updates."})]}),e.jsx("h2",{id:"section-4",children:"4. Part 2: Styling with Tailwind CSS"}),e.jsxs("p",{children:["Tailwind lets you style directly in JSX so you avoid a lot of custom CSS. Stop the dev server (",e.jsx("code",{children:"Ctrl + C"}),") and install Tailwind’s stable v3 setup:"]}),e.jsx(t,{language:"bash",code:`# 1. Install Tailwind's dependencies (stable v3)
npm install -D tailwindcss@^3.0.0 postcss autoprefixer

# 2. Create the config files
npx tailwindcss init -p`}),e.jsxs("p",{children:["Open ",e.jsx("code",{children:"tailwind.config.js"})," and set the ",e.jsx("code",{children:"content"})," paths so Tailwind can tree-shake unused styles:"]}),e.jsx(t,{language:"javascript",code:`// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}),e.jsxs("p",{children:["Replace the contents of ",e.jsx("code",{children:"src/index.css"})," with the Tailwind directives:"]}),e.jsx(t,{language:"css",code:`/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}),e.jsxs("p",{children:["Restart the server (",e.jsx("code",{children:"npm run dev"}),"). The site will look unstyled — that’s normal and expected."]}),e.jsx("p",{children:"Quick test: change the main heading to verify Tailwind is active:"}),e.jsx(t,{language:"jsx",code:`<h1 className="text-3xl font-bold text-cyan-500">
    My Portfolio is Working!
</h1>`}),e.jsx("p",{children:"If the text updates, Tailwind is correctly integrated."}),e.jsx("h2",{id:"section-5",children:"5. Part 3: Keeping It Clean (A Modular Structure)"}),e.jsx("p",{children:"My approach was to keep the project modular from the start so each part of the page could be edited independently. This makes iterative design and content updates painless."}),e.jsx(t,{language:"bash",code:`src/
├── components/
│    ├── sections/   (Hero.jsx, About.jsx, Research.jsx...)
│    └── ui/         (Navigation.jsx, Footer.jsx, ProjectCard.jsx...)
├── data/
│    └── portfolioData.js
└── App.jsx
`}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("h4",{children:"Why this structure?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"data/"}),": central place for text, project metadata, and lists (so content updates don’t require layout changes).",e.jsx("br",{}),e.jsx("strong",{children:"components/"}),": UI pieces and page sections, which keeps ",e.jsx("code",{children:"App.jsx"})," as the simple assembler."]})]}),e.jsx("p",{children:"Example data file:"}),e.jsx(t,{language:"javascript",code:`// src/data/portfolioData.js
export const projects = [
  {
    category: 'repository',
    title: 'Multiphysics ROM Toolkit',
    description: 'Open-source tools for reduced order modeling',
    tags: ['Python', 'Numerical Methods']
  },
  // ... more projects
];`}),e.jsxs("p",{children:["And a minimal ",e.jsx("code",{children:"App.jsx"})," to assemble the pieces:"]}),e.jsx(t,{language:"jsx",code:`// src/App.jsx
import React from 'react';
import Navigation from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import { projects, skills } from './data/portfolioData'; // Import your data

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        {/* Pass your data down as props */}
        {/* <Research projectsData={projects} /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
export default App;`}),e.jsx("h2",{id:"section-6",children:"6. Part 4: Go Live for Free on GitHub Pages"}),e.jsx("p",{children:"This is the moment everything ships — you push the site and it becomes public."}),e.jsx("h3",{id:"subsection-6-1",children:"Step 1: Create a GitHub Repository"}),e.jsxs("p",{children:["Create a new repo (for example, ",e.jsx("code",{children:"react-portfolio"}),") and connect your local project:"]}),e.jsx(t,{language:"bash",code:`git init
git add .
git commit -m "Initial commit: My portfolio setup"
git branch -M main
git remote add origin [https://github.com/your-username/react-portfolio.git](https://github.com/your-username/react-portfolio.git)
git push -u origin main`}),e.jsx("h3",{id:"subsection-6-2",children:"Step 2: Configure for Deployment"}),e.jsxs("p",{children:["Tell Vite where the site will live by setting the ",e.jsx("code",{children:"base"})," property in ",e.jsx("code",{children:"vite.config.js"}),". This should match the repository name you used on GitHub."]}),e.jsx(t,{language:"javascript",code:`// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/', // 👈 Replace with your repo name
})`}),e.jsx("h3",{id:"subsection-6-3",children:"Step 3: Add Deploy Scripts"}),e.jsxs("p",{children:["Install the helper and add two scripts to ",e.jsx("code",{children:"package.json"}),":"]}),e.jsx(t,{language:"bash",code:"npm install -D gh-pages"}),e.jsx(t,{language:"json",code:`// package.json
"scripts": {
  // ... your dev, build, lint scripts ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},`}),e.jsx("h3",{id:"subsection-6-4",children:"Step 4: Deploy"}),e.jsxs("p",{children:["Run the deploy script — it builds and publishes the ",e.jsx("code",{children:"dist"})," folder to the ",e.jsx("code",{children:"gh-pages"}),"branch:"]}),e.jsx(t,{language:"bash",code:"npm run deploy"}),e.jsx("h3",{id:"subsection-6-5",children:"Step 5: Activate GitHub Pages"}),e.jsxs("p",{children:["On GitHub: ",e.jsx("strong",{children:"Settings → Pages"})," → choose ",e.jsx("strong",{children:"Deploy from a branch"}),", select the",e.jsx("code",{children:"gh-pages"})," branch and the ",e.jsx("code",{children:"/(root)"})," folder, then save."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("h4",{children:"⏱️ A short note on timing"}),e.jsx("p",{children:"The site can take a few minutes to become available the first time. The Pages settings screen will show the published URL once it’s ready."})]}),e.jsx("h2",{id:"section-7",children:"7. Final Thoughts: You Did It"}),e.jsx("p",{children:"You now have a simple, maintainable portfolio powered by React, Vite, and Tailwind. From here, you can incrementally add features: smooth page transitions (Framer Motion), an article/blog system, a project filter, or a small CMS to manage content."}),e.jsx("p",{children:"When I built mine, the small victories mattered: watching the local server reflect a styling tweak, seeing the site load on my phone via the network URL, and finally pushing the first commit to GitHub. Building it myself made the site feel more personal — it’s not just a template stitched together; it’s a place I can shape and evolve."}),e.jsx("blockquote",{children:e.jsx("p",{children:'"A portfolio is a journey, not a destination. Make it yours, keep it simple, and most importantly — ship it. You can always improve it later."'})}),e.jsxs("div",{className:"cta-box",children:[e.jsx("h3",{children:"Want to See the Code?"}),e.jsx("p",{children:"The complete source code I used is available on GitHub. Use it as a base, inspect how components are wired, or fork it and make it your own."}),e.jsx("p",{style:{marginTop:"1.5rem"},children:e.jsxs("a",{href:"https://github.com/YogeshPhalak/yogeshphalak.github.io",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1.5rem",background:"white",color:"#7c3aed",borderRadius:"9999px",textDecoration:"none",fontWeight:600},children:[e.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"View Source Code on GitHub"]})}),e.jsx("p",{style:{marginTop:"1rem",fontSize:"0.9rem",opacity:.8},children:"⭐ Star the repo if you find it helpful!"})]}),e.jsx("p",{children:"Now go build something you care about."})]});export{o as content};
