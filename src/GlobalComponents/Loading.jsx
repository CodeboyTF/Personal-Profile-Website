// src/GlobalComponents/Loading.jsx

import React, { useEffect, useState } from "react";
import "../Loading.css";

export default function Loading() {
  const [matrixText, setMatrixText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = "01";
      const lines = Array.from({ length: 50 }, () =>
        Array.from({ length: 60 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
      ).join("\n");
      setMatrixText(lines);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <pre className="matrix-text">{matrixText}</pre>
    </div>
  );
}
