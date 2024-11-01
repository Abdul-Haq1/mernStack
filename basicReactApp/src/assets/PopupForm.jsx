// import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const PopupForm = () => {
    return (
        <div className="min-h-screen bg-[#f5f0eb] flex items-center justify-center px-4 py-10">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                    <img src="https://seeklogo.com/images/B/B2B_Marketer-logo-8020846424-seeklogo.com.png" alt="Logo" className="h-10" /> {/* Replace with your logo */}
                </div>
                <h2 className="text-3xl font-bold text-center text-[#1D1E20] mb-2">
                    Sign in
                </h2>
                <p className="text-center text-[#5A4D98] mb-6">
                    Do not have an account?{" "}
                    <a href="/signup" className="text-[#5A4D989] underline">
                        Sign up here
                    </a>
                </p>
                <div className="flex gap-4 mb-6">
                    <button className="flex-1 flex items-center justify-center border border-gray-300 text-[#1D1E20] rounded-full py-2 transition duration-300 hover:bg-gray-100">
                        <FaFacebookF className="mr-2 text-blue-600" />
                        Sign in with Facebook
                    </button>
                    <button className="flex-1 flex items-center justify-center border border-gray-300 text-[#1D1E20] rounded-full py-2 transition duration-300 hover:bg-gray-100">
                        <FaGoogle className="mr-2 text-red-500" />
                        Sign in with Google
                    </button>
                </div>
                <div className="text-center text-gray-400 mb-6">OR</div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#1D1E20]">
                            Your email address
                        </label>
                        <input
                            type="email"
                            placeholder="name@companyname.com"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#874439] transition duration-300"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <label className="block text-sm font-medium text-[#1D1E20]">
                                Password
                            </label>
                            <a
                                href="/forgot-password"
                                className="text-sm text-[#5A4D98] hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            className="w-full mt-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#874439] transition duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#5A4D98] text-white py-3 rounded-full font-semibold transition duration-300 hover:bg-[#5A4D98]"
                    >
                        SUBMIT
                    </button>
                    <div className="flex items-center mt-4">
                        <input
                            id="remember-me"
                            type="checkbox"
                            className="mr-2 border-[#874439] text-[#874439]"
                        />
                        <label htmlFor="remember-me" className="text-sm text-[#1D1E20]">
                            Remember me
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;