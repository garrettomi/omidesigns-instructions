import { Link } from "react-router-dom";

import HashLinkList from "../components/common/HashLinkList";
import SubTitle from "../components/common/SubTitle";
import Title from "../components/common/Title";
import SmallTitle from "../components/common/SmallTitle";
import ReferenceAccordion from "../components/layout/Accordion";
import ScrollToTop from "../components/common/ScrollToTop";

export default function Ongaku() {
    const items = [
        {
            text: "音楽について",
        },
        {
            text: "テンプレートで使用している曲",
            indent: "indent-5",
        },
        {
            text: "著作権について",
            indent: "indent-5",
        },
        {
            text: "Canva上の曲について",
            indent: "indent-5",
        },
        {
            text: "著作権フリー音楽",
            indent: "indent-5",
        },
        {
            text: "おすすめサイト",
            indent: "indent-10",
        },
        {
            text:  "音楽の追加方法",
            indent: "indent-5",
        },
        {
            text:  "iPhone への保存方法",
            indent: "indent-5",
        },
        {
            text:  "注意",
            indent: "indent-5",
        },
    ];

    return (
        <section className="page-format page-gutters">
            <Title text="音楽について" />
            <HashLinkList items={items} />
                <SubTitle idName="音楽について" text="音楽について" />
                <SubTitle idName="テンプレートで使用している曲" text="テンプレートで使用している曲" />
                    <p>
                    テンプレートで使用している曲は著作権フリーの曲です。
                    </p>
                    <p>
                    そのまま結婚式でご使用いただけます。
                    </p>
                <SubTitle idName="著作権について" text="著作権について" />
                    <p>
                    結婚式に好きなアーティストの曲を勝手に流すと著作権で問題になってしまう可能性がございます
                    </p>
                    <p>
                    式場と必要な申請等をご確認の上、曲を使用するようにしてください。
                    </p>
                <SubTitle idName="Canva上の曲について" text="Canva上の曲について" />
                    <p>
                    Canva にある曲は全て結婚式で使用することが可能です
                    </p>
                    <p>
                    詳しくは
                        <a href="https://www.canva.com/ja_jp/learn/commercial-use/">
                        Canvaのサイト
                        </a>
                    をご確認ください
                    </p>
                <SubTitle idName="著作権フリー音楽" text="著作権フリー音楽" />
                <SmallTitle idName="おすすめサイト" text="おすすめサイト" />
                    <p>
                    いずれの当ショップで所有している曲ではございません。
                    </p>
                    <p>
                    利用規約をご覧の上ご使用ください。
                    </p>
                    <p className="mb-5">
                    また、音楽のダウンロード方法はサポート外です。ご了承願います。
                    </p>
                    <Link to="https://dova-s.jp/" className="font-bold hover:underline">
                    DOVA-SYNDROME
                    </Link>
                    <p className="mb-5">
                    12,000曲以上が無料でダウンロード可能、絞り込み機能があります。
                    </p>
                    <Link to="https://www.youtube.com/playlist?list=PLhVixZ3ct0DyEKuMA91j3mn0kwc2FjJLm" className="font-bold hover:underline">
                    Youtube 著作権フリー音楽まとめ
                    </Link>
                    <p>
                    海外の方が作っているアコースティック系の曲をまとめました
                    </p>
                    <p className="mb-5">
                    「🔽 Free MP3 Download:」からダウンロードできます
                    </p>
                    <Link to="https://music.nonono.jp/" className="font-bold hover:underline">
                    のんのオルゴール
                    </Link>
                    <p className="mb-5">
                    オルゴール専門のBGMサイト、癒し系の曲
                    </p>
                    <Link to="https://shw.in/" className="font-bold hover:underline">
                    SHW
                    </Link>
                    <p className="mb-5">
                    オーケストラや和の音楽があります
                    </p>
                <SubTitle idName="音楽の追加方法" text="音楽の追加方法" />
                    <p>
                    ご自身で操作するデバイスに曲&#40;PM3ファイル&#41;を保存いただき、アップロードから追加ください。
                    </p>
                    <p>
                    &#40;Iphoneの場合はアップロード→ファイルを選択&#41;
                    </p>
                <SubTitle idName="iPhone への保存方法" text="iPhone への保存方法" />
                    <p>
                    楽曲のダウンロードの方法はサポート対象外です。
                    </p>
                    <p>
                    iPhoneのYouTubeダウンロード保存アプリを紹介しているサイトをご確認ください。
                    </p>
                <SubTitle idName="注意" text="注意" />
                    <p>
                    ストリーミングサービスからのアップロードはできません。
                    </p>
                    <p>
                    PM3音楽ファイルをご用意ください。
                    </p>
                    <p>
                    音楽のダウンロード方法はサポート外です。
                    </p>
                    <p>
                    お役立ち情報として載せていますが、より詳しく知りたい場合はご自身でリサーチお願いします。
                    </p>
                <div className="py-20">
                    <ReferenceAccordion />
                </div>
                <ScrollToTop />
        </section>
    );
};
