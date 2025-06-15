// import React from "react";
// import Logo from "./assets/logo.svg";
// import { IoIosSearch } from "react-icons/io";
// import { MdLogout } from "react-icons/md";

// const Header = () => {
//   return (
//     <>
//       <div className="bg-[#272d34] flex items-center gap-[23%] px-[20px] text-white justify-center  relative md:fixed top-0 left-0 w-full z-10">
//         <div className="w-[7%] ">
//           <img src={Logo} alt="" className="w-full h-full" />
//         </div>
//         <div className="ml-[20px]">
//           <IoIosSearch className="text-white text-2xl absolute top-[15px] ml-2 " />
//           <input
//             type="text"
//             className="bg-[#2a3f50] w-[400px] py-[6px]  px-[30px] rounded-[7px]"
//           />
//         </div>
//         <div className=" text-[15px] hidden md:block ">
//       <div className="flex items-center  gap-3.5 justify-center">
//             <span className="text-white">
//             <h3>Welcome back,Clark Kelly!</h3>
//           </span>
//           <a href="">Logout</a>
//           <MdLogout />
//       </div>
//         </div>

//         <div className="md:hidden text-black p-1 rounded-xl text-3xl bg-white">
//             <a href="#">&#8801;</a>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
import React from "react";
import Logo from "./assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[#272d34] text-white w-full fixed top-0 left-0 z-10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        
        {/* Logo */}
        <div className="w-24">
          <img src={Logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Search Box */}
        <div className="relative flex-1 max-w-md w-full hidden sm:block">
          <IoIosSearch className="text-white text-xl absolute top-2.5 left-3" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#2a3f50] w-full py-2 px-10 rounded-md outline-none"
          />
        </div>

        {/* User Info & Logout */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <h3>Welcome back, <strong>Clark Kelly!</strong></h3>
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-400">
            <a href="#">Logout</a>
            <MdLogout className="text-xl" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-black p-2 rounded-lg text-2xl bg-white">
          <button aria-label="menu">&#8801;</button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden mt-3">
        <div className="relative w-full">
          <IoIosSearch className="text-white text-xl absolute top-2.5 left-3" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#2a3f50] w-full py-2 px-10 rounded-md outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
