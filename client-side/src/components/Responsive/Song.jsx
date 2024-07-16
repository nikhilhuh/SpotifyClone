import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Song({ song, audioRef, setIsSong, setIsSongPlaying, isSongPlaying, setIsPlayAreaClicked }) {
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100); // Default volume is 100
  const [previousVolume, setPreviousVolume] = useState(100); // To store the previous volume

  const handleisLiked = () => {
    setIsLiked(!isLiked);
  };

  const handlePlayAreaClick = () => {
    setIsPlayAreaClicked(false);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      return () => {
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [audioRef]);

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

  const handleVolumeClick = () => {
    if (audioRef.current) {
      if (audioRef.current.volume === 0) {
        audioRef.current.volume = previousVolume / 100;
        setVolume(previousVolume);
      } else {
        setPreviousVolume(volume);
        audioRef.current.volume = 0;
        setVolume(0);
      }
    }
  };

  return (
    <div className="max-h-screen w-full">
      <div className="text-white text-2xl">
        <NavLink to="/home" onClick={handlePlayAreaClick}>
          <i className="fa-solid fa-arrow-left"></i>
        </NavLink>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-5">
        <img
          src={`http://localhost:3000${song.image}`}
          alt={song.title}
          className="md:h-[400px] md:w-[400px] h-[300px] w-[300px]"
        />
        <div className="flex flex-col justify-center items-center text-center p-2 mt-2">
          <h4 className="text-[18px] text-white md:max-w-[380px] max-w-[280px]">
            {song.title}
          </h4>
          <p className="text-[14px] text-gray-400 md:max-w-[375px] max-w-[275px]">
            {song.artist}
          </p>
        </div>

        <div className="text-white gap-3 flex items-baseline justify-center w-[90%] mt-10 md:mt-2">
          <div id="start-time">{formatTime(currentTime)}</div>
          <div className="w-full">
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

        <div className="md:hidden flex justify-between w-full mt-5 items-center text-2xl text-white">
          <div>
            <i
              className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart text-white text-3xl`}
              onClick={handleisLiked}
            ></i>
          </div>
          <div>
            <i className={`fa-solid ${volume===0 ? "fa-volume-xmark" : "fa-volume-high"} text-white text-2xl`} onClick={handleVolumeClick}></i>
          </div>
        </div>

        <div className="w-full flex md:justify-between justify-center mt-5 items-center">
          <div className="hidden md:flex items-center">
            <i
              className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart text-white text-3xl`}
              onClick={handleisLiked}
            ></i>
          </div>

          <div className="flex justify-evenly text-3xl md:w-[60%] w-[90%] text-white">
            <div className="cursor-not-allowed">
              <i className="fa-solid fa-backward-step"></i>
            </div>
            <div onClick={isSongPlaying ? pauseSong : playSong}>
              <i
                className={`fa-solid ${isSongPlaying ? "fa-circle-pause" : "fa-circle-play"} cursor-pointer text-5xl`}
              ></i>
            </div>
            <div className="cursor-not-allowed">
              <i className="fa-solid fa-forward-step"></i>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <i className={`fa-solid ${volume===0 ? " fa-volume-xmark" : "fa-volume-high"} text-white text-2xl`}onClick={handleVolumeClick}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Song;
