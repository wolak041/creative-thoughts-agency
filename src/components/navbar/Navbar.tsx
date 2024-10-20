import Link from "next/link";
import Links from "./links/Links";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
    return (
        <div className="min-h-24 p-2 flex items-center justify-between">
            <Link className="text-3xl font-medium" href="/">
                Lama
            </Link>
            <Links />
        </div>
    );
};

export default Navbar;
