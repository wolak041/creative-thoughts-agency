import { Post } from "@/domain/Post";
import { getDate } from "@/helpers/date";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            <div className="flex">
                <div className="w-11/12 h-[400px] relative">
                    <Image
                        src={post.img}
                        alt="Blog post cover"
                        fill
                        className="object-cover"
                    />
                </div>
                <span className="w-1/12 text-xs rotate-[270deg] m-auto">
                    {getDate(post.date)}
                </span>
            </div>
            <div>
                <h1 className="text-2xl mb-5 w-11/12">{post.title}</h1>
                <p className="mb-5 font-light text-gray-500 w-11/12">
                    {post.description}
                </p>
                <Link href={`/blog/${post.slug}`} className="underline">
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
