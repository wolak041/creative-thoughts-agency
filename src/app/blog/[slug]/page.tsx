import BackButton from "@/components/backButton/backButton";
import PostAuthor from "@/components/postAuthor/postAuthor";
import { Post } from "@/domain/Post";
import Image from "next/image";
import { Suspense } from "react";

const getData = async (slug: string): Promise<Post> => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${slug}`
    );

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

interface SinglePostPageProps {
    params: {
        slug: string;
    };
}

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
    const post = await getData(params.slug);

    return (
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="relative h-[300px] md:flex-1 md:h-[calc(100vh-400px)] md:min-h-[500px]">
                <Image
                    src="https://images.pexels.com/photos/18936031/pexels-photo-18936031/free-photo-of-korean-bbq-restaurant.jpeg"
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
                    <div className="h-[50px] w-[50px]">
                        <Image
                            src="https://images.pexels.com/photos/18936031/pexels-photo-18936031/free-photo-of-korean-bbq-restaurant.jpeg"
                            alt="Author image"
                            width={50}
                            height={50}
                            className="object-cover rounded-[50%] h-full w-full"
                        />
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostAuthor userId={post.userId} />
                    </Suspense>
                    <div className="flex flex-col gap-2.5">
                        <span className="text-gray-500 font-bold">
                            Published
                        </span>
                        <span className="font-medium">01.01.2024</span>
                    </div>
                </div>
                <div className="text-xl">{post.body}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;
