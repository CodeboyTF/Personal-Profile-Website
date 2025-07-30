import React, { useEffect } from "react";
import "../Loading.css";
import UrlIcon from "./UrlIcon";

export default function Loading() {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01";
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00FF00";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <UrlIcon/>
    <div className="loading-matrix">
      <canvas id="matrix-canvas"></canvas>
      <div className="loading-center">
        <img src="/LogoFavicon.png" alt="logo" className="loading-logo" />
        <p className="loading-text">Welcome...</p>
      </div>
    </div>
    </>
  );
}
