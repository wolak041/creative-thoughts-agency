export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container mx-auto px-4 flex flex-1 flex-col justify-between my-4">
            {children}
        </div>
    );
}
