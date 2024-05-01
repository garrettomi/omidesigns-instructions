import { useState } from "react";

import DesktopNavItems from "./components/DesktopNavItems";
import HamburgerMenuIcon from "./components/HamburgerMenuIcon";
import MobileNavItems from "./components/MobileNavItems";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="absolute top-0 left-0 w-full bg-white z-50">
            <DesktopNavItems />
            <HamburgerMenuIcon isOpen={isOpen} toggle={toggleNav} />
            <MobileNavItems isOpen={isOpen} />
        </nav>
    );
};
