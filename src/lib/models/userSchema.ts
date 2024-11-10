import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
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
            required: true,
            min: 6,
        },
        img: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export const UserModel =
    mongoose.models.User || mongoose.model("User", userSchema);
