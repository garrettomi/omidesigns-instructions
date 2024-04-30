export default function BlockImage({src, alt}) {
    const style = {
        backgroundImage: `url(${src})`
    };

    return (
        <div style={style} className="bg-cover bg-no-repeat bg-center h-72 w-full">
            <span className="sr-only">{alt}</span>
        </div>
    );
};
