export default function MobileNavItem({ url, label }) {
    return (
        <a href={url} className={`font-montserrat text-black block p-4 hover:bg-[#F7F5F6]`}>
            {label}
        </a>
    );
};