const YoutubeEmbed = ({ embedId }) => {
    return (
        <div className="overflow-hidden pb-96 relative h-0">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded video"
                className="left-0 top-0 h-full w-full absolute"
                />
        </div>
    );
};

export default YoutubeEmbed;
