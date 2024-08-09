import connectMongoDB from "@/lib/mongodb";
import Costing from "@/models/customers";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const { customerId } = params;
    await connectMongoDB();
    const result = await Costing.find({customerId: customerId});
    var costings = result;
    if (result === undefined) {
        costings = {
            "_id":"CNF",
            "customerId": customerId,
            "customerName": "No Costing Found",
            "name": " Try Again"
        }
    console.log("here is costings: ", costings)
    }
    return NextResponse.json({costings}, {status: 200});
}