import React from "react";
import Picture from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="mt-4 lg:ml-[-40rem] xl:ml-[-50rem] 2xl:ml-[-60rem]">
      <img src={Picture} alt="" />
    </div>
  );
};

export default Logo;
