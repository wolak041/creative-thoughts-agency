import { deletePost } from "@/lib/actions/posts";
import { getPosts } from "@/lib/posts";
import Image from "next/image";
import React from "react";

const deletePostWithId = async (slug: string) => {
    "use server";

    const formData = new FormData();
    formData.append("slug", slug);

    return deletePost(formData);
};

const AdminPosts = async () => {
    const posts = await getPosts();

    return (
        <div>
            <h1 className="text-2xl font-bold">Posts</h1>
            {posts.map((post) => (
                <div
                    key={post.slug}
                    className="flex justify-between items-center p-4 border-b border-gray-200 py-4"
                >
                    <div className="flex items-center gap-6">
                        <Image
                            src={post.img}
                            alt={post.title}
                            width={50}
                            height={50}
                        />
                        <div>
                            <p className="text-sm">Id: {post.slug}</p>
                            <p className="text-md">
                                Title:{" "}
                                <span className="font-bold">{post.title}</span>
                            </p>
                            <p className="text-sm text-gray-500">
                                Date: {new Date(post.date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <form action={deletePostWithId.bind(null, post.slug)}>
                        <button className="bg-red-600 hover:bg-red-700 py-1 px-3 rounded transition-colors">
                            Delete
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminPosts;
