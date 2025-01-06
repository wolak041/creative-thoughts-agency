import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contact",
    description: "Lama contact",
};

const inputStyles =
    "p-5 rounded-md border-none outline-none bg-soft text-white";

const ContactPage = () => {
    return (
        <div className="flex flex-1 md:flex-[none] flex-col md:flex-row items-center gap-24">
            <div className="md:flex-1 relative w-full h-[300px] md:h-[500px]">
                <Image
                    src="/contact.png"
                    alt="Contact image"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="flex-1">
                <form action="" className="flex flex-col gap-5">
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="Name and Surname"
                    />
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="Email address"
                    />
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="Phone number (Optional)"
                    />
                    <textarea
                        className={`${inputStyles} resize-none`}
                        cols={30}
                        rows={10}
                        placeholder="Message"
                    />
                    <button className="p-5 bg-blue-500 text-white font-bold border-none rounded-md">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
