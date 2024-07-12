import React from 'react'
import SongsArea from '../components/SongsArea'
import { useRef } from 'react'

function Home( {currentSong , setCurrentSong , isSongPlaying , setIsSongPlaying , audioRef}) {
  return (
    <>
        <SongsArea 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
        audioRef={audioRef}
        />
    
    </>
  )
}

export default Home