import omidesignsLogo from "../../../../assets/logo.png";

export default function Logo () {
    return (
        <div className="flex items-center relative w-full max-w-xs h-auto">
            <a href="/">
                <img src={omidesignsLogo} alt="Omi Designs Logo" className="h-10" />
            </a>
        </div>
    );
};
