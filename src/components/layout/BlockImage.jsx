import HeaderTitle from "../common/HeaderTitle";

export default function BlockImage({src, alt}) {
    const style = {
        backgroundImage: `url(${src})`,
        position: 'relative'
    };

    return (
        <div style={style} className="bg-cover bg-no-repeat bg-center h-72 w-full animate-fadeIn">
            <div className="absolute inset-0 flex justify-center items-center pt-20 z-20">
                <HeaderTitle text="ムービーの作り方" />
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-25 z-10" />
            <span className="sr-only">{alt}</span>
        </div>
    );
};
