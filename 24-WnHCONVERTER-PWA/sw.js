const CACHE_NAME = "weight_height_converter-1";
const ALL_CACHES = [CACHE_NAME];
const files = [
  "index.html",
  "styles.scss",
  "icon.svg",
  "icon192.png",
  "icon512.png",
  "index.js",
  "app_weight.js",
  "app_height.js",
  "manifest.json",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(files);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return (
              cacheName.startsWith("weight_height_converter") &&
              !ALL_CACHES.includes(cacheName)
            );
          })
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  if (
    requestUrl.origin !== location.origin ||
    "/" !== requestUrl.pathname ||
    files.includes(requestUrl.pathname)
  ) {
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => response || fetch(event.request))
    );
  } else {
    event.respondWith(
      caches
        .match("index.html")
        .then((response) => response || fetch("index.html"))
    );
  }
});
