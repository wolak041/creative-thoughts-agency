import { Post } from "@/domain/Post";
import { PostModel } from "./models/postSchema";
import { connectToDb } from "./utils";

export const getPosts = async (): Promise<Post[]> => {
    try {
        connectToDb();
        const posts = await PostModel.find();

        return posts.reduce((acc: Post[], post) => {
            if (
                post.userId &&
                post.slug &&
                post.title &&
                post.description &&
                post.img &&
                post.date
            ) {
                acc.push({
                    userId: post.userId,
                    slug: post.slug,
                    title: post.title,
                    description: post.description,
                    img: post.img,
                    date: post.date.toISOString(),
                });
            }

            return acc;
        }, []);
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch posts");
    }
};

export const getPost = async (slug: string): Promise<Post> => {
    try {
        connectToDb();
        const post = await PostModel.findOne({ slug });

        if (
            !post?.userId ||
            !post?.slug ||
            !post?.title ||
            !post?.description ||
            !post?.img ||
            !post?.date
        ) {
            throw new Error("Post not found");
        }

        return {
            userId: post.userId,
            slug: post.slug,
            title: post.title,
            description: post.description,
            img: post.img,
            date: post.date.toISOString(),
        };
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch post");
    }
};
