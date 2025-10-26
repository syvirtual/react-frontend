import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fastapi-backend-qqa7.onrender.com/") // replace with your actual backend URL
      .then(res => res.json())
      .then(json => setMessage(json.message));

    fetch("https://fastapi-backend-qqa7.onrender.com/api/data")
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>{message}</h1>
      <h2>Data from Backend:</h2>
      <ul>
        {data.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
