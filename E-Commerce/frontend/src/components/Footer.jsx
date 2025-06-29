import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">

        {/* Left: Brand or Message */}
        <div className="text-center sm:text-left">
          <p className="font-semibold text-gray-800">YourBrand</p>
          <p className="text-gray-500">Quality you can trust.</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex gap-4 text-gray-600">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/shop" className="hover:text-black transition">Shop</Link>
          <Link to="/about" className="hover:text-black transition">About</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Right: Copyright */}
        <div className="text-center sm:text-right text-gray-500">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
