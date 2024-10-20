"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => {
                router.push("/blog");
            }}
            className="text-sm text-gray-500 underline"
        >
            {`<-`} go back
        </button>
    );
};

export default BackButton;
