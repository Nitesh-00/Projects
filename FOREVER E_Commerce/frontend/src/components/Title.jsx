import React from 'react';

const Title = ({ title1, title2 }) => {
  return (
    <div className="pt-10 flex justify-center">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-4">
          <p className="text-[32px] font-medium text-gray-400">
            {title1} <span className="text-black">{title2}</span>
          </p>
          <div className="w-12 h-[3px] bg-[#292929]"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
