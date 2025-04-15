"use client";

import { handleGithubLogin } from "@/lib/actions/login";
import Image from "next/image";
import React from "react";
import { useFormState } from "react-dom";

const GitHubLoginForm = () => {
    const [state, formAction] = useFormState(() => {
        handleGithubLogin();
    }, undefined);

    return (
        <form action={formAction} className="flex justify-center">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 hover:bg-gray-100">
                <Image
                    src="/github.svg"
                    alt="GitHub logo"
                    width={20}
                    height={20}
                    className="object-contain"
                />
                Login with GitHub
            </button>
        </form>
    );
};

export default GitHubLoginForm;
