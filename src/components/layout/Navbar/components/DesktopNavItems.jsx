import Logo from "./Logo"
import DesktopNavItem from "./DesktopNavItem";

import { InstagramIcon } from "../../../../utils/SVGIcon";

export default function DesktopNavItems() {
    return (
        <div className="hidden font-medium text-sm text-black px-28 py-6 lg:flex justify-between items-center">
            <Logo />
            <ul className="lg:flex flex-col lg:flex-row items-center gap-8">
                <DesktopNavItem text="Home" url="/" />
                <DesktopNavItem text="About" url="/about" />
                <DesktopNavItem text="Shop" url="https://shop.omidesigns.net/" />                   
                <li>
                    <a href="https://instagram.com/omidesigns_weddingtemplate" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-omidesigns-brown hover:text-gray-600 transition"
                    >
                        <InstagramIcon color="#8B806C" />
                    </a>
                </li>
            </ul>
        </div>
    );
};