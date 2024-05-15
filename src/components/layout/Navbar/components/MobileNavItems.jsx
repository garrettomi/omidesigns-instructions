import MobileNavItem from "./MobileNavItem";

import { InstagramIcon } from '../../../../utils/SVGIcon';

export default function MobileNavItems({ isOpen }) {
    if(!isOpen) return null;

    return (
        <div className="lg:hidden bg-[#EBE3DB]">
            <MobileNavItem url="/" label="Home" />
            <MobileNavItem url="/about" label="About" />
            <MobileNavItem url="/shop" label="Shop" />
            <MobileNavItem url="/contact" label="Contact" />
            <div className="p-5">
            <a href="https://instagram.com/omidesigns" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition">
                <InstagramIcon color="black" />
            </a>
            </div>
        </div>
    );
};