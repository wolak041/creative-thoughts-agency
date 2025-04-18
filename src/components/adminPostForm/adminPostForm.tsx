"use client";

import { addPost } from "@/lib/actions/posts";
import React from "react";
import { useFormState } from "react-dom";

const inputStyles =
    "p-5 rounded-md border-none outline-none bg-soft text-white";

interface AdminPostFormProps {
    userId: string;
}

const AdminPostForm = ({ userId }: AdminPostFormProps) => {
    const [state, formAction] = useFormState<
        { error: string } | undefined,
        FormData
    >((prev, formData) => {
        formData.append("userId", userId);
        return addPost(formData);
    }, undefined);

    return (
        <form
            action={formAction}
            className="flex flex-col gap-4 p-6 bg-zinc-900 shadow-md rounded-md"
        >
            <h1 className="text-2xl font-bold">Add New Post</h1>
            <input
                className={inputStyles}
                type="text"
                name="slug"
                placeholder="Slug"
            />
            <input
                className={inputStyles}
                type="text"
                name="title"
                placeholder="Title"
            />
            <input
                className={inputStyles}
                type="text"
                name="img"
                placeholder="Img link"
            />
            <textarea
                className={inputStyles}
                name="description"
                placeholder="Description"
                rows={10} 
            />
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

export default AdminPostForm;
