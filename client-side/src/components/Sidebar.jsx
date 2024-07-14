import React, { useState, useRef, useEffect } from 'react';
import SidebarLibrarySearch from './SidebarLibrarySearch.jsx'
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const [ isLibrarySearchClicked , setIsLibrarySearchClicked ] = useState(false)
    const libarySearchClickedRef = useRef(null);

    const handleClickOutside = (event) => {
        if (libarySearchClickedRef.current && !libarySearchClickedRef.current.contains(event.target)) {
          setIsLibrarySearchClicked(false); // Close dropdown if clicked outside
        }
      };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

  return (
    <>
        <div className='bg-dark-gray rounded-xl overflow-hidden lg:h-[155px]'>
            <ul className='list-none'>
                <li className='mt-2 ml-5 p-3 justify-evenly cursor-pointer hover:text-white transition duration-300 ease-in hover:font-bold' >
                    <NavLink to="/">
                        <span className='mr-4'><i class="fa-solid fa-house-user"></i></span>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li className='ml-5 mb-2 p-3 justify-evenly cursor-pointer hover:text-white transition duration-300 ease-in hover:font-bold'>
                    <NavLink to="/search">
                        <span className='mr-4'><i class="fa-solid fa-magnifying-glass"></i></span>
                        <span>Search</span>
                    </NavLink>
                </li>
            </ul>
        </div>

        <div className='bg-dark-gray rounded-tl-xl rounded-tr-xl mt-1 lg:h-[138px] overflow-hidden'>
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
            <div className='flex justify-between p-3'>
            <abbr title='Search in Library'>
                <span 
                className='cursor-pointer transition-transform ease-in' ref={libarySearchClickedRef}
                onClick={() => setIsLibrarySearchClicked(true)}
            >
             {isLibrarySearchClicked ? (
                 <SidebarLibrarySearch />
             ) : (
                  <i className="fa-solid fa-magnifying-glass hover:scale-125 ml-5 transition-transform duration-1000"></i>
              )}
             </span>
            </abbr>

                <span className='cursor-pointer text-[16px]'>Recents <i class="fa-solid fa-list-ul"></i></span>
            </div>
        </div>

        <div className='playlists bg-dark-gray rounded-bl-xl rounded-br-xl h-full overflow-y-auto'>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16'/></div>
                <div className='hover:scale-110'>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16'/></div>
                <div className='hover:scale-110'>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16'/></div>
                <div className='hover:scale-110'>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16'/></div>
                <div className='hover:scale-110'>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16'/></div>
                <div className='hover:scale-110'>Playlist 1</div>
            </div>
            <div className='p-3 gap-3 flex items-center cursor-pointer'>
                <div><img src="/src/images/1.jpg" alt="" className='h-16'/></div>
                <div className='hover:scale-110'>Playlist 1</div>
            </div>
            
        </div>
    </>
  )
}

export default Sidebar