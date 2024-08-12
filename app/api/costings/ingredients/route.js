import connectMongoDB from "@/lib/mongodb";
import IngCosts from "@/models/ingredients/june-2024";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    await IngCosts.find();
    const ings = await IngCosts.find();
    console.log("INGS:", ings)
    return NextResponse.json({ings}, {status: 200})
}