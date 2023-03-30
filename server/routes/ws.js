const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ clientTracking: false, noServer: true });

let sockets = [];
wss.on("connection", function (ws, request) {
  sockets.push(ws);

  // When you receive a message, send that message to every socket.
  ws.on("message", function (msg) {
    sockets.forEach((s) => s.send('' + msg));
  });

  ws.on("error", () => {
    sockets = sockets.filter((s) => s !== ws);
  });

  // When a socket closes, or disconnects, remove it from the array.
  ws.on("close", function () {
    sockets = sockets.filter((s) => s !== ws);
  });
});

module.exports = wss;
