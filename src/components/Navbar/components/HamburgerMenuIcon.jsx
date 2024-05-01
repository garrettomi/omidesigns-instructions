import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function HamburgerMenuIcon({ isOpen, toggle }) {
    return (
        <div className="lg:hidden flex justify-first w-full p-4">
            <button onClick={toggle} title="Navbar toggle button">
            {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
            ): (
                <FontAwesomeIcon icon={faBars} />
            )}
            </button>
            <div className="pl-5">
                <Logo />
            </div>
        </div>
    )
}