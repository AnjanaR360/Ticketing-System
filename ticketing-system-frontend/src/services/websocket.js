class WebSocketService {
    constructor(url) {
      this.url = url;
      this.socket = null;
      this.callbacks = {};
    }
  
    connect() {
      this.socket = new WebSocket(this.url);
  
      this.socket.onopen = () => {
        console.log("WebSocket connection established");
      };
  
      this.socket.onmessage = (message) => {
        console.log('WebSocket message received:', message.data);
        const data = JSON.parse(message.data);
        if (this.callbacks[data.event]) {
            this.callbacks[data.event](data.payload);
        } else {
            console.warn(`No callback registered for event: ${data.event}`);
        }
      };
  
      this.socket.onclose = () => {
        console.log("WebSocket connection closed");
      };
  
      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  
    subscribe(event, callback) {
      this.callbacks[event] = callback;
    }
  
    send(event, payload) {
      this.socket.send(JSON.stringify({ event, payload }));
    }
  
    disconnect() {
      this.socket.close();
    }
}
  
export const websocket = new WebSocketService("ws://localhost:8080/websocket");  