"use client";
import React, { useState, useEffect } from "react";
import UserLayout from "../../components/userlayout";
import AddTenderForm from "../../components/tenderform"; // Import the add tender form component

const AdminTenders = () => {
  const [showAddDialog, setShowAddDialog] = useState(false); // State to manage whether to show the add tender dialog
  const [tenders, setTenders] = useState([]);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

  useEffect(() => {
    // Dummy data for tenders
    const dummyTenders = [
      {
        id: 1,
        title: "Tender for Water Supply",
        description:
          "Description of Water Supply tender Description of Water Supply tenderDescription of Water Supply tenderDescription of Water Supply tender ",
        publishdate: "2024-04-01",
        closingdate: "2024-04-15",
        tenderstatus: "Open",
        category: "Water Supply",
        documents: ["document1.pdf", "document2.pdf"],
      },
      {
        id: 2,
        title: "Tender for Waste Management",
        description: "Description of Waste Management tender",
        publishdate: "2024-03-20",
        closingdate: "2024-04-10",
        tenderstatus: "Closed",
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
        documents: ["document4.pdf", "document5.pdf"],
      },
      {
        id: 4,
        title: "Tender for Water Supply",
        description: "Description of Water Supply tender",
        publishdate: "2024-04-01",
        closingdate: "2024-04-15",
        tenderstatus: "Open",
        category: "Water Supply",
        documents: ["document1.pdf", "document2.pdf"],
      },
      {
        id: 5,
        title: "Tender for Waste Management",
        description: "Description of Waste Management tender",
        publishdate: "2024-03-20",
        closingdate: "2024-04-10",
        tenderstatus: "Closed",
        category: "Waste Management",
        documents: ["document3.pdf"],
      },
      {
        id: 6,
        title: "Tender for Logistics",
        description: "Description of Logistics tender",
        publishdate: "2024-03-15",
        closingdate: "2024-04-05",
        tenderstatus: "Rejected",
        category: "Logistics",
        documents: ["document4.pdf", "document5.pdf"],
      },
    ];
    setTenders(dummyTenders);
  }, []);

  const handleApplyTender = (tenderId) => {
    // Logic to apply for the selected tender
    console.log("Applied for tender:", tenderId);
  };
  const toggleDescription = (id) => {
    if (expandedDescriptionId === id) {
      setExpandedDescriptionId(null);
    } else {
      setExpandedDescriptionId(id);
    }
  };

  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tenders.map((tender) => (
            <div
              key={tender.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{tender.title}</h2>
                <p className="text-gray-600">
                  Description:{" "}
                  {expandedDescriptionId === tender.id
                    ? tender.description
                    : `${tender.description.substring(0, 100)}...`}
                  {tender.description.length > 30 && (
                    <button
                      onClick={() => toggleDescription(tender.id)}
                      className="text-blue-500 hover:text-blue-600 ml-2"
                    >
                      {expandedDescriptionId === tender.id
                        ? "View Less"
                        : "View More"}
                    </button>
                  )}
                </p>
                <p className="text-gray-500 mt-2">
                  Publish Date: {tender.publishdate}
                </p>
                <p className="text-gray-500">
                  Closing Date: {tender.closingdate}
                </p>
                <p className="text-gray-500">
                  Tender Status: {tender.tenderstatus}
                </p>
                <p className="text-gray-500">Category: {tender.category}</p>
                {tender.documents && tender.documents.length > 0 && (
                  <div>
                    <p className="text-gray-500 mt-2">Documents:</p>
                    <ul>
                      {tender.documents.map((document, index) => (
                        <li key={index}>{document}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <button
                  onClick={() => handleApplyTender(tender.id)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Place for AddTenderForm if needed */}
        {/* {showAddDialog && <AddTenderForm onCancel={() => setShowAddDialog(false)} onSubmit={handleAddTender} />} */}
      </div>
    </UserLayout>
  );
};

export default AdminTenders;
//
