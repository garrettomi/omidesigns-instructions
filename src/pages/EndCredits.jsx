import HashLinkList from "../components/common/HashLinkList";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import ContentImage from "../components/common/ContentImage";
import ReferenceAccordion from "../components/layout/Accordion";
import ScrollToTop from "../components/common/ScrollToTop";

import firstImage from "../assets/end-credits-1.png";
import secondImage from "../assets/end-credits-2.png";
import thirdImage from "../assets/end-credits-3.png";
import fourthImage from "../assets/end-credits-4.png";

const items = [
    {
        text: "初期設定の変更"
    },
    {
        text: "PC"
    },
    {
        text: "iPhone"
    },
    {
        text: "文字の流れるスピード変更"
    },
    {
        text: "iPhoneで操作中の方"
    }
];

export default function EndCredits() {
    return (
        <section className="page-gutters page-format">
            <Title text="エンドロール作成の注意点" />
            <HashLinkList items={items} />
            <SubTitle idName="初期設定の変更" text="初期設定の変更" />
                <p>
                    素材のタイミングを表示すると、入れ替えのタイミングが見れるようになります。
                </p>
            <SubTitle idName="PC" text="PC:" />
                <p>
                    右クリック→
                </p>
                <p>
                    「素材のタイミングを表示」をクリック
                </p>
            <SubTitle idName="iPhone" text="iPhone:" />
                <p>
                    テキストを選択
                </p>
                <ContentImage src={firstImage} alt="Step 1 for end credits" />
                <p>
                    「･･･」をクリック
                </p>
                <ContentImage src={secondImage} alt="Step 2 for end credits" />
                <p>
                    「素材のタイミングを表示」をクリック
                </p>
                <ContentImage src={thirdImage} alt="Step 3 for end credits" />
                <p>
                    写真の表示秒数を変更や写真の変更ができるようになります
                </p>
                <ContentImage src={fourthImage} alt="Step 4 for end credits" />
            <SubTitle idName="文字の流れるスピード変更" text="文字の流れるスピード変更" />
                <p>
                    文字の流れるスピードを変更したい場合は、スライドの秒数を変更ください。
                </p>
                <p>
                    それでも流れる文章早すぎる際は、ページを複製し、メッセージを別のページに分けてください。
                </p>
            <SubTitle idName="iPhoneで操作中の方" text="iPhone で操作中の方" />
                <p>
                    文章が変更しにくい場合は、メモやLINEで下書きしてからムービーに貼り付けてください。
                </p>
            <div className="py-20">
                <ReferenceAccordion />
            </div>
            <ScrollToTop />
        </section>
    );
};
