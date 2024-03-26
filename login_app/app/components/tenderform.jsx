import React, { useState } from "react";

const TenderForm = ({ onSubmit, onCancel }) => {
  const [newTender, setNewTender] = useState({
    // Tender_id removed from state as it's not user-assigned
    Tender_title: "",
    Tender_description: "",
    publish_date: "",
    closing_date: "",
    Tender_status: "open", // Default status
    category: "",
    Tender_documents: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTender((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newTender);
    alert("Tender submission successful"); // Popup message
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Tender</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        {Object.entries(newTender).map(([key, value]) => {
          if (key === "Tender_status") {
            return (
              <div className="mb-4" key={key}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={key}
                >
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                >
                  <option value="open">Open</option>
                  <option value="under_review">Under Review</option>
                  <option value="closed">Closed</option>
                  <option value="awarded">Awarded</option>
                </select>
              </div>
            );
          } else if (key === "category") {
            return (
              <div className="mb-4" key={key}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={key}
                >
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                >
                  <option value="transport">Transport</option>
                  <option value="logistics">Logistics</option>
                  <option value="security">Security</option>
                </select>
              </div>
            );
          } else if (key === "Tender_documents") {
            return (
              <div className="mb-4" key={key}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={key}
                >
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <input
                  type="file"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={key}
                  name={key}
                  onChange={handleInputChange}
                  multiple
                />
              </div>
            );
          } else {
            return (
              <div className="mb-4" key={key}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={key}
                >
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <input
                  type={key.includes("date") ? "date" : "text"}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  placeholder={`Enter ${key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}`}
                />
              </div>
            );
          }
        })}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            type="button"
            onClick={handleSubmit}
          >
            Add Tender
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TenderForm;
