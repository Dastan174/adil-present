"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./photoReveal.css";

export default function PhotoReveal() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const cursorX = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 });

  const handleMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    // Рассчитываем прогресс очистки (0-100%)
    const newProgress = Math.min(100, Math.max(0, (x / width) * 100));
    setProgress(newProgress);
    cursorX.set(x);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0]);
    }
  };

  return (
    <div className="photo-reveal-container">
      {/* <h2 className="title">Потри экран, чтобы увидеть наше счастье ✨</h2> */}

      <div
        className="photo-wrapper"
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={() => cursorX.set(-100)}
      >
        {/* Исходное размытое фото */}
        <img src="/images/four.webp" className="blurred-photo" />

        {/* Чистое фото, которое открывается */}
        <img
          src="/images/end.webp"
          className="clear-photo"
          style={{
            clipPath: `inset(0 ${100 - progress}% 0 0)`,
          }}
        />

        {/* Индикатор очистки */}
        <motion.div
          className="wipe-cursor"
          style={{
            x: springX,
            left: "-25px", // Центрирование курсора
          }}
        >
          👆
        </motion.div>

        {/* Полоса прогресса */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
          <span className="progress-text">{Math.round(progress)}% открыто</span>
        </div>
      </div>

      <p className="hint">
        Проведите пальцем или курсором по фото слева направо
      </p>
    </div>
  );
}
