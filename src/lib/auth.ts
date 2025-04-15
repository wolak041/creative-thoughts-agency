import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials, { CredentialInput } from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { UserModel } from "./models/userSchema";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (credentials?.email && credentials?.password) {
                    connectToDb();

                    const user = await UserModel.findOne({
                        email: credentials.email,
                    });

                    if (user && typeof credentials.password === "string") {
                        const isPasswordValid = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPasswordValid) {
                            return user;
                        }
                    }
                }

                return null;
            },
        }),
    ],
    callbacks: {
        ...authConfig.callbacks,
        async signIn({ account, profile }) {
            if (account?.provider === "github") {
                connectToDb();

                try {
                    const user = await UserModel.findOne({
                        email: profile?.email,
                    });

                    if (!user) {
                        const newUser = new UserModel({
                            username: profile?.name,
                            email: profile?.email,
                            img: profile?.picture,
                        });

                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error);

                    return false;
                }
            }
            return true;
        },
    },
});
