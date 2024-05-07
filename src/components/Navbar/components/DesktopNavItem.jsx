export default function DesktopNavItem ({ text, url }) {
    return (
        <li>
            <a href={url} className="font-montserrat text-omidesigns-brown hover:text-gray-600 transition">
                {text}
            </a>
        </li>
    );
};
