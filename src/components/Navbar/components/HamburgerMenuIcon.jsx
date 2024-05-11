import Logo from "./Logo";

import { HamburgerIcon, CloseMenuIcon } from "../../../utils/SVGIcon";

export default function HamburgerMenuIcon({ isOpen, toggle }) {
    return (
        <div className="lg:hidden flex justify-first w-full p-4">
            <button onClick={toggle} title="Navbar toggle button">
            {isOpen ? (
                <CloseMenuIcon />
            ): (
                <HamburgerIcon />
            )}
            </button>
            <div className="pl-5">
                <Logo />
            </div>
        </div>
    )
}