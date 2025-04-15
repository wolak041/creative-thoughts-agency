import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <div className="flex flex-1 md:flex-[none] flex-col-reverse lg:flex-row gap-24">
            <div className="flex flex-1 flex-col gap-12">
                <h1 className="text-8xl font-bold">
                    Creative Thoughts Agency.
                </h1>
                <p className="text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor ratione quo accusamus optio a repellat, sed provident
                    ullam deleniti, laboriosam facilis placeat aut dignissimos
                    accusantium dolore ab quas voluptatum necessitatibus.
                </p>
                <div className="flex gap-5">
                    <Link
                        href="/about"
                        className="p-5 min-w-32 rounded-md bg-blue-500 hover:bg-blue-600 text-center"
                    >
                        Learn More
                    </Link>
                    <Link
                        href="/contact"
                        className="p-5 min-w-32 rounded-md bg-cyan-50 hover:bg-cyan-100 text-black text-center"
                    >
                        Contact
                    </Link>
                </div>
                <div className="relative w-[500px] h-[50px] grayscale">
                    <Image src="/brands.png" alt="Brands image" fill />
                </div>
            </div>
            <div className="lg:flex-1 relative h-[300px] lg:h-[unset]">
                <Image
                    src="/hero.gif"
                    alt="Hero image"
                    fill
                    unoptimized
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default Home;
