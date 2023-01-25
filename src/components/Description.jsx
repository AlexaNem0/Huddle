import React from "react";

const Description = () => {
  return (
    <div className="text-white flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">
        Build The Community Your Fans Will Love
      </h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button
        className="w-2/3 px-4 py-2  text-[#674BAF] bg-white   rounded-full hover:bg-[#E882E8]
        hover:text-white focus:outline-none focus:shadow-outline md:text-base"
        type="submit"
      >
        Register
      </button>
    </div>
  );
};

export default Description;