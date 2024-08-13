import connectMongoDB from "@/lib/mongodb";
import IngCosts from "@/models/ingredients/june-2024";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectMongoDB();
    const ings = await IngCosts.find();
    const data = JSON.parse(JSON.stringify(ings));
    // console.log("DATA: ", data);
    return NextResponse.json({data}, {status: 200})
}