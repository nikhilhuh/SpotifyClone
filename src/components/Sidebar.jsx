import React, { useState } from 'react'

function Sidebar() {
    const [] = useState(false)
  return (
    <>
        <div className='bg-dark-gray rounded-xl overflow-hidden h-28'>
            <ul className='list-none'>
                <li className='mt-2 ml-5 p-3 justify-evenly cursor-pointer hover:text-white transition duration-300 ease-in hover:font-bold'>
                    <span className='mr-4'><i class="fa-solid fa-house-user"></i></span>
                    <span>Home</span>
                </li>
                <li className='ml-5 mb-2 p-3 justify-evenly cursor-pointer hover:text-white transition duration-300 ease-in hover:font-bold'>
                    <span className='mr-4'><i class="fa-solid fa-magnifying-glass"></i></span>
                    <span>Search</span>
                </li>
            </ul>
        </div>

        <div className='bg-dark-gray rounded-tl-xl rounded-tr-xl mt-1 h-24 overflow-hidden'>
            <div className='flex justify-between ml-5 p-3'>
                <div>
                    <span className='mr-4'><i class="fa-solid fa-book"></i></span>
                    <span>Your Library</span>
                </div>
                <div>
                    <span className='mr-4 hover:cursor-pointer'><i class="fa-solid fa-plus"></i></span>
                    <span className='hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
            <div className='flex justify-between ml-5 p-3'>
                <span className='cursor-pointer'><i class="fa-solid fa-magnifying-glass"></i>

                </span>
                <span className='cursor-pointer'>Recents <i class="fa-solid fa-list-ul"></i></span>
            </div>
        </div>

        <div className='playlists bg-dark-gray rounded-bl-xl rounded-br-xl h-[450px] overflow-y-auto'>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16 rounded-lg'/></div>
                <div>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16 rounded-lg'/></div>
                <div>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16 rounded-lg'/></div>
                <div>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16 rounded-lg'/></div>
                <div>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16 rounded-lg'/></div>
                <div>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16 rounded-lg'/></div>
                <div>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16 rounded-lg'/></div>
                <div>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16 rounded-lg'/></div>
                <div>Playlist 1</div>
            </div>
            
        </div>
    </>
  )
}

export default Sidebar