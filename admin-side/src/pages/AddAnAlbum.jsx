import React from "react";

function AddAnAlbum() {
  return (
    <div className="text-white">
      <div className="flex flex-col w-full">
        <form action="#">
          <div className="text-xl flex flex-col justify-center gap-10">
            <div className="flex items-center justify-around">
              <label htmlFor="Title" className="p-2">
                <strong>Name of the album to be added</strong>
              </label>
              <input
                type="text"
                name="Title"
                id="Title"
                placeholder="Album Name"
                className="outline-none bg-transparent border-light-gray border-b-2 p-2 w-[40%]"
              />
            </div>

            <div>
              <strong>Song Details:</strong>
              <div className="flex flex-col mt-5 gap-4 justify-center text-start">
                <div className="flex items-center justify-around">
                  <label htmlFor="Title" className="p-2">
                    Song Title
                  </label>
                  <input
                    type="text"
                    name="Title"
                    id="Title"
                    placeholder="Title"
                    className="outline-none bg-transparent border-light-gray border-b-2 p-2 w-[40%]"
                  />
                </div>
                <div className="flex items-center justify-around">
                  <label htmlFor="Artists" className="p-2">
                    Song Artists
                  </label>
                  <input
                    type="text"
                    name="Artists"
                    id="Artists"
                    placeholder="Artists"
                    className="outline-none bg-transparent border-light-gray border-b-2 p-2 w-[40%]"
                  />
                </div>
                <div className="flex items-center justify-around">
                  <label htmlFor="Poster" className="p-2">
                    Song Poster
                  </label>
                  <label htmlFor="Poster" className="p-2 w-[40%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="50"
                      height="40"
                      fill="currentColor"
                    >
                      <path d="M20 5h-3.17l-1.84-1.84C14.76 2.76 14.36 2.5 14 2.5H10c-.36 0-.76.26-.99.66L7.17 5H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 13H4V7h4.05l1.83-2.29c.2-.24.51-.39.82-.39h4.4c.31 0 .62.15.82.39L15.95 7H20v11zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM21 3h-3v-2h-2v2h-3v2h3v2h2v-2h3z" />
                    </svg>
                  </label>
                  <input
                    type="file"
                    name="Poster"
                    id="Poster"
                    className="hidden"
                  />
                </div>
                <div className="flex items-center justify-around">
                  <label htmlFor="Song" className="p-2">
                    Song File
                  </label>
                  <label htmlFor="Song" className="p-2 w-[40%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="50"
                      height="35"
                      fill="currentColor"
                    >
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 12v-1.5h-1.5v1.5H14zm-2 0v-1.5h-1.5v1.5H12zm-2 0v-1.5H8.5v1.5H10zm1.5-4V9H10v1.5H11.5zM16 10v1.5h-1.5V10H16zm-4.5-6.5L18 8.5h-2.5c-.55 0-1-.45-1-1V3.5zM20 21h-3v-2h-2v2h-3v2h3v2h2v-2h3z" />
                    </svg>
                  </label>
                  <input type="file" name="Song" id="Song" className="hidden" />
                </div>
              </div>
            </div>

            <div>
                <button className="text-white text-lg font-bold p-3 rounded-full flex gap-4">
                  Add Another Song
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                  >
                    <path
                      fill="currentColor"
                      d="M12 5.5c.3 0 .5.2.5.5v5.5h5.5c.3 0 .5.2.5.5s-.2.5-.5.5h-5.5v5.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5.5h-5.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.5v-5.5c0-.3.2-.5.5-.5z"
                    />
                  </svg>
                </button>
                <div className="flex justify-center ">
                  <button className="bg-green-400 text-black text-lg font-bold p-3 rounded-full w-[40%]">
                    Complete Adding
                  </button>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAnAlbum;
