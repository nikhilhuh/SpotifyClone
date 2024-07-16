import React from 'react'

function DeleteASong() {
  return (
    <div className="text-white">
      <div className="flex flex-col w-full">
        <form action="#">
          <div className="text-xl flex flex-col justify-center gap-10">
            <div>
              Select the album(s) from which you have to delete the song:
              <div className="flex items-center px-10 gap-8 text-lg mt-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Album1" id="Album1" />
                  <label htmlFor="Album1">Album 1</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Album2" id="Album2" />
                  <label htmlFor="Album2">Album 2</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Album3" id="Album3" />
                  <label htmlFor="Album3">Album 3</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Album4" id="Album4" />
                  <label htmlFor="Album4">Album 4</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="Album5" id="Album5" />
                  <label htmlFor="Album5">Album 5</label>
                </div>
              </div>
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
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button className="bg-green-400 text-black text-lg font-bold p-3 rounded-full w-[60%]">
                Delete Song
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DeleteASong