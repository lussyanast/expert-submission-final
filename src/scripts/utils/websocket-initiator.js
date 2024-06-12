import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  _webSocket: null,

  init() {
    this._webSocket = new WebSocket(CONFIG.WEB_SOCKET_SERVER);

    this._webSocket.onopen = () => {
      console.log('WebSocket connection established');
    };

    this._webSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this._webSocket.onmessage = (event) => {
      console.log('WebSocket message received:', event.data);

      const message = JSON.parse(event.data);

      if (message && message.id) {
        const { name, description } = message;

        NotificationHelper.sendNotification({
          title: `${name} is on the list!`,
          options: {
            body: description,
            icon: '/favicon.png',
            image: CONFIG.BASE_IMAGE_URL.MEDIUM(message.id),
          },
        });
      }
    };

    this._webSocket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  },
};

export default WebSocketInitiator;
