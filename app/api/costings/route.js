import connectMongoDB from "@/lib/mongodb";
import Costing from "@/models/costing";
import { NextResponse } from "next/server";

export async function POST(request) {
    const costing = await request.json();
    await connectMongoDB();
    await Costing.create(costing)
    return NextResponse.json({message: "Costing Created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB();
    await Costing.find();
    const costing = await Costing.find();
    return NextResponse.json({costing}, {status: 201});
}