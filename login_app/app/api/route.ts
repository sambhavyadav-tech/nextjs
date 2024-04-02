import { NextResponse } from 'next/server'
 
// Sample data for tenders

const tendersData = [
 
  {
    id: 1,
    title: "Tender for Transport",
    description: "Tender for Transport",
    publishdate:"21-05-2024",
    closingdate: "30-06-2024",
    tenderstatus:"Open",
    category:"Transport",
    documents:"document"
  },
  {
    id: 2,
    title: "Tender for Ground Handling ",
    description: "Tender for Transport",
    publishdate:"21-05-2024",
    closingdate: "30-06-2024",
    tenderstatus:"Awarded",
    category:"Ground Handling",
    documents:"document"
  },

  {
    id: 3,
    title: "Tender for Parking Management",
    description: "Tender for Transport",
    publishdate:"21-05-2024",
    closingdate: "30-06-2024",
    tenderstatus:"Under Evaluation",
    category:"Parking",
    documents:"document"
  },
  
 
  // Add more sample tenders if needed
];






export async function GET(request: Request) {
  return NextResponse.json(tendersData);
}
