import Link from "next/link";
import Links from "./links/links";
import { auth } from "@/lib/auth";

interface NavbarProps {}

const Navbar = async ({}: NavbarProps) => {
    const session = await auth();

    return (
        <div className="min-h-24 p-2 flex items-center justify-between">
            <Link className="text-3xl font-medium" href="/">
                Lama
            </Link>
            <Links session={session} />
        </div>
    );
};

export default Navbar;
