"use server";

import { PostModel } from "../models/postSchema";
import { UserModel } from "../models/userSchema";
import { connectToDb } from "../utils";
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import bcrypt from "bcrypt";

export const addUser = async (post: FormData) => {
    const session = await auth();

    if (!session || !session.user) {
        throw new Error("Unauthorized: Please log in");
    }

    if (!session.user.isAdmin) {
        throw new Error("Forbidden: Admin access required");
    }

    const username = post.get("username");
    const email = post.get("email");
    const password = post.get("password");
    const img = post.get("img");
    const isAdmin = post.get("isAdmin") === "on";

    if (!username || !email || !password) {
        throw new Error("Missing required fields");
    }

    if (typeof password !== "string" || password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
    }

    try {
        connectToDb();

        const existingUser = await UserModel.findOne({
            $or: [{ username }, { email }],
        });

        if (existingUser) {
            throw new Error("Username or email already exists");
        }

        // Hash the password using environment variable for salt rounds
        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || "10");
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
            img,
            isAdmin,
        });
        await newUser.save();

        revalidatePath("/admin");
    } catch (e) {
        console.log(e);

        return {
            error: e instanceof Error ? e.message : "Something went wrong",
        };
    }
};

export const deleteUser = async (post: FormData) => {
    const session = await auth();

    if (!session || !session.user) {
        throw new Error("Unauthorized: Please log in");
    }

    if (!session.user.isAdmin) {
        throw new Error("Forbidden: Admin access required");
    }

    const username = post.get("username");

    if (!username) {
        throw new Error("Missing required field: username");
    }

    if (username === session.user.username) {
        throw new Error("Cannot delete your own account");
    }

    try {
        connectToDb();

        const existingUser = await UserModel.findOne({ username });
        if (!existingUser) {
            throw new Error("User not found");
        }

        await PostModel.deleteMany({ userId: username });
        await UserModel.findOneAndDelete({ username });

        revalidatePath("/admin");
        revalidatePath("/admin");
    } catch (e) {
        console.log(e);

        return {
            error: e instanceof Error ? e.message : "Something went wrong",
        };
    }
};
