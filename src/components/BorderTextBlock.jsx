export default function BorderTextBlock ({text}) {
    return (
        <div className="bg-[#ebe3db] w-screen h-28 mx-auto px-4 sm:px-6 md:px-8 py-2 flex items-center justify-center">
            <h6 className="font-bold text-sm sm:text-md md:text-lg">{text}</h6>
        </div>
    );
};
