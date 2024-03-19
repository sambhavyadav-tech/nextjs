// components/adminLayout.js

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
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
    <div className="flex">
      {/* Sidebar */}
      <nav className="bg-gray-800 text-white w-64 py-4 px-4 flex flex-col fixed h-full">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <img
            src="../../Gold.svg"
            alt="Logo"
            className="w-100 h-100 mr-2 p-2"
          />
          {/* <h1 className="text-xl font-bold mx-auto">Company</h1> */}
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2 items-end">
          <li>
            <Link href="#" className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-lg">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white py-4 px-4 mb-2 flex justify-between items-center">
          <div className="flex-grow flex justify-center">
            <h1 className="text-xl font-bold">The Ballard Pier, Tenders</h1>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
