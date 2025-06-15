


import React from 'react';
import { FaLongArrowAltDown } from "react-icons/fa";
import { MdNetworkCell } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

function Clients() {
  return (
    <div className='w-[90%] mx-auto my-6 pt-20'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-semibold'>Clients</h1>
        <button className='bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded font-medium'>
          + Add Client
        </button>
      </div>

      {/* Table Section with Border */}
      <div className='border border-gray-300 p-5 rounded-lg shadow'>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white'>
            {/* Full sky blue thead */}
            <thead className='bg-sky-300 w-full'>
              <tr>
                <th className='px-6 py-3 text-left font-semibold text-gray-800 border-b w-[25%]'>Company Name</th>
                <th className='px-6 py-3 text-left font-semibold text-gray-800 border-b w-[25%]'>
                  <div className='flex items-center gap-2'>
                    <FaLongArrowAltDown />
                    <MdNetworkCell />
                    Site
                  </div>
                </th>
                <th className='px-6 py-3 text-left font-semibold text-gray-800 border-b w-[25%]'>No. of Asset</th>
                <th className='px-6 py-3 text-left font-semibold text-gray-800 border-b w-[10%]'></th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              {[
                ["Google", 0, 0],
                ["Job client add", 1, 1],
                ["Ster", 0, 0],
                ["Sterling Infotech", 3, 3],
                ["test", 0, 0],
              ].map(([name, site, asset], i) => (
                <tr key={i} className='border-t border-gray-200 hover:bg-gray-100'>
                  <td className='px-6 py-3 '>{name}</td>
                  <td className='px-6 py-3 '>{site}</td>
                  <td className='px-6 py-3 '>{asset}</td>
                  <td className='px-6 py-3'>
                    <div className='flex gap-2'>
                      <a href="" className='p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200'>
                        <LuEye />
                      </a>
                      <a  href="" className='p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200'>
                        <GoPencil />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-end gap-4 mt-5 mb-6'>
          <button className='flex items-center gap-2 px-4 py-1 border rounded hover:bg-gray-100 text-sm'>
            <FaLessThan /> Prev
          </button>
          <button className='flex items-center gap-2 px-4 py-1 border rounded hover:bg-gray-100 text-sm'>
            Next <FaGreaterThan />
          </button>
        </div>

        {/* Page Info */}
        <div className='text-sm text-gray-600 mt-2 flex justify-end mb-8'>
          Page 1 of 1, showing 5 record(s) out of 5 total
        </div>
      </div>
    </div>
  );
}

export default Clients;
