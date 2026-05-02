'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathName = usePathname();
    const isActive = href == pathName;
    return (
        <div className={`${isActive ? "border-b-2 w-fit border-purple-300 " : ""} ${className}`}>
            <Link href={href}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;