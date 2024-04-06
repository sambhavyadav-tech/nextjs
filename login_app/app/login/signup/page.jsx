// Import necessary hooks and components
"use client";
import React, { useState } from 'react';
import Layout from '../../../components/layout';

const SignupPage = () => {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    companyName: '',
    username: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    serviceProvided: '',
    gstCertificate: null,
    companyIncorporationCertificate: null,
    msmeCertificate: null,
    otherDocuments: [],
  });

  // Handle changes in text inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (e.target.type === 'file') {
      // For single file fields
      setFormData((prevState) => ({
        ...prevState,
        [name]: files.length ? files[0] : null,
      }));
    } else {
      // For text inputs
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Handle changes in the file input for multiple files
  const handleMultipleFilesChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: [...files],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // You'll likely want to send this data to a server.
    // Consider using FormData if you need to handle file uploads in your submission.
  };

  return (
    <Layout>
 
        <div className=" bg-white p-3 rounded-lg shadow-md w-1/2 justify-center overflow-hidden mx-auto ">
          <h2 className="text-2xl font-bold mb-4 align-center">Company Registration</h2>
          <form onSubmit={handleSubmit}>
            {/* Company Name */}
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-black-500 block w-full shadow-sm sm:text-sm border-blackS-300 rounded-md" required />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>

            {/* Additional fields for Address, Phone Number, Service Provided */}
            {/* GST Certificate Upload */}
            <div className="mb-4">
              <label htmlFor="gstCertificate" className="block text-sm font-medium text-gray-700">GST Certificate</label>
              <input type="file" id="gstCertificate" name="gstCertificate" onChange={handleChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
            {/* Company Incorporation Certificate Upload */}
            <div className="mb-4">
              <label htmlFor="companyIncorporationCertificate" className="block text-sm font-medium text-gray-700">Company Incorporation Certificate</label>
              <input type="file" id="companyIncorporationCertificate" name="companyIncorporationCertificate" onChange={handleChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>

            {/* MSME Certificate Upload */}
            <div className="mb-4">
              <label htmlFor="msmeCertificate" className="block text-sm font-medium text-gray-700">MSME Certificate</label>
              <input type="file" id="msmeCertificate" name="msmeCertificate" onChange={handleChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>

            {/* Other Documents Upload */}
            <div className="mb-4">
              <label htmlFor="otherDocuments" className="block text-sm font-medium text-gray-700">Other Documents (if any)</label>
              <input type="file" id="otherDocuments" name="otherDocuments" multiple onChange={handleMultipleFilesChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
          </p>
        </div>
   
      
    </Layout>
  );
};

export default SignupPage;
