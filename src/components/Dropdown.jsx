import React from 'react'

function Dropdown() {
  return (
    <div className='mt-[11rem] w-[208px] h-[205px] bg-light-gray rounded-md p-3 text-sm font-bold'> 
        <div className='flex flex-col gap-y-4'>
            <div className='flex justify-between'>
                <div>Account</div>
                <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <div>Profile</div>
            <div className='flex justify-between'>
                <div>Upgrade To Premium</div>
                <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <div>Settings</div>
            <hr className='h-[0.4px]'/>
            <div>Logout</div>

        </div>
    
    </div>
  )
}

export default Dropdown