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
        <div>
            <nav className="bg-gray-800 text-white py-4 px-4 mb-8 flex justify-between items-center relative">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <Link href="/admin" className="text-xl font-bold"> Home </Link>
                        <Link href="/admin/applications" className="text-xl ml-4 font-bold"> Applications </Link>
                        <Link href="/admin/tenders" className="text-xl ml-4 font-bold"> Tenders </Link>
                    </div>

                    <button className="fixed top-3 right-4 px-4 py-2 mb-8 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg" onClick={() => logout()}>
                        Logout
                    </button>
                </div>
            </nav>
            {children}
        </div>
    );
};

export default AdminLayout;
