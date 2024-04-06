
'use client'
import Link from "next/link";
import RemoveBtn from "@/components/removeTender";

import { HiPencilAlt } from "react-icons/hi";
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../components/adminlayout';
import EditTender from '../EditTender/[id]/page';
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



  const getTenders = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/admin/addTenders", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch tenders");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading tenders: ", error);
    }
  };
  
  export default async function TenderList() {
      
    const { tenders } = await getTenders();

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Adjusting with responsive utilities */}
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">Tender ID</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">Tender Title</th>
                <th className="hidden md:table-cell px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tender Description</th>
                {/* Other headers */}
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">Published Date</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">Closing Date</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">Tender Status</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">Category/Type</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">Documents</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tenders.map((tender) => (
                <tr key={tender._id}>
                  {/* Tender data cells */}
                  <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sm:px-3">{tender.tenderId}</td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sm:px-3">{tender.tenderTitle}</td>
                  {/* Description with show more/less toggle */}
                  
                  <td className="hidden md:table-cell px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                   {tender.tenderDescription}
                  </td>
                  {/* Other cells */}
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">{tender.publishDate}</td>
<td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">{tender.closingDate}</td>
<td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">{tender.tenderStatus}</td>
<td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">{tender.category}</td>
<td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">{tender.tenderDocuments}</td>
<td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-3">
<div className="flex items-center justify-center space-x-2">
<Link href={`/admin/EditTender/${tender._id}`}>
              <HiPencilAlt size={24} />
            </Link>
            <RemoveBtn id={tender._id} />
</div>
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