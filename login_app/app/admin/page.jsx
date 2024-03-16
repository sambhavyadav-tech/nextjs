// pages/admin.js
'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AdminLayout from '../components/adminlayout';

const Admin = () => {
    const router = useRouter();
    const logout = () => {
        // Implement logout logic here (e.g., remove authentication token, clear session)
        router.push('/login');
    };

    useEffect(() => {
        // Check if the user is authenticated
        const isAuthenticated = localStorage.getItem('isAuthenticated'); // Assuming you're using local storage for simplicity
        if (!isAuthenticated) {
            // If not authenticated, redirect to login page
            router.push('/login');
        }
    }, []);

    return (
        <AdminLayout>
            <div className="container mx-auto max-w-md mt-20">
                <h2 className="text-2xl font-bold mb-6">Admin Page</h2>
                <p>Welcome to the admin page!</p>
                {/* <p>logout here</p>
                <button type="button" onClick={() => logout()} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg">Logout</button> */}
            </div>
        </AdminLayout>
    );
};

export default Admin;
