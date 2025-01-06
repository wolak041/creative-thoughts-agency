"use server";

import { connectToDb } from "../utils";
import { PostModel } from "../models/postSchema";
import { revalidatePath } from "next/cache";

export const addPost = async (post: FormData) => {
    const userId = post.get("userId");
    const slug = post.get("slug");
    const title = post.get("title");
    const description = post.get("description");
    const img = post.get("img");
    const date = post.get("date");

    try {
        connectToDb();

        const newPost = new PostModel({
            userId,
            slug,
            title,
            description,
            img,
            date,
        });

        await newPost.save();

        revalidatePath("/blog");
    } catch (e) {
        console.log(e);

        return { error: "Something went wrong" };
    }
};

export const deletePost = async (post: FormData) => {
    const slug = post.get("slug");

    try {
        connectToDb();

        await PostModel.findOneAndDelete({ slug });

        revalidatePath("/blog");
    } catch (e) {
        console.log(e);

        return { error: "Something went wrong" };
    }
};
