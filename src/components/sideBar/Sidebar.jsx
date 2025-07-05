import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingBag, FaCog, FaSignOutAlt, FaHeart } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
    const { logout } = useAuth();

    const linkStyle = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200
        ${isActive
            ? "bg-blue-600 text-white font-semibold shadow"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`;

    return (
        <div className="h-screen w-56 bg-gray-900 text-white p-4 fixed shadow-lg">
            <h2 className="text-xl font-bold text-blue-500 mb-6">My Dashboard</h2>
            <ul className="space-y-4 text-sm font-medium">
                <li><NavLink to="/home" className={linkStyle}><FaHome /> Home</NavLink></li>
                <li><NavLink to="/home/orders" className={linkStyle}><FaShoppingBag /> Orders</NavLink></li>
                <li><NavLink to="/home/likes" className={linkStyle}><FaHeart /> Favourites</NavLink></li>
                <li><NavLink to="/home/settings" className={linkStyle}><FaCog /> Settings</NavLink></li>
                <li><NavLink to="/login" onClick={logout} className={linkStyle}><FaSignOutAlt /> Logout</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;
