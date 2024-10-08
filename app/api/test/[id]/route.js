import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/test";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const { id } = params;
    const {newTitle: title, newDescription: description} = request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "Topic Updated"}, {status: 200})
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    await Topic.findOne({_id: id});
    return NextResponse.json({topic}, {status: 200})
}