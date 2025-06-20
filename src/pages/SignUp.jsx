import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Sign Up</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="cursor-pointer w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
                    >
                        Create Account
                    </button>
                    <p className="text-center text-sm mt-4 text-gray-400">
                        Already have an account?
                        <Link
                            className="ml-1 text-blue-400 hover:underline"
                            to='/' >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
