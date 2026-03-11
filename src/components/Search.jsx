import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="mt-12">
      <h2 className=" leading-16 text-center text-6xl md:text-4xl mb-5 max-w-80 md:max-w-150 mx-auto">
        How's the sky looking today?
      </h2>

      <form className="flex items-center justify-center flex-col md:flex-row ">
        <div className="flex px-6 py-4 items-center   w-full md:w-[50%] bg-(--neutral-700) rounded-lg mb-4 md:mb-0">
          <div className="text-gray-400">
            <IoIosSearch size={25} />
          </div>
          <input
            type="text"
            className="pl-3 md:text-[16px]"
            placeholder="Search for a place..."
          />
        </div>
        <button className="bg-(--blue-500) md:text-[16px] w-full md:ml-5 md:w-[15%] rounded-lg px-6 py-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
