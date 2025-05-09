import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg border border-white/10 shadow-lg rounded-full px-8 py-4 flex space-x-8"
        >
            <Link
                to="/jakehersbach"
                className="text-white hover:text-[#f0a500] transition-colors text-base sm:text-lg"
            >
                Home
            </Link>
            <Link
                to="/jakehersbach/about"
                className="text-white hover:text-[#f0a500] transition-colors text-base sm:text-lg"
            >
                About
            </Link>
            <Link
                to="/jakehersbach/projects"
                className="text-white hover:text-[#f0a500] transition-colors text-base sm:text-lg"
            >
                Projects
            </Link>
            <Link
                to="/jakehersbach/contact"
                className="text-white hover:text-[#f0a500] transition-colors text-base sm:text-lg"
            >
                Contact
            </Link>
        </nav>
    );
};