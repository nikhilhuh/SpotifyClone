import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContext";

function PlayArea() {
  const {
    setDuration,
    setCurrentTime,
    setVolume,
    currentSong,
    currentTime,
    duration,
    volume,
    isSongPlaying,
    setIsSongPlaying,
    audioRef,
  } = useContext(PlayerContext);

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const updateVolume = () => {
    if (audioRef.current) {
      setVolume(audioRef.current.volume * 100);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgressChange = (e) => {
    if (audioRef.current) {
      const progress = e.target.value / 100;
      audioRef.current.currentTime = progress * duration;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("volumechange", updateVolume);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("volumechange", updateVolume);
      };
    }
  }, []);

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsSongPlaying(true);
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsSongPlaying(false);
    }
  };

  return (
    <div className="flex items-center justify-between ml-10 mr-4 h-full text-xl">
      <div className="flex items-center gap-2 max-w-[250px] w-[250px]">
        <img
          src={`https://spotifyclone-backend-rh34.onrender.com${currentSong.image}`}
          alt=""
          className="h-[70px] w-[70px]"
        />
        <div className="max-w-[170px] max-h-[100px]">
          <h4 className="text-white">{currentSong.title}</h4>
          <p className="text-sm text-gray-400">{currentSong.artist}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-evenly text-xl text-white">
          <div className="cursor-not-allowed">
            <i className="fa-solid fa-shuffle"></i>
          </div>
          <div className="cursor-not-allowed">
            <i className="fa-solid fa-backward-step"></i>
          </div>
          <div
            onClick={isSongPlaying ? pauseSong : () => playSong(currentSong)}
          >
            <i
              className={`fa-solid ${
                isSongPlaying ? "fa-pause" : "fa-play"
              } cursor-pointer`}
            ></i>
          </div>

          <div className="cursor-not-allowed">
            <i className="fa-solid fa-forward-step"></i>
          </div>
          <div className="cursor-not-allowed">
            <i className="fa-solid fa-repeat"></i>
          </div>
        </div>
        <div className="flex text-white gap-3 items-baseline">
          <div id="start-time">{formatTime(currentTime)}</div>
          <div className="w-[40vw]">
            <input
              type="range"
              name="song-progress-bar"
              id="song-progress-bar"
              max="100"
              min="0"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleProgressChange}
            />
          </div>
          <div id="end-time">{formatTime(duration)}</div>
        </div>
      </div>

      <div className="flex gap-4 text-white items-center">
        <div>
          <i className="fa-solid fa-volume-high"></i>
        </div>
        <div>
          <input
            type="range"
            name="volume-progress-bar"
            id="volume-progress-bar"
            max="100"
            min="0"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayArea;
