export default function ListItem ({text}) {
    return (
        <li className="py-1 text-sm sm:text-base md:text-md list-disc break-words">
            {text}
        </li>
    );
};
