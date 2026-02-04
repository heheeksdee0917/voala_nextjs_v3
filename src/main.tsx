// main.tsx (or index.tsx)
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'   // keep if you have global styles

// Temporarily comment out or remove the old App
// import App from './App.tsx'

// Just mount an empty div or directly use Next.js content
// (Next.js will take over from app/layout.tsx and app/page.tsx)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div id="__next" />   // Next.js uses this id internally
  </React.StrictMode>
)