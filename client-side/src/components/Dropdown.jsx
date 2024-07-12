import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from "../firebase.js";
import { toast } from 'react-toastify';

function Dropdown() {
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
    <> 
        <div className='flex flex-col gap-y-4'>
            <a href="https://www.spotify.com/in-en/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account" target='_blank'>
              <div className='flex justify-between'>
                  <div>Account</div>
                  <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
              </div>
            </a>
            <NavLink to="/profile">
              <div>Profile</div>
            </NavLink>
            <NavLink to="/premium">
              <div className='flex justify-between'>
                  <div>Upgrade To Premium</div>
                  <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
              </div>
            </NavLink>
            <NavLink to="/settings">
              <div>Settings</div>
            </NavLink>
            <hr className='h-[0.4px]'/>
            <div className='cursor-pointer' onClick={logout}>Logout</div>

        </div>
    
    </>
  )
}

export default Dropdown