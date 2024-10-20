import NavLink from "../navLink/NavLink";

const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
];

interface LinkElements {
    session: boolean;
    isAdmin: boolean;
    onClick?: () => void;
}

const LinkElements = ({ session, isAdmin, onClick }: LinkElements) => (
    <>
        {links.map((link) => (
            <NavLink key={link.path} onClick={onClick} {...link} />
        ))}
        {session ? (
            <>
                {isAdmin && <NavLink onClick={onClick} title="Admin" path="/admin" />}
                <button className="p-3 font-medium bg-cyan-50 text-black">
                    Logout
                </button>
            </>
        ) : (
            <NavLink title="Login" path="/login" />
        )}
    </>
);

export default LinkElements;
