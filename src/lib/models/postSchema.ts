import mongoose, { Document, Model } from "mongoose";

export interface Post extends Document {
    title: string;
    description: string;
    img: string;
    userId: string;
    slug: string;
    date: Date;
}

const postSchema = new mongoose.Schema<Post>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

export const PostModel: Model<Post> =
    mongoose.models.Post || mongoose.model("Post", postSchema);
