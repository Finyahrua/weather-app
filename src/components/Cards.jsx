import React from "react";
import { Clouds, Sun, Thunder } from "../assets/images";

const Cards = () => {
  return (
    <div className="mx-[40px]  flex flex-row justify-between">
      <div className="card relative mt-[80px] flex min-h-[426px] w-[335px] flex-col items-start justify-end overflow-visible  bg-[#24353E] shadow-xl">
        <img
          src={Clouds}
          alt=""
          className="absolute -right-[110px] -top-[135px]  h-[480px] min-h-fit max-w-max"
        />
        <div className="mx-[50px] flex flex-col justify-evenly pb-10 text-white">
          <p className="mb-2 font-poppins text-[40px] font-bold">
            Tehran <span className="text-[40px] font-thin">35°C </span>
          </p>
          <p className="font-regular mb-5 font-poppins text-[25px]">
            wind speed :<span className="text-[25px] font-thin">11 km </span>
          </p>
          <p className="font-regular mb-5 font-poppins text-[25px]">
            Tuesday : <span className="text-[25px] font-thin">19:52</span>
          </p>
          <p className="font-regular font-poppins text-[25px]">Cloudy</p>
        </div>
      </div>
      <div className="card relative mt-[80px] flex min-h-[426px] w-[335px] flex-col items-start justify-end overflow-visible  bg-[#24353E] shadow-xl">
        <img
          src={Sun}
          alt=""
          className="absolute -right-[135px] -top-[125px]  h-[460px] min-h-fit max-w-max"
        />
        <div className="mx-[50px] flex flex-col justify-evenly pb-10 text-white">
          <p className="mb-2 font-poppins text-[40px] font-bold">
            Qom <span className="text-[40px] font-thin">41°C </span>
          </p>
          <p className="font-regular mb-5 font-poppins text-[25px]">
            wind speed :<span className="text-[25px] font-thin">5 km </span>
          </p>
          <p className="font-regular mb-5 font-poppins text-[25px]">
            Tuesday : <span className="text-[25px] font-thin">19:52</span>
          </p>
          <p className="font-regular font-poppins text-[25px]">Sunny</p>
        </div>
      </div>
      <div className="card relative mt-[80px] flex min-h-[426px] w-[335px] flex-col items-start justify-end overflow-visible  bg-[#24353E] shadow-xl">
        <img
          src={Thunder}
          alt=""
          className="absolute -right-[100px] -top-[90px]  h-[400px] min-h-fit max-w-max"
        />
        <div className="mx-[50px] flex flex-col justify-evenly pb-10 text-white">
          <p className="mb-2 font-poppins text-[40px] font-bold">
            Gilan <span className="text-[40px] font-thin">21°C </span>
          </p>
          <p className="font-regular mb-5 font-poppins text-[25px]">
            wind speed :<span className="text-[25px] font-thin">11 km </span>
          </p>
          <p className="font-regular mb-5 font-poppins text-[25px]">
            Tuesday : <span className="text-[25px] font-thin">19:52</span>
          </p>
          <p className="font-regular font-poppins text-[25px]">Rainy</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
