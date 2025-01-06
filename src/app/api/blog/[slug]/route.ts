import { PostModel } from "@/lib/models/postSchema";
import { connectToDb } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

interface SinglePostPageProps {
    params: {
        slug: string;
    };
}

export const GET = async (
    request: NextRequest,
    { params }: SinglePostPageProps
) => {
    const { slug } = params;

    try {
        connectToDb();

        const post = await PostModel.findOne({ slug }).lean();
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch post");
    }
};
