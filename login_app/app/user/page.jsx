// pages/admin.js
'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import UserLayout from '../../components/userlayout';

const Admin = () => {

    const tenderCount = 50;
    const userCount = 100;
    const router = useRouter();
    const logout = () => {
        // Implement logout logic here (e.g., remove authentication token, clear session)
        localStorage.clear();
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
        <UserLayout>
             <div className="container mx-auto text-center max-w-100 mt-20">
        <div className="flex justify-between">
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow mr-4">
            <h2 className="text-lg font-semibold mb-4">Active tenders</h2>
            <p className="text-xl font-bold">{tenderCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow mr-4">
            <h2 className="text-lg font-semibold mb-4">Bids in Progress</h2>
            <p className="text-xl font-bold">{tenderCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow mr-4">
            <h2 className="text-lg font-semibold mb-4">Upcoming Deadlines</h2>
            <p className="text-xl font-bold">{tenderCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
            <h2 className="text-lg font-semibold mb-4">Closed Tenders</h2>
            <p className="text-xl font-bold">{userCount}</p>
          </div>
        </div>
      </div>
        </UserLayout>
    );
};

export default Admin;
