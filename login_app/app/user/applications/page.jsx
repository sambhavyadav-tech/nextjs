"use client";

import React from "react";
import UserLayout from "../../components/userlayout";

const Applications = () => {
  // Hardcoded application data
  const applications = [
    {
      id: 1,
      title: "Tender for Water Supply",
      description:
        "Description of Water Supply tender Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum quaerat aliquid excepturi voluptas, vel nulla libero impedit enim corrupti",
      publishdate: "2024-04-01",
      closingdate: "2024-04-15",
      tenderstatus: "Pending",
      category: "Water Supply",
      documents: ["document1.pdf", "document2.pdf"],
    },
    {
      id: 2,
      title: "Tender for Waste Management",
      description: "Description of Waste Management tender",
      publishdate: "2024-03-20",
      closingdate: "2024-04-10",
      tenderstatus: "Approved",
      category: "Waste Management",
      documents: ["document3.pdf"],
    },
    {
      id: 3,
      title: "Tender for Logistics",
      description: "Description of Logistics tender",
      publishdate: "2024-03-15",
      closingdate: "2024-04-05",
      tenderstatus: "Rejected",
      category: "Logistics",
      documents: ["document3.pdf"],
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
                <h2 className="text-xl font-bold mb-2">{application.title}</h2>
                <p className="text-gray-600">{application.description}</p>
                <p className="text-gray-600">
                  Publish Date: {application.publishdate}
                </p>
                <p className="text-gray-600">
                  Closing Date: {application.closingdate}
                </p>
                <p
                  className={`text-sm font-semibold ${
                    application.tenderstatus === "Pending"
                      ? "text-yellow-500"
                      : application.tenderstatus === "Approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {application.tenderstatus}
                </p>
                <p className="text-gray-600">
                  Category: {application.category}
                </p>
                {application.documents && application.documents.length > 0 && (
                  <div>
                    <p className="text-gray-600">Documents:</p>
                    <ul>
                      {application.documents.map((document, index) => (
                        <li key={index}>{document}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};
export default Applications;
