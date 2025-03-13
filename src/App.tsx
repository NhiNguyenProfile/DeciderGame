import { useEffect, useRef, useState } from "react";
import "./App.css";
import SwipeGame from "./pages/GamePlay";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.5;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((e) => console.log("Autoplay bị chặn:", e));
      }
    };

    document.addEventListener("click", playAudio);
    return () => document.removeEventListener("click", playAudio);
  }, [isPlaying]);

  return (
    <>
      <SwipeGame />
      <audio ref={audioRef} loop>
        <source src="/music/Retro_Groove.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}

export default App;
