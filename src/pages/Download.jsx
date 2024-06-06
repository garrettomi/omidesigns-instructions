import { Link } from "react-router-dom";

import Title from "../components/common/Title";
import HashLinkList from "../components/common/HashLinkList";
import SubTitle from "../components/common/SubTitle";
import SmallTitle from "../components/common/SmallTitle";
import ContentImage from "../components/common/ContentImage";
import ReferenceAccordion from "../components/layout/Accordion";
import ScrollToTop from "../components/common/ScrollToTop";

import firstImage from '../assets/download-1.png';
import secondImage from '../assets/download-2.png';
import thirdImage from '../assets/download-3.png';
import fourthImage from '../assets/download-4.png';
import fifthImage from '../assets/download-5.png';
import sixthImage from '../assets/download-6.png';
import seventhImage from '../assets/download-7.png';
import eighthImage from '../assets/download-8.png';

export default function Download() {
    const items = [
        {
            text: "ダウンロード",
        },
        {
            text: "DVDへの焼き方",
        },
        {
            text: "式場に確認すること",
            indent: "indent-5"
        },
        {
            text: "おすすめのサイト",
            indent: "indent-5"
        },
        {
            text: "注意",
            indent: "indent-5"
        },
    ];

    return (
        <section className="page-gutters page-format">
            <Title text="ダウンロード・DVD化" />
            <SubTitle text="ダウンロード・DVD化" />
            <HashLinkList items={items} />
            <SubTitle idName="ダウンロード" text="ダウンロード" />
                <p>
                作成した動画、画像を端末に保存します
                </p>
                <p className="mb-2">
                Step.1 右上の「共有」ボタンをクリックします
                </p>
                <div className="grid sm:grid-cols-2">
                    <ContentImage src={firstImage} alt="Step 1 download instructions part 1" />
                    <ContentImage src={secondImage} alt="Step 1 download instructions part 2" />
                </div>
                <p className="mb-2">
                Step.2 ダウンロードをクリックします
                </p>
                <div className="grid sm:grid-cols-2">
                    <ContentImage src={thirdImage} alt="Step 2 download instructions part 1" />
                    <ContentImage src={fourthImage} alt="Step 2 download instructions part 2" />
                </div>
                <p className="mb-2">
                Step.3 動画の場合⇒PM4、印刷物の場合⇒PDFを選択します
                </p>
                <div className="grid sm:grid-cols-2">
                    <ContentImage src={fifthImage} alt="Step 3 download instructions part 1" />
                    <ContentImage src={sixthImage} alt="Step 3 download instructions part 2" />
                </div>
                <p className="mb-2">
                Step.4 いらないページがある場合は、ページの選択からチェックを外します
                </p>
                <div className="grid sm:grid-cols-2">
                    <ContentImage src={seventhImage} alt="Step 4 download instructions part 1" />
                    <ContentImage src={eighthImage} alt="Step 4 download instructions part 2" />
                </div>
                <p>
                ※iPhoneの場合は写真フォルダに保存されます。
                </p>
            <SubTitle idName="DVDへの焼き方" text="DVDへの焼き方" />
            <SmallTitle idName="式場に確認すること" text="式場に確認すること" />
                <p>
                ▪DVD種類の指定はあるか
                </p>
                <p className="mb-5">
                DVD-Rと指定される会場が多い
                </p>
                <p>
                ▪1つのDVDに複数のムービーを保存していいか
                </p>
                <p className="mb-5">
                もしダメならDVDを分ける必要がある!
                </p>
                <p>
                ▪︎メニュー画面が必要か
                </p>
                <p className="mb-5">
                なしと指定される場合が多い
                </p>
            <SmallTitle idName="おすすめのサイト" text="おすすめのサイト" />
                <p className="font-bold">
                【郵送】
                </p>
                <div>
                    <Link to="https://dvdpaint.com/" className="font-bold hover:underline">
                        DVD Paint.com → 1,500円〜
                    </Link>
                </div>
                <div>
                    <Link to="https://merite.jp/" className="font-bold hover:underline">
                        merite アプリ → 480円~
                    </Link>
                </div>
                <p>
                    納期3週間、+330円で特急、16:9のみなど
                </p>
                <p className="mb-5">
                    条件はありますが、安くDVD化が可能です
                </p>
                <p className="mb-5">
                    そのほかminneやココナラでも外注できます
                </p>
                <p className="font-bold">
                    【店舗】
                </p>
                <Link to="https://www.kitamura-print.com/data_conversion/movie_dvd/index.html" className="font-bold hover:underline">
                    カメラのキタムラ → 1,100円〜
                </Link>
                <p>
                    上手く行かなかった方の例も聞いています
                </p>
                <p>
                    ですが、納期がギリギリな時は即日で対応してくれる店舗がいいかも
                </p>
            <SmallTitle idName="注意" text="注意" />
                <p>
                    自分でトライする方法もございますが、うまく行かないことも多いので、業者にお願いすることをおすすめしています
                </p>
                <p>
                    ご自身でDVD化される際の手順についてのご質問などにはお答えできかねます。
                </p>
                <p>
                    （使用されているパソコンやフリーソフトの詳細が分かりかねるため）
                </p>
                <p>
                    できたDVDは問題がないかすぐ確認しましょう!
                </p>
            <div className="py-20">
                <ReferenceAccordion />
            </div>
            <ScrollToTop />
        </section>
    );
};
