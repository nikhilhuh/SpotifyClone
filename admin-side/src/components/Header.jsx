import React from 'react'

function Header() {
  return (
    <div className='text-black p-4 w-full bg-green-400 rounded-lg'>
        <div className='flex justify-between ml-5 mr-5'>
            <div className='font-bold text-xl'>
                Welcome , (username)
            </div>
            <div>
            <img src="#" alt="" className='h-[35px] rounded-full hover:scale-110 hover:border-white border-black border-2'/>
            </div>
        </div>
    </div>
  )
}

export default Header