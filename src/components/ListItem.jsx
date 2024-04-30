import { Link } from "react-router-dom";

export default function ListItem ({url, text}) {
    return (
        <li className="list-disc">
            <Link to={url}>{text}</Link>
        </li>
    );
};
