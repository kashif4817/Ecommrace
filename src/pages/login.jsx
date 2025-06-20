import React, { useState } from "react";
import { useForm } from "react-hook-form";
import data from "../data/Users.json";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    const onSubmit = (formData) => {
        const matchedUser = data.find(
            (user) =>
                user.email === formData.email &&
                user.password === formData.password
        );
        if (matchedUser) {
            toast.success("Login Successful!", {
                autoClose: 2000,
            });
        } else {
            toast.error("Invalid email or password", {
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    Login
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email",
                                },
                            })}
                        />
                        <span
                            className={`text-red-500 text-sm h-5 block ${errors.email ? "visible" : "invisible"
                                }`}
                        >
                            {errors.email?.message}
                        </span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-300">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be at least 6 characters long",
                                    },
                                    maxLength: {
                                        value: 19,
                                        message:
                                            "Password should be less than 20 characters",
                                    },
                                })}
                            />
                            <span
                                className={`text-red-500 text-sm h-5 block ${errors.password ? "visible" : "invisible"
                                    }`}
                            >
                                {errors.password?.message}
                            </span>
                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-3 top-2 text-gray-400 hover:text-gray-200 cursor-pointer"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="flex items-center text-sm text-gray-300">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <a
                            href="#"
                            className="text-sm text-blue-400 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="cursor-pointer w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
                    >
                        Sign In
                    </button>
                    <p className="text-center text-sm mt-4 text-gray-400">
                        Don't have an account?
                        <Link
                            to='/SignUp'
                            className="ml-1 text-blue-400 hover:underline" > SignUp </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
