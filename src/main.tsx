// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  // Note: Using <StrictMode /> does not work with vite's hot reload when updating .adoc files
  // You may want to turn it off if you're just translating
  <StrictMode>
    <App />
  </StrictMode>
);
