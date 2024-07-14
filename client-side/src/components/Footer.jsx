import React from 'react'

function Footer() {
  return (
    <div className='ml-4 mr-4 text-gray-300'>

      <div className='flex flex-wrap items-start lg:flex-row sm-custom:justify-evenly md:justify-evenly lg:justify-between text-sm md:text-lg mt-10 mb-6 gap-y-6 gap-x-6'>
        <ul className='list-none'>
          <li className='text-white font-bold text-xl'>Company</li>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </ul>
        <ul className='list-none'>
          <li className='text-white font-bold text-xl'>Communities</li>
          <li>For Artists</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>
        <ul className='list-none'>
          <li className='text-white font-bold text-xl'>Useful Links</li>
          <li>Support</li>
          <li>Free Mobile App</li>
        </ul>
        <ul className='list-none'>
          <li className='text-white font-bold text-xl'>Spotify Plans</li>
          <li>Premium Individual</li>
          <li>Premium Duo</li>
          <li>Premium Family</li>
          <li>Premium Student</li>
          <li>Spotify Free</li>
        </ul>
        <div className='flex gap-4 text-2xl'>
            <div><i class="fa-brands fa-instagram"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-facebook"></i></div>
        </div>
      </div>

      <hr className='h-[0.4px] border-b border-white mt-8 mb-6' />

      <div className='flex flex-wrap justify-between mb-10 gap-y-4'>
        <ul className='list-none flex flex-wrap gap-y-4 gap-x-4 text-sm'>
          <li>Legal</li>
          <li>Safety & Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
          <li>Accessibility</li>
        </ul>
        <div>© 2024 SpotifyClone</div>
      </div>
                
    
    </div>
  )
}

export default Footer