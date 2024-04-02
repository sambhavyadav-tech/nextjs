"use client";
import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/adminlayout";
import AddTenderForm from "../../components/tenderform"; // Import the add tender form component

const AdminTenders = () => {
  const [showAddDialog, setShowAddDialog] = useState(false); // State to manage whether to show the add tender dialog
  //   const [showAddForm, setShowAddForm] = useState(false); // State to manage whether to show the add tender form
  const [tenders, setTenders] = useState([]);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

  useEffect(() => {
    // Fetch tenders from the API
    const fetchTenders = async () => {
      try {
        const res = await fetch("/api"); // Assuming the API endpoint is '/api/tenders'
        if (!res.ok) {
          throw new Error("Failed to fetch tenders");
        }
        const data = await res.json();
        setTenders(data);
      } catch (error) {
        console.error("Error fetching tenders:", error);
      }
    };

    fetchTenders();
  }, []);

  const handleAddTender = (newTender) => {
    // Logic to add the new tender
    console.log("Added tender:", newTender);
    // setShowAddForm(false); // Hide the add tender form
    setShowAddDialog(false); // Hide the add tender dialog
  };

  const handleUpdateTender = (tenderId) => {
    // Logic to update the selected tender
    console.log("Updated tender:", tenderId);
  };

  const handleDeleteTender = (tenderId) => {
    // Logic to delete the selected tender
    console.log("Deleted tender:", tenderId);
  };

  const toggleDescription = (tenderId) => {
    setExpandedDescriptionId((prevId) =>
      prevId === tenderId ? null : tenderId
    );
  };

  return (
    <AdminLayout>
      <div
        className="flex flex-col min-h-screen "
        style={{ minHeight: "500px" }}
      >
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {/* Adjusting with responsive utilities */}
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">
                    Tender ID
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">
                    Tender Title
                  </th>
                  <th className="hidden md:table-cell px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tender Description
                  </th>
                  {/* Other headers */}
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">
                    Published Date
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">
                    Closing Date
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">
                    Tender Status
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">
                    Category/Type
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">
                    Documents
                  </th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tenders.map((tender) => (
                  <tr key={tender.id}>
                    {/* Tender data cells */}
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sm:px-3">
                      {tender.id}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sm:px-3">
                      {tender.title}
                    </td>
                    {/* Description with show more/less toggle */}
                    <td className="hidden md:table-cell px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {expandedDescriptionId === tender.id
                        ? tender.description
                        : `${tender.description.substring(0, 50)}${
                            tender.description.length > 50 ? "..." : ""
                          }`}
                      {tender.description.length > 50 && (
                        <button
                          className="text-blue-500 hover:underline focus:outline-none"
                          onClick={() => toggleDescription(tender.id)}
                        >
                          {expandedDescriptionId === tender.id
                            ? "Show less"
                            : "Show more"}
                        </button>
                      )}
                    </td>
                    {/* Other cells */}
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">
                      {tender.publishdate}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">
                      {tender.closingdate}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">
                      {tender.tenderstatus}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">
                      {tender.category}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">
                      <div className="flex items-center justify-center">
                        {tender.documents ? "Available" : "N/A"}
                      </div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleUpdateTender(tender.id)}
                          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteTender(tender.id)}
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminTenders;
