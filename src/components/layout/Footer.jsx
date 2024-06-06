import { InstagramIcon } from "../../utils/SVGIcon";

export default function Footer () {
    return (
        <footer className="w-full h-36 py-full px-full bg-omidesigns-white">
            <div>
                <a href="https://instagram.com/omidesigns" target="_blank" rel="noopener noreferrer" className="text-omidesigns-brown hover:text-gray-600 transition">
                    <InstagramIcon color="#8B806C" />
                </a>
            </div>
        </footer>
    );
};
