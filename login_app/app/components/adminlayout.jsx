// components/adminLayout.js
import React, { Component } from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "./footer";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const logout = () => {
    // Implement logout logic here (e.g., remove authentication token, clear session)
    router.push("/login");
  };

  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleUserDropdown = () => {
    setShowUserDropdown((prevState) => !prevState);
  };

  return (
    <div className="flex-1 min-h-screen">
      {/* Sidebar */}
      <nav className="bg-gray-800 text-white w-60 py-2 px-10 flex flex-col fixed h-full">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <img src="../../Gold.svg" alt="Logo" className="w-70 h-70 mr-3 p-3" />
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
      <div className="ml-60 flex-1">
        {/* Navbar */}
        <nav className=" bg-gray-800 text-white py-4 px-4 mb-2 flex justify-between items-center w-800">
          <div className="flex-grow flex justify-center">
            <h1 className="text-xl font-bold">
              Welcome, The Ballard Pier Pvt. Ltd.
            </h1>
          </div>
          <div>
            <button class="relative bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V8a6 6 0 10-12 0v6c0 .386-.149.763-.405 1.055L4 17h5m1 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              <span class="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                9
              </span>
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
