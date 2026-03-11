import React from "react";
import logo from "../assets/images/logo.svg";
import unitIcon from "../assets/images/icon-units.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex">
        <img src={logo} alt="Weather logo" className="w-38" />
      </div>
      <button className="flex items-center space-x-2 bg-(--neutral-700) px-2 py-1 rounded ">
        <img src={unitIcon} alt="Units icon" />
        <p className=" border-none text-[14px]">Units</p>

        <div className="border-none ">
          {" "}
          <RiArrowDropDownLine />
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
