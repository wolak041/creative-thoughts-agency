import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/posts";

const BlogPage = async () => {
    const posts = await getPosts();

    return (
        <div className="flex flex-wrap gap-5">
            {posts.map((post) => (
                <div className="w-[100%] md:w-[45%] xl:w-[30%]" key={post.slug}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
