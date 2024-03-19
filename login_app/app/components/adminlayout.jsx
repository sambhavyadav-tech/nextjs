// components/adminLayout.js

import React from "react";
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const logout = () => {
    // Implement logout logic here (e.g., remove authentication token, clear session)
    router.push("/login");
  };

  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleUserDropdown = () => {
      setShowUserDropdown(prevState => !prevState);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="bg-gray-800 text-white w-64 py-4 px-4 flex flex-col fixed h-full">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <img
            src="../../Gold.svg"
            alt="Logo"
            className="w-70 h-70 mr-3 p-3"
          />
          {/* <h1 className="text-xl font-bold mx-auto">Company</h1> */}
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2">
          <li>
            <Link href="/admin" className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/admin/applications" className="text-lg">
              View Applications
            </Link>
          </li>
          <li>
            <Link href="/admin/tenders" className="text-lg">
              View Tenders
            </Link>
          </li>
          <li>
            <Link href="/admin/addTenders" className="text-lg">
              Add Tenders
            </Link>
          </li>

          <li>
            {/* User dropdown */}
            <div className="relative">
              <button
                onClick={toggleUserDropdown}
                className="text-lg block hover:text-gray-300 focus:outline-none"
              >
                Users
              </button>
              {/* User dropdown content */}
              {showUserDropdown && (
                <div className="absolute left-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-md">
                  <a
                    href="/admin/addUser"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Add User
                  </a>
                  <a
                    href="/admin/userList"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    User List
                  </a>
                </div>
              )}
            </div>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          className="mt-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
          onClick={() => logout()}
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white py-4 px-4 mb-2 flex justify-between items-center">
          <div className="flex-grow flex justify-center">
            <h1 className="text-xl font-bold">Welcome, The Ballard Pier Pvt. Ltd.</h1>
          </div>
          <div>
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg mr-4"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
