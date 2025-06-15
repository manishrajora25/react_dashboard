import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';

const Archive = () => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
   
      <div>
        <h1 className="text-[27px] font-bold m-[50px] mt-30">Archive</h1>
        <div className="flex gap-4 mx-[50px]">
          {/* Button 1 */}
          <button className="flex items-center justify-between w-[300px] p-4 border rounded-lg hover:shadow-md cursor-pointer">
            <div className="flex items-center gap-2">
              {/* Archive Icon */}
              <FiArchive className="text-xl text-gray-500" />
              <span className="font-medium">Support Ticket Archive</span>
            </div>
            {/* Right Arrow Icon */}
            <FiArrowRight className="text-xl text-gray-500" />
          </button>

          {/* Button 2 */}
          <button className="flex items-center justify-between w-[300px] p-4 border rounded-lg hover:shadow-md cursor-pointer">
            <div className="flex items-center gap-2">
              {/* Archive Icon */}
              <FiArchive className="text-xl text-gray-500" />
              <span className="font-medium">Job Card Archive</span>
            </div>
            {/* Right Arrow Icon */}
            <FiArrowRight className="text-xl text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Archive;
