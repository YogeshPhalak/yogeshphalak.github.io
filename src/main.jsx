// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// 1. Import the ThemeProvider
import {ThemeProvider} from './context/ThemeContext'; // <-- ADD THIS LINE

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* 2. Wrap your App component with the ThemeProvider */}
            <ThemeProvider> {/* <-- ADD THIS LINE */}
                <App/>
            </ThemeProvider> {/* <-- ADD THIS LINE */}
        </BrowserRouter>
    </React.StrictMode>,
);
