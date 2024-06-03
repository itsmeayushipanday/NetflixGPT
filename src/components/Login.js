import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [text, setText] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const msg = checkValidData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMsg(msg);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const toggleText = () => {
    setText(!text);
  };

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-75 p-8 rounded-md"
        >
          <h1 className="text-white font-bold text-3xl mb-2">
            {isSignInForm ? "Sign In" : "Sign up "}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="bg-transparent text-gray-300 placeholder-gray-500 w-full py-2 px-4 mb-4 rounded-md border border-gray-400"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address or Phone Number"
            className="bg-transparent text-gray-300 placeholder-gray-500 w-full py-2 px-4 mb-4 rounded-md border border-gray-400"
          />
          <input
            type="text"
            ref={password}
            placeholder="Password"
            className="bg-transparent text-gray-300 placeholder-gray-500 w-full py-2 px-4 mb-4 rounded-md border border-gray-400"
          />
          {!isSignInForm && (
            <input
              ref={password}
              type="text"
              placeholder="Confirm Password"
              className="bg-transparent text-gray-300 placeholder-gray-500 w-full py-2 px-4 mb-4 rounded-md border border-gray-400"
            />
          )}

          <p className="text-red-600 font-semibold">{errormsg}</p>
          <button
            type="submit"
            onClick={handleButtonClick}
            className="w-full p-2 m-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h1 className="text-gray-400 text-center ">OR</h1>
          <button className="bg-white bg-opacity-25 hover:bg-opacity-50 text-white font-bold w-full p-2 m-2 rounded">
            {isSignInForm ? "Use a sign-in code" : "Use a sign-up code"}
          </button>
          <h1 className="text-gray-400 text-center ">Forgot Password?</h1>
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="h-5 w-5 mr-2" />
            <label htmlFor="remember" className="text-white m-2 p-2 text-xl">
              Remember me
            </label>
          </div>
          <h1
            className="text-white m-2 p-2 text-lg cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already a user? Sign In now."}
          </h1>
          <h2
            className="text-white m-2 p-2 cursor-pointer"
            onClick={toggleText}
          >
            {text
              ? "This page is protected by Google reCAPTCHA to ensure you're not a bot. Click to learn more."
              : "This page is protected by Google reCAPTCHA to ensure you're not a bot. The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google)."}
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
