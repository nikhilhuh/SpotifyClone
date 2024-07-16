import React from 'react'

function ViewAllSongs() {
  return (
    <div className='text-white flex flex-col justify-center gap-10'>
        <div className='text-2xl font-bold'>
            Total Songs : (totalSongs)
        </div>
        <div className='text-xl'>
            Here is the list of all Songs in the Server :
        </div>
        
    </div>
  )
}

export default ViewAllSongs