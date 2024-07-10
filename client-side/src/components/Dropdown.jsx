import React from 'react'
import { NavLink } from 'react-router-dom'

function Dropdown() {
  return (
    <> 
        <div className='flex flex-col gap-y-4'>
            <div className='flex justify-between'>
                <div>Account</div>
                <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <div>Profile</div>
            <NavLink to="/premium">
              <div className='flex justify-between'>
                  <div>Upgrade To Premium</div>
                  <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
              </div>
            </NavLink>
            <div>Settings</div>
            <hr className='h-[0.4px]'/>
            <div>Logout</div>

        </div>
    
    </>
  )
}

export default Dropdown