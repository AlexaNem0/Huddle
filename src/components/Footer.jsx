import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" flex justify-center lg:justify-end gap-4 mb-4 ">
      <a
        className="text-white hover:text-[#E882E8]
        hover:translate-y-[-5px]"
        href="https://www.facebook.com/"
        target="blank"
      >
        <FaFacebook style={{ fontSize: "2rem" }} />
      </a>
      <a
        className="text-white hover:text-[#E882E8] hover:translate-y-[-5px]"
        href="https://twitter.com/"
        target="blank"
      >
        <AiFillTwitterCircle style={{ fontSize: "2rem" }} />
      </a>
      <a
        className="text-white hover:text-[#E882E8] hover:translate-y-[-5px]"
        href="https://www.instagram.com/"
        target="blank"
      >
        <FaInstagram style={{ fontSize: "2rem" }} />
      </a>
    </div>
  );
};

export default Footer;
