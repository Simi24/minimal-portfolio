import React from "react";
import { MainNav } from "./MainNav";
import MobileNav from "./MobileNav";

export const Navbar = () => {
    return (
        <header className="w-full">
        <div className="flex h-14 items-center px-4">
            <MainNav />
            <MobileNav />
        </div>
        </header>
    )
};