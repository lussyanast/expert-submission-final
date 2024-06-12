import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache semua file yang didefinisikan dalam __WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST);

// Routing untuk REST API dari restodb
registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
  new StaleWhileRevalidate({
    cacheName: 'restodb-api',
  }),
);

// Routing untuk gambar dari restodb
registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev' && url.pathname.startsWith('/images/medium/'),
  new StaleWhileRevalidate({
    cacheName: 'restodb-image-api',
  }),
);

// Event listener untuk event 'install'
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  self.skipWaiting();

  // Meminta izin notifikasi saat service worker diinstal
  event.waitUntil(
    self.registration.requestPermission().then((permissionStatus) => {
      if (permissionStatus.state === 'granted') {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    }),
  );
});

// Event listener untuk event 'push'
self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');

  const dataJson = event.data.json();
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };
  event.waitUntil(self.registration.showNotification(notification.title, notification.options));
});

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();
  const chainPromise = async () => {
    console.log('Notification has been clicked');
    await self.clients.openWindow('https://www.dicoding.com/');
  };
  event.waitUntil(chainPromise());
});
