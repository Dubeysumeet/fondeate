import React from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="fluid-container wf-u-panel coolgray min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl sm:text-3xl font-medium text-center">
        Hello! We welcome you again!
      </h2>
      <p className="wf-text-dimmer text-center mt-4">
        New to Fondeate? <a className="wf-link-inline-muted fontDec" href="/signup">Register</a>
      </p>
      <div className="flex w-full max-w-lg md:max-w-4xl mx-auto mt-6 flex-col md:flex-row md:mt-12">
        <div className="flex flex-col gap-3 md:w-1/2 md:border-r-2 md:pr-16">
          <button className="border border-solid border-gray-300 rounded-lg relative p-4 hover:opacity-90 text-sm font-medium w-full flex items-center justify-center gap-2 wf-animate-slideup">
            <FaGoogle className="text-xl" />
            Continue with Google
          </button>
          <button className="border border-solid border-gray-300 rounded-lg relative p-4 hover:opacity-90 text-sm font-medium w-full flex items-center justify-center gap-2 wf-animate-slideup">
            <FaFacebook className="text-xl" />
            Continue with Facebook
          </button>
          <button className="border border-solid border-gray-300 rounded-lg relative p-4 hover:opacity-90 text-sm font-medium w-full flex items-center justify-center gap-2 wf-animate-slideup">
            <FaApple className="text-xl" />
            Continue with Apple
          </button>
        </div>
        <div className="py-3 text-center flex font-light text-gray-500 font-medium md:hidden">
          <div className="border-t border-gray-300 mt-3 mr-2 w-full h-2"></div>
          <span>or</span>
          <div className="border-t border-gray-300 mt-3 ml-2 w-full h-2"></div>
        </div>
        <div className="md:w-1/2 md:pl-16">
          <form className="flex flex-col gap-6 wf-animate-slideup">
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="peer block w-full border border-gray-300 rounded-lg py-4 px-4 text-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-600" 
                placeholder=" " 
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 top-4 text-gray-600 transition-all transform -translate-y-3 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                Email
              </label>
            </div>
            <div className="relative">
              <input 
                type="password" 
                id="current-password" 
                name="password" 
                className="peer block w-full border border-gray-300 rounded-lg py-4 px-4 text-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-600" 
                placeholder=" " 
              />
              <label 
                htmlFor="current-password" 
                className="absolute left-4 top-4 text-gray-600 transition-all transform -translate-y-3 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                Password
              </label>
            </div>
            <button type="submit" className="bg-blue-600 text-white w-full py-3 px-4 hover:opacity-60 text-sm font-semibold md:font-bold rounded transition duration-300 cursor-pointer">
              Login
            </button>
            <div className="text-center text-sm my-2">
              <a className="hover:text-coolgray-900 hover:underline text-coolgray-700" href="/forgot_password">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;