import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/Context";

function NavBar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, cartCount,token,setToken,navigate } = useContext(UserContext);

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "COLLECTIONS", to: "/collection" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", to: "/contact" },
  ];

  const logout = () =>{
    localStorage.removeItem('token');
    setToken("");
    navigate('/login')

  }

  return (
    <div className="flex items-center justify-between py-5 font-medium relative z-50">
      <img src={assets.logo} className="w-36" alt="Logo" />

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="flex flex-col items-center gap-1"
          >
            <p>{link.label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Dropdown */}
<div className="relative group">
  <img
  onClick={()=> token ? null : navigate('/login')}
    src={assets.profile_icon}
    className="w-5 cursor-pointer"
    alt="Profile"
  />

  {token && (
    <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col gap-2 w-40 py-3 px-4 bg-white text-gray-600 rounded-lg shadow-lg transition-all duration-200 ease-in-out z-50">
      <button className="text-left hover:text-black hover:bg-gray-100 px-2 py-1 rounded transition">
        My Profile
      </button>
      <button
        onClick={() => navigate('/orders')}
        className="text-left hover:text-black hover:bg-gray-100 px-2 py-1 rounded transition"
      >
        Orders
      </button>
      <button
        onClick={() => logout()}
        className="text-left hover:text-red-500 hover:bg-gray-100 px-2 py-1 rounded transition"
      >
        Logout
      </button>
    </div>
  )}
</div>


        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart" className="w-5" />
          <p className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {cartCount()}
          </p>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 transition-all bg-white overflow-hidden ${visible ? "w-full p-4" : "w-0"
          }`}
      >
        <div className="flex flex-col text-gray-500">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-2 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="Back" className="h-5" />
            <p>Back</p>
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              onClick={() => setVisible(false)}
              className="py-2 pl-6"
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
