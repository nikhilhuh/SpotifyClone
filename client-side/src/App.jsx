import React, { useState, useEffect, useRef, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  NavLink,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlayArea from "./components/PlayArea";
import Home from "./pages/Home";
import ExplorePremium from "./pages/ExplorePremium";
import InstallApp from "./pages/InstallApp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { auth } from "./firebase";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Loading from "./components/Loading";
import { useMediaQuery } from "react-responsive";
import ResHeader from "./components/Responsive/ResHeader";
import SongsArea from "./components/SongsArea";
import ResPlayArea from "./components/Responsive/ResPlayArea";
import Library from "./pages/Library";
import Song from "./components/Responsive/Song";
import { PlayerContext } from "./context/PlayerContext";

function ForLargerScreens({
  isMusicOptions,
  isSearchOpened,
  profilePhoto,
  username,
  currentSong,
  setCurrentSong,
  isSongPlaying,
  setIsSongPlaying,
  audioRef,
  email,
  isEmailVerified,
  phoneNumber,
}) {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="flex flex-row h-[80vh]">
        <div className="flex flex-col text-gray-300 font-medium text-xl w-[40%] mt-4 ml-4 h-full">
          <Sidebar />
        </div>

        <div className="flex flex-col p-3 text-gray-300 font-medium text-xl w-full ml-4 mt-4 mr-2 overflow-hidden h-full rounded-xl bg-dark-gray">
          <div className="bg-opacity-5">
            <Header
              isMusicOptions={isMusicOptions}
              isSearchOpened={isSearchOpened}
              profilePhoto={profilePhoto}
              username={username}
            />
          </div>

          <div className="main-area overflow-y-auto h-full p-2 mt-4 relative z-0">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Home />} />
              <Route path="/premium" element={<ExplorePremium />} />
              <Route path="/installapp" element={<InstallApp />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    username={username}
                    profilePhoto={profilePhoto}
                    email={email}
                    isEmailVerified={isEmailVerified}
                    phoneNumber={phoneNumber}
                  />
                }
              />
              <Route path="/settings" element={<Settings />} />
            </Routes>
            <hr className="h-[0.4px] border-b border-black mt-8 mb-0" />
            <Footer />
          </div>
        </div>
      </div>

      <div className="h-[18vh]">
        {currentSong && (
          <PlayArea
            song={currentSong}
            isSongPlaying={isSongPlaying}
            setIsSongPlaying={setIsSongPlaying}
            audioRef={audioRef}
          />
        )}
      </div>
    </div>
  );
}

function ForSmallerScreens({
  profilePhoto,
  username,
  currentSong,
  setCurrentSong,
  isSongPlaying,
  setIsSongPlaying,
  audioRef,
  email,
  isEmailVerified,
  phoneNumber,
}) {
  const [isPlayAreaClicked, setIsPlayAreaClicked] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black relative">
        <div className="p-5">
          {isPlayAreaClicked ? null : <ResHeader />}

          <div className="flex-1">
            <Routes>
              <Route
                index
                element={
                  <SongsArea
                    setCurrentSong={setCurrentSong}
                    setIsSongPlaying={setIsSongPlaying}
                    audioRef={audioRef}
                  />
                }
              />
              <Route
                path="/home"
                element={
                  <SongsArea
                    setCurrentSong={setCurrentSong}
                    setIsSongPlaying={setIsSongPlaying}
                    audioRef={audioRef}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    username={username}
                    profilePhoto={profilePhoto}
                    email={email}
                    isEmailVerified={isEmailVerified}
                    phoneNumber={phoneNumber}
                  />
                }
              />
              <Route path="/premium" element={<ExplorePremium />} />
              <Route path="/installapp" element={<InstallApp />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/library"
                element={
                  <Library username={username} profilePhoto={profilePhoto} />
                }
              />
              <Route
                path="/song"
                element={
                  <Song
                    song={currentSong}
                    audioRef={audioRef}
                    setIsSongPlaying={setIsSongPlaying}
                    isSongPlaying={isSongPlaying}
                    setIsPlayAreaClicked={setIsPlayAreaClicked}
                  />
                }
              />
            </Routes>
          </div>

          {isPlayAreaClicked ? null : (
            <>
              <hr className="h-[0.4px] border-b border-dark-gray mt-8 mb-0" />
              <Footer />
            </>
          )}
        </div>

        {isPlayAreaClicked ? null : (
          <div className="fixed bottom-1 h-[60px] w-full z-50">
            {currentSong && (
              <ResPlayArea
                setIsPlayAreaClicked={setIsPlayAreaClicked}
                song={currentSong}
                isSongPlaying={isSongPlaying}
                setIsSongPlaying={setIsSongPlaying}
                audioRef={audioRef}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

function MainLayout({
  currentSong,
  setCurrentSong,
  isSongPlaying,
  setIsSongPlaying,
  audioRef,
}) {
  const [isMusicOptions, setIsMusicOptions] = useState(true);
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState("");

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") {
      setIsMusicOptions(true);
    } else {
      setIsMusicOptions(false);
    }
    if (location.pathname === "/search") {
      setIsSearchOpened(true);
    } else {
      setIsSearchOpened(false);
    }
  }, [location]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUsername(user.displayName || "Anonymous");
        setProfilePhoto(user.photoURL);
        setEmail(user.email);
        setIsEmailVerified(user.emailVerified ? "Verified" : "Not Verified");
        setPhoneNumber(user.phoneNumber || "Not Set");
      } else {
        setIsLoggedIn(false);
        setUsername("");
        setProfilePhoto("");
        setEmail("");
        setIsEmailVerified("");
        setPhoneNumber("");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <ForLargerScreens
          isMusicOptions={isMusicOptions}
          isSearchOpened={isSearchOpened}
          profilePhoto={profilePhoto}
          username={username}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isSongPlaying={isSongPlaying}
          setIsSongPlaying={setIsSongPlaying}
          audioRef={audioRef}
          email={email}
          isEmailVerified={isEmailVerified}
          phoneNumber={phoneNumber}
        />
      ) : (
        <ForSmallerScreens
          profilePhoto={profilePhoto}
          username={username}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isSongPlaying={isSongPlaying}
          setIsSongPlaying={setIsSongPlaying}
          audioRef={audioRef}
          email={email}
          isEmailVerified={isEmailVerified}
          phoneNumber={phoneNumber}
        />
      )}
      <audio ref={audioRef} controls style={{ display: "none" }}>
        <source
          src={currentSong ? `https://spotifyclone-backend.onrender.com${currentSong.url}` : ""}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

function StartUp() {
  return (
    <div className="min-h-screen bg-dark-gray flex flex-col justify-center items-center gap-y-16">
      <div className="flex flex-col justify-center text-center">
        <svg
          viewBox="0 0 168 168"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[100px] mb-5"
        >
          <path
            d="M84,0C37.53,0,0,37.53,0,84s37.53,84,84,84,84-37.53,84-84S130.47,0,84,0Zm38.21,120.75a6.23,6.23,0,0,1-8.56,2.05c-23.4-14.35-52.88-17.57-87.7-9.58a6.23,6.23,0,1,1-2.77-12.19c37.24-8.48,70.29-4.89,96.8,11.05A6.23,6.23,0,0,1,122.21,120.75Zm11.22-23.39a7.78,7.78,0,0,1-10.68,2.56c-26.79-16.45-67.67-21.26-99.45-11.58a7.78,7.78,0,1,1-4.8-14.79c35.48-11.52,79.77-6.16,110.24,12.58A7.78,7.78,0,0,1,133.43,97.36ZM144,65.59a9.31,9.31,0,0,1-12.81,3.06C101.83,53.55,66.29,50.57,39.68,59.67a9.31,9.31,0,1,1-5.76-17.71c30.84-10,71.83-6.63,103.51,12.33A9.31,9.31,0,0,1,144,65.59Z"
            fill="#1ED760"
          />
        </svg>
        <h2 className="text-3xl font-bold text-white mb-4">SpotifyClone</h2>
        <h2 className="text-xl font-bold text-white">
          Seamlessly listen to music you love.
        </h2>
      </div>
      <div className="flex gap-10">
        <NavLink to="/signin">
          <button className="px-3 py-2 border-2 border-green-400 bg-green-400 rounded-full w-[100px] h-[50px] font-bold hover:scale-125">
            Login
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="px-3 py-2 border-2 border-green-400 bg-green-400 rounded-full w-[100px] h-[50px] font-bold hover:scale-125">
            Sign Up
          </button>
        </NavLink>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const { currentSong, setCurrentSong } = useContext(PlayerContext);
  const { isSongPlaying, setIsSongPlaying } = useContext(PlayerContext);
  const { audioRef } = useContext(PlayerContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      {isLoggedIn ? (
        <Route
          path="/*"
          element={
            <MainLayout
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              isSongPlaying={isSongPlaying}
              setIsSongPlaying={setIsSongPlaying}
              audioRef={audioRef}
            />
          }
        />
      ) : (
        <Route path="/*" element={<StartUp />} />
      )}
    </Routes>
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
