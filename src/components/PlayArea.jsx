import React from 'react'

function PlayArea() {
  return (
    <div className='flex items-center justify-between ml-10 mr-4 mt-6'>  

        <div className='flex items-center gap-2'>
            <img src="src/images/2.jpg" alt="" className='h-[70px]'/>
            <div className='max-w-[175px] max-h-[70px]'>
                <h4 className='text-white'>Paaon Ki Jutti</h4>
                <p className='text-sm text-gray-400'>Ram Sampath, Arijit Singh, Prashant Pandey</p>
            </div>
        </div>

        <div>
            <div className='flex justify-evenly text-xl text-white'>
                <div><i class="fa-solid fa-shuffle"></i></div>
                <div><i class="fa-solid fa-backward-step"></i></div>
                <div><i class="fa-solid fa-play"></i></div>
                <div><i class="fa-solid fa-forward-step"></i></div>
                <div><i class="fa-solid fa-repeat"></i></div> 
            </div>
            <div className='flex text-white gap-3 items-baseline'>
                <div id="start-time">00:00</div>
                <div><input type="range" name="song-progress-bar" id="song-progress-bar" max="100" min="0" className='w-[450px]'/></div>
                <div id="end-time">00:00</div>
            </div>
        </div>

        <div className='flex gap-4 text-white items-center'>
            <div><i class="fa-solid fa-volume-high"></i></div>
            <div><input type="range" name="volume-progress-bar" id="volume-progress-bar" max="100" min="0" /></div>
        </div>

    
    </div>
  )
}

export default PlayArea