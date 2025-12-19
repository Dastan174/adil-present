"use client";
import "./videoAdil.css";
import { useState, useEffect } from "react";

const VideoShamil = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Не рендерим на сервере
  if (!isClient) return null;

  return (
    <div className="wrapper">
      <h2>Наши воспоминания</h2>
      {windowWidth < 500 ? (
        <iframe
          className="img"
          src="https://drive.google.com/file/d/1v--IZd7FI4NO_bQcXWz-FEgv56m0Zqyn/preview?mute=1"
          allow="autoplay"
          title="Наши воспоминания"
          sandbox="allow-scripts allow-same-origin"
          muted
        ></iframe>
      ) : (
        <p style={{ padding: "20px", color: "#666", fontStyle: "italic" }}>
          Видео доступно только на экранах меньше 500px
        </p>
      )}

      {/* Отладочная информация */}
      <div
        style={{
          marginTop: "10px",
          fontSize: "12px",
          color: "#888",
          padding: "5px",
          background: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        Текущая ширина: {windowWidth}px | Условие: width &lt; 500 ={" "}
        {windowWidth < 500 ? "true" : "false"}
      </div>
    </div>
  );
};

export default VideoShamil;
