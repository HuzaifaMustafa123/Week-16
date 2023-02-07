var cacheName ='lecturestore-v1';
var cacheFiles = [
    'index.html',
    'store.webmanifest',
    'JS/products.js',
    'JS/script.js',
    'JS/service-worker.js',
    'images/criminology.jpg',
    'images/english.jpg',
    'images/maths.jpg',
    'images/law.jpeg',
    'images/physics.jpeg',
    'images/icon.png',
    'images/image.png',
    'css/style.css'  
];
self.addEventListener('install', (e) => {
        console.log('[Service Worker] Install');
        e.waitUntil(
            caches.open(cacheName).then((cache) => {
                console.log('[Service Worker] Caching all the files');
                return cache.addAll(cacheFiles);
            })
            );
    });