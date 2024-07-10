import React, { useEffect, useRef } from 'react';

function Search() {
    const Search = useRef(null);

    const inputRef = useRef(null);

    useEffect(() => {
    // Focus on the input element when the component mounts
     inputRef.current.focus();
     }, []);
   

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        name="Search"
        id="Search"
        className="w-[450px] bg-light-gray outline-none hover:outline-light-gray rounded-full p-4 pl-12 text-sm text-white"
        placeholder="What do you want to Play"
      />
      <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
        <i className="fa-solid fa-magnifying-glass text-lg"></i>
      </div> 
    </div>
  );
}

export default Search;
