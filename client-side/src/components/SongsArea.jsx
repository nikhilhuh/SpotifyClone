import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PlayerContext } from "../context/PlayerContext";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function SongsArea({isPlayAreaClicked,setIsPlayAreaClicked}) {
  const [songsData, setSongsData] = useState({});

  const {playSong} = useContext(PlayerContext)
  setIsPlayAreaClicked(false)

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/songs`)
      .then((response) => {
        setSongsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, []);

  return (
    <div className="relative z-10">
      {Object.keys(songsData).map((category) => (
        <div key={category} className="main-song-area">
          <h1 className="text-xl md:text-3xl font-bold category">{category}</h1>
          <div className="flex-container">
            {songsData[category].map((song) => (
              <div
                className="card"
                key={song.id}
                onClick={() => playSong(song)}
              >
                <div className="albumhover">
                  <img
                    src={`${BACKEND_URL}${song.image}`}
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
    </div>
  );
}

export default SongsArea;
