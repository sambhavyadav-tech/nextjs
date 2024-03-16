import React, { useState } from 'react';

const TenderForm = ({ onSubmit, onCancel }) => {
    const [newTender, setNewTender] = useState({
        name: '',
        description: '',
        lastDate: ''
    });

    const handleInputChange = (e) => {
        setNewTender({
            ...newTender,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newTender); // Call the onSubmit function passed from the parent component
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Add Tender</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Tender Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter tender name"
                        name="name"
                        value={newTender.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Enter tender description"
                        name="description"
                        value={newTender.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastDate">
                        Last Date to Apply
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastDate"
                        type="date"
                        name="lastDate"
                        value={newTender.lastDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex items-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-4"
                        type="submit"
                    >
                        Add Tender
                    </button>
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
                        type="button"
                        onClick={onCancel} // Call the onCancel function passed from the parent component
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TenderForm;
