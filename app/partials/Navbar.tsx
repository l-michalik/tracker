"use client";

import {
    Avatar,
    Dropdown,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
} from "flowbite-react";
import Link from "next/link"; // Correct import
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Nav() {
    const pathname = usePathname(); // This gives you the current URL path
    const [user, setUser] = useState('admin')

    return (
        <Navbar fluid rounded className="!bg-black border-b">
            <NavbarBrand href="/">
                <img src="/globe.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tracker.</span>
            </NavbarBrand>
            <div className="flex md:order-2 items-center gap-2">
                <div className="capitalize w-20 flex justify-end">{user}</div>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img={`/${user}.svg`} rounded />
                    }
                >
                    <DropdownItem onClick={() => setUser('kasia')}>Kasia</DropdownItem>
                    <DropdownItem onClick={() => setUser('mateusz')}>Mateusz</DropdownItem>
                    <DropdownItem onClick={() => setUser('admin')}>Admin</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                {[
                    { href: '/', label: 'Home' },
                    { href: '/tasks', label: 'Tasks' },
                    { href: '/track', label: 'Track' },
                    { href: '/reports', label: 'Reports' },
                ].map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`p-2 rounded-xl ${pathname === item.href ? 'bg-violet-700 text-white' : 'text-white hover:bg-violet-600'}`}
                    >
                        {item.label}
                    </Link>
                ))}
            </NavbarCollapse>
        </Navbar>
    );
}
