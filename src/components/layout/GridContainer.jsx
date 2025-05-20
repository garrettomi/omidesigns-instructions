export default function GridContainer ({ cards }) {
    return (
    <div className="container mx-auto p-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            rel="noopener noreferrer"
            className="flex items-center justify-center h-32 bg-omidesigns-white rounded-lg shadow-md"
          >
            <p className="text-center text-lg font-semibold">{card.title}</p>
          </a>
        ))}
      </div>
    </div>
    );
};
