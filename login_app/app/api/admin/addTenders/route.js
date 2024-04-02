// pages/api/tenders.js

// Sample data for tenders

/*
const tendersData = [
  {
    id: 1,
    title: "Tender for Transport",
    publishdate:"21-05-2024",
    closingdate: "30-06-2024",
    tenderstatus:"Open",
    category:"Transport",
    documents:"document"
  },
  {
    id: 2,
    title: "Tender for Ground Handling ",
    publishdate:"21-05-2024",
    closingdate: "30-06-2024",
    tenderstatus:"Awarded",
    category:"Ground Handling",
    documents:"document"
  },

  {
    id: 3,
    title: "Tender for Parking Management",
    publishdate:"21-05-2024",
    closingdate: "30-06-2024",
    tenderstatus:"Under Evaluation",
    category:"Parking",
    documents:"document"
  },
  // Add more sample tenders if needed
];


export default function handler(req, res) {
  if (req.method === "GET") {
    // Return tenders data as JSON response
    res.status(200).json(tendersData);
  } else {
    // Handle other HTTP methods if needed
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
*/


// Adjust the import paths as per your project structure
import connectMongoDB from '../../../libs/mongodb';
import TenderModel from '../../../models/tenders';

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === 'POST') {
    const { title, publishdate, closingdate, tenderstatus, category, documents } = req.body;
    await TenderModel.create({ title, publishdate, closingdate, tenderstatus, category, documents });
    res.status(201).json({ message: "Tender created" });
  } else if (req.method === 'GET') {
    const tenderlist = await TenderModel.find();
    res.status(200).json({ tenderlist });
  } else if (req.method === 'DELETE') {
    const { id } = req.query; // Adjust based on how you're passing the ID
    await TenderModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Tender deleted" });
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
