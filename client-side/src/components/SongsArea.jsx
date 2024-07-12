import React, { useEffect, useState } from "react";
import axios from "axios";

function SongsArea({ setCurrentSong, setIsSongPlaying, audioRef }) {
  const [songsData, setSongsData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/songs")
      .then((response) => {
        setSongsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, []);

  const playSong = (song) => {
    if (audioRef.current) {
      audioRef.current.src = `http://localhost:3000${song.url}`;
      audioRef.current.play().catch(error => {
        console.error("Error playing song:", error);
      });
      setCurrentSong(song);
      setIsSongPlaying(true);
    }
  };

  return (
    <div className="relative z-10">
      {Object.keys(songsData).map((category) => (
        <div key={category} className="main-song-area">
          <h1 className="text-3xl font-bold">{category}</h1>
          <div className="flex-container">
            {songsData[category].map((song) => (
              <div
                className="card"
                key={song.id}
                onClick={() => playSong(song)}
              >
                <div className="albumhover">
                  <img
                    src={`http://localhost:3000${song.image}`}
                    alt={song.title}
                    className="album-image"
                  />
                  <div className="card-play-button">
                    <i className="fa-solid fa-play play-icon"></i>
                  </div>
                  <div className="album-details">
                    <h4 className="album-title">{song.title}</h4>
                    <p className="album-artists">{song.artist}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <audio ref={audioRef} controls style={{ display: "none" }}>
        <source src="" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default SongsArea;
