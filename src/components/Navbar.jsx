import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const AmazonNav = () => {
  return (
    <header className="bg-blue-900 text-white">
      {/* Top Nav */}
      <div className="flex items-center p-2 px-4">
        {/* Logo */}
        <div className="flex-shrink-0 mr-4 cursor-pointer">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Location selector */}
        <div className="hidden sm:flex items-center mx-2 hover:border-white hover:border rounded px-2">
          <span className="text-xs">Deliver to</span>
          <span className="font-bold">Your Address</span>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 items-center">
          <select className="hidden lg:block bg-gray-200 text-black p-2 rounded-l border-r border-gray-300">
            <option>All</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
          <input
            type="text"
            className="flex-grow p-2 focus:outline-none"
            placeholder="Search Amazon"
          />
          <button className="bg-yellow-400 p-2 rounded-r hover:bg-yellow-500">
            🔍
          </button>
        </div>

        {/* Links: Account, Orders, Cart */}
        <div className="hidden md:flex items-center space-x-6 ml-4">
          <div className="hover:underline cursor-pointer text-sm">
            <p>Hello, Sign in</p>
            <p className="font-bold">Account & Lists</p>
          </div>
          <div className="hover:underline cursor-pointer text-sm">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div className="hover:underline cursor-pointer flex items-center relative">
            <ShoppingCartIcon className="h-6" />
            <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs rounded-full px-1">
              0
            </span>
            <p className="hidden sm:block font-bold ml-1">Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav (Departments menu) */}
      <nav className="bg-blue-800 text-sm p-2 space-x-4">
        <ul className="flex items-center overflow-x-auto no-scrollbar">
          {["All", "Prime Video", "Todays Deals", "Customer Service", "Gift Cards", "Registry", "Sell", "Help"].map((item) => (
            <li key={item} className="hover:underline cursor-pointer whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AmazonNav;
