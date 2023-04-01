import { useEffect, useState } from "react";

export default function Contact() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/wall")
      .then((res) => res.json())
      .then((newData) => setData(newData));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch("/api/wall", {
      method: "POST",
      body: new URLSearchParams({
        message,
      }),
    }).then((_) => {
      setMessage("");

      fetch("/api/wall")
        .then((res) => res.json())
        .then((newData) => setData(newData));
    });
  };

  return (
    <>
      <form method="POST" action="/api/wall" onSubmit={handleSubmit}>
        <input
          type="string"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Write on the wall" />
      </form>
      <table>
        {data.map((e: any) => (
          <tr>
            <td>{e.ts}</td>
            <td>{e.message}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
