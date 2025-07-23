"use server";

import { AuthError } from "next-auth";
import { signIn } from "../auth";

export interface LoginResponse {
    isSuccess: boolean;
    message: string;
}

export const handleLogin = async (
    formData: FormData
): Promise<LoginResponse> => {
    try {
        const { email, password } = Object.fromEntries(formData);

        await signIn("credentials", { 
            email, 
            password,
            redirectTo: "/"
        });

        return {
            isSuccess: true,
            message: "Logged in successfully",
        };
    } catch (error: any) {
        console.log(error);

        const type = (error as AuthError)?.type || "";

        if (type.includes("CredentialsSignin")) {
            return {
                isSuccess: false,
                message: "Something went wrong",
            };
        }

        throw error;
    }
};

export const handleGithubLogin = async () => {
    await signIn("github", { redirectTo: "/" });
};
