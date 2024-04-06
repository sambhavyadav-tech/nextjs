"use client";
import React from "react";
import AdminLayout from "../../components/adminlayout";

const Applications = () => {
  // Hardcoded application data
  const applications = [
    {
      id: 1,
      name: "Tender for Water Supply",
      email: "john@example.com",
      status: "Pending",
    },
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
    {
      id: 4,
      name: "Tender for F&B",
      email: "john@example.com",
      status: "Pending",
    },
    // {
    //   id: 5,
    //   name: "Tender for F&B",
    //   email: "john@example.com",
    //   status: "Pending",
    // },
    // {
    //   id: 6,
    //   name: "Tender for F&B",
    //   email: "john@example.com",
    //   status: "Pending",
    // },
  ];

  const handleApprove = (id) => {
    console.log("Approve application with id:", id);
    // Implementation details here
  };

  const handleReject = (id) => {
    console.log("Reject application with id:", id);
    // Implementation details here
  };

  return (
    <AdminLayout>
      <div className="container mx-auto max-w-3xl min-h-screen">
        <div className="container mx-auto max-w-3xl flex justify-center">
          <h1 className="text-2xl font-bold mb-4">Applications</h1>
          {/* ... rest of your component */}
        </div>{" "}
        {/* Application list in table format */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.email}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-semibold"
                    style={{
                      color:
                        application.status === "Pending"
                          ? "orange"
                          : application.status === "Approved"
                          ? "green"
                          : "red",
                    }}
                  >
                    {application.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {application.status === "Pending" && (
                      <div className="flex justify-end space-x-4">
                        <button
                          onClick={() => handleApprove(application.id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(application.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Applications;
