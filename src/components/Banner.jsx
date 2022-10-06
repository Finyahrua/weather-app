import React from "react";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <p className="sm:text-[30px] md:text-[40px] font-poppins text-[25px] text-white  sm:font-semibold before:sm:py-6">
            Seeing the weather of the whole world with{" "}
            <span className="bg-gradient-to-r from-[#CAECFF] to-[#78CFFF] bg-clip-text text-transparent">
              Dark Weather!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
