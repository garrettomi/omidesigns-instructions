import Logo from "./Logo"
import DesktopNavItem from "./DesktopNavItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function DesktopNavItems() {
    return (
        <div className="hidden font-medium text-sm text-black px-28 py-6 lg:flex justify-between items-center">
            <Logo />
            <ul className="lg:flex flex-col lg:flex-row items-center gap-8">
                <DesktopNavItem text="Home" url="/" />
                <DesktopNavItem text="About" url="/about" />
                <DesktopNavItem text="Shop" url="/shop" />
                <DesktopNavItem text="Contact" url="/contact" />               
                <li>
                    <a href="https://instagram.com/omidesigns" target="_blank" rel="noopener noreferrer" className="text-omidesigns-brown hover:text-gray-600 transition">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
            </ul>
        </div>
    );
};