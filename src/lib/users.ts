import { User } from "@/domain/User";
import { connectToDb } from "./utils";
import { UserModel } from "./models/userSchema";

export const getUser = async (username: string): Promise<User> => {
    try {
        connectToDb();
        const user = await UserModel.findOne({ username });

        if (!user?.username || !user?.email || !user?.img || !user?.isAdmin) {
            throw new Error("User not found");
        }

        return {
            username: user.username,
            email: user.email,
            img: user.img,
            isAdmin: user.isAdmin,
        };
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch user");
    }
};
