// app/api/tenders.js
import mongoose from "mongoose";
import TenderModel from "../../../../models/tenders"; // Update this path to where your Mongoose model is defined
import { NextResponse } from "next/server";

import connectMongoDB from "../../../../libs/mongodb";

export async function POST(req) {
  await connectMongoDB();

  if (req.method === "POST") {
    try {
      const newTender = new TenderModel(req.body);
      const savedTender = await newTender.save();
      return NextResponse.json({
        savedTender,
        message: " True to save tender",
      }); //.json(savedTender);
    } catch (error) {
      console.error("Error saving tender:", error);
      return NextResponse.json({
        message: "Failed to save tender",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
