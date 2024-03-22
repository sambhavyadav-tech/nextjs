"use client";

import React from "react";
import UserLayout from "../../components/userlayout";

const Applications = () => {
  // Hardcoded application data
  const applications = [
    { id: 1, name: "Tender for Water Supply", tenderid: "t01", applicationid:"t01_123", email: "john@example.com", status: "Pending" },
    {
      id: 2,
      name: "Tender for Waste Management",
      email: "jane@example.com",
      status: "Approved",
    },
    {
      id: 3,
      name: "Tender for Logistics",
      email: "michael@example.com",
      status: "Rejected",
    },
   
  ];

  return (
    <UserLayout>
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
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default Applications;
