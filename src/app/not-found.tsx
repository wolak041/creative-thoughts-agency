import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-12 py-12">
            <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]">
                <Image
                    src="/not-found.svg"
                    alt="404 Not Found"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-lg">
                <div className="space-y-4">
                    <h1 className="text-5xl lg:text-6xl font-bold">
                        Page Not Found
                    </h1>
                    <p className="text-lg leading-relaxed">
                        Oops! The page you&apos;re looking for seems to have
                        wandered off into the digital void. Don&apos;t worry, it
                        happens to the best of us.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="p-5 min-w-32 rounded-md bg-blue-500 hover:bg-blue-600 text-center"
                    >
                        ← Back to Home
                    </Link>
                    <Link
                        href="/blog"
                        className="p-5 min-w-32 rounded-md bg-cyan-50 hover:bg-cyan-100 text-black text-center"
                    >
                        Browse Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
