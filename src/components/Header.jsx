import React, { useState, useRef, useEffect } from 'react';
import Dropdown from './Dropdown';

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownClicked = () => {
    setIsToggle(prevState => !prevState); // Toggle the state
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsToggle(false); // Close dropdown if clicked outside
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
      <div className='flex justify-between'>
        <div>
          <span className='mr-3 cursor-pointer'><i className="fa-solid fa-angle-left"></i></span>
          <span className='cursor-pointer'><i className="fa-solid fa-angle-right"></i></span>
        </div>

        <div className='flex gap-5 justify-evenly text-md items-center mr-8'>
          <abbr title='Upgrade to Premium'>
            <div className='bg-white rounded-2xl p-2 text-sm text-black font-bold hover:scale-110 cursor-pointer'>Explore Premium</div>
          </abbr>

          <div className='flex gap-5 justify-evenly text-md items-center relative z-10'>
            <abbr title='Install Spotify App'>
              <div className='bg-black rounded-2xl p-2 text-sm text-white font-bold hover:scale-110 cursor-pointer'>
                <i className="fa-solid fa-circle-down"></i> Install App
              </div>
            </abbr>

            <abbr title="What's New">
              <div className='cursor-pointer'><i className="fa-solid fa-bell hover:scale-125"></i></div>
            </abbr>

            <abbr title='User'>
              <div className='relative cursor-pointer'>
                <button onClick={dropdownClicked}>
                  <i className={`fa-solid fa-user hover:scale-125 ${isToggle ? 'text-blue-500' : 'text-white'}`}></i>
                </button>
              </div>
            </abbr>

            {isToggle && (
              <div ref={dropdownRef} className='absolute mt-[5rem] z-10'>
                <Dropdown />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='flex gap-5 mt-5'>
        <div className='bg-white p-2 rounded-full text-sm font-bold text-black cursor-pointer'>All</div>
        <div className='bg-light-gray p-2 rounded-full text-sm font-bold cursor-pointer'>Music</div>
        <div className='bg-light-gray p-2 rounded-full text-sm font-bold cursor-pointer'>Podcasts</div>
      </div>
    </>
  );
}

export default Header;
