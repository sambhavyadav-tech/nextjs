// components/adminLayout.js

import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const AdminLayout = ({ children }) => {
    const router = useRouter();
    const logout = () => {
        // Implement logout logic here (e.g., remove authentication token, clear session)
        router.push('/login');
    };

    return (
        <div className="flex">
        {/* Sidebar */}
        <nav className="bg-gray-800 text-white w-64 py-4 px-4 flex flex-col fixed h-full">
            {/* Logo */}
            <div className="flex items-center mb-8">
                {/* <img src="/logo.svg" alt="Logo" className="w-8 h-8 mr-2" /> */}
                <h1 className="text-xl font-bold">Company</h1>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-2">
            <li>
                    <Link href="/admin" className="text-lg">Home</Link>
                </li>
                <li>
                    <Link href="/admin/applications" className="text-lg">Show Applications</Link>
                </li>
                <li>
                    <Link href="/admin/tenders" className="text-lg">Show Tenders</Link>
                </li>
                <li>
                    <Link href="/admin/addTenders" className="text-lg">Add Tenders</Link>
                </li>

            </ul>

            {/* Logout Button */}
            <button className="mt-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg" onClick={() => logout()}>
                Logout
            </button>
        </nav>

        {/* Main Content */}
        <div className="ml-64 flex-1">
            {/* Navbar */}
            <nav className="bg-gray-800 text-white py-4 px-4 mb-2 flex justify-between items-center">
                <div>
                    {/* You can keep this empty if you don't want to show any content on the left side */}
                </div>
                <div className="flex items-center">
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg mr-4" onClick={() => logout()}>
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
