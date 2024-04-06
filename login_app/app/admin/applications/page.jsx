// pages/admin/tenders.js
"use client";
// pages/admin/applications.js

import React from "react";
import AdminLayout from "../../../components/adminlayout";

const Applications = () => {
  // Hardcoded application data
  const applications = [
    { id: 1, name: "Tender for Water Supply", email: "john@example.com", status: "Pending" },
    {
      id: 2,
      name: "Tender for Logistics",
      email: "jane@example.com",
      status: "Approved",
    },
    {
      id: 3,
      name: "Tender for Ground Handling",
      email: "michael@example.com",
      status: "Rejected",
    },
    { id: 1, name: "Tender for F&B", email: "john@example.com", status: "Pending" },
  ];
  const handleApprove = (id) => {
    // Logic to approve the application with the given id
    console.log("Approve application with id:", id);
  };

  const handleReject = (id) => {
    // Logic to reject the application with the given id
    console.log("Reject application with id:", id);
  };

  return (
    <AdminLayout>
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Applications</h1>
        {/* Application list */}
        <div className="grid gap-4">
          {applications.map((application) => (
            <div
              key={application.id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{application.name}</h2>
                <p className="text-gray-600">{application.email}</p>
                <p
                  className={`text-sm font-semibold ${
                    application.status === "Pending"
                      ? "text-yellow-500"
                      : application.status === "Approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {application.status}
                </p>
              </div>
              <div className="flex items-center">
                {application.status === "Pending" && (
                  <>
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleApprove(application.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleReject(application.id)}
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Applications;
