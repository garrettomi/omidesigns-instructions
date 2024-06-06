export default function BorderTextBlock ({ firstSentence, secondSentence }) {
    return (
        <div className="bg-[#ebe3db] w-screen h-28 mx-auto px-4 sm:px-6 md:px-8 py-2 flex flex-col items-center justify-center animate-fadeIn">
            <div>
                <h6 className="font-bold text-sm sm:text-md md:text-lg">{firstSentence}</h6>
            </div>
            <div>
                <h6 className="font-bold text-sm sm:text-md md:text-lg">{secondSentence}</h6>
            </div>
        </div>
    );
};
