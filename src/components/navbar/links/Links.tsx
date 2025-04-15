"use client";

import { useState } from "react";
import LinkElements from "./linkElements/LinkElements";
import Image from "next/image";
import { Session } from "next-auth";

interface LinksProps {
    session: Session | null;
}

const Links = ({ session }: LinksProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const isAdmin = true;

    return (
        <div>
            <div className="hidden lg:flex items-center gap-5">
                <LinkElements user={session?.user} isAdmin={isAdmin} />
            </div>
            <button
                className="lg:hidden"
                onClick={() => {
                    setIsOpen((prev) => !prev);
                }}
            >
                {isOpen ? (
                    "X"
                ) : (
                    <Image
                        src="/menu.png"
                        alt="Hamburger menu icon"
                        width={20}
                        height={20}
                    />
                )}
            </button>
            {isOpen && (
                <div className="absolute top-24 right-0 bottom-0 w-screen md:w-[50vw] flex lg:hidden flex-col items-center gap-5 bg-sky-900 p-6 z-20">
                    <LinkElements
                        user={session?.user}
                        isAdmin={isAdmin}
                        onClick={() => setIsOpen(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default Links;
