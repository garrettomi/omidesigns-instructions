export default function SmallTitle({ idName, text }) {
    return (
        <div id={idName} className="py-2">
            <h4 className="text-sm sm:text-md md:text-lg font-bold">{text}</h4>
        </div>
    );
};
