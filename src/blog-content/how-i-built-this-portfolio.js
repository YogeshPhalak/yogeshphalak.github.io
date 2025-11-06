// file: src/blog-content/how-i-built-this-portfolio.js

export const content = `
    <div class="lead-paragraph">
        <p>Building a modern portfolio website is more than just displaying your work—it's about creating an experience that reflects your expertise and personality. In this comprehensive guide, I'll walk you through how I built my interactive portfolio using React, Framer Motion, and Tailwind CSS.</p>
    </div>

    <h2 id="section-1">1. Project Overview & Tech Stack</h2>
    <p>When I set out to build this portfolio, I wanted something that would stand out while maintaining excellent performance and user experience. Here's the tech stack I chose and why:</p>
    
    <div class="tech-stack-grid">
        <div class="tech-item">
            <h4>React 18</h4>
            <p>For component-based architecture and efficient rendering</p>
        </div>
        <div class="tech-item">
            <h4>Framer Motion</h4>
            <p>Smooth, physics-based animations that feel natural</p>
        </div>
        <div class="tech-item">
            <h4>Tailwind CSS</h4>
            <p>Utility-first styling for rapid development</p>
        </div>
        <div class="tech-item">
            <h4>React Router</h4>
            <p>Seamless navigation and routing</p>
        </div>
    </div>

    <h3 id="subsection-1-1">1.1. Why This Stack?</h3>
    <p>Each technology was chosen for a specific reason. React provides the component reusability I needed, Framer Motion makes complex animations accessible, and Tailwind CSS allowed me to iterate quickly on designs without context switching.</p>

    <blockquote>
        <p>"The best portfolio is one that showcases not just what you've done, but how you think and solve problems."</p>
    </blockquote>

    <h2 id="section-2">2. Architecture & Project Structure</h2>
    <p>A well-organized project structure is crucial for maintainability. Here's how I structured the codebase:</p>

    <pre><code>src/
├── components/
│   ├── sections/     # Main page sections
│   ├── ui/          # Reusable UI components
│   └── layout/      # Layout components
├── pages/           # Route pages
├── data/            # Portfolio data
└── styles/          # Global styles</code></pre>

    <h3 id="subsection-2-1">2.1. Component Design Philosophy</h3>
    <p>I followed a strict separation of concerns. Each card component (ProjectCard, BlogCard, CreativeCard) shares a consistent animation pattern but maintains its own unique styling. This created visual consistency while allowing flexibility.</p>

    <div class="code-example">
        <h4>Example: Consistent Card Animation Pattern</h4>
        <pre><code>const motionProps = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    whileHover: { y: -6 },
    transition: { duration: 0.3 }
};</code></pre>
    </div>

    <h2 id="section-3">3. Animation Strategy</h2>
    <p>Animations are powerful, but they need to serve a purpose. I implemented a three-tier animation strategy:</p>

    <h3 id="subsection-3-1">3.1. Entrance Animations</h3>
    <p>Sections fade in and slide up as you scroll, creating a sense of depth and progression. Using Framer Motion's <code>whileInView</code> prop with <code>viewport: {{ once: true }}</code> ensures animations only trigger once, improving performance.</p>

    <h3 id="subsection-3-2">3.2. Hover Interactions</h3>
    <p>Every interactive element has a subtle hover effect. Cards lift slightly, colors shift, and gradients reveal themselves. These micro-interactions make the site feel alive and responsive.</p>

    <div class="highlight-box">
        <h4>💡 Pro Tip</h4>
        <p>Keep hover animations under 300ms. Anything longer feels sluggish, anything shorter feels jarring.</p>
    </div>

    <h3 id="subsection-3-3">3.3. Gradient Borders</h3>
    <p>One of the signature features is the gradient border that appears on hover. This was achieved using a clever trick with absolute positioning:</p>

    <pre><code>&lt;div className="relative group p-[1.5px]"&gt;
    &lt;div className="absolute inset-0 bg-gradient-to-br 
                    from-purple-500 to-cyan-500 opacity-0 
                    group-hover:opacity-100 transition-opacity" /&gt;
    &lt;div className="relative bg-white rounded-[15px]"&gt;
        {/* Content */}
    &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <h2 id="section-4">4. Dark Mode Implementation</h2>
    <p>Modern websites need dark mode. I implemented it using Tailwind's dark mode utilities, ensuring every component looks great in both themes.</p>

    <h3 id="subsection-4-1">4.1. Color Strategy</h3>
    <p>Instead of just inverting colors, I carefully selected complementary palettes for both modes. Dark mode uses softer contrasts to reduce eye strain while maintaining readability.</p>

    <h2 id="section-5">5. Performance Optimization</h2>
    <p>A beautiful site is useless if it loads slowly. Here are the optimization techniques I employed:</p>

    <ul>
        <li><strong>Lazy Loading:</strong> Images and components load as needed</li>
        <li><strong>Animation Throttling:</strong> Limited concurrent animations</li>
        <li><strong>Code Splitting:</strong> Route-based code splitting with React Router</li>
        <li><strong>Optimized Assets:</strong> Compressed images and minimal dependencies</li>
    </ul>

    <h3 id="subsection-5-1">5.1. Animation Performance</h3>
    <p>Framer Motion uses GPU-accelerated transforms (translate, scale, rotate) instead of layout properties. This keeps animations smooth even on mobile devices.</p>

    <h2 id="section-6">6. Responsive Design Challenges</h2>
    <p>Making complex layouts work across all screen sizes was one of the biggest challenges. The timeline section, in particular, required creative solutions.</p>

    <h3 id="subsection-6-1">6.1. Mobile-First Approach</h3>
    <p>I started with the mobile layout and progressively enhanced for larger screens. This ensured the core experience worked everywhere before adding complexity.</p>

    <div class="stats-grid">
        <div class="stat-item">
            <h4>98</h4>
            <p>Lighthouse Performance Score</p>
        </div>
        <div class="stat-item">
            <h4>100</h4>
            <p>Accessibility Score</p>
        </div>
        <div class="stat-item">
            <h4>&lt;2s</h4>
            <p>Average Load Time</p>
        </div>
    </div>

    <h2 id="section-7">7. Lessons Learned</h2>
    <p>Every project teaches valuable lessons. Here are the key takeaways from building this portfolio:</p>

    <h3 id="subsection-7-1">7.1. Start Simple, Add Complexity</h3>
    <p>I initially tried to implement every animation idea I had. This led to performance issues and visual clutter. The final version is much simpler and more effective.</p>

    <h3 id="subsection-7-2">7.2. Consistency Over Creativity</h3>
    <p>While it's tempting to make each section unique, maintaining consistent patterns (animations, spacing, colors) creates a more cohesive experience.</p>

    <h3 id="subsection-7-3">7.3. Test on Real Devices</h3>
    <p>Browser dev tools are great, but nothing beats testing on actual phones and tablets. I discovered and fixed several mobile-specific issues this way.</p>

    <h2 id="section-8">8. Future Enhancements</h2>
    <p>The portfolio is never truly "done." Here's what's on my roadmap:</p>

    <ul>
        <li>Blog with MDX support for rich, interactive content</li>
        <li>3D elements using Three.js for project showcases</li>
        <li>Analytics integration to understand visitor behavior</li>
        <li>Internationalization for a global audience</li>
    </ul>

    <h2 id="section-9">9. Conclusion</h2>
    <p>Building this portfolio was an incredible learning experience. It pushed me to think deeply about user experience, performance, and design systems. More importantly, it gave me a platform to showcase my work in a way that truly represents who I am as a developer.</p>

    <p>If you're building your own portfolio, remember: it should be a reflection of you. Don't just copy trends—understand the principles behind them and adapt them to tell your story.</p>

    <div class="cta-box">
        <h3>Want to Learn More?</h3>
        <p>Check out the source code on GitHub or reach out if you have questions about any of the techniques discussed here.</p>
    </div>
`;