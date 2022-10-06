import React from "react";

const SearchAndFilters = () => {
  return (
    <div className="mx-[40px]  flex flex-col items-center justify-start text-white lg:flex-row lg:justify-between ">
      <input
        type="text"
        placeholder="Type here"
        className="input z-10 w-full rounded-[12px]
bg-[#24343D] py-[10px] font-poppins text-[17px] font-extralight placeholder:text-white sm:max-w-full sm:py-[30px] sm:px-[40px] sm:text-[20px] md:max-w-[358px] md:py-[40px] md:px-[40px] md:text-[20px]"
      />
      <div className="md:ml[192px] z-10 mt-[20px] flex w-full max-w-[800px] flex-col justify-around rounded-[12px] bg-[#24343D] py-[20px] px-[20px] sm:mt-[40px] sm:ml-0 sm:flex-row sm:items-center sm:py-[20px] md:mt-0 md:items-center md:py-[10px] ">
        <h1 className="font-poppins text-[20px] font-semibold sm:ml-[10px] sm:mr-4 sm:text-[20px] sm:font-bold md:ml-[20px] lg:text-[23px]">
          Filters
        </h1>
        <select className="mt-[20px] w-full rounded-[12px] border border-white bg-[#1F2D34] py-[14px] font-poppins text-[18px] font-normal sm:mr-4 sm:mt-0 sm:max-w-[150px] sm:rounded-[12px] sm:py-[14px] sm:text-[18px] md:mt-0 md:max-w-[160px] md:rounded-[15px] md:py-[20px] md:text-[23px]">
          <option disabled selected>
            Coldest
          </option>
          <option>Warm</option>
          <option>Hot</option>
          <option>Cool</option>
        </select>
        <select className="mt-[20px] w-full rounded-[12px] border border-white bg-[#1F2D34] py-[14px] font-poppins text-[18px] font-normal sm:mr-4 sm:mt-0 sm:min-w-[150px] sm:max-w-[160px] sm:rounded-[12px] sm:py-[14px] sm:text-[18px] md:mt-0 md:max-w-[160px] md:rounded-[15px] md:py-[20px] md:text-[23px]">
          <option disabled selected>
            10°C - 20°C
          </option>
          <option>10°C - 20°C</option>
          <option>Hot</option>
          <option>Cool</option>
        </select>
        <select className="mt-[20px] w-full rounded-[12px] border border-white bg-[#1F2D34] py-[14px] font-poppins text-[18px] font-normal sm:mr-2 sm:mt-0 sm:max-w-[150px] sm:rounded-[12px] sm:py-[14px] sm:text-[18px] md:mt-0 md:max-w-[160px] md:rounded-[15px] md:py-[20px] md:text-[23px]">
          <option disabled selected>
            Rainy
          </option>
          <option>Rainy</option>
          <option>Hot</option>
          <option>Cool</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilters;
