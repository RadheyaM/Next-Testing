import connectMongoDB from "@/lib/mongodb";
import Costing from "@/models/costing";
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