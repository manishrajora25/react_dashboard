import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { RxCross2 } from 'react-icons/rx';

function Othermodal({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    onClose(); // Close modal after submit (optional)
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[40%] p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Add User</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl hover:text-black">
            <RxCross2 />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Role Type</label>
            <select
              name="role"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Status</label>
            <select
              name="status"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-start space-x-4 mt-4">
            <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
              Add User
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 px-5 py-2 rounded hover:underline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('root-modal')
  );
}

export default Othermodal;
