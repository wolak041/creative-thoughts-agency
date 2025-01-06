import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About",
    description: "About Lama",
};

const AboutPage = () => {
    return (
        <div className="flex flex-1 md:flex-[none] flex-col-reverse md:flex-row gap-24">
            <div className="flex flex-1 flex-col gap-12">
                <h2 className="text-xl text-blue-500 font-bold">
                    About Agency
                </h2>
                <h1 className="text-5xl font-bold">
                    We create digital ideas that are bigger, bolder, braver and
                    better.
                </h1>
                <p className="text-xl font-light">
                    We create digital ideas that are bigger, bolder, braver and
                    better. We believe in good ideas flexibility and precission
                    We’re world’s Our Special Team best consulting & finance
                    solution provider. Wide range of web and software
                    development services.
                </p>
                <div className="flex items-center flex-col md:flex-row justify-between">
                    <Box>
                        <BoxHeader>10 K+</BoxHeader>
                        <p>Year of experience</p>
                    </Box>
                    <Box>
                        <BoxHeader>234 K+</BoxHeader>
                        <p>People reached</p>
                    </Box>
                    <Box>
                        <BoxHeader>5 K+</BoxHeader>
                        <p>Services and plugins</p>
                    </Box>
                </div>
            </div>
            <div className="relative md:flex-1 h-[300px] md:h-[500px]">
                <Image
                    src="/about.png"
                    alt="About image"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
};

interface BoxProps {
    children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => (
    <div className="flex flex-col gap-2.5">{children}</div>
);

interface BoxHeaderProps {
    children: React.ReactNode;
}

const BoxHeader = ({ children }: BoxHeaderProps) => (
    <h1 className="text-3xl font-bold text-blue-500 text-center">{children}</h1>
);

export default AboutPage;
