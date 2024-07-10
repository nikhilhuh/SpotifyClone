import React from 'react'

function Footer() {
  return (
    <div className='ml-4 mr-4'>

      <div className='flex justify-between text-lg mt-10 mb-6'>
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

      <hr className='h-[0.4px] border-b border-white mt-8 mb-0' />

      <div className='flex justify-between ml-4 mr-4 mt-6 mb-10'>
        <ul className='list-none flex gap-4 text-sm'>
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