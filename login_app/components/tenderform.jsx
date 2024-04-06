import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddTender() {
  const [tenderId, setTenderId] = useState('');
  const [tenderTitle, setTenderTitle] = useState('');
  const [tenderDescription, setTenderDescription] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [tenderStatus, setTenderStatus] = useState('');
  const [category, setCategory] = useState('');
  const [tenderDocuments, setTenderDocuments] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tenderId || !tenderTitle) {
      alert("Tender ID and Tender Title are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/admin/addTenders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tenderId,
          tenderTitle,
          tenderDescription,
          publishDate,
          closingDate,
          tenderStatus,
          category,
          tenderDocuments
        }),
      });

      if (res.ok) {
        alert("Tender Created Successfully.");
        router.push("/admin");
      } else {
        throw new Error("Failed to create a tender");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'tenderId':
        setTenderId(value);
        break;
      case 'tenderTitle':
        setTenderTitle(value);
        break;
      case 'tenderDescription':
        setTenderDescription(value);
        break;
      case 'publishDate':
        setPublishDate(value);
        break;
      case 'closingDate':
        setClosingDate(value);
        break;
      case 'tenderStatus':
        setTenderStatus(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'tenderDocuments':
        setTenderDocuments(value);
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tenderId">Tender ID</label>
          <input type="text" id="tenderId" name="tenderId" value={tenderId} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Tender ID" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tenderTitle">Tender Title</label>
          <input type="text" id="tenderTitle" name="tenderTitle" value={tenderTitle} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Tender Title" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tenderDescription">Tender Description</label>
          <textarea id="tenderDescription" name="tenderDescription" value={tenderDescription} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Tender Description"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishDate">Publish Date</label>
          <input type="date" id="publishDate" name="publishDate" value={publishDate} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="closingDate">Closing Date</label>
          <input type="date" id="closingDate" name="closingDate" value={closingDate} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tenderStatus">Tender Status</label>
          <input type="text" id="tenderStatus" name="tenderStatus" value={tenderStatus} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Tender Status" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
          <input type="text" id="category" name="category" value={category} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Category" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tenderDocuments">Tender Documents</label>
          <input type="text" id="tenderDocuments" name="tenderDocuments" value={tenderDocuments} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Tender Documents" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Tender</button>
      </form>
    </div>
  );
}


