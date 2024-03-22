import React, { useState } from 'react';

const TenderForm = ({ onSubmit, onCancel }) => {
    const [newTender, setNewTender] = useState({
       Tender_id: '',
       Tender_title: '',
       Tender_description: '',
        publish_date: '',
        closing_date: '',
        Tender_status: '',
        category: '',
        Tender_documents: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTender(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newTender); // Call the onSubmit function passed from the parent component
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Add Tender</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                {/* Fields dynamically generated based on the newTender state */}
                {Object.keys(newTender).map((key) => (
                    <div className="mb-4" key={key}>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} {/* Convert camelCase to words */}
                        </label>
                        <input
                            type={key.includes('date') ? 'date' : 'text'} // Use date input for date fields
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={key}
                            name={key}
                            value={newTender[key]}
                            onChange={handleInputChange}
                            placeholder={`Enter ${key}`}
                        />
                    </div>
                ))}
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
