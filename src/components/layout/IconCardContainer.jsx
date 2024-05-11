export default function IconCardContainer ({ iconCards }) {
    return (
    <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {iconCards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-72 bg-omidesigns-white rounded-lg shadow-md"
          >
            <div>
              {card.icon}
            </div>
            <p className="text-center text-lg font-semibold">{card.title}</p>
          </a>
        ))}
      </div>
    </div>
    );
};
