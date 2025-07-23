"use server";

import { connectToDb } from "../utils";
import { PostModel } from "../models/postSchema";
import { revalidatePath } from "next/cache";
import { auth } from "../auth";

export const addPost = async (post: FormData) => {
    const session = await auth();
    
    if (!session || !session.user) {
        throw new Error("Unauthorized: Please log in");
    }
    
    if (!session.user.isAdmin) {
        throw new Error("Forbidden: Admin access required");
    }

    const userId = post.get("userId");
    const slug = post.get("slug");
    const title = post.get("title");
    const description = post.get("description");
    const img = post.get("img");

    if (!userId || !slug || !title || !description) {
        throw new Error("Missing required fields");
    }

    if (userId !== session.user.username) {
        throw new Error("Forbidden: Cannot create posts for other users");
    }

    try {
        connectToDb();

        const existingPost = await PostModel.findOne({ slug });
        if (existingPost) {
            throw new Error("Post with this slug already exists");
        }

        const newPost = new PostModel({
            userId,
            slug,
            title,
            description,
            img,
            date: new Date(),
        });

        await newPost.save();

        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (e) {
        console.log(e);

        return { error: e instanceof Error ? e.message : "Something went wrong" };
    }
};

export const deletePost = async (post: FormData) => {
    const session = await auth();
    
    if (!session || !session.user) {
        throw new Error("Unauthorized: Please log in");
    }
    
    if (!session.user.isAdmin) {
        throw new Error("Forbidden: Admin access required");
    }

    const slug = post.get("slug");

    if (!slug) {
        throw new Error("Missing required field: slug");
    }

    try {
        connectToDb();

        const existingPost = await PostModel.findOne({ slug });
        if (!existingPost) {
            throw new Error("Post not found");
        }

        await PostModel.findOneAndDelete({ slug });

        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (e) {
        console.log(e);

        return { error: e instanceof Error ? e.message : "Something went wrong" };
    }
};
