import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";

const Technicians = () => {
  return (
    <div className=" mt-4.5 pt-1.5 p-3 w-[99%] full min-h-screen">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Technicians</h1>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md">
            + Add Technician
          </button>
        </div>

        <div className="rounded-md border border-gray-200 overflow-x-auto bg-white p-6">
          <table className="w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="bg-blue-200 text-gray-800">
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Tags</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Contact Number</th>
                <th className="px-6 py-3">Insurance</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">Support</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">a@test.com</td>
                <td className="px-6 py-4">5454564</td>
                <td className="px-6 py-4">
                  <span className="bg-green-500 text-white px-6 py-1 rounded-md">Valid</span>
                </td>
                <td className="px-6 py-4 flex gap-2 justify-center">
                  <button className="border p-2 rounded hover:bg-gray-100"><HiOutlinePencil /></button>
                  <button className="border p-2 rounded hover:bg-gray-100"><FaRegEye /></button>
                </td>
              </tr>

              <tr className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">SXDA</td>
                <td className="px-6 py-4 flex flex-wrap gap-2">
                  <span className="border px-3 py-1 rounded-full">Spraybooth</span>
                  <span className="border px-3 py-1 rounded-full">Electrical</span>
                  <span className="border px-3 py-1 rounded-full">Maintenance</span>
                </td>
                <td className="px-6 py-4">anshu@sterlinginfotech.com</td>
                <td className="px-6 py-4">9468590655</td>
                <td className="px-6 py-4">
                  <span className="bg-green-500 text-white px-6 py-1 rounded-md">Valid</span>
                </td>
                <td className="px-6 py-4 flex gap-2 justify-center">
                  <button className="border p-2 rounded hover:bg-gray-100"><HiOutlinePencil /></button>
                  <button className="border p-2 rounded hover:bg-gray-100"><FaRegEye /></button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5 flex justify-between items-center text-sm text-gray-600 border-t pt-4">
            <div>Page 1 of 1, showing 2 record(s) out of 2 total</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded text-gray-400" disabled>
                &lt; Prev
              </button>
              <button className="px-3 py-1 border rounded text-gray-400" disabled>
                Next &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technicians;
