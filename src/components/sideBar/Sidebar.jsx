import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingBag, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    const linkStyle = ({ isActive }) =>
        `flex items-center gap-2 transition-colors duration-100 ${isActive ? "text-blue-500 font-semibold" : "text-white hover:text-blue-400"
        }`;

    return (
        <div className="h-screen w-1/6 bg-gray-800 text-white p-5 fixed top-14 left-0 shadow-lg">
            <ul className="space-y-6 text-sm font-medium">
                <li>
                    <NavLink to="/Home" className={linkStyle}>
                        <FaHome /> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders" className={linkStyle}>
                        <FaShoppingBag /> Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={linkStyle}>
                        <FaCog /> Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/logout" className={linkStyle}>
                        <FaSignOutAlt /> Logout
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
