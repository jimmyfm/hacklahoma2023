import { useEffect, useState } from "react";

export default function Chat() {
  const [ws, setWs] = useState<WebSocket>();
  const [log, setLog] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let ws = new WebSocket(
      window.location.protocol.replace("http", "ws") + "//localhost/ws"
    );
    setWs(ws);

    ws.onopen = () => {
      setLog((l) => "CONNECTED! \n\r" + l);
    };
    ws.onmessage = (m) => {
      setLog((l) => m.data + "\n\r" + l);
    };
    ws.onerror = (e) => {
      setLog((l) => JSON.stringify(e) + "\n\r" + l);
    };
    ws.onclose = () => {
      setLog((l) => "DISCONNECTED!" + "\n\r" + l);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!message) return;

    ws?.send(message);
    setMessage("");
  };

  return (
    <>
      <form method="POST" action="/" onSubmit={handleSubmit}>
        <input
          type="string"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Say so" />
      </form>
      <pre>{log}</pre>
    </>
  );
}
