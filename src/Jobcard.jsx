const Jobcard = () => {
  return (
    <div className="pt-30 font-sans min-h-screen  px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col sm:flex-row justify-around items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Job Cards</h1>
        <div className="flex flex-wrap items-center gap-6">
          <button className="text-sm font-medium text-gray-600 px-3 py-2 border border-gray-300 rounded-md">
            + Add Client
          </button>
          <button className="text-sm font-medium text-gray-600 px-3 py-2 border border-gray-300 rounded-md">
            + Add Site
          </button>
          <button className="text-sm font-medium text-gray-600 px-3 py-2 border border-gray-300 rounded-md">
            + Add Asset
          </button>
          <button className="text-sm font-medium text-blue-600 px-3 py-2 border border-blue-300 rounded-md">
            + Add Recurring
          </button>
          <button className="text-sm font-medium text-blue-600 px-3 py-2 border border-blue-300 rounded-md">
            + Add Job Card
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
        <div className="flex justify-between items-center bg-gray-800 text-white p-6 rounded-lg w-72 h-30 shadow">
          <div>
            <h1 className="text-sm mb-1">Open Job Cards</h1>
            <p className="text-3xl font-bold text-cyan-400">0</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center text-sm">
            0%
          </div>
        </div>

        <div className="flex justify-between items-center bg-white p-6 rounded-lg w-72 h-30 shadow border border-gray-200">
          <div>
            <h1 className="text-sm text-gray-800 mb-1">In Progress</h1>
            <p className="text-3xl font-bold text-yellow-400">1</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-yellow-400 border-t-transparent rotate-[100deg] flex items-center justify-center text-sm text-gray-800">
            33%
          </div>
        </div>

        <div className="flex justify-between items-center bg-white p-6 rounded-lg w-72 h-30 shadow border border-gray-200">
          <div>
            <h1 className="text-sm text-gray-800 mb-1">Completed</h1>
            <p className="text-3xl font-bold text-green-500">2</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-green-400 border-t-transparent rotate-[240deg] flex items-center justify-center text-sm text-gray-800">
            67%
          </div>
        </div>
        
      </div>






 <div className="pt-10 w-full max-w-4xl mx-auto">
      <div className="flex space-x-8 text-sm font-medium border-b border-gray-200 mb-4 mt">
        <div className="pb-2 border-b-2 border-blue-500 text-blue-600 cursor-pointer">Active</div>
        <div className="pb-2 text-gray-600 hover:text-blue-500 cursor-pointer">Complete</div>
        <div className="pb-2 text-gray-600 hover:text-blue-500 cursor-pointer">Recurring</div>
      </div>

      <div className="overflow-x-auto mt-12">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-blue-10 0 text-gray-800 font-semibold rounded-[5px]">
            <tr>
              <th className="p-3">Ticket No</th>
              <th className="p-3">Client</th>
              <th className="p-3">Site</th>
              <th className="p-3">Asset</th>
              <th className="p-3">Date Allocated</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Job Type</th>
              <th className="p-3">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">30000</td>
              <td className="p-3">
                <div>Sterling</div>
                <div>Infotech</div>
              </td>
              <td className="p-3">
                <div>Client</div>
                <div>Site</div>
              </td>
              <td className="p-3">test</td>
              <td className="p-3">2 May 2025</td>
              <td className="p-3">2 May 2025</td>
              <td className="p-3">Installation</td>
              <td className="p-3">
                <div className="bg-yellow-400 text-white font-semibold rounded px-3 py-2 text-center w-24">
                  <div>Date</div>
                  <div>Confirmed</div>
                </div>
              </td>
              <td className="p-3">
                <button className="border border-gray-300 rounded p-2 hover:bg-gray-100">
                  →
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

      
    
    </div>
  );
};

export default Jobcard;
