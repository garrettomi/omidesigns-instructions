import HashLinkListItem from './HashLinkListItem';

const HashLinkList = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <HashLinkListItem key={index} text={item} />
            ))}
        </ul>
    );
};

export default HashLinkList;