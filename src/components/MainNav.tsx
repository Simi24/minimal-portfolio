//TODO: replace linkedin link with form section
export const MainNav = () => {
    return (
        <nav className="fixed inset-x-0 top-0 flex justify-between items-center bg-sky-950 p-6 w-full z-50 hidden gap-2 md:flex">
            <div className="text-white">
                <a href="#home" className="font-semibold text-xl tracking-tight hover:text-white text-white">Simone Paolo Petta</a>
            </div>
            <div className="flex">
                <a href="#about" className="text-white hover:text-white mr-4">
                    About Me
                </a>
                <a href="#experience" className="text-white hover:text-white mr-4">
                    Experience
                </a>
                <a href="#projects" className="text-white hover:text-white mr-4">
                    Projects
                </a>
                <a href="https://www.linkedin.com/in/simone-paolo-petta/" className="text-white hover:text-white animate-bounce">
                    Hire Me 🚀
                </a>
            </div>
        </nav>
    );
}