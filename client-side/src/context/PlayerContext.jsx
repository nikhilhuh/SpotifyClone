import { createContext, useRef, useState, useEffect } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const playSong = (song) => {
    if (audioRef.current) {
      audioRef.current.src = `https://spotifyclone-backend-rh34.onrender.com${song.url}`;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setCurrentSong(song);
      setIsSongPlaying(true);
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsSongPlaying(false);
    }
  };

  const contextValue = {
    currentSong,
    audioRef,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    volume,
    setVolume,
    isSongPlaying,
    setIsSongPlaying,
    playSong,
    pauseSong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
