// pages/tender.jsx
"use client";
import React from "react";
import AdminLayout from "../../components/adminlayout";
import TenderForm from "../../components/tenderform"; // Import the TenderForm component

const Tender = () => {
  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <TenderForm />
      </div>
    </AdminLayout>
  );
};

export default Tender;
