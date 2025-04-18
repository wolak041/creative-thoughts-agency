"use server";

import { PostModel } from "../models/postSchema";
import { UserModel } from "../models/userSchema";
import { connectToDb } from "../utils";
import { revalidatePath } from "next/cache";

export const addUser = async (post: FormData) => {
    const username = post.get("username");
    const email = post.get("email");
    const password = post.get("password");
    const img = post.get("img");
    const isAdmin = post.get("isAdmin") === "on";

    try {
        connectToDb();

        const newUser = new UserModel({
            username,
            email,
            password,
            img,
            isAdmin,
        });
        newUser.save();

        revalidatePath("/admin");
    } catch (e) {
        console.log(e);

        return { error: "Something went wrong" };
    }
};

export const deleteUser = async (post: FormData) => {
    const username = post.get("username");

    try {
        connectToDb();

        await PostModel.deleteMany({ userId: username });
        await UserModel.findOneAndDelete({ username });

        revalidatePath("/admin");
        revalidatePath("/admin");
    } catch (e) {
        console.log(e);

        return { error: "Something went wrong" };
    }
};
