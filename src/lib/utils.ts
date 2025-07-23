import mongoose from "mongoose";
import { env } from "./env";

const connection = {
    isConnected: false,
};

export const connectToDb = async () => {
    if (connection.isConnected) {
        console.log("Using existing connection");
        return;
    } else {
        try {
            const {
                connection: { readyState },
            } = await mongoose.connect(env.MONGO ?? "");

            connection.isConnected = readyState === 1 || readyState === 2;
        } catch (error) {
            console.log(error);

            throw new Error("Unable to connect to database");
        }
    }
};
