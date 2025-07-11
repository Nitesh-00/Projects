import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 shadow-lg p-4">
      <div className="flex flex-col space-y-4">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-md hover:bg-pink-100 transition ${
              isActive ? 'bg-pink-200 font-semibold' : ''
            }`
          }
        >
          <img src={assets.add_icon} alt="Add Icon" className="h-6 w-6" />
          <p>Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-md hover:bg-pink-100 transition ${
              isActive ? 'bg-pink-200 font-semibold' : ''
            }`
          }
        >
          <img src={assets.order_icon} alt="List Icon" className="h-6 w-6" />
          <p>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded-md hover:bg-pink-100 transition ${
              isActive ? 'bg-pink-200 font-semibold' : ''
            }`
          }
        >
          <img src={assets.order_icon} alt="Orders Icon" className="h-6 w-6" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
