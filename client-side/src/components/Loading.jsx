import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  return (
    <div className='h-screen bg-dark-gray flex justify-center items-center'>
        <div className='flex flex-col text-center text-white'>
            <div>
                <ClipLoader color="#1ED760" loading={true} size={150} />
            </div>
            <div>Loading..</div>
        </div>
    </div>
  )
}

export default Loading