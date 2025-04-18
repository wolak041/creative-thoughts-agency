import PostCard from "@/components/postCard/postCard";
import { Post } from "@/domain/Post";
import { Metadata } from "next";

const getData = async (): Promise<Post[]> => {
    const res = await fetch("http://localhost:3000/api/blog", {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

export const metadata: Metadata = {
    title: "Blog",
    description: "Lama blog",
};

const BlogPage = async () => {
    const posts = await getData();

    return (
        <div className="flex flex-wrap justify-between center gap-5">
            {posts.map((post) => (
                <div className="w-[100%] md:w-[45%] xl:w-[30%]" key={post.slug}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
