// Note the .jsx file extension
import React from 'react';
import {CodeBlock} from '../utils/CodeBlock'; // Make sure this path is correct

export const content = (
    <>
        <div className="lead-paragraph">
            <p>
                When I decided to build my personal portfolio I wanted something clean, modern, and easy to maintain —
                not another static résumé or an off-the-shelf template that felt disconnected from my work. I picked a
                small, practical toolset (React + Vite + Tailwind CSS) and built the site myself over a few focused
                sessions. Along the way a few tutorials and a handful of generative AI prompts saved a lot of time; AI
                these days is a genuine life-saver for repetitive pieces of code and for idea iteration.
            </p>
            <p>
                This post is a concise, first-person walk-through of the exact steps I followed: bootstrapping the
                project, adding Tailwind, organizing components, and finally deploying to GitHub Pages. The goal is to
                stay minimal and practical — you can adapt these steps to your own preferences.
            </p>
        </div>

        <h2 id="section-1">1. The Stack: Why React, Vite, & Tailwind</h2>

        <p>
            I wanted a stack that is fast to iterate with, easy to reason about, and simple to deploy. These three
            tools hit that balance:
        </p>

        <div className="tech-stack-grid">
            <div className="tech-item">
                <h4>React</h4>
                <p>
                    Component-first UI building makes it straightforward to split your portfolio into isolated sections
                    (Hero, About, Projects, Research, etc.). Reusability matters when you want to keep the site tidy.
                </p>
            </div>
            <div className="tech-item">
                <h4>Vite</h4>
                <p>
                    Extremely fast dev server and quick builds. Development feels fluid because hot-reloads are almost
                    instantaneous, which keeps feedback loops short.
                </p>
            </div>
            <div className="tech-item">
                <h4>Tailwind CSS</h4>
                <p>
                    Utility-first styling lets you keep styles next to markup, reduce custom CSS, and iterate layouts
                    quickly without context switching between files.
                </p>
            </div>
            <div className="tech-item">
                <h4>GitHub Pages</h4>
                <p>
                    Free, reliable hosting for static sites. For a portfolio, it’s sufficient and simple to maintain.
                </p>
            </div>
        </div>

        <h2 id="section-2">2. Before We Build: Check Your Tools</h2>

        <p>
            Before writing a single line of code, make sure <strong>Node.js</strong> is installed. This powers the
            dev server and build tools.
        </p>

        <p>Check your installed version:</p>
        <CodeBlock language="bash" code={`node -v`}/>

        <p>
            You should have <strong>Node.js v18.0.0 or higher</strong>. If your version is older (v14 or v16), you may
            run into compatibility issues with some packages. The recommended way to install or manage Node versions is
            <strong> nvm (Node Version Manager)</strong>.
        </p>

        <blockquote>
            <p>
                <strong>Pro Tip:</strong> With nvm you can switch Node versions per project. It’s useful when you work
                across older and newer codebases.
            </p>
        </blockquote>

        <p>
            Install nvm (follow the instructions on the official repo), then in a fresh terminal run:
        </p>
        <CodeBlock language="bash" code={`nvm install --lts`}/>

        <p>Once Node is set up, we’re ready to scaffold the project.</p>

        <h2 id="section-3">3. Part 1: Lightning-Fast Setup with Vite</h2>

        <p>
            Vite creates a React project in seconds and gets you to a working page immediately. Run the following from
            the folder where you keep projects:
        </p>
        <CodeBlock
            language="bash"
            code={`# 1. Create the project
npm create vite@latest my-portfolio -- --template react

# 2. Move into the new folder
cd my-portfolio

# 3. Install the dependencies
npm install`}
        />

        <p>Start the dev server:</p>
        <CodeBlock language="bash" code={`npm run dev`}/>

        <p>
            Open the local URL printed by Vite (e.g., <code>http://localhost:5173/</code>) to confirm the base app
            runs. Leave this server running while you work through the next steps.
        </p>

        <div className="highlight-box">
            <h4>Bonus: Preview on Your Phone</h4>
            <p>
                If you want to test the site on another device on the same network, relaunch the dev server with the
                <code>--host</code> flag:
            </p>
            <CodeBlock language="bash" code={`npm run dev -- --host`}/>
            <p>
                The extra <code>--</code> is required — it forwards the flag to Vite. Your terminal will show two URLs:
            </p>
            <CodeBlock
                language="bash"
                code={`> Local:    http://localhost:5173/
> Network:  [http://192.168.1.101:5173/](http://192.168.1.101:5173/)`}
            />
            <p>Open the Network URL on any device connected to the same Wi-Fi to see live updates.</p>
        </div>

        <h2 id="section-4">4. Part 2: Styling with Tailwind CSS</h2>

        <p>
            Tailwind lets you style directly in JSX so you avoid a lot of custom CSS. Stop the dev server (<code>Ctrl +
            C</code>) and install Tailwind’s stable v3 setup:
        </p>
        <CodeBlock
            language="bash"
            code={`# 1. Install Tailwind's dependencies (stable v3)
npm install -D tailwindcss@^3.0.0 postcss autoprefixer

# 2. Create the config files
npx tailwindcss init -p`}
        />

        <p>
            Open <code>tailwind.config.js</code> and set the <code>content</code> paths so Tailwind can tree-shake
            unused styles:
        </p>
        <CodeBlock
            language="javascript"
            code={`// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
        />

        <p>
            Replace the contents of <code>src/index.css</code> with the Tailwind directives:
        </p>
        <CodeBlock
            language="css"
            code={`/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
        />

        <p>Restart the server (<code>npm run dev</code>). The site will look unstyled — that’s normal and expected.</p>

        <p>Quick test: change the main heading to verify Tailwind is active:</p>
        <CodeBlock
            language="jsx"
            code={`<h1 className="text-3xl font-bold text-cyan-500">
    My Portfolio is Working!
</h1>`}
        />

        <p>If the text updates, Tailwind is correctly integrated.</p>

        <h2 id="section-5">5. Part 3: Keeping It Clean (A Modular Structure)</h2>

        <p>
            My approach was to keep the project modular from the start so each part of the page could be edited
            independently. This makes iterative design and content updates painless.
        </p>

        <CodeBlock
            language="bash"
            code={`src/
├── components/
│    ├── sections/   (Hero.jsx, About.jsx, Research.jsx...)
│    └── ui/         (Navigation.jsx, Footer.jsx, ProjectCard.jsx...)
├── data/
│    └── portfolioData.js
└── App.jsx
`}
        />

        <div className="highlight-box">
            <h4>Why this structure?</h4>
            <p>
                <strong>data/</strong>: central place for text, project metadata, and lists (so content updates don’t
                require layout changes).<br/>
                <strong>components/</strong>: UI pieces and page sections, which keeps <code>App.jsx</code> as the
                simple assembler.
            </p>
        </div>

        <p>Example data file:</p>
        <CodeBlock
            language="javascript"
            code={`// src/data/portfolioData.js
export const projects = [
  {
    category: 'repository',
    title: 'Multiphysics ROM Toolkit',
    description: 'Open-source tools for reduced order modeling',
    tags: ['Python', 'Numerical Methods']
  },
  // ... more projects
];`}
        />

        <p>And a minimal <code>App.jsx</code> to assemble the pieces:</p>
        <CodeBlock
            language="jsx"
            code={`// src/App.jsx
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
export default App;`}
        />

        <h2 id="section-6">6. Part 4: Go Live for Free on GitHub Pages</h2>

        <p>This is the moment everything ships — you push the site and it becomes public.</p>

        <h3 id="subsection-6-1">Step 1: Create a GitHub Repository</h3>
        <p>Create a new repo (for example, <code>react-portfolio</code>) and connect your local project:</p>
        <CodeBlock
            language="bash"
            code={`git init
git add .
git commit -m "Initial commit: My portfolio setup"
git branch -M main
git remote add origin [https://github.com/your-username/react-portfolio.git](https://github.com/your-username/react-portfolio.git)
git push -u origin main`}
        />

        <h3 id="subsection-6-2">Step 2: Configure for Deployment</h3>
        <p>
            Tell Vite where the site will live by setting the <code>base</code> property in <code>vite.config.js</code>.
            This should match the repository name you used on GitHub.
        </p>
        <CodeBlock
            language="javascript"
            code={`// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/', // 👈 Replace with your repo name
})`}
        />

        <h3 id="subsection-6-3">Step 3: Add Deploy Scripts</h3>
        <p>Install the helper and add two scripts to <code>package.json</code>:</p>
        <CodeBlock language="bash" code={`npm install -D gh-pages`}/>
        <CodeBlock
            language="json"
            code={`// package.json
"scripts": {
  // ... your dev, build, lint scripts ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},`}
        />

        <h3 id="subsection-6-4">Step 4: Deploy</h3>
        <p>Run the deploy script — it builds and publishes the <code>dist</code> folder to the <code>gh-pages</code>
            branch:</p>
        <CodeBlock language="bash" code={`npm run deploy`}/>

        <h3 id="subsection-6-5">Step 5: Activate GitHub Pages</h3>
        <p>
            On GitHub: <strong>Settings → Pages</strong> → choose <strong>Deploy from a branch</strong>, select the
            <code>gh-pages</code> branch and the <code>/(root)</code> folder, then save.
        </p>

        <div className="highlight-box">
            <h4>⏱️ A short note on timing</h4>
            <p>
                The site can take a few minutes to become available the first time. The Pages settings screen will show
                the published URL once it’s ready.
            </p>
        </div>

        <h2 id="section-7">7. Final Thoughts: You Did It</h2>

        <p>
            You now have a simple, maintainable portfolio powered by React, Vite, and Tailwind. From here, you can
            incrementally add features: smooth page transitions (Framer Motion), an article/blog system, a project
            filter, or a small CMS to manage content.
        </p>

        <p>
            When I built mine, the small victories mattered: watching the local server reflect a styling tweak, seeing
            the site load on my phone via the network URL, and finally pushing the first commit to GitHub. Building it
            myself made the site feel more personal — it’s not just a template stitched together; it’s a place I can
            shape and evolve.
        </p>

        <blockquote>
            <p>
                "A portfolio is a journey, not a destination. Make it yours, keep it simple, and most importantly —
                ship it. You can always improve it later."
            </p>
        </blockquote>

        <div className="cta-box">
            <h3>Want to See the Code?</h3>
            <p>
                The complete source code I used is available on GitHub. Use it as a base, inspect how components are
                wired,
                or fork it and make it your own.
            </p>
            <p style={{marginTop: '1.5rem'}}>
                <a
                    href="https://github.com/YogeshPhalak/yogeshphalak.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'white',
                        color: '#7c3aed',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        fontWeight: 600
                    }}
                >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source Code on GitHub
                </a>
            </p>
            {/* Here is the new line you requested */}
            <p style={{marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8}}>
                ⭐ Star the repo if you find it helpful!
            </p>
        </div>

        <p>Now go build something you care about.</p>
    </>
);