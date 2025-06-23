import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DropDown from "../../pages/register/DropDown";

// ✅ Style function for nav links
const navLinkStyle = ({ isActive }) =>
  isActive
    ? "text-blue-500 font-semibold transition-colors duration-100"
    : "text-white hover:text-blue-400 transition-colors duration-100";

// ✅ Style function for icons (like profile, bell, cart)
const iconLinkStyle = ({ isActive }) =>
  `flex items-center space-x-1 ${isActive ? "text-blue-500 font-semibold" : "text-white hover:text-blue-400"} transition-colors duration-100`;

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md px-6 py-3 flex items-center justify-between">
      <div className="text-white font-bold text-2xl">🛍️ E-Shop</div>

      <ul className="flex space-x-6 text-white font-semibold items-center">
        <li>
          <NavLink to="/home" className={navLinkStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/products" className={navLinkStyle}>Products</NavLink>
        </li>
        <li>
          <DropDown />
        </li>
        <li>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={navLinkStyle}>About Us</NavLink>
        </li>

        {/* ✅ Profile */}
        <li>
          <NavLink to="/profile" className={iconLinkStyle}>
            <FaUserCircle className="text-2xl" />
            <span>Profile</span>
          </NavLink>
        </li>

        {/* ✅ Notifications with badge */}
        <li className="relative">
          <NavLink to="/notifications" className={iconLinkStyle}>
            <FaBell className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
              5
            </span>
          </NavLink>
        </li>

        {/* ✅ Cart with badge */}
        <li className="relative">
          <NavLink to="/cart" className={iconLinkStyle}>
            <div className="relative">
              <HiOutlineShoppingBag className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </div>
            <span className="hidden sm:inline">Cart</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
