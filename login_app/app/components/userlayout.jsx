// components/adminLayout.js

import React from "react";
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserLayout = ({ children }) => {
  const router = useRouter();
  const logout = () => {
    // Implement logout logic here (e.g., remove authentication token, clear session)
    router.push("/login");
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
            className="w-60 h-30 mx-4"
          />
          {/* <h1 className="text-xl font-bold mx-auto">Company</h1> */}
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2">
          <li>
            <Link href="/user" className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/user/applications" className="text-lg">
              Applications
            </Link>
          </li>
          <li>
            <Link href="/user/tenders" className="text-lg">
              Apply Tenders
            </Link>
          </li>
          <li>
            <Link href="/user/profile" className="text-lg">
              Update profile
            </Link>
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
            <h1 className="text-xl font-bold">Company</h1>
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

export default UserLayout;
