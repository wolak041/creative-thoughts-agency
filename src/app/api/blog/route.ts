import { PostModel } from "@/lib/models/postSchema";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectToDb();

        const posts = await PostModel.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch posts");
    }
};
