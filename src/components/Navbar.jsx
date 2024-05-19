import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect to reset the nav state when the screen size changes to a larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // nav content
  return (
    <div className="flex justify-between items-center h-[80px] mx-auto max-w-[1200px] py-4 px-5 text-black">
      {/* logo & brand name */}
      <h1 className="text-xl flex font-bold text-[#000]">
        <FaHamburger className="mx-[5px]" size={25} /> Meal{" "}
        <span className="text-[#CF6A34] mx-1">Planner</span>
      </h1>

      {/* Nav links */}
      <ul className="hidden md:flex h-[29px] mx-auto gap-[40px]">
        <li className="p-4 mx-5 max-w-auto hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
          Home
        </li>
        <li className="p-4 mx-5 max-w-auto hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
          Service
        </li>
        <li className="p-4 mx-5 max-w-auto hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
          Contact
        </li>
        <li className="p-4 mx-5 max-w-auto hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
          About
        </li>
      </ul>

      {/* signUp/Login buttons */}
      <div className="md:flex hidden w-auto">
        <button className="bg-[#fff] font-bold w-[80px] rounded-md mx-3 px-5 py-3 hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
          Login
        </button>
        <button className="bg-[#CF6A34] text-[#fff] font-bold w-[80px] rounded-md mx-3 px-5 py-3">
          Sign Up
        </button>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* mobile menu */}
      <div
        className={
          nav
            ? "fixed bg-[#00300] left-0 top-0 w-[50%] h-[100%] border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500"
            : "fixed ease-in-out duration-500 left-[-100%]"
        }
      >
        <h1 className="flex text-xl py-[20px] border-b border-gray-700 font-bold h-[65px] text-[#000] m-4">
          {" "}
          <FaHamburger className="mx-[5px]" size={25} /> Meal{" "}
          <span className="text-[#CF6A34] mx-1">Planner</span>
        </h1>

        <ul className="p-4 uppercase">
          <li className="p-4 border-b text-black border-gray-700 hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
            Home
          </li>
          <li className="p-4 border-b text-black border-gray-700 hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
            Service
          </li>
          <li className="p-4 border-b text-black border-gray-700 hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
            Contact
          </li>
          <li className="p-4 text-black hover:text-[#CF6A34] hover:text-xl transition duration-300 hover:underline">
            About
          </li>

          <div className="mt-[250px] buttons">
            <button className="bg-[#fff]  font-bold my-[20px] w-full rounded-md px-5 py-3 hover:text-[#CF6A34] border hover:border-black hover:text-xl transition duration-300 hover:underline">
              Login
            </button>
            <button className="bg-[#CF6A34] text-[#fff] font-bold w-full rounded-md px-5 py-3 hover:text-xl">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
