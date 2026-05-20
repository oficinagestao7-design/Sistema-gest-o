// Service Worker básico para permitir a instalação do PWA
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Opcional: Aqui você pode configurar cache offline no futuro
    event.respondWith(fetch(event.request));
});