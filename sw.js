const CACHE_NAME = 'pharmapath-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icon-192.svg',
  '/icon-512.svg',
  '/entry.jsx',
  '/main.jsx'
];

self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map(k => k !== CACHE_NAME ? caches.delete(k) : Promise.resolve())
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (ev) => {
  if (ev.request.method !== 'GET') return;
  ev.respondWith(
    caches.match(ev.request).then((cached) => cached || fetch(ev.request).then((res) => {
      return caches.open(CACHE_NAME).then((cache) => {
        try { cache.put(ev.request, res.clone()); } catch(e){}
        return res;
      });
    }).catch(()=>caches.match('/index.html')))
  );
});
