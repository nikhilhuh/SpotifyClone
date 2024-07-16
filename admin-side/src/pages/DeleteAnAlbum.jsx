import React from "react";

function DeleteAnAlbum() {
  return (
    <div className="text-xl text-white">
      <form>
        <div>
          Select the album(s) which you want to delete:
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
        <div className="flex justify-center w-full mt-20">
          <button className="bg-green-400 text-black text-lg font-bold p-3 rounded-full w-[40%]">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteAnAlbum;
