import React from 'react';
import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import Portal from './Portal';

function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
     const closeModal = () => setIsModalOpen(false);

  return (
    <div className="  pt-[50px] w-[98%]">
      <div className="flex item-center justify-between">
      <h1 className="text-2xl font-bold mb-6">Support Tickets</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-2 py-2 border rounded-lg text-black-600 hover:bg-blue-100"  onClick={openModal}>
          <GoPlus /> Add Client
         
        </button>

        {isModalOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 p-[60px]"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-[45%] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-5">
              <h2 className="text-xl font-bold">Add Client</h2>
              <button
                className="text-gray-900 text-[30px] hover:text-gray-900 text-lg "
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Company Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter company name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">ABN</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter ABN"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter a location"
                />
              </div>
              <div className="flex items-center gap-2 mb-4 mt-[20px]">
                <input
                  type="checkbox"
                  id="single-site"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="single-site"
                  className="text-gray-800 font-bold text-[14px]"
                >
                  Single site company? Set as default site
                </label>
              </div>
              <div className="flex gap-4 mt-[30px]">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Client
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


        <button className="flex items-center gap-2 px-2 py-2 border rounded-lg text-black-600 hover:bg-blue-100"  >
          <GoPlus /> Add Site
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-black-600 hover:bg-blue-100" onClick={openModal}>
          <GoPlus /> Add Asset
        </button>

        {isModalOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-[70%] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-5">
              <h2 className="text-xl font-bold">Add Asset</h2>
              <button
                className="text-gray-900 text-[30px] hover:text-gray-900 text-lg"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>

            {/* Form */}
            <form>
              {/* Select Client and Site */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                >
                  <option>Select Client</option>
                  <option>Client 1</option>
                  <option>Client 2</option>
                </select>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                >
                  <option>Select Site</option>
                  <option>Site 1</option>
                  <option>Site 2</option>
                </select>
              </div>

              {/* Machine Name and Serial Number */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Type Machine Name"
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Type Serial Number"
                />
              </div>

              {/* Type Options */}
              <div className="grid grid-cols-5 gap-4 mb-4">
                <div className="flex items-center col-span-1">
                  <input type="checkbox" id="select-all" className="w-4 h-4" />
                  <label htmlFor="select-all" className="ml-2">Select All</label>
                </div>
                <button className="bg-blue-100 px-3 py-2 rounded">Sedan</button>
                <button className="bg-blue-100 px-3 py-2 rounded">SUV</button>
                <button className="bg-blue-100 px-3 py-2 rounded">
                  Hatchback
                </button>
                <button className="bg-blue-100 px-3 py-2 rounded">Utility</button>
              </div>

              {/* Make and Model */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Make (e.g., Toyota)"
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Model (e.g., Corolla)"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Asset
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

        
        <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-blue-600 hover:bg-blue-100">
          <GoPlus /> Add Ticket
        </button>
      </div>
      </div>

      {/* Ticket Summary */}
      <div className=" flex item-center justify-around mt-[50px] gap-6">
        {/* Open Tickets */}
        <div className="p-4 bg-gray-800 text-white rounded-lg w-[230px] h-[150px]">
          <h2 className="text-lg">Open Tickets</h2>
          <div className="flex items-center justify-around mt-4">
            <span className="text-4xl font-bold text-blue-400 ">5</span>
            <span className="text-blue-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold mb-[40px]">50%</span>
          </div>
        </div>

        {/* Working */}
        <div className="p-4 bg-white border rounded-lg w-[230px] h-[150px]">
          <h2 className="text-lg text-gray-800">Working</h2>
          <div className="flex items-center justify-around mt-4 ">
            <span className="text-4xl font-bold text-yellow-500">1</span>
            <span className="text-yellow-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold mb-[40px]">10%</span>
          </div>  
        </div>

        {/* On-site Technician */}
        <div className="p-4 bg-white border rounded-lg w-[230px] h-[180px]">
          <h2 className="text-lg text-gray-800">On-site Technician</h2>
          <div className="flex items-center justify-around mt-4">
            <span className="text-4xl font-bold text-orange-500">2</span>
            <span className="text-orange-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold mt-[40px]">20%</span>
          </div>
        </div>

        {/* Resolved */}
        <div className="p-4 bg-white border rounded-lg w-[230px] h-[150px]">
          <h2 className="text-lg text-gray-800">Resolved</h2>
          <div className="flex items-center justify-around mt-4">
            <span className="text-4xl font-bold text-green-500">1</span>
            <span className="text-green-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold mb-[40px]">10%</span>
          </div>
        </div>
      </div>



      <div className="mt-[70px] ">
        <ul className='flex gap-[70px] '>
          <li><a href="">Unresolved</a></li>
          <li><a href="">Open</a></li>
          <li><a href="">Working</a></li>
          <li><a href="">On-site-Technician</a></li>
          <li><a href="">Resolved</a></li>
        </ul>
      </div>






      <div className=" w-full">
  <table className="w-full border-collapse border border-gray-200">
    {/* Table Header */}
    <thead>
      <tr className="bg-blue-100 text-left text-[14px]">
        <th className="px-4 py-2 border-b border-gray-300 ">Ticket No.</th>
        <th className="px-4 py-2 border-b border-gray-300">Client Name</th>
        <th className="px-4 py-2 border-b border-gray-300">Client Site</th>
        <th className="px-4 py-2 border-b border-gray-300">Asset</th>
        <th className="px-4 py-2 border-b border-gray-300">Job Title</th>
        <th className="px-4 py-2 border-b border-gray-300">Age</th>
        <th className="px-4 py-2 border-b border-gray-300">Technicians</th>
        <th className="px-4 py-2 border-b border-gray-300">Status</th>
        <th className="px-4 py-2 border-b border-gray-300">Actions</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      <tr className="hover:bg-gray-200 text-sm">
        <td className="px-4 py-2 p-[20px]">10010</td>
        <td className="px-4 py-2 p-[20px]">Job Client Add</td>
        <td className="px-4 py-2 p-[20px]">TSC</td>
        <td className="px-4 py-2 p-[20px]">Asset 1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">28 Days</td>
        <td className="px-4 py-2 flex gap-2 mt-[10px]">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
            AJ
          </span>
          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold p-[20px]">
            U
          </span>
        </td>
        <td className="px-4 py-2">
          <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">Open</span></a>
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /></i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>

      {/* More Rows */}
      <tr className="hover:bg-gray-200 text-sm">
        <td className="px-4 py-2 p-[20px]">10009</td>
        <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
        <td className="px-4 py-2 p-[20px]">Sterling</td>
        <td className="px-4 py-2 p-[20px]" >Testing1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
        <td className="px-4 py-2 flex gap-2 mt-[5px]">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
            AJ
          </span>
        </td>
        <td className="px-4 py-2">
         <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /> </i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>
    </tbody>


    <tbody>
      <tr className="hover:bg-gray-200 text-sm">
        <td className="px-4 py-2 p-[20px]">10010</td>
        <td className="px-4 py-2 p-[20px]">Job Client Add</td>
        <td className="px-4 py-2 p-[20px]">TSC</td>
        <td className="px-4 py-2 p-[20px]">Asset 1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">28 Days</td>
        <td className="px-4 py-2 flex gap-2 mt-[10px]">
          
        </td>
        <td className="px-4 py-2">
          <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">Open</span></a>
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /></i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>

      {/* More Rows */}
      <tr className="hover:bg-gray-200 text-sm">
        <td className="px-4 py-2 p-[20px]">10009</td>
        <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
        <td className="px-4 py-2 p-[20px]">Sterling</td>
        <td className="px-4 py-2 p-[20px]" >Testing1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">39 Days</td>
        <td className="px-4 py-2 flex gap-2 mt-[5px]">
          
        </td>
        <td className="px-4 py-2">
         <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /> </i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>
    </tbody>



    <tbody>
      <tr className="hover:bg-gray-200 text-sm">
        <td className="px-4 py-2 p-[20px]">10010</td>
        <td className="px-4 py-2 p-[20px]">Job Client Add</td>
        <td className="px-4 py-2 p-[20px]">TSC</td>
        <td className="px-4 py-2 p-[20px]">Asset 1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">28 Days</td>
        <td className="px-4 py-2 flex gap-2 mt-[10px]">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
            AJ
          </span>
          <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center font-bold p-[17px] text-white">
  AK
</span>

        </td>

        <td className="px-4 py-2 flex gap-2 ">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
            SJ
          </span>
          <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center font-bold p-[17px] text-white">
  AJ
</span>

        </td>
        <td className="">
          <a href=""><span className="bg-orange-500 text-white px-2 py-1 rounded-[4px] text-lg]">On site Technician</span></a>
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /></i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>

      {/* More Rows */}
      <tr className="hover:bg-gray-200 text-sm">
        <td className="px-4 py-2 p-[20px]">10009</td>
        <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
        <td className="px-4 py-2 p-[20px]">Sterling</td>
        <td className="px-4 py-2 p-[20px]" >Testing1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
        <td className="px-4 py-2 flex gap-2 mt-[5px]">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
            AJ
          </span>
        </td>
        <td className="px-4 py-2">
         <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /> </i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>
    </tbody>

  </table>
</div>


    </div>
    

    
  );
}

export default Support;









// import React, { useState } from 'react';
// import Portal from './Portal';
// import { GoPlus } from 'react-icons/go';

// const Support = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="p-4">
//       <button
//         className="flex items-center bg-blue-400 gap-2 px-6 py-3 rounded-lg text-white hover:bg-blue-500"
//         onClick={openModal}
//       >
//         <GoPlus /> Add Client
//       </button>

//       {isModalOpen && (
//         <Portal>
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//             onClick={closeModal}
//           >
//             <div
//               className="bg-white p-6 rounded-lg w-[400px] shadow-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h2 className="text-xl font-bold mb-4">Add Client</h2>
//               <form>
//                 <label className="block mb-2">
//                   Name:
//                   <input
//                     type="text"
//                     className="border border-gray-300 p-2 rounded w-full mt-1"
//                   />
//                 </label>
//                 <button
//                   type="submit"
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Save
//                 </button>
//               </form>
//               <button
//                 className="mt-4 text-red-500 hover:underline"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </Portal>
//       )}
//     </div>
//   );
// };

// export default Support;
