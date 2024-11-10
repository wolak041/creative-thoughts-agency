import { Post } from "@/domain/Post";
import { PostModel } from "./models/postSchema";
import { connectToDb } from "./utils";

export const getPosts = async (): Promise<Post[]> => {
    try {
        connectToDb();
        const posts = await PostModel.find();

        return posts;
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch posts");
    }
};

export const getPost = async (slug: string): Promise<Post> => {
    try {
        connectToDb();
        const post = await PostModel.findOne({ slug });

        return post;
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch post");
    }
};
