import React, { useEffect, useState } from 'react';

function PlayArea({ song, isSongPlaying, setIsSongPlaying, audioRef }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    const updateVolume = () => {
      setVolume(audio.volume * 100);
    };

    if (audio) {
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('volumechange', updateVolume);
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('volumechange', updateVolume);
      };
    }
  }, [audioRef]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressChange = (e) => {
    if (audioRef.current) {
      const progress = e.target.value / 100;
      audioRef.current.currentTime = progress * duration;
    }
  };

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
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

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className='flex items-center justify-between ml-10 mr-4 h-full text-xl'>
      <div className='flex items-center gap-2 max-w-[250px] w-[250px]'>
        <img src={`http://localhost:3000${song.image}`} alt="" className='h-[80px] w-[80px]' />
        <div className='max-w-[170px] max-h-[100px]'>
          <h4 className='text-white'>{song.title}</h4>
          <p className='text-sm  text-gray-400'>{song.artist}</p>
        </div>
      </div>

      <div>
        <div className='flex justify-evenly text-xl text-white'>
          <div className='cursor-not-allowed'><i className="fa-solid fa-shuffle"></i></div>
          <div className='cursor-not-allowed'><i className="fa-solid fa-backward-step"></i></div>
          <div onClick={isSongPlaying ? pauseSong : playSong}>
            <i className={`fa-solid ${isSongPlaying ? 'fa-pause' : 'fa-play'} cursor-pointer`}></i>
          </div>
          <div className='cursor-not-allowed'><i className="fa-solid fa-forward-step"></i></div>
          <div className='cursor-not-allowed'><i className="fa-solid fa-repeat"></i></div>
        </div>
        <div className='flex text-white gap-3 items-baseline'>
          <div id="start-time">{formatTime(currentTime)}</div>
          <div className='w-[40vw]'>
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

      <div className='flex gap-4 text-white items-center'>
        <div><i className="fa-solid fa-volume-high"></i></div>
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
