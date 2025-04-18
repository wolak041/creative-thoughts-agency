"use client";

import { addUser } from "@/lib/actions/users";
import React from "react";
import { useFormState } from "react-dom";

const inputStyles =
    "p-5 rounded-md border-none outline-none bg-soft text-white";

const AdminUserForm = () => {
    const [state, formAction] = useFormState<
        { error: string } | undefined,
        FormData
    >((prev, formData) => {
        return addUser(formData);
    }, undefined);

    return (
        <form
            action={formAction}
            className="flex flex-col gap-4 p-6 bg-zinc-900 shadow-md rounded-md"
        >
            <h1 className="text-2xl font-bold">Add New User</h1>
            <input
                className={inputStyles}
                type="text"
                name="username"
                placeholder="Username"
            />
            <input
                className={inputStyles}
                type="text"
                name="email"
                placeholder="Email"
            />
            <input
                className={inputStyles}
                type="password"
                name="password"
                placeholder="Password"
            />
            <input
                className={inputStyles}
                type="text"
                name="img"
                placeholder="Img link"
            />
            <div className="flex items-center gap-2">
                <input type="checkbox" id="isAdmin" name="isAdmin" className="w-5 h-5" />
                <label htmlFor="isAdmin" className="text-white">
                    Is admin
                </label>
            </div>
            <button
                type="submit"
                className="p-5 bg-blue-500 text-white font-bold border-none rounded-md"
            >
                Submit
            </button>
            {state?.error && (
                <p className="text-red-500 text-center">{state.error}</p>
            )}
        </form>
    );
};

export default AdminUserForm;
