import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="images/perspective_alpha_website_medium.jpg"
        />
      </div>
      <div className="bg-black bg-opacity-50 h-screen flex justify-center items-center">
        <form className="absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-75 p-8 rounded-md">
          <h1 className="text-white font-bold text-3xl mb-2">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address or Phone Number"
            className="bg-transparent text-gray-300 placeholder-gray-500 w-full py-2 px-4 mb-4 rounded-md border border-gray-400"
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-transparent text-gray-300 placeholder-gray-500 w-full py-2 px-4 mb-4 rounded-md border border-gray-400"
          />
          <button
            type="submit"
            className="w-full p-2 m-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
          >
            Sign In
          </button>
          <h1 className="text-gray-400 text-center ">OR</h1>
          <button className="bg-white bg-opacity-25 hover:bg-opacity-50 text-white font-bold w-full p-2 m-2 rounded">
            Use a sign-in code
          </button>
          <h1 className="text-gray-400 text-center ">Forgot Password?</h1>
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="h-5 w-5 mr-2" />
            <label htmlFor="remember" className="text-white m-2 p-2 text-xl">
              Remember me
            </label>
          </div>
          <h1 className="text-white m-2 p-2 text-lg">
            New to Netflix? Sign up now.
          </h1>
          <h2 className="text-white m-2 p-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </h2>
        </form>
      </div>
    </div>
  );
};
//1:11:41 backkkkkkkkkkkkkkkkkk

export default Login;
