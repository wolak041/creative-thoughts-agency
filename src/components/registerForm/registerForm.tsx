"use client";

import { register, RegisterResponse } from "@/lib/actions/register";
import React from "react";
import { useFormState } from "react-dom";

const inputStyles =
    "p-5 rounded-md border-none outline-none bg-soft text-white";

const RegisterForm = () => {
    const [state, formAction] = useFormState<
        RegisterResponse | undefined,
        FormData
    >((prev, payload) => {
        return register(payload);
    }, undefined);

    return (
        <form action={formAction} className="flex-1 flex flex-col gap-5">
            <input
                className={inputStyles}
                type="text"
                placeholder="Username"
                name="username"
            />
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
            <input
                className={inputStyles}
                type="password"
                placeholder="Repeat password"
                name="repeatedPassword"
            />
            <button className="p-5 bg-blue-500 text-white font-bold border-none rounded-md">
                Register
            </button>
            {!state?.isSuccess && (
                <p className="text-red-500 text-center">{state?.message}</p>
            )}
        </form>
    );
};

export default RegisterForm;
