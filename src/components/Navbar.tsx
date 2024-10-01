import { MainNav } from "./MainNav";
import MobileNav from "./MobileNav";

export const Navbar = () => {
    return (
        <header className="w-full bg-sky-950">
            <div className="container mx-auto flex h-14 items-center px-4">
                <MainNav />
                <MobileNav />
            </div>
        </header>
    )
};