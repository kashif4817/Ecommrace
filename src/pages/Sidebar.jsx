import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    return ( 
        <div className="h-screen w-1/6 bg-gray-800 text-white p-5 fixed top-14 left-0 shadow-lg">
            <ul className="space-y-6 text-sm font-medium">
                <li>
                    <Link to="/" className="flex items-center gap-2 hover:text-blue-400">
                        <FaHome /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="flex items-center gap-2 hover:text-blue-400">
                        <FaShoppingBag /> Orders
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="flex items-center gap-2 hover:text-blue-400">
                        <FaCog /> Settings
                    </Link>
                </li>
                <li>
                    <Link to="/logout" className="flex items-center gap-2 hover:text-blue-400">
                        <FaSignOutAlt /> Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
