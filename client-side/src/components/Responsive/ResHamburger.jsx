import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase.js";
import { toast } from 'react-toastify';

function ResHamburger({ isOpen, setIsOpen, greeting }) {
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };
  const logout = (e) => {
    if(confirm("Are you sure you want to logout?")){
      console.log("Logging Out");
    }
    else{
      return;
    }
    e.preventDefault();
    auth.signOut().then(() => {
      console.log("Logged Out");
      toast.success("Logged Out Successfully");
    }).catch(error => {
      toast.error("Error Logging Out");
      console.log(error.message);
    });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black z-50 w-full transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-3000 ease-in-out`}
    >
      <div className="flex justify-between items-center p-5">
        <div className="text-xl font-bold text-green-400">{greeting}</div>
        <div onClick={toggleMenu} className="cursor-pointer">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-white"
            >
              <path
                fill="#ffffff"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-white"
            >
              <path
                fill="#ffffff"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="ml-[10%] text-xl">
        <ul className="list-none cursor-pointer">
          <li className="mb-4">
            <NavLink to="/home" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="flex items-center mb-4">
            <a
              href="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fwww.spotify.com%2Fin-en%2Faccount%2Foverview%2F%3Futm_source%3Dspotify%26utm_medium%3Dmenu%26utm_campaign%3Dyour_account"
              target="_blank"
              onClick={toggleMenu}
            >
              View Account
              <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
            </a>
          </li>
          <li className="mb-4">
            <NavLink to="/profile" onClick={toggleMenu}>
              Profile
            </NavLink>
          </li>
          <li className="mb-8">
            <NavLink to="/library" onClick={toggleMenu}>
              Your Library
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/installapp"
              onClick={toggleMenu}
              className="gap-2 flex items-center"
            >
              Install Spotify App
              <svg
                viewBox="0 0 168 168"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                className="h-[25px]"
              >
                <path d="M84 0C37.8 0 0 37.8 0 84c0 46.2 37.8 84 84 84s84-37.8 84-84c0-46.2-37.8-84-84-84zm38.7 121c-1.5 2.5-4.7 3.3-7.2 1.8-19.7-11.9-44.5-14.6-73.7-8.1-2.8.6-5.7-1.2-6.3-4s1.2-5.7 4-6.3c31.8-7.1 59.6-4 81.4 9.6 2.5 1.5 3.3 4.7 1.8 7.2zm10.1-21.2c-1.8 3-5.6 4-8.6 2.2-22.7-14-57.5-18.1-84.7-10-3.3.9-6.7-1-7.6-4.3-.9-3.3 1-6.7 4.3-7.6 30.9-8.8 68.1-4.1 94.2 11.1 3 1.7 4 5.6 2.4 8.6zm.7-21.5c-26.8-15.4-71.1-16.8-95.4-9-3.7 1.1-7.5-1.1-8.6-4.8-1.1-3.7 1.1-7.5 4.8-8.6 27.6-8.2 75.2-6.5 104.2 10.3 3.4 1.9 4.6 6.3 2.7 9.7-1.9 3.4-6.3 4.6-9.7 2.7z" />
              </svg>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/premium" onClick={toggleMenu}>
              Explore Premium
            </NavLink>
          </li>
          <li className="mb-4 ">
            <NavLink to="/settings" onClick={toggleMenu}>
              Settings <i class="fa-solid fa-gear"></i>
            </NavLink>
          </li>
          <li className="mb-4" onClick={logout}>Log Out</li>
        </ul>
      </div>
    </div>
  );
}

export default ResHamburger;
