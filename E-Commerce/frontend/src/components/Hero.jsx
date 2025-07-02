import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full flex items-center justify-center py-10 sm:py-0">
        <div>
          <div className="flex items-center gap-2">
            <p className="w-7 h-[2px] bg-[#414141]"></p>
            <p className="font-medium">OUR BESTSELLER</p>
          </div>
          <h1 className="text-3xl sm:py-3 prata-regular">LATEST COLLECTIONS</h1>
          <div className="flex items-center gap-2">
            <p className="font-medium">SHOP NOW</p>
            <p className="w-7 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
        <div></div>
      </div>
      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
    </div>
  );
}

export default Hero;
