import React from "react";
import Mockup from "./Mockup";

const Description = () => {
  return (
    <div className="flex flex-col justify-evenly items-center lg:flex-row max-w-7xl ">
      <Mockup />
      <div className="text-white  flex flex-col justify-evenly items-center gap-4 mx-4 md:gap-6 lg:w-1/2 lg:items-start ">
        <h1 className="text-3xl font-bold text-center md:text-4xl lg:text-left ">
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-center text-sm md:text-xl lg:text-left">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button
          className="w-2/3 px-4 py-2  text-[#674BAF] bg-white rounded-full hover:bg-[#E882E8]
        hover:text-white focus:outline-none focus:shadow-outline md:text-base md:mt-3 lg:w-1/2"
          type="submit"
        >
          <a href="https://www.frontendmentor.io/home" target="blank">
            Register
          </a>
        </button>
      </div>
    </div>
  );
};

export default Description;
