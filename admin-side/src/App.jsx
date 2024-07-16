import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";

function App() {
  return (
    <div className="bg-black h-screen p-2 flex flex-col overflow-hidden gap-5">
      <div className="mt-2">
        <Header />
      </div>
      <div className="flex gap-5 bg-dark-gray h-full w-full rounded-lg">
        <Sidebar />
        <MainArea />
      </div>
    </div>
  );
}

export default App;
