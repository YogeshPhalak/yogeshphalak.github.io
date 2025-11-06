// file: src/pages/BlogTemplate.jsx (FINAL VERSION with Progress Bar Visibility Check)

import React, {useEffect, useState} from 'react';
import {useParams, Navigate, Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {blogs} from '../data/portfolioData.js';
import {Calendar, Clock, ArrowLeft, Share2, BookOpen, Check, List} from 'lucide-react';
import {slugify} from '../utils/blogUtils.jsx';

const loadBlogContent = async (slug) => {
    try {
        const modules = import.meta.glob('../blog-content/*.js');
        const filePath = `../blog-content/${slug}.js`;

        if (modules[filePath]) {
            const module = await modules[filePath]();
            return module.content;
        }

        console.error(`File not found in manifest for slug: ${slug}`);
        return null;

    } catch (e) {
        console.error(`Error loading content for slug: ${slug}`, e);
        return null;
    }
};

const BlogTemplate = () => {
    const {blogSlug} = useParams();
    const [toc, setToc] = useState([]);
    const [readingProgress, setReadingProgress] = useState(0);
    const [contentHtml, setContentHtml] = useState(null);
    const [shareStatus, setShareStatus] = useState('Share');
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);


    const blog = blogs.find(b => b.slug === blogSlug);

    if (!blog) {
        return <Navigate to="/" replace/>;
    }

    useEffect(() => {
        if (blog) {
            setContentHtml(null);
            loadBlogContent(blog.slug).then(content => {
                setContentHtml(content);
                window.scrollTo(0, 0);
            });
        }
    }, [blog, blogSlug]);


    useEffect(() => {
        if (contentHtml) {
            const articleContent = document.getElementById('blog-content');
            if (articleContent) {
                const headings = Array.from(articleContent.querySelectorAll('h2, h3'));
                headings.forEach(h => {
                    if (!h.id) {
                        h.id = slugify(h.textContent);
                    }
                });
                const tableOfContents = headings.map(heading => ({
                    id: heading.id,
                    text: heading.textContent,
                    level: heading.tagName.toLowerCase(),
                }));
                setToc(tableOfContents);
            }
        }
    }, [contentHtml]);

    useEffect(() => {
        const updateReadingProgress = () => {
            const article = document.getElementById('blog-content');
            if (!article) return;

            const windowHeight = window.innerHeight;
            const articleTop = article.offsetTop;
            const articleHeight = article.offsetHeight;
            const scrollY = window.scrollY;

            const readStart = articleTop - windowHeight;
            const readEnd = articleTop + articleHeight;
            const progress = ((scrollY - readStart) / (readEnd - readStart)) * 100;

            setReadingProgress(Math.min(Math.max(progress, 0), 100));
        };

        if (contentHtml) {
            window.addEventListener('scroll', updateReadingProgress);
            updateReadingProgress();
        }

        return () => window.removeEventListener('scroll', updateReadingProgress);
    }, [contentHtml]);

    if (contentHtml === null) {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className="pt-40 pb-40 px-4 sm:px-6 lg:px-8 min-h-screen max-w-7xl mx-auto text-center text-xl text-slate-500 dark:text-gray-400"
            >
                Loading **{blog.title}**...
            </motion.div>
        );
    }

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileTocOpen(false);
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: blog.title,
            text: blog.excerpt,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(shareData.url);
                setShareStatus('Copied!');
                setTimeout(() => setShareStatus('Share'), 2000);
            } else {
                alert("Sharing is not supported on this browser.");
            }
        } catch (error) {
            console.error('Error sharing or copying link:', error);
        }
    };

    const TableOfContents = () => (
        <div
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-slate-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"/>
                Table of Contents
            </h3>
            <nav>
                <ul className="space-y-2">
                    {toc.map((item) => (
                        <li
                            key={item.id}
                            className={`${item.level === 'h3' ? 'pl-4 text-sm' : 'font-semibold text-base'}`}
                        >
                            <button
                                onClick={() => handleScrollTo(item.id)}
                                className="text-left text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors duration-200 w-full py-1"
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
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 z-50 origin-left"
                style={{scaleX: readingProgress / 100}}
            />

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                transition={{duration: 0.5}}
                className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <Link
                        to="/#insights"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                        Back to Insights
                    </Link>

                    {/* Header Section */}
                    <header className="mb-12">
                        {/* Mobile TOC Button (visible only on non-lg screens) */}
                        <div className="lg:hidden mb-6">
                            <button
                                onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-gray-700 rounded-full text-slate-700 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                <List className="w-5 h-5"/>
                                {isMobileTocOpen ? 'Hide Contents' : 'Show Contents'}
                            </button>
                        </div>

                        {/* Mobile TOC Display (conditionally rendered) */}
                        {isMobileTocOpen && (
                            <motion.div
                                initial={{opacity: 0, height: 0}}
                                animate={{opacity: 1, height: 'auto'}}
                                exit={{opacity: 0, height: 0}}
                                transition={{duration: 0.3}}
                                className="lg:hidden mb-8 overflow-hidden"
                            >
                                <TableOfContents/>
                            </motion.div>
                        )}

                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.1}}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight"
                        >
                            {blog.title}
                        </motion.h1>

                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2}}
                            className="text-xl sm:text-2xl text-slate-600 dark:text-gray-400 mb-6 leading-relaxed"
                        >
                            {blog.excerpt}
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                            className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-gray-500"
                        >
                            <span
                                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-gray-800 rounded-full">
                                <Calendar className="w-4 h-4"/> {blog.date}
                            </span>
                            <span
                                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-gray-800 rounded-full">
                                <Clock className="w-4 h-4"/> {blog.readTime} Read
                            </span>
                            <span
                                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-gray-800 rounded-full">
                                <BookOpen className="w-4 h-4"/> Tutorial
                            </span>

                            {/* SHARE BUTTON IMPLEMENTATION */}
                            <button
                                onClick={handleShare}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
                                    shareStatus === 'Copied!'
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-400'
                                        : 'bg-slate-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700'
                                }`}
                            >
                                {shareStatus === 'Copied!' ? (
                                    <Check className="w-4 h-4"/>
                                ) : (
                                    <Share2 className="w-4 h-4"/>
                                )}
                                {shareStatus}
                            </button>

                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4}}
                            className="flex flex-wrap gap-2 mt-6"
                        >
                            {blog.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 dark:border-cyan-500/20 rounded-full text-purple-700 dark:text-cyan-400 text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </header>

                    {/* --- GRID LAYOUT: Left TOC (3) + Content (9) --- */}
                    <div className="lg:grid lg:grid-cols-12 lg:gap-12">

                        {/* 1. Sidebar/TOC Column (Desktop Left Side) */}
                        <aside className="lg:col-span-3 mt-12 lg:mt-0 hidden lg:block">
                            <motion.div
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.7}}
                                className="sticky top-24 space-y-6"
                            >
                                {/* TOC for Desktop */}
                                <TableOfContents/>

                                {/* Author/Info Card */}
                                <div
                                    className="p-6 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-purple-200 dark:border-gray-700"
                                >
                                    <h4 className="font-bold mb-2">About This Post</h4>
                                    <p className="text-sm text-slate-600 dark:text-gray-400">
                                        A comprehensive guide to building modern, performant portfolio websites with
                                        React and Framer Motion.
                                    </p>
                                </div>
                            </motion.div>
                        </aside>

                        {/* 2. Main Content Column (Full Width on Mobile, 9 Columns on Desktop) */}
                        <div className="lg:col-span-9">
                            {/* Featured Image */}
                            <motion.div
                                initial={{scale: 0.95, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{delay: 0.5, duration: 0.5}}
                                className="relative group mb-12"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"/>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                                />
                            </motion.div>

                            {/* Blog Content Area - NOW DYNAMICALLY LOADED */}
                            <motion.article
                                id="blog-content"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.6}}
                                className="blog-content prose prose-lg dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{__html: contentHtml}}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            <style jsx="true">{`
                /* (Rest of your style block remains unchanged) */
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
                    background-clip: text;
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

                .blog-content h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    color: rgb(71, 85, 105);
                }

                .dark .blog-content h4 {
                    color: rgb(203, 213, 225);
                }

                .blog-content p {
                    margin-bottom: 1.5rem;
                    line-height: 1.8;
                }

                .blog-content code {
                    background: rgb(241, 245, 249);
                    padding: 0.2rem 0.4rem;
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    color: rgb(147, 51, 234);
                }

                .dark .blog-content code {
                    background: rgb(31, 41, 55);
                    color: rgb(6, 182, 212);
                }

                .blog-content pre {
                    background: rgb(15, 23, 42);
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                    border: 1px solid rgb(51, 65, 85);
                }

                .blog-content pre code {
                    background: transparent;
                    color: rgb(226, 232, 240);
                    padding: 0;
                }

                .blog-content blockquote {
                    border-left: 4px solid rgb(6, 182, 212);
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: rgb(71, 85, 105);
                    background: rgb(248, 250, 252);
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                }

                .dark .blog-content blockquote {
                    background: rgb(31, 41, 55);
                    color: rgb(156, 163, 175);
                    border-left-color: rgb(147, 51, 234);
                }

                .blog-content ul, .blog-content ol {
                    margin: 1.5rem 0;
                    padding-left: 1.5rem;
                }

                .blog-content li {
                    margin-bottom: 0.75rem;
                    line-height: 1.8;
                }

                .blog-content .tech-stack-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin: 2rem 0;
                }

                .blog-content .tech-item {
                    padding: 1.5rem;
                    background: linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(6, 182, 212, 0.05));
                    border: 1px solid rgba(147, 51, 234, 0.2);
                    border-radius: 0.75rem;
                }

                .dark .blog-content .tech-item {
                    background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1));
                    border-color: rgba(6, 182, 212, 0.2);
                }

                .blog-content .tech-item h4 {
                    font-size: 1.125rem;
                    margin-bottom: 0.5rem;
                    color: rgb(147, 51, 234);
                }

                .dark .blog-content .tech-item h4 {
                    color: rgb(6, 182, 212);
                }

                .blog-content .tech-item p {
                    font-size: 0.875rem;
                    margin: 0;
                    color: rgb(100, 116, 139);
                }

                .dark .blog-content .tech-item p {
                    color: rgb(156, 163, 175);
                }

                .blog-content .highlight-box {
                    background: linear-gradient(135deg, rgb(254, 243, 199), rgb(253, 224, 71));
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    margin: 2rem 0;
                    border: 2px solid rgb(250, 204, 21);
                }

                .dark .blog-content .highlight-box {
                    background: linear-gradient(135deg, rgba(250, 204, 21, 0.2), rgba(234, 179, 8, 0.2));
                    border-color: rgba(250, 204, 21, 0.3);
                }

                .blog-content .highlight-box h4 {
                    margin-top: 0;
                    color: rgb(161, 98, 7);
                }

                .dark .blog-content .highlight-box h4 {
                    color: rgb(250, 204, 21);
                }

                .blog-content .code-example {
                    margin: 2rem 0;
                }

                .blog-content .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1.5rem;
                    margin: 2rem 0;
                }

                .blog-content .stat-item {
                    text-align: center;
                    padding: 2rem 1rem;
                    background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1));
                    border-radius: 1rem;
                    border: 2px solid rgba(147, 51, 234, 0.2);
                }

                .dark .blog-content .stat-item {
                    border-color: rgba(6, 182, 212, 0.2);
                }

                .blog-content .stat-item h4 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin: 0;
                    background: linear-gradient(to right, rgb(6, 182, 212), rgb(147, 51, 234));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .blog-content .stat-item p {
                    font-size: 0.875rem;
                    margin: 0.5rem 0 0 0;
                    color: rgb(100, 116, 139);
                }

                .dark .blog-content .stat-item p {
                    color: rgb(156, 163, 175);
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
                    margin-top: 0;
                }

                .blog-content .cta-box p {
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 0;
                }
            `}</style>
        </>
    );
};

export default BlogTemplate;