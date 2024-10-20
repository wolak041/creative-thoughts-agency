"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    title: string;
    path: string;
    onClick?: () => void;
}

const NavLink = ({ path, title, onClick }: NavLinkProps) => {
    const pathName = usePathname();

    return (
        <Link
            onClick={onClick}
            href={path}
            className={`p-3 rounded-3xl font-medium text-center ${
                pathName === path ? "bg-cyan-50 text-black" : ""
            }`}
        >
            {title}
        </Link>
    );
};

export default NavLink;
