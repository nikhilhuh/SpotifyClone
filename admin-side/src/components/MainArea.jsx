import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddASong from "../pages/AddASong";
import AddAnAlbum from "../pages/AddAnAlbum";
import DeleteAnAlbum from "../pages/DeleteAnAlbum";
import DeleteASong from "../pages/DeleteASong";
import ViewAllSongs from "../pages/ViewAllSongs";

function MainArea() {
  return (
    <div className="p-4 w-full flex flex-col gap-4">
      <div className="flex justify-between w-full"> 
        <div className="flex items-center gap-4 text-white">
          <span className="cursor-not-allowed bg-black rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="currentColor"
            >
              <path d="M14 7l-5 5 5 5V7z" />
            </svg>
          </span>
          <span className="cursor-not-allowed bg-black rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="currentColor"
            >
              <path d="M10 17l5-5-5-5v10z" />
            </svg>
          </span>
        </div>
        <div className="flex gap-4 items-center text-green-400 text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 168 168"
            width="32"
            height="32"
            fill="currentColor"
            className="text-green-400"
          >
            <path d="M84,0A84,84,0,1,0,168,84,84.09,84.09,0,0,0,84,0Zm38.69,121.48a6.33,6.33,0,0,1-8.72,2.06c-23.88-14.62-53.92-17.91-89-9.84a6.33,6.33,0,0,1-3.06-12.32c37.47-9.21,71.74-5.41,98.4,10.65A6.34,6.34,0,0,1,122.69,121.48Zm11.53-23.44a7.91,7.91,0,0,1-10.9,2.58C90.79,85.76,62.3,79.4,35.16,87.7a7.91,7.91,0,1,1-4.22-15.23c30.81-8.54,62.74-1.09,89.3,11.37A7.91,7.91,0,0,1,134.22,98Zm4.54-23.29C105,56.68,63.11,52.92,35,61.62a9.5,9.5,0,0,1-5-18.28c32.92-9,79.14-4.93,109.94,14.41a9.5,9.5,0,1,1-10,16.94Z" />
          </svg>
          SpotifyClone Admin
        </div>
      </div>

      <div className="h-full p-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/viewallsongs" element={<ViewAllSongs />}/>
            <Route path="/addanalbum" element={<AddAnAlbum />}/>
            <Route path="/addasong" element={<AddASong />}/>
            <Route path="/deleteanalbum" element={<DeleteAnAlbum />}/>
            <Route path="/deleteasong" element={<DeleteASong />}/>
          </Routes>
      </div>
    </div>
  );
}

export default MainArea;
