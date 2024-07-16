import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="border-r-2 border-light-gray w-[25%] flex-shrink-0">
      <div className="text-white text-lg p-4 flex h-full">
        <ul className="list-none ml-2">
          <li className="font-bold text-2xl">
            <NavLink to="/home" className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              Home
            </NavLink>
          </li>
          <li className="font-bold flex items-end text-2xl">
            All Admin Options
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </li>
          <li>
            <NavLink to="/viewallsongs">View All Songs</NavLink>
          </li>
          <li>
            <NavLink to="/addanalbum">Add an Album</NavLink>
          </li>
          <li>
            <NavLink to="/addasong">Add a Song</NavLink>
          </li>
          <li>
            <NavLink to="/deleteanalbum">Delete an Album</NavLink>
          </li>
          <li>
            <NavLink to="/deleteasong">Delete a Song</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
