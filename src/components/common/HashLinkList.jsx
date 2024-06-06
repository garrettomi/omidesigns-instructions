import HashLinkListItem from './HashLinkListItem';

const HashLinkList = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <HashLinkListItem key={index} text={item.text} indent={item.indent} />
            ))}
        </ul>
    );
};

export default HashLinkList;