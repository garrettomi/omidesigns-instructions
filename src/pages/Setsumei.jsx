import { Link } from "react-router-dom";

import Title from "../components/common/Title";
import SmallTitle from "../components/common/SmallTitle";
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
                    <SmallTitle text="PC用" />
                    <YoutubeEmbed embedId={"4wDsZEWrc5w"} />
                </div>
                <div>
                    <SmallTitle text="iPhone用" />
                    <YoutubeEmbed embedId={"8xtys9QUsP0"} />
                </div>
                <div className="py-20">
                    <ReferenceAccordion />
                </div>
            <ScrollToTop />
        </section>
    );
};