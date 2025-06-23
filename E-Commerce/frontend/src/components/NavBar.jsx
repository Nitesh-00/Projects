import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

function NavBar() {

  const [visible,setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5" />
          <p className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </p>
        </Link>
        <img onClick={()=> setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 transition-all bg-white ${visible ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col text-gray-500">
            <div onClick={()=> setVisible(false)} className="flex items-center gap-4 p-2 cursor-pointer">
              <img src={assets.dropdown_icon} alt="" className="h-5"/>
              <p>Back</p>
            </div>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 block border-l-4 transition duration-200 rounded ' to='/'>Home</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 block border-l-4 transition duration-200 rounded' to='/collection'>Collections</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 block border-l-4 transition duration-200 rounded' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 block border-l-4 transition duration-200 rounded' to='/contact'>CONTACT</NavLink>
          </div>
      </div>
    </div>
  );
}

export default NavBar;
