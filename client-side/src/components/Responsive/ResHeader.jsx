import React, { useState } from "react";
import ResHamburger from "./ResHamburger";

function ResHeader() {
  const date = new Date();
  const hour = date.getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  return (
    <div className="text-white mb-10">
      <div className="flex justify-between items-center">
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
      {isOpen && <ResHamburger isOpen={isOpen} setIsOpen={setIsOpen} greeting={greeting} />}
    </div>
  );
}

export default ResHeader;
