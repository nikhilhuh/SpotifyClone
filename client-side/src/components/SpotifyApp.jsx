import React from 'react'

function SpotifyApp() {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <div>
            <img src="src/images/SpotifyApp.png" alt="" className='md:h-[450px] sm-custom:h-[250px] h-[200px]'/>
        </div>
        <div className="text-center md:max-w-[450px] mt-8 text-white">
          <h2 className="md:text-3xl text-lg font-bold mb-2">
          Seamlessly listen to music you love. Download the Spotify app for your computer.
          </h2>
        </div>
        <div className='mb-14 mt-5'>
            <a href='https://www.spotify.com/in-en/download/windows/' target='_blank'>
                <button className='rounded-full w-[250px] border-green-500 bg-green-500 text-black p-4 text-sm font-bold hover:underline underline-offset-2'>Get our Free App</button>
            </a>
        </div>
    
    </div>
  )
}

export default SpotifyApp