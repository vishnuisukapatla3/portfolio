import { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ isPlaying }) => {
  const audioRef = useRef(null);
  const songUrl = '/paro.mp3'; 

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0;
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Local playback failed. Make sure paro.mp3 is in the public folder.", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="music-player-hidden">
      <audio 
        ref={audioRef} 
        src={songUrl} 
        loop 
        preload="auto"
        onError={(e) => console.error("Audio Load Error:", e)}
      />
      
      {isPlaying && (
        <div className="audio-visualizer">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <span className="playing-text">Nej - Paro</span>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
