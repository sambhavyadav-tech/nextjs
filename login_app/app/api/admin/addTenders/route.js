// pages/api/tenders.js

// Sample data for tenders
const tendersData = [
  {
    id: 1,
    name: "Tender 1",
    description: "Description of tender 1",
    createdDate: "2022-03-25",
  },
  {
    id: 2,
    name: "Tender 2",
    description: "Description of tender 2",
    createdDate: "2022-03-26",
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
