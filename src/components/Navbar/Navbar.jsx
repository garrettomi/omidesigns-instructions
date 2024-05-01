import Logo from "../../assets/logo.png"
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    return (
        <nav className="bg-white px-4 py-2 flex justify-between items-center shadow-md">
            <img src={Logo} alt="Omi Designs Logo" className="h-10" />
            <ul className="flex gap-4">
                <NavItem text="Home" url="/" />
                <NavItem text="About" url="/about" />
                <NavItem text="Contact" url="/contact" />               
                <li>
                    <a href="https://instagram.com/omidesigns" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
            </ul>
        </nav>
    );
};
