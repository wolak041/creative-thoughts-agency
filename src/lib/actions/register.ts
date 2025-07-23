"use server";

import { redirect } from "next/navigation";
import { UserModel } from "../models/userSchema";
import { connectToDb } from "../utils";
import bcrypt from "bcrypt";
import { env } from "../env";

export interface RegisterResponse {
    isSuccess: boolean;
    message: string;
}

export const register = async (
    formData: FormData
): Promise<RegisterResponse> => {
    try {
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const repeatedPassword = formData.get("repeatedPassword");

        if (typeof password !== "string") {
            throw new Error("Password is incorrect");
        }

        if (password && password !== repeatedPassword) {
            throw new Error("Passwords do not match!");
        }

        connectToDb();

        const user = await UserModel.findOne({
            $or: [{ username }, { email }],
        });

        if (user) {
            throw new Error("Username or email already exists");
        }

        const salt = await bcrypt.genSalt(env.BCRYPT_SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
        });
        newUser.save();

        console.log("Saved to db");
    } catch (error) {
        console.log(error);

        return {
            isSuccess: false,
            message: "Something went wrong",
        };
    }

    redirect("/login");
};
