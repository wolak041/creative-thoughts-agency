import { User } from "@/domain/User";

const getData = async (userId: User["id"]): Promise<User> => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

interface PostAuthorProps {
    userId: User["id"];
}

const PostAuthor = async ({ userId }: PostAuthorProps) => {
    const user = await getData(userId);

    return (
        <div className="flex flex-col gap-2.5">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="font-medium">{user.name}</span>
        </div>
    );
};

export default PostAuthor;
