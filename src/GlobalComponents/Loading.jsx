import React, { useEffect, useState } from "react";
import "../Loading.css";

export default function Loading() {
  const [matrixText, setMatrixText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = "01";
      const rows = Array.from({ length: 60 }, () =>
        Array.from({ length: 120 }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        ).join("")
      ).join("\n");

      setMatrixText(rows);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <pre className="matrix-text">{matrixText}</pre>
      <img src="/vite.svg" alt="Logo" className="center-logo" />
    </div>
  );
}
