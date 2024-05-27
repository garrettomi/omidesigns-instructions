// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import HashLinkList from "../components/common/HashLinkList";

import stepOne from "../assets/step-1.png";
import stepTwo from "../assets/step-2.png";

import ReferenceAccordion from "../components/layout/Accordion";

import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import ContentImage from '../components/common/ContentImage';
import ScrollToTop from "../components/common/ScrollToTop";

export default function PC() {
    const items = [
        "画面の見方",
        "1.共有マーク",
        "2.素材",
        "3.テキスト",
        "4.アップロード",
        "基本の操作",
        "1.写真の置き換え",
        "2.前面・背面へ移動",
        "3.音楽について",
        "・音楽の確認方法",
        "・音楽の削除の仕方",
        "・音楽の置き換え",
        "・音楽のエフェクト（フェードイン、フェードアウト）",
        "4.ページの複製・追加",
        "5.アニメーション",
        "6.透明度",
        "7.ロック",
    ];

    return (
        <section className="page-format page-gutters">
            <Title text="【PC】基本操作" />
            <SubTitle text="【PC】基本操作" />
            <HashLinkList items={items} />
            {/* <ul>
                <li>
                    <HashLink to="#画面の見方">画面の見方</HashLink>
                </li>
                <li>
                    <HashLink to="#共有マーク">1.共有マーク</HashLink>
                </li>
                <li>
                    <HashLink to="#素材">2.素材</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">3.テキスト</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">4.アップロード</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">基本の操作</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">1.写真の置き換え</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">2.前面・背面へ移動</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">3.音楽について</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">・音楽の確認方法</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">・音楽の削除の仕方</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">・音楽の置き換え</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">・音楽のエフェクト（フェードイン、フェードアウト）</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">4.ページの複製・追加</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">5.アニメーション</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">6.透明度</HashLink>
                </li>
                <li>
                    <HashLink to="#テンプレートへのアクセス">7.ロック</HashLink>
                </li>
            </ul> */}
            <SubTitle idName="画面の見方" text="画面の見方" />
                <p>
                テンプレートを開くとまずこちらの画面が表示されます
                </p>
                <p>
                各アイコンについての説明は下記の通りです
                </p>
            <SubTitle idName="1.共有マーク" text="1.共有マーク" />
                <p>
                端末へのダウンロードやリンクの共有をすることが出来ます
                </p>
                <p>
                カップルで作業したい場合はこちらからリンクを共有ください
                </p>
            <ContentImage src={stepOne} alt="Step 1 for Canva Pro" />
            <SubTitle idName="2.素材" text="2.素材" />
            <p>
                Step 2: テンプレートにアクセス
            </p>
            <p>
                作成したアカウント情報でCanvaにサインイン、商品のテンプレートリンクを取得してください
            </p>
            <ContentImage src={stepTwo} alt="Step 2 for Canva Pro" />
            <div className="py-20">
                <ReferenceAccordion />
            </div>
            <ScrollToTop />
        </section>
    );
};
