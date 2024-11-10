import { getUser } from "@/lib/users";
import Image from "next/image";

interface PostAuthorProps {
    userId: string;
}

const PostAuthor = async ({ userId }: PostAuthorProps) => {
    const user = await getUser(userId);

    return (
        <>
            <div className="h-[50px] w-[50px]">
                <Image
                    src={user.img}
                    alt="Author image"
                    width={50}
                    height={50}
                    className="object-cover rounded-[50%] h-full w-full"
                />
            </div>
            <div className="flex flex-col gap-2.5">
                <span className="text-gray-500 font-bold">Author</span>
                <span className="font-medium">{user.username}</span>
            </div>
        </>
    );
};

export default PostAuthor;
