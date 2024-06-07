import { Link } from "react-router-dom";

import Title from "../components/common/Title";
import YoutubeEmbed from "../components/common/YoutubeEmbed";
import ReferenceAccordion from '../components/layout/Accordion';
import ScrollToTop from "../components/common/ScrollToTop";

export default function Setsumei() {
    return (
        <section className="page-gutters page-format">
            <Title text="説明動画" />
                <p>
                    Youtubeで作成方法を解説しています
                </p>
                <p>
                    以下からご確認ください
                </p>
                <div>
                    <YoutubeEmbed embedId={"4wDsZEWrc5w"} />
                    <Link 
                        to="https://www.youtube.com/watch?si=J8s1OzPUGi18u49U&v=4wDsZEWrc5w&feature=youtu.be"
                        className="font-bold hover:underline"
                    >
                        PC用
                    </Link>
                </div>
                <div>
                    <YoutubeEmbed embedId={"8xtys9QUsP0"} />
                    <Link 
                        to="https://www.youtube.com/watch?si=TW29WzjclEcw1GLX&v=8xtys9QUsP0&feature=youtu.be"
                        className="font-bold hover:underline"
                    >
                        iPhone用
                </Link>
                </div>
                <div className="py-20">
                    <ReferenceAccordion />
                </div>
            <ScrollToTop />
        </section>
    );
};