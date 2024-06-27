"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarItemProps = {
    text: string,
    href: string,
};

const NavbarItem = ({ text, href }: NavbarItemProps) => {
    return (
        <Link href={href} className="bg-blue-500 hover:text-gray-300 transition duration-200">
            <p className="text-lg">{text}</p>
        </Link>
    );
};

export const Navbar = () => {
    const pathname = usePathname();

    if (pathname === "/upload") return null;

    return (
        <div className="w-full fixed flex items-center justify-between p-5 bg-red-500 z-50">
            <Link href="/">
                <p>Printer Form (Logo here eventually)</p>
            </Link>
            <div className="flex items-center space-x-3 bg-green-500">
                {pathname !== "/" && (
                    <NavbarItem text="Home" href="/" />
                )}
                <NavbarItem text="How To" href="how-to" />
                <NavbarItem text="Resources" href="resources" />
                <NavbarItem text="About" href="about" />
            </div>
        </div>
    );
};