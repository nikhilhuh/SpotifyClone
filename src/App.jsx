import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SongsArea from './components/SongsArea'
import Footer from './components/Footer'
import PlayArea from './components/PlayArea'

function App() {

  return (
  <div className='h-screen bg-black overflow-hidden'>
      <div className='flex flex-row'>
  
        <div className='flex flex-col text-gray-300 font-medium text-xl w-[350px] mt-4 ml-4'>
          <Sidebar />
        </div>
  
        <div className='flex flex-col p-3 text-gray-300 font-medium text-xl w-full ml-4 mt-4 mr-2 overflow-hidden h-[662px] rounded-xl bg-dark-gray'>
          
          <div className='h-28'>
              <Header />
          </div>
  
          <div className='songs-area overflow-y-auto h-full p-2 mt-4 relative z-0'>
            <SongsArea />
            <hr className='h-[0.4px] border-b border-black mt-8 mb-0' />
            <Footer />
          </div>
  
        </div>
        
      </div>
      
      <div>
        <PlayArea />
      </div>

  </div>
  )
}

export default App
