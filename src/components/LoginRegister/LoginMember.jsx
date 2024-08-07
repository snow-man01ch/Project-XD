import { Link } from "react-router-dom";
import imglogin from "../../assets/ImageLogin/BBS.jpg";
import ImageLogo from "../../assets/ImageLogo/imageLogo.png";

import React from "react";
import MainPage from "../MainPage/MainPage";

const LoginMember = () => {
  return (
    <div className="relativ w-full bg-zinc-900/40 text-white h-[100vh] flex justify-center items-center ">
      <img
        src={ImageLogo}
        alt="Logo"
        className=" max-sm:hidden w-[600px] z-50  md:w-[600xp]  md:h-100vh   object-cover "
      />

      <img
        src={imglogin}
        alt=""
        className="absolute max-sm:w-[500px] max-sm:h-[500px] w-full h-[100vh] object-cover mix-blend-color-burn"
      />

      <div className="">
        <div className="bg-gray-900 border border-gray-400 rounded-md p-20 shadow-lg  sm:backdrop-blur-lg backdrop-blur-0   bg-opacity-20 relative">
          <h1 className="text-4xl text-white font-bold text-center mb-10">
            Member Login
          </h1>
          <form action="">
            <div className=" pb-2 relative my-6">
              <input
                type="email"
                className="block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer "
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Email :
              </label>
            </div>
            <div className="relative my-6">
              <input
                type="password"
                className="block w-72 py-2 text-md px-1 font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-xm font-semibold  text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Password :
              </label>
            </div>
            <div>
              <div>
                <input type="checkbox" />
                <label htmlFor="Remember Me" className="ml-2">
                  Remember Me
                </label>
              </div>
            </div>
            <button
              className="w-full  text-[18px] font-bold mt-6 rounded-full bg-white text-emerald-800 hover:text-white hover:bg-emerald-400 py-2  duration-200  transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              type="submit"
            >
              Sign In <Link to='/mainpage'></Link>
            </button>
            <button
              className="w-full mb-4 text-[18px] font-bold mt-6 rounded-full bg-white text-emerald-800 hover:text-white hover:bg-emerald-400 py-2  duration-200  transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              type="submit"
            >
              Sign Member <Link to='/mainpage'></Link>
            </button>
            <div>
              <span>
                Not a member?{" "}
                <Link
                  to="/RegisterMember"
                  className="font-bold text-emerald-300 hover:text-emerald-400 duration-300 hover:text-sm"
                >
                  Create an Account{" "}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginMember;
