// file: src/pages/BlogTemplate.jsx - FINAL (CLEANED UP)

import React, {useEffect, useState, useLayoutEffect} from 'react'; // Removed unused imports
import {useParams, Navigate, Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {blogs} from '../data/portfolioData.js';
import {Calendar, Clock, ArrowLeft, Share2, Check, List} from 'lucide-react'; // Removed Copy
import {slugify} from '../utils/blogUtils.jsx';
// No createRoot needed

const loadBlogContent = async (slug) => {
    try {
        const modules = import.meta.glob('../blog-content/*.jsx');
        const filePath = `../blog-content/${slug}.jsx`;
        if (modules[filePath]) {
            const module = await modules[filePath]();
            return module.content;
        }
        return null;
    } catch (e) {
        console.error('Error loading content:', e);
        return null;
    }
};

// The old CopyButton component is REMOVED. It's not needed.

const BlogTemplate = () => {
    const {blogSlug} = useParams();
    const [toc, setToc] = useState([]);
    const [readingProgress, setReadingProgress] = useState(0);
    const [contentHtml, setContentHtml] = useState(null); // This will now hold a React element
    const [shareStatus, setShareStatus] = useState('Share');
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
    // const [copiedIndex, setCopiedIndex] = useState(null); // REMOVED

    const blog = blogs.find(b => b.slug === blogSlug);

    if (!blog) {
        return <Navigate to="/" replace/>;
    }

    // Load blog content (no change)
    useEffect(() => {
        if (blog) {
            setContentHtml(null);
            loadBlogContent(blog.slug).then(content => {
                setContentHtml(content); // content is now a React element
                window.scrollTo(0, 0);
            });
        }
    }, [blog, blogSlug]);

    // The old handleCopy function is REMOVED.

    // This hook is now ONLY for the Table of Contents
    useLayoutEffect(() => {
        // We wait until the React component (contentHtml) is rendered
        if (!contentHtml) return;

        const article = document.getElementById('blog-content');
        if (!article) return;

        // 1. Generate TOC (This part is still good)
        const headings = Array.from(article.querySelectorAll('h2, h3'));
        headings.forEach(h => {
            if (!h.id) h.id = slugify(h.textContent);
        });
        setToc(headings.map(h => ({
            id: h.id,
            text: h.textContent,
            level: h.tagName.toLowerCase(),
        })));

        // 2. All the old <pre> tag and copy button logic is REMOVED.

        // This effect only needs to re-run when the content changes
    }, [contentHtml]);

    // Update reading progress (no change)
    useEffect(() => {
        // ... (this hook is fine, no changes) ...
        const updateProgress = () => {
            const article = document.getElementById('blog-content');
            if (!article) return;
            const {offsetTop, offsetHeight} = article;
            const scrollY = window.scrollY;
            const progress = ((scrollY - offsetTop + window.innerHeight) / offsetHeight) * 100;
            setReadingProgress(Math.min(Math.max(progress, 0), 100));
        };

        if (contentHtml) {
            window.addEventListener('scroll', updateProgress);
            updateProgress();
        }
        return () => window.removeEventListener('scroll', updateProgress);
    }, [contentHtml]);

    if (contentHtml === null) {
        // ... (loading spinner is fine, no changes) ...
        return (
            <motion.div
                className="pt-40 pb-40 px-4 min-h-screen max-w-7xl mx-auto text-center text-xl text-slate-500 dark:text-gray-400">
                Loading...
            </motion.div>
        );
    }

    const handleScrollTo = (id) => {
        // ... (this is fine, no changes) ...
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
            setIsMobileTocOpen(false);
        }
    };

    const handleShare = async () => {
        // ... (this is fine, no changes) ...
        try {
            if (navigator.share) {
                await navigator.share({
                    title: blog.title,
                    text: blog.excerpt,
                    url: window.location.href
                });
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
                setShareStatus('Copied!');
                setTimeout(() => setShareStatus('Share'), 2000);
            }
        } catch (error) {
            console.error('Share error:', error);
        }
    };

    const TableOfContents = () => (
        // ... (this is fine, no changes) ...
        <div
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-slate-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"/>
                Table of Contents
            </h3>
            <nav>
                <ul className="space-y-2">
                    {toc.map((item) => (
                        <li key={item.id} className={item.level === 'h3' ? 'pl-4 text-sm' : 'font-semibold text-base'}>
                            <button
                                onClick={() => handleScrollTo(item.id)}
                                className="text-left text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors w-full py-1"
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );

    return (
        <>
            {/* ... (all the header/nav/TOC logic is fine) ... */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 z-50 origin-left"
                style={{scaleX: readingProgress / 100}}
            />

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen"
            >
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/#insights"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                        Back to Insights
                    </Link>

                    <header className="mb-12">
                        {/* ... (all header content is fine) ... */}
                        <div className="lg:hidden mb-6">
                            <button
                                onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-gray-700 rounded-full text-slate-700 dark:text-gray-200"
                            >
                                <List className="w-5 h-5"/>
                                {isMobileTocOpen ? 'Hide Contents' : 'Show Contents'}
                            </button>
                        </div>

                        {isMobileTocOpen && (
                            <motion.div
                                initial={{opacity: 0, height: 0}}
                                animate={{opacity: 1, height: 'auto'}}
                                className="lg:hidden mb-8"
                            >
                                <TableOfContents/>
                            </motion.div>
                        )}

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {blog.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-600 dark:text-gray-400 mb-6">
                            {blog.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-gray-500">
                            <span
                                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-gray-800 rounded-full">
                                <Calendar className="w-4 h-4"/> {blog.date}
                            </span>
                            <span
                                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-gray-800 rounded-full">
                                <Clock className="w-4 h-4"/> {blog.readTime} Read
                            </span>
                            <button
                                onClick={handleShare}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
                                    shareStatus === 'Copied!'
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900'
                                        : 'bg-slate-100 dark:bg-gray-800 hover:bg-purple-100'
                                }`}
                            >
                                {shareStatus === 'Copied!' ? <Check className="w-4 h-4"/> :
                                    <Share2 className="w-4 h-4"/>}
                                {shareStatus}
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {blog.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 dark:border-cyan-500/20 rounded-full text-purple-700 dark:text-cyan-400 text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                        <aside className="lg:col-span-3 hidden lg:block">
                            <div className="sticky top-24">
                                <TableOfContents/>
                            </div>
                        </aside>

                        <div className="lg:col-span-9">
                            <div className="relative group mb-12">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-20"/>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                                />
                            </div>

                            {/* HERE IS THE FIX

                            */}

                            <article
                                id="blog-content"
                                className="blog-content prose prose-lg dark:prose-invert max-w-none"
                            >
                                {contentHtml}
                            </article>

                            {/* THE OLD CODE WAS:
                              <article
                                  id="blog-content"
                                  className="blog-content prose ..."
                                  dangerouslySetInnerHTML={{__html: contentHtml}} // <--- THIS WAS WRONG
                              />

                            */}
                        </div>
                    </div>
                </div>
            </motion.div>


            <style>{`
                .blog-content {
                    color: rgb(51, 65, 85);
                }
                .dark .blog-content {
                    color: rgb(209, 213, 219);
                }
                .blog-content .lead-paragraph {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: rgb(71, 85, 105);
                    margin-bottom: 2rem;
                    padding: 1.5rem;
                    background: linear-gradient(to right, rgba(147, 51, 234, 0.05), rgba(6, 182, 212, 0.05));
                    border-left: 4px solid rgb(147, 51, 234);
                    border-radius: 0.5rem;
                }
                .dark .blog-content .lead-paragraph {
                    color: rgb(156, 163, 175);
                    background: linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1));
                }
                .blog-content h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    background: linear-gradient(to right, rgb(6, 182, 212), rgb(147, 51, 234));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: rgb(100, 116, 139);
                }
                .dark .blog-content h3 {
                    color: rgb(148, 163, 184);
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                    line-height: 1.8;
                }
                .blog-content code {
                    background: rgba(147, 51, 234, 0.08);
                    padding: 0.2rem 0.5rem;
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                    color: rgb(147, 51, 234);
                    font-family: 'Fira Code', 'Courier New', monospace;
                    font-weight: 500;
                    border: 1px solid rgba(147, 51, 234, 0.15);
                }
                .dark .blog-content code {
                    background: rgba(6, 182, 212, 0.12);
                    color: rgb(6, 182, 212);
                    border-color: rgba(6, 182, 212, 0.2);
                }
                
                /* --- THIS IS THE KEY CSS FIX --- */
                .blog-content pre {
                    position: relative !important; /* Ensures the wrapper can be positioned absolutely inside */
                    background: linear-gradient(135deg, rgb(15, 23, 42), rgb(30, 41, 59));
                    padding: 1.5rem;
                    padding-top: 3.5rem; /* Make sure this is > wrapper's top position */
                    border-radius: 0.75rem;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                    border: 1px solid rgb(51, 65, 85);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                /* --- END OF FIX --- */

                .dark .blog-content pre {
                    background: linear-gradient(135deg, rgb(10, 15, 30), rgb(17, 24, 39));
                    border-color: rgb(30, 41, 59);
                }
                .blog-content pre code {
                    background: transparent !important;
                    color: rgb(226, 232, 240) !important;
                    padding: 0 !important;
                    border: none !important;
                    font-size: 0.875rem;
                    line-height: 1.7;
                    display: block;
                }
                .dark .blog-content pre code {
                    color: rgb(203, 213, 225) !important;
                }
                
                /* Your original styles are perfect */
                .copy-btn-wrapper {
                    position: absolute;
                    top: 0.75rem;
                    right: 0.75rem;
                    z-index: 10;
                }
                .copy-button {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 0.75rem;
                    background: rgba(51, 65, 85, 0.95);
                    color: white;
                    border: 1px solid rgba(71, 85, 105, 0.5);
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    backdrop-filter: blur(4px);
                }
                .copy-button:hover {
                    background: rgba(71, 85, 105, 1);
                    border-color: rgba(100, 116, 139, 0.7);
                    transform: translateY(-1px);
                }
                .copy-button.copied {
                    background: rgba(16, 185, 129, 1);
                    border-color: rgba(16, 185, 129, 0.7);
                }
                .copy-button .copy-icon {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                }
                .copy-button .copy-icon svg {
                    width: 16px;
                    height: 16px;
                }
                .copy-button.in-highlight {
                    background: rgba(161, 98, 7, 0.95);
                    border-color: rgba(161, 98, 7, 0.5);
                }
                .copy-button.in-highlight:hover {
                    background: rgba(161, 98, 7, 1);
                }
                .dark .copy-button {
                    background: rgba(51, 65, 85, 0.95);
                }
                .dark .copy-button.in-highlight {
                    background: rgba(250, 204, 21, 0.95);
                    border-color: rgba(250, 204, 21, 0.5);
                    color: rgb(15, 23, 42);
                }
                .dark .copy-button.in-highlight:hover {
                    background: rgba(250, 204, 21, 1);
                }
                
                /* ... rest of your styles ... */
                .blog-content blockquote {
                    border-left: 4px solid rgb(6, 182, 212);
                    padding: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    background: rgb(248, 250, 252);
                    border-radius: 0.5rem;
                }
                .dark .blog-content blockquote {
                    background: rgb(31, 41, 55);
                    border-left-color: rgb(147, 51, 234);
                }
                .blog-content .tech-stack-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1rem;
                    margin: 2rem 0;
                }
                .blog-content .tech-item {
                    padding: 1.5rem;
                    background: linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(6, 182, 212, 0.05));
                    border: 1px solid rgba(147, 51, 234, 0.2);
                    border-radius: 0.75rem;
                }
                .blog-content .highlight-box {
                    background: linear-gradient(135deg, rgb(254, 243, 199), rgb(253, 224, 71));
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    margin: 2rem 0;
                    border: 2px solid rgb(250, 204, 21);
                    box-shadow: 0 2px 8px rgba(250, 204, 21, 0.15);
                }
                .dark .blog-content .highlight-box {
                    background: linear-gradient(135deg, rgba(250, 204, 21, 0.15), rgba(234, 179, 8, 0.1));
                    border-color: rgba(250, 204, 21, 0.3);
                    box-shadow: 0 2px 8px rgba(250, 204, 21, 0.1);
                }
                .blog-content .highlight-box h4 {
                    margin-top: 0;
                    color: rgb(161, 98, 7);
                }
                .dark .blog-content .highlight-box h4 {
                    color: rgb(250, 204, 21);
                }
                .blog-content .highlight-box code {
                    background: rgba(161, 98, 7, 0.12);
                    color: rgb(161, 98, 7);
                    border-color: rgba(161, 98, 7, 0.2);
                }
                .dark .blog-content .highlight-box code {
                    background: rgba(250, 204, 21, 0.15);
                    color: rgb(250, 204, 21);
                    border-color: rgba(250, 204, 21, 0.25);
                }
                .blog-content .highlight-box pre {
                    background: rgba(255, 255, 255, 0.7) !important;
                    border-color: rgba(161, 98, 7, 0.3) !important;
                }
                .dark .blog-content .highlight-box pre {
                    background: rgba(0, 0, 0, 0.35) !important;
                    border-color: rgba(250, 204, 21, 0.3) !important;
                }
                .blog-content .highlight-box pre code {
                    color: rgb(15, 23, 42) !important;
                }
                .dark .blog-content .highlight-box pre code {
                    color: rgb(226, 232, 240) !important;
                }
                .blog-content .cta-box {
                    background: linear-gradient(135deg, rgb(147, 51, 234), rgb(6, 182, 212));
                    padding: 2rem;
                    border-radius: 1rem;
                    color: white;
                    margin: 3rem 0;
                    text-align: center;
                }
                .blog-content .cta-box h3 {
                    color: white;
                    -webkit-text-fill-color: white;
                }
            `}</style>
        </>
    );
};

export default BlogTemplate;