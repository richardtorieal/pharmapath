import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './main.jsx'

const mount = document.getElementById('root') || document.body.appendChild(document.createElement('div'))
mount.id = 'root'
createRoot(mount).render(<App />)

if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
