import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-black text-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-gray-800"
                >
                    ↑
                </button>
            )}
        </div>
    );
};
