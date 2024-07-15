import React from 'react'
import SongsArea from '../components/SongsArea'

function Home({isPlayAreaClicked,setIsPlayAreaClicked}) {
  return (
    <>
        <SongsArea isPlayAreaClicked={isPlayAreaClicked}
          setIsPlayAreaClicked={setIsPlayAreaClicked} />
    
    </>
  )
}

export default Home