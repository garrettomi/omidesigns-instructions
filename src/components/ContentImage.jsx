export default function ContentImage ({ src, alt }) {
    return (
        <div className="pt-2 pb-8">
            <img className="w-full max-w-2xl mx-auto" src={src} alt={alt} />
        </div>
    );
};
