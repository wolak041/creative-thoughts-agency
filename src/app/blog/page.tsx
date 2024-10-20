import PostCard from "@/components/postCard/postCard";
import { Post } from "@/domain/Post";

const getData = async (): Promise<Post[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

const BlogPage = async () => {
    const posts = await getData();

    return (
        <div className="flex flex-wrap gap-5">
            {posts.map((post) => (
                <div className="w-[100%] md:w-[45%] xl:w-[30%]" key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
