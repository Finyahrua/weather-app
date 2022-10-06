import React from "react";

const NavBar = () => {
  return (
    <div className="navbar text-white ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost flex lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost font-poppins text-[30px] capitalize sm:ml-0 sm:text-[40px] ">
          Dark Weather
        </a>
      </div>
      <div className="navbar-center hidden font-poppins font-light lg:flex lg:text-[20px]">
        <ul className="menu menu-horizontal p-0  ">
          <li>
            <a className="font-semibold ">Home</a>
          </li>
          <li>
            <a className="font-extralight">Download App</a>
          </li>
          <li>
            <a className="font-extralight">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="invisible sm:navbar-end sm:visible sm:items-center sm:font-poppins">
        <a className=" rounded-[20px] border-none bg-gradient-to-r from-[#3A5E72] to-[#5C93B1]  py-[20px] px-[35px] text-[20px] font-medium hover:cursor-pointer hover:bg-gradient-to-r  hover:from-blue-500 hover:to-cyan-500">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default NavBar;
