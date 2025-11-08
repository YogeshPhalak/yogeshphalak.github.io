import React, {useState, useEffect} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// We only need atomDark for the text color style
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Copy, Check} from 'lucide-react';

const isDarkMode = () => document.documentElement.classList.contains('dark');

export const CodeBlock = ({code, language}) => {
    const [copied, setCopied] = useState(false);
    const [isDark, setIsDark] = useState(isDarkMode());

    // This just watches for the <html> tag to change
    useEffect(() => {
        const updateTheme = () => {
            setIsDark(isDarkMode());
        };
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        return () => observer.disconnect();
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(null), 2000);
    };

    // We always use atomDark for the text colors...
    const baseStyle = atomDark;

    // ...but we override the background to match your original CSS
    const mergedStyle = {
        ...baseStyle,
        'pre[class*="language-"]': {
            ...baseStyle['pre[class*="language-"]'],
            // This is the fix:
            backgroundColor: isDark
                ? 'rgba(17, 24, 39, 0.8)'  // Your original .dark pre background
                : 'rgba(15, 23, 42, 0.9)', // Your original .blog-content pre background
            backdropFilter: 'blur(4px)', // Keeps the glass effect
        },
    };

    return (
        <div className="relative">
            <button
                onClick={handleCopy}
                className={`copy-button ${copied ? 'copied' : ''}`}
                style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    zIndex: 10
                }}
            >
                {/* --- FIX 1: Minimal button, icons only --- */}
                <span className="copy-icon">
                    {copied ? <Check width={16}/> : <Copy width={16}/>}
                </span>
                {/* The "Copy" / "Copied!" text span is removed */}
            </button>

            <SyntaxHighlighter
                language={language}
                style={mergedStyle} // Use our smart, merged style
                customStyle={{
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    paddingTop: '3.5rem',
                    margin: '1.5rem 0',
                    // Use your original border colors
                    border: isDark
                        ? '1px solid rgb(30, 41, 59)'
                        : '1px solid rgb(51, 65, 85)',
                }}
                codeTagProps={{style: {display: 'block'}}}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};