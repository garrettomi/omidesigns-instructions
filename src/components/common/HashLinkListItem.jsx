import { HashLink } from 'react-router-hash-link';

const HashLinkListItem = ({ text }) => {
    return (
        <li>
            <HashLink to={`#${text}`}>{text}</HashLink>
        </li>
    );
};

export default HashLinkListItem;