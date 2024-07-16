import React, { useState, useEffect } from "react";

function Profile({
  username,
  profilePhoto,
  email,
  isEmailVerified,
  phoneNumber,
}) 
{
  return (
    <div className="text-gray-50">
      <div className="text-white flex justify-start items-center bg-gradient-to-b from-amber-100 to-dark-gray">
        <img
          src={profilePhoto}
          alt=""
          className="ml-5 mt-5 rounded-full md:h-[175px] h-[100px]"
        />
        <div className="flex flex-col items-start">
          <div className="md:text-[15px] text-sm ml-5 md:-translate-y-6">
            Profile
          </div>
          <div className="md:text-[60px] text-xl ml-5 font-bold">
            {username}
          </div>
        </div>
      </div>
      <div className="mt-[50px] ml-8 gap-y-4 mr-6">
        <div className="md:text-[30px] text-lg text-white mb-8">
          Full Profile Information
        </div>
        <table className="w-full text-left">
          <tbody>
            <tr className="flex flex-wrap md:table-row border-b">
              <td className="w-full md:w-auto max-w-xs md:max-w-none px-4 py-2 md:px-8 md:py-2 font-semibold">
                Username
              </td>
              <td className="w-full md:w-auto max-w-xs md:max-w-none px-4 py-2 md:px-8 md:py-2 text-gray-400">
                {username}
              </td>
            </tr>
            <tr className="flex flex-wrap md:table-row border-b">
              <td className="w-full md:w-auto max-w-xs md:max-w-none px-4 py-2 md:px-8 md:py-2 font-semibold">
                Email
              </td>
              <td className="w-full md:w-auto max-w-xs md:max-w-none px-4 py-2 md:px-8 md:py-2 text-gray-400">
                {email}
              </td>
            </tr>
            <tr className="flex flex-wrap md:table-row border-b">
              <td className="w-full md:w-auto max-w-xs md:max-w-none px-4 py-2 md:px-8 md:py-2 font-semibold">
                isEmailVerified
              </td>
              <td className="w-full md:w-auto max-w-xs md:max-w-none px-4 py-2 md:px-8 md:py-2 text-gray-400">
                {isEmailVerified}
              </td>
            </tr>
            <tr className="flex flex-wrap md:table-row border-b">
              <td className="w-full md:w-auto max-w-xs md:max-w-none px-4 py-2 md:px-8 md:py-2 font-semibold">
                Contact Number
              </td>
              <td className="w-full md:w-auto max-w-xs md:max-w-none px-4 py-2 md:px-8 md:py-2 text-gray-400">
                {phoneNumber}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
