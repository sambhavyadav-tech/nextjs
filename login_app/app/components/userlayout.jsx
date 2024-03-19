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
            <h1 className="text-xl font-bold">Welcome, Laxmi Marine Services Pvt. Ltd.</h1>
          </div>
          <div>

          <button class="relative bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
  
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V8a6 6 0 10-12 0v6c0 .386-.149.763-.405 1.055L4 17h5m1 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
  
  <span class="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">9</span>
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
