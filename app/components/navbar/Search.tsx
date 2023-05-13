"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import RoundedXWrapper from "@/app/components/navbar/RoundedXWrapper";

const Search = () => {
  return (
    <RoundedXWrapper>
      <div className={"text-sm font-semibold px-6"}>Anywhere</div>
      <div
        className={
          "hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center"
        }
      >
        Any week
      </div>
      <div
        className={
          "flex text-sm pl-6 pr-2 text-gray-600 flex-row gap-3 items-center"
        }
      >
        <div className={"hidden sm:block"}>Add guests</div>

        <div className="p-2 text-white rounded-full bg-rose-500 flex items-center justify-center">
          <FaSearch />
        </div>
      </div>
    </RoundedXWrapper>
  );
};

export default Search;
