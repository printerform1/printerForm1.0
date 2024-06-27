"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    if (pathname === "/upload") return null;

    return (
        <div className="flex items-center justify-center bg-purple-500 w-full min-h-48">
            <h1>FOOTER AREA</h1>
        </div>
    );
};

export default Footer;