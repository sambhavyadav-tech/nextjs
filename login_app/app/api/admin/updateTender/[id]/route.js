import connectMongoDB from "@/libs/mongodb";
import tender from "@/models/tender";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {newtenderID: tenderId,newtenderTitle:tenderTitle,newtenderDescription:tenderDescription,newpublishDate:publishDate,newclosingDate:closingDate,newtenderStatus:tenderStatus,newcategory:category,newtenderDocuments:tenderDocuments } = await request.json();
  await connectMongoDB();
  await tender.findByIdAndUpdate(id, { tenderId,tenderTitle,tenderDescription,publishDate,closingDate,tenderStatus,category,tenderDocuments });
  return NextResponse.json({ message: "Tender updated" }, { status: 200 });
}

export async function GET(request,{ params }) {
  const { id } = params;
  await connectMongoDB();
  const Tender = await tender.findOne({ _id: id });
  return NextResponse.json({ Tender });
}

