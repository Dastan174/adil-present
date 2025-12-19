import "./videoAdil.css";
const VideoShamil = () => {
  return (
    <div className="wrapper">
      <h2>Наши воспоминания</h2>
      <iframe
        className="img"
        // ДОБАВЛЯЕМ ПАРАМЕТРЫ:
        src="https://drive.google.com/file/d/1v--IZd7FI4NO_bQcXWz-FEgv56m0Zqyn/preview?mute=1"
        allow="autoplay"
        title="Наши воспоминания"
        sandbox="allow-scripts allow-same-origin" // ← важный атрибут
        // ИЛИ ЕЩЁ ПРОЩЕ: добавляем muted как атрибут:
        muted
      ></iframe>
    </div>
  );
};

export default VideoShamil;
