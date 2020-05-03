// var CACHE_NAME = 'hello-pwa';
// var filesToCache = [
  // '/',
  // '/index.html',
  // '/main.js',
  // '/counter.js'
// ];

// /* Start the service worker and cache all of the app's content */
// self.addEventListener('install', function(event) {
  // event.waitUntil(
    // caches.open(CACHE_NAME)
	  // .then(function(cache) {
        // return cache.addAll(filesToCache);
    // })
  // );
// });

// /* Serve cached content when offline */
// self.addEventListener('fetch', function(event) {
  // event.respondWith(
    // caches.match(event.request)
	  // .then(function(response) {
		// if(response) {
		  // return response;
		// }
		
        // return fetch(event.request).then(
          // function(response) {
            // Check if we received a valid response
            // if(!response || response.status !== 200 || response.type !== 'basic') {
              // return response;
            // }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            // var responseToCache = response.clone();

            // caches.open(CACHE_NAME)
              // .then(function(cache) {
                // cache.put(event.request, responseToCache);
              // });

            // return response;
          // }
		// );
    // })
  // );
// });


self.addEventListener('install', (event) => {
  console.log('👷', 'install', event);
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('👷', 'activate', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('👷', 'fetch', event);
  event.respondWith(fetch(event.request));
});