import { User } from "@/domain/User";
import { connectToDb } from "./utils";
import { UserModel } from "./models/userSchema";

export const getUser = async (username: string): Promise<User> => {
    try {
        connectToDb();
        const user = await UserModel.findOne({ username });

        return user;
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch user");
    }
};
