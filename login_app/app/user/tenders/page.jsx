
'use client'
import React, { useState, useEffect } from 'react';
import UserLayout from '../../components/userlayout';
import AddTenderForm from '../../components/tenderform'; // Import the add tender form component

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
    setExpandedDescriptionId((prevId) => (prevId === tenderId ? null : tenderId));
  };

  return (
    <UserLayout>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* List of tenders */}
        <div className="overflow-x-12">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tender Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Short Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Created Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tenders.map((tender) => (
                <tr key={tender.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {tender.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {expandedDescriptionId === tender.id ? tender.description : `${tender.description.substring(0, 50)}${tender.description.length > 50 ? '...' : ''}`}
                      {tender.description.length > 50 && (
                        <button className="text-blue-500 hover:underline focus:outline-none" onClick={() => toggleDescription(tender.id)}>
                          {expandedDescriptionId === tender.id ? 'Show less' : 'Show more'}
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {tender.createdDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative inline-block text-left">
                      {/* Apply Button */}
                      <button
                      onClick={() => handleApplyTender(tender.id)}
                      className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
                    >
                      Apply
                    </button>
                     
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Add tender form */}
        {/* {showAddForm && (
          <AddTenderForm
            onSubmit={handleAddTender}
            onCancel={() => setShowAddForm(false)}
          />
        )} */}
      </div>
    </UserLayout>
  );
};

export default AdminTenders;
