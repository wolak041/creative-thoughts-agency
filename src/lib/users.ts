import { User } from "@/domain/User";
import { connectToDb } from "./utils";
import { UserModel } from "./models/userSchema";

export const getUsers = async (): Promise<User[]> => {
    try {
        connectToDb();
        const users = await UserModel.find();

        return users.reduce((acc: User[], user) => {
            if (user.username && user.email && user.img) {
                acc.push({
                    username: user.username,
                    email: user.email,
                    img: user.img,
                    isAdmin: user.isAdmin,
                });
            }

            return acc;
        }, []);
    } catch (error) {
        console.log(error);

        throw new Error("Failed to fetch users");
    }
};

export const getUser = async (username: string): Promise<User> => {
    try {
        connectToDb();
        const user = await UserModel.findOne({ username });

        if (!user?.username || !user?.email || !user?.img) {
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
