import { NavLink } from "react-router-dom";

export default function NavItem ({ text, url }) {
    return (
        <div>
            <NavLink to={url}>
                {text}
            </NavLink>
        </div>
    );
};
