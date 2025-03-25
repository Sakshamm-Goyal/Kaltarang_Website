import React from "react";
import "@fontsource/press-start-2p";
import merchImage from "../assets/Merch.png";

const Merch = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-grid p-6">
      <div className="w-full flex justify-center">
  <div className="text-center text-black text-2xl font-granular text-6xl ml-40" 
       style={{ fontFamily: 'Press Start 2P, sans-serif' }}>
    <span className="text-blue-600 font-granular text-6xl">GRAB</span> YOURSELF <span className=" text-6xl">___</span>
    <span className="text-transparent text-6xl">___</span>
    <span className="text-transparent text-6xl">___</span>
    <span className="text-transparent text-6xl">___</span>
    <span className="text-transparent text-6xl">___</span>
    <br /> A <span className="text-blue-600 font-granular text-6xl">PIECE</span> OF KALTARANG
  </div>
</div>


      
      <img src={merchImage} alt="Kaltarang Merch" className="mt-6 w-3/4 max-w-lg" />
      
      <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-bold border-4 border-white rounded-lg shadow-lg pixel-button">
        Get the Merch
      </button>
    </div>
  );
};

export default Merch;