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



import { NextResponse } from "next/server";
import connectMongoDB from "..//..//..//..//libs/mongodb"
import TenderModal from "../..//..//..//models/tenders";


export async function POST(request)
{
const { id, title,publishdate,closingdate,tenderstatus,category,documents}= await request.json();
await connectMongoDB();

await TenderModal.c
await TenderModal.create({id, title,publishdate,closingdate,tenderstatus,category,documents});
return NextResponse.json({message:"Tender created by Post"},{status: 201});


}

export async function GET() {
await connectMongoDB();
const tenderlist = await TenderModal.find();
return NextResponse.json({ tenderlist });
}

export async function DELETE(request) {
const id = request.nextUrl.searchParams.get("id");
await connectMongoDB();
await Topic.findByIdAndDelete(id);
return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  }
