// pages/admin.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminLayout from "../components/adminlayout";

const Admin = () => {
  const tenderCount = 50;
  const userCount = 100;
  const router = useRouter();
  const logout = () => {
    // Implement logout logic here (e.g., remove authentication token, clear session)
    localStorage.clear();
    router.push("/login");
  };

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated"); // Assuming you're using local storage for simplicity
    if (!isAuthenticated) {
      // If not authenticated, redirect to login page
      router.push("/login");
    }
  }, []);

  return (
    <AdminLayout>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-between">
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow mr-4">
            <h2 className="text-lg font-semibold mb-4">Total Tenders</h2>
            <p className="text-xl font-bold">{tenderCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow mr-4">
            <h2 className="text-lg font-semibold mb-4">Open Tenders</h2>
            <p className="text-xl font-bold">{tenderCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow mr-4">
            <h2 className="text-lg font-semibold mb-4">Bid Received</h2>
            <p className="text-xl font-bold">{tenderCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
            <h2 className="text-lg font-semibold mb-4">Closed Tenders</h2>
            <p className="text-xl font-bold">{userCount}</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
