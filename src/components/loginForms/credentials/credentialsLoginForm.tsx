"use client";

import { handleLogin, LoginResponse } from "@/lib/actions/login";
import React from "react";
import { useFormState } from "react-dom";

const inputStyles =
    "p-5 rounded-md border-none outline-none bg-soft text-white";

const CredentialsLoginForm = () => {
    const [state, formAction] = useFormState<
        LoginResponse | undefined,
        FormData
    >((prev, payload) => {
        return handleLogin(payload);
    }, undefined);

    return (
        <form action={formAction} className="flex-1 flex flex-col gap-5">
            <input
                className={inputStyles}
                type="text"
                placeholder="Email"
                name="email"
            />
            <input
                className={inputStyles}
                type="password"
                placeholder="Password"
                name="password"
            />
            <button className="p-5 bg-blue-500 text-white font-bold border-none rounded-md">
                Login
            </button>
            {!state?.isSuccess && (
                <p className="text-red-500 text-center">{state?.message}</p>
            )}
        </form>
    );
};

export default CredentialsLoginForm;
