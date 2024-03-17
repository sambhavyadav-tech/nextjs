import { NextResponse } from 'next/server'
 
// Sample data for tenders
const tendersData = [
  {
    id: 1,
    name: "Tender 1",
    description: "Description of tender 1 DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionvDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription ",
    createdDate: "2022-03-25",
  },
  {
    id: 2,
    name: "Tender 2",
    description: "Description of tender 2",
    createdDate: "2022-03-26",
  },
  {
    id: 1,
    name: "Tender 1",
    description: "Description of tender 1 DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionvDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription ",
    createdDate: "2022-03-25",
  },
  {
    id: 2,
    name: "Tender 2",
    description: "Description of tender 2",
    createdDate: "2022-03-26",
  },
  {
    id: 1,
    name: "Tender 1",
    description: "Description of tender 1 DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionvDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription ",
    createdDate: "2022-03-25",
  },
  {
    id: 2,
    name: "Tender 2",
    description: "Description of tender 2",
    createdDate: "2022-03-26",
  },
  {
    id: 1,
    name: "Tender 1",
    description: "Description of tender 1 DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionvDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription ",
    createdDate: "2022-03-25",
  },
  {
    id: 2,
    name: "Tender 2",
    description: "Description of tender 2",
    createdDate: "2022-03-26",
  },
  {
    id: 1,
    name: "Tender 1",
    description: "Description of tender 1 DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionvDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription ",
    createdDate: "2022-03-25",
  },
  {
    id: 2,
    name: "Tender 2",
    description: "Description of tender 2",
    createdDate: "2022-03-26",
  },
  {
    id: 1,
    name: "Tender 1",
    description: "Description of tender 1 DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionvDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription ",
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

export async function GET(request: Request) {
  return NextResponse.json(tendersData);
}