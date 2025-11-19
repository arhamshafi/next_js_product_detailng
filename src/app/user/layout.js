"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function user_layout({ children }) {

    const pathname = usePathname()
    const navLinks = [
        { name: "Home", href: "/user" },
        { name: "Services", href: "/user/services" },
        { name: "Products", href: "/user/products" },
        { name: "Contact", href: "/user/contact" }
    ];


    return (
        <>
            <nav className="w-full h-[60px] bg-green-700 text-white flex justify-between items-center px-10 fixed z-40 top-0 left-0  " >
                <div className="text-3xl font-bold tracking-[2px] ">LOGO</div>
                <ul className="flex gap-4 items-center capitalize">
                    {navLinks.map((item, idx) => (
                        <li key={idx}>
                            <Link href={item.href} className={`cursor-pointer text-white ${pathname === item.href && "text-yellow-500"}`} >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>{children}</div>
            <footer className="w-full h-[60px] bg-green-700 text-white flex justify-center items-center fixed bottom-0 left-0 z-40 text-3xl font-bold ">Footer</footer>
        </>
    )

}

// html or css ma humny proper structure seekha tha lekin yhan use ni ho rha usko ab krna b ha ya ni krna
// like header , main , section , footer etc ....

// ✅ Client component parent → server component child STILL server component hi rehta hai.