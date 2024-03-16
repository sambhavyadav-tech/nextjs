// components/adminLayout.js

import React from 'react';
import Link from 'next/link';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container d-inline-flex mx-auto">
                    <Link href="/admin">Admin Home</Link>
                    <button onClick={() => logout()} className="text-white ml-4 mx-auto">Logout</button>
                </div>
            </nav>
            {children}
        </div>
    );
};

export default AdminLayout;
