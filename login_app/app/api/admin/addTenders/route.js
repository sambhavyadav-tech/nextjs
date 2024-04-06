
import { NextResponse } from "next/server";
import connectMongoDB from "..//..//..//..//libs/mongodb"
import tender from "..//..//..//..//models/tender";
export async function POST(request)
{

    const {  tenderId,tenderTitle,tenderDescription,publishDate,closingDate,tenderStatus,category,tenderDocuments}= await request.json();
    await connectMongoDB();

    await tender.c
    await tender.create({tenderId,tenderTitle,tenderDescription,publishDate,closingDate,tenderStatus,category,tenderDocuments});
    return NextResponse.json({message:"Tender created by Post"},{status: 201});
}

export async function GET() {
    await connectMongoDB();
    const tenders = await tender.find();
    return NextResponse.json({ tenders });
  }
  
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await tender.findByIdAndDelete(id);
    return NextResponse.json({ message: "Tender deleted" }, { status: 200 });
  }