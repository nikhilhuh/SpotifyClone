import React from "react";

function Library({ username, profilePhoto }) {
  return (
    <div className="text-gray-300">
      <div className="text-white flex justify-start items-center bg-gradient-to-b from-green-200 to-dark-gray">
        <img
          src={profilePhoto}
          alt=""
          className="ml-5 mt-5 rounded-full md:h-[175px] h-[100px]"
        />
        <div className="md:text-[60px] text-xl ml-5 font-bold">{username}</div>
      </div>

      <div className="mt-[50px] ml-5 gap-y-4 mr-6">
        <div className="md:text-[30px] text-lg font-bold text-white mb-2">
          Playlists
        </div>
        <p>Your playlists will appear here.</p>
      </div>

      <div className="mt-10 ml-5 flex gap-4 items-center">
        <div className="bg-dark-gray flex items-center rounded-md">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:h-[50px] h-[40px]">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#1DB954"
              />
            </svg>
        </div>
        <div className="text-white text-sm md:text-lg">Liked Songs</div>
      </div>
    </div>
  );
}

export default Library;
