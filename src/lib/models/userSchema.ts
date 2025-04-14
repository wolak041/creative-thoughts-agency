import mongoose, { Document, Model } from "mongoose";

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    img: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export const userSchema = new mongoose.Schema<User>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 50,
        },
        password: {
            type: String,
            min: 6,
        },
        img: {
            type: String,
            required: true,
            default:
                "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export const UserModel: Model<User> =
    mongoose.models?.User || mongoose.model("User", userSchema);
