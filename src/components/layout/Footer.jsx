import { InstagramIcon } from "../../utils/SVGIcon";

export default function Footer () {
    return (
        <footer className="w-full h-36 py-4 px-full bg-omidesigns-white flex flex-col justify-center items-center text-center">
            <div className="mb-4">
                <a href="https://instagram.com/omidesigns_weddingtemplate" target="_blank" rel="noopener noreferrer" className="text-omidesigns-brown hover:text-gray-600 transition">
                    <InstagramIcon color="#8B806C" />
                </a>
            </div>
            <div className="text-omidesigns-brown tracking-wide uppercase antialised">
                COPYRIGHT © Omi Designs | ウェディングムービーテンプレート
            </div>
        </footer>
    );
};
