import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa6";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="w-full h-14 border-b border-gray-200 flex items-center px-5">
      <div className="w-1/3">
        <img className="w-24 ml-[200px]" src="/Logo.png" alt="Instagram Logo" />
      </div>
      <div className="w-1/3 flex justify-start ml-[-20px]">
        <div className="w-[250px] h-8 rounded-lg flex items-center px-3 border-2 border-gray-100">
          <IoSearchOutline className="text-gray-500 size-4" />
          <span className="text-gray-500 text-sm ml-2">Search</span>
        </div>
      </div>

      <div className="w-1/3 flex jus tify-end items-center gap-5">
        <GoHomeFill className="size-5" />
        <RiMessengerLine className="size-5" />
        <AiOutlinePlusSquare className="size-5" />
        <FaRegCompass className="size-5" />
        <FaRegHeart className="size-5" />
        <CgProfile className="size-5 mr-[200px]" />
      </div>
    </nav>
  );
};

export default Navbar;
