import { Link } from "react-router-dom";

import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import ReferenceAccordion from '../components/layout/Accordion';
import ScrollToTop from "../components/common/ScrollToTop";

export default function Setsumei() {
    return (
        <section className="page-gutters page-format">
            <Title text="説明動画" />
            <SubTitle text="説明動画" />
                <p>
                Youtubeで作成方法を解説しています
                </p>
                <p>
                以下からご確認ください
                </p>
                <Link to="https://www.youtube.com/watch?si=J8s1OzPUGi18u49U&v=4wDsZEWrc5w&feature=youtu.be">
                PC用
                </Link>
                <Link to="https://www.youtube.com/watch?si=TW29WzjclEcw1GLX&v=8xtys9QUsP0&feature=youtu.be">
                iPhone用
                </Link>
                <div className="py-20">
                    <ReferenceAccordion />
                </div>
            <ScrollToTop />
        </section>
    );
};