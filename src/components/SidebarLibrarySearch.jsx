import React, { useEffect, useRef } from 'react';

function SidebarLibrarySearch() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className='relative transition-transform duration-1000'>
      <input 
        ref={inputRef}  // Assign the ref to the input element
        type="text" 
        name="sidebarLibrarySearch" 
        id="sidebarLibrarySearch" 
        className='w-[150px] text-sm text-white p-1 pl-7 rounded-md outline-none bg-light-gray' 
        placeholder='Search in Library' 
      />
      <div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
        <i className="fa-solid fa-magnifying-glass text-sm"></i>
      </div>
    </div>
  );
}

export default SidebarLibrarySearch;
