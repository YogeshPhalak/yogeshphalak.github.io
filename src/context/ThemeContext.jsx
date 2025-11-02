// src/context/ThemeContext.jsx

import React, {createContext, useContext, useState, useEffect} from 'react';

// 1. Create the context
const ThemeContext = createContext();

// 2. Create the Provider component
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        // Check for saved theme in localStorage or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return savedTheme || (userPrefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {theme, toggleTheme};

    return (<ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>);
};

// 3. Create the custom hook for easy consumption
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        // This is the error you are seeing! It's thrown when useTheme is used outside a ThemeProvider.
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};