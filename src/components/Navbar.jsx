import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-blue-400" : "text-white";
  return (
    
    <nav className="bg-gray-800 shadow-md px-6 py-3 flex items-center justify-between">
      <div className="text-white font-bold text-2xl">🛍️ E-Shop</div>

      <ul className="flex space-x-6">
        <li>
          <Link to="/" className={`hover:text-blue-400 ${isActive("/")}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className={`hover:text-blue-400 ${isActive("/login")}`}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className={`hover:text-blue-400 ${isActive("/signup")}`}>
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-blue-400 text-white">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-blue-400 text-white">
            Cart 🛒
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
