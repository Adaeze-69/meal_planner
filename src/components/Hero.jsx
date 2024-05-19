import React from "react";
import Dish1 from '../assets/dish-1.png'
import Dish2 from '../assets/dish-2.png'
import Dish3 from '../assets/dish-3.png'

const Hero = () => {
  return (
    <div className="mx-auto mt-[50px] max-w-[1000px]  h-[400px] md:flex justify-between">
      <div className="h-[400px] md:mx-0 mx-auto w-[500px]">
        <div className="h-[225px] space-y-10">
          <h1 className="w-full h-[120px] py-2 text-[25px]">
            No More{" "}
            <span className="font-bold">
              "What's for <br /> Dinner?" Stress-Free Meals <br /> Made
            </span>{" "}
            <span className="text-[#CF6A34] font-bold">Simple</span>.
          </h1>

          <ul className="list-disc ml-6 space-y-2 text-gray-70">
            <li className="text-ellipsis text-gray-700">
              Let us take the guesswork out of meal planning
            </li>
            <li className="text-ellipsis text-gray-700">
              Unleash your inner chef with our easy-to-use tools.
            </li>
            <li className="text-ellipsis text-gray-700">
              Experience the joy of organized and stress-free meals.
            </li>
          </ul>
        </div>

        <button className="bg-[#CF6A34] text-[#fff] font-bold w-[150px] h-[35px] mt-[140px] px-5 py-3">
          Plan your meal
        </button>
      </div>

      <div className="h-full mx-auto md:mx-0 md:w-[400px] flex justify-center space-x-3 mt-5 md:mt-0 md:space-x-5">
        <img className="h-full w-[30%]" src={Dish1} alt="dish1" />
        <img className="h-full w-[30%]" src={Dish2} alt="dish1" />
        <img className="h-full w-[30%]" src={Dish3} alt="dish1" />
      </div>
    </div>
  );
};

export default Hero;
