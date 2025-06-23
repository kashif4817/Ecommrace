// src/components/Dropdown.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <li className="relative text-white px-4 font-medium">
            {/* Account Label with Arrow */}
            <div
                onClick={toggleDropdown}
                className="flex items-center gap-1 cursor-pointer select-none hover:text-blue-400 transition"
            >
                <span>Account</span>
                <span
                    className={`transform transition-transform duration-300 text-sm ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                >
                    ▼
                </span>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-xl shadow-xl py-2 z-20">
                    <li className="px-4 py-2 hover:bg-gray-200 transition">
                        <NavLink
                            to="/Login"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-semibold" : "text-white hover:text-blue-400"}>
                            Login
                        </NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 transition">
                        <NavLink
                            to="/SignUp"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-semibold" : "text-white hover:text-blue-400"}>
                            SignUp
                        </NavLink>
                    </li>
                </ul>
            )}
        </li>
    );
};

export default Dropdown;
