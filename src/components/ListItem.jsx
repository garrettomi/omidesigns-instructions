import { Link } from "react-router-dom";

export default function ListItem ({url, text}) {
    return (
        <Link to={url}>{text}</Link>
    );
};
