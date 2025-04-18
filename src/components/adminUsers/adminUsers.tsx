import { deleteUser } from "@/lib/actions/users";
import { getUsers } from "@/lib/users";
import Image from "next/image";
import React from "react";

const deleteUserWithId = async (username: string) => {
    "use server";

    const formData = new FormData();
    formData.append("username", username);

    return deleteUser(formData);
};

const AdminUsers = async () => {
    const users = await getUsers();

    return (
        <div>
            <h1 className="text-2xl font-bold">Users</h1>
            {users.map((user) => (
                <div
                    key={user.username}
                    className="flex justify-between items-center p-4 border-b border-gray-200 py-4"
                >
                    <div className="flex items-center gap-6">
                        <Image
                            src={user.img}
                            alt={user.username}
                            width={50}
                            height={50}
                        />
                        <div>
                            <p className="text-sm">Mail: {user.email}</p>
                            <p className="text-md">
                                Username:{" "}
                                <span className="font-bold">
                                    {user.username}
                                </span>
                            </p>
                            <p className="text-sm text-gray-500">
                                Is admin: {user.isAdmin ? "Yes" : "No"}
                            </p>
                        </div>
                    </div>
                    <form action={deleteUserWithId.bind(null, user.username)}>
                        <button className="bg-red-600 hover:bg-red-700 py-1 px-3 rounded transition-colors">
                            Delete
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminUsers;
