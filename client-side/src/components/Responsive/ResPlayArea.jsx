import React from "react";
import { NavLink } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function ResPlayArea({setIsPlayAreaClicked , song , isSongPlaying, setIsSongPlaying, audioRef }) {
  
  const handlePlayAreaClick = () => {
    setIsPlayAreaClicked(true);
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

  return (
    <div className="h-full px-6">
      <div className="bg-dark-gray w-full h-full rounded-lg">
        <div className="flex justify-between ml-4 mr-4 h-full items-center">
          <NavLink to="/song" onClick={handlePlayAreaClick} className='w-[95%]'>
            <div className="flex gap-2 items-center">
              <img
                src={`${BACKEND_URL}${song.image}`}
                alt={song.title}
                className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]"
              />
              <div className="max-w-[150px] max-h-[50px] sm-custom:max-w-[300px]  overflow-hidden text-ellipsis whitespace-nowrap">
                <h4 className="text-white">{song.title}</h4>
                <p className="text-sm  text-gray-400">{song.artist}</p>
              </div>
            </div>
          </NavLink>
          <div onClick={isSongPlaying ? pauseSong : playSong}>
              <i
                className={`fa-solid ${
                  isSongPlaying ? "fa-pause" : "fa-play"
                } cursor-pointer text-white text-lg`}
              ></i>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ResPlayArea;
