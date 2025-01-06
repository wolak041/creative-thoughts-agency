import { addPost, deletePost } from "@/lib/actions/posts";

const inputStyles =
    "p-5 rounded-md border-none outline-none bg-soft text-white";

const ServerActionTestPage = () => {
    return (
        <div className="flex flex-col gap-16">
            <form className="flex flex-col gap-5" action={addPost}>
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="user id"
                    name="userId"
                />
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="slug"
                    name="slug"
                />
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="title"
                    name="title"
                />
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="description"
                    name="description"
                />
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="image"
                    name="img"
                />
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="date"
                    name="date"
                />
                <button className="p-5 bg-blue-500 text-white font-bold border-none rounded-md">
                    Save
                </button>
            </form>
            <form className="flex flex-col gap-5" action={deletePost}>
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="slug"
                    name="slug"
                />
                <button className="p-5 bg-blue-500 text-white font-bold border-none rounded-md">
                    Delete
                </button>
            </form>
        </div>
    );
};

export default ServerActionTestPage;
