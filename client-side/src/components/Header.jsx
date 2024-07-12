import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';
import Search from './Search';

function Header({ isMusicOptions, isSearchOpened, profilePhoto, username}) {
  const [isToggle, setIsToggle] = useState(false);
  const dropdownRef = useRef(null);
  const userRef = useRef(null);

  const handleClick = (event) => {
    if (userRef.current && userRef.current.contains(event.target)) {
      // Click is inside the user icon
      setIsToggle(prevState => !prevState); // Toggle dropdown
    } else if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click is outside the dropdown
      setIsToggle(false); // Close the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex items-center gap-5'>
          <span className='cursor-not-allowed'><i className="fa-solid fa-angle-left"></i></span>
          <span className='cursor-not-allowed'><i className="fa-solid fa-angle-right"></i></span>
          <div className={`${isSearchOpened ? "" : "hidden"}`}><Search /></div>
        </div>

        <div className='flex gap-5 justify-evenly text-md items-center mr-8'>
          <NavLink to="/premium">
            <abbr title='Upgrade to Premium' className={`${isSearchOpened ? "hidden" : ""}`}>
              <div className='bg-white rounded-2xl p-2 text-sm text-black font-bold hover:scale-110 cursor-pointer'>
                Explore Premium
              </div>
            </abbr>
          </NavLink>

          <div className='flex gap-5 justify-evenly text-md items-center relative'>
            <NavLink to="/installapp">
              <abbr title='Install Spotify App'>
                <div className='bg-black rounded-2xl p-2 text-sm text-white font-bold hover:scale-110 cursor-pointer'>
                  <i className="fa-solid fa-circle-down"></i> Install App
                </div>
              </abbr>
            </NavLink>

            <abbr title="What's New">
              <div className='cursor-pointer'>
                <i className="fa-solid fa-bell hover:scale-125"></i>
              </div>
            </abbr>

            <abbr title={username}>
              <div ref={userRef} className='relative cursor-pointer'>
                <img src={profilePhoto} alt="" className='h-[35px] rounded-full hover:scale-110 hover:border-white border-black border-2'/>
              </div>
            </abbr>

            {isToggle && (
              <div ref={dropdownRef} className='translate-y-32 w-[208px] h-[205px] bg-light-gray rounded-md p-3 text-sm font-bold absolute z-10'>
                <Dropdown />
              </div>
            )}
          </div>
        </div>
      </div>

      {isMusicOptions &&
        (<div className='flex gap-5 mt-5'>
          <div className='bg-white p-2 rounded-full text-sm font-bold text-black cursor-pointer'>All</div>
          <div className='bg-light-gray p-2 rounded-full text-sm font-bold cursor-pointer'>Music</div>
          <div className='bg-light-gray p-2 rounded-full text-sm font-bold cursor-pointer'>Podcasts</div>
        </div>
        )}
    </>
  );
}

export default Header;
