import React from "react";

const SearchAndFilters = () => {
  return (
    <div className="mx-[40px]  flex flex-row items-center justify-between text-white">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-[358px]
rounded-[12px] bg-[#24343D] py-[40px] px-[40px] font-poppins text-[20px] font-extralight placeholder:text-white z-10"
      />
      <div className="ml-[192px] flex w-full max-w-[800px] items-center justify-around rounded-[12px] bg-[#24343D] py-[20px] z-10">
        <h1 className="ml-[30px] font-poppins text-[23px] font-bold">
          Filters
        </h1>
        <select className="  w-full max-w-[160px] rounded-[15px] border border-white bg-[#1F2D34] py-[20px] font-poppins text-[23px] font-normal">
          <option disabled selected>
            Coldest
          </option>
          <option>Warm</option>
          <option>Hot</option>
          <option>Cool</option>
        </select>
        <select className="  w-full max-w-[180px] rounded-[15px] border border-white bg-[#1F2D34] py-[20px] font-poppins text-[23px] font-normal">
          <option disabled selected>
            10°C - 20°C
          </option>
          <option>10°C - 20°C</option>
          <option>Hot</option>
          <option>Cool</option>
        </select>
        <select className="  mr-[30px] w-full max-w-[160px] rounded-[15px] border border-white bg-[#1F2D34] py-[20px] font-poppins text-[23px] font-normal">
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
