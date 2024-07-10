import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import PlayArea from './components/PlayArea';
import Home from './pages/Home';
import ExplorePremium from './pages/ExplorePremium';
import InstallApp from './pages/InstallApp';

function App() {
  const [isMusicOptions, setIsMusicOptions] = useState(true);
  const [isSearchOpened , setIsSearchOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/home') {
      setIsMusicOptions(true);
    } else {
      setIsMusicOptions(false);
    }
    if (location.pathname === '/search') {
      setIsSearchOpened(true);
    } else {
      setIsSearchOpened(false);
    }
  }, [location]);

  return (
    <div className='h-screen bg-black overflow-hidden'>
      <div className='flex flex-row'>
        <div className='flex flex-col text-gray-300 font-medium text-xl w-[350px] mt-4 ml-4'>
          <Sidebar />
        </div>
        
        <div className='flex flex-col p-3 text-gray-300 font-medium text-xl w-full ml-4 mt-4 mr-2 overflow-hidden h-[662px] rounded-xl bg-dark-gray'>
          <div className='bg-opacity-5'>
            <Header isMusicOptions={isMusicOptions}  isSearchOpened={isSearchOpened} />
          </div>
          
          <div className='main-area overflow-y-auto h-full p-2 mt-4 relative z-0'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Home />} />
              <Route path="/premium" element={<ExplorePremium />} />
              <Route path="/installapp" element={<InstallApp />} />
            </Routes>
            <hr className='h-[0.4px] border-b border-black mt-8 mb-0' />
            <Footer />
          </div>
        </div>
      </div>
      
      <div>
        <PlayArea />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
