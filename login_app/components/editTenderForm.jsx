"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTenderForm({
  id,
  tenderId,
  tenderTitle,
  tenderDescription,
  publishDate,
  closingDate,
  tenderStatus,
  category,
  tenderDocuments,
}) {
  const [newtenderId, setNewTenderId] = useState(tenderId);
  const [newtenderTitle, setNewTenderTitle] = useState(tenderTitle);
  const [newtenderDescription, setNewTenderDescription] =
    useState(tenderDescription);
  const [newpublishDate, setNewPublishDate] = useState(publishDate);
  const [newclosingDate, setNewClosingDate] = useState(closingDate);
  const [newtenderStatus, setNewTenderStatus] = useState(tenderStatus);
  const [newcategory, setNewcategory] = useState(category);
  const [newtenderDocuments, setNewTenderDocuments] = useState(tenderDocuments);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tenderId || !tenderTitle) {
      alert("Tender ID and Tender Title are required.");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/updateTender/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newtenderId,
            newtenderTitle,
            newtenderDescription,
            newpublishDate,
            newclosingDate,
            newtenderStatus,
            newcategory,
            newtenderDocuments,
          }),
        }
      );

      if (res.ok) {
        alert("Tender Updated Successfully.");
        router.push("/admin/tenders");
      } else {
        throw new Error("Failed to update the tender");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "tenderId":
        setNewTenderId(value);
        break;
      case "tenderTitle":
        setNewTenderTitle(value);
        break;
      case "tenderDescription":
        setNewTenderDescription(value);
        break;
      case "publishDate":
        setNewPublishDate(value);
        break;
      case "closingDate":
        setNewClosingDate(value);
        break;
      case "tenderStatus":
        setNewTenderStatus(value);
        break;
      case "category":
        setNewcategory(value);
        break;
      case "tenderDocuments":
        setNewTenderDocuments(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Tender</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tenderId"
          >
            Tender ID
          </label>
          <input
            type="text"
            id="tenderId"
            name="tenderId"
            value={newtenderId}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Tender ID"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tenderTitle"
          >
            Tender Title
          </label>
          <input
            type="text"
            id="tenderTitle"
            name="tenderTitle"
            value={newtenderTitle}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Tender Title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tenderDescription"
          >
            Tender Description
          </label>
          <textarea
            id="tenderDescription"
            name="tenderDescription"
            value={newtenderDescription}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Tender Description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="publishDate"
          >
            Publish Date
          </label>
          <input
            type="date"
            id="publishDate"
            name="publishDate"
            value={newpublishDate}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="closingDate"
          >
            Closing Date
          </label>
          <input
            type="date"
            id="closingDate"
            name="closingDate"
            value={newclosingDate}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tenderStatus"
          >
            Tender Status
          </label>
          <input
            type="text"
            id="tenderStatus"
            name="tenderStatus"
            value={newtenderStatus}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Tender Status"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={newcategory}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Category"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tenderDocuments"
          >
            Tender Documents
          </label>
          <input
            type="text"
            id="tenderDocuments"
            name="tenderDocuments"
            value={newtenderDocuments}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Tender Documents"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Update Tender
        </button>
      </form>
    </div>
  );
}
