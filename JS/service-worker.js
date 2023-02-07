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

// self.addEventListener('fetch', function (e) {
//         e.respondWith(
//             cathes.match(e.request).then(function (r) {
//                 console.log('[Service Worker] Fetching resource: '
//                 + e.request.url);
//                 return r
//             })
//         );
//     });

self.addEventListener('fetch', function (e) {
    e.respondWith(
     cathes.match(e.request).then(function (r) {
        return r || fetch(e.request).then(function (response) {
            return caches.open(cacheName).then(function (cache){
                cache.put(e.request, response.clone());
            });
        });
    })
    );
});
