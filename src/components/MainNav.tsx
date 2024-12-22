//TODO: replace linkedin link with form section
import { Link, useLocation } from 'react-router-dom';

export const MainNav = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <nav className="fixed inset-x-0 top-0 flex justify-between items-center bg-sky-950 p-6 w-full z-50 hidden gap-2 md:flex">
            <div className="text-white">
                <Link 
                    to="/" 
                    className="font-semibold text-xl tracking-tight hover:text-white text-white"
                >
                    Simone Paolo Petta
                </Link>
            </div>
            <div className="flex">
                {isHomePage ? (
                    <>
                        <a href="#about" className="text-white hover:text-white mr-4">
                            About Me
                        </a>
                        <a href="#experience" className="text-white hover:text-white mr-4">
                            Experience
                        </a>
                        <a href="#projects" className="text-white hover:text-white mr-4">
                            Projects
                        </a>
                    </>
                ) : (
                    <>
                        <Link to="/#about" className="text-white hover:text-white mr-4">
                            About Me
                        </Link>
                        <Link to="/#experience" className="text-white hover:text-white mr-4">
                            Experience
                        </Link>
                        <Link to="/#projects" className="text-white hover:text-white mr-4">
                            Projects
                        </Link>
                    </>
                )}
                <Link to="/notes" className="text-white hover:text-white mr-4">
                    Uni Notes
                </Link>
                <a 
                    href="https://www.linkedin.com/in/simone-paolo-petta/" 
                    className="text-white hover:text-white animate-bounce"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hire Me 🚀
                </a>
            </div>
        </nav>
    );
}