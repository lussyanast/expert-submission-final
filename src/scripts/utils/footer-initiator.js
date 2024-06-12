import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const FooterToolsInitiator = {
  _subscribeButton: null,
  _unsubscribeButton: null,
  _registrationServiceWorker: null,

  async init({ subscribeButton, unsubscribeButton }) {
    this._subscribeButton = subscribeButton;
    this._unsubscribeButton = unsubscribeButton;

    if ('serviceWorker' in navigator) {
      this._registrationServiceWorker = await navigator.serviceWorker.ready;
    }

    this._initialListener();
    this._showSubscribeButton();
  },

  _initialListener() {
    this._subscribeButton.addEventListener('click', async (event) => {
      event.stopPropagation();
      await this._subscribePushMessage();
    });

    this._unsubscribeButton.addEventListener('click', async (event) => {
      event.stopPropagation();
      await this._unsubscribePushMessage();
    });
  },

  async _subscribePushMessage() {
    if (await this._isCurrentSubscriptionAvailable()) {
      console.log('Already subscribed to push message');
      return;
    }

    if (!(await this._isNotificationReady())) {
      console.log('Notification isn\'t available');
      return;
    }

    try {
      console.log('_subscribePushMessage: Subscribing to push message...');
      const pushSubscription = await this._registrationServiceWorker.pushManager.subscribe(
        this._generateSubscribeOptions(),
      );
      await this._sendPostToServer(CONFIG.PUSH_MSG_SUBSCRIBE_URL, pushSubscription);
      console.log('Push message has been subscribed');
    } catch (error) {
      console.error('Failed to subscribe push message:', error);
    }

    this._showSubscribeButton();
  },

  async _unsubscribePushMessage() {
    const pushSubscription = await this._registrationServiceWorker.pushManager.getSubscription();

    if (!pushSubscription) {
      console.log('Haven\'t subscribed to push message');
      return;
    }

    try {
      await this._sendPostToServer(CONFIG.PUSH_MSG_UNSUBSCRIBE_URL, pushSubscription);
      await pushSubscription.unsubscribe();
      console.log('Push message has been unsubscribed');
    } catch (error) {
      console.error('Failed to unsubscribe push message:', error);
    }

    this._showSubscribeButton();
  },

  _generateSubscribeOptions() {
    return {
      userVisibleOnly: true,
      applicationServerKey: this._urlB64ToUint8Array(CONFIG.PUSH_MSG_VAPID_PUBLIC_KEY),
    };
  },

  async _sendPostToServer(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  _isSubscribedToServerForHiddenSubscribeButton(state = false) {
    this._subscribeButton.style.display = state ? 'none' : 'inline-block';
    this._unsubscribeButton.style.display = state ? 'inline-block' : 'none';
  },

  async _isCurrentSubscriptionAvailable() {
    const pushSubscription = await this._registrationServiceWorker.pushManager.getSubscription();
    return Boolean(pushSubscription);
  },

  async _isNotificationReady() {
    if (!NotificationHelper._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return false;
    }

    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.log('Notification permission not granted');
      console.log('Please grant notification permission to subscribe to push message');
      return false;
    }

    return true;
  },

  _urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; i += 1) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  },

  async _showSubscribeButton() {
    const isSubscribed = await this._isCurrentSubscriptionAvailable();
    this._isSubscribedToServerForHiddenSubscribeButton(isSubscribed);
  },
};

export default FooterToolsInitiator;
