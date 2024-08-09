import connectMongoDB from "@/lib/mongodb";
import Customers from "@/models/customers";
import { NextResponse } from "next/server";

export async function POST(request) {
    const customers = await request.json();
    await connectMongoDB();
    await Customers.create(customers)
    return NextResponse.json(
        {message: "Customer Created"}, {status: 201}
    )
}

export async function GET(request) {
    await connectMongoDB();
    const customers = await Customers.find({});
    return NextResponse.json({customers}, {status: 200})
}