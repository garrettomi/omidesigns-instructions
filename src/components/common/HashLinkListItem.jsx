import { HashLink } from 'react-router-hash-link';

const HashLinkListItem = ({ text, indent }) => {
    return (
        <>
            {indent ?
                <li className="indent-5 font-bold hover:underline">
                    <HashLink to={`#${text}`}>
                        {text}
                    </HashLink>
                </li> 
                : 
                <li className="font-bold hover:underline"> 
                    <HashLink to={`#${text}`}>
                        {text}
                    </HashLink>
                </li>
            }
        </>
    );
};

export default HashLinkListItem;
