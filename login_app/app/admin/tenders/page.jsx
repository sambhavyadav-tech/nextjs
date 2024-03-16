// pages/admin/tenders.js
'use client'

// import React from 'react';
// import AdminLayout from '../../components/adminlayout'
// const AdminTenders = () => {
//     // Add logic for adding, updating, and deleting tenders here

//     return (
//         <AdminLayout>
//             <div className="container mx-auto max-w-3xl">
//                 <h1 className="text-2xl font-bold mb-4">Tenders</h1>
//                 {/* Add tender list component or form for adding tenders */}
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
//                     Add Tender
//                 </button>
//             </div>
//         </AdminLayout>
//     );
// };

// export default AdminTenders;


///////////////////////////////////////////////
// pages/admin/tenders.js

// import React, { useState } from 'react';
// import AdminLayout from '../../components/adminlayout';

// const AdminTenders = () => {
//     const [tenders, setTenders] = useState([]);
//     const [newTender, setNewTender] = useState({
//         name: '',
//         description: '',
//         lastDate: ''
//     });
//     const [selectedTender, setSelectedTender] = useState(null);

//     const handleInputChange = (e) => {
//         setNewTender({
//             ...newTender,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleAddTender = () => {
//         setTenders([...tenders, newTender]);
//         setNewTender({
//             name: '',
//             description: '',
//             lastDate: ''
//         });
//     };

//     const handleUpdateTender = () => {
//         // Implement update logic
//         // Here you can update the selected tender in the tenders array
//     };

//     const handleDeleteTender = () => {
//         // Implement delete logic
//         // Here you can remove the selected tender from the tenders array
//     };

//     const handleSelectTender = (index) => {
//         setSelectedTender(tenders[index]);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleAddTender();
//     };

//     return (
//         <AdminLayout>
//             <div className="container mx-auto max-w-3xl">
//                 <h1 className="text-2xl font-bold mb-4">Add Tender</h1>
//                 <form onSubmit={handleSubmit} className="mb-4">
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                             Tender Name
//                         </label>
//                         <input
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="name"
//                             type="text"
//                             placeholder="Enter tender name"
//                             name="name"
//                             value={newTender.name}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//                             Description
//                         </label>
//                         <textarea
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="description"
//                             placeholder="Enter tender description"
//                             name="description"
//                             value={newTender.description}
//                             onChange={handleInputChange}
//                         ></textarea>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastDate">
//                             Last Date to Apply
//                         </label>
//                         <input
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="lastDate"
//                             type="date"
//                             name="lastDate"
//                             value={newTender.lastDate}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <button
//                         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
//                         type="submit"
//                     >
//                         Add Tender
//                     </button>
//                 </form>
//                 <div>
//                     <h2 className="text-lg font-semibold mb-2">Tenders List</h2>
//                     <ul>
//                         {tenders.map((tender, index) => (
//                             <li key={index} onClick={() => handleSelectTender(index)} className="cursor-pointer mb-2">
//                                 {tender.name}
//                             </li>
//                         ))}
//                     </ul>
//                     {selectedTender && (
//                         <div>
//                             <h3 className="text-lg font-semibold mb-2">Selected Tender:</h3>
//                             <p>Name: {selectedTender.name}</p>
//                             <p>Description: {selectedTender.description}</p>
//                             <p>Last Date to Apply: {selectedTender.lastDate}</p>
//                             <button
//                                 className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
//                                 onClick={handleUpdateTender}
//                             >
//                                 Update Tender
//                             </button>
//                             <button
//                                 className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg ml-2"
//                                 onClick={handleDeleteTender}
//                             >
//                                 Delete Tender
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default AdminTenders;


////////////////////////////////////////

import React, { useState } from 'react';
import AdminLayout from '../../components/adminlayout';
import TenderForm from '../../components/tenderform'; // Import the tender form component

const AdminTenders = () => {
    const [showForm, setShowForm] = useState(false); // State to manage whether to show the tender form
    const [tenders, setTenders] = useState([]);
    const [selectedTender, setSelectedTender] = useState(null);

    const handleAddTender = (newTender) => {
        setTenders([...tenders, newTender]);
        setShowForm(false); // Hide the form after adding the tender
    };

    const handleSelectTender = (tender) => {
        setSelectedTender(tender);
    };

    return (
        <AdminLayout>
            <div className="container mx-auto px-4 py-8 sm:px-2 lg:px-8">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-4">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold mb-4">Tenders List</h1>
                            <ul>
                                {tenders.map((tender, index) => (
                                    <li key={index} onClick={() => handleSelectTender(tender)} className="cursor-pointer mb-2">
                                        {tender.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button 
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
                            onClick={() => setShowForm(true)}
                        >
                            Add Tender
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-4">
                        {showForm && <TenderForm onSubmit={handleAddTender} onCancel={() => setShowForm(false)} />}
                        {selectedTender && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Selected Tender:</h3>
                                <p>Name: {selectedTender.name}</p>
                                <p>Description: {selectedTender.description}</p>
                                <p>Last Date to Apply: {selectedTender.lastDate}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminTenders;