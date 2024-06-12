const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: {
    SMALL: (pictureId) => `https://restaurant-api.dicoding.dev/images/small/${pictureId}`,
    MEDIUM: (pictureId) => `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`,
    LARGE: (pictureId) => `https://restaurant-api.dicoding.dev/images/large/${pictureId}`,
  },
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'resto-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'resto',
  WEB_SOCKET_SERVER: 'wss://restaurant-api.dicoding.dev',

  PUSH_MSG_VAPID_PUBLIC_KEY: 'BN7-r0Svv7CsTi18-OPYtJLVW0bfuZ1x1UtrygczKjennA_qs7OWmgOewcuYSYF3Gc_mPbqsDh2YoGCDPL0RxDQ',
  PUSH_MSG_SUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/subscribe',
  PUSH_MSG_UNSUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/unsubscribe',
};

export default CONFIG;
