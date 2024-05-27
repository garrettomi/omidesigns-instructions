export default function SubTitle( { idName, text }) {
    return (
        <div id={idName} className="py-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{text}</h3>
        </div>
    );
};
