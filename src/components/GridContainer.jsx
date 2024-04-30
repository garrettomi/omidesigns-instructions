export default function GridContainer ({ cards }) {
    return (
    <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-32 bg-gray-200 rounded-lg shadow-md"
          >
            <p className="text-center text-lg font-semibold">{card.title}</p>
          </a>
        ))}
      </div>
    </div>
    );
};
