import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="py-6 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col sm:flex-row justify-around items-center gap-6">
        {/* Policy Card */}
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 w-full max-w-xs text-center">
          <img
            src={assets.exchange_icon}
            alt="Easy Exchange"
            className="w-16 h-16 mx-auto mb-3"
          />
          <p className="text-base font-semibold text-gray-800">Easy Exchange Policy</p>
          <p className="text-sm text-gray-500 mt-1">We provide 7-day free return policy</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 w-full max-w-xs text-center">
          <img
            src={assets.quality_icon}
            alt="Easy Exchange"
            className="w-16 h-16 mx-auto mb-3"
          />
          <p className="text-base font-semibold text-gray-800">Easy Exchange Policy</p>
          <p className="text-sm text-gray-500 mt-1">We provide 7-day free return policy</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 w-full max-w-xs text-center">
          <img
            src={assets.support_img}
            alt="Easy Exchange"
            className="w-16 h-16 mx-auto mb-3"
          />
          <p className="text-base font-semibold text-gray-800">Easy Exchange Policy</p>
          <p className="text-sm text-gray-500 mt-1">We provide 7-day free return policy</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
