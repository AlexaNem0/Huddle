import React from "react";
import Screen from "../assets/images/illustration-mockups.svg";

const Description = () => {
  return (
    <div className="text-white flex flex-col lg:justify-between items-center lg:flex-row gap-5 lg:gap-8">
      <img src={Screen} alt="" />
      <div className="lg:flex-col lg:flex lg:gap-6 lg:text-left ">
        <h1 className="text-4xl font-bold lg:text-5xl mb-3 lg:mb-0">
          Build The Community Your Fans Will Love
        </h1>
        <p className="mb-3 lg:mb-0">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button
          className="w-2/3 px-4 py-2  text-[#674BAF] bg-white   rounded-full hover:bg-[#E882E8]
        hover:text-white focus:outline-none focus:shadow-outline md:text-base"
          type="submit"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Description;
