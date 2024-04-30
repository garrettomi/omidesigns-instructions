export default function BlockImage({src, alt}) {
    const style = {
        backgroundImage: `url(${src})`,
        position: 'relative'
    };

    return (
        <div style={style} className="bg-cover bg-no-repeat bg-center h-72 w-full">
            <div className="absolute inset-0 bg-white bg-opacity-25" />
            <span className="sr-only">{alt}</span>
        </div>
    );
};
