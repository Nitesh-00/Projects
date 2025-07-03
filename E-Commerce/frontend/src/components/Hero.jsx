import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 bg-white">
      {/* Left Content */}
      <div className="w-full sm:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="ml-10 space-y-4">
          {/* Bestseller Label */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-[2px] bg-[#414141]" />
            <p className="text-sm text-gray-700 font-medium">OUR BESTSELLER</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl font-semibold prata-regular text-gray-900">
            LATEST COLLECTIONS
          </h1>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-4  group">
            <p className="font-medium text-gray-800 group-hover:text-black transition">SHOP NOW</p>
            <div className="w-7 h-[2px] bg-[#414141] group-hover:bg-black transition" />
          </div>
        </div>
      </div>

      {/* Right Image */}
      <img
        src={assets.hero_img}
        className="w-full sm:w-1/2 object-cover"
        alt="Latest fashion collection"
      />
    </div>
  );
}

export default Hero;
