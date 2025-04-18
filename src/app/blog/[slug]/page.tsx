import BackButton from "@/components/backButton/backButton";
import PostAuthor from "@/components/postAuthor/postAuthor";
import { Post } from "@/domain/Post";
import { getDate } from "@/helpers/date";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

interface SinglePostPageProps {
    params: {
        slug: string;
    };
}

const getData = async (slug: string): Promise<Post> => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

export const generateMetadata = async ({
    params,
}: SinglePostPageProps): Promise<Metadata> => {
    const post = await getData(params.slug);

    return {
        title: post.title,
        description: post.description,
    };
};

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
    const post = await getData(params.slug);

    return (
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="relative h-[300px] md:flex-1 md:h-[calc(100vh-400px)] md:min-h-[500px]">
                <Image
                    src={post.img}
                    alt="Blog post cover"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-[2] flex-col gap-12">
                <div className="self-start">
                    <BackButton />
                </div>
                <h1 className="text-6xl font-bold">{post.title}</h1>
                <div className="flex gap-5">
                    <Suspense
                        fallback={<div className="min-w-44">Loading...</div>}
                    >
                        <PostAuthor userId={post.userId} />
                    </Suspense>
                    <div className="flex flex-col gap-2.5">
                        <span className="text-gray-500 font-bold">
                            Published
                        </span>
                        <span className="font-medium">
                            {getDate(post.date)}
                        </span>
                    </div>
                </div>
                <div className="text-xl">{post.description}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;
