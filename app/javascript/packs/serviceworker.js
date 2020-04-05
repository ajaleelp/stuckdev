console.log('[Service Worker] Hello world!');

var CACHE_NAME = 'v1-cached-assets';

function onInstall(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function prefill(cache) {
      return cache.addAll([
        '/offline.html'
      ]);
    })
  );
}

function onActivate(event) {
  console.log('[Serviceworker]', "Activating!", event);
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          return cacheName.indexOf('v1') !== 0;
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
}

self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)


function onFetch(event) {
  // Fetch from network, fallback to cached content, then offline.html for same-origin GET requests
  var request = event.request;

  if (!request.url.match(/localhost/)) {
    return;
  }
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(request).catch(function fallback() {
      return caches.match('/offline.html')
    })
  );

  // See https://jakearchibald.com/2014/offline-cookbook/#on-network-response for more examples
}

self.addEventListener('fetch', onFetch);

function onPush(event) {
  console.log(event.data.json());
  var payload = event.data.json();
  var title = payload.title;
  var body = payload.body;
  var data = payload.data;

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      data: data,
      icon: "push-icon.png",
      tag:  Math.random().toString(36).substring(7),
      requireInteraction: true,
      actions: [
        {action: 'connect', title: 'Connect'}]
    })
  )
}

self.addEventListener("push", onPush);

self.addEventListener('notificationclick', function(event) {
  const clickedNotification = event.notification;
  const url = "http://" + self.location.hostname + "/help_requests/" + clickedNotification.data.help_request_id + "/preview";
  // const url = "https://meet.jit.si/" + clickedNotification.data.room_name;
  console.log(url);

  event.notification.close();

  if (event.action === 'connect') {
    event.waitUntil(
      clients.matchAll({type: 'window'}).then( windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          // If so, just focus it.
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
    );
  }
}, false);