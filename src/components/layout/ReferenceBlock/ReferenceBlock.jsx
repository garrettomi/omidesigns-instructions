import { Link } from "react-router-dom";

export default function ReferenceBlock () {
    return (
        <div className="border-2 border-black">
            <p className="font-bold">Reference Title</p>
                <ul>
                    <li>
                        <Link href="/">
                            Item #1
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Item #2
                        </Link>
                    </li>
                </ul>
        </div>
    );
};
