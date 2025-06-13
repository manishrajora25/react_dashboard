import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FiArchive } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { BsBox2 } from "react-icons/bs";
import { GoTools } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { CiFaceSmile } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      <div className="bg-sky-50">
        <div className="w-[280px] pt-[10px]  text-gray-700 min-h-screen   shadow-md">
        <ul className="pt-6 space-y-1 px-4 text-sm">
          <li  classname=" ">
            <a
              href="/"
              className="flex items-center gap-3  rounded-md bg-sky-100 text-sky-600 font-medium text-[12px] px-[20px] py-[10px]"
            >
              <RxDashboard className="text-lg" /> Dashboard
            </a>
          </li>

          <li  classname="">
            <a
              href="/support"
              className="flex items-center justify-between px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <span className="flex items-center gap-3">
                <CiBookmark className="text-lg"></CiBookmark> Support Tickets
              </span>
              <span className="text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full">
                5
              </span>
            </a>
          </li>

          <li  classname="">
            <a
              href="/jobcard"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <TbShoppingBag className="text-lg" /> Job Cards
            </a>
          </li>

          <li  classname="">
            <a
              href="/clients"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <CiFaceSmile className="text-lg" /> Clients
            </a>
          </li>

          <li  classname="">
            <Link
              to="Assets"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <CiFolderOn className="text-lg" /> Assets
            </Link>
          </li>

          <li  classname="">
            <Link
              to="Contact"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <LuPhone className="text-lg" /> Contacts
            </Link>
          </li>

          <li  classname="">
            <a
              href="/technicians"
              className="flex items-center justify-between px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <span className="flex items-center gap-3">
                <GoTools className="text-lg" /> Technicians
              </span>
              <span className="text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full">
                2
              </span>
            </a>
          </li>

          <li  classname="">
            <a
              href="/clients"
              className="flex items-center justify-between px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <span className="flex items-center gap-3">
                <BsBox2 className="text-lg" /> To Invoice
              </span>
              <span className="text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full">
                0
              </span>
            </a>
          </li>

          <li  classname="">
            <a
              href="/Resoursec"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <CiFolderOn className="text-lg" /> Resources
            </a>
          </li>

          <li  classname="">
            <a
              href="/Archive"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <FiArchive className="text-lg" /> Archive
            </a>
          </li>

          <li  classname="">
            <a
              href="/Setting"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <IoSettingsOutline className="text-lg" /> Settings
            </a>
          </li>

          <li  classname="">
            <a
              href="/users"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <AiOutlineUser className="text-lg" /> Users
            </a>
          </li>

          <li  classname="">
            <a
              href="/"
              className="flex items-center gap-3 px-[20px] py-[10px] rounded-md hover:bg-blue-200 hover:text-blue-400 text-[12px]"
            >
              <MdLogout className="text-lg" /> Logout
            </a>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default LeftSideBar;
