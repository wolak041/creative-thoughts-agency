import { handleLogout } from "@/lib/actions/logout";
import NavLink from "../navLink/NavLink";
import { User } from "next-auth";

const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
];

interface LinkElements {
    user?: User;
    isAdmin: boolean;
    onClick?: () => void;
}

const LinkElements = ({ user, isAdmin, onClick }: LinkElements) => (
    <>
        {links.map((link) => (
            <NavLink key={link.path} onClick={onClick} {...link} />
        ))}
        {user ? (
            <>
                {isAdmin && (
                    <NavLink onClick={onClick} title="Admin" path="/admin" />
                )}
                <form action={handleLogout}>
                    <button className="p-3 font-medium bg-cyan-50 text-black">
                        Logout
                    </button>
                </form>
            </>
        ) : (
            <>
                <NavLink onClick={onClick} title="Login" path="/login" />
                <NavLink onClick={onClick} title="Register" path="/register" />
            </>
        )}
    </>
);

export default LinkElements;
