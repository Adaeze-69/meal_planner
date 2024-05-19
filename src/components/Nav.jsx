import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto px-4 text-black">
      {/* Logo and brand name */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8 w-auto mr-2"
        />
        <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
      </div>

      {/* Nav links */}
      <ul className="flex space-x-4">
        <li className="text-lg">Home</li>
        <li className="text-lg">Service</li>
        <li className="text-lg">Contact</li>
        <li className="text-lg">About</li>
      </ul>

      {/* Login and Sign up buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-lg bg-transparent border border-black px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Login
        </button>
        <button className="text-lg bg-transparent border border-black px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Sign Up
        </button>
      </div>

      {/* Mobile menu button */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden md:hidden fixed bg-[#00300] left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed ease-in-out duration-500 left-[-100%]"
        }
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-4">
          <li className="text-xl">Home</li>
          <li className="text-xl">Service</li>
          <li className="text-xl">Contact</li>
          <li className="text-xl">About</li>
          <li>
            <button className="text-xl bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Login
            </button>
          </li>
          <li>
            <button className="text-xl bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
