// file: index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // This will give you the font size in pixels

console.info("Font size on the root element (1 rem) in pixels: ", rootFontSize);
