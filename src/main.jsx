// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import {ThemeProvider} from './context/ThemeContext';

if (window.location.search.includes('?path=')) {
    const redirectPath = decodeURIComponent(window.location.search.split('?path=')[1]);
    window.history.replaceState(null, '', redirectPath);
}


ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <BrowserRouter>
        {/* 2. Wrap your App component with the ThemeProvider */}
        <ThemeProvider> {/* <-- ADD THIS LINE */}
            <App/>
        </ThemeProvider> {/* <-- ADD THIS LINE */}
    </BrowserRouter>
</React.StrictMode>,);
