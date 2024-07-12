import React, { useState, useEffect } from 'react';

function Profile({isLoggedIn , username , profilePhoto , email , isEmailVerified , phoneNumber}) {

  return (
    <div>
        <div className='text-white flex justify-start items-center bg-gradient-to-b from-amber-100 to-dark-gray'>
            <img src={profilePhoto} alt="" className='ml-5 mt-5 rounded-full h-[175px]'/>
            <div className='flex flex-col items-start'>
                <div className='text-[15px] ml-5 -translate-y-6'>Profile</div>
                <div className='text-[60px] ml-5 font-bold'>{username}</div>
            </div>
        </div>
        <div className='mt-[50px] ml-8 gap-y-4'>
            <div className='text-[30px] text-white mb-8'>
                Full Profile Information
            </div>
            <table className='border-none text-left className="px-8 py-2"'>
                <tr>
                    <td className="px-8 py-2">Username</td>
                    <td className="px-8 py-2 text-gray-400">{username}</td>
                </tr>
                <tr>
                    <td className="px-8 py-2">Email</td>
                    <td className="px-8 py-2 text-gray-400">{email}</td>
                </tr>
                <tr>
                    <td className="px-8 py-2">isEmailVerified</td>
                    <td className="px-8 py-2 text-gray-400">{isEmailVerified}</td>
                </tr>
                <tr>
                    <td className="px-8 py-2">Contact Number</td>
                    <td className="px-8 py-2 text-gray-400">{phoneNumber}</td>
                </tr>
            </table>
        </div>       
    </div>
  )
}

export default Profile